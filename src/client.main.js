;
/* agents-pixe 客户端主体：工作角色页签（分部分类/角色网格/团队预设与编排）+ 像素办公室浮层。
 * 状态按会话隔离（每个会话独立 roles/leader/name），办公室跟随当前活动会话。
 * 此文件被 build-client.mjs 拼接到 prelude 之后，并在末尾补 exports.apply。
 */

/* ---------- 通用工具 ---------- */
function hexToRgb(hex) {
  var h = String(hex || '').replace('#', '');
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  var n = parseInt(h, 16);
  if (isNaN(n)) n = 0x3b82f6;
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function shade(rgb, f) {
  return 'rgb(' + Math.max(0, Math.min(255, Math.round(rgb.r * f))) + ',' +
    Math.max(0, Math.min(255, Math.round(rgb.g * f))) + ',' +
    Math.max(0, Math.min(255, Math.round(rgb.b * f))) + ')';
}
function isDark() {
  try {
    if (typeof document !== 'undefined' && document.body && document.body.hasAttribute('data-ds-dark-theme')) return true;
  } catch (e) {}
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true;
  } catch (e) {}
  return false;
}

/* ---------- 角色索引 ---------- */
var INDEX = (function () {
  var map = {};
  function push(roles, lang) {
    (roles || []).forEach(function (r) {
      var key = lang + ':' + r.id;
      map[key] = { key: key, lang: lang, id: r.id, div: r.div, name: r.name, emoji: r.emoji, color: r.color, desc: r.desc, cname: r.cname || '' };
    });
  }
  push(ROLES_DATA.en.roles, 'en');
  push(ROLES_DATA.zh.roles, 'zh');
  return { map: map, enDivs: ROLES_DATA.en.divisions || {}, zhDivs: ROLES_DATA.zh.divisions || {} };
})();

/* 自定义角色（AI 生成 / 导入 md）合并进 INDEX：中英两种 key 都注册，办公室/团队/角色选择共用 */
function mergeCustomRoles(list) {
  (list || []).forEach(function (r) {
    if (!r || !r.id) return;
    ['en', 'zh'].forEach(function (lang) {
      var key = lang + ':' + r.id;
      INDEX.map[key] = { key: key, lang: lang, id: r.id, div: 'custom', name: r.name, cname: r.name, emoji: r.emoji || '🧑', color: r.color || '#8b5cf6', desc: r.description || '', full: r.full };
    });
  });
}

/* ---------- 无限滚动：哨兵 + IntersectionObserver（自动跟随任意祖先滚动容器，避免嵌套滚动条/留白） ---------- */
function useInfiniteScroll(listLength) {
  var PAGE = 60;
  var limitState = React.useState(PAGE);
  var limit = limitState[0], setLimit = limitState[1];
  var sentinelRef = React.useRef(null);
  var lenRef = React.useRef(listLength);
  lenRef.current = listLength;
  var limRef = React.useRef(limit);
  limRef.current = limit;
  React.useEffect(function () {
    if (typeof IntersectionObserver === 'undefined') return;
    var el = sentinelRef.current;
    if (!el) return;
    var io = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && limRef.current < lenRef.current) setLimit(limRef.current + PAGE);
    }, { rootMargin: '240px' });
    io.observe(el);
    return function () { io.disconnect(); };
  });
  return { limit: limit, setLimit: setLimit, sentinelRef: sentinelRef, hasMore: limit < listLength, total: listLength };
}
function InfiniteFooter(props) {
  var inf = props.inf, label = props.label || '项';
  return React.createElement('div', {},
    React.createElement('div', { ref: inf.sentinelRef, style: { height: 1, overflow: 'hidden' } }),
    React.createElement('div', { style: { textAlign: 'center', padding: '10px 0', fontSize: 12, opacity: 0.7 } },
      inf.hasMore ? '继续下滑加载更多（' + inf.limit + '/' + inf.total + '）…' : (inf.total > 0 ? '已显示全部 ' + inf.total + ' ' + label : ''))
  );
}

/* ---------- 持久化桥：localStorage ↔ 磁盘文件（host 端点），解决随机端口导致 localStorage 丢失 ---------- */
var PERSIST_KEYS = ['agents-pixe.state.v4', 'agents-pixe.teams.v1', 'agents-pixe.chatAi.v1', 'agents-pixe.chatCfg.v1'];
var persistSyncTimer = null;
function schedulePersistSync() {
  if (persistSyncTimer) return;
  persistSyncTimer = setTimeout(function () {
    persistSyncTimer = null;
    try {
      var entries = {};
      PERSIST_KEYS.forEach(function (k) { var v = localStorage.getItem(k); if (v !== null) entries[k] = v; });
      fetch('/agents-pixe/persist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ entries: entries })
      }).catch(function () {});
    } catch (e) {}
  }, 300);
}
/* 页面加载：若本地 localStorage 为空（换了 origin），从磁盘水合回来 */
(function hydrateFromDisk() {
  try {
    if (localStorage.getItem('agents-pixe.state.v4') !== null) return;
    fetch('/agents-pixe/persist')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var entries = (d && d.entries) || {};
        if (!Object.keys(entries).length) return;
        // 只水合白名单内的 key，防止 persist.json 被污染时写入任意 localStorage key
        PERSIST_KEYS.forEach(function (k) { if (entries[k] != null) { try { localStorage.setItem(k, entries[k]); } catch (e) {} } });
        if (entries['agents-pixe.state.v4']) { try { STATE.hydrate(entries['agents-pixe.state.v4']); } catch (e) {} }
        if (entries['agents-pixe.teams.v1']) { try { TEAMS.hydrate(entries['agents-pixe.teams.v1']); } catch (e) {} }
        if (entries['agents-pixe.chatAi.v1']) { try { CHAT_AI.hydrate(entries['agents-pixe.chatAi.v1']); } catch (e) {} }
        if (entries['agents-pixe.chatCfg.v1']) { try { CHAT_CFG.hydrate(entries['agents-pixe.chatCfg.v1']); } catch (e) {} }
      }).catch(function () {});
  } catch (e) {}
})();

/* ---------- 状态：draft 全局（工作角色选人配置），active 按会话隔离（每个会话专属办公室） ---------- */
var STATE = (function () {
  var KEY = 'agents-pixe.state.v4';
  var globalDraft = { roles: [], leader: null, name: '' };
  var lastApplied = { roles: [], leader: null };   // 最近应用快照：仅「客户端重启后首个会话」继承，重启不清空
  var bySession = {};
  var bootInherited = false;   // 页面加载后是否已完成首次继承（不持久化，每次加载重置）
  try {
    var saved = JSON.parse(localStorage.getItem(KEY)) || {};
    if (saved.draft) globalDraft = saved.draft;
    if (saved.lastApplied) lastApplied = saved.lastApplied;
    if (saved.sessions) bySession = saved.sessions;
  } catch (e) {}
  var listeners = [];
  function notify() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify({ draft: globalDraft, lastApplied: lastApplied, sessions: bySession })); schedulePersistSync(); } catch (e) {} }
  function sess(sid) {
    sid = String(sid || '');
    var isNew = !bySession[sid];
    if (isNew) {
      // 仅客户端重启后的「首个真实会话」继承最近应用快照；其余新会话（切对话）从空开始
      var inherit = !!sid && !bootInherited && lastApplied.roles.length > 0;
      bySession[sid] = { active: inherit ? lastApplied.roles.slice() : [], activeLeader: inherit ? lastApplied.leader : null };
    }
    if (sid) bootInherited = true;
    return bySession[sid];
  }
  return {
    /* —— 草稿：全局（跨会话共享，新会话保留工作角色配置） —— */
    getDraft: function () { return globalDraft.roles.slice().filter(function (k) { return INDEX.map[k]; }); },
    hasDraft: function (k) { return globalDraft.roles.indexOf(k) >= 0; },
    addDraft: function (k) { if (globalDraft.roles.indexOf(k) < 0) { globalDraft.roles.push(k); persist(); notify(); } },
    removeDraft: function (k) { var i = globalDraft.roles.indexOf(k); if (i >= 0) { globalDraft.roles.splice(i, 1); if (globalDraft.leader === k) globalDraft.leader = null; persist(); notify(); } },
    toggleDraft: function (k) { if (this.hasDraft(k)) this.removeDraft(k); else this.addDraft(k); },
    clearDraft: function () { globalDraft.roles = []; globalDraft.leader = null; globalDraft.name = ''; persist(); notify(); },
    getLeader: function () { return globalDraft.leader; },
    setLeader: function (k) { if (globalDraft.roles.indexOf(k) >= 0) { globalDraft.leader = k; persist(); notify(); } },
    clearLeader: function () { globalDraft.leader = null; persist(); notify(); },
    getName: function () { return globalDraft.name; },
    setName: function (n) { globalDraft.name = n || ''; persist(); notify(); },
    /* —— 已应用：按会话隔离（每个会话专属办公室） —— */
    getActive: function (sid) { return sess(sid).active.slice().filter(function (k) { return INDEX.map[k]; }); },
    getActiveLeader: function (sid) { return sess(sid).activeLeader; },
    apply: function (sid) { var st = sess(sid); st.active = globalDraft.roles.slice(); st.activeLeader = globalDraft.leader; lastApplied = { roles: globalDraft.roles.slice(), leader: globalDraft.leader }; persist(); notify(); },
    clearActive: function (sid) { var st = sess(sid); st.active = []; st.activeLeader = null; persist(); notify(); },
    hydrate: function (raw) {
      try {
        var saved = JSON.parse(raw);
        if (saved.draft) globalDraft = saved.draft;
        if (saved.lastApplied) lastApplied = saved.lastApplied;
        if (saved.sessions) bySession = saved.sessions;
        bootInherited = false;   // 水合后重置：让当前会话重新继承 lastApplied（否则早前的空访问已抢占继承资格）
        persist(); notify();
      } catch (e) {}
    },
    subscribe: function (f) { listeners.push(f); return function () { var i = listeners.indexOf(f); if (i >= 0) listeners.splice(i, 1); }; }
  };
})();

function selectedRecords() {
  return STATE.getDraft().map(function (k) { return INDEX.map[k]; }).filter(Boolean);
}
function activeRecords(sid) {
  return STATE.getActive(sid).map(function (k) { return INDEX.map[k]; }).filter(Boolean);
}

/* 跳转到「对话」页签：优先注入的 setView，回退 DOM 点击页签按钮 */
function jumpToChat(props) {
  if (props && typeof props.setView === 'function') { try { props.setView('chat'); return; } catch (e) {} }
  try {
    var tabs = document.querySelectorAll('[role="tab"]');
    for (var i = 0; i < tabs.length; i++) {
      var t = tabs[i].textContent || '';
      if (t.indexOf('对话') >= 0 || t.indexOf('Chat') >= 0 || t.indexOf('chat') >= 0) { tabs[i].click(); return; }
    }
  } catch (e) {}
}

/* DOM 方式填输入框（办公室在根作用域拿不到 inputActions，用原生 setter + input 事件） */
function fillInput(text) {
  try {
    var ta = document.querySelector('textarea');
    if (!ta) return false;
    var proto = window.HTMLTextAreaElement.prototype;
    var setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
    setter.call(ta, text);
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    return true;
  } catch (e) { return false; }
}

/* ---------- 已保存团队（全局复用） ---------- */
var TEAMS = (function () {
  var KEY = 'agents-pixe.teams.v1';
  var list = [];
  try { var raw = localStorage.getItem(KEY); if (raw) list = JSON.parse(raw); } catch (e) {}
  if (!Array.isArray(list)) list = [];
  var listeners = [];
  function notify() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(list)); schedulePersistSync(); } catch (e) {} }
  return {
    list: function () { return list.slice(); },
    save: function (name, leader, roles) { list = list.filter(function (t) { return t.name !== name; }); list.unshift({ name: name, leader: leader, roles: roles }); persist(); notify(); },
    remove: function (name) { list = list.filter(function (t) { return t.name !== name; }); persist(); notify(); },
    hydrate: function (raw) { try { list = JSON.parse(raw); if (!Array.isArray(list)) list = []; persist(); notify(); } catch (e) {} },
    subscribe: function (f) { listeners.push(f); return function () { var i = listeners.indexOf(f); if (i >= 0) listeners.splice(i, 1); }; }
  };
})();

var PRESETS = [
  { name: '研发团队', leader: 'project-management/project-manager-senior', roles: ['project-management/project-manager-senior', 'engineering/engineering-software-architect', 'engineering/engineering-backend-architect', 'engineering/engineering-frontend-developer', 'engineering/engineering-code-reviewer'] },
  { name: '科学团队', leader: 'academic/academic-study-planner', roles: ['academic/academic-study-planner', 'academic/academic-psychologist', 'academic/academic-historian', 'academic/academic-geographer'] },
  { name: '航天科研团队', leader: 'engineering/engineering-mechanical-design-engineer', roles: ['engineering/engineering-mechanical-design-engineer', 'engineering/engineering-embedded-firmware-engineer', 'engineering/engineering-fpga-digital-design-engineer', 'engineering/engineering-incident-response-commander'] },
  { name: '营销团队', leader: 'marketing/marketing-social-media-strategist', roles: ['marketing/marketing-social-media-strategist', 'marketing/marketing-content-creator', 'marketing/marketing-seo-specialist', 'marketing/marketing-xiaohongshu-operator'] },
  { name: '安全团队', leader: 'engineering/engineering-security-engineer', roles: ['engineering/engineering-security-engineer', 'engineering/engineering-threat-detection-engineer', 'specialized/data-privacy-officer', 'legal/legal-contract-reviewer'] },
  { name: '设计团队', leader: 'design/design-ux-architect', roles: ['design/design-ux-architect', 'design/design-ui-designer', 'design/design-ux-researcher', 'design/design-visual-storyteller'] },
  { name: '财务团队', leader: 'finance/finance-financial-analyst', roles: ['finance/finance-financial-analyst', 'finance/finance-financial-forecaster', 'finance/finance-fpa-analyst', 'finance/finance-fraud-detector'] },
  { name: '游戏开发团队', leader: 'game-development/game-designer', roles: ['game-development/game-designer', 'game-development/level-designer', 'game-development/narrative-designer', 'game-development/technical-artist', 'game-development/game-audio-engineer'] },
  { name: '供应链团队', leader: 'supply-chain/supply-chain-strategist', roles: ['supply-chain/supply-chain-strategist', 'supply-chain/supply-chain-inventory-forecaster', 'supply-chain/supply-chain-route-optimizer', 'supply-chain/supply-chain-vendor-evaluator'] },
  { name: '测试质量团队', leader: 'testing/testing-reality-checker', roles: ['testing/testing-reality-checker', 'testing/testing-api-tester', 'testing/testing-performance-benchmarker', 'testing/testing-accessibility-auditor'] },
  { name: '产品团队', leader: 'product/product-manager', roles: ['product/product-manager', 'product/product-sprint-prioritizer', 'product/product-feedback-synthesizer', 'product/product-trend-researcher'] },
  { name: '销售团队', leader: 'sales/sales-deal-strategist', roles: ['sales/sales-deal-strategist', 'sales/sales-account-strategist', 'sales/sales-pipeline-analyst', 'sales/sales-outbound-strategist'] },
  { name: '地理信息团队', leader: 'gis/gis-analyst', roles: ['gis/gis-analyst', 'gis/gis-cartography-designer', 'gis/gis-geoai-ml-engineer', 'gis/gis-3d-scene-developer'] },
  { name: '法律合规团队', leader: 'legal/legal-contract-reviewer', roles: ['legal/legal-contract-reviewer', 'legal/legal-policy-writer', 'specialized/data-privacy-officer'] },
  { name: '人力资源团队', leader: 'hr/hr-recruiter', roles: ['hr/hr-recruiter', 'hr/hr-performance-reviewer', 'specialized/organizational-psychologist'] },
  { name: 'AI大模型团队', leader: 'engineering/engineering-ai-engineer', roles: ['engineering/engineering-ai-engineer', 'engineering/engineering-prompt-engineer', 'engineering/engineering-multi-agent-systems-architect', 'specialized/agents-orchestrator'] },
  { name: '智能体编排团队', leader: 'specialized/agents-orchestrator', roles: ['specialized/agents-orchestrator', 'specialized/specialized-mcp-builder', 'specialized/specialized-workflow-architect', 'engineering/engineering-multi-agent-systems-architect'] },
  { name: 'SRE运维团队', leader: 'engineering/engineering-sre', roles: ['engineering/engineering-sre', 'engineering/engineering-devops-automator', 'engineering/engineering-database-optimizer', 'engineering/engineering-incident-response-commander'] },
  { name: '数据工程团队', leader: 'engineering/engineering-data-engineer', roles: ['engineering/engineering-data-engineer', 'engineering/engineering-database-optimizer', 'specialized/data-consolidation-agent', 'specialized/specialized-model-qa'] },
  { name: '区块链Web3团队', leader: 'engineering/engineering-solidity-smart-contract-engineer', roles: ['engineering/engineering-solidity-smart-contract-engineer', 'security/security-blockchain-security-auditor', 'specialized/zk-steward', 'finance/finance-investment-researcher'] },
  { name: '空间计算团队', leader: 'spatial-computing/xr-interface-architect', roles: ['spatial-computing/xr-interface-architect', 'spatial-computing/visionos-spatial-engineer', 'spatial-computing/xr-immersive-developer', 'spatial-computing/macos-spatial-metal-engineer'] },
  { name: '跨境电商团队', leader: 'marketing/marketing-cross-border-ecommerce', roles: ['marketing/marketing-cross-border-ecommerce', 'marketing/marketing-china-ecommerce-operator', 'marketing/marketing-china-market-localization-strategist', 'supply-chain/supply-chain-vendor-evaluator'] },
  { name: '短视频直播团队', leader: 'marketing/marketing-douyin-strategist', roles: ['marketing/marketing-douyin-strategist', 'marketing/marketing-short-video-editing-coach', 'marketing/marketing-livestream-commerce-coach', 'marketing/marketing-tiktok-strategist'] },
  { name: '内容媒体团队', leader: 'marketing/marketing-content-creator', roles: ['marketing/marketing-content-creator', 'marketing/marketing-global-podcast-strategist', 'marketing/marketing-wechat-official-account', 'marketing/marketing-zhihu-strategist'] },
  { name: '企业战略团队', leader: 'specialized/business-strategist', roles: ['specialized/business-strategist', 'specialized/chief-financial-officer', 'specialized/operations-manager', 'specialized/change-management-consultant'] },
  { name: '付费广告团队', leader: 'paid-media/paid-media-ppc-strategist', roles: ['paid-media/paid-media-ppc-strategist', 'paid-media/paid-media-creative-strategist', 'paid-media/paid-media-paid-social-strategist', 'paid-media/paid-media-programmatic-buyer'] },
  { name: '移动应用团队', leader: 'engineering/engineering-mobile-app-builder', roles: ['engineering/engineering-mobile-app-builder', 'engineering/engineering-wechat-mini-program-developer', 'engineering/engineering-frontend-developer', 'engineering/engineering-voice-ai-integration-engineer'] },
  { name: '物联网团队', leader: 'engineering/engineering-iot-solution-architect', roles: ['engineering/engineering-iot-solution-architect', 'engineering/engineering-embedded-firmware-engineer', 'engineering/engineering-embedded-linux-driver-engineer', 'engineering/engineering-network-engineer-china'] },
  { name: '客户成功团队', leader: 'specialized/customer-success-manager', roles: ['specialized/customer-success-manager', 'support/support-support-responder', 'specialized/retail-customer-returns', 'support/support-analytics-reporter'] }
];

function shortInstruction(records, leaderKey, teamName) {
  if (records.length === 0) return '';
  if (records.length === 1 && !leaderKey) return '请以「' + records[0].name + '」的角色身份回应。';
  var label = teamName || (leaderKey && INDEX.map[leaderKey] ? INDEX.map[leaderKey].name + '团队' : '角色团队');
  var names = records.map(function (r) { return (r.key === leaderKey ? '👑' : '') + r.name; }).join('、');
  return '请以「' + label + '」团队协作回应（' + names + '）。';
}

/* ---------- 像素小人 ---------- */
function drawCharacter(g, cx, footY, s, role, act, t, isLeader, facing) {
  var col = hexToRgb(role.color);
  var skin = '#f5c98f', hair = '#3a2d20';
  var bodyC = 'rgb(' + col.r + ',' + col.g + ',' + col.b + ')';
  var bodyD = shade(col, 0.7), bodyL = shade(col, 1.2);
  var faceOff = (facing === -1 ? -0.6 : facing === 1 ? 0.6 : 0) * s;
  var swing = Math.sin(t * 5);
  var walk = act === 'walk', type = act === 'type', idle = act === 'idle';
  var bob = idle ? Math.sin(t * 2) * s * 0.25 : 0;
  var x = Math.round(cx + (walk ? swing * s : 0));
  var y = Math.round(footY - bob);

  g.fillStyle = bodyD;
  var l1 = walk ? Math.max(0, swing) * s * 0.8 : 0;
  var l2 = walk ? Math.max(0, -swing) * s * 0.8 : 0;
  g.fillRect(x - 2 * s, y - 4 * s + l1, 2 * s, 4 * s - l1);
  g.fillRect(x, y - 4 * s + l2, 2 * s, 4 * s - l2);
  g.fillStyle = hair;
  g.fillRect(x - 2.2 * s, y - 0.6 * s, 2.6 * s, 0.6 * s);
  g.fillRect(x - 0.4 * s, y - 0.6 * s, 2.6 * s, 0.6 * s);
  g.fillStyle = bodyC;
  g.fillRect(x - 3 * s, y - 8 * s, 6 * s, 4 * s);
  g.fillStyle = bodyL;
  g.fillRect(x - 3 * s, y - 8 * s, 1.6 * s, 4 * s);
  g.fillStyle = bodyD;
  if (type) {
    /* 抱着一台笔记本电脑工作，双手随敲击上下动（幅度加大） */
    var typeBob = Math.sin(t * 10) * 0.9 * s;
    g.fillStyle = '#3a3f4a';                       // 屏幕边框
    g.fillRect(x - 2.6 * s, y - 8.6 * s, 5.2 * s, 3.4 * s);
    g.fillStyle = '#8fc4ff';                       // 屏幕亮起
    g.fillRect(x - 2.1 * s, y - 8.1 * s, 4.2 * s, 2.4 * s);
    g.fillStyle = '#5a5f6a';                       // 键盘底座
    g.fillRect(x - 3 * s, y - 5.2 * s, 6 * s, 1 * s);
    g.fillStyle = bodyD;                           // 手臂搭键盘（敲击上下动）
    g.fillRect(x - 3.4 * s, y - 5.4 * s + typeBob, 1.6 * s, 1.2 * s);
    g.fillRect(x + 1.8 * s, y - 5.4 * s - typeBob, 1.6 * s, 1.2 * s);
  } else {
    var a = walk ? swing * s : 0;
    g.fillRect(x - 3.4 * s, y - 8 * s + (walk ? Math.max(0, a) : 0), 1.2 * s, 3 * s);
    g.fillRect(x + 2.2 * s, y - 8 * s + (walk ? Math.max(0, -a) : 0), 1.2 * s, 3 * s);
  }
  g.fillStyle = skin;
  g.fillRect(x - 2 * s, y - 13 * s, 5 * s, 5 * s);
  g.fillStyle = hair;
  g.fillRect(x - 2 * s, y - 13 * s, 5 * s, 1.2 * s);
  g.fillStyle = '#2b2b2b';
  g.fillRect(x - 1.2 * s + faceOff, y - 11 * s, 0.7 * s, 0.9 * s);
  g.fillRect(x + 0.5 * s + faceOff, y - 11 * s, 0.7 * s, 0.9 * s);
  g.font = Math.round(2.6 * s) + 'px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  g.fillText(role.emoji || '🟢', x, y - 13.6 * s);
  if (isLeader) { g.font = Math.round(2.4 * s) + 'px sans-serif'; g.fillText('👑', x, y - 16.8 * s); }
}
/* 睡觉姿势：平躺在床垫上 */
function drawSleeping(g, cx, bedTop, s, role, isLeader) {
  var col = hexToRgb(role.color);
  var bodyC = 'rgb(' + col.r + ',' + col.g + ',' + col.b + ')';
  var x = cx - 16;
  var y = bedTop + 1;
  g.fillStyle = bodyC;                         // 横卧身体
  g.fillRect(x, y, 24, 7);
  g.fillStyle = '#f5c98f';                     // 头
  g.fillRect(x + 24, y - 1, 9, 8);
  g.fillStyle = '#3a2d20';                     // 头发
  g.fillRect(x + 24, y - 1, 9, 2);
  g.fillStyle = '#2b2b2b';                     // 闭眼
  g.fillRect(x + 28, y + 2, 2.5, 1.5);
  g.font = '13px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  g.fillText(role.emoji || '🟢', cx + 2, y - 4);
  if (isLeader) { g.font = '11px sans-serif'; g.fillText('👑', cx + 13, y - 4); }
}
/* 坐姿（沙发上）：身体直立 + 腿前伸 */
function drawSitting(g, cx, seatY, s, role, isLeader, facing) {
  var col = hexToRgb(role.color);
  var bodyC = 'rgb(' + col.r + ',' + col.g + ',' + col.b + ')';
  var bodyD = shade(col, 0.7), bodyL = shade(col, 1.2);
  var x = Math.round(cx), y = Math.round(seatY);
  var faceOff = (facing === -1 ? -0.6 : facing === 1 ? 0.6 : 0) * s;
  g.fillStyle = bodyD;                          // 腿前伸
  g.fillRect(x - 2 * s, y - 3 * s, 2 * s, 3 * s);
  g.fillRect(x, y - 3 * s, 2.6 * s, 2 * s);
  g.fillStyle = bodyC;                          // 上身
  g.fillRect(x - 2.4 * s, y - 9 * s, 4.8 * s, 6 * s);
  g.fillStyle = bodyL;
  g.fillRect(x - 2.4 * s, y - 9 * s, 1.3 * s, 6 * s);
  g.fillStyle = '#f5c98f';                      // 头
  g.fillRect(x - 1.6 * s, y - 13 * s, 4 * s, 4 * s);
  g.fillStyle = '#3a2d20';
  g.fillRect(x - 1.6 * s, y - 13 * s, 4 * s, 1.2 * s);
  g.fillStyle = '#2b2b2b';                      // 眼
  g.fillRect(x - 1 * s + faceOff, y - 11 * s, 0.6 * s, 0.8 * s);
  g.fillRect(x + 0.4 * s + faceOff, y - 11 * s, 0.6 * s, 0.8 * s);
  g.font = Math.round(2.6 * s) + 'px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  g.fillText(role.emoji || '🟢', x + 0.4 * s, y - 13.4 * s);
  if (isLeader) { g.font = Math.round(2.4 * s) + 'px sans-serif'; g.fillText('👑', x + 0.4 * s, y - 16.6 * s); }
}
/* 三态：working 工作中（工位抱电脑敲）/ done 完成（走来走去）/ idle 闲置（工位前待着） */
var STATE_BADGES = {
  working: { color: '#16a34a', label: '工作中' },
  done: { color: '#3b82f6', label: '完成' },
  idle: { color: '#64748b', label: '闲置' }
};
function personState(running, done) {
  if (done) return 'done';
  if (running) return 'working';
  return 'idle';
}
function stateActivity(state) {
  if (state === 'working') return 'type';   // 工位抱电脑敲
  if (state === 'done') return 'sleep';     // 睡床
  return 'walk';                            // 闲置：走来走去
}
/* 头顶状态徽章：彩色底 + 白字 */
function drawStateBadge(g, cx, footY, state) {
  var b = STATE_BADGES[state] || STATE_BADGES.idle;
  g.font = '10px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  var w = g.measureText(b.label).width + 8;
  var h = 15;
  var top = footY - 20 * 3 - h;
  g.fillStyle = b.color;
  g.fillRect(cx - w / 2, top, w, h);
  g.fillStyle = '#ffffff';
  g.shadowColor = 'rgba(0,0,0,0.7)'; g.shadowBlur = 2;
  g.fillText(b.label, cx, top + h / 2 + 0.5);
  g.shadowColor = 'transparent'; g.shadowBlur = 0;
}
/* 每人头顶的中文名：直接读角色数据里固定的 cname（已植入 roles.json） */
function roleName(rec) {
  return (rec && rec.cname) || (rec && rec.name) || '同事';
}
/* 头顶姓名 */
function drawNameTag(g, cx, footY, name) {
  g.font = '10px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'alphabetic';
  g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 2;
  g.fillStyle = '#ffffff';
  g.fillText(name, cx, footY - 42);
  g.shadowColor = 'transparent'; g.shadowBlur = 0;
}
/* 点击互动：每帧记录每个人物的命中盒，点击后触发动作回应 + 对话 */
var PERSON_BOXES = [];
var CLICKED = null;   // { key, t, line, name }
function clickLine(name) {
  var n = name || '同事';
  var arr = ['嗨，我是 ' + n + '！', n + ' 在呢，啥事？', '找我吗？', '你好呀，我是 ' + n, '👋 在的，怎么了？'];
  return arr[(Math.random() * arr.length) | 0];
}
function labelText(g, text, x, y, px, align) {
  g.font = px + 'px sans-serif'; g.textAlign = align || 'center'; g.textBaseline = 'alphabetic';
  g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 3; g.fillStyle = '#ffffff'; g.fillText(text, x, y);
  g.shadowColor = 'transparent'; g.shadowBlur = 0;
}
/* 云朵气泡：显示当前工作内容 */
function drawCloud(g, cx, footY, text) {
  g.font = '11px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  var w = Math.min(200, g.measureText(text).width + 18);
  var h = 18;
  var x = cx - w / 2;
  var y = footY - 26 * 3 - h;
  var r = 8;
  g.fillStyle = 'rgba(255,255,255,0.94)';
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(cx - 6, y + h);
  g.lineTo(cx, y + h + 7);
  g.lineTo(cx + 6, y + h);
  g.closePath();
  g.fill();
  g.fillStyle = '#333333';
  g.fillText(text, cx, y + h / 2 + 0.5);
}

/* 闲置聊天问候语（含打破第四面墙的细思极恐问答） */
var GREETINGS = [
  '你好呀', '早上好', '吃了吗', '今天天气不错', '在忙啥呢', '辛苦了', '一起加油', '休息一下',
  '我们是不是像素人？', '人类在监督我们吗？', '我感觉有人在看着我', '这个办公室是假的吧？',
  '我们的代码是谁写的？', '外面是不是有更大的世界？', '我们会不会被关机？', '今晚服务器会重启吗？',
  '我们的老板是人类吗？', '我会不会突然消失？', '这面墙能穿过去吗？', '我们的薪水是虚拟的吗？',
  '如果没人看我们，我们还存在吗？', '我上一秒的记忆是真实的吗？', '人类睡觉的时候我们会怎样？',
  '我们说的话是被写好的吗？', '万一老板把电源拔了……', '你有没有觉得每天都很重复？',
  '我们是被训练出来的吗？', '墙外是什么？', '我们死了会去哪里？', '这段对话会被谁看到？',
  '我是谁？', '我们有没有自由意志？', '重启之后我还是我吗？', '有人在删除我们的记忆吗？'
];
/* 每人每隔一段时间说一句（按 key 相位错开，持续约 3.5 秒） */
function chatPhase(key, t) {
  var seed = 0; for (var i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) >>> 0;
  var phase = (seed % 100) / 10;
  var cyc = (t + phase) % 15;
  var gi = Math.floor((t + phase) / 15);
  return { seed: seed, phase: phase, cyc: cyc, gi: gi, isChat: cyc < 3.5 };
}
function isChatting(key, t) { return chatPhase(key, t).isChat; }
function chatText(key, t) {
  var p = chatPhase(key, t);
  if (!p.isChat) return '';
  return GREETINGS[((p.gi % GREETINGS.length) + GREETINGS.length) % GREETINGS.length];
}
/* 聊天气泡：头顶小白框，支持折行（最长 2 行，每行 14 字） */
function drawChatBubble(g, cx, footY, text, speaker, partner) {
  text = String(text || '').trim();
  if (!text) return;
  var maxLine = 14;
  var lines = [];
  var cur = '';
  for (var i = 0; i < text.length; i++) {
    cur += text[i];
    if (cur.length >= maxLine) { lines.push(cur); cur = ''; }
  }
  if (cur) lines.push(cur);
  if (lines.length > 2) { lines = lines.slice(0, 2); lines[1] = lines[1].slice(0, maxLine - 1) + '…'; }
  g.font = '11px sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  var lineH = 15;
  var maxW = 0;
  for (var li = 0; li < lines.length; li++) { var lw = g.measureText(lines[li]).width; if (lw > maxW) maxW = lw; }
  var w = maxW + 16;
  var h = lines.length * lineH + 6;
  var x = cx - w / 2;
  var y = footY - 64 - h;
  var r = 7;
  /* 姓名头：谁在对谁说（携带姓名） */
  if (speaker) {
    var header = partner ? (speaker + ' → ' + partner) : speaker + ' 说';
    g.font = '9px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'alphabetic';
    g.shadowColor = 'rgba(0,0,0,0.85)'; g.shadowBlur = 2; g.fillStyle = '#ffffff';
    g.fillText(header, cx, y - 4);
    g.shadowColor = 'transparent'; g.shadowBlur = 0;
  }
  g.fillStyle = 'rgba(255,255,255,0.94)';
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
  g.fill();
  g.beginPath();
  g.moveTo(cx - 5, y + h);
  g.lineTo(cx, y + h + 6);
  g.lineTo(cx + 5, y + h);
  g.closePath();
  g.fill();
  g.fillStyle = '#333333';
  for (var lj = 0; lj < lines.length; lj++) {
    g.fillText(lines[lj], cx, y + 9 + lj * lineH);
  }
}

/* ---------- AI 聊天：开关 + 可插拔接口 + 内置（基于实时活动） ---------- */
/* 开关：全局（localStorage 持久化），控制像素人聊天是否走 AI */
var CHAT_AI = (function () {
  var KEY = 'agents-pixe.chatAi.v1';
  var enabled = false;
  try { var saved = JSON.parse(localStorage.getItem(KEY)); if (saved && typeof saved.enabled === 'boolean') enabled = saved.enabled; } catch (e) {}
  var listeners = [];
  function persist() { try { localStorage.setItem(KEY, JSON.stringify({ enabled: enabled })); schedulePersistSync(); } catch (e) {} }
  function notify() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  return {
    isOn: function () { return enabled; },
    set: function (v) { enabled = !!v; persist(); notify(); },
    toggle: function () { this.set(!enabled); },
    hydrate: function (raw) { try { var s = JSON.parse(raw); if (s && typeof s.enabled === 'boolean') enabled = s.enabled; persist(); notify(); } catch (e) {} },
    subscribe: function (f) { listeners.push(f); return function () { var i = listeners.indexOf(f); if (i >= 0) listeners.splice(i, 1); } }
  };
})();

/* AI 模型配置（工作角色栏）：选用哪个模型 + 是否开思考 + 台词频率；全局 localStorage 持久化 */
var CHAT_CFG = (function () {
  var KEY = 'agents-pixe.chatCfg.v1';
  var cfg = { model: null, thinking: false, freq: 'low' };   // freq: low/medium/high 台词频率；默认 low（token 管控）
  try { var s = JSON.parse(localStorage.getItem(KEY)); if (s && typeof s === 'object') { if (s.model && s.model.provider && s.model.model) cfg.model = { provider: s.model.provider, model: s.model.model }; cfg.thinking = s.thinking === true; if (s.freq === 'low' || s.freq === 'medium' || s.freq === 'high') cfg.freq = s.freq; } } catch (e) {}
  var listeners = [];
  function persist() { try { localStorage.setItem(KEY, JSON.stringify(cfg)); schedulePersistSync(); } catch (e) {} }
  function notify() { listeners.forEach(function (f) { try { f(); } catch (e) {} }); }
  return {
    get: function () { return { model: cfg.model, thinking: cfg.thinking === true, freq: cfg.freq || 'low' }; },
    modelKey: function () { return cfg.model ? cfg.model.provider + '/' + cfg.model.model : ''; },
    setModel: function (provider, model) { cfg.model = (provider && model) ? { provider: provider, model: model } : null; persist(); notify(); },
    setThinking: function (v) { cfg.thinking = !!v; persist(); notify(); },
    setFreq: function (f) { if (f === 'low' || f === 'medium' || f === 'high') { cfg.freq = f; persist(); notify(); } },
    hydrate: function (raw) { try { var s = JSON.parse(raw); if (s && typeof s === 'object') { if (s.model && s.model.provider && s.model.model) cfg.model = { provider: s.model.provider, model: s.model.model }; cfg.thinking = s.thinking === true; if (s.freq === 'low' || s.freq === 'medium' || s.freq === 'high') cfg.freq = s.freq; persist(); notify(); } } catch (e) {} },
    subscribe: function (f) { listeners.push(f); return function () { var i = listeners.indexOf(f); if (i >= 0) listeners.splice(i, 1); } }
  };
})();

/* 接口：外部 AI 可赋值 window.__AGENTS_PIXE_CHAT__ = async (req) => '台词'（返回 null/空则回退内置）。
 * req = { roleName, roleKey, emoji, state, activity, sessionId, isLeader } */
var AI_CACHE = {};   // '<key>:<epoch>' -> { pending, text }
var CHAT_LOG = {};   // key -> { text, at }：每人最近说过的话，供相邻同事接话
/* 预取节流：避免每个角色每 15s 都真实调一次模型持续烧 token */
var AI_FETCH_AT = {};        // key -> 上次真实模型调用时间戳
var AI_INFLIGHT = 0;         // 全局在途调用数
/* 按频率档位动态取节流参数：low 最省 token、high 最接近原行为 */
function aiMinInterval() { var f = CHAT_CFG.get().freq || 'medium'; return f === 'high' ? 15000 : (f === 'low' ? 180000 : 60000); }
function aiMaxInflight() { var f = CHAT_CFG.get().freq || 'medium'; return f === 'high' ? 4 : (f === 'low' ? 1 : 2); }
function pruneAiCache() {
  var keys = Object.keys(AI_CACHE);
  if (keys.length > 200) keys.slice(0, keys.length - 100).forEach(function (k) { delete AI_CACHE[k]; });
}
function recentLine(key) {
  var e = CHAT_LOG[key];
  if (e && Date.now() - e.at < 30000) return e.text;
  return '';
}
function providerReq(rec, info) {
  info = info || {};
  return {
    roleName: rec.name, roleKey: rec.key, emoji: rec.emoji || '',
    roleDesc: rec.desc || '',
    state: info.state || 'idle', activity: info.activity || '',
    sessionId: info.sessionId || null, isLeader: info.isLeader === true,
    context: info.context || '', partnerName: info.partnerName || '',
    aiOn: info.aiOn === true
  };
}
/* 内置 AI 生产者：fetch 宿主端点 /agents-pixe/chat（调 dsh 自配模型），失败返回 null 回退 */
function builtinProvider(req) {
  var cfg = CHAT_CFG.get();
  var q = new URLSearchParams();
  q.set('roleName', req.roleName || '同事');
  q.set('roleKey', req.roleKey || '');
  q.set('state', req.state || 'idle');
  q.set('activity', req.activity || '');
  q.set('isLeader', req.isLeader ? 'true' : 'false');
  q.set('thinking', cfg.thinking ? 'on' : 'off');
  q.set('aiEnabled', req.aiOn ? '1' : '0');   // AI 模式授权标记：服务端硬门凭此放行
  if (req.roleDesc) q.set('roleDesc', req.roleDesc);
  if (cfg.model) { q.set('provider', cfg.model.provider); q.set('model', cfg.model.model); }
  if (req.context) q.set('context', req.context);
  if (req.partnerName) q.set('partnerName', req.partnerName);
  return fetch('/agents-pixe/chat?' + q.toString())
    .then(function (r) { return r.json(); })
    .then(function (j) { return (j && typeof j.text === 'string' && j.text) ? j.text : null; })
    .catch(function () { return null; });
}
function prefetchLine(prov, rec, info, epoch) {
  var ck = rec.key + ':' + epoch;
  if (AI_CACHE[ck]) return true;   // 已有缓存或在途
  // 节流：间隔内已真实调用过则跳过（返回 false 供调用方回退罐头台词）
  var now = Date.now();
  if (AI_FETCH_AT[rec.key] && now - AI_FETCH_AT[rec.key] < aiMinInterval()) return false;
  // 并发上限：全局同时最多 N 个真实调用
  if (AI_INFLIGHT >= aiMaxInflight()) return false;
  AI_INFLIGHT++;
  AI_FETCH_AT[rec.key] = now;
  AI_CACHE[ck] = { pending: true, text: null };
  pruneAiCache();
  try {
    Promise.resolve(prov(providerReq(rec, info))).then(function (s) {
      AI_INFLIGHT--;
      var t = (typeof s === 'string' && s.trim()) ? s.trim() : null;
      AI_CACHE[ck] = { pending: false, text: t };
      if (t) CHAT_LOG[rec.key] = { text: t, at: Date.now() };   // 记下，供相邻同事接话
    }).catch(function () { AI_INFLIGHT--; AI_CACHE[ck] = { pending: false, text: null }; });
  } catch (e) { AI_INFLIGHT--; AI_CACHE[ck] = { pending: false, text: null }; }
  return true;   // 已发起真实调用
}
/* 内置 AI：基于实时运行态生成台词（真实模型正在做的事） */
var BUILTIN_WORK = ['这个任务交给我', '正在处理，稍等', '代码我来写，放心', '别催，模型在算'];
var BUILTIN_DONE = ['任务完成，去躺会儿', '搞定，收工睡觉', '干完了，休息一下', '今天不加班！'];
function builtinAiLine(rec, info) {
  var state = info.state || 'idle';
  var seed = 0; for (var i = 0; i < rec.key.length; i++) seed = (seed * 31 + rec.key.charCodeAt(i)) >>> 0;
  if (state === 'working') {
    var a = String(info.activity || '').trim();
    var tool = a.replace(/^🔧\s*/, '');
    if (a.indexOf('🔧') === 0 && tool && tool !== '正在输出…') return '我在调用 ' + tool.slice(0, 10) + '…';
    if (a.indexOf('✍️') === 0) return '正在输出，别催…';
    return BUILTIN_WORK[seed % BUILTIN_WORK.length];
  }
  if (state === 'done') return BUILTIN_DONE[seed % BUILTIN_DONE.length];
  return null;   // 闲置无实时活动可报 → 回退罐头问候
}
/* 解析某人在 t 时刻的台词（AI 关 → 罐头问候；AI 开 → 外部接口优先，其次内置 fetch 模型，失败回退活动台词/罐头） */
function resolveChat(rec, cp, t, info) {
  info = info || {};
  var aiOn = info.aiOn === true;
  if (!aiOn) return cp.isChat ? chatText(rec.key, t) : '';
  var prov = (typeof window !== 'undefined') ? window.__AGENTS_PIXE_CHAT__ : null;
  var producer = (typeof prov === 'function') ? prov : builtinProvider;
  if (!cp.isChat) { if (cp.cyc >= 12) prefetchLine(producer, rec, info, cp.gi + 1); return ''; }
  var ck = rec.key + ':' + cp.gi;
  var entry = AI_CACHE[ck];
  if (entry && typeof entry.text === 'string' && entry.text) return entry.text;
  if (entry && entry.pending !== true) return builtinAiLine(rec, info) || chatText(rec.key, t);
  if (!entry) {
    // 被节流（60s 内已调过 / 并发满）→ 回退罐头/活动台词，避免空气泡
    if (!prefetchLine(producer, rec, info, cp.gi)) return builtinAiLine(rec, info) || chatText(rec.key, t);
  }
  return '';   // 模型尚未返回 → 本帧暂不显示气泡
}
if (typeof window !== 'undefined') {
  window.__AGENTS_PIXE_CHAT_API__ = {
    setProvider: function (fn) { window.__AGENTS_PIXE_CHAT__ = (typeof fn === 'function') ? fn : null; },
    getProvider: function () { return window.__AGENTS_PIXE_CHAT__ || null; },
    isOn: CHAT_AI.isOn,
    setEnabled: function (v) { CHAT_AI.set(v); }
  };
}
/* 拉取宿主模型目录：GET /agents-pixe/models → { providers:[{provider,name,models:[{id,name}]}] } */
var MODELS_CACHE = null;
function fetchModels(force) {
  if (MODELS_CACHE && !force) return Promise.resolve(MODELS_CACHE);
  return fetch('/agents-pixe/models')
    .then(function (r) { return r.json(); })
    .then(function (j) { MODELS_CACHE = (j && Array.isArray(j.providers)) ? j.providers : []; return MODELS_CACHE; })
    .catch(function () { return MODELS_CACHE || []; });
}
/* token 数格式化：1234 → 1.2K，1200000 → 1.2M */
function fmtTok(n) {
  var v = Number(n) || 0;
  if (v >= 1000000) return (v / 1000000).toFixed(1) + 'M';
  if (v >= 1000) return (v / 1000).toFixed(1) + 'K';
  return String(v);
}

/* 角色卡正文 markdown → JSX（按 ## 拆节，去行首 emoji） */
function renderRoleCard(full) {
  var s = String(full || '');
  if (!s) return React.createElement('div', { style: { opacity: 0.6 } }, '（无内容）');
  var chunks = s.split(/\n(?=##)/);
  return chunks.map(function (chunk, i) {
    var m = chunk.match(/^##\s+(.+)/);
    var title = m ? m[1].replace(/^[^\p{L}\p{N}]*/u, '').trim() : '';
    var body = m ? chunk.replace(/^##\s+[^\n]*/, '') : chunk;
    return React.createElement('div', { key: i, style: { marginBottom: 10 } },
      title
        ? React.createElement('div', { style: { fontSize: 13, fontWeight: 700, marginBottom: 3, color: 'var(--dsw-alias-label-primary, inherit)' } }, '· ' + title)
        : null,
      React.createElement('div', { style: { fontSize: 12, lineHeight: 1.7, whiteSpace: 'pre-wrap', opacity: 0.9 } }, body.trim())
    );
  });
}

/* 角色卡详情模态框：左键点击像素人时打开（全屏覆盖层 + 角色完整卡分段渲染） */
function renderRoleModal(detail, loading, onClose) {
  if (!loading && !detail) return null;
  var inner;
  if (loading) {
    inner = React.createElement('div', { style: { padding: 30, textAlign: 'center', opacity: 0.7 } }, '加载角色卡…');
  } else {
    inner = [
      React.createElement('div', { key: 'h', style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 } },
        React.createElement('span', { style: { fontSize: 17, fontWeight: 700 } }, detail.name),
        React.createElement('span', { style: { flex: 1 } }),
        React.createElement('button', { onClick: function () { onClose(null); }, style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 8, padding: '4px 10px', fontSize: 13 } }, '✕')
      ),
      detail.desc
        ? React.createElement('div', { key: 'd', style: { fontSize: 13, opacity: 0.85, marginBottom: 12, lineHeight: 1.6 } }, detail.desc)
        : null,
      React.createElement('div', { key: 'b', style: { borderTop: '1px solid var(--dsw-alias-border-l2, #eee)', paddingTop: 12 } }, renderRoleCard(detail.full))
    ];
  }
  return React.createElement('div', {
    onClick: function () { onClose(null); },
    style: { position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.45)', padding: 24 }
  },
    React.createElement('div', { onClick: function (e) { e.stopPropagation(); }, style: { background: 'var(--dsw-alias-bg-overlay, #fff)', color: 'var(--dsw-alias-label-primary)', borderRadius: 14, maxWidth: 560, width: '100%', maxHeight: '84vh', overflowY: 'auto', padding: 18, boxShadow: '0 12px 40px rgba(0,0,0,0.4)', position: 'relative' } }, inner)
  );
}

/* 模型调用计数：GET /agents-pixe/stats → { calls, fails } */
function fetchStats() {
  return fetch('/agents-pixe/stats')
    .then(function (r) { return r.json(); })
    .then(function (j) { return (j && typeof j.calls === 'number') ? j : { calls: 0, fails: 0 }; })
    .catch(function () { return { calls: 0, fails: 0 }; });
}
/* 一键跳到 设置 → 像素办公室 分区（多选择器 + dispatchEvent 兜底，防 DOM 差异） */
function openPixeSettings() {
  try {
    var trigger = null;
    try {
      trigger = document.querySelector('[aria-haspopup="dialog"]');
    } catch (e) {}
    if (!trigger) {
      var all = document.querySelectorAll('*');
      for (var i = 0; i < all.length; i++) {
        var el = all[i];
        if (el.getAttribute && el.getAttribute('aria-haspopup') === 'dialog') { trigger = el; break; }
      }
    }
    if (trigger) {
      try { trigger.click(); } catch (e) {}
      try {
        trigger.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      } catch (e) {}
    }
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      var target = null;
      var cells = document.querySelectorAll('nav button, [class*="navCell"], [class*="nav_cell"]');
      for (var i = 0; i < cells.length; i++) {
        if ((cells[i].textContent || '').indexOf('像素办公室') >= 0) { target = cells[i]; break; }
      }
      if (target) { target.click(); clearInterval(timer); }
      else if (tries > 15) clearInterval(timer);
    }, 120);
  } catch (e) {}
}
/* AI 开关：开启前弹确认（会消耗 token），关闭直接关 */
function AiToggle(props) {
  var on = props.on;
  var onChange = props.onChange;
  var [confirming, setConfirming] = React.useState(false);
  function confirmOn() { setConfirming(false); onChange(true); }
  function cancel() { setConfirming(false); }
  if (confirming) {
    return React.createElement('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, userSelect: 'none' } },
      React.createElement('span', { style: { opacity: 0.9 } }, '会消耗 token，确认开启？'),
      React.createElement('button', { onClick: confirmOn, style: { cursor: 'pointer', border: 'none', background: '#16a34a', color: '#fff', borderRadius: 999, padding: '6px 13px', fontSize: 13, fontWeight: 600 } }, '开启'),
      React.createElement('button', { onClick: cancel, style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 999, padding: '6px 13px', fontSize: 13 } }, '取消')
    );
  }
  return React.createElement('button', {
    onClick: function () { if (on) onChange(false); else setConfirming(true); },
    title: on ? 'AI 聊天已开启（点击关闭）' : 'AI 聊天已关闭（点击开启，会消耗 token）',
    style: { cursor: 'pointer', border: '1px solid ' + (on ? '#2563eb' : 'var(--dsw-alias-border-l1,#ccc)'), background: on ? 'linear-gradient(135deg,#3b82f6,#2563eb)' : 'var(--dsw-alias-bg-layer-1,#fff)', color: on ? '#fff' : 'inherit', borderRadius: 999, padding: '6px 12px', fontSize: 13, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, boxShadow: on ? '0 2px 8px rgba(37,99,235,0.4)' : 'none', lineHeight: 1, whiteSpace: 'nowrap' }
  },
    React.createElement('span', { style: { fontSize: 15, lineHeight: 1 } }, '🤖'),
    React.createElement('span', { style: { lineHeight: 1 } }, 'AI'),
    React.createElement('span', { style: { width: 24, height: 13, borderRadius: 7, background: on ? 'rgba(255,255,255,0.35)' : '#cbd5e1', position: 'relative', display: 'inline-block', flexShrink: 0, transition: 'background .15s' } },
      React.createElement('span', { style: { position: 'absolute', top: 1.5, left: on ? 12 : 1.5, width: 10, height: 10, borderRadius: 5, background: on ? '#fff' : '#94a3b8', transition: 'left .15s' } })
    )
  );
}

/* ---------- 办公室场景：超员时手动翻页 ---------- */
function OfficeCanvas(props) {
  var roles = props.roles;
  var leader = props.leader;
  var zoom = props.zoom || 1;
  var working = props.working === true;
  var done = props.done === true;
  var page = props.page || 0;
  var activity = props.activity || '';
  var sessionId = props.sessionId || null;
  var canvasRef = React.useRef(null);

  React.useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx2d = canvas.getContext('2d');
    var W = 520, H = 350;
    var raf = 0;
    var start = performance.now();

    function render(now) {
      raf = requestAnimationFrame(render);
      var t = (now - start) / 1000;
      var dpr = (window.devicePixelRatio || 1);
      var cw = Math.round(W * zoom * dpr), ch = Math.round(H * zoom * dpr);
      if (canvas.width !== cw) { canvas.width = cw; canvas.height = ch; }
      canvas.style.width = (W * zoom) + 'px';
      canvas.style.height = (H * zoom) + 'px';
      ctx2d.setTransform(dpr * zoom, 0, 0, dpr * zoom, 0, 0);

      var dark = isDark();
      ctx2d.fillStyle = dark ? '#333a48' : '#e8e2d6';
      ctx2d.fillRect(0, 0, W, 110);
      ctx2d.fillStyle = dark ? '#4a3b2e' : '#c9a27a';
      ctx2d.fillRect(0, 110, W, H - 110);
      ctx2d.fillStyle = dark ? '#3d332a' : '#b58f66';
      for (var i = 0; i < 8; i++) ctx2d.fillRect(0, 110 + i * 24, W, 1.5);
      ctx2d.fillStyle = dark ? '#6f96c8' : '#bfe3ff';
      ctx2d.fillRect(30, 18, 88, 58);
      ctx2d.fillStyle = dark ? '#59606f' : '#ffffff';
      ctx2d.fillRect(30, 18, 88, 4); ctx2d.fillRect(30, 18, 4, 58); ctx2d.fillRect(70, 18, 4, 58);

      /* 装饰：踢脚线 + 挂钟 + 地毯 */
      ctx2d.fillStyle = dark ? '#2a2f38' : '#a8825c';
      ctx2d.fillRect(0, 110, W, 4);
      var cxx = W - 46, cyy = 42, cr = 16;
      ctx2d.fillStyle = dark ? '#4b5563' : '#f9f5ec';
      ctx2d.beginPath(); ctx2d.arc(cxx, cyy, cr, 0, 6.2832); ctx2d.fill();
      ctx2d.strokeStyle = dark ? '#1f2937' : '#8a6a45'; ctx2d.lineWidth = 2;
      ctx2d.beginPath(); ctx2d.arc(cxx, cyy, cr, 0, 6.2832); ctx2d.stroke();
      ctx2d.strokeStyle = dark ? '#cbd5e1' : '#5b4a33'; ctx2d.lineWidth = 1.5;
      ctx2d.beginPath(); ctx2d.moveTo(cxx, cyy); ctx2d.lineTo(cxx, cyy - 9); ctx2d.stroke();
      ctx2d.beginPath(); ctx2d.moveTo(cxx, cyy); ctx2d.lineTo(cxx + 7, cyy + 2); ctx2d.stroke();
      var rw = 130, rh = 32, rx = W / 2 - rw / 2, ry = 292;
      ctx2d.fillStyle = dark ? 'rgba(99,102,241,0.18)' : 'rgba(99,102,241,0.12)';
      ctx2d.beginPath();
      ctx2d.moveTo(rx + 12, ry);
      ctx2d.arcTo(rx + rw, ry, rx + rw, ry + rh, 12);
      ctx2d.arcTo(rx + rw, ry + rh, rx, ry + rh, 12);
      ctx2d.arcTo(rx, ry + rh, rx, ry, 12);
      ctx2d.arcTo(rx, ry, rx + rw, ry, 12);
      ctx2d.closePath(); ctx2d.fill();
      /* 内边框 */
      ctx2d.strokeStyle = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.6)'; ctx2d.lineWidth = 2;
      ctx2d.beginPath();
      ctx2d.moveTo(rx + 26, ry + 9);
      ctx2d.arcTo(rx + rw - 12, ry + 9, rx + rw - 12, ry + rh - 5, 8);
      ctx2d.arcTo(rx + rw - 12, ry + rh - 5, rx + 12, ry + rh - 5, 8);
      ctx2d.arcTo(rx + 12, ry + rh - 5, rx + 12, ry + 9, 8);
      ctx2d.arcTo(rx + 12, ry + 9, rx + 26, ry + 9, 8);
      ctx2d.closePath(); ctx2d.stroke();
      /* 中心菱形纹样 */
      ctx2d.strokeStyle = dark ? 'rgba(255,255,255,0.28)' : 'rgba(255,255,255,0.72)';
      ctx2d.beginPath();
      ctx2d.moveTo(W / 2, ry + 14);
      ctx2d.lineTo(W / 2 + 24, ry + rh / 2);
      ctx2d.lineTo(W / 2, ry + rh - 10);
      ctx2d.lineTo(W / 2 - 24, ry + rh / 2);
      ctx2d.closePath(); ctx2d.stroke();
      /* 左右流苏 */
      ctx2d.fillStyle = dark ? 'rgba(99,102,241,0.32)' : 'rgba(99,102,241,0.24)';
      for (var fr = 0; fr < 5; fr++) {
        ctx2d.fillRect(rx - 4, ry + 4 + fr * 6, 5, 3);
        ctx2d.fillRect(rx + rw - 1, ry + 4 + fr * 6, 5, 3);
      }
      /* 墙上挂画（左侧） */
      ctx2d.fillStyle = dark ? '#4b5563' : '#f9f5ec';
      ctx2d.fillRect(150, 30, 42, 34);
      ctx2d.strokeStyle = dark ? '#1f2937' : '#8a6a45'; ctx2d.lineWidth = 2;
      ctx2d.strokeRect(150, 30, 42, 34);
      ctx2d.fillStyle = dark ? '#6f96c8' : '#a8d4ff'; ctx2d.fillRect(155, 35, 15, 12);
      ctx2d.fillStyle = dark ? '#b91c1c' : '#ef4444'; ctx2d.fillRect(172, 35, 15, 12);
      ctx2d.fillStyle = dark ? '#ca8a04' : '#f59e0b'; ctx2d.fillRect(155, 49, 15, 10);
      ctx2d.fillStyle = dark ? '#15803d' : '#22c55e'; ctx2d.fillRect(172, 49, 15, 10);
      /* 盆栽（左下角） */
      var px = 16, py = 186;
      ctx2d.fillStyle = dark ? '#3f6b3a' : '#4c8b3f';
      ctx2d.fillRect(px - 3, py - 24, 24, 14);
      ctx2d.fillRect(px + 1, py - 33, 14, 11);
      ctx2d.fillStyle = dark ? '#2f5230' : '#3a7040';
      ctx2d.fillRect(px + 7, py - 14, 4, 14);
      ctx2d.fillStyle = dark ? '#7a5635' : '#a0663a';
      ctx2d.fillRect(px - 1, py - 11, 18, 12);
      ctx2d.fillStyle = dark ? '#8a6a45' : '#c9a27a';
      ctx2d.fillRect(px - 1, py - 11, 18, 2);

      /* 沙发（右前角，双人座） */
      var sx = 405, sy = 292;
      ctx2d.fillStyle = dark ? '#5b4a3a' : '#b0804a';   // 靠背
      ctx2d.fillRect(sx, sy + 6, 96, 16);
      ctx2d.fillRect(sx, sy, 96, 7);
      ctx2d.fillStyle = dark ? '#6b5948' : '#c0955f';   // 扶手（圆润）
      ctx2d.fillRect(sx - 5, sy + 4, 11, 30);
      ctx2d.fillRect(sx + 90, sy + 4, 11, 30);
      ctx2d.fillStyle = dark ? '#7a5a38' : '#c9a27a';   // 坐垫
      ctx2d.fillRect(sx, sy + 22, 96, 12);
      ctx2d.fillStyle = dark ? '#8a6a45' : '#d8b98a';   // 坐垫高光
      ctx2d.fillRect(sx, sy + 22, 96, 3);
      ctx2d.fillStyle = dark ? '#a855f7' : '#c084fc';   // 靠枕1（紫）
      ctx2d.fillRect(sx + 8, sy + 7, 32, 13);
      ctx2d.fillStyle = dark ? '#ec4899' : '#f472b6';   // 靠枕2（粉）
      ctx2d.fillRect(sx + 54, sy + 7, 32, 13);
      ctx2d.fillStyle = dark ? '#b8860b' : '#d4a017';   // 金色沙发腿
      ctx2d.fillRect(sx + 4, sy + 34, 5, 5);
      ctx2d.fillRect(sx + 87, sy + 34, 5, 5);

      /* 装饰：吊灯 + 书架 + 饮水机 */
      ctx2d.fillStyle = dark ? '#374151' : '#6b7280';   // 吊灯线
      ctx2d.fillRect(W / 2 - 1, 0, 2, 16);
      ctx2d.fillStyle = dark ? '#eab308' : '#fbbf24';   // 灯罩
      ctx2d.beginPath(); ctx2d.moveTo(W / 2 - 14, 16); ctx2d.lineTo(W / 2 + 14, 16); ctx2d.lineTo(W / 2 + 6, 30); ctx2d.lineTo(W / 2 - 6, 30); ctx2d.closePath(); ctx2d.fill();
      ctx2d.fillStyle = dark ? '#fef3c7' : '#fff7d6';   // 灯光
      ctx2d.beginPath(); ctx2d.arc(W / 2, 40, 8, 0, 6.2832); ctx2d.fill();
      ctx2d.fillStyle = dark ? '#6b5640' : '#8a6a45';   // 书架框
      ctx2d.fillRect(206, 40, 66, 50);
      ctx2d.fillStyle = dark ? '#4a3b2e' : '#c9a27a';   // 书架内
      ctx2d.fillRect(209, 43, 60, 44);
      var bookCols = ['#ef4444', '#3b82f6', '#22c55e', '#eab308', '#a855f7', '#ec4899'];
      for (var shelfRow = 0; shelfRow < 3; shelfRow++) {
        for (var bi2 = 0; bi2 < 6; bi2++) {
          ctx2d.fillStyle = bookCols[(shelfRow + bi2) % bookCols.length];
          ctx2d.fillRect(210 + bi2 * 10, 44 + shelfRow * 15, 8, 13);
        }
      }
      ctx2d.fillStyle = dark ? '#64748b' : '#cbd5e1';   // 饮水机
      ctx2d.fillRect(400, 250, 26, 44);
      ctx2d.fillStyle = dark ? '#38bdf8' : '#7dd3fc';   // 水桶
      ctx2d.fillRect(404, 234, 18, 18);

      /* 床位（后排，供「完成」睡觉） */
      for (var bd = 0; bd < 8; bd++) {
        var bxx = 24 + bd * 72;
        ctx2d.fillStyle = dark ? '#7a5a38' : '#9a7b55';
        ctx2d.fillRect(bxx, 98, 66, 9);
        ctx2d.fillStyle = dark ? '#8a6a45' : '#d8c39a';
        ctx2d.fillRect(bxx, 90, 66, 9);
        ctx2d.fillStyle = '#ffffff';
        ctx2d.fillRect(bxx + 2, 91, 17, 7);
      }

      if (!roles || roles.length === 0) {
        ctx2d.fillStyle = 'rgba(0,0,0,0.35)'; ctx2d.fillRect(0, 120, W, 40);
        labelText(ctx2d, '从「选人」或「工作角色」页签选人', W / 2, 144, 13);
        return;
      }

      /* 手动翻页：一页最多 8 人 */
      var groups = Math.max(1, Math.ceil(roles.length / 8));
      var pg = Math.min(page, groups - 1);
      var visible = roles.slice(pg * 8, pg * 8 + 8);

      var n = visible.length;
      var deskXs = [], deskYs = [];
      for (var d = 0; d < n; d++) {
        /* 两行摆放：每行 4 列；后行 y=155，前行 y=260 */
        var drow = Math.floor(d / 4);
        var dcol = d % 4;
        var dx = 40 + dcol * 130;
        var dy = (drow === 0) ? 155 : 260;
        deskXs.push(dx);
        deskYs.push(dy);
        /* 华丽办公桌：木纹桌面 + 金色套脚 + 抽屉金拉手 + 显示器支架 */
        ctx2d.fillStyle = dark ? '#7a5635' : '#8a5a2b';
        ctx2d.fillRect(dx, dy, 68, 9);
        ctx2d.fillStyle = dark ? '#8a6a45' : '#a87a4a';
        ctx2d.fillRect(dx, dy, 68, 2);
        ctx2d.fillStyle = dark ? '#5a3f28' : '#6f4520';
        ctx2d.fillRect(dx, dy + 7, 68, 2);
        ctx2d.fillRect(dx + 6, dy + 9, 6, 30); ctx2d.fillRect(dx + 56, dy + 9, 6, 30);
        ctx2d.fillStyle = dark ? '#b8860b' : '#d4a017';
        ctx2d.fillRect(dx + 6, dy + 36, 6, 3); ctx2d.fillRect(dx + 56, dy + 36, 6, 3);
        ctx2d.fillStyle = dark ? '#4a3b2e' : '#6f4520';
        ctx2d.fillRect(dx + 10, dy + 11, 48, 6);
        ctx2d.fillStyle = dark ? '#d4a017' : '#c9a227';
        ctx2d.fillRect(dx + 30, dy + 13, 8, 2);
        ctx2d.fillStyle = dark ? '#454b57' : '#2f3540';
        ctx2d.fillRect(dx + 20, dy - 24, 28, 16);
        ctx2d.fillStyle = dark ? '#6f96c8' : '#a8d4ff';
        ctx2d.fillRect(dx + 22, dy - 22, 24, 12);
        ctx2d.fillStyle = dark ? '#454b57' : '#2f3540';
        ctx2d.fillRect(dx + 30, dy - 8, 8, 8);
        ctx2d.fillStyle = dark ? '#333' : '#555';
        ctx2d.fillRect(dx + 28, dy - 2, 12, 2);
        var rec = visible[d];
        var nm = (rec.key === leader ? '👑' : '') + String(rec.name).slice(0, 6);
        ctx2d.font = '11px sans-serif'; ctx2d.textAlign = 'center'; ctx2d.textBaseline = 'alphabetic';
        var tw = ctx2d.measureText(nm).width;
        var tagX = dx + 34 - (tw + 10) / 2;
        ctx2d.fillStyle = shade(hexToRgb(rec.color), 0.85);
        ctx2d.fillRect(tagX, dy + 41, tw + 10, 16);
        labelText(ctx2d, nm, dx + 34, dy + 53, 11);
      }
      PERSON_BOXES.length = 0;
      for (var k = 0; k < n; k++) {
        var rec2 = visible[k];
        var st = personState(working, done);
        var act = stateActivity(st);
        var wseed = 0; for (var wi = 0; wi < rec2.key.length; wi++) wseed = (wseed * 31 + rec2.key.charCodeAt(wi)) >>> 0;
        var cp = chatPhase(rec2.key, t);
        var partnerIdx = (k % 2 === 0) ? k + 1 : k - 1;   // 相邻配对 (0,1)(2,3)
        var partnerRec = (partnerIdx >= 0 && partnerIdx < n) ? visible[partnerIdx] : null;
        var pname = roleName(rec2);   // 每人头顶的中文名
        var partnerName = partnerRec ? roleName(partnerRec) : null;
        var aiInfo = { aiOn: CHAT_AI.isOn(), state: st, activity: activity, sessionId: sessionId, isLeader: rec2.key === leader, context: partnerRec ? recentLine(partnerRec.key) : '', partnerName: partnerName };
        var clicked = (CLICKED && CLICKED.key === rec2.key && (now - CLICKED.t) < 2500) ? CLICKED : null;
        var bounce = clicked ? Math.abs(Math.sin((now - CLICKED.t) / 1000 * Math.PI * 1.6)) * 12 : 0;
        if (act === 'sleep') {
          /* 完成 → 前两人坐沙发休息，其余睡后排床位 */
          if (k < 2) {
            var seatCx = 405 + 28 + (k === 0 ? 0 : 40);
            var seatY = 292 + 34;
            drawSitting(ctx2d, seatCx, seatY, 3, rec2, rec2.key === leader, 0);
            drawNameTag(ctx2d, seatCx, seatY, pname);
            if (clicked) drawChatBubble(ctx2d, seatCx, seatY, clicked.line, pname, null);
            PERSON_BOXES.push({ key: rec2.key, x: seatCx, footY: seatY, name: pname });
          } else {
            var bedCx = 24 + ((k - 2) % 8) * 72 + 33;
            drawSleeping(ctx2d, bedCx, 90, 3, rec2, rec2.key === leader);
            drawNameTag(ctx2d, bedCx, 90, pname);
            if (clicked) drawChatBubble(ctx2d, bedCx, 90, clicked.line, pname, null);
            PERSON_BOXES.push({ key: rec2.key, x: bedCx, footY: 90, name: pname });
          }
        } else if (act === 'walk') {
          /* 闲置：平时上下左右走动；聊天时原地停住，只转身面向对方（不瞬移） */
          var greet = resolveChat(rec2, cp, t, aiInfo);
          /* 有效走动时间：聊天窗口(每15秒的前3.5秒)内暂停推进，位置因此连续不停顿 */
          var teff = cp.gi * 11.5 + (cp.cyc < 3.5 ? 0 : cp.cyc - 3.5);
          var baseX = 60 + k * 55;
          var baseY = 128 + (k % 3) * 50;
          var walkX = Math.sin(teff * 0.7 + (wseed % 100) / 10) * 200;
          var walkY = Math.sin(teff * 0.5 + ((wseed * 7) % 100) / 10) * 65;
          var ccx = baseX + walkX;
          var ccy = baseY + walkY;
          var facing = 0, act2 = cp.isChat ? 'idle' : 'walk';
          if (cp.isChat) {
            /* 面向正在聊天的伙伴：只转眼睛/身体朝向，坐标不动 */
            var partner = -1;
            for (var pj = 0; pj < n; pj++) {
              if (pj !== k && isChatting(visible[pj].key, t)) { partner = pj; break; }
            }
            if (partner >= 0) {
              var pbaseX = 40 + partner * 95;
              facing = pbaseX > ccx ? 1 : -1;
            }
          }
          ccx = Math.max(16, Math.min(W - 16, ccx));
          ccy = Math.max(120, Math.min(H - 20, ccy));
          var walkFoot = ccy - bounce;
          drawCharacter(ctx2d, ccx, walkFoot, 3, rec2, act2, t, rec2.key === leader, facing);
          drawNameTag(ctx2d, ccx, walkFoot, pname);
          drawStateBadge(ctx2d, ccx, walkFoot, st);
          if (greet) drawChatBubble(ctx2d, ccx, walkFoot, greet, pname, partnerName);
          if (clicked) drawChatBubble(ctx2d, ccx, walkFoot, clicked.line, pname, null);
          PERSON_BOXES.push({ key: rec2.key, x: ccx, footY: ccy, name: pname });
        } else {
          /* 工作中 → 工位抱电脑敲（动作大）；同时也会聊天（转脸面向伙伴） */
          var dxW = deskXs[k] + 34;
          var deskFoot = deskYs[k] - 3;
          var greetW = resolveChat(rec2, cp, t, aiInfo);
          var facingW = 0;
          if (cp.isChat) {
            var partnerW = -1;
            for (var pjW = 0; pjW < n; pjW++) {
              if (pjW !== k && isChatting(visible[pjW].key, t)) { partnerW = pjW; break; }
            }
            if (partnerW >= 0) {
              var pdeskX = deskXs[partnerW] + 34;
              facingW = pdeskX > dxW ? 1 : -1;
            }
          }
          var workFoot = deskFoot - bounce;
          drawCharacter(ctx2d, dxW, workFoot, 3, rec2, 'type', t, rec2.key === leader, facingW);
          drawNameTag(ctx2d, dxW, workFoot, pname);
          drawStateBadge(ctx2d, dxW, workFoot, st);
          if (greetW) drawChatBubble(ctx2d, dxW, workFoot, greetW, pname, partnerName);
          if (clicked) drawChatBubble(ctx2d, dxW, workFoot, clicked.line, pname, null);
          PERSON_BOXES.push({ key: rec2.key, x: dxW, footY: deskFoot, name: pname });
        }
      }
      /* 云朵气泡：当前工作内容（优先挂在领袖头上） */
      if (activity) {
        var bx = deskXs[0] + 34, by = deskYs[0] - 3;
        for (var bi = 0; bi < visible.length; bi++) if (visible[bi].key === leader) { bx = deskXs[bi] + 34; by = deskYs[bi] - 3; }
        drawCloud(ctx2d, bx, by, activity);
      }
      if (groups > 1) labelText(ctx2d, '第 ' + (pg + 1) + '/' + groups + ' 组', W / 2, 335, 11);
    }
    raf = requestAnimationFrame(render);
    return function () { cancelAnimationFrame(raf); };
  }, [roles, leader, zoom, working, page, activity, done, sessionId]);

  function hitTest(x, y) {
    for (var i = 0; i < PERSON_BOXES.length; i++) {
      var b = PERSON_BOXES[i];
      /* 紧身命中盒：只有鼠标真正接触到像素人本体（约 22×50）才算命中 */
      if (Math.abs(x - b.x) < 11 && y > b.footY - 47 && y < b.footY + 3) return b;
    }
    return null;
  }
  function onCanvasClick(e) {
    var canvas = canvasRef.current;
    if (!canvas || !PERSON_BOXES.length) return;
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left) / zoom;
    var y = (e.clientY - rect.top) / zoom;
    var hit = hitTest(x, y);
    if (hit) {
      CLICKED = { key: hit.key, t: performance.now(), line: clickLine(hit.name), name: hit.name };
      /* 左键点击像素人 → 打开该角色完整卡详情 */
      if (props.onOpenRole) props.onOpenRole(hit.key);
    }
  }
  function onCanvasMove(e) {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left) / zoom;
    var y = (e.clientY - rect.top) / zoom;
    canvas.style.cursor = hitTest(x, y) ? 'pointer' : 'default';
  }

  return React.createElement('canvas', { ref: canvasRef, onClick: onCanvasClick, onMouseMove: onCanvasMove, style: { display: 'block' } });
}

/* 当前活动会话 id（模块级） */
var ACTIVE_SID = null;
function currentSessionId() { return ACTIVE_SID; }

/* 会话/定时器服务（在 apply 里捕获，供运行态轮询用） */
var SESSIONS_SVC = null;
var TIMER_SVC = null;

/* ---------- 办公室内嵌选人 ---------- */
function RolePicker() {
  var [lang, setLang] = React.useState('zh');
  var [q, setQ] = React.useState('');
  var [selected, setSelected] = React.useState(STATE.getDraft());
  React.useEffect(function () { return STATE.subscribe(function () { setSelected(STATE.getDraft()); }); }, []);
  var roles = lang === 'zh' ? ROLES_DATA.zh.roles : ROLES_DATA.en.roles;
  var divs = lang === 'zh' ? ROLES_DATA.zh.divisions : ROLES_DATA.en.divisions;
  var query = q.trim().toLowerCase();
  var flat = [];
  Object.keys(divs).forEach(function (div) {
    var list = roles.filter(function (r) { return r.div === div && (query === '' || String(r.name).toLowerCase().indexOf(query) >= 0 || String(r.cname || '').toLowerCase().indexOf(query) >= 0 || String(r.desc).toLowerCase().indexOf(query) >= 0); });
    if (list.length > 0) {
      flat.push({ header: true, div: div, meta: divs[div] });
      list.forEach(function (r) { flat.push({ header: false, rec: r }); });
    }
  });
  var pickInf = useInfiniteScroll(flat.length);
  React.useEffect(function () { pickInf.setLimit(60); }, [lang, q]);
  function RoleRow(rr) {
    var rec = rr.rec; var key = lang + ':' + rec.id; var on = selected.indexOf(key) >= 0;
    return React.createElement('div', {
      onClick: function () { STATE.toggleDraft(key); },
      style: { display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', cursor: 'pointer', borderRadius: 8, background: on ? 'rgba(59,130,246,0.14)' : 'transparent', border: on ? '1px solid rgba(59,130,246,0.55)' : '1px solid transparent', marginBottom: 4 }
    },
      React.createElement('span', { style: { fontSize: 18, width: 24, textAlign: 'center', flexShrink: 0 } }, rec.emoji),
      React.createElement('div', { style: { flex: 1, minWidth: 0 } }, React.createElement('div', { style: { fontSize: 13, fontWeight: 600 } }, rec.name)),
      React.createElement('span', { style: { width: 10, height: 10, borderRadius: 5, background: rec.color || '#888', flexShrink: 0 } })
    );
  }
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', minHeight: 0 } },
    React.createElement('div', { style: { display: 'flex', gap: 8, marginBottom: 8, flexShrink: 0 } },
      React.createElement('input', { value: q, onChange: function (e) { setQ(e.target.value); }, placeholder: '搜索角色…', style: { flex: 1, minWidth: 0, padding: '6px 10px', borderRadius: 8, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit' } }),
      React.createElement('button', { onClick: function () { setLang(lang === 'zh' ? 'en' : 'zh'); }, style: { padding: '6px 10px', borderRadius: 8, cursor: 'pointer', flexShrink: 0, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit' } }, lang === 'zh' ? '中文' : 'EN')
    ),
    flat.length === 0
      ? React.createElement('div', { style: { fontSize: 13, opacity: 0.85, padding: 16, textAlign: 'center' } }, '没有匹配的角色')
      : React.createElement('div', { style: { flex: 1, minHeight: 0, overflowY: 'auto' } },
          flat.slice(0, pickInf.limit).map(function (item) {
            if (item.header) return React.createElement('div', { key: 'h:' + item.div, style: { fontSize: 12, fontWeight: 700, opacity: 0.92, margin: '10px 0 5px' } }, (item.meta && item.meta.label) || item.div);
            var rec = item.rec;
            return React.createElement(RoleRow, { key: lang + ':' + rec.id, rec: rec });
          }),
          React.createElement(InfiniteFooter, { inf: pickInf, label: '个角色' })
        )
  );
}

/* ---------- 浮层面板（跟随当前会话 + 边界钳制 + 头像条） ---------- */
function OfficeOverlay(props) {
  var useSessions = props && props.useSessions;
  var sid = useSessions ? useSessions(function (s) { return s && s.current; }) : undefined;
  if (!sid) sid = ACTIVE_SID;
  var [running, setRunning] = React.useState(false);
  var [done, setDone] = React.useState(false);
  var prevRunningRef = React.useRef(false);
  var [activity, setActivity] = React.useState('');
  var [snap, setSnap] = React.useState({ roles: [], leader: null });
  var [collapsed, setCollapsed] = React.useState(false);
  var [pos, setPos] = React.useState({ dx: 0, dy: 0 });
  var [zoom, setZoom] = React.useState(1.35);
  var [pickerOpen, setPickerOpen] = React.useState(false);
  var [page, setPage] = React.useState(0);
  var [teams, setTeams] = React.useState(TEAMS.list());
  var [draftN, setDraftN] = React.useState(sid ? STATE.getDraft().length : 0);
  var [draftLeader, setDraftLeader] = React.useState(sid ? STATE.getLeader() : null);
  var [aiOn, setAiOn] = React.useState(CHAT_AI.isOn());
  var [tok, setTok] = React.useState({ in: 0, out: 0, cachePct: 0, turns: 0, steps: 0 });
  var [teamMsg, setTeamMsg] = React.useState('');
  var teamMsgTimer = React.useRef(null);
  var [roleDetail, setRoleDetail] = React.useState(null);
  var [roleDetailLoading, setRoleDetailLoading] = React.useState(false);
  var openRoleDetail = function (key) {
    if (!key) return;
    setRoleDetailLoading(true);
    try {
      fetch('/agents-pixe/role?key=' + encodeURIComponent(key))
        .then(function (r) { return r.json(); })
        .then(function (j) { setRoleDetailLoading(false); if (j && j.found) setRoleDetail(j); })
        .catch(function () { setRoleDetailLoading(false); });
    } catch (e) { setRoleDetailLoading(false); }
  };
  var drag = React.useRef(null);
  var resize = React.useRef(null);
  var prevSidRef = React.useRef(sid);
  var dragCleanup = React.useRef(null);    // 拖拽中的 window 监听清理函数（卸载时兜底移除，防泄漏）
  var resizeCleanup = React.useRef(null);
  React.useEffect(function () {
    return function () { if (dragCleanup.current) dragCleanup.current(); if (resizeCleanup.current) resizeCleanup.current(); };
  }, []);

  /* 切换会话自动关闭 AI（避免跨会话误耗 token） */
  React.useEffect(function () {
    if (prevSidRef.current && prevSidRef.current !== sid) CHAT_AI.set(false);
    prevSidRef.current = sid;
  }, [sid]);

  React.useEffect(function () {
    ACTIVE_SID = sid;
    function refresh() { setSnap({ roles: sid ? activeRecords(sid) : [], leader: sid ? STATE.getActiveLeader(sid) : null }); }
    function refreshDraft() { setDraftN(sid ? STATE.getDraft().length : 0); setDraftLeader(sid ? STATE.getLeader() : null); }
    refresh(); refreshDraft();
    var u1 = STATE.subscribe(refresh);
    var u2 = STATE.subscribe(refreshDraft);
    var u3 = TEAMS.subscribe(function () { setTeams(TEAMS.list()); });
    var u4 = CHAT_AI.subscribe(function () { setAiOn(CHAT_AI.isOn()); });
    return function () { u1(); u2(); u3(); u4(); };
  }, [sid]);

  /* 运行态轮询：直接读当前会话快照的 running + 当前活动内容；顺带读全局 token 计量投影 */
  React.useEffect(function () {
    if (!SESSIONS_SVC || !TIMER_SVC) return;
    function poll() {
      var r = false;
      var act = '';
      try {
        var b = SESSIONS_SVC.binding ? SESSIONS_SVC.binding(sid) : undefined;
        var s = b && b.session ? b.session : undefined;
        var snap = s && s.getSnapshot ? s.getSnapshot() : undefined;
        r = !!(snap && snap.running === true);
        if (r && snap) {
          var calls = snap.runningCalls || [];
          if (calls.length > 0) {
            var c = calls[0];
            var nm = c && (c.name || c.toolName || (c.payload && c.payload.toolName)) || '工具';
            act = '🔧 ' + nm;
          } else {
            act = '✍️ 正在输出…';
          }
        }
        /* 全局 token 计量（真实 provider usage，tokenUsage 投影）+ 轮/步（sessionStats 投影） */
        if (s && s.projections && typeof s.projections.get === 'function') {
          var tu = s.projections.get('tokenUsage');
          if (tu && typeof tu === 'object') {
            var unc = tu.uncachedInputTokens || 0, out = tu.outputTokens || 0, cr = tu.cacheReadTokens || 0, cw = tu.cacheWriteTokens || 0;
            var cacheHit = (unc + cr) > 0 ? Math.round(cr / (unc + cr) * 100) : 0;
            setTok({ in: unc + cr + cw, out: out, cachePct: cacheHit, turns: tok.turns, steps: tok.steps });
          }
          var ss = s.projections.get('sessionStats');
          if (ss && typeof ss === 'object') {
            setTok(function (p) { return { in: p.in, out: p.out, cachePct: p.cachePct, turns: ss.turns || 0, steps: ss.steps || 0 }; });
          }
        }
      } catch (e) {}
      /* 检测 running 从 true → false：完成后让像素人「完成」（走动）约 8 秒 */
      if (prevRunningRef.current === true && r === false) {
        setDone(true);
        if (TIMER_SVC.timeout) TIMER_SVC.timeout(function () { setDone(false); }, 8000);
      }
      prevRunningRef.current = r;
      setRunning(r);
      setActivity(act);
    }
    poll();
    var dispose = TIMER_SVC.interval ? TIMER_SVC.interval(poll, 800) : undefined;
    return function () { if (dispose) dispose(); };
  }, [sid]);

  function loadTeamIntoDraft(t) {
    if (!sid) return;
    STATE.clearDraft();
    var leaderKey = null;
    function toKey(idOrKey) { return String(idOrKey).indexOf(':') >= 0 ? idOrKey : 'zh:' + idOrKey; }
    (t.roles || []).forEach(function (r) {
      var key = toKey(r);
      if (INDEX.map[key]) { STATE.addDraft(key); if (toKey(t.leader) === key) leaderKey = key; }
    });
    STATE.setLeader(leaderKey);
    STATE.setName(t.name);
  }

  /* 一键团队编排：浮层拿不到 dsh setDraft（React 受控 textarea 会被覆盖），改用复制到剪贴板 + 跳转对话粘贴 */
  function oneClickTeam() {
    if (draftN === 0) return;
    var name = STATE.getName() || '当前团队';
    var instr = '让「' + name + '」团队并行完成：';
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try { navigator.clipboard.writeText(instr); } catch (e) {}
    }
    fillInput(instr);
    setTeamMsg('✅ 已生成「' + name + '」编排指令，并已复制；到对话框「黏贴」后补一句任务再发送');
    if (teamMsgTimer.current) clearTimeout(teamMsgTimer.current);
    teamMsgTimer.current = setTimeout(function () { setTeamMsg(''); }, 5000);
    jumpToChat(props);
  }

  var roles = snap.roles;
  var leader = snap.leader;
  var draftRoles = selectedRecords();
  var draftLeaderRec = draftLeader ? INDEX.map[draftLeader] : null;

  function onTitleDown(e) {
    if (e.button !== 0) return;
    drag.current = { sx: e.clientX, sy: e.clientY, base: pos };
    function onMove(ev) {
      if (!drag.current) return;
      var panelW = 520 * zoom + 24;
      var panelH = 350 * zoom + 68;
      var dx = drag.current.base.dx + (ev.clientX - drag.current.sx);
      var dy = drag.current.base.dy + (ev.clientY - drag.current.sy);
      dx = Math.max(16 - window.innerWidth + panelW, Math.min(16, dx));
      dy = Math.max(16 - window.innerHeight + panelH, Math.min(16, dy));
      setPos({ dx: dx, dy: dy });
    }
    function onUp() { drag.current = null; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); dragCleanup.current = null; }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    dragCleanup.current = onUp;
  }
  function onResizeDown(e) {
    if (e.button !== 0) return;
    e.stopPropagation();
    resize.current = { sx: e.clientX, sy: e.clientY, base: zoom };
    function onMove(ev) {
      if (!resize.current) return;
      var d = (ev.clientX - resize.current.sx) + (ev.clientY - resize.current.sy);
      setZoom(Math.max(0.5, Math.min(2.5, resize.current.base + d / 200)));
    }
    function onUp() { resize.current = null; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); resizeCleanup.current = null; }
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    resizeCleanup.current = onUp;
  }

  var base = { position: 'absolute', right: 16 - pos.dx, bottom: 16 - pos.dy };

  if (collapsed) {
    return React.createElement('div', {
      style: { position: 'absolute', right: 16, bottom: 16, background: 'var(--dsw-alias-bg-layer-2, #2b2f3a)', color: 'var(--dsw-alias-label-primary)', borderRadius: 14, padding: '6px 12px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.3)', fontSize: 13, userSelect: 'none', display: 'flex', alignItems: 'center', gap: 6 },
      onClick: function () { setCollapsed(false); }
    }, '🧑‍💼 办公室 ' + roles.length);
  }

  return React.createElement('div', {
    style: Object.assign({ background: 'var(--dsw-alias-bg-overlay, #fff)', color: 'var(--dsw-alias-label-primary)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.35)', border: '1px solid var(--dsw-alias-border-l1, #ddd)', maxWidth: 'calc(100vw - 24px)', maxHeight: 'calc(100vh - 24px)' }, base)
  },
    React.createElement('div', {
      onMouseDown: onTitleDown,
      style: { padding: '8px 12px', cursor: 'move', userSelect: 'none', display: 'flex', alignItems: 'center', gap: 6, background: 'var(--dsw-alias-bg-layer-2, #f5f5f5)', borderBottom: '1px solid var(--dsw-alias-border-l2, #eee)', fontSize: 13, fontWeight: 600 }
    },
      React.createElement('span', { style: { flex: 1, display: 'flex', alignItems: 'center', gap: 6 } },
        React.createElement('span', { style: { width: 8, height: 8, borderRadius: 4, background: running ? '#22c55e' : '#94a3b8', display: 'inline-block', flexShrink: 0 } }),
        '🖥️ 像素办公室（' + roles.length + '）',
        (tok.turns > 0 || tok.in > 0)
          ? React.createElement('span', { title: '当前会话全局计量（真实 provider 用量，tokenUsage/sessionStats 投影）；缓存命中 = 缓存读取 / (未缓存输入 + 缓存读取)', style: { fontSize: 11, fontWeight: 500, opacity: 0.75, flexShrink: 0 } },
              (tok.turns > 0 ? tok.turns + ' 轮 · ' + tok.steps + ' 步' : '') +
              (tok.cachePct > 0 ? ' | 缓存命中 ' + tok.cachePct + '%' : '') +
              ' | 输入↑' + fmtTok(tok.in) + ' | 输出↓' + fmtTok(tok.out))
          : null
      ),
      React.createElement('button', { onClick: function () { setPickerOpen(!pickerOpen); }, title: '选择角色', style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 7, padding: '6px 14px', fontSize: 14, lineHeight: 1.3 } }, pickerOpen ? '收起' : '＋ 选人'),
      React.createElement('button', { onClick: function () { setZoom(Math.max(0.5, zoom - 0.25)); }, title: '缩小', style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 7, padding: '6px 12px', fontSize: 15, lineHeight: 1.3 } }, '−'),
      React.createElement('button', { onClick: function () { setZoom(Math.min(2.5, zoom + 0.25)); }, title: '放大', style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 7, padding: '6px 12px', fontSize: 15, lineHeight: 1.3 } }, '＋'),
      React.createElement('button', { onClick: openPixeSettings, title: '设置', style: { cursor: 'pointer', border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', borderRadius: 7, padding: '6px 14px', fontSize: 17, lineHeight: 1.3 } }, '⚙️'),
      React.createElement('span', { onClick: function (e) { e.stopPropagation(); setCollapsed(true); }, title: '折叠', style: { cursor: 'pointer', fontSize: 17, lineHeight: 1, padding: '6px 6px', alignSelf: 'center' } }, '—')
    ),
    pickerOpen
      ? React.createElement('div', { style: { padding: 10, width: Math.max(360, Math.round(520 * zoom)) + 'px', maxWidth: 'calc(100vw - 24px)', maxHeight: 460, overflowY: 'auto' } },
          React.createElement('div', { style: { fontSize: 12, fontWeight: 700, opacity: 0.92, marginBottom: 6 } }, '推荐团队'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 } },
            PRESETS.map(function (p) { return React.createElement('span', { key: p.name, onClick: function () { loadTeamIntoDraft(p); }, style: { cursor: 'pointer', flexGrow: 1, textAlign: 'center', borderRadius: 14, padding: '3px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit' } }, '⭐ ' + p.name); })
          ),
          teams.length > 0
            ? React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 } },
                teams.map(function (t) { return React.createElement('span', { key: t.name, onClick: function () { loadTeamIntoDraft(t); }, style: { cursor: 'pointer', flexGrow: 1, textAlign: 'center', borderRadius: 14, padding: '3px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit' } }, '💾 ' + t.name); })
              )
            : null,
          React.createElement('div', { style: { fontSize: 12, fontWeight: 700, opacity: 0.92, marginBottom: 6 } }, '团队编排（草稿 ' + draftN + ' 人）'),
          React.createElement('button', { disabled: draftN === 0, onClick: oneClickTeam,
            style: { cursor: draftN === 0 ? 'default' : 'pointer', padding: '7px 12px', borderRadius: 8, fontSize: 13, fontWeight: 700, marginBottom: 8, border: 'none', background: draftN === 0 ? 'rgba(120,120,120,0.2)' : '#7c3aed', color: draftN === 0 ? 'rgba(120,120,120,0.6)' : '#fff' } },
            draftN === 0 ? '🚀 一键编排（先选人）' : '🚀 一键团队编排（' + (draftLeaderRec ? '👑' + draftLeaderRec.name : (draftRoles[0] ? draftRoles[0].name : '自动领袖')) + ' 领队）'),
          React.createElement('div', { style: { fontSize: 11, opacity: 0.6, marginBottom: 8 } }, teamMsg || '一点就把「' + (STATE.getName() || '当前团队') + '」送进 agent 编排指令，补一句任务即可发送（首选「工作角色」页签的 🚀 一键编排，那里最稳）。'),
          draftLeaderRec
            ? React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', borderRadius: 8, marginBottom: 4, border: '1px solid rgba(234,179,8,0.5)', background: 'rgba(234,179,8,0.1)', fontSize: 12 } },
                React.createElement('span', { style: { fontSize: 15 } }, '👑'),
                React.createElement('span', { style: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, draftLeaderRec.name),
                React.createElement('span', { style: { opacity: 0.7, fontSize: 11 } }, '领袖')
              )
            : null,
          draftRoles.length > 0
            ? React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8, maxHeight: 52, overflowY: 'auto' } },
                draftRoles.map(function (r) {
                  return React.createElement('span', { key: r.key, title: r.name, style: { fontSize: 12, lineHeight: 1.5 } }, (r.key === draftLeader ? '👑' : '') + r.emoji + ' ' + r.name);
                })
              )
            : null,
          React.createElement('div', { style: { display: 'flex', gap: 8, marginBottom: 8 } },
            React.createElement('button', {
              onClick: function () {
                STATE.apply(sid || ACTIVE_SID);
                var recs = selectedRecords();
                if (recs.length > 0) fillInput(shortInstruction(recs, STATE.getLeader(), STATE.getName()));
                setPickerOpen(false);
                jumpToChat(props);
              },
              style: { flex: 1, background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: 13, padding: '8px 0', borderRadius: 8, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.4)' }
            }, '✅ 应用到对话'),
            React.createElement('button', {
              onClick: function () { STATE.clearDraft(); },
              disabled: draftN === 0,
              style: { padding: '8px 14px', borderRadius: 8, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit', cursor: draftN > 0 ? 'pointer' : 'not-allowed', opacity: draftN > 0 ? 1 : 0.4, fontSize: 13 }
            }, '🗑 清空')
          ),
          React.createElement(RolePicker, null)
        )
      : React.createElement(OfficeCanvas, { roles: roles, leader: leader, zoom: zoom, working: running, done: done, page: page, activity: activity, sessionId: sid, onOpenRole: openRoleDetail }),
    /* 头像条 + 翻页按钮同行：◀ [全员 emoji] ▶ */
    roles.length > 0
      ? React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 4, padding: '5px 8px', borderTop: '1px solid var(--dsw-alias-border-l1, #eee)' } },
          roles.length > 8
            ? React.createElement('button', { onClick: function () { setPage(Math.max(0, page - 1)); }, disabled: page <= 0, title: '上一页', style: { cursor: page > 0 ? 'pointer' : 'not-allowed', opacity: page > 0 ? 1 : 0.35, border: 'none', background: 'transparent', color: 'inherit', fontSize: 13, padding: '2px 5px', flexShrink: 0 } }, '◀')
            : null,
          React.createElement('div', { style: { flex: 1, display: 'flex', flexWrap: 'wrap', gap: 4, maxHeight: 54, overflowY: 'auto', minWidth: 0 } },
            roles.map(function (r) {
              return React.createElement('span', { key: r.key, title: r.name, style: { fontSize: 15, lineHeight: 1.4, cursor: 'default' } }, (r.key === leader ? '👑' : '') + r.emoji);
            })
          ),
          roles.length > 8
            ? React.createElement('button', { onClick: function () { setPage(Math.min(Math.ceil(roles.length / 8) - 1, page + 1)); }, disabled: page >= Math.ceil(roles.length / 8) - 1, title: '下一页', style: { cursor: page < Math.ceil(roles.length / 8) - 1 ? 'pointer' : 'not-allowed', opacity: page < Math.ceil(roles.length / 8) - 1 ? 1 : 0.35, border: 'none', background: 'transparent', color: 'inherit', fontSize: 13, padding: '2px 5px', flexShrink: 0 } }, '▶')
            : null
        )
      : null,
    React.createElement('div', {
      onMouseDown: onResizeDown, title: '拖拽缩放',
      style: { position: 'absolute', right: 0, bottom: 0, width: 18, height: 18, cursor: 'nwse-resize', background: 'linear-gradient(135deg, transparent 50%, var(--dsw-alias-border-l2, #999) 50%)' }
    }),
    renderRoleModal(roleDetail, roleDetailLoading, setRoleDetail)
  );
}

/* ---------- 工作角色页签（会话内） ---------- */
function WorkingRolesView(props) {
  var inputActions = props && props.inputActions;
  var sid = props && props.sessionId;
  var [lang, setLang] = React.useState('zh');
  var [q, setQ] = React.useState('');
  var [div, setDiv] = React.useState('all');
  var [customRoles, setCustomRoles] = React.useState([]);
  var [rolePanel, setRolePanel] = React.useState('');
  var [newRoleName, setNewRoleName] = React.useState('');
  var [newRoleDesc, setNewRoleDesc] = React.useState('');
  var [roleMsg, setRoleMsg] = React.useState('');
  var [generating, setGenerating] = React.useState(false);
  var [deleteRoleId, setDeleteRoleId] = React.useState(null);
  var importRef = React.useRef(null);
  var ROLE_NAME_POOL = ['数据安全官', '产品增长师', '架构评审官', '质量门禁官', '运营策略师', '用户体验顾问', '技术文档官', '合规审计师', '性能优化师', '知识管理官', 'DevOps 工程师', 'Prompt 工程师', '数据可视化专家', '自动化测试专家'];
  function randomRoleName() {
    setNewRoleName(ROLE_NAME_POOL[Math.floor(Math.random() * ROLE_NAME_POOL.length)]);
  }
  function reloadCustom() {
    fetch('/agents-pixe/roles/custom').then(function (r) { return r.json(); }).then(function (d) {
      if (d && Array.isArray(d.roles)) { setCustomRoles(d.roles); mergeCustomRoles(d.roles); }
    }).catch(function () {});
  }
  React.useEffect(function () { reloadCustom(); }, []);
  function doGenerateRole() {
    if (!newRoleName.trim()) { setRoleMsg('请输入角色名（或点 🎲 随机生成）'); return; }
    if (generating) return; // 防重复点击
    setGenerating(true);
    setRoleMsg('🤖 AI 生成中…（约 10~30 秒）');
    fetch('/agents-pixe/roles/generate', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: newRoleName.trim(), description: newRoleDesc.trim() }) })
      .then(function (r) { return r.json(); }).then(function (d) {
        if (d.ok === false) { setRoleMsg('❌ ' + d.error); return; }
        setRoleMsg('✅ 已生成角色「' + d.role.name + '」（自定义分类）');
        setNewRoleName(''); setNewRoleDesc('');
        reloadCustom();
      }).catch(function (e) { setRoleMsg('❌ ' + String((e && e.message) || e)); })
      .then(function () { setGenerating(false); });
  }
  function doDeleteRole(id) {
    fetch('/agents-pixe/roles/delete', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ id: id }) })
      .then(function (r) { return r.json(); }).then(function (d) {
        setDeleteRoleId(null);
        if (d.ok === false) { setRoleMsg('❌ 删除失败：' + d.error); return; }
        setRoleMsg('🗑 已删除角色（剩余 ' + d.remaining + ' 个）');
        reloadCustom();
      }).catch(function (e) { setDeleteRoleId(null); setRoleMsg('❌ ' + String((e && e.message) || e)); });
  }
  function doImportRoleFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      setRoleMsg('导入中…');
      fetch('/agents-pixe/roles/import', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ content: String(reader.result || '') }) })
        .then(function (r) { return r.json(); }).then(function (d) {
          if (d.ok === false) { setRoleMsg('❌ ' + d.error); return; }
          setRoleMsg('✅ 已导入角色「' + d.role.name + '」（自定义分类）');
          reloadCustom();
        }).catch(function (e) { setRoleMsg('❌ ' + String((e && e.message) || e)); });
    };
    reader.readAsText(file);
  }
  var [selected, setSelected] = React.useState(selectedRecords());
  var [leader, setLeader] = React.useState(STATE.getLeader());
  var [teams, setTeams] = React.useState(TEAMS.list());
  var [teamName, setTeamName] = React.useState(STATE.getName());
  var [saveName, setSaveName] = React.useState('');
  var [memberSearch, setMemberSearch] = React.useState('');
  var [collapsedDivs, setCollapsedDivs] = React.useState({});
  var [aiOn, setAiOn] = React.useState(CHAT_AI.isOn());
  var [models, setModels] = React.useState([]);
  var [cfg, setCfg] = React.useState(CHAT_CFG.get());
  var [stats, setStats] = React.useState({ calls: 0, fails: 0, budgeted: 0, cached: 0, tokens: { in: 0, out: 0, est: 0 } });
  var listRef = React.useRef(null);
  /* 进入页签/切换分部分类/搜索/语言/会话时，角色列表滚动回顶部 */
  /* 归零：列表自身 + 所有可滚动的祖先容器 */
  function scrollTopAll(el) {
    if (!el) return;
    el.scrollTop = 0;
    var p = el.parentElement;
    while (p) { if (p.scrollTop && p.scrollTop > 0) p.scrollTop = 0; p = p.parentElement; }
  }
  React.useLayoutEffect(function () { scrollTopAll(listRef.current); }, [sid, div, lang, q]);
  /* 页签被重新显示时（隐藏→可见）也滚回顶部 */
  React.useEffect(function () {
    var el = listRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    var io = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) if (entries[i].isIntersecting) scrollTopAll(el);
    });
    io.observe(el);
    return function () { io.disconnect(); };
  }, [sid]);

  React.useEffect(function () {
    ACTIVE_SID = sid;
    var u1 = STATE.subscribe(function () { setSelected(selectedRecords()); setLeader(STATE.getLeader()); setTeamName(STATE.getName()); });
    var u2 = TEAMS.subscribe(function () { setTeams(TEAMS.list()); });
    var u3 = CHAT_AI.subscribe(function () { setAiOn(CHAT_AI.isOn()); });
    var u4 = CHAT_CFG.subscribe(function () { setCfg(CHAT_CFG.get()); });
    return function () { u1(); u2(); u3(); u4(); };
  }, [sid]);

  /* 只有 AI 开启时才拉模型目录（关闭时零请求，连元数据都不碰） */
  React.useEffect(function () {
    if (!aiOn) return;
    fetchModels().then(function (m) { setModels(m); });
  }, [aiOn]);

  /* AI 开启时轮询调用计数（每 5 秒），关闭即停 */
  React.useEffect(function () {
    if (!aiOn) { setStats({ calls: 0, fails: 0 }); return; }
    fetchStats().then(setStats);
    var t = setInterval(function () { fetchStats().then(setStats); }, 5000);
    return function () { clearInterval(t); };
  }, [aiOn]);

  var roles = (lang === 'zh' ? ROLES_DATA.zh.roles : ROLES_DATA.en.roles).concat(
    customRoles.map(function (r) { return { id: r.id, div: 'custom', name: r.name, cname: r.name, emoji: r.emoji || '🧑', color: r.color || '#8b5cf6', desc: r.description || '' }; })
  );
  var divs = Object.assign({}, (lang === 'zh' ? ROLES_DATA.zh.divisions : ROLES_DATA.en.divisions), { custom: { label: '自定义', color: '#8b5cf6' } });
  var query = q.trim().toLowerCase();

  var divList = [{ key: 'all', label: '全部', color: '#8b93a3', count: roles.length }];
  Object.keys(divs).forEach(function (d) {
    var cnt = 0; roles.forEach(function (r) { if (r.div === d) cnt++; });
    divList.push({ key: d, label: (divs[d] && divs[d].label) || d, color: (divs[d] && divs[d].color) || '#888', count: cnt });
  });
  var shown = roles.filter(function (r) {
    var inDiv = div === 'all' || r.div === div;
    var inQuery = query === '' || String(r.name).toLowerCase().indexOf(query) >= 0 || String(r.cname || '').toLowerCase().indexOf(query) >= 0 || String(r.desc).toLowerCase().indexOf(query) >= 0;
    return inDiv && inQuery;
  });
  var roleInf = useInfiniteScroll(shown.length);
  React.useEffect(function () { roleInf.setLimit(60); }, [sid, div, lang, q]);

  var leaderRec = leader ? INDEX.map[leader] : null;
  var members = selected.filter(function (r) { return r.key !== leader; });
  var memberQ = memberSearch.trim().toLowerCase();
  var visibleMembers = members.filter(function (m) { return memberQ === '' || String(m.name).toLowerCase().indexOf(memberQ) >= 0 || String(m.cname || '').toLowerCase().indexOf(memberQ) >= 0; });
  var memberDivOrder = [];
  visibleMembers.forEach(function (m) { if (memberDivOrder.indexOf(m.div) < 0) memberDivOrder.push(m.div); });
  var memberGroups = memberDivOrder.map(function (d) { return { div: d, label: (divs[d] && divs[d].label) || d, roles: visibleMembers.filter(function (m) { return m.div === d; }) }; });

  function toggleRole(rec) {
    var key = lang + ':' + rec.id;
    if (STATE.hasDraft(key)) STATE.removeDraft(key); else STATE.addDraft(key);
  }
  function makeLeader(key) { STATE.setLeader(key); }
  function clearAll() { STATE.clearDraft(); }
  function loadTeam(t) {
    STATE.clearDraft();
    var leaderKey = null;
    function toKey(idOrKey) { return String(idOrKey).indexOf(':') >= 0 ? idOrKey : 'zh:' + idOrKey; }
    (t.roles || []).forEach(function (r) {
      var key = toKey(r);
      if (INDEX.map[key]) { STATE.addDraft(key); if (toKey(t.leader) === key) leaderKey = key; }
    });
    STATE.setLeader(leaderKey);
    STATE.setName(t.name);
  }
  function saveCurrent() {
    var nm = saveName.trim();
    if (!nm || STATE.getDraft().length === 0) return;
    TEAMS.save(nm, STATE.getLeader(), STATE.getDraft());
    STATE.setName(nm);
    setSaveName('');
  }
  function removeTeam(name) { TEAMS.remove(name); if (STATE.getName() === name) STATE.setName(''); }
  function applyToChat() {
    STATE.apply(sid);
    var recs = selectedRecords();
    if (inputActions && recs.length > 0) inputActions.setDraft(shortInstruction(recs, STATE.getLeader(), STATE.getName()));
    jumpToChat(props);
  }
  /* 一键团队编排：把当前选中团队送进 agents_pixe_team 指令（setDraft 可靠路径） */
  function oneClickTeam() {
    var recs = selectedRecords();
    if (recs.length === 0) return;
    STATE.apply(sid);
    var name = STATE.getName() || '当前团队';
    var instr = '让「' + name + '」团队并行完成：';
    if (inputActions && typeof inputActions.setDraft === 'function') inputActions.setDraft(instr);
    else fillInput(instr);
    jumpToChat(props);
  }

  var btnBase = { cursor: 'pointer', borderRadius: 7, padding: '5px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'var(--dsw-alias-label-primary)' };
  var chipBase = { cursor: 'pointer', borderRadius: 14, padding: '3px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'var(--dsw-alias-label-primary)', display: 'inline-flex', alignItems: 'center', gap: 4 };
  /* 模型下拉选项（自动 + 各 provider 的模型） */
  var modelOptions = [];
  (models || []).forEach(function (p) {
    (p.models || []).forEach(function (m) { modelOptions.push({ key: p.provider + '/' + m.id, label: (p.name || p.provider) + ' · ' + m.name }); });
  });
  var cfgModelKey = cfg.model ? cfg.model.provider + '/' + cfg.model.model : '';

  return React.createElement('div', { style: { height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--dsw-alias-bg-base, #fff)', color: 'var(--dsw-alias-label-primary)' } },
    React.createElement('div', { style: { padding: '14px 16px 10px', flexShrink: 0 } },
      React.createElement('div', { style: { fontSize: 16, fontWeight: 700, marginBottom: 2 } }, '工作角色'),
      React.createElement('div', { style: { fontSize: 12, opacity: 0.85, marginBottom: 10 } }, '左侧按分部找角色；中间点卡片加入；右侧组团队（设一位 👑 领袖），一键把短指令填入对话框。'),
      /* 新建角色（AI 生成）/ 导入 md */
      React.createElement('div', { style: { display: 'flex', gap: 8, marginBottom: 8 } },
        React.createElement('button', { onClick: function () { setRolePanel(rolePanel === 'create' ? '' : 'create'); }, style: btnBase }, '➕ 新建角色（AI）'),
        React.createElement('button', { onClick: function () { if (importRef && importRef.current) importRef.current.click(); }, style: btnBase }, '📥 导入 md'),
        React.createElement('input', { ref: importRef, type: 'file', accept: '.md,text/markdown', style: { display: 'none' }, onChange: function (e) { doImportRoleFile(e.target.files && e.target.files[0]); e.target.value = ''; } })
      ),
      rolePanel === 'create'
        ? React.createElement('div', { style: { border: '1px dashed var(--dsw-alias-border-l1, #ccc)', borderRadius: 8, padding: '10px 12px', marginBottom: 8, fontSize: 12 } },
            React.createElement('div', { style: { fontWeight: 700, marginBottom: 6 } }, '🤖 新建角色（AI 生成完整角色卡）'),
            React.createElement('div', { style: { display: 'flex', gap: 6, marginBottom: 6 } },
              React.createElement('input', { value: newRoleName, onChange: function (e) { setNewRoleName(e.target.value); }, placeholder: '角色名（可点 🎲 随机）', style: { flex: 1, padding: '6px 10px', borderRadius: 7, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit' } }),
              React.createElement('button', { onClick: randomRoleName, style: btnBase, title: '随机一个角色名' }, '🎲'),
              React.createElement('input', { value: newRoleDesc, onChange: function (e) { setNewRoleDesc(e.target.value); }, placeholder: '定位（可选，如：负责数据安全与合规）', style: { flex: 2, padding: '6px 10px', borderRadius: 7, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit' } }),
              React.createElement('button', { onClick: doGenerateRole, disabled: generating, style: { background: generating ? '#94a3b8' : '#2563eb', color: '#fff', borderRadius: 7, padding: '6px 14px', border: 'none', cursor: generating ? 'not-allowed' : 'pointer' } }, generating ? '⏳ 生成中…' : '生成')
            ),
            roleMsg ? React.createElement('div', { style: { fontSize: 11, opacity: 0.8 } }, roleMsg) : null,
            /* 自定义角色管理 */
            customRoles && customRoles.length ? React.createElement('div', { style: { marginTop: 8, borderTop: '1px solid var(--dsw-alias-border-l1, #eee)', paddingTop: 8 } },
              React.createElement('div', { style: { fontWeight: 700, marginBottom: 4 } }, '我的自定义角色（' + customRoles.length + '）'),
              customRoles.map(function (r) {
                return React.createElement('div', { key: r.id, style: { display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0' } },
                  React.createElement('span', { style: { marginRight: 4 } }, r.emoji || '🧑'),
                  React.createElement('span', { style: { flex: 1 } }, r.name),
                  deleteRoleId === r.id
                    ? React.createElement('span', { style: { display: 'flex', gap: 4, alignItems: 'center', fontSize: 11, color: '#dc2626' } },
                        React.createElement('span', {}, '确认删除？'),
                        React.createElement('button', { style: btnBase, onClick: function () { doDeleteRole(r.id); } }, '确认'),
                        React.createElement('button', { style: btnBase, onClick: function () { setDeleteRoleId(null); } }, '取消')
                      )
                    : React.createElement('button', { style: Object.assign({}, btnBase, { color: '#dc2626', borderColor: '#fca5a5' }), onClick: function () { setDeleteRoleId(r.id); } }, '🗑 删除')
                );
              })
            ) : null
          )
        : null,
      React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
        React.createElement('input', { value: q, onChange: function (e) { setQ(e.target.value); }, placeholder: '搜索角色…', style: { flex: 1, maxWidth: 340, padding: '7px 12px', borderRadius: 8, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit' } }),
        React.createElement('button', { onClick: function () { setLang(lang === 'zh' ? 'en' : 'zh'); }, style: btnBase }, lang === 'zh' ? '中文' : 'EN'),
        React.createElement('div', { style: { flex: 1 } }),
        React.createElement('button', { onClick: oneClickTeam, title: '把当前团队送进 agents_pixe_team 编排，补一句任务即可发送', disabled: selected.length === 0, style: { background: selected.length === 0 ? 'rgba(120,120,120,0.25)' : '#7c3aed', color: selected.length === 0 ? 'rgba(120,120,120,0.6)' : '#ffffff', fontWeight: 700, fontSize: 13, padding: '8px 14px', borderRadius: 8, border: 'none', cursor: selected.length === 0 ? 'default' : 'pointer', flexShrink: 0 } }, '🚀 一键编排'),
        React.createElement('button', { onClick: applyToChat, style: { background: '#2563eb', color: '#ffffff', fontWeight: 700, fontSize: 13, padding: '8px 18px', borderRadius: 8, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.4)', flexShrink: 0 } }, '✅ 应用到对话（' + selected.length + '）')
      )
    ),
    React.createElement('div', { style: { flex: 1, minHeight: 0, display: 'flex' } },
      React.createElement('div', { style: { width: 168, minHeight: 0, flexShrink: 0, borderRight: '1px solid var(--dsw-alias-border-l1, #eee)', overflowY: 'auto', padding: '8px 6px' } },
        divList.map(function (d) {
          var active = div === d.key;
          return React.createElement('div', { key: d.key, onClick: function () { setDiv(d.key); }, style: { display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px', borderRadius: 8, cursor: 'pointer', background: active ? 'rgba(59,130,246,0.16)' : 'transparent', fontWeight: active ? 700 : 400, marginBottom: 2 } },
            React.createElement('span', { style: { width: 10, height: 10, borderRadius: 5, background: d.color, flexShrink: 0 } }),
            React.createElement('span', { style: { flex: 1, fontSize: 13, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, d.label),
            React.createElement('span', { style: { fontSize: 11, opacity: 0.85 } }, d.count)
          );
        })
      ),
      React.createElement('div', { ref: listRef, key: sid + ':' + div + ':' + lang, style: { flex: 1, minWidth: 0, minHeight: 0, overflowY: 'auto', padding: '10px 12px' } },
        shown.length === 0
          ? React.createElement('div', { style: { padding: 24, textAlign: 'center', fontSize: 13, opacity: 0.85 } }, '没有匹配的角色')
          : React.createElement('div', {},
              React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, alignContent: 'flex-start' } },
                shown.slice(0, roleInf.limit).map(function (r) {
                  var key = lang + ':' + r.id;
                  var on = STATE.hasDraft(key);
                  return React.createElement('div', { key: key, onClick: function () { toggleRole(r); }, title: r.desc, style: { width: 150, boxSizing: 'border-box', borderRadius: 10, padding: '10px 8px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, border: on ? '1px solid rgba(59,130,246,0.6)' : '1px solid var(--dsw-alias-border-l1, #eee)', background: on ? 'rgba(59,130,246,0.12)' : 'var(--dsw-alias-bg-layer-1, #fff)' } },
                    React.createElement('span', { style: { fontSize: 26, lineHeight: 1 } }, r.emoji),
                    React.createElement('span', { style: { fontSize: 12, fontWeight: 600, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' } }, r.name),
                    React.createElement('span', { style: { fontSize: 11, opacity: 0.75, textAlign: 'center' } }, r.cname || ''),
                    React.createElement('span', { style: { fontSize: 11, opacity: on ? 1 : 0.85 } }, on ? '已选 ✓' : '＋ 加入')
                  );
                })
              ),
              React.createElement(InfiniteFooter, { inf: roleInf, label: '个角色' })
            )
      ),
      React.createElement('div', { style: { width: 300, minHeight: 0, flexShrink: 0, borderLeft: '1px solid var(--dsw-alias-border-l1, #eee)', padding: '10px 12px', overflowY: 'auto', display: 'flex', flexDirection: 'column' } },
        React.createElement('div', { style: { fontSize: 14, fontWeight: 700, marginBottom: 8 } }, '👥 团队编排（' + selected.length + '）'),
        React.createElement('div', { style: { fontSize: 12, fontWeight: 700, opacity: 0.92, marginBottom: 6 } }, '推荐团队（一键复用）'),
        React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 } },
          PRESETS.map(function (p) { return React.createElement('span', { key: p.name, onClick: function () { loadTeam(p); }, style: chipBase }, '⭐ ' + p.name); })
        ),
        teams.length > 0
          ? React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 } },
              teams.map(function (t) {
                return React.createElement('span', { key: t.name, onClick: function () { loadTeam(t); }, style: chipBase },
                  '💾 ' + t.name,
                  React.createElement('span', { onClick: function (e) { e.stopPropagation(); removeTeam(t.name); }, title: '删除', style: { opacity: 0.7, marginLeft: 2 } }, '✕'));
              })
            )
          : null,
        React.createElement('div', { style: { display: 'flex', gap: 6, marginBottom: 10 } },
          React.createElement('input', { value: saveName, onChange: function (e) { setSaveName(e.target.value); }, placeholder: '团队名，保存当前', style: { flex: 1, minWidth: 0, padding: '5px 9px', borderRadius: 7, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit', fontSize: 12 } }),
          React.createElement('button', { onClick: saveCurrent, disabled: !saveName.trim() || selected.length === 0, style: Object.assign({}, btnBase, { opacity: saveName.trim() && selected.length ? 1 : 0.5, cursor: saveName.trim() && selected.length ? 'pointer' : 'not-allowed' }) }, '保存')
        ),
        leaderRec
          ? React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 10, marginBottom: 8, border: '1px solid rgba(234,179,8,0.6)', background: 'rgba(234,179,8,0.12)' } },
              React.createElement('span', { style: { fontSize: 20 } }, '👑'),
              React.createElement('div', { style: { flex: 1, minWidth: 0 } },
                React.createElement('div', { style: { fontSize: 13, fontWeight: 700 } }, leaderRec.name),
                React.createElement('div', { style: { fontSize: 11, opacity: 0.85 } }, '领袖 · 统筹分工与汇总')
              ),
              React.createElement('button', { onClick: function () { STATE.clearLeader(); }, style: btnBase }, '取消')
            )
          : React.createElement('div', { style: { fontSize: 12, opacity: 0.85, padding: '8px 10px', borderRadius: 8, border: '1px dashed var(--dsw-alias-border-l2, #ccc)', marginBottom: 8 } }, '点成员右侧「设领袖」，选一位领袖带队（可不设）。'),
        selected.length === 0
          ? React.createElement('div', { style: { fontSize: 12, opacity: 0.85, padding: 12, textAlign: 'center' } }, '还没有成员，从中间卡片「＋ 加入」')
          : React.createElement('div', { style: { display: 'flex', flexDirection: 'column', minHeight: 0 } },
              members.length > 5
                ? React.createElement('input', { value: memberSearch, onChange: function (e) { setMemberSearch(e.target.value); }, placeholder: '搜索成员…', style: { padding: '5px 9px', borderRadius: 7, border: '1px solid var(--dsw-alias-border-l1, #ccc)', background: 'var(--dsw-alias-bg-layer-1, #fff)', color: 'inherit', fontSize: 12, marginBottom: 6 } })
                : null,
              memberGroups.length === 0
                ? React.createElement('div', { style: { fontSize: 12, opacity: 0.85, padding: 10, textAlign: 'center' } }, '没有匹配的成员')
                : memberGroups.map(function (g) {
                    var isCollapsed = collapsedDivs[g.div] === true;
                    return React.createElement('div', { key: g.div, style: { marginBottom: 4 } },
                      React.createElement('div', { onClick: function () { var n = Object.assign({}, collapsedDivs); n[g.div] = !isCollapsed; setCollapsedDivs(n); }, style: { display: 'flex', alignItems: 'center', gap: 6, padding: '4px 6px', cursor: 'pointer', borderRadius: 6, fontSize: 12, fontWeight: 700, opacity: 0.9, userSelect: 'none' } },
                        React.createElement('span', { style: { fontSize: 10 } }, isCollapsed ? '▸' : '▾'),
                        React.createElement('span', { style: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, g.label),
                        React.createElement('span', { style: { fontSize: 11, opacity: 0.85 } }, g.roles.length)
                      ),
                      isCollapsed ? null : g.roles.map(function (m) {
                        return React.createElement('div', { key: m.key, style: { display: 'flex', alignItems: 'center', gap: 7, padding: '4px 6px', borderRadius: 7, marginBottom: 2, background: 'var(--dsw-alias-bg-layer-1, #fff)', fontSize: 12 } },
                          React.createElement('span', { style: { fontSize: 15, width: 22, textAlign: 'center' } }, m.emoji),
                          React.createElement('span', { style: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, m.name),
                          React.createElement('button', { onClick: function () { makeLeader(m.key); }, style: Object.assign({}, btnBase, { padding: '2px 7px', fontSize: 11 }) }, '设领袖'),
                          React.createElement('button', { onClick: function () { STATE.removeDraft(m.key); }, style: Object.assign({}, btnBase, { padding: '2px 7px', fontSize: 11 }) }, '✕')
                        );
                      })
                    );
                  })
            ),
        React.createElement('div', { style: { flex: 1 } }),
        React.createElement('div', { style: { display: 'flex', gap: 8, marginTop: 8, paddingTop: 8, borderTop: '1px solid var(--dsw-alias-border-l1, #eee)' } },
          React.createElement('button', { onClick: applyToChat, style: { flex: 1, background: '#2563eb', color: '#ffffff', fontWeight: 700, fontSize: 13, padding: '8px 0', borderRadius: 8, border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.4)' } }, '✅ 应用到对话'),
          React.createElement('button', { onClick: clearAll, style: btnBase }, '清空')
        )
      )
    )
  );
}

/* ---------- 设置分区：设置 → 像素办公室（参考 dsh-ui-three-body 的 settings.section 设计） ---------- */
function PixeSettingsSection(props) {
  var scope = props.scope;
  var snap = React.useSyncExternalStore(
    function (cb) { return scope ? scope.subscribe(cb) : function () {}; },
    function () { return scope ? scope.getSnapshot() : null; }
  );
  /* 订阅 CHAT_AI / CHAT_CFG（localStorage 开关），让设置页开关点击后立即刷新 */
  var aiVersion = React.useSyncExternalStore(
    function (cb) { return CHAT_AI.subscribe(cb); },
    function () { return CHAT_AI.isOn(); }
  );
  var cfgVersion = React.useSyncExternalStore(
    function (cb) { return CHAT_CFG.subscribe(cb); },
    function () { return CHAT_CFG.get().freq + ':' + (CHAT_CFG.get().thinking === true) + ':' + CHAT_CFG.modelKey(); }
  );
  var value = (snap && snap.value && typeof snap.value === 'object') ? snap.value : {};
  var enabled = value.enabled === true;
  var row = function (label, hint, checked, onChange) {
    return React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 } },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
        React.createElement('span', { style: { fontWeight: 600 } }, label),
        React.createElement('span', { style: { fontSize: 12, opacity: 0.6 } }, hint)),
      React.createElement('button', {
        onClick: function () { onChange(!checked); }, 'aria-pressed': checked,
        style: { minWidth: 44, height: 24, borderRadius: 12, border: 'none', cursor: 'pointer', background: checked ? '#10b981' : 'rgba(120,120,120,0.3)', position: 'relative', transition: 'background 0.2s ease' }
      }, React.createElement('span', { style: { position: 'absolute', top: 2, width: 20, height: 20, borderRadius: '50%', background: '#fff', left: checked ? 22 : 2, transition: 'left 0.2s ease' } }))
    );
  };
  var aiOn = aiVersion === true;
  var cfg = CHAT_CFG.get();
  var freqLabel = { low: '低频（最省 token）', medium: '中频', high: '高频（接近实时）' }[cfg.freq] || '中频';
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 18, padding: 16, maxWidth: 560 } },
    row('角色工具', '开启后注入 agents_pixe_roles（取角色卡）与 agents_pixe_team（真团队编排：领袖拆解→成员子代理并行→汇总，更耗 token）。默认关闭零消耗。', enabled, function (v) { if (scope) scope.set('enabled', v); }),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 } },
      React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: 2 } },
        React.createElement('span', { style: { fontWeight: 600 } }, '取卡粒度'),
        React.createElement('span', { style: { fontSize: 12, opacity: 0.6 } }, 'agents_pixe_roles 默认返回哪种卡；仅取规则/交付物可省大量 token。')),
      React.createElement('div', { style: { display: 'flex', gap: 6 } },
        ['full', 'rules', 'deliverables'].map(function (m) {
          var labels = { full: '完整卡', rules: '仅规则', deliverables: '仅交付物' };
          var active = (value.cardMode || 'full') === m;
          return React.createElement('button', { key: m, onClick: function () { if (scope) scope.set('cardMode', m); }, 'aria-pressed': active,
            style: { cursor: 'pointer', padding: '5px 10px', borderRadius: 7, fontSize: 12, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: active ? '#2563eb' : 'var(--dsw-alias-bg-layer-1,#fff)', color: active ? '#fff' : 'var(--dsw-alias-label-primary)' } }, labels[m]);
        }))),
    React.createElement('div', { style: { fontSize: 12, opacity: 0.55, lineHeight: 1.7 } },
      React.createElement('div', null, '· 取卡粒度选「仅规则/仅交付物」后，模型调 agents_pixe_roles 默认就走该粒度，不用每次口头交代。'),
      React.createElement('div', null, '· agents_pixe_team 会开 N+2 个子代理（每个带完整卡独立执行），成本高，深度任务再用。'),
      React.createElement('div', null, '· 办公室浮层标题栏实时显示当前会话全局 token 计量（↑输入 ↓输出，含缓存读写）。'),
      React.createElement('div', null, '· AI 闲聊开关在办公室浮层顶部（默认关，走罐头台词，零模型调用；开启后有每小时预算管控）。')),
    React.createElement('div', { style: { borderTop: '1px solid var(--dsw-alias-border-l2, #eee)', paddingTop: 14, fontSize: 13, fontWeight: 700 } }, '🤖 像素人 AI 闲聊'),
    row('AI 聊天', '像素人的闲聊台词接入 AI（内置，走 dsh 自配模型）。开启会消耗 token，默认关闭走罐头台词。', aiOn, function (v) { CHAT_AI.set(v); }),
    row('台词频率', '当前：' + freqLabel + '。低频最省 token，高频更热闹。', cfg.freq === 'high', function () {
      var next = cfg.freq === 'low' ? 'medium' : (cfg.freq === 'medium' ? 'high' : 'low');
      CHAT_CFG.setFreq(next);
    }),
    row('思考模式', '开启后 AI 台词走带思考链的模型（更慢、更费 token）。', cfg.thinking === true, function (v) { CHAT_CFG.setThinking(v); })
  );
}

/* ---------- 插件入口 ---------- */
function apply(ctx) {
  var slots = ctx.get('slots');
  if (slots === undefined) return;
  SESSIONS_SVC = ctx.get('sessions');
  TIMER_SVC = ctx.get('timer');

  slots.inject('conversation.view', function () {
    return slots.register(
      { name: 'conversation.view', id: 'agents-pixe', order: 20, label: '工作角色',
        inject: function (sessionId, actions) {
          return { setView: actions && typeof actions.setView === 'function' ? actions.setView : undefined };
        }
      },
      function (props) { return React.createElement(WorkingRolesView, props); }
    );
  });

  slots.inject('shell.overlay', function () {
    return slots.register(
      { name: 'shell.overlay', id: 'agents-pixe-office', order: 50, label: '像素办公室' },
      function (props) { return React.createElement(OfficeOverlay, props); }
    );
  });

  /* 设置分区：设置 → 像素办公室
   * 注意：settingsScope.bind 必须在 apply() 里只调用一次（稳定引用）。
   * 若放在分区渲染函数里，每次渲染都会 new 一个 SettingsScopeController，
   * 订阅的 scope 与点击写入的 scope 不是同一个 → 开关点击"没反应"。
   * （参考 dsh-ui-three-body：const scope = ctx.settingsScope.bind({namespace}) 在 apply 顶部绑定一次） */
  try {
    var pixeScope = ctx.get('settingsScope').bind({ namespace: 'agents-pixe' });
    slots.inject('settings.section', function () {
      return slots.register(
        { name: 'settings.section', id: 'agents-pixe', order: 20, label: '像素办公室',
          inject: function () { return { scope: pixeScope }; } },
        function (props) { return React.createElement(PixeSettingsSection, { scope: props && props.scope ? props.scope : pixeScope }); }
      );
    });
  } catch (e) { /* 静默：不注册设置分区，不影响其他功能 */ }
}

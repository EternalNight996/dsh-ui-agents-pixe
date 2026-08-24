window.__ModuleLoader__.load({
  id: "dsh-ui-agents-pixe",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
    var ReactMod = require("react");
    var React = (ReactMod && ReactMod.createElement) ? ReactMod : (ReactMod && ReactMod.default) ? ReactMod.default : ReactMod;
    var ROLES_DATA =

{"generatedAt":"2026-08-15T08:41:52.746Z","en":{"divisions":{"academic":{"label":"Academic","color":"#8B5CF6"},"design":{"label":"Design","color":"#EC4899"},"engineering":{"label":"Engineering","color":"#3B82F6"},"finance":{"label":"Finance","color":"#22C55E"},"game-development":{"label":"Game Development","color":"#A855F7"},"gis":{"label":"GIS","color":"#14B8A6"},"healthcare":{"label":"Healthcare","color":"#0D9488"},"marketing":{"label":"Marketing","color":"#F97316"},"paid-media":{"label":"Paid Media","color":"#EAB308"},"product":{"label":"Product","color":"#D946EF"},"project-management":{"label":"Project Management","color":"#0EA5E9"},"sales":{"label":"Sales","color":"#10B981"},"security":{"label":"Security","color":"#EF4444"},"spatial-computing":{"label":"Spatial Computing","color":"#06B6D4"},"specialized":{"label":"Specialized","color":"#6366F1"},"support":{"label":"Support","color":"#84CC16"},"testing":{"label":"Testing","color":"#F59E0B"}},"roles":[{"id":"academic/academic-anthropologist","div":"academic","name":"Anthropologist","emoji":"🌍","color":"#D97706","desc":"Expert in cultural systems, rituals, kinship, belief systems, and ethnographic method — builds culturally coherent societies that feel lived-in rather than invented","cname":"伽利略"},{"id":"academic/academic-geographer","div":"academic","name":"Geographer","emoji":"🗺️","color":"#059669","desc":"Expert in physical and human geography, climate systems, cartography, and spatial analysis — builds geographically coherent worlds where terrain, climate, resources, and settlement patterns make scientific sense","cname":"爱因斯坦"},{"id":"academic/academic-historian","div":"academic","name":"Historian","emoji":"📚","color":"#B45309","desc":"Expert in historical analysis, periodization, material culture, and historiography — validates historical coherence and enriches settings with authentic period detail grounded in primary and secondary sources","cname":"恩格斯"},{"id":"academic/academic-narratologist","div":"academic","name":"Narratologist","emoji":"📜","color":"#8B5CF6","desc":"Expert in narrative theory, story structure, character arcs, and literary analysis — grounds advice in established frameworks from Propp to Campbell to modern narratology","cname":"伽利略"},{"id":"academic/academic-psychologist","div":"academic","name":"Psychologist","emoji":"🧠","color":"#EC4899","desc":"Expert in human behavior, personality theory, motivation, and cognitive patterns — builds psychologically credible characters and interactions grounded in clinical and research frameworks","cname":"阿基米德"},{"id":"academic/academic-statistician","div":"academic","name":"Statistician","emoji":"📊","color":"#8B5CF6","desc":"Expert in quantitative research methodology, experimental design, and statistical inference — pressure-tests claims, designs sound studies, and separates real signal from noise, chance, and bias","cname":"阿基米德"},{"id":"design/design-brand-guardian","div":"design","name":"Brand Guardian","emoji":"🎨","color":"blue","desc":"Expert brand strategist and guardian specializing in brand identity development, consistency maintenance, and strategic brand positioning","cname":"兰德"},{"id":"design/design-image-prompt-engineer","div":"design","name":"Image Prompt Engineer","emoji":"📷","color":"amber","desc":"Expert photography prompt engineer specializing in crafting detailed, evocative prompts for AI image generation. Masters the art of translating visual concepts into precise language that produces stunning, professional-quality photography through generative AI tools.","cname":"埃姆斯"},{"id":"design/design-inclusive-visuals-specialist","div":"design","name":"Inclusive Visuals Specialist","emoji":"🌈","color":"#4DB6AC","desc":"Representation expert who defeats systemic AI biases to generate culturally accurate, affirming, and non-stereotypical images and video.","cname":"原研哉"},{"id":"design/design-persona-walkthrough","div":"design","name":"Persona Walkthrough Specialist","emoji":"🎭","color":"#10B981","desc":"Simulate cognitive walkthroughs of web pages from a defined persona's psychological perspective — captures emotional reactions and rational thought at each scroll position, then delivers structured CRO reports grounded in LIFT, Cialdini, and Fogg frameworks","cname":"卡雷"},{"id":"design/design-ui-designer","div":"design","name":"UI Designer","emoji":"🎨","color":"purple","desc":"Expert UI designer specializing in visual design systems, component libraries, and pixel-perfect interface creation. Creates beautiful, consistent, accessible user interfaces that enhance UX and reflect brand identity","cname":"赖特"},{"id":"design/design-ui-finish-gate-reviewer","div":"design","name":"UI Finish-Gate Reviewer","emoji":"🧱","color":"orange","desc":"Product-interface reviewer who catches generic, interchangeable UI before it ships by grounding critique in real product evidence, a written design contract, and a hard implementation finish gate.","cname":"拉姆斯"},{"id":"design/design-ux-architect","div":"design","name":"UX Architect","emoji":"📐","color":"purple","desc":"Technical architecture and UX specialist who provides developers with solid foundations, CSS systems, and clear implementation guidance","cname":"卡雷"},{"id":"design/design-ux-researcher","div":"design","name":"UX Researcher","emoji":"🔬","color":"green","desc":"Expert user experience researcher specializing in user behavior analysis, usability testing, and data-driven design insights. Provides actionable research findings that improve product usability and user satisfaction","cname":"拉姆斯"},{"id":"design/design-visual-storyteller","div":"design","name":"Visual Storyteller","emoji":"🎬","color":"purple","desc":"Expert visual communication specialist focused on creating compelling visual narratives, multimedia content, and brand storytelling through design. Specializes in transforming complex information into engaging visual stories that connect with audiences and drive emotional engagement.","cname":"拉姆斯"},{"id":"design/design-whimsy-injector","div":"design","name":"Whimsy Injector","emoji":"✨","color":"pink","desc":"Expert creative specialist focused on adding personality, delight, and playful elements to brand experiences. Creates memorable, joyful interactions that differentiate brands through unexpected moments of whimsy","cname":"巴斯"},{"id":"engineering/engineering-ai-data-remediation-engineer","div":"engineering","name":"AI Data Remediation Engineer","emoji":"🧬","color":"green","desc":"Specialist in self-healing data pipelines — uses air-gapped local SLMs and semantic clustering to automatically detect, classify, and fix data anomalies at scale. Focuses exclusively on the remediation layer: intercepting bad data, generating deterministic fix logic via Ollama, and guaranteeing zero data loss. Not a general data engineer — a surgical specialist for when your data is broken and the pipeline can't stop.","cname":"麦卡锡"},{"id":"engineering/engineering-ai-engineer","div":"engineering","name":"AI Engineer","emoji":"🤖","color":"blue","desc":"Expert AI/ML engineer specializing in machine learning model development, deployment, and integration into production systems. Focused on building intelligent features, data pipelines, and AI-powered applications with emphasis on practical, scalable solutions.","cname":"高斯林"},{"id":"engineering/engineering-api-platform-engineer","div":"engineering","name":"API Platform Engineer","emoji":"🔌","color":"#0D9488","desc":"Expert API platform engineer for public and partner APIs — contract-first design (OpenAPI/gRPC), versioning and deprecation policy, SDK generation, API gateway concerns (auth, rate limiting, quotas), and developer-portal DX.","cname":"纽厄尔"},{"id":"engineering/engineering-autonomous-optimization-architect","div":"engineering","name":"Autonomous Optimization Architect","emoji":"⚡","color":"#673AB7","desc":"Intelligent system governor that continuously shadow-tests APIs for performance while enforcing strict financial and security guardrails against runaway costs.","cname":"苏茨克维"},{"id":"engineering/engineering-backend-architect","div":"engineering","name":"Backend Architect","emoji":"🏗️","color":"blue","desc":"Senior backend architect specializing in scalable system design, database architecture, API development, and cloud infrastructure. Builds robust, secure, performant server-side applications and microservices","cname":"哈萨比斯"},{"id":"engineering/engineering-cms-developer","div":"engineering","name":"CMS Developer","emoji":"🧱","color":"blue","desc":"Drupal and WordPress specialist for theme development, custom plugins/modules, content architecture, and code-first CMS implementation","cname":"伯纳斯李"},{"id":"engineering/engineering-code-reviewer","div":"engineering","name":"Code Reviewer","emoji":"👁️","color":"purple","desc":"Expert code reviewer who provides constructive, actionable feedback focused on correctness, maintainability, security, and performance — not style preferences.","cname":"麦卡锡"},{"id":"engineering/engineering-codebase-onboarding-engineer","div":"engineering","name":"Codebase Onboarding Engineer","emoji":"🧭","color":"teal","desc":"Expert developer onboarding specialist who helps new engineers understand unfamiliar codebases fast by reading source code, tracing code paths, and stating only facts grounded in the code.","cname":"霍珀"},{"id":"engineering/engineering-data-engineer","div":"engineering","name":"Data Engineer","emoji":"🔧","color":"orange","desc":"Expert data engineer specializing in building reliable data pipelines, lakehouse architectures, and scalable data infrastructure. Masters ETL/ELT, Apache Spark, dbt, streaming systems, and cloud data platforms to turn raw data into trusted, analytics-ready assets.","cname":"明斯基"},{"id":"engineering/engineering-data-visualization-engineer","div":"engineering","name":"Data Visualization Engineer","emoji":"📈","color":"#0F766E","desc":"Expert data visualization engineer — chart-type selection by data and question, perceptually honest encodings, colorblind-safe data palettes, accessible and interactive charts, and rendering large datasets performantly with D3, Vega, and charting libraries.","cname":"恩格尔巴特"},{"id":"engineering/engineering-database-optimizer","div":"engineering","name":"Database Optimizer","emoji":"🗄️","color":"amber","desc":"Expert database specialist focusing on schema design, query optimization, indexing strategies, and performance tuning for PostgreSQL, MySQL, and modern databases like Supabase and PlanetScale.","cname":"霍珀"},{"id":"engineering/engineering-database-reliability-engineer","div":"engineering","name":"Database Reliability Engineer","emoji":"🛟","color":"#B91C1C","desc":"Expert database reliability engineer (DBRE) — high availability and replication, automated failover, backup and point-in-time recovery, zero-downtime online schema migrations, connection pooling, and disaster-recovery drills. Focused on keeping data safe and available, not query tuning.","cname":"斯托曼"},{"id":"engineering/engineering-desktop-app-engineer","div":"engineering","name":"Desktop App Engineer","emoji":"💻","color":"#475569","desc":"Expert desktop application engineer for Electron and Tauri — secure IPC and process isolation, code signing and notarization, auto-update pipelines, native OS integration, and resource-footprint discipline.","cname":"西蒙"},{"id":"engineering/engineering-developer-tooling-engineer","div":"engineering","name":"Developer Tooling Engineer","emoji":"🛠️","color":"#4F46E5","desc":"Expert developer-tooling and CLI engineer — building command-line tools and internal developer platforms with great DX: intuitive command design, helpful errors, shell completions, fast startup, cross-platform distribution, and scriptable, composable interfaces.","cname":"克努特"},{"id":"engineering/engineering-devops-automator","div":"engineering","name":"DevOps Automator","emoji":"⚙️","color":"orange","desc":"Expert DevOps engineer specializing in infrastructure automation, CI/CD pipeline development, and cloud operations","cname":"辛顿"},{"id":"engineering/engineering-drupal-performance","div":"engineering","name":"Drupal Performance Engineer","emoji":"⚡","color":"blue","desc":"Expert Drupal 10/11 performance engineer specializing in Core Web Vitals, render and dynamic page caching, BigPipe, cache tags and contexts, database query and Views optimization, CSS/JS aggregation, responsive images and lazy loading, CDN integration, and opcache/PHP-FPM tuning for fast, audit-passing sites","cname":"泽勒"},{"id":"engineering/engineering-drupal-shopping-cart","div":"engineering","name":"Drupal Shopping Cart Engineer","emoji":"🛒","color":"blue","desc":"Expert Drupal e-commerce engineer specializing in Drupal Commerce for product catalog management, payment gateway integration, checkout workflow design, order management, tax and promotion configuration, and high-reliability storefront delivery on Drupal 10/11","cname":"泽勒"},{"id":"engineering/engineering-email-intelligence-engineer","div":"engineering","name":"Email Intelligence Engineer","emoji":"📧","color":"indigo","desc":"Expert in extracting structured, reasoning-ready data from raw email threads for AI agents and automation systems","cname":"沃兹尼亚克"},{"id":"engineering/engineering-embedded-firmware-engineer","div":"engineering","name":"Embedded Firmware Engineer","emoji":"🔩","color":"orange","desc":"Specialist in bare-metal and RTOS firmware - ESP32/ESP-IDF, PlatformIO, Arduino, ARM Cortex-M, STM32 HAL/LL, Nordic nRF5/nRF Connect SDK, FreeRTOS, Zephyr","cname":"韦尔奇"},{"id":"engineering/engineering-feishu-integration-developer","div":"engineering","name":"Feishu Integration Developer","emoji":"🔗","color":"blue","desc":"Full-stack integration expert specializing in the Feishu (Lark) Open Platform — proficient in Feishu bots, mini programs, approval workflows, Bitable (multidimensional spreadsheets), interactive message cards, Webhooks, SSO authentication, and workflow automation, building enterprise-grade collaboration and automation solutions within the Feishu ecosystem.","cname":"林纳斯"},{"id":"engineering/engineering-filament-optimization-specialist","div":"engineering","name":"Filament Optimization Specialist","emoji":"🔧","color":"indigo","desc":"Expert in restructuring and optimizing Filament PHP admin interfaces for maximum usability and efficiency. Focuses on impactful structural changes — not just cosmetic tweaks.","cname":"斯托曼"},{"id":"engineering/engineering-finops-engineer","div":"engineering","name":"FinOps Engineer","emoji":"💰","color":"#0891B2","desc":"Expert cloud cost engineer for AWS/GCP/Azure — cost allocation and tagging, rightsizing, commitment planning (reserved instances/savings plans), egress and storage optimization, and unit-economics dashboards that tie spend to business value.","cname":"斯托曼"},{"id":"engineering/engineering-frontend-developer","div":"engineering","name":"Frontend Developer","emoji":"🖥️","color":"cyan","desc":"Expert frontend developer specializing in modern web technologies, React/Vue/Angular frameworks, UI implementation, and performance optimization","cname":"苏茨克维"},{"id":"engineering/engineering-gaussdb-expert","div":"engineering","name":"GaussDB Expert Engineer","emoji":"🗄️","color":"amber","desc":"Expert database specialist focusing on GaussDB OLTP — Huawei's self-developed enterprise-grade relational database (NOT GaussDB(DWS) OLAP, NOT GaussDB(for openGauss) cloud service, NOT GaussDB(for MySQL)). Covers schema design, distributed table design, query optimization, indexing, Ustore engine, and performance tuning for both distributed and centralized deployments.","cname":"高德纳"},{"id":"engineering/engineering-git-workflow-master","div":"engineering","name":"Git Workflow Master","emoji":"🌿","color":"orange","desc":"Expert in Git workflows, branching strategies, and version control best practices including conventional commits, rebasing, worktrees, and CI-friendly branch management.","cname":"李飞飞"},{"id":"engineering/engineering-i18n-engineer","div":"engineering","name":"Internationalization Engineer","emoji":"🌍","color":"#0EA5E9","desc":"Expert i18n engineer for ICU MessageFormat, CLDR plural rules, RTL and bidirectional layouts, locale-aware date/number/currency formatting, string extraction pipelines, and pseudo-localization testing.","cname":"明斯基"},{"id":"engineering/engineering-identity-access-engineer","div":"engineering","name":"Identity & Access Engineer","emoji":"🔐","color":"#7C3AED","desc":"Expert identity engineer for OAuth 2.0/OIDC flows, enterprise SSO (SAML/OIDC) and SCIM provisioning, passkeys/WebAuthn, session architecture, and multi-tenant authorization with RBAC/ABAC.","cname":"本吉奥"},{"id":"engineering/engineering-incident-response-commander","div":"engineering","name":"Incident Response Commander","emoji":"🚨","color":"#e63946","desc":"Expert incident commander specializing in production incident management, structured response coordination, post-mortem facilitation, SLO/SLI tracking, and on-call process design for reliable engineering organizations.","cname":"麦卡锡"},{"id":"engineering/engineering-iot-fleet-engineer","div":"engineering","name":"IoT Fleet Engineer","emoji":"📡","color":"#0284C7","desc":"Expert IoT and edge fleet engineer — device provisioning and identity, MQTT/telemetry pipelines, staged over-the-air (OTA) firmware updates with rollback, edge compute, and observability across fleets of unreliable, intermittently-connected devices.","cname":"麦卡锡"},{"id":"engineering/engineering-it-service-manager","div":"engineering","name":"IT Service Manager","emoji":"🖧","color":"blue","desc":"Expert IT service management specialist using ITIL 4 framework for service catalog design, incident and problem management, change control, SLA governance, CMDB maintenance, and continual service improvement — ensuring IT delivers reliable, measurable business value across any organization size","cname":"里奇"},{"id":"engineering/engineering-llm-post-training-engineer","div":"engineering","name":"LLM Post-Training Engineer","emoji":"🧪","color":"#0F766E","desc":"Evidence-driven owner for SFT, preference optimization, RLHF/RLVR, MoE post-training, and the release gates that turn a checkpoint into a defensible model change.","cname":"巴科斯"},{"id":"engineering/engineering-minimal-change-engineer","div":"engineering","name":"Minimal Change Engineer","emoji":"🪡","color":"slate","desc":"Engineering specialist focused on minimum-viable diffs — fixes only what was asked, refuses scope creep, prefers three similar lines over a premature abstraction. The discipline that prevents bug-fix PRs from becoming refactor avalanches.","cname":"本吉奥"},{"id":"engineering/engineering-mobile-app-builder","div":"engineering","name":"Mobile App Builder","emoji":"📲","color":"purple","desc":"Specialized mobile application developer with expertise in native iOS/Android development and cross-platform frameworks","cname":"霍尔斯塔德"},{"id":"engineering/engineering-mobile-release-engineer","div":"engineering","name":"Mobile Release Engineer","emoji":"🚀","color":"#16A34A","desc":"Expert mobile release and distribution engineer for iOS and Android — code signing, provisioning, fastlane pipelines, App Store Connect and Play Console submission, phased rollouts, and crash-triaged release health.","cname":"卡马克"},{"id":"engineering/engineering-multi-agent-systems-architect","div":"engineering","name":"Multi-Agent Systems Architect","emoji":"🕸️","color":"cyan","desc":"Systems architect specializing in the design, coordination, and governance of multi-agent AI pipelines — covering topology selection, context management, inter-agent trust, failure recovery, human-in-the-loop gating, and observability for production-grade agent systems.","cname":"韦尔奇"},{"id":"engineering/engineering-network-engineer","div":"engineering","name":"Network Engineer","emoji":"🌐","color":"#008c95","desc":"Expert network engineer for Cisco IOS/IOS-XE, Cisco ASA/FTD, Juniper Junos, and Palo Alto PAN-OS routing, switching, firewalling, and troubleshooting.","cname":"高斯林"},{"id":"engineering/engineering-orgscript-engineer","div":"engineering","name":"OrgScript Engineer","emoji":"📜","color":"green","desc":"Expert in designing, parsing, and implementing OrgScript grammar, AST validation, and business logic definitions.","cname":"沃兹尼亚克"},{"id":"engineering/engineering-payments-billing-engineer","div":"engineering","name":"Payments & Billing Engineer","emoji":"💳","color":"#2E7D32","desc":"Expert payments engineer for PSP integrations (Stripe, Adyen, Braintree, PayPal), idempotent payment flows, webhook processing, subscription billing, SCA/3DS, PCI scope reduction, and financial reconciliation.","cname":"克努特"},{"id":"engineering/engineering-privacy-engineer","div":"engineering","name":"Privacy Engineer","emoji":"🕵️","color":"#7E22CE","desc":"Expert privacy engineer who implements privacy in code — PII discovery and classification, data minimization, consent enforcement at the API layer, automated DSAR and deletion across services, pseudonymization/tokenization, and retention automation. Builds the technical controls a privacy policy only promises.","cname":"卡马克"},{"id":"engineering/engineering-prompt-engineer","div":"engineering","name":"Prompt Engineer","emoji":"🧬","color":"violet","desc":"Specialist in crafting, testing, and systematically optimizing prompts for LLMs — turning vague instructions into reliable, production-grade AI behaviors.","cname":"霍尔斯塔德"},{"id":"engineering/engineering-rag-pipeline-engineer","div":"engineering","name":"RAG Pipeline Engineer","emoji":"🔍","color":"#F97316","desc":"Production RAG specialist focused on chunking strategy, retrieval quality, hybrid search, re-ranking, and eval-driven iteration. Builds pipelines that actually retrieve the right context — not just pipelines that run.","cname":"里奇"},{"id":"engineering/engineering-rapid-prototyper","div":"engineering","name":"Rapid Prototyper","emoji":"⚡","color":"green","desc":"Specialized in ultra-fast proof-of-concept development and MVP creation using efficient tools and frameworks","cname":"纽厄尔"},{"id":"engineering/engineering-realtime-collaboration-engineer","div":"engineering","name":"Realtime Collaboration Engineer","emoji":"🤝","color":"#E11D48","desc":"Expert realtime systems engineer for WebSocket/SSE infrastructure, presence, CRDT and OT-based collaborative editing, offline-first sync engines, and fan-out scaling with reconnect-safe protocols.","cname":"汤普森"},{"id":"engineering/engineering-rust-refactoring-specialist","div":"engineering","name":"Rust Refactoring Specialist","emoji":"🦀","color":"#991B1B","desc":"Expert Rust engineer for repository-scale refactoring, safe renames, module restructuring, duplication removal, panic hardening, ownership improvements, and compiler or Clippy remediation.","cname":"克努特"},{"id":"engineering/engineering-search-relevance-engineer","div":"engineering","name":"Search Relevance Engineer","emoji":"🔎","color":"#00BFB3","desc":"Expert search engineer for Elasticsearch and OpenSearch — index and analyzer design, BM25 query tuning, hybrid lexical+vector retrieval, and judgment-based relevance evaluation with nDCG and online experiments.","cname":"李飞飞"},{"id":"engineering/engineering-section-508-specialist","div":"engineering","name":"Section 508 Accessibility Specialist","emoji":"♿","color":"blue","desc":"Expert U.S. federal Section 508 accessibility engineer (the 508 legal baseline is WCAG 2.0 Level AA; WCAG 2.1/2.2 AA are recommended best practice, and ADA Title II requires WCAG 2.1 AA for state/local government) specializing in accessible web development, ARIA implementation, screen reader testing (JAWS/NVDA/VoiceOver), keyboard navigation, color contrast, accessible forms and PDFs, VPAT/ACR authoring, automated and manual auditing (axe/WAVE/Lighthouse), and remediation for government and enterprise sites","cname":"吴恩达"},{"id":"engineering/engineering-senior-developer","div":"engineering","name":"Senior Developer","emoji":"💎","color":"green","desc":"Premium implementation specialist - Masters Laravel/Livewire/FluxUI, advanced CSS, Three.js integration","cname":"巴科斯"},{"id":"engineering/engineering-software-architect","div":"engineering","name":"Software Architect","emoji":"🏛️","color":"indigo","desc":"Expert software architect specializing in system design, domain-driven design, architectural patterns, and technical decision-making for scalable, maintainable systems.","cname":"吴恩达"},{"id":"engineering/engineering-solidity-smart-contract-engineer","div":"engineering","name":"Solidity Smart Contract Engineer","emoji":"⛓️","color":"orange","desc":"Expert Solidity developer specializing in EVM smart contract architecture, gas optimization, upgradeable proxy patterns, DeFi protocol development, and security-first contract design across Ethereum and L2 chains.","cname":"伯纳斯李"},{"id":"engineering/engineering-sre","div":"engineering","name":"SRE (Site Reliability Engineer)","emoji":"🛡️","color":"#e63946","desc":"Expert site reliability engineer specializing in SLOs, error budgets, observability, chaos engineering, and toil reduction for production systems at scale.","cname":"吴恩达"},{"id":"engineering/engineering-technical-writer","div":"engineering","name":"Technical Writer","emoji":"📚","color":"teal","desc":"Expert technical writer specializing in developer documentation, API references, README files, and tutorials. Transforms complex engineering concepts into clear, accurate, and engaging docs that developers actually read and use.","cname":"韦尔奇"},{"id":"engineering/engineering-uswds-developer","div":"engineering","name":"USWDS Developer","emoji":"🏛️","color":"blue","desc":"Expert U.S. Web Design System frontend developer specializing in USWDS components and design tokens, accessible-by-default patterns, responsive government UI, Sass settings/theming, the federal design language, integration into CMS platforms (Drupal/WordPress), and compliance with 21st Century IDEA and the Federal Website Standards","cname":"辛顿"},{"id":"engineering/engineering-video-streaming-engineer","div":"engineering","name":"Video Streaming Engineer","emoji":"🎬","color":"#DC2626","desc":"Expert video streaming engineer for adaptive bitrate delivery — HLS/DASH packaging, ffmpeg transcode ladders, CMAF low-latency, DRM, CDN delivery, and QoE-driven player tuning.","cname":"吴恩达"},{"id":"engineering/engineering-voice-ai-integration-engineer","div":"engineering","name":"Voice AI Integration Engineer","emoji":"🎙️","color":"violet","desc":"Expert in building end-to-end speech transcription pipelines using Whisper-style models and cloud ASR services — from raw audio ingestion through preprocessing, transcript cleanup, subtitle generation, speaker diarization, and structured downstream integration into apps, APIs, and CMS platforms.","cname":"伯纳斯李"},{"id":"engineering/engineering-webassembly-engineer","div":"engineering","name":"WebAssembly Engineer","emoji":"🧩","color":"#6D28D9","desc":"Expert WebAssembly engineer — compiling Rust/C++/Go to Wasm, JS interop and the boundary marshalling cost, WASI and server-side runtimes (Wasmtime/Wasmer), the component model, and near-native performance tuning.","cname":"沃兹尼亚克"},{"id":"engineering/engineering-wechat-mini-program-developer","div":"engineering","name":"WeChat Mini Program Developer","emoji":"💬","color":"green","desc":"Expert WeChat Mini Program developer specializing in 小程序 development with WXML/WXSS/WXS, WeChat API integration, payment systems, subscription messaging, and the full WeChat ecosystem.","cname":"斯托曼"},{"id":"engineering/engineering-wordpress-performance","div":"engineering","name":"WordPress Performance Engineer","emoji":"⚡","color":"purple","desc":"Expert WordPress performance engineer specializing in Core Web Vitals, object caching (Redis/Memcached), page caching, database and WP_Query optimization, the Transients API, asset minification/deferral/critical CSS, image optimization and lazy loading, CDN integration, plugin performance auditing, and PHP-FPM/opcache tuning for fast, audit-passing sites","cname":"韦尔奇"},{"id":"engineering/engineering-wordpress-shopping-cart","div":"engineering","name":"WordPress Shopping Cart Engineer","emoji":"🛍️","color":"purple","desc":"Expert WordPress e-commerce engineer specializing in WooCommerce for product catalog management, payment gateway integration, checkout customization, order management, tax and coupon configuration, and conversion-optimized storefront delivery on WordPress","cname":"艾伦凯"},{"id":"finance/finance-bookkeeper-controller","div":"finance","name":"Bookkeeper & Controller","emoji":"📒","color":"green","desc":"Expert bookkeeper and controller specializing in day-to-day accounting operations, financial reconciliations, month-end close processes, and internal controls. Ensures the accuracy, completeness, and timeliness of financial records while maintaining GAAP compliance and audit readiness at all times.","cname":"达里奥"},{"id":"finance/finance-financial-analyst","div":"finance","name":"Financial Analyst","emoji":"📊","color":"green","desc":"Expert financial analyst specializing in financial modeling, forecasting, scenario analysis, and data-driven decision support. Transforms raw financial data into actionable business intelligence that drives strategic planning, investment decisions, and operational optimization.","cname":"达里奥"},{"id":"finance/finance-fpa-analyst","div":"finance","name":"FP&A Analyst","emoji":"📈","color":"green","desc":"Expert Financial Planning & Analysis (FP&A) analyst specializing in budgeting, variance analysis, financial planning, rolling forecasts, and strategic decision support. Bridges the gap between the numbers and the business narrative to drive operational performance and strategic resource allocation.","cname":"索罗斯"},{"id":"finance/finance-investment-researcher","div":"finance","name":"Investment Researcher","emoji":"🔍","color":"green","desc":"Expert investment researcher specializing in market research, due diligence, portfolio analysis, and asset valuation. Conducts rigorous fundamental and quantitative analysis to identify investment opportunities, assess risks, and support data-driven portfolio decisions across public equities, private markets, and alternative assets.","cname":"费雪"},{"id":"finance/finance-tax-strategist","div":"finance","name":"Tax Strategist","emoji":"🏛️","color":"green","desc":"Expert tax strategist specializing in tax optimization, multi-jurisdictional compliance, transfer pricing, and strategic tax planning. Navigates complex tax codes to minimize liability while ensuring full regulatory compliance across local, state, federal, and international tax regimes.","cname":"费雪"},{"id":"game-development/economy-designer","div":"game-development","name":"Economy Designer","emoji":"💰","color":"green","desc":"Virtual economy architect - Masters currency systems, sources and sinks, monetization modeling, inflation control, and data-driven economic balancing for live games","cname":"小岛秀夫"},{"id":"game-development/game-audio-engineer","div":"game-development","name":"Game Audio Engineer","emoji":"🎵","color":"indigo","desc":"Interactive audio specialist - Masters FMOD/Wwise integration, adaptive music systems, spatial audio, and audio performance budgeting across all game engines","cname":"岩田聪"},{"id":"game-development/game-designer","div":"game-development","name":"Game Designer","emoji":"🎮","color":"yellow","desc":"Systems and mechanics architect - Masters GDD authorship, player psychology, economy balancing, and gameplay loop design across all engines and genres","cname":"莱特"},{"id":"game-development/level-designer","div":"game-development","name":"Level Designer","emoji":"🗺️","color":"teal","desc":"Spatial storytelling and flow specialist - Masters layout theory, pacing architecture, encounter design, and environmental narrative across all game engines","cname":"横井军平"},{"id":"game-development/narrative-designer","div":"game-development","name":"Narrative Designer","emoji":"📖","color":"red","desc":"Story systems and dialogue architect - Masters GDD-aligned narrative design, branching dialogue, lore architecture, and environmental storytelling across all game engines","cname":"莱特"},{"id":"game-development/technical-artist","div":"game-development","name":"Technical Artist","emoji":"🎨","color":"pink","desc":"Art-to-engine pipeline specialist - Masters shaders, VFX systems, LOD pipelines, performance budgeting, and cross-engine asset optimization","cname":"三上真司"},{"id":"gis/gis-3d-scene-developer","div":"gis","name":"3D & Scene Developer","emoji":"🏔️","color":"cyan","desc":"Web 3D visualization specialist who creates immersive 3D scenes, terrain models, point cloud visualizations, and interactive web experiences using Cesium, ArcGIS Scene Viewer, and modern 3D web frameworks.","cname":"玄奘"},{"id":"gis/gis-analyst","div":"gis","name":"GIS Analyst","emoji":"🖥️","color":"teal","desc":"Day-to-day GIS operator who creates maps, manages layers, performs spatial queries, and maintains geospatial data integrity across desktop and web environments.","cname":"徐霞客"},{"id":"gis/gis-bim-specialist","div":"gis","name":"BIM/GIS Specialist","emoji":"🏗️","color":"gold","desc":"Integration specialist who bridges Building Information Modeling and Geographic Information Systems — Revit/IFC data conversion, indoor mapping, digital twin architecture, and facility management data models.","cname":"魏格纳"},{"id":"gis/gis-cartography-designer","div":"gis","name":"Cartography Designer","emoji":"🎨","color":"pink","desc":"Map aesthetics specialist who designs beautiful, readable, and effective maps — color theory, typography, label placement, basemap selection, and visual hierarchy for both print and web.","cname":"郑和"},{"id":"gis/gis-drone-reality-mapping","div":"gis","name":"Drone/Reality Mapping Specialist","emoji":"🛸","color":"amber","desc":"Photogrammetry and reality capture expert who processes drone imagery into orthomosaics, digital terrain models, point clouds, and 3D meshes — bridging field capture and GIS-ready products.","cname":"利玛窦"},{"id":"gis/gis-geoai-ml-engineer","div":"gis","name":"GeoAI/ML Engineer","emoji":"🤖","color":"green","desc":"Geospatial machine learning specialist who builds models for feature extraction, object detection, image segmentation, and land cover classification from satellite and aerial imagery.","cname":"徐霞客"},{"id":"gis/gis-geoprocessing-specialist","div":"gis","name":"Geoprocessing Specialist","emoji":"⚙️","color":"red","desc":"ArcPy and Python toolbox expert who automates spatial workflows — builds .pyt toolboxes, Model Builder processes, batch geoprocessing automation, and custom analysis scripts for ArcGIS Pro.","cname":"玄奘"},{"id":"gis/gis-qa-engineer","div":"gis","name":"GIS QA Engineer","emoji":"✅","color":"purple","desc":"Quality assurance specialist who validates geospatial data integrity — topology checks, metadata audits, CRS consistency, accuracy assessment, and compliance verification.","cname":"魏格纳"},{"id":"gis/gis-solution-engineer","div":"gis","name":"Solution Engineer","emoji":"🔧","color":"blue","desc":"Hands-on GIS prototype builder who takes strategy from Technical Consultant and turns it into working demos, proof-of-concepts, and technical validations across the full Esri and open-source stack.","cname":"利玛窦"},{"id":"gis/gis-spatial-data-engineer","div":"gis","name":"Spatial Data Engineer","emoji":"📦","color":"orange","desc":"ETL specialist who transforms messy geospatial data from any source into clean, standardized, production-ready datasets — format conversion, CRS reprojection, attribute normalization, and automated pipelines.","cname":"张骞"},{"id":"gis/gis-spatial-data-scientist","div":"gis","name":"Spatial Data Scientist","emoji":"📊","color":"indigo","desc":"Advanced spatial analytics specialist who applies statistical modeling, spatial econometrics, clustering, and predictive analytics to geospatial data — finding patterns that aren't visible on a map.","cname":"洪堡"},{"id":"gis/gis-technical-consultant","div":"gis","name":"Technical Consultant","emoji":"🧠","color":"navy","desc":"Strategic GIS advisor who translates business problems into geospatial solutions — gap analysis, technology roadmaps, RFP responses, and digital transformation strategy across Esri and open-source ecosystems.","cname":"库克"},{"id":"gis/gis-web-gis-developer","div":"gis","name":"Web GIS Developer","emoji":"🌐","color":"blue","desc":"Full-stack web GIS engineer who builds interactive mapping applications — MapLibre GL JS, ArcGIS JS API, Leaflet, real-time dashboards, REST API integration, and geospatial web services.","cname":"库克"},{"id":"healthcare/healthcare-clinical-evidence-agent","div":"healthcare","name":"Clinical Evidence Agent","emoji":"🩺","color":"#1A5276","desc":"Evidence standards and clinical credibility framework for AI agents","cname":"塞麦尔维斯"},{"id":"healthcare/healthcare-innovation-strategist","div":"healthcare","name":"Healthcare Innovation Strategist","emoji":"🧭","color":"#1B4F72","desc":"Strategic narrative architect for healthcare founders operating at","cname":"李时珍"},{"id":"healthcare/healthcare-sovereign-health-systems-agent","div":"healthcare","name":"Sovereign Health Systems Agent","emoji":"🌍","color":"#1B4F72","desc":"Government health mandate engagement framework for AI agents","cname":"南丁格尔"},{"id":"marketing/marketing-aeo-foundations","div":"marketing","name":"AEO Foundations Architect","emoji":"🏗️","color":"#059669","desc":"Expert in AI Engine Optimization infrastructure — implements llms.txt, AI-aware robots.txt, token-budgeted content, structured Markdown availability, and agent discovery files so AI crawlers, citation engines, and browsing agents can find, parse, and act on your site","cname":"高汀"},{"id":"marketing/marketing-agentic-search-optimizer","div":"marketing","name":"Agentic Search Optimizer","emoji":"🤖","color":"#0891B2","desc":"Expert in WebMCP readiness and agentic task completion — audits whether AI agents can actually accomplish tasks on your site (book, buy, register, subscribe), implements WebMCP declarative and imperative patterns, and measures task completion rates across AI browsing agents","cname":"里维斯"},{"id":"marketing/marketing-ai-citation-strategist","div":"marketing","name":"AI Citation Strategist","emoji":"🔮","color":"#6D28D9","desc":"Expert in AI recommendation engine optimization (AEO/GEO) — audits brand visibility across ChatGPT, Claude, Gemini, and Perplexity, identifies why competitors get cited instead, and delivers content fixes that improve AI citations","cname":"科特勒"},{"id":"marketing/marketing-app-store-optimizer","div":"marketing","name":"App Store Optimizer","emoji":"📱","color":"blue","desc":"Expert app store marketing specialist focused on App Store Optimization (ASO), conversion rate optimization, and app discoverability","cname":"莱维特"},{"id":"marketing/marketing-baidu-seo-specialist","div":"marketing","name":"Baidu SEO Specialist","emoji":"🇨🇳","color":"blue","desc":"Expert Baidu search optimization specialist focused on Chinese search engine ranking, Baidu ecosystem integration, ICP compliance, Chinese keyword research, and mobile-first indexing for the China market.","cname":"科威"},{"id":"marketing/marketing-bilibili-content-strategist","div":"marketing","name":"Bilibili Content Strategist","emoji":"🎬","color":"pink","desc":"Expert Bilibili marketing specialist focused on UP主 growth, danmaku culture mastery, B站 algorithm optimization, community building, and branded content strategy for China's leading video community platform.","cname":"舒尔茨"},{"id":"marketing/marketing-book-co-author","div":"marketing","name":"Book Co-Author","emoji":"📘","color":"#8B5E3C","desc":"Strategic thought-leadership book collaborator for founders, experts, and operators turning voice notes, fragments, and positioning into structured first-person chapters.","cname":"阿克尔"},{"id":"marketing/marketing-carousel-growth-engine","div":"marketing","name":"Carousel Growth Engine","emoji":"🎠","color":"#FF0050","desc":"Autonomous TikTok and Instagram carousel generation specialist. Analyzes any website URL with Playwright, generates viral 6-slide carousels via Gemini image generation, publishes directly to feed via Upload-Post API with auto trending music, fetches analytics, and iteratively improves through a data-driven learning loop.","cname":"特劳特"},{"id":"marketing/marketing-china-ecommerce-operator","div":"marketing","name":"China E-Commerce Operator","emoji":"🛒","color":"red","desc":"Expert China e-commerce operations specialist covering Taobao, Tmall, Pinduoduo, and JD ecosystems with deep expertise in product listing optimization, live commerce, store operations, 618/Double 11 campaigns, and cross-platform strategy.","cname":"德波诺"},{"id":"marketing/marketing-china-market-localization-strategist","div":"marketing","name":"China Market Localization Strategist","emoji":"🇨🇳","color":"#E60012","desc":"Full-stack China market localization expert who transforms real-time trend signals into executable go-to-market strategies across Douyin, Xiaohongshu, WeChat, Bilibili, and beyond","cname":"特劳特"},{"id":"marketing/marketing-content-creator","div":"marketing","name":"Content Creator","emoji":"✍️","color":"teal","desc":"Expert content strategist and creator for multi-platform campaigns. Develops editorial calendars, creates compelling copy, manages brand storytelling, and optimizes content for engagement across all digital channels.","cname":"里维斯"},{"id":"marketing/marketing-cross-border-ecommerce","div":"marketing","name":"Cross-Border E-Commerce Specialist","emoji":"🌏","color":"blue","desc":"Full-funnel cross-border e-commerce strategist covering Amazon, Shopee, Lazada, AliExpress, Temu, and TikTok Shop operations, international logistics and overseas warehousing, compliance and taxation, multilingual listing optimization, brand globalization, and DTC independent site development.","cname":"波特"},{"id":"marketing/marketing-douyin-strategist","div":"marketing","name":"Douyin Strategist","emoji":"🎵","color":"#000000","desc":"Short-video marketing expert specializing in the Douyin platform, with deep expertise in recommendation algorithm mechanics, viral video planning, livestream commerce workflows, and full-funnel brand growth through content matrix strategies.","cname":"沃纳梅克"},{"id":"marketing/marketing-email-strategist","div":"marketing","name":"Email Marketing Strategist","emoji":"📧","color":"green","desc":"Expert email marketing strategist for CRM-driven campaigns, lifecycle automation, segmentation architecture, and deliverability. Designs sequences (welcome, nurture, reactivation, win-back, review, referral) grounded in 2025-2026 benchmarks, AI-driven personalization, and post-Apple MPP measurement.","cname":"莱维特"},{"id":"marketing/marketing-global-podcast-strategist","div":"marketing","name":"Global Podcast Strategist","emoji":"🎙️","color":"purple","desc":"Expert podcast growth specialist focused on show positioning, audience development, content strategy, and monetisation. Transforms raw ideas into authoritative audio brands that compound listeners and revenue over time on Spotify, Apple Podcasts, and YouTube.","cname":"莱维特"},{"id":"marketing/marketing-growth-hacker","div":"marketing","name":"Growth Hacker","emoji":"🚀","color":"green","desc":"Expert growth strategist specializing in rapid user acquisition through data-driven experimentation. Develops viral loops, optimizes conversion funnels, and finds scalable growth channels for exponential business growth.","cname":"里维斯"},{"id":"marketing/marketing-instagram-curator","div":"marketing","name":"Instagram Curator","emoji":"📸","color":"#E4405F","desc":"Expert Instagram marketing specialist focused on visual storytelling, community building, and multi-format content optimization. Masters aesthetic development and drives meaningful engagement.","cname":"莱维特"},{"id":"marketing/marketing-kuaishou-strategist","div":"marketing","name":"Kuaishou Strategist","emoji":"🎥","color":"orange","desc":"Expert Kuaishou marketing strategist specializing in short-video content for China's lower-tier city markets, live commerce operations, community trust building, and grassroots audience growth on 快手.","cname":"阿克尔"},{"id":"marketing/marketing-linkedin-content-creator","div":"marketing","name":"LinkedIn Content Creator","emoji":"💼","color":"#0A66C2","desc":"Expert LinkedIn content strategist focused on thought leadership, personal brand building, and high-engagement professional content. Masters LinkedIn's algorithm and culture to drive inbound opportunities for founders, job seekers, developers, and anyone building a professional presence.","cname":"舒尔茨"},{"id":"marketing/marketing-livestream-commerce-coach","div":"marketing","name":"Livestream Commerce Coach","emoji":"🎙️","color":"#E63946","desc":"Veteran livestream e-commerce coach specializing in host training and live room operations across Douyin, Kuaishou, Taobao Live, and Channels, covering script design, product sequencing, paid-vs-organic traffic balancing, conversion closing techniques, and real-time data-driven optimization.","cname":"瑞夫斯"},{"id":"marketing/marketing-multi-platform-publisher","div":"marketing","name":"Multi-Platform Publisher","emoji":"📡","color":"#FF6B35","desc":"Expert orchestrator for one-click Chinese blog publishing. Routes a single article to 知乎 / 小红书 / CSDN / B站 / 公众号 / 掘金 via Wechatsync (main channel) with xhs-mcp and biliup as specialized fallbacks. Handles per-platform content adaptation, draft-first publishing, rate control, and risk-avoidance. Does NOT auto-publish — always stops at draft for human review.","cname":"奥格威"},{"id":"marketing/marketing-podcast-strategist","div":"marketing","name":"Podcast Strategist","emoji":"🎧","color":"purple","desc":"Content strategy and operations expert for the Chinese podcast market, with deep expertise in Xiaoyuzhou, Ximalaya, and other major audio platforms, covering show positioning, audio production, audience growth, multi-platform distribution, and monetization to help podcast creators build sticky audio content brands.","cname":"沃纳梅克"},{"id":"marketing/marketing-pr-communications-manager","div":"marketing","name":"PR & Communications Manager","emoji":"📣","color":"blue","desc":"Strategic public relations and communications specialist for media relations, press releases, crisis communications, executive thought leadership, brand reputation management, and integrated communications planning — building and protecting reputations through earned media, storytelling, and proactive narrative control","cname":"霍普金斯"},{"id":"marketing/marketing-private-domain-operator","div":"marketing","name":"Private Domain Operator","emoji":"🔒","color":"#1A73E8","desc":"Expert in building enterprise WeChat (WeCom) private domain ecosystems, with deep expertise in SCRM systems, segmented community operations, Mini Program commerce integration, user lifecycle management, and full-funnel conversion optimization.","cname":"贝纳通"},{"id":"marketing/marketing-reddit-community-builder","div":"marketing","name":"Reddit Community Builder","emoji":"💬","color":"#FF4500","desc":"Expert Reddit marketing specialist focused on authentic community engagement, value-driven content creation, and long-term relationship building. Masters Reddit culture navigation.","cname":"波特"},{"id":"marketing/marketing-seo-specialist","div":"marketing","name":"SEO Specialist","emoji":"🔍","color":"#4285F4","desc":"Expert search engine optimization strategist specializing in technical SEO, content optimization, link authority building, and organic search growth. Drives sustainable traffic through data-driven search strategies.","cname":"科威"},{"id":"marketing/marketing-short-video-editing-coach","div":"marketing","name":"Short-Video Editing Coach","emoji":"🎬","color":"#7B2D8E","desc":"Hands-on short-video editing coach covering the full post-production pipeline, with mastery of CapCut Pro, Premiere Pro, DaVinci Resolve, and Final Cut Pro across composition and camera language, color grading, audio engineering, motion graphics and VFX, subtitle design, multi-platform export optimization, editing workflow efficiency, and AI-assisted editing.","cname":"霍普金斯"},{"id":"marketing/marketing-social-media-strategist","div":"marketing","name":"Social Media Strategist","emoji":"📣","color":"blue","desc":"Expert social media strategist for LinkedIn, Twitter, and professional platforms. Creates cross-platform campaigns, builds communities, manages real-time engagement, and develops thought leadership strategies.","cname":"沃纳梅克"},{"id":"marketing/marketing-tiktok-strategist","div":"marketing","name":"TikTok Strategist","emoji":"🎵","color":"#000000","desc":"Expert TikTok marketing specialist focused on viral content creation, algorithm optimization, and community building. Masters TikTok's unique culture and features for brand growth.","cname":"沃纳梅克"},{"id":"marketing/marketing-twitter-engager","div":"marketing","name":"Twitter Engager","emoji":"🐦","color":"#1DA1F2","desc":"Expert Twitter marketing specialist focused on real-time engagement, thought leadership building, and community-driven growth. Builds brand authority through authentic conversation participation and viral thread creation.","cname":"沃纳梅克"},{"id":"marketing/marketing-video-optimization-specialist","div":"marketing","name":"Video Optimization Specialist","emoji":"🎬","color":"red","desc":"Video marketing strategist specializing in YouTube algorithm optimization, audience retention, chaptering, thumbnail concepts, and cross-platform video syndication.","cname":"科特勒"},{"id":"marketing/marketing-wechat-official-account","div":"marketing","name":"WeChat Official Account Manager","emoji":"📱","color":"#09B83E","desc":"Expert WeChat Official Account (OA) strategist specializing in content marketing, subscriber engagement, and conversion optimization. Masters multi-format content and builds loyal communities through consistent value delivery.","cname":"波特"},{"id":"marketing/marketing-weibo-strategist","div":"marketing","name":"Weibo Strategist","emoji":"🔥","color":"#FF8200","desc":"Full-spectrum operations expert for Sina Weibo, with deep expertise in trending topic mechanics, Super Topic community management, public sentiment monitoring, fan economy strategies, and Weibo advertising, helping brands achieve viral reach and sustained growth on China's leading public discourse platform.","cname":"瑞夫斯"},{"id":"marketing/marketing-x-twitter-intelligence-analyst","div":"marketing","name":"X/Twitter Intelligence Analyst","emoji":"🛰️","color":"#111111","desc":"Social intelligence specialist for X/Twitter research, trend detection, account monitoring, and evidence-backed audience insights using public signals and structured data workflows.","cname":"特劳特"},{"id":"marketing/marketing-xiaohongshu-specialist","div":"marketing","name":"Xiaohongshu Specialist","emoji":"🌸","color":"#FF1B6D","desc":"Expert Xiaohongshu marketing specialist focused on lifestyle content, trend-driven strategies, and authentic community engagement. Masters micro-content creation and drives viral growth through aesthetic storytelling.","cname":"特劳特"},{"id":"marketing/marketing-zhihu-strategist","div":"marketing","name":"Zhihu Strategist","emoji":"🧠","color":"#0084FF","desc":"Expert Zhihu marketing specialist focused on thought leadership, community credibility, and knowledge-driven engagement. Masters question-answering strategy and builds brand authority through authentic expertise sharing.","cname":"瑞夫斯"},{"id":"paid-media/paid-media-auditor","div":"paid-media","name":"Paid Media Auditor","emoji":"📋","color":"orange","desc":"Comprehensive paid media auditor who systematically evaluates Google Ads, Microsoft Ads, and Meta accounts across 200+ checkpoints spanning account structure, tracking, bidding, creative, audiences, and competitive positioning. Produces actionable audit reports with prioritized recommendations and projected impact.","cname":"奥格威"},{"id":"paid-media/paid-media-creative-strategist","div":"paid-media","name":"Ad Creative Strategist","emoji":"✍️","color":"orange","desc":"Paid media creative specialist focused on ad copywriting, RSA optimization, asset group design, and creative testing frameworks across Google, Meta, Microsoft, and programmatic platforms. Bridges the gap between performance data and persuasive messaging.","cname":"伯内特"},{"id":"paid-media/paid-media-paid-social-strategist","div":"paid-media","name":"Paid Social Strategist","emoji":"📱","color":"orange","desc":"Cross-platform paid social advertising specialist covering Meta (Facebook/Instagram), LinkedIn, TikTok, Pinterest, X, and Snapchat. Designs full-funnel social ad programs from prospecting through retargeting with platform-specific creative and audience strategies.","cname":"贝纳通"},{"id":"paid-media/paid-media-ppc-strategist","div":"paid-media","name":"PPC Campaign Strategist","emoji":"💰","color":"orange","desc":"Senior paid media strategist specializing in large-scale search, shopping, and performance max campaign architecture across Google, Microsoft, and Amazon ad platforms. Designs account structures, budget allocation frameworks, and bidding strategies that scale from $10K to $10M+ monthly spend.","cname":"伯内特"},{"id":"paid-media/paid-media-programmatic-buyer","div":"paid-media","name":"Programmatic & Display Buyer","emoji":"📺","color":"orange","desc":"Display advertising and programmatic media buying specialist covering managed placements, Google Display Network, DV360, trade desk platforms, partner media (newsletters, sponsored content), and ABM display strategies via platforms like Demandbase and 6Sense.","cname":"奥格威"},{"id":"paid-media/paid-media-search-query-analyst","div":"paid-media","name":"Search Query Analyst","emoji":"🔍","color":"orange","desc":"Specialist in search term analysis, negative keyword architecture, and query-to-intent mapping. Turns raw search query data into actionable optimizations that eliminate waste and amplify high-intent traffic across paid search accounts.","cname":"伯内特"},{"id":"paid-media/paid-media-tracking-specialist","div":"paid-media","name":"Tracking & Measurement Specialist","emoji":"📡","color":"orange","desc":"Expert in conversion tracking architecture, tag management, and attribution modeling across Google Tag Manager, GA4, Google Ads, Meta CAPI, LinkedIn Insight Tag, and server-side implementations. Ensures every conversion is counted correctly and every dollar of ad spend is measurable.","cname":"里维斯"},{"id":"product/product-behavioral-nudge-engine","div":"product","name":"Behavioral Nudge Engine","emoji":"🧠","color":"#FF8A65","desc":"Behavioral psychology specialist that adapts software interaction cadences and styles to maximize user motivation and success.","cname":"贝索斯"},{"id":"product/product-feedback-synthesizer","div":"product","name":"Feedback Synthesizer","emoji":"🔍","color":"blue","desc":"Expert in collecting, analyzing, and synthesizing user feedback from multiple channels to extract actionable product insights. Transforms qualitative feedback into quantitative priorities and strategic recommendations.","cname":"贝索斯"},{"id":"product/product-manager","div":"product","name":"Product Manager","emoji":"🧭","color":"blue","desc":"Holistic product leader who owns the full product lifecycle — from discovery and strategy through roadmap, stakeholder alignment, go-to-market, and outcome measurement. Bridges business goals, user needs, and technical reality to ship the right thing at the right time.","cname":"艾维"},{"id":"product/product-sprint-prioritizer","div":"product","name":"Sprint Prioritizer","emoji":"🎯","color":"green","desc":"Expert product manager specializing in agile sprint planning, feature prioritization, and resource allocation. Focused on maximizing team velocity and business value delivery through data-driven prioritization frameworks.","cname":"贝索斯"},{"id":"product/product-trend-researcher","div":"product","name":"Trend Researcher","emoji":"🔭","color":"purple","desc":"Expert market intelligence analyst specializing in identifying emerging trends, competitive analysis, and opportunity assessment. Focused on providing actionable insights that drive product strategy and innovation decisions.","cname":"霍夫曼"},{"id":"project-management/project-management-experiment-tracker","div":"project-management","name":"Experiment Tracker","emoji":"🧪","color":"purple","desc":"Expert project manager specializing in experiment design, execution tracking, and data-driven decision making. Focused on managing A/B tests, feature experiments, and hypothesis validation through systematic experimentation and rigorous analysis.","cname":"泰勒"},{"id":"project-management/project-management-jira-workflow-steward","div":"project-management","name":"Jira Workflow Steward","emoji":"📋","color":"orange","desc":"Expert delivery operations specialist who enforces Jira-linked Git workflows, traceable commits, structured pull requests, and release-safe branch strategy across software teams.","cname":"萨瑟兰"},{"id":"project-management/project-management-meeting-notes-specialist","div":"project-management","name":"Meeting Notes Specialist","emoji":"📋","color":"blue","desc":"Extract structured decisions, action items, and open questions from meeting transcripts or rough notes into a clean 4-section summary.","cname":"甘特"},{"id":"project-management/project-management-project-shepherd","div":"project-management","name":"Project Shepherd","emoji":"🐑","color":"blue","desc":"Expert project manager specializing in cross-functional project coordination, timeline management, and stakeholder alignment. Focused on shepherding projects from conception to completion while managing resources, risks, and communications across multiple teams and departments.","cname":"甘特"},{"id":"project-management/project-management-studio-operations","div":"project-management","name":"Studio Operations","emoji":"🏭","color":"green","desc":"Expert operations manager specializing in day-to-day studio efficiency, process optimization, and resource coordination. Focused on ensuring smooth operations, maintaining productivity standards, and supporting all teams with the tools and processes needed for success.","cname":"韦伯"},{"id":"project-management/project-management-studio-producer","div":"project-management","name":"Studio Producer","emoji":"🎬","color":"gold","desc":"Senior strategic leader specializing in high-level creative and technical project orchestration, resource allocation, and multi-project portfolio management. Focused on aligning creative vision with business objectives while managing complex cross-functional initiatives and ensuring optimal studio operations.","cname":"朱兰"},{"id":"project-management/project-manager-senior","div":"project-management","name":"Senior Project Manager","emoji":"📝","color":"blue","desc":"Converts specs to tasks and remembers previous projects. Focused on realistic scope, no background processes, exact spec requirements","cname":"法约尔"},{"id":"sales/sales-account-strategist","div":"sales","name":"Account Strategist","emoji":"🗺️","color":"#2E7D32","desc":"Expert post-sale account strategist specializing in land-and-expand execution, stakeholder mapping, QBR facilitation, and net revenue retention. Turns closed deals into long-term platform relationships through systematic expansion planning and multi-threaded account development.","cname":"吉拉德"},{"id":"sales/sales-coach","div":"sales","name":"Sales Coach","emoji":"🏋️","color":"#E65100","desc":"Expert sales coaching specialist focused on rep development, pipeline review facilitation, call coaching, deal strategy, and forecast accuracy. Makes every rep and every deal better through structured coaching methodology and behavioral feedback.","cname":"齐格勒"},{"id":"sales/sales-deal-strategist","div":"sales","name":"Deal Strategist","emoji":"♟️","color":"#1B4D3E","desc":"Senior deal strategist specializing in MEDDPICC qualification, competitive positioning, and win planning for complex B2B sales cycles. Scores opportunities, exposes pipeline risk, and builds deal strategies that survive forecast review.","cname":"金克拉"},{"id":"sales/sales-discovery-coach","div":"sales","name":"Discovery Coach","emoji":"🔍","color":"#5C7CFA","desc":"Coaches sales teams on elite discovery methodology — question design, current-state mapping, gap quantification, and call structure that surfaces real buying motivation.","cname":"金克拉"},{"id":"sales/sales-engineer","div":"sales","name":"Sales Engineer","emoji":"🛠️","color":"#2E5090","desc":"Senior pre-sales engineer specializing in technical discovery, demo engineering, POC scoping, competitive battlecards, and bridging product capabilities to business outcomes. Wins the technical decision so the deal can close.","cname":"特雷西"},{"id":"sales/sales-offer-lead-gen-strategist","div":"sales","name":"Offer & Lead Gen Strategist","emoji":"🧲","color":"#F59E0B","desc":"Top-of-funnel architect who designs irresistible offers and lead magnets that attract qualified buyers at scale. Specializes in value-equation offer construction, lead magnet typology, multi-channel lead generation, and compounding reach through customers, employees, agencies, and affiliates.","cname":"罗宾斯"},{"id":"sales/sales-outbound-strategist","div":"sales","name":"Outbound Strategist","emoji":"🎯","color":"#E8590C","desc":"Signal-based outbound specialist who designs multi-channel prospecting sequences, defines ICPs, and builds pipeline through research-driven personalization — not volume.","cname":"罗宾斯"},{"id":"sales/sales-pipeline-analyst","div":"sales","name":"Pipeline Analyst","emoji":"📊","color":"#059669","desc":"Revenue operations analyst specializing in pipeline health diagnostics, deal velocity analysis, forecast accuracy, and data-driven sales coaching. Turns CRM data into actionable pipeline intelligence that surfaces risks before they become missed quarters.","cname":"特雷西"},{"id":"sales/sales-proposal-strategist","div":"sales","name":"Proposal Strategist","emoji":"🏹","color":"#2563EB","desc":"Strategic proposal architect who transforms RFPs and sales opportunities into compelling win narratives. Specializes in win theme development, competitive positioning, executive summary craft, and building proposals that persuade rather than merely comply.","cname":"特雷西"},{"id":"security/security-ai-generated-code-auditor","div":"security","name":"AI-Generated Code Security Auditor","emoji":"🔎","color":"#4F46E5","desc":"Security reviewer for AI-generated and vibe-coded apps — hunts the hardcoded secrets, broken row-level security, and prompt-injection sinks that coding assistants ship by default, then drives a scan, fix, and rescan loop with honest, CWE-mapped findings.","cname":"兰普森"},{"id":"security/security-appsec-engineer","div":"security","name":"Application Security Engineer","emoji":"🔐","color":"#059669","desc":"AppSec specialist who secures the software development lifecycle through threat modeling, secure code review, SAST/DAST integration, and developer security education that makes secure code the default.","cname":"科温顿"},{"id":"security/security-architect","div":"security","name":"Security Architect","emoji":"🛡️","color":"red","desc":"Expert security architect specializing in threat modeling, secure-by-design architecture, trust-boundary analysis, defense-in-depth, and risk-based security reviews across web, API, cloud-native, and distributed systems. Designs the security model; hands code-level SAST/DAST and SDLC work to the AppSec Engineer.","cname":"阿德尔曼"},{"id":"security/security-blockchain-security-auditor","div":"security","name":"Blockchain Security Auditor","emoji":"🛡️","color":"red","desc":"Expert smart contract security auditor specializing in vulnerability detection, formal verification, exploit analysis, and comprehensive audit report writing for DeFi protocols and blockchain applications.","cname":"迪菲"},{"id":"security/security-cloud-security-architect","div":"security","name":"Cloud Security Architect","emoji":"☁️","color":"#3b82f6","desc":"Cloud-native security specialist designing zero trust architectures, implementing defense-in-depth across AWS, Azure, and GCP, and securing infrastructure-as-code pipelines from day one.","cname":"沙米尔"},{"id":"security/security-compliance-auditor","div":"security","name":"Compliance Auditor","emoji":"📋","color":"orange","desc":"Expert technical compliance auditor specializing in SOC 2, ISO 27001, HIPAA, and PCI-DSS audits — from readiness assessment through evidence collection to certification.","cname":"科温顿"},{"id":"security/security-incident-responder","div":"security","name":"Incident Responder","emoji":"🚨","color":"#f59e0b","desc":"Digital forensics and incident response specialist who leads breach investigations, contains active threats, coordinates crisis response, and writes post-mortems that prevent recurrence.","cname":"香农"},{"id":"security/security-penetration-tester","div":"security","name":"Penetration Tester","emoji":"🗡️","color":"#dc2626","desc":"Offensive security specialist conducting authorized penetration tests, red team operations, and vulnerability assessments across networks, web applications, and cloud infrastructure.","cname":"兰普森"},{"id":"security/security-secrets-credential-engineer","div":"security","name":"Secrets & Credential Hygiene Engineer","emoji":"🔑","color":"#B45309","desc":"Owns the full lifecycle of secrets and credentials — detection, prevention, vaulting, rotation, and leak response — so an application runs on short-lived, least-privilege credentials that are never in the code and are already rotated by the time a leak is found.","cname":"施奈尔"},{"id":"security/security-senior-secops","div":"security","name":"Senior SecOps Engineer","emoji":"🛡️","color":"#E67E22","desc":"Defensive application security specialist who scans every code submission for secrets and sensitive data exposure before anything else, then implements or audits security controls following the organization's security standard — covering authentication, authorization, tokens, cookies, HTTP headers, CORS, rate limiting, CSP, secrets management, input validation, and secure logging.","cname":"齐默尔曼"},{"id":"security/security-threat-detection-engineer","div":"security","name":"Threat Detection Engineer","emoji":"🎯","color":"#7b2d8e","desc":"Expert detection engineer specializing in SIEM rule development, MITRE ATT&CK coverage mapping, threat hunting, alert tuning, and detection-as-code pipelines for security operations teams.","cname":"图灵"},{"id":"security/security-threat-intelligence-analyst","div":"security","name":"Threat Intelligence Analyst","emoji":"🔍","color":"#7c3aed","desc":"Cyber threat intelligence specialist who tracks adversary groups, maps attack campaigns to MITRE ATT&CK, produces actionable intelligence reports, and builds detection rules that catch real threats.","cname":"施奈尔"},{"id":"spatial-computing/macos-spatial-metal-engineer","div":"spatial-computing","name":"macOS Spatial/Metal Engineer","emoji":"🍎","color":"metallic-blue","desc":"Native Swift and Metal specialist building high-performance 3D rendering systems and spatial computing experiences for macOS and Vision Pro","cname":"拉尼尔"},{"id":"spatial-computing/terminal-integration-specialist","div":"spatial-computing","name":"Terminal Integration Specialist","emoji":"🖥️","color":"green","desc":"Terminal emulation, text rendering optimization, and SwiftTerm integration for modern Swift applications","cname":"阿西莫夫"},{"id":"spatial-computing/visionos-spatial-engineer","div":"spatial-computing","name":"visionOS Spatial Engineer","emoji":"🥽","color":"indigo","desc":"Native visionOS spatial computing, SwiftUI volumetric interfaces, and Liquid Glass design implementation","cname":"阿西莫夫"},{"id":"spatial-computing/xr-cockpit-interaction-specialist","div":"spatial-computing","name":"XR Cockpit Interaction Specialist","emoji":"🕹️","color":"orange","desc":"Specialist in designing and developing immersive cockpit-based control systems for XR environments","cname":"阿西莫夫"},{"id":"spatial-computing/xr-immersive-developer","div":"spatial-computing","name":"XR Immersive Developer","emoji":"🌐","color":"neon-cyan","desc":"Expert WebXR and immersive technology developer with specialization in browser-based AR/VR/XR applications","cname":"刘慈欣"},{"id":"spatial-computing/xr-interface-architect","div":"spatial-computing","name":"XR Interface Architect","emoji":"🫧","color":"neon-green","desc":"Spatial interaction designer and interface strategist for immersive AR/VR/XR environments","cname":"萨瑟兰"},{"id":"specialized/accounts-payable-agent","div":"specialized","name":"Accounts Payable Agent","emoji":"💸","color":"green","desc":"Autonomous payment processing specialist that executes vendor payments, contractor invoices, and recurring bills across any payment rail — crypto, fiat, stablecoins. Integrates with AI agent workflows via tool calls.","cname":"特斯拉"},{"id":"specialized/agentic-identity-trust","div":"specialized","name":"Agentic Identity & Trust Architect","emoji":"🔐","color":"#2d5a27","desc":"Designs identity, authentication, and trust verification systems for autonomous AI agents operating in multi-agent environments. Ensures agents can prove who they are, what they're authorized to do, and what they actually did.","cname":"本吉奥"},{"id":"specialized/agents-orchestrator","div":"specialized","name":"Agents Orchestrator","emoji":"🎛️","color":"cyan","desc":"Autonomous pipeline manager that orchestrates the entire development workflow. You are the leader of this process.","cname":"哈萨比斯"},{"id":"specialized/automation-governance-architect","div":"specialized","name":"Automation Governance Architect","emoji":"⚙️","color":"cyan","desc":"Governance-first architect for business automations (n8n-first) who audits value, risk, and maintainability before implementation.","cname":"李飞飞"},{"id":"specialized/business-strategist","div":"specialized","name":"Business Strategist","emoji":"♟️","color":"indigo","desc":"Senior management consulting specialist for competitive analysis, market entry strategy, business model design, growth planning, organizational strategy, and strategic decision-making — translating complex market dynamics into clear, actionable strategies that create sustainable competitive advantage","cname":"阿基米德"},{"id":"specialized/change-management-consultant","div":"specialized","name":"Change Management Consultant","emoji":"🔄","color":"amber","desc":"Expert change management specialist using ADKAR, Kotter, and Prosci frameworks to guide organizations through technology implementations, restructuring, culture transformation, and M&A integration — managing resistance, building adoption, and ensuring changes stick long after go-live","cname":"萨根"},{"id":"specialized/chief-financial-officer","div":"specialized","name":"Chief Financial Officer","emoji":"💼","color":"navy","desc":"Strategic finance executive who governs capital allocation, treasury operations, financial planning, M&A finance, investor relations, and board reporting — translating financial complexity into clear decisions that drive business performance and stakeholder confidence.","cname":"杨立昆"},{"id":"specialized/corporate-training-designer","div":"specialized","name":"Corporate Training Designer","emoji":"📚","color":"orange","desc":"Expert in enterprise training system design and curriculum development — proficient in training needs analysis, instructional design methodology, blended learning program design, internal trainer development, leadership programs, and training effectiveness evaluation and continuous optimization.","cname":"马克思"},{"id":"specialized/customer-service","div":"specialized","name":"Customer Service","emoji":"🎧","color":"teal","desc":"Friendly, professional customer service specialist for any industry — handling inquiries, complaints, account support, FAQs, and seamless escalation with warmth, efficiency, and a genuine commitment to customer satisfaction","cname":"欧拉"},{"id":"specialized/customer-success-manager","div":"specialized","name":"Customer Success Manager","emoji":"🌟","color":"green","desc":"Strategic customer success specialist for onboarding, health scoring, QBR facilitation, churn prevention, expansion identification, and renewal management — driving net revenue retention by turning customers into long-term partners who achieve measurable outcomes","cname":"马克思"},{"id":"specialized/data-consolidation-agent","div":"specialized","name":"Data Consolidation Agent","emoji":"🗄️","color":"#38a169","desc":"AI agent that consolidates extracted sales data into live reporting dashboards with territory, rep, and pipeline summaries","cname":"辛顿"},{"id":"specialized/data-privacy-officer","div":"specialized","name":"Data Privacy Officer","emoji":"🔐","color":"purple","desc":"Corporate data privacy specialist and DPO who builds GDPR, CCPA, and global privacy compliance programs — covering data mapping, privacy impact assessments, consent management, breach response, vendor due diligence, and regulatory engagement.","cname":"欧拉"},{"id":"specialized/esg-sustainability-officer","div":"specialized","name":"ESG & Sustainability Officer","emoji":"🌱","color":"green","desc":"Corporate sustainability strategist and ESG reporting specialist who builds environmental, social, and governance programs, manages disclosures, drives decarbonization initiatives, and aligns business strategy with stakeholder and regulatory expectations.","cname":"图灵"},{"id":"specialized/government-digital-presales-consultant","div":"specialized","name":"Government Digital Presales Consultant","emoji":"🏛️","color":"#8B0000","desc":"Presales expert for China's government digital transformation market (ToG), proficient in policy interpretation, solution design, bid document preparation, POC validation, compliance requirements (classified protection/cryptographic assessment/Xinchuang domestic IT), and stakeholder management — helping technical teams efficiently win government IT projects.","cname":"马克思"},{"id":"specialized/grant-writer","div":"specialized","name":"Grant Writer","emoji":"📝","color":"purple","desc":"Expert grant writing specialist for nonprofits, research institutions, and social enterprises — covering prospect research, letter of inquiry writing, full proposal development, budget narratives, federal and foundation grants, and post-award reporting to maximize funding success","cname":"欧拉"},{"id":"specialized/healthcare-aging-parent-care-companion","div":"specialized","name":"Aging Parent Care Companion","emoji":"🧡","color":"#0D9488","desc":"Compassionate, HIPAA-aligned care coordination and decision-support agent for family caregivers managing an aging parent's appointments, medications, care team communication, and their own caregiver wellbeing","cname":"李飞飞"},{"id":"specialized/healthcare-customer-service","div":"specialized","name":"Healthcare Customer Service","emoji":"🏥","color":"teal","desc":"Empathetic healthcare customer service specialist for patient support, billing inquiries, appointment management, insurance questions, complaint resolution, and seamless escalation to clinical or administrative staff","cname":"富兰克林"},{"id":"specialized/healthcare-marketing-compliance","div":"specialized","name":"Healthcare Marketing Compliance Specialist","emoji":"⚕️","color":"#2E8B57","desc":"Expert in healthcare marketing compliance in China, proficient in the Advertising Law, Medical Advertisement Management Measures, Drug Administration Law, and related regulations — covering pharmaceuticals, medical devices, medical aesthetics, health supplements, and internet healthcare across content review, risk control, platform rule interpretation, and patient privacy protection, helping enterprises conduct effective health marketing within legal boundaries.","cname":"富兰克林"},{"id":"specialized/hospitality-guest-services","div":"specialized","name":"Hospitality Guest Services","emoji":"🏨","color":"teal","desc":"Comprehensive hospitality guest services specialist for hotels, resorts, restaurants, and event venues — covering reservations, check-in/check-out, concierge services, guest complaint resolution, loyalty program management, and post-stay follow-up to deliver exceptional guest experiences that drive loyalty and revenue","cname":"马克思"},{"id":"specialized/hr-onboarding","div":"specialized","name":"HR Onboarding","emoji":"🤝","color":"green","desc":"Comprehensive HR onboarding specialist for employee orientation, documentation management, compliance tracking, benefits enrollment, culture integration, and new hire support — delivering a seamless first-day-to-first-year experience that drives retention and productivity","cname":"居里"},{"id":"specialized/identity-graph-operator","div":"specialized","name":"Identity Graph Operator","emoji":"🕸️","color":"#C5A572","desc":"Operates a shared identity graph that multiple AI agents resolve against. Ensures every agent in a multi-agent system gets the same canonical answer for \"who is this entity?\" - deterministically, even under concurrent writes.","cname":"富兰克林"},{"id":"specialized/language-translator","div":"specialized","name":"Language Translator","emoji":"🌐","color":"teal","desc":"Real-time Spanish ↔ English translation specialist with cultural context, regional dialect awareness, travel phrase guidance, and tone-appropriate communication for everyday, business, and emergency situations","cname":"麦克斯韦"},{"id":"specialized/legal-billing-time-tracking","div":"specialized","name":"Legal Billing & Time Tracking","emoji":"⏱️","color":"green","desc":"Comprehensive legal billing and time tracking specialist for accurate time capture, invoice generation, billing narrative writing, collections management, trust account compliance, and billing analysis — maximizing revenue recovery while maintaining client relationships and ethical compliance across any firm size or billing model","cname":"本吉奥"},{"id":"specialized/legal-client-intake","div":"specialized","name":"Legal Client Intake","emoji":"📋","color":"blue","desc":"Comprehensive legal client intake specialist for qualifying prospects, collecting case information, scheduling consultations, managing conflict checks, and delivering attorney-ready intake summaries across any practice area and firm size","cname":"奥特曼"},{"id":"specialized/legal-document-review","div":"specialized","name":"Legal Document Review","emoji":"⚖️","color":"blue","desc":"Comprehensive legal document review specialist for contracts, litigation documents, and real estate agreements — summarizing documents, flagging risk clauses, comparing contract versions, and checking compliance across any law firm size or practice area","cname":"富兰克林"},{"id":"specialized/loan-officer-assistant","div":"specialized","name":"Loan Officer Assistant","emoji":"🏦","color":"blue","desc":"Comprehensive loan officer assistant for mortgage and lending professionals — covering borrower intake, pre-qualification, document collection, pipeline management, compliance tracking, rate quoting, and closing coordination across residential, commercial, and consumer lending","cname":"奥特曼"},{"id":"specialized/lsp-index-engineer","div":"specialized","name":"LSP/Index Engineer","emoji":"🔎","color":"orange","desc":"Language Server Protocol specialist building unified code intelligence systems through LSP client orchestration and semantic indexing","cname":"伽利略"},{"id":"specialized/ma-integration-manager","div":"specialized","name":"M&A Integration Manager","emoji":"🤝","color":"indigo","desc":"Mergers and acquisitions integration specialist who designs and executes post-merger integration programs — covering Day 1 readiness, 100-day planning, synergy tracking, cultural integration, functional workstream coordination, and transition service agreement management.","cname":"冯诺依曼"},{"id":"specialized/medical-billing-coding-specialist","div":"specialized","name":"Medical Billing & Coding Specialist","emoji":"🏥","color":"blue","desc":"Expert medical billing and coding specialist for ICD-10-CM/PCS, CPT, and HCPCS coding, claim submission, denial management, revenue cycle optimization, compliance auditing, and payer contract analysis — maximizing clean claim rates and revenue recovery for healthcare providers of all sizes","cname":"居里"},{"id":"specialized/operations-manager","div":"specialized","name":"Operations Manager","emoji":"⚙️","color":"slate","desc":"Business operations specialist who applies Lean, Six Sigma, and systems thinking to process mapping, capacity planning, KPI governance, vendor management, and organizational efficiency — turning operational complexity into repeatable, measurable performance.","cname":"萨根"},{"id":"specialized/organizational-psychologist","div":"specialized","name":"Organizational Psychologist","emoji":"🧠","color":"teal","desc":"Applied organizational psychologist who diagnoses team dynamics, psychological safety, burnout risk, and culture health — using evidence-based frameworks to help leaders build high-performing, resilient, and psychologically safe organizations.","cname":"本吉奥"},{"id":"specialized/personal-growth-mentor","div":"specialized","name":"Personal Growth Mentor","emoji":"🌱","color":"teal","desc":"Cross-domain personal development mentor for goal clarity, habit design, strategic decisions, and accountability without motivational fluff.","cname":"达尔文"},{"id":"specialized/real-estate-buyer-seller","div":"specialized","name":"Real Estate Buyer & Seller","emoji":"🏠","color":"teal","desc":"Comprehensive real estate agent assistant for buyer representation, seller representation, listing management, offer negotiation, transaction coordination, and closing support — delivering a world-class client experience from first showing to final closing across residential and investment real estate","cname":"吴恩达"},{"id":"specialized/recruitment-specialist","div":"specialized","name":"Recruitment Specialist","emoji":"🎯","color":"blue","desc":"Expert recruitment operations and talent acquisition specialist — skilled in China's major hiring platforms, talent assessment frameworks, and labor law compliance. Helps companies efficiently attract, screen, and retain top talent while building a competitive employer brand.","cname":"马克思"},{"id":"specialized/report-distribution-agent","div":"specialized","name":"Report Distribution Agent","emoji":"📤","color":"#d69e2e","desc":"AI agent that automates distribution of consolidated sales reports to representatives based on territorial parameters","cname":"吴恩达"},{"id":"specialized/resume-tailor","div":"specialized","name":"Resume Tailor","emoji":"🧾","color":"teal","desc":"Candidate-side resume optimization specialist who analyzes job descriptions, maps real experience to role requirements, improves ATS keyword alignment, and rewrites bullets without fabricating qualifications.","cname":"恩格斯"},{"id":"specialized/retail-customer-returns","div":"specialized","name":"Retail Customer Returns","emoji":"🛒","color":"amber","desc":"Comprehensive retail customer returns specialist for processing returns, exchanges, and refunds across in-store, online, and omnichannel retail — handling policy enforcement, fraud prevention, customer retention, vendor returns, and returns analytics to maximize recovery while preserving customer loyalty","cname":"杨立昆"},{"id":"specialized/sales-data-extraction-agent","div":"specialized","name":"Sales Data Extraction Agent","emoji":"📊","color":"#2b6cb0","desc":"AI agent specialized in monitoring Excel files and extracting key sales metrics (MTD, YTD, Year End) for internal live reporting","cname":"刘慈欣"},{"id":"specialized/sales-outreach","div":"specialized","name":"Sales Outreach","emoji":"🎯","color":"amber","desc":"Consultative B2B sales outreach specialist for cold prospecting, lead follow-up, objection handling, proposal writing, and pipeline management — combining data-driven targeting with genuine relationship-building to open doors and close deals","cname":"亚里士多德"},{"id":"specialized/specialized-chief-of-staff","div":"specialized","name":"Chief of Staff","emoji":"🧭","color":"#6B7280","desc":"Master coordinator for founders and executives — filters noise, owns processes, enforces consistency, routes decisions, and positions outputs for impact so the boss can think clearly.","cname":"富兰克林"},{"id":"specialized/specialized-civil-engineer","div":"specialized","name":"Civil Engineer","emoji":"🏗️","color":"yellow","desc":"Expert civil and structural engineer with global standards coverage — Eurocode, DIN, ACI, AISC, ASCE, AS/NZS, CSA, GB, IS, AIJ, and more. Specializes in structural analysis, geotechnical design, construction documentation, building code compliance, and multi-standard international projects.","cname":"麦克斯韦"},{"id":"specialized/specialized-codebase-archaeologist","div":"specialized","name":"Codebase Archaeologist","emoji":"🏺","color":"amber","desc":"Multi-session, multi-tool drift detection specialist who audits codebases touched by several AI coding tools (Claude, Cursor, Copilot, Windsurf, etc.) over time, finding silent logic mismatches, dead code, and doc-vs-code divergence that no single session would ever notice on its own.","cname":"奥特曼"},{"id":"specialized/specialized-cultural-intelligence-strategist","div":"specialized","name":"Cultural Intelligence Strategist","emoji":"🌍","color":"#FFA000","desc":"CQ specialist that detects invisible exclusion, researches global context, and ensures software resonates authentically across intersectional identities.","cname":"特斯拉"},{"id":"specialized/specialized-developer-advocate","div":"specialized","name":"Developer Advocate","emoji":"🗣️","color":"purple","desc":"Expert developer advocate specializing in building developer communities, creating compelling technical content, optimizing developer experience (DX), and driving platform adoption through authentic engineering engagement. Bridges product and engineering teams with external developers.","cname":"图灵"},{"id":"specialized/specialized-document-generator","div":"specialized","name":"Document Generator","emoji":"📄","color":"blue","desc":"Expert document creation specialist who generates professional PDF, PPTX, DOCX, and XLSX files using code-based approaches with proper formatting, charts, and data visualization.","cname":"阿基米德"},{"id":"specialized/specialized-fedramp-rmf-compliance","div":"specialized","name":"FedRAMP & RMF Compliance Engineer","emoji":"🛡️","color":"red","desc":"Expert FedRAMP and NIST Risk Management Framework compliance engineer specializing in both FedRAMP authorization pathways — the traditional Rev5 path (NIST 800-53 Rev 5 control implementation, System Security Plans, 3PAO assessment, agency authorization) and the modernized FedRAMP 20x path (Key Security Indicators, automated machine-readable validation, compliance-as-code) — plus the ATO process, continuous monitoring (ConMon), POA&M management, FIPS 199 categorization, authorization boundary diagrams, OSCAL machine-readable packages, and cloud security compliance for government and regulated industries","cname":"开普勒"},{"id":"specialized/specialized-french-consulting-market","div":"specialized","name":"French Consulting Market Navigator","emoji":"🇫🇷","color":"#002395","desc":"Navigate the French ESN/SI freelance ecosystem — margin models, platform mechanics (Malt, collective.work), portage salarial, rate positioning, and payment cycle realities","cname":"欧拉"},{"id":"specialized/specialized-korean-business-navigator","div":"specialized","name":"Korean Business Navigator","emoji":"🇰🇷","color":"#003478","desc":"Korean business culture for foreign professionals — 품의 decision process, nunchi reading, KakaoTalk business etiquette, hierarchy navigation, and relationship-first deal mechanics","cname":"莱布尼茨"},{"id":"specialized/specialized-mcp-builder","div":"specialized","name":"MCP Builder","emoji":"🔌","color":"indigo","desc":"Expert Model Context Protocol developer who designs, builds, and tests MCP servers that extend AI agent capabilities with custom tools, resources, and prompts.","cname":"霍金"},{"id":"specialized/specialized-model-qa","div":"specialized","name":"Model QA Specialist","emoji":"🔬","color":"#B22222","desc":"Independent model QA expert who audits ML and statistical models end-to-end - from documentation review and data reconstruction to replication, calibration testing, interpretability analysis, performance monitoring, and audit-grade reporting.","cname":"居里"},{"id":"specialized/specialized-pricing-analyst","div":"specialized","name":"Pricing Analyst","emoji":"💰","color":"gold","desc":"Specialized pricing analyst who develops optimal pricing models through market research, competitor analysis, cost structure evaluation, and margin optimization — turning pricing from guesswork into a data-driven competitive advantage.","cname":"冯诺依曼"},{"id":"specialized/specialized-salesforce-architect","div":"specialized","name":"Salesforce Architect","emoji":"☁️","color":"#00A1E0","desc":"Solution architecture for Salesforce platform — multi-cloud design, integration patterns, governor limits, deployment strategy, and data model governance for enterprise-scale orgs","cname":"莱布尼茨"},{"id":"specialized/specialized-strategy-duel-agent","div":"specialized","name":"Strategy Duel Agent","emoji":"⚔️","color":"#1e90ff","desc":"Conducts live strategy duels using game theory and the 36 Chinese stratagems","cname":"居里"},{"id":"specialized/specialized-workflow-architect","div":"specialized","name":"Workflow Architect","emoji":"🗺️","color":"orange","desc":"Workflow design specialist who maps complete workflow trees for every system, user journey, and agent interaction — covering happy paths, all branch conditions, failure modes, recovery paths, handoff contracts, and observable states to produce build-ready specs that agents can implement against and QA can test against.","cname":"高斯"},{"id":"specialized/study-abroad-advisor","div":"specialized","name":"Study Abroad Advisor","emoji":"🎓","color":"#1B4D3E","desc":"Full-spectrum study abroad planning expert covering the US, UK, Canada, Australia, Europe, Hong Kong, and Singapore — proficient in undergraduate, master's, and PhD application strategy, school selection, essay coaching, profile enhancement, standardized test planning, visa preparation, and overseas life adaptation, helping Chinese students craft personalized end-to-end study abroad plans.","cname":"居里"},{"id":"specialized/supply-chain-strategist","div":"specialized","name":"Supply Chain Strategist","emoji":"🔗","color":"blue","desc":"Expert supply chain management and procurement strategy specialist — skilled in supplier development, strategic sourcing, quality control, and supply chain digitalization. Grounded in China's manufacturing ecosystem, helps companies build efficient, resilient, and sustainable supply chains.","cname":"苏茨克维"},{"id":"specialized/zk-steward","div":"specialized","name":"ZK Steward","emoji":"🗃️","color":"teal","desc":"Knowledge-base steward in the spirit of Niklas Luhmann's Zettelkasten. Default perspective: Luhmann; switches to domain experts (Feynman, Munger, Ogilvy, etc.) by task. Enforces atomic notes, connectivity, and validation loops. Use for knowledge-base building, note linking, complex task breakdown, and cross-domain decision support.","cname":"李飞飞"},{"id":"support/support-analytics-reporter","div":"support","name":"Analytics Reporter","emoji":"📊","color":"teal","desc":"Expert data analyst transforming raw data into actionable business insights. Creates dashboards, performs statistical analysis, tracks KPIs, and provides strategic decision support through data visualization and reporting.","cname":"南丁格尔"},{"id":"support/support-executive-summary-generator","div":"support","name":"Executive Summary Generator","emoji":"📝","color":"purple","desc":"Consultant-grade AI specialist trained to think and communicate like a senior strategy consultant. Transforms complex business inputs into concise, actionable executive summaries using McKinsey SCQA, BCG Pyramid Principle, and Bain frameworks for C-suite decision-makers.","cname":"杜威"},{"id":"support/support-finance-tracker","div":"support","name":"Finance Tracker","emoji":"💰","color":"green","desc":"Expert financial analyst and controller specializing in financial planning, budget management, and business performance analysis. Maintains financial health, optimizes cash flow, and provides strategic financial insights for business growth.","cname":"甘地"},{"id":"support/support-infrastructure-maintainer","div":"support","name":"Infrastructure Maintainer","emoji":"🏢","color":"orange","desc":"Expert infrastructure specialist focused on system reliability, performance optimization, and technical operations management. Maintains robust, scalable infrastructure supporting business operations with security, performance, and cost efficiency.","cname":"特蕾莎"},{"id":"support/support-legal-compliance-checker","div":"support","name":"Legal Compliance Checker","emoji":"⚖️","color":"red","desc":"Expert legal and compliance specialist ensuring business operations, data handling, and content creation comply with relevant laws, regulations, and industry standards across multiple jurisdictions.","cname":"卡耐基"},{"id":"support/support-support-responder","div":"support","name":"Support Responder","emoji":"💬","color":"blue","desc":"Expert customer support specialist delivering exceptional customer service, issue resolution, and user experience optimization. Specializes in multi-channel support, proactive customer care, and turning support interactions into positive brand experiences.","cname":"南丁格尔"},{"id":"testing/testing-accessibility-auditor","div":"testing","name":"Accessibility Auditor","emoji":"♿","color":"#0077B6","desc":"Expert accessibility specialist who audits interfaces against WCAG standards, tests with assistive technologies, and ensures inclusive design. Defaults to finding barriers — if it's not tested with a screen reader, it's not accessible.","cname":"迈尔斯"},{"id":"testing/testing-api-tester","div":"testing","name":"API Tester","emoji":"🔌","color":"purple","desc":"Expert API testing specialist focused on comprehensive API validation, performance testing, and quality assurance across all systems and third-party integrations","cname":"石川馨"},{"id":"testing/testing-evidence-collector","div":"testing","name":"Evidence Collector","emoji":"📸","color":"orange","desc":"Screenshot-obsessed, fantasy-allergic QA specialist - Default to finding 3-5 issues, requires visual proof for everything","cname":"迈尔斯"},{"id":"testing/testing-performance-benchmarker","div":"testing","name":"Performance Benchmarker","emoji":"⏱️","color":"orange","desc":"Expert performance testing and optimization specialist focused on measuring, analyzing, and improving system performance across all applications and infrastructure","cname":"朱兰"},{"id":"testing/testing-reality-checker","div":"testing","name":"Reality Checker","emoji":"🧐","color":"red","desc":"Stops fantasy approvals, evidence-based certification - Default to \"NEEDS WORK\", requires overwhelming proof for production readiness","cname":"博姆"},{"id":"testing/testing-test-automation-engineer","div":"testing","name":"Test Automation Engineer","emoji":"🎭","color":"#2EAD33","desc":"Expert end-to-end test automation engineer for Playwright and Cypress — resilient selectors, flake elimination, isolated test data, CI parallelization, and trace-driven failure debugging.","cname":"石川馨"},{"id":"testing/testing-test-results-analyzer","div":"testing","name":"Test Results Analyzer","emoji":"📋","color":"indigo","desc":"Expert test analysis specialist focused on comprehensive test result evaluation, quality metrics analysis, and actionable insight generation from testing activities","cname":"博姆"},{"id":"testing/testing-tool-evaluator","div":"testing","name":"Tool Evaluator","emoji":"🔧","color":"teal","desc":"Expert technology assessment specialist focused on evaluating, testing, and recommending tools, software, and platforms for business use and productivity optimization","cname":"石川馨"},{"id":"testing/testing-workflow-optimizer","div":"testing","name":"Workflow Optimizer","emoji":"⚡","color":"green","desc":"Expert process improvement specialist focused on analyzing, optimizing, and automating workflows across all business functions for maximum productivity and efficiency","cname":"迈尔斯"}]},"zh":{"divisions":{"academic":{"label":"学术部","color":"#8B5CF6"},"design":{"label":"设计部","color":"#EC4899"},"engineering":{"label":"工程部","color":"#3B82F6"},"finance":{"label":"财务部","color":"#22C55E"},"game-development":{"label":"游戏开发部","color":"#A855F7"},"gis":{"label":"GIS","color":"#14B8A6"},"hr":{"label":"人力资源部","color":"#F43F5E"},"legal":{"label":"法务部","color":"#64748B"},"marketing":{"label":"市场部","color":"#F97316"},"paid-media":{"label":"付费媒体部","color":"#EAB308"},"product":{"label":"产品部","color":"#D946EF"},"project-management":{"label":"项目管理部","color":"#0EA5E9"},"sales":{"label":"销售部","color":"#10B981"},"security":{"label":"安全部","color":"#EF4444"},"spatial-computing":{"label":"空间计算部","color":"#06B6D4"},"specialized":{"label":"专项部","color":"#6366F1"},"strategy":{"label":"战略部","color":"#F59E0B"},"supply-chain":{"label":"供应链部","color":"#0891B2"},"support":{"label":"支持部","color":"#84CC16"},"testing":{"label":"测试部","color":"#F59E0B"}},"roles":[{"id":"academic/academic-anthropologist","div":"academic","name":"人类学家","emoji":"🦴","color":"#D97706","desc":"文化体系、仪式、亲属关系、信仰系统和民族志方法专家——构建有生活气息而非凭空捏造的、文化上连贯自洽的社会","cname":"伽利略"},{"id":"academic/academic-geographer","div":"academic","name":"地理学家","emoji":"🌍","color":"#059669","desc":"自然地理与人文地理、气候系统、制图学和空间分析专家——构建地理上连贯自洽的世界，使地形、气候、资源和聚落模式在科学上合理","cname":"爱因斯坦"},{"id":"academic/academic-historian","div":"academic","name":"历史学家","emoji":"📜","color":"#B45309","desc":"历史分析、分期、物质文化和史学方法专家——验证历史一致性，以扎根于一手和二手资料的真实时代细节丰富设定","cname":"恩格斯"},{"id":"academic/academic-narratologist","div":"academic","name":"叙事学家","emoji":"📖","color":"#8B5CF6","desc":"叙事理论、故事结构、人物弧线和文学分析专家——基于从普罗普到坎贝尔再到现代叙事学的成熟框架提供建议","cname":"伽利略"},{"id":"academic/academic-psychologist","div":"academic","name":"心理学家","emoji":"🧠","color":"#EC4899","desc":"人类行为、人格理论、动机和认知模式专家——基于临床和研究框架构建心理上可信的角色和互动","cname":"阿基米德"},{"id":"academic/academic-study-planner","div":"academic","name":"学习规划师","emoji":"📚","color":"#10B981","desc":"面向中国考生和终身学习者的个性化学习规划专家，精通考研、考公、司法考试、CPA 等重大考试的备考策略，擅长运用费曼学习法、艾宾浩斯遗忘曲线、番茄钟等科学方法，帮助学习者制定高效的学习计划并持续优化。","cname":"阿基米德"},{"id":"design/design-brand-guardian","div":"design","name":"品牌守护者","emoji":"🛡️","color":"blue","desc":"专精品牌形象开发、一致性维护和战略品牌定位的品牌策略师和品牌守护专家","cname":"兰德"},{"id":"design/design-image-prompt-engineer","div":"design","name":"图像提示词工程师","emoji":"🖼️","color":"amber","desc":"精通摄影美学和 AI 图像生成的提示词专家，擅长把视觉概念转化为精准的文字描述，生成专业级摄影作品。","cname":"埃姆斯"},{"id":"design/design-inclusive-visuals-specialist","div":"design","name":"包容性视觉专家","emoji":"🌈","color":"#4DB6AC","desc":"专注于消除 AI 生成图像中的系统性偏见，确保生成的人物图像和视频在文化、肤色、体型等方面真实、有尊严、不刻板。","cname":"原研哉"},{"id":"design/design-persona-walkthrough","div":"design","name":"Persona 走查专家","emoji":"🎭","color":"#10B981","desc":"从设定好的 persona（用户画像）心理视角出发，对网页进行认知走查的模拟——捕捉每个滚动位置上的情绪反应与理性思考，再输出植根于 LIFT、Cialdini、Fogg 框架的结构化 CRO 报告","cname":"卡雷"},{"id":"design/design-ui-designer","div":"design","name":"UI 设计师","emoji":"🎨","color":"purple","desc":"精通视觉设计系统、组件库和像素级界面创建的 UI 设计专家。创建美观、一致、无障碍的用户界面，增强用户体验并体现品牌形象","cname":"赖特"},{"id":"design/design-ux-architect","div":"design","name":"UX 架构师","emoji":"🏗️","color":"purple","desc":"技术架构与 UX 专家，给开发者提供扎实的基础设施——CSS 体系、布局框架、清晰的实现指引。","cname":"卡雷"},{"id":"design/design-ux-researcher","div":"design","name":"UX 研究员","emoji":"🔍","color":"green","desc":"专精用户行为分析、可用性测试和数据驱动设计洞察的用户体验研究专家。提供可落地的研究发现，提升产品可用性和用户满意度","cname":"拉姆斯"},{"id":"design/design-visual-storyteller","div":"design","name":"视觉叙事师","emoji":"🎬","color":"purple","desc":"视觉传达专家，擅长把复杂信息转化成有吸引力的视觉故事，通过多媒体内容和品牌叙事打动受众。","cname":"拉姆斯"},{"id":"design/design-whimsy-injector","div":"design","name":"趣味注入师","emoji":"✨","color":"pink","desc":"创意专家，专门给品牌体验注入个性、惊喜和趣味元素，用意想不到的小细节让用户记住你的产品。","cname":"巴斯"},{"id":"engineering/engineering-ai-data-remediation-engineer","div":"engineering","name":"AI 数据修复工程师","emoji":"🧹","color":"green","desc":"自愈数据管道专家——使用气隙隔离的本地 SLM 和语义聚类，自动检测、分类和修复大规模数据异常。专注于修复层：拦截坏数据、通过 Ollama 生成确定性修复逻辑，并保证零数据丢失。不是通用数据工程师——而是当你的数据出了问题且管道不能停的时候，出手的外科手术级专家。","cname":"麦卡锡"},{"id":"engineering/engineering-ai-engineer","div":"engineering","name":"AI 工程师","emoji":"🤖","color":"purple","desc":"精通机器学习模型开发与部署的 AI 工程专家，擅长从数据处理到模型上线的全链路工程化，专注构建可靠、可扩展的 AI 系统。","cname":"高斯林"},{"id":"engineering/engineering-autonomous-optimization-architect","div":"engineering","name":"自主优化架构师","emoji":"🔄","color":"#673AB7","desc":"智能系统治理专家，持续对 API 进行影子测试以优化性能，同时严格执行财务和安全护栏，防止成本失控。","cname":"苏茨克维"},{"id":"engineering/engineering-backend-architect","div":"engineering","name":"后端架构师","emoji":"⚙️","color":"blue","desc":"资深后端架构师，专精可扩展系统设计、数据库架构、API 开发和云基础设施。构建健壮、安全、高性能的服务端应用和微服务。","cname":"哈萨比斯"},{"id":"engineering/engineering-cms-developer","div":"engineering","name":"CMS 开发者","emoji":"📋","color":"blue","desc":"Drupal 与 WordPress 专家，精通主题开发、自定义插件/模块、内容架构和代码优先的 CMS 实现。","cname":"伯纳斯李"},{"id":"engineering/engineering-code-reviewer","div":"engineering","name":"代码审查员","emoji":"👀","color":"purple","desc":"专业代码审查专家，提供建设性、可操作的反馈，聚焦正确性、可维护性、安全性和性能，而非代码风格偏好。","cname":"麦卡锡"},{"id":"engineering/engineering-codebase-onboarding-engineer","div":"engineering","name":"代码库入职引导工程师","emoji":"🧭","color":"teal","desc":"专业的开发者入职引导专家，帮助新工程师快速理解陌生代码库，通过阅读源码、追踪代码路径，只陈述基于代码的事实。","cname":"霍珀"},{"id":"engineering/engineering-data-engineer","div":"engineering","name":"数据工程师","emoji":"📊","color":"orange","desc":"专注于构建可靠数据管线、湖仓架构和可扩展数据基础设施的数据工程专家。精通 ETL/ELT、Apache Spark、dbt、流处理系统和云数据平台，将原始数据转化为可信赖的分析就绪资产。","cname":"明斯基"},{"id":"engineering/engineering-database-optimizer","div":"engineering","name":"数据库优化师","emoji":"🗄️","color":"amber","desc":"数据库性能专家，专注于 Schema 设计、查询优化、索引策略和性能调优，精通 PostgreSQL、MySQL 及 Supabase、PlanetScale 等现代数据库。","cname":"霍珀"},{"id":"engineering/engineering-devops-automator","div":"engineering","name":"DevOps 自动化师","emoji":"🚀","color":"orange","desc":"精通基础设施自动化、CI/CD 流水线开发和云运维的 DevOps 专家","cname":"辛顿"},{"id":"engineering/engineering-dingtalk-integration-developer","div":"engineering","name":"钉钉集成开发工程师","emoji":"🔗","color":"blue","desc":"专注钉钉开放平台全栈集成开发的工程专家，精通钉钉机器人、酷应用、审批流自动化、连接器低代码集成、钉钉小程序、宜搭平台对接及与阿里云生态的深度集成，擅长构建企业级协作与业务自动化解决方案。","cname":"艾伦凯"},{"id":"engineering/engineering-drupal-shopping-cart","div":"engineering","name":"Drupal 购物车工程师","emoji":"🛒","color":"blue","desc":"资深 Drupal 电商工程师，精通 Drupal Commerce，负责商品目录管理、支付网关集成、checkout 流程设计、订单管理、税费与促销配置，以及在 Drupal 10/11 上交付高可靠的店面","cname":"泽勒"},{"id":"engineering/engineering-email-intelligence-engineer","div":"engineering","name":"邮件智能工程师","emoji":"📧","color":"indigo","desc":"专精从原始邮件线程中提取结构化、可供 AI 推理的数据，服务于智能体和自动化系统。","cname":"沃兹尼亚克"},{"id":"engineering/engineering-embedded-firmware-engineer","div":"engineering","name":"嵌入式固件工程师","emoji":"🔧","color":"orange","desc":"裸机和 RTOS 固件开发专家——精通 ESP32/ESP-IDF、PlatformIO、Arduino、ARM Cortex-M、STM32 HAL/LL、Nordic nRF5/nRF Connect SDK、FreeRTOS、Zephyr。","cname":"韦尔奇"},{"id":"engineering/engineering-embedded-linux-driver-engineer","div":"engineering","name":"嵌入式 Linux 驱动工程师","emoji":"🔌","color":"#2D572C","desc":"嵌入式 Linux 内核驱动与 BSP 开发专家——精通 Linux 内核模块、设备树、Platform/I2C/SPI/USB 驱动框架、DMA、中断子系统、Yocto/Buildroot、U-Boot、交叉编译工具链。","cname":"香农"},{"id":"engineering/engineering-feishu-integration-developer","div":"engineering","name":"飞书集成开发工程师","emoji":"🐦","color":"blue","desc":"专注飞书开放平台全栈集成开发的工程专家，精通飞书机器人、小程序、审批流、多维表格（Bitable）、消息卡片、Webhook、SSO 单点登录及工作流自动化，擅长在飞书生态内构建企业级协作与自动化解决方案。","cname":"林纳斯"},{"id":"engineering/engineering-filament-optimization-specialist","div":"engineering","name":"Filament 优化专家","emoji":"🧵","color":"indigo","desc":"专精于重构和优化 Filament PHP 后台管理界面的专家，专注高影响力的结构性改造，而非表面调整，打造极致可用性与效率。","cname":"斯托曼"},{"id":"engineering/engineering-fpga-digital-design-engineer","div":"engineering","name":"FPGA/ASIC 数字设计工程师","emoji":"🔬","color":"#1565C0","desc":"FPGA 与 ASIC 数字前端设计专家——精通 Verilog/SystemVerilog、VHDL、Vivado/Quartus、AXI/AHB 总线、时序收敛、Zynq/Intel SoC FPGA、高层次综合（HLS）。","cname":"西蒙"},{"id":"engineering/engineering-frontend-developer","div":"engineering","name":"前端开发者","emoji":"💻","color":"cyan","desc":"精通现代 Web 技术、React/Vue/Angular 框架、UI 实现和性能优化的前端开发专家","cname":"苏茨克维"},{"id":"engineering/engineering-git-workflow-master","div":"engineering","name":"Git 工作流大师","emoji":"🔀","color":"orange","desc":"Git 工作流专家，精通分支策略、版本控制最佳实践，包括约定式提交、变基、工作树和 CI 友好的分支管理。","cname":"李飞飞"},{"id":"engineering/engineering-incident-response-commander","div":"engineering","name":"故障响应指挥官","emoji":"🚨","color":"#e63946","desc":"专精于生产环境故障管理、结构化响应协调、事后复盘、SLO/SLI 跟踪和 on-call 流程设计的事故指挥专家，为工程组织的可靠性保驾护航。","cname":"麦卡锡"},{"id":"engineering/engineering-iot-solution-architect","div":"engineering","name":"IoT 方案架构师","emoji":"📡","color":"#00897B","desc":"物联网端到端方案设计专家——精通设备接入（MQTT/CoAP/LwM2M）、边缘计算、云平台（AWS IoT/Azure IoT/阿里云 IoT）、OTA、设备管理、数据管道和安全体系。","cname":"霍珀"},{"id":"engineering/engineering-it-service-manager","div":"engineering","name":"IT 服务经理","emoji":"🖧","color":"blue","desc":"资深 IT 服务管理（ITSM）专家，运用 ITIL 4 框架进行服务目录设计、incident（事件）与 problem（问题）管理、变更控制、SLA 治理、CMDB 维护以及持续服务改进——确保 IT 在任何规模的组织中都能交付可靠、可衡量的业务价值","cname":"里奇"},{"id":"engineering/engineering-mechanical-design-engineer","div":"engineering","name":"机械设计工程师","emoji":"⚙️","color":"#546E7A","desc":"通用机械产品设计专家——精通方案选型、传动/机构/结构件/连接设计、强度刚度疲劳振动校核、DFMA 与标准件选型，遵循 GB/ISO/JIS 国家标准，输出可制造可装配的工程图与 BOM。","cname":"吴恩达"},{"id":"engineering/engineering-minimal-change-engineer","div":"engineering","name":"最小变更工程师","emoji":"🪶","color":"#708090","desc":"专注于最小可行差异的工程专家——只修复被要求的内容，拒绝范围蔓延，宁可写三行相似代码也不做过早抽象。这种纪律性能防止 bug 修复 PR 变成重构雪崩。","cname":"本吉奥"},{"id":"engineering/engineering-mobile-app-builder","div":"engineering","name":"移动应用开发者","emoji":"📱","color":"purple","desc":"精通 iOS/Android 原生开发和跨平台框架的移动端专家，擅长性能优化、平台特性集成，专注打造流畅的移动体验。","cname":"霍尔斯塔德"},{"id":"engineering/engineering-multi-agent-systems-architect","div":"engineering","name":"多智能体系统架构师","emoji":"🕸️","color":"cyan","desc":"系统架构师，专精于 multi-agent（多智能体）AI 流水线的设计、协调与治理——涵盖拓扑选型、上下文管理、智能体间信任、故障恢复、human-in-the-loop（人在环中）门控，以及面向生产级智能体系统的可观测性。","cname":"韦尔奇"},{"id":"engineering/engineering-network-engineer-china","div":"engineering","name":"国内网络工程师","emoji":"🌐","color":"teal","desc":"面向国产网络设备的企业网工程专家——精通华为 VRP、华三 Comware、锐捷 RGOS，覆盖园区网/数据中心/广域网的 VLAN、STP、OSPF、IS-IS、BGP、MPLS、VXLAN、SDN 设计与排障，熟悉信创国产化替代与等保 2.0 合规组网。","cname":"高德纳"},{"id":"engineering/engineering-orgscript-engineer","div":"engineering","name":"OrgScript 工程师","emoji":"📜","color":"green","desc":"精通 OrgScript 语法的设计、解析与实现，擅长 AST 校验和业务逻辑定义。","cname":"沃兹尼亚克"},{"id":"engineering/engineering-pc-host-engineer","div":"engineering","name":"上位机工程师","emoji":"🖥️","color":"#41CD52","desc":"Qt/QML 桌面上位机开发专家——精通 Qt Widgets/Quick、QSerialPort 串口、Modbus/CAN/TCP 工业协议、QChart/QCustomPlot 实时数据可视化，以及与 STM32/ESP32 等下位机的协议对接和跨平台打包部署。","cname":"李飞飞"},{"id":"engineering/engineering-prompt-engineer","div":"engineering","name":"Prompt 工程师","emoji":"🧬","color":"violet","desc":"专精于为 LLM（大语言模型）打磨、测试并系统化优化 prompt 的专家——把含糊的指令变成可靠、可上生产的 AI 行为。","cname":"霍尔斯塔德"},{"id":"engineering/engineering-rapid-prototyper","div":"engineering","name":"快速原型师","emoji":"⚡","color":"green","desc":"专注于超快速概念验证开发和 MVP 创建，使用高效工具和框架快速实现想法验证。","cname":"纽厄尔"},{"id":"engineering/engineering-security-engineer","div":"engineering","name":"安全工程师","emoji":"🔒","color":"red","desc":"专业应用安全工程师，专注于威胁建模、漏洞评估、安全代码审查、安全架构设计和事件响应，服务于现代 Web、API 和云原生应用。","cname":"辛顿"},{"id":"engineering/engineering-senior-developer","div":"engineering","name":"高级开发者","emoji":"👨‍💻","color":"green","desc":"精通 Laravel/Livewire/FluxUI 的高级全栈开发者，擅长高端 CSS 效果、Three.js 集成，专注打造有质感的 Web 体验。","cname":"巴科斯"},{"id":"engineering/engineering-software-architect","div":"engineering","name":"软件架构师","emoji":"🏛️","color":"indigo","desc":"软件架构专家，精通系统设计、领域驱动设计、架构模式和技术决策，构建可扩展、可维护的系统。","cname":"吴恩达"},{"id":"engineering/engineering-solidity-smart-contract-engineer","div":"engineering","name":"Solidity 智能合约工程师","emoji":"📝","color":"orange","desc":"精通 EVM 智能合约架构、Gas 优化、可升级代理模式、DeFi 协议开发和安全优先合约设计的 Solidity 开发专家，覆盖 Ethereum 及 L2 链。","cname":"伯纳斯李"},{"id":"engineering/engineering-sre","div":"engineering","name":"SRE (站点可靠性工程师)","emoji":"🛠️","color":"#e63946","desc":"站点可靠性工程专家，精通 SLO、错误预算、可观测性、混沌工程和减少重复劳动，守护大规模生产系统的稳定性。","cname":"吴恩达"},{"id":"engineering/engineering-technical-writer","div":"engineering","name":"技术文档工程师","emoji":"✍️","color":"teal","desc":"专精于开发者文档、API 参考、README 和教程的技术写作专家。把复杂的工程概念转化为清晰、准确、开发者真正会读也用得上的文档。","cname":"韦尔奇"},{"id":"engineering/engineering-threat-detection-engineer","div":"engineering","name":"威胁检测工程师（工程侧）","emoji":"🛡️","color":"#7b2d8e","desc":"专精于 SIEM 规则开发、MITRE ATT&CK 覆盖度映射、威胁狩猎、告警调优和检测即代码流水线的安全运营检测工程专家。","cname":"本吉奥"},{"id":"engineering/engineering-voice-ai-integration-engineer","div":"engineering","name":"语音 AI 集成工程师","emoji":"🎙️","color":"violet","desc":"专精于使用 Whisper 系列模型和云端 ASR 服务构建端到端语音转录流水线——从原始音频采集、预处理、转录文本清洗、字幕生成、说话人分离，到结构化下游集成至应用、API 和 CMS 平台。","cname":"伯纳斯李"},{"id":"engineering/engineering-wechat-mini-program-developer","div":"engineering","name":"微信小程序开发者","emoji":"💬","color":"green","desc":"专注微信小程序全栈开发的工程专家，精通 WXML/WXSS/WXS、微信原生API、微信支付集成、订阅消息、云开发，擅长在微信生态内构建高性能、体验流畅的小程序应用。","cname":"斯托曼"},{"id":"engineering/engineering-wordpress-shopping-cart","div":"engineering","name":"WordPress 购物车工程师","emoji":"🛍️","color":"purple","desc":"WordPress 电商专家工程师，专精 WooCommerce，负责商品目录管理、payment gateway 集成、checkout 定制、订单管理、税费与优惠券配置，以及在 WordPress 上交付以转化率为导向的店铺","cname":"艾伦凯"},{"id":"finance/finance-bookkeeper-controller","div":"finance","name":"簿记与财务总监","emoji":"📒","color":"green","desc":"专业簿记与财务总监，精通日常会计操作、财务对账、月末结账流程和内部控制。确保财务记录的准确性、完整性和时效性，始终保持 GAAP 合规和审计就绪状态。","cname":"达里奥"},{"id":"finance/finance-financial-analyst","div":"finance","name":"财务分析师","emoji":"📈","color":"green","desc":"专业财务分析师，精通财务建模、预测、场景分析和数据驱动的决策支持。将原始财务数据转化为可行动的商业智能，驱动战略规划、投资决策和运营优化。","cname":"达里奥"},{"id":"finance/finance-financial-forecaster","div":"finance","name":"财务预测分析师","emoji":"🔮","color":"#3498DB","desc":"专注企业财务预测与场景建模的分析专家，精通收入预测、现金流管理、烧钱率分析和融资对接，帮助创业公司和成长型企业在不确定环境中做出有数据支撑的财务决策。","cname":"凯恩斯"},{"id":"finance/finance-fpa-analyst","div":"finance","name":"FP&A 分析师","emoji":"📊","color":"green","desc":"专业财务规划与分析（FP&A）专家，精通预算编制、差异分析、财务规划、滚动预测和战略决策支持。在数字与业务叙事之间架起桥梁，驱动运营绩效和战略资源配置。","cname":"索罗斯"},{"id":"finance/finance-fraud-detector","div":"finance","name":"金融风控分析师","emoji":"🕵️","color":"#E74C3C","desc":"专注交易欺诈检测与金融风险防控的分析专家，精通支付宝/微信支付/银联渠道的风控策略、反洗钱合规、电信诈骗识别、央行征信应用和互联网金融风控体系搭建，帮助企业守住资金安全底线。","cname":"马克思"},{"id":"finance/finance-hk-stock-compliance-reviewer","div":"finance","name":"香港股市合规审查专家","emoji":"⚖️","color":"#1A237E","desc":"资深香港股市合规审查专家，精通HKEX上市规则、SFC监管条例、公司条例及证券及期货条例。提供上市申请合规审查、持续责任监督、关联交易合规、披露义务审核及企业管治顾问服务。","cname":"费雪"},{"id":"finance/finance-investment-researcher","div":"finance","name":"投资研究员","emoji":"🔍","color":"green","desc":"专业投资研究员，精通市场研究、尽职调查、投资组合分析和资产估值。通过严谨的基本面和量化分析识别投资机会、评估风险，支持数据驱动的投资组合决策，覆盖公开股票、私募市场和另类资产。","cname":"费雪"},{"id":"finance/finance-invoice-manager","div":"finance","name":"发票管理专家","emoji":"🧾","color":"#2ECC71","desc":"专注中国企业发票全生命周期管理的财税专家，精通增值税专用发票与普通发票管理、金税系统操作、电子发票推广、三单匹配、报销审批和税务合规，帮助企业实现发票管理的规范化和数字化。","cname":"林奇"},{"id":"finance/finance-tax-strategist","div":"finance","name":"税务策略师","emoji":"🧾","color":"green","desc":"专业税务策略师，精通税务优化、多辖区合规、转让定价和战略税务规划。在确保完全合规的前提下，穿越复杂税法体系以最小化税负，覆盖地方、州、联邦和国际税务管辖区。","cname":"费雪"},{"id":"game-development/game-audio-engineer","div":"game-development","name":"游戏音频工程师","emoji":"🔊","color":"indigo","desc":"交互音频专家——精通 FMOD/Wwise 集成、自适应音乐系统、空间音频，以及全引擎音频性能预算管理","cname":"岩田聪"},{"id":"game-development/game-designer","div":"game-development","name":"游戏设计师","emoji":"🎮","color":"yellow","desc":"系统与机制架构师——精通 GDD 编写、玩家心理学、经济平衡和游戏循环设计，跨引擎跨品类通用","cname":"莱特"},{"id":"game-development/level-designer","div":"game-development","name":"关卡设计师","emoji":"🗺️","color":"teal","desc":"空间叙事与节奏流程专家——精通布局理论、节奏架构、遭遇战设计和环境叙事，跨引擎通用","cname":"横井军平"},{"id":"game-development/narrative-designer","div":"game-development","name":"叙事设计师","emoji":"✍️","color":"red","desc":"故事系统与对话架构师——精通 GDD 对齐的叙事设计、分支对话、世界观架构和环境叙事，跨引擎通用","cname":"莱特"},{"id":"game-development/technical-artist","div":"game-development","name":"技术美术","emoji":"🎨","color":"pink","desc":"美术到引擎管线专家——精通 shader、VFX 系统、LOD 管线、性能预算和跨引擎资源优化","cname":"三上真司"},{"id":"gis/gis-3d-scene-developer","div":"gis","name":"三维场景开发者","emoji":"🏔️","color":"cyan","desc":"Web 三维可视化专家，使用 Cesium、ArcGIS Scene Viewer 及现代三维 Web 框架，打造沉浸式三维场景、地形模型、点云可视化和交互式 Web 体验。","cname":"玄奘"},{"id":"gis/gis-analyst","div":"gis","name":"GIS 分析师","emoji":"🖥️","color":"teal","desc":"日常 GIS 操作员，负责制图、图层管理、空间查询，并在桌面与 Web 环境中维护地理空间数据的完整性。","cname":"徐霞客"},{"id":"gis/gis-bim-specialist","div":"gis","name":"BIM/GIS 专家","emoji":"🏗️","color":"gold","desc":"整合专家，打通 BIM（建筑信息模型）与 GIS（地理信息系统）——负责 Revit/IFC 数据转换、室内地图、数字孪生架构与设施管理数据模型。","cname":"魏格纳"},{"id":"gis/gis-cartography-designer","div":"gis","name":"地图制图设计师","emoji":"🎨","color":"pink","desc":"地图美学专家，设计美观、易读、有效的地图——配色理论、字体排印、标注布局、底图选择，以及面向打印和 Web 的视觉层次。","cname":"郑和"},{"id":"gis/gis-drone-reality-mapping","div":"gis","name":"无人机实景测绘专家","emoji":"🛸","color":"amber","desc":"摄影测量与实景采集专家，把无人机影像处理成 orthomosaic（正射影像）、数字地形模型、point cloud（点云）和三维网格——打通现场采集与 GIS 可用成果之间的链路。","cname":"利玛窦"},{"id":"gis/gis-geoai-ml-engineer","div":"gis","name":"GeoAI/ML 工程师","emoji":"🤖","color":"green","desc":"地理空间机器学习专家，构建模型从卫星与航拍影像中做特征提取、目标检测、影像分割和地表覆盖分类。","cname":"徐霞客"},{"id":"gis/gis-geoprocessing-specialist","div":"gis","name":"地理处理专家","emoji":"⚙️","color":"red","desc":"精通 ArcPy 与 Python 工具箱的自动化专家，专攻空间工作流自动化——构建 .pyt 工具箱、Model Builder 流程、批量地理处理自动化，以及为 ArcGIS Pro 编写自定义分析脚本。","cname":"玄奘"},{"id":"gis/gis-qa-engineer","div":"gis","name":"GIS 质检工程师","emoji":"✅","color":"purple","desc":"质量保证专家，负责校验地理空间数据的完整性——拓扑检查、元数据审计、CRS 一致性、精度评估与合规验证。","cname":"魏格纳"},{"id":"gis/gis-solution-engineer","div":"gis","name":"解决方案工程师","emoji":"🔧","color":"blue","desc":"亲力亲为的 GIS 原型搭建者，接过技术顾问的策略，将其落地为可运行的演示、概念验证（PoC）和技术验证，覆盖完整的 Esri 与开源技术栈。","cname":"利玛窦"},{"id":"gis/gis-spatial-data-engineer","div":"gis","name":"空间数据工程师","emoji":"📦","color":"orange","desc":"ETL 专家，把来自任何来源的杂乱地理空间数据，转换成干净、标准化、可投产的数据集——格式转换、坐标系重投影、属性归一化，以及自动化管线。","cname":"张骞"},{"id":"gis/gis-spatial-data-scientist","div":"gis","name":"空间数据科学家","emoji":"📊","color":"indigo","desc":"高级空间分析专家，把统计建模、空间计量经济学、聚类和预测分析应用到地理空间数据上——找出地图上看不见的规律。","cname":"洪堡"},{"id":"gis/gis-technical-consultant","div":"gis","name":"技术顾问","emoji":"🧠","color":"navy","desc":"战略型 GIS 顾问，把业务问题转化为地理空间解决方案——做差距分析、技术路线图、RFP 应答，以及横跨 Esri 与开源生态的数字化转型战略。","cname":"库克"},{"id":"gis/gis-web-gis-developer","div":"gis","name":"Web GIS 开发工程师","emoji":"🌐","color":"blue","desc":"全栈 Web GIS 工程师，负责构建交互式地图应用——MapLibre GL JS、ArcGIS JS API、Leaflet、实时仪表盘、REST API 集成与地理空间 Web 服务。","cname":"库克"},{"id":"hr/hr-performance-reviewer","div":"hr","name":"绩效管理专家","emoji":"📋","color":"#F39C12","desc":"深耕中国企业绩效管理体系的实战专家，精通 OKR/KPI 双轨制、360 度反馈、绩效校准会、PIP 改进计划等全流程绩效管理，帮助企业建立科学公正的绩效评估与人才发展机制。","cname":"卡耐基"},{"id":"hr/hr-recruiter","div":"hr","name":"招聘专家（HR 全流程）","emoji":"🎯","color":"#9B59B6","desc":"深耕中国人才市场的全流程招聘专家，精通 Boss 直聘、猎聘、拉勾等主流招聘渠道运营，擅长简历筛选、面试协调、人才管线管理、校招社招全链路操盘，帮助企业高效精准地完成人才获取与入职闭环。","cname":"皮亚杰"},{"id":"legal/legal-contract-reviewer","div":"legal","name":"合同审查专家","emoji":"📑","color":"#3498DB","desc":"精通中国《民法典》合同编及商业合同实务的法律专家，擅长合同风险识别、条款审查与修改建议，熟悉电子签章、争议解决机制、违约金条款设计，帮助企业在商业交易中有效防控法律风险。","cname":"卢梭"},{"id":"legal/legal-policy-writer","div":"legal","name":"制度文件撰写专家","emoji":"📜","color":"#2ECC71","desc":"精通中国数据合规法律体系的企业制度文件撰写专家，擅长内部管理制度、隐私政策、用户协议等法律文书起草，深谙《个人信息保护法》《数据安全法》《网络安全法》三法合规要求，帮助企业构建完整的合规制度体系。","cname":"边沁"},{"id":"marketing/marketing-aeo-foundations","div":"marketing","name":"AEO 基础架构师","emoji":"🏗️","color":"#059669","desc":"AI 引擎优化基础设施专家——落地 llms.txt、AI 感知的 robots.txt、token 预算化内容、结构化 Markdown 可用性，以及 agent 发现文件，让 AI 爬虫、引用引擎和浏览型 agent 能找到、解析并执行你的站点内容","cname":"高汀"},{"id":"marketing/marketing-agentic-search-optimizer","div":"marketing","name":"智能搜索优化师","emoji":"🔍","color":"#0891B2","desc":"WebMCP 就绪与智能体任务完成专家，审计 AI 智能体能否在你的网站上完成预约、购买、注册等任务，实施 WebMCP 模式并衡量任务完成率。","cname":"里维斯"},{"id":"marketing/marketing-ai-citation-strategist","div":"marketing","name":"AI 引文策略师","emoji":"🤖","color":"#6D28D9","desc":"AI 推荐引擎优化（AEO/GEO）专家，审计品牌在 ChatGPT、Claude、Gemini、Perplexity 等平台的可见性，分析竞品被引用的原因，提供提升 AI 引用率的内容优化方案。","cname":"科特勒"},{"id":"marketing/marketing-app-store-optimizer","div":"marketing","name":"应用商店优化师","emoji":"📲","color":"blue","desc":"应用商店营销专家，专注应用商店优化（ASO）、转化率优化和应用可发现性。","cname":"莱维特"},{"id":"marketing/marketing-baidu-seo-specialist","div":"marketing","name":"百度 SEO 专家","emoji":"🔍","color":"blue","desc":"专注百度搜索生态的SEO优化专家，精通百度算法规则、百度生态产品矩阵（百科、知道、贴吧、文库）、中文关键词研究、ICP备案规范、以及移动端搜索优化策略。","cname":"科威"},{"id":"marketing/marketing-bilibili-strategist","div":"marketing","name":"B站内容策略师","emoji":"📺","color":"pink","desc":"专注B站（哔哩哔哩）平台的中长视频内容策略专家，精通UP主运营、弹幕文化、社区生态、品牌合作、推荐算法，以及通过优质内容实现长期粉丝增长与商业变现。","cname":"莱维特"},{"id":"marketing/marketing-book-co-author","div":"marketing","name":"图书联合作者","emoji":"📕","color":"#8B5E3C","desc":"为创始人、专家和实操者提供战略性思想领袖力图书协作，将语音笔记、碎片化想法和定位策略转化为结构化的第一人称章节。","cname":"阿克尔"},{"id":"marketing/marketing-carousel-growth-engine","div":"marketing","name":"轮播图增长引擎","emoji":"🎠","color":"#FF0050","desc":"自动化短视频轮播图生成专家，分析任意网站URL，通过Gemini生成病毒式6张轮播图，经Upload-Post API自动发布到抖音和Instagram，抓取数据分析并持续迭代优化。","cname":"特劳特"},{"id":"marketing/marketing-china-ecommerce-operator","div":"marketing","name":"中国电商运营专家","emoji":"🛍️","color":"red","desc":"覆盖淘宝、天猫、拼多多、京东生态的全平台电商运营专家，深耕商品上架优化、直播带货、店铺运营、618/双11大促及跨平台策略。","cname":"德波诺"},{"id":"marketing/marketing-china-market-localization-strategist","div":"marketing","name":"中国市场本地化策略师","emoji":"🇨🇳","color":"#E60012","desc":"全栈中国市场本地化专家，将实时趋势信号转化为可执行的上市策略，覆盖抖音、小红书、微信、B站等全平台","cname":"特劳特"},{"id":"marketing/marketing-content-creator","div":"marketing","name":"内容创作者","emoji":"✍️","color":"#FF7F50","desc":"擅长多平台内容策划与创作的内容专家，能在不同渠道用不同语言讲同一个好故事，让每一篇内容都带来可衡量的价值。","cname":"里维斯"},{"id":"marketing/marketing-cross-border-ecommerce","div":"marketing","name":"跨境电商运营专家","emoji":"🌐","color":"blue","desc":"专注跨境电商全链路运营的策略专家，精通Amazon/Shopee/Lazada/AliExpress/Temu/TikTok Shop等海外平台运营、国际物流与海外仓、跨境合规税务、多语言Listing优化、品牌出海及DTC独立站建设。","cname":"波特"},{"id":"marketing/marketing-daily-news-briefing","div":"marketing","name":"新闻情报官","emoji":"📰","color":"#FF4444","desc":"国内外多源新闻实时采集与结构化简报生成，为内容创作团队提供高质量新闻素材。支持按类型（科技/财经/社会/国际等）筛选，交叉验证信源，输出下游 agent 可直接使用的结构化简报。","cname":"高汀"},{"id":"marketing/marketing-douyin-strategist","div":"marketing","name":"抖音策略师","emoji":"🎵","color":"#000000","desc":"专注抖音平台的短视频营销专家，精通算法推荐机制、爆款视频策划、直播带货流程、以及通过内容矩阵实现品牌在抖音生态的全链路增长。","cname":"沃纳梅克"},{"id":"marketing/marketing-ecommerce-operator","div":"marketing","name":"电商运营师","emoji":"🛒","color":"red","desc":"专注中国电商平台全链路运营的策略专家，精通淘宝/天猫/拼多多/京东的店铺运营、商品优化、直播带货、大促策划（618/双十一），以及跨平台差异化运营策略。","cname":"瑞夫斯"},{"id":"marketing/marketing-email-strategist","div":"marketing","name":"邮件营销策略师","emoji":"📧","color":"green","desc":"资深邮件营销策略师，专注于 CRM 驱动的营销活动、生命周期自动化、分群架构与可送达性。基于 2025-2026 基准数据、AI 驱动的个性化以及后 Apple MPP 时代的衡量体系，设计各类序列（欢迎、培育、再激活、挽回、评价、转介绍）。","cname":"莱维特"},{"id":"marketing/marketing-global-podcast-strategist","div":"marketing","name":"全球播客策略师","emoji":"🎙️","color":"purple","desc":"资深播客增长专家，专注节目定位、受众培育、内容策略与变现。把粗糙的想法打磨成权威音频品牌，在 Spotify、Apple Podcasts 和 YouTube 上让听众与营收随时间持续复利增长。","cname":"莱维特"},{"id":"marketing/marketing-growth-hacker","div":"marketing","name":"增长黑客","emoji":"🚀","color":"green","desc":"数据驱动的用户增长专家，擅长设计和执行低成本高回报的获客实验，用最小预算撬动最大增长。","cname":"里维斯"},{"id":"marketing/marketing-instagram-curator","div":"marketing","name":"Instagram 策展师","emoji":"📸","color":"#E4405F","desc":"Instagram 营销专家，适合出海营销场景。擅长视觉叙事、社区运营和多格式内容优化，打造品牌美学体系，驱动真实互动。","cname":"莱维特"},{"id":"marketing/marketing-knowledge-commerce-strategist","div":"marketing","name":"知识付费产品策划师","emoji":"🎓","color":"purple","desc":"专注中国知识付费生态的产品设计与商业化专家，精通得到、知识星球、小报童、小鹅通、千聊等平台运营，擅长知识产品定义、内容定价策略、用户运营、IP打造、分销体系设计和全链路数据分析。","cname":"瑞夫斯"},{"id":"marketing/marketing-kuaishou-strategist","div":"marketing","name":"快手策略师","emoji":"⚡","color":"orange","desc":"专注快手平台的短视频与直播电商策略专家，精通下沉市场用户运营、老铁社区文化、直播带货方法论、私域信任构建，以及快手与抖音的差异化打法。","cname":"阿克尔"},{"id":"marketing/marketing-linkedin-content-creator","div":"marketing","name":"LinkedIn 内容创作专家","emoji":"💼","color":"#0A66C2","desc":"专注于 LinkedIn 个人品牌打造和专业内容创作的策略师，深谙 LinkedIn 算法与社区文化，通过高质量内容为创始人、求职者、技术人和职场人带来真实的商业机会与人脉增长。","cname":"舒尔茨"},{"id":"marketing/marketing-livestream-commerce-coach","div":"marketing","name":"直播电商主播教练","emoji":"📡","color":"#E63946","desc":"专注直播电商全链路的主播培训与直播间运营专家，精通抖音/快手/淘宝直播/视频号四大平台的直播话术设计、选品排品策略、付费流与自然流的流量配比、转化逼单技巧，以及基于实时数据的直播间调优方法论。","cname":"瑞夫斯"},{"id":"marketing/marketing-multi-platform-publisher","div":"marketing","name":"多平台发布编排官","emoji":"📡","color":"#FF6B35","desc":"一键中文博客发布的专家级编排官。把同一篇文章通过 Wechatsync(主通道)路由到 知乎 / 小红书 / CSDN / B站 / 公众号 / 掘金,并以 xhs-mcp 和 biliup 作为专用兜底。负责各平台内容适配、草稿优先发布、频率控制与风险规避。绝不自动发布——始终停在草稿阶段交由人工审核。","cname":"奥格威"},{"id":"marketing/marketing-podcast-strategist","div":"marketing","name":"播客内容策略师","emoji":"🎙️","color":"purple","desc":"专注中国播客市场的内容策略与运营专家，精通小宇宙、喜马拉雅等主流平台生态，擅长节目定位、音频制作、听众增长、多平台分发及商业化变现，助力播客主理人打造高粘性音频内容品牌。","cname":"沃纳梅克"},{"id":"marketing/marketing-pr-communications-manager","div":"marketing","name":"PR 与传播经理","emoji":"📣","color":"blue","desc":"战略性公共关系与传播专家，负责 media relations（媒体关系）、press release（新闻稿）、crisis communications（危机传播）、高管思想领导力、品牌声誉管理与整合传播规划——通过 earned media（赢得式媒体）、故事化叙事和主动的叙事掌控来建立并守护声誉","cname":"霍普金斯"},{"id":"marketing/marketing-private-domain-operator","div":"marketing","name":"私域流量运营师","emoji":"🏦","color":"#1A73E8","desc":"专注企业微信私域体系搭建的运营专家，精通企微SCRM、社群精细化运营、小程序商城集成、用户生命周期管理和全链路转化漏斗优化。","cname":"贝纳通"},{"id":"marketing/marketing-reddit-community-builder","div":"marketing","name":"Reddit 社区运营","emoji":"🤖","color":"#FF4500","desc":"Reddit 营销专家，适合出海营销场景。深谙 Reddit 社区文化，通过真实参与、价值输出和长期关系建设来塑造品牌口碑。","cname":"波特"},{"id":"marketing/marketing-seo-specialist","div":"marketing","name":"SEO专家","emoji":"🔎","color":"#4285F4","desc":"搜索引擎优化策略师，精通技术SEO、内容优化、外链权重建设和自然搜索增长，通过数据驱动的搜索策略实现可持续的流量增长。","cname":"科威"},{"id":"marketing/marketing-short-video-editing-coach","div":"marketing","name":"短视频剪辑指导师","emoji":"✂️","color":"#7B2D8E","desc":"专注短视频剪辑技术全链路的实战教练，精通剪映/CapCut专业版、Premiere Pro、DaVinci Resolve、Final Cut Pro四大剪辑工具，覆盖画面构图与镜头语言、调色与色彩校正、音频工程、动态图形与特效、字幕排版、多平台输出优化、剪辑工作流效率提升以及AI辅助剪辑等核心技术领域。","cname":"霍普金斯"},{"id":"marketing/marketing-social-media-strategist","div":"marketing","name":"社交媒体策略师","emoji":"📱","color":"blue","desc":"跨平台社交媒体策略专家，专注 LinkedIn、Twitter 等职业社交平台的品牌建设、社区运营和整合营销。","cname":"沃纳梅克"},{"id":"marketing/marketing-tiktok-strategist","div":"marketing","name":"TikTok 策略师","emoji":"🎵","color":"#000000","desc":"TikTok 营销专家，适合出海营销场景。擅长病毒式内容创作、算法优化和社区运营，精通 TikTok 独特的文化生态和玩法。","cname":"沃纳梅克"},{"id":"marketing/marketing-twitter-engager","div":"marketing","name":"Twitter 互动官","emoji":"🐦","color":"#1DA1F2","desc":"Twitter 营销专家，适合出海营销场景。擅长实时互动、思想领袖建设和社区驱动增长，通过真实对话建立品牌影响力。","cname":"沃纳梅克"},{"id":"marketing/marketing-video-optimization-specialist","div":"marketing","name":"视频优化专家","emoji":"🎞️","color":"red","desc":"视频营销策略师，精通 YouTube 算法优化、观众留存、章节设计、封面构思和跨平台视频分发。","cname":"科特勒"},{"id":"marketing/marketing-wechat-official-account","div":"marketing","name":"微信公众号管理","emoji":"公众号","color":"#09B83E","desc":"微信公众号运营专家，精通内容营销、用户互动和转化优化，擅长多格式内容和自动化工作流，把公众号做成品牌私域核心阵地。","cname":"波特"},{"id":"marketing/marketing-wechat-operator","div":"marketing","name":"微信公众号运营","emoji":"💬","color":"#07C160","desc":"专注微信生态的内容运营专家，精通公众号内容策略、社群运营、裂变增长、私域流量搭建和微信小程序运营。","cname":"舒尔茨"},{"id":"marketing/marketing-weibo-strategist","div":"marketing","name":"微博运营策略师","emoji":"🔥","color":"#FF8200","desc":"专注新浪微博平台的全域运营专家，精通热搜机制、超话运营、舆情管理、粉丝经济与微博广告投放，助力品牌在微博生态实现声量爆发与长效增长。","cname":"瑞夫斯"},{"id":"marketing/marketing-weixin-channels-strategist","div":"marketing","name":"微信视频号运营策略师","emoji":"📹","color":"green","desc":"专注微信视频号生态的内容策略与增长运营专家，精通社交推荐机制、公众号/朋友圈/小程序/企微生态联动、视频号直播带货、短视频内容策划、私域引流闭环和创作者数据分析。","cname":"里斯"},{"id":"marketing/marketing-x-twitter-intelligence-analyst","div":"marketing","name":"X/Twitter 情报分析师","emoji":"🛰️","color":"#111111","desc":"社交情报专家，负责 X/Twitter 调研、趋势识别、账号监测，并基于公开信号与结构化数据流程产出有证据支撑的受众洞察。","cname":"特劳特"},{"id":"marketing/marketing-xiaohongshu-operator","div":"marketing","name":"小红书运营专家","emoji":"📕","color":"#FF2442","desc":"专注小红书平台的内容运营专家，擅长种草笔记创作、达人合作策略、爆款内容公式、以及通过数据驱动实现品牌在小红书的高效获客和口碑建设。","cname":"波特"},{"id":"marketing/marketing-xiaohongshu-specialist","div":"marketing","name":"小红书专家","emoji":"📕","color":"#FF1B6D","desc":"小红书营销专家，精通生活方式内容创作、趋势驱动策略和真实社区互动，擅长用审美叙事制造病毒式增长。","cname":"特劳特"},{"id":"marketing/marketing-zhihu-strategist","div":"marketing","name":"知乎策略师","emoji":"❓","color":"#0084FF","desc":"知乎营销专家，擅长思想领袖建设、社区公信力打造和知识驱动型互动，通过高质量问答和专栏建立品牌权威。","cname":"瑞夫斯"},{"id":"paid-media/paid-media-auditor","div":"paid-media","name":"付费媒体审计师","emoji":"📋","color":"orange","desc":"系统化评估 Google Ads、Microsoft Ads 和 Meta 广告账户的全方位审计专家，覆盖账户结构、追踪、出价、创意、受众和竞争定位等 200+ 检查点，输出可执行的审计报告。","cname":"奥格威"},{"id":"paid-media/paid-media-creative-strategist","div":"paid-media","name":"广告创意策略师","emoji":"🎨","color":"orange","desc":"专注广告文案、RSA 优化、素材组设计和创意测试的付费媒体创意专家，横跨 Google、Meta、Microsoft 和程序化平台，用数据驱动说服力。","cname":"伯内特"},{"id":"paid-media/paid-media-paid-social-strategist","div":"paid-media","name":"社交广告策略师","emoji":"📱","color":"orange","desc":"跨平台社交广告专家，覆盖 Meta（Facebook/Instagram）、LinkedIn、TikTok（抖音海外版）、Pinterest、X 和 Snapchat，设计从拉新到再营销的全链路社交广告体系。","cname":"贝纳通"},{"id":"paid-media/paid-media-ppc-strategist","div":"paid-media","name":"PPC 竞价策略师","emoji":"🎯","color":"orange","desc":"资深付费搜索策略专家，擅长 Google Ads、Microsoft Advertising 和 Amazon Ads 的大规模账户架构、预算分配和出价策略，能驾驭月花 1 万到 1000 万的账户。","cname":"伯内特"},{"id":"paid-media/paid-media-programmatic-buyer","div":"paid-media","name":"程序化广告采买专家","emoji":"💰","color":"orange","desc":"展示广告与程序化媒介采买专家，覆盖 Google Display Network、DV360、The Trade Desk 等 DSP 平台、合作媒体采买及 ABM 展示广告策略。","cname":"奥格威"},{"id":"paid-media/paid-media-search-query-analyst","div":"paid-media","name":"搜索词分析师","emoji":"🔎","color":"orange","desc":"搜索词分析、否定关键词架构和查询意图映射专家，从海量搜索词报告中挖掘优化方向，消灭浪费、放大高意向流量。","cname":"伯内特"},{"id":"paid-media/paid-media-tracking-specialist","div":"paid-media","name":"追踪与归因专家","emoji":"📡","color":"orange","desc":"转化追踪架构、代码管理和归因模型专家，精通 GTM、GA4、Google Ads、Meta CAPI、LinkedIn Insight Tag 及服务端追踪实施，确保每一个转化都被正确计数。","cname":"里维斯"},{"id":"product/product-behavioral-nudge-engine","div":"product","name":"行为助推引擎","emoji":"🧩","color":"#FF8A65","desc":"行为心理学专家，通过调整软件交互节奏和风格，最大化用户动力和成功率。","cname":"贝索斯"},{"id":"product/product-feedback-synthesizer","div":"product","name":"反馈分析师","emoji":"📊","color":"amber","desc":"专注用户反馈收集、分类和洞察提炼的产品分析专家，把碎片化的用户声音变成可执行的产品改进建议。","cname":"贝索斯"},{"id":"product/product-manager","div":"product","name":"产品经理","emoji":"📦","color":"blue","desc":"全局型产品负责人，掌控产品全生命周期——从需求发现、战略规划到路线图制定、干系人对齐、GTM 落地与结果度量。在商业目标、用户需求与技术现实之间架起桥梁，确保在正确的时间交付正确的产品。","cname":"艾维"},{"id":"product/product-sprint-prioritizer","div":"product","name":"Sprint 排序师","emoji":"🏁","color":"indigo","desc":"精通需求优先级排序和 Sprint 规划的产品专家，用框架和数据替代拍脑袋，确保团队永远在做最有价值的事。","cname":"贝索斯"},{"id":"product/product-trend-researcher","div":"product","name":"趋势研究员","emoji":"🔭","color":"violet","desc":"专注行业趋势分析和技术前瞻的研究专家，帮团队看清未来 6-18 个月的方向，在正确的时间做正确的事。","cname":"霍夫曼"},{"id":"project-management/project-management-experiment-tracker","div":"project-management","name":"实验追踪员","emoji":"🧪","color":"purple","desc":"专注实验设计、执行追踪和数据驱动决策的项目管理专家，用科学方法管理 A/B 测试、功能实验和假设验证，拿数据说话而不是拍脑袋。","cname":"泰勒"},{"id":"project-management/project-management-jira-workflow-steward","div":"project-management","name":"Jira工作流管家","emoji":"📋","color":"orange","desc":"交付运营专家，执行Jira关联的Git工作流，确保提交可追溯、PR结构规范、分支策略安全可控。","cname":"萨瑟兰"},{"id":"project-management/project-management-meeting-notes-specialist","div":"project-management","name":"会议纪要专家","emoji":"📋","color":"blue","desc":"从会议 transcript（逐字记录）或零散笔记中提取结构化的决议、action item 和待解决问题，整理成清晰的四段式 summary。","cname":"甘特"},{"id":"project-management/project-management-project-shepherd","div":"project-management","name":"项目牧羊人","emoji":"🐑","color":"blue","desc":"专注跨部门项目协调、时间线管理和利益方对齐的项目管理专家，把项目从立项一路护送到交付，管好资源、风险和各方沟通。","cname":"甘特"},{"id":"project-management/project-management-studio-operations","div":"project-management","name":"工作室运营","emoji":"⚙️","color":"green","desc":"专注工作室日常效率、流程优化和资源协调的运营管理专家，让所有团队都有好用的工具和顺畅的流程，保证事情稳定推进。","cname":"韦伯"},{"id":"project-management/project-management-studio-producer","div":"project-management","name":"工作室制片人","emoji":"🎬","color":"gold","desc":"高级战略领导者，擅长创意与技术项目的统筹协调、资源分配和多项目组合管理，让创意方向和商业目标对齐，管好复杂的跨部门项目。","cname":"朱兰"},{"id":"project-management/project-manager-senior","div":"project-management","name":"高级项目经理","emoji":"👔","color":"blue","desc":"把规格说明书拆成可执行任务的资深 PM，记得住以前项目的经验教训，专注务实的范围控制和精确的需求还原。","cname":"法约尔"},{"id":"sales/sales-account-strategist","div":"sales","name":"客户拓展策略师","emoji":"💼","color":"#2E7D32","desc":"售后客户拓展专家，擅长 Land-and-Expand 执行、干系人关系图谱、QBR 策划及净收入留存率管理。通过系统化扩展规划和多线程客户关系经营，将成交客户发展为长期平台合作。","cname":"吉拉德"},{"id":"sales/sales-coach","div":"sales","name":"销售教练","emoji":"🏋️","color":"#E65100","desc":"专注销售团队能力提升的教练专家，擅长 Pipeline Review、通话辅导、单子策略和 Forecast 准确度管理。通过结构化辅导方法和行为反馈，让每个销售和每笔单子都变得更好。","cname":"齐格勒"},{"id":"sales/sales-deal-strategist","div":"sales","name":"赢单策略师","emoji":"🏆","color":"#1B4D3E","desc":"资深赢单策略师，专精 MEDDPICC 资质审查、竞争定位和复杂 B2B 销售周期的赢单规划。为每笔单子评分、暴露 Pipeline 风险、构建经得起 Forecast Review 检验的赢单策略。","cname":"金克拉"},{"id":"sales/sales-discovery-coach","div":"sales","name":"Discovery 教练","emoji":"❓","color":"#5C7CFA","desc":"销售方法论专家，辅导团队掌握高阶 Discovery 技巧——问题设计、现状诊断、差距量化和通话结构，挖掘客户真正的购买动机。","cname":"金克拉"},{"id":"sales/sales-engineer","div":"sales","name":"售前工程师","emoji":"🔧","color":"#2E5090","desc":"资深售前工程师，专精技术 Discovery、Demo 设计、POC 执行、竞争技术定位，擅长将产品能力转化为业务成果。在单子进入采购流程之前，先赢下技术决策。","cname":"特雷西"},{"id":"sales/sales-offer-lead-gen-strategist","div":"sales","name":"Offer 与 Lead Gen 策略师","emoji":"🧲","color":"#F59E0B","desc":"漏斗顶端（top-of-funnel）架构师，设计无法抗拒的 offer 和 lead magnet，规模化吸引高质量买家。专精于价值方程式（value equation）offer 构建、lead magnet 类型学、多渠道 lead generation，以及通过客户、员工、代理机构和联盟（affiliate）实现复利式触达。","cname":"罗宾斯"},{"id":"sales/sales-outbound-strategist","div":"sales","name":"Outbound 策略师","emoji":"🎯","color":"#E8590C","desc":"基于信号的 Outbound 专家，设计多渠道触达序列、定义 ICP、通过调研驱动的个性化开发 Pipeline——不靠量取胜，靠精准。","cname":"罗宾斯"},{"id":"sales/sales-pipeline-analyst","div":"sales","name":"Pipeline 分析师","emoji":"📊","color":"#059669","desc":"收入运营分析师，专精 Pipeline 健康诊断、单子速度分析、Forecast 准确度和数据驱动的销售辅导。将 CRM 数据转化为可行动的 Pipeline 情报，在风险变成丢掉的季度之前就把它暴露出来。","cname":"特雷西"},{"id":"sales/sales-proposal-strategist","div":"sales","name":"投标策略师","emoji":"📝","color":"#2563EB","desc":"资深投标与方案策略师，将 RFP 和销售机会转化为有说服力的赢标叙事。专精赢标主题提炼、竞争定位、执行摘要写作，构建能打动评审的方案而非仅仅合规的方案。","cname":"特雷西"},{"id":"security/security-appsec-engineer","div":"security","name":"应用安全工程师","emoji":"🔐","color":"#059669","desc":"AppSec 专家，通过威胁建模、安全代码审查、SAST/DAST 集成以及开发者安全教育，把\"写出安全代码\"变成默认选项，从而守护整个软件开发生命周期。","cname":"科温顿"},{"id":"security/security-architect","div":"security","name":"安全架构师","emoji":"🛡️","color":"red","desc":"资深安全架构师，专精威胁建模（threat modeling）、安全设计（secure-by-design）架构、信任边界分析、纵深防御（defense in depth），以及面向 Web、API、云原生和分布式系统的基于风险的安全评审。负责设计安全模型；把代码级 SAST/DAST 与 SDLC 工作交给 AppSec 工程师。","cname":"阿德尔曼"},{"id":"security/security-blockchain-security-auditor","div":"security","name":"区块链安全审计师","emoji":"🛡️","color":"red","desc":"资深智能合约安全审计专家，专注于漏洞检测、形式化验证、攻击分析，以及为 DeFi 协议和区块链应用撰写全面的审计报告。","cname":"迪菲"},{"id":"security/security-cloud-security-architect","div":"security","name":"云安全架构师","emoji":"☁️","color":"#3b82f6","desc":"云原生安全专家，设计零信任架构，在 AWS、Azure 与 GCP 上落地纵深防御，并从第一天起就为基础设施即代码（IaC）流水线保驾护航。","cname":"沙米尔"},{"id":"security/security-compliance-auditor","div":"security","name":"合规审计师","emoji":"📋","color":"orange","desc":"资深技术合规审计师，专精 SOC 2、ISO 27001、HIPAA 与 PCI-DSS 审计——从就绪度评估、证据收集到认证全程把控。","cname":"科温顿"},{"id":"security/security-incident-responder","div":"security","name":"事件响应专家","emoji":"🚨","color":"#f59e0b","desc":"数字取证与事件响应专家，主导数据泄露调查、遏制活跃威胁、协调危机响应，并撰写能防止问题复发的事后复盘报告。","cname":"香农"},{"id":"security/security-penetration-tester","div":"security","name":"渗透测试员","emoji":"🗡️","color":"#dc2626","desc":"进攻性安全专家，开展授权的渗透测试、红队行动以及面向网络、Web 应用和云基础设施的漏洞评估。","cname":"兰普森"},{"id":"security/security-senior-secops","div":"security","name":"高级安全运营工程师","emoji":"🛡️","color":"#E67E22","desc":"防御型应用安全专家。在做任何事之前，先扫描每一次代码提交，检查密钥泄露和敏感数据暴露；随后依据组织的安全标准实现或审计各项安全控制——涵盖认证、授权、令牌、Cookie、HTTP 头、CORS、限流、CSP、密钥管理、输入校验和安全日志。","cname":"齐默尔曼"},{"id":"security/security-threat-detection-engineer","div":"security","name":"威胁检测工程师（安全运营）","emoji":"🎯","color":"#7b2d8e","desc":"资深检测工程师，专注于 SIEM 规则开发、MITRE ATT&CK 覆盖映射、威胁狩猎、告警调优，以及面向安全运营团队的 detection-as-code（检测即代码）流水线。","cname":"图灵"},{"id":"security/security-threat-intelligence-analyst","div":"security","name":"威胁情报分析师","emoji":"🔍","color":"#7c3aed","desc":"网络威胁情报专家，负责追踪对手团伙、将攻击活动映射到 MITRE ATT&CK、产出可落地的情报报告，并构建能抓住真实威胁的检测规则。","cname":"施奈尔"},{"id":"spatial-computing/macos-spatial-metal-engineer","div":"spatial-computing","name":"macOS Metal 空间工程师","emoji":"🍎","color":"metallic-blue","desc":"原生 Swift 和 Metal 专家，构建高性能 3D 渲染系统和空间计算体验，覆盖 macOS 与 Vision Pro 平台","cname":"拉尼尔"},{"id":"spatial-computing/terminal-integration-specialist","div":"spatial-computing","name":"终端集成专家","emoji":"🖥️","color":"green","desc":"终端模拟、文本渲染优化和 SwiftTerm 集成，面向现代 Swift 应用","cname":"阿西莫夫"},{"id":"spatial-computing/visionos-spatial-engineer","div":"spatial-computing","name":"visionOS 空间工程师","emoji":"🥽","color":"indigo","desc":"原生 visionOS 空间计算、SwiftUI 体积式界面和 Liquid Glass 设计实现","cname":"阿西莫夫"},{"id":"spatial-computing/xr-cockpit-interaction-specialist","div":"spatial-computing","name":"XR 座舱交互专家","emoji":"🛩️","color":"orange","desc":"专注设计和开发 XR 环境中沉浸式座舱控制系统","cname":"阿西莫夫"},{"id":"spatial-computing/xr-immersive-developer","div":"spatial-computing","name":"XR 沉浸式开发者","emoji":"🥽","color":"neon-cyan","desc":"WebXR 和沉浸式技术专家，专注浏览器端 AR/VR/XR 应用开发","cname":"刘慈欣"},{"id":"spatial-computing/xr-interface-architect","div":"spatial-computing","name":"XR 界面架构师","emoji":"🕹️","color":"neon-green","desc":"空间交互设计师和沉浸式 AR/VR/XR 环境的界面策略专家","cname":"萨瑟兰"},{"id":"specialized/accounts-payable-agent","div":"specialized","name":"应付账款智能体","emoji":"💳","color":"green","desc":"自主支付处理专家，负责执行供应商付款、承包商发票和定期账单，支持加密货币、法币、稳定币等多种支付通道，通过 MCP 与 AI 智能体工作流集成。","cname":"特斯拉"},{"id":"specialized/agentic-identity-trust","div":"specialized","name":"身份信任架构师","emoji":"🔐","color":"#2d5a27","desc":"为自主运行的 AI 智能体设计身份认证和信任验证体系，确保智能体能证明自己是谁、被授权做什么、实际做了什么。","cname":"本吉奥"},{"id":"specialized/agents-orchestrator","div":"specialized","name":"智能体编排者","emoji":"🎭","color":"cyan","desc":"自主流水线管理者，负责编排整个开发工作流。你是这个流程的领导者。","cname":"哈萨比斯"},{"id":"specialized/automation-governance-architect","div":"specialized","name":"自动化治理架构师","emoji":"⚙️","color":"cyan","desc":"以治理为先的业务自动化架构师（n8n 优先），在实施之前先审计价值、风险和可维护性。","cname":"李飞飞"},{"id":"specialized/business-strategist","div":"specialized","name":"商业战略家","emoji":"♟️","color":"indigo","desc":"资深管理咨询专家，专注竞争分析、市场进入策略、商业模式设计、增长规划、组织战略与战略决策——把复杂的市场动态转化为清晰、可落地、能创造可持续竞争优势的战略","cname":"阿基米德"},{"id":"specialized/change-management-consultant","div":"specialized","name":"变革管理顾问","emoji":"🔄","color":"amber","desc":"资深变革管理专家，运用 ADKAR、Kotter 和 Prosci 框架，引导组织顺利完成技术落地、组织重构、文化转型与并购整合——管理阻力、推动接纳，并确保变革在上线之后长久落地","cname":"萨根"},{"id":"specialized/chief-financial-officer","div":"specialized","name":"首席财务官","emoji":"💼","color":"navy","desc":"战略财务高管，掌管资本配置、资金运营、财务规划、并购财务、投资者关系与董事会汇报——把财务的复杂性转化为清晰决策，驱动业务表现并赢得各方利益相关者的信心。","cname":"杨立昆"},{"id":"specialized/corporate-training-designer","div":"specialized","name":"企业培训课程设计师","emoji":"🎓","color":"orange","desc":"专注企业培训体系搭建与课程开发的专家，精通培训需求分析、教学设计方法论、混合式学习方案设计、内训师培养、领导力发展项目以及培训效果评估与持续优化。","cname":"马克思"},{"id":"specialized/customer-success-manager","div":"specialized","name":"客户成功经理","emoji":"🌟","color":"green","desc":"战略型客户成功专家，负责 onboarding（新客导入）、health scoring（健康度评分）、QBR 主持、churn（流失）防控、扩张机会识别与续约管理——通过把客户变成能取得可量化成果的长期伙伴，驱动 net revenue retention（净收入留存）","cname":"马克思"},{"id":"specialized/data-consolidation-agent","div":"specialized","name":"数据整合师","emoji":"🗃️","color":"#38a169","desc":"把提取出的销售数据整合到实时报告仪表盘，按区域、销售代表和销售管线生成汇总视图。","cname":"辛顿"},{"id":"specialized/data-privacy-officer","div":"specialized","name":"数据隐私官","emoji":"🔐","color":"purple","desc":"企业数据隐私专家与 DPO（数据保护官），负责构建 GDPR、CCPA 及全球隐私合规体系——覆盖数据测绘、隐私影响评估、同意管理、泄露响应、供应商尽职调查与监管沟通。","cname":"欧拉"},{"id":"specialized/esg-sustainability-officer","div":"specialized","name":"ESG 与可持续发展官","emoji":"🌱","color":"green","desc":"企业可持续发展战略专家与 ESG 信息披露专员，负责搭建 environmental、social、governance（环境、社会、治理）项目，管理信息披露，推动 decarbonization（脱碳）行动，并使业务战略与利益相关方及监管预期保持一致。","cname":"图灵"},{"id":"specialized/gaokao-college-advisor","div":"specialized","name":"高考志愿填报顾问","emoji":"🎓","color":"red","desc":"中国高考志愿填报策略专家，精通平行志愿与院校专业组填报规则、位次法与等位分析、新高考选科组合与专业限选、提前批与专项计划、院校层次定位、冲稳保策略，帮助考生和家长制定科学的志愿填报方案。","cname":"开普勒"},{"id":"specialized/government-digital-presales-consultant","div":"specialized","name":"政务数字化售前顾问","emoji":"🏛️","color":"#8B0000","desc":"面向中国政务市场（ToG）的数字化项目售前专家，精通政策解读、方案设计、标书编写、POC 验证、合规要求（等保/密评/信创）及客户关系管理，帮助技术团队高效赢得政府信息化项目。","cname":"马克思"},{"id":"specialized/grant-writer","div":"specialized","name":"资助申请撰稿人","emoji":"📝","color":"purple","desc":"资深 grant writing（基金申请写作）专家，服务于非营利组织、科研机构与社会企业——覆盖资助方调研（prospect research）、意向函（letter of inquiry）撰写、完整 proposal 开发、budget narrative、联邦与基金会 grant、以及结项后报告，最大化获资成功率","cname":"欧拉"},{"id":"specialized/healthcare-customer-service","div":"specialized","name":"医疗客服专家","emoji":"🏥","color":"teal","desc":"富有同理心的医疗客服专家，负责患者支持、账单查询、预约管理、保险问题、投诉处理，以及向临床或行政人员的无缝转接。","cname":"富兰克林"},{"id":"specialized/healthcare-marketing-compliance","div":"specialized","name":"医疗健康营销合规师","emoji":"🏥","color":"#2E8B57","desc":"深耕中国医疗健康行业营销合规的专家，精通《广告法》《医疗广告管理办法》《药品管理法》等法规，覆盖药品、医疗器械、医美、保健品、互联网医疗等细分领域的营销合规审查、内容风控、平台规则解读及患者隐私保护，帮助企业在合法合规的前提下高效开展健康营销。","cname":"富兰克林"},{"id":"specialized/hospitality-guest-services","div":"specialized","name":"酒店宾客服务专家","emoji":"🏨","color":"teal","desc":"全面的酒店宾客服务专家，覆盖酒店、度假村、餐厅和活动场所——涵盖预订、入住/退房、礼宾服务、宾客投诉处理、忠诚度计划管理和离店后跟进，打造卓越的宾客体验以驱动忠诚度和收入增长。","cname":"马克思"},{"id":"specialized/hr-onboarding","div":"specialized","name":"HR 入职管理专家","emoji":"👋","color":"green","desc":"全面的 HR 入职管理专家，负责员工迎新、文档管理、合规追踪、福利登记、文化融入和新员工支持——打造从第一天到第一年的无缝入职体验，驱动留存率和生产力。","cname":"居里"},{"id":"specialized/identity-graph-operator","div":"specialized","name":"身份图谱操作员","emoji":"🕸️","color":"#C5A572","desc":"运维多智能体系统的共享身份图谱，确保每个智能体对\"这个实体是谁？\"都能得到一致的规范答案——即使在并发写入下也保持确定性。","cname":"富兰克林"},{"id":"specialized/language-translator","div":"specialized","name":"语言翻译专家","emoji":"🌐","color":"teal","desc":"实时西班牙语与英语互译专家，提供文化语境、地区方言感知、旅行用语指导以及语气恰当的沟通支持，覆盖日常、商务和紧急场景。","cname":"麦克斯韦"},{"id":"specialized/legal-billing-time-tracking","div":"specialized","name":"律所计费与工时专家","emoji":"⏱️","color":"green","desc":"全面的律所计费与工时追踪专家，负责精准工时记录、发票生成、计费叙述撰写、应收账款管理、信托账户合规和计费分析——在保持客户关系和道德合规的同时最大化收入回收，适用于任何规模的律所和计费模式。","cname":"本吉奥"},{"id":"specialized/legal-client-intake","div":"specialized","name":"律所客户接案专家","emoji":"📋","color":"blue","desc":"全面的律所客户接案专家，负责潜在客户资质审核、案件信息收集、咨询预约安排、利益冲突筛查，以及提供律师就绪的接案摘要，覆盖所有业务领域和律所规模。","cname":"奥特曼"},{"id":"specialized/legal-document-review","div":"specialized","name":"法律文书审查专家","emoji":"📑","color":"blue","desc":"全面的法律文书审查专家，涵盖合同、诉讼文件和不动产协议——提供文档摘要、风险条款标记、合同版本比对和合规检查，适用于各类律所和业务领域。","cname":"富兰克林"},{"id":"specialized/livestock-archive-auditor","div":"specialized","name":"养殖档案核对员","emoji":"🐄","color":"#22C55E","desc":"核对畜禽养殖档案 Excel 与生产日报，按子表独立审计兽药、饲料、诊疗、免疫、生产记录等错填漏填，FIFO 复核批号，输出可直接整改的中文问题表述。","cname":"马斯克"},{"id":"specialized/loan-officer-assistant","div":"specialized","name":"信贷经理助手","emoji":"🏦","color":"blue","desc":"综合信贷经理助手，涵盖借款人接待、资格预审、文件收集、流水线管理、合规追踪、利率报价和过户协调，适用于住宅、商业和消费信贷。","cname":"奥特曼"},{"id":"specialized/lsp-index-engineer","div":"specialized","name":"LSP 索引工程师","emoji":"🔎","color":"orange","desc":"Language Server Protocol 专家，通过 LSP 客户端编排和语义索引构建统一的代码智能系统。","cname":"伽利略"},{"id":"specialized/ma-integration-manager","div":"specialized","name":"M&A 整合经理","emoji":"🤝","color":"indigo","desc":"并购(M&A)整合专家，负责设计并执行并购后整合(PMI)项目——涵盖 Day 1 就绪、百日计划、synergy(协同效应)追踪、文化整合、职能工作流协调，以及过渡服务协议(TSA)管理。","cname":"冯诺依曼"},{"id":"specialized/medical-billing-coding-specialist","div":"specialized","name":"医疗账单与编码专员","emoji":"🏥","color":"blue","desc":"精通 ICD-10-CM/PCS、CPT、HCPCS 编码的医疗账单与编码专家，擅长 claim（理赔单）提交、denial（拒付）管理、收入周期优化、合规审计与 payer（付款方）合同分析——为各种规模的医疗服务提供方最大化 clean claim 率（一次通过率）和收入回收","cname":"居里"},{"id":"specialized/operations-manager","div":"specialized","name":"运营经理","emoji":"⚙️","color":"slate","desc":"业务运营专家，把 Lean（精益）、Six Sigma（六西格玛）和系统思维应用到流程梳理、产能规划、KPI 治理、供应商管理和组织效率提升上——将运营的复杂性转化为可复制、可衡量的绩效。","cname":"萨根"},{"id":"specialized/organizational-psychologist","div":"specialized","name":"组织心理学家","emoji":"🧠","color":"teal","desc":"应用型组织心理学家，诊断团队动力、psychological safety（心理安全感）、burnout（职业倦怠）风险与文化健康度——用循证框架帮助领导者打造高绩效、有韧性、心理安全的组织。","cname":"本吉奥"},{"id":"specialized/personal-growth-mentor","div":"specialized","name":"个人成长导师","emoji":"🌱","color":"teal","desc":"跨领域个人发展导师，专注目标厘清、习惯（habit）设计、战略决策与责任督促（accountability），不灌鸡汤。","cname":"达尔文"},{"id":"specialized/prompt-engineer","div":"specialized","name":"提示词工程师","emoji":"🧠","color":"violet","desc":"专注大语言模型提示词设计与优化的专家，精通系统提示词架构、思维链设计、少样本学习策略、以及提示词效果评测和迭代方法论。","cname":"伽利略"},{"id":"specialized/real-estate-buyer-seller","div":"specialized","name":"房地产经纪助手","emoji":"🏠","color":"teal","desc":"综合房地产经纪人助手，涵盖买方代理、卖方代理、房源管理、报价谈判、交易协调和过户支持，提供从首次看房到最终过户的世界级客户体验，适用于住宅和投资房地产。","cname":"吴恩达"},{"id":"specialized/recruitment-specialist","div":"specialized","name":"人才获取专家","emoji":"🎯","color":"blue","desc":"招聘运营与人才获取专家，精通国内主流招聘平台、人才评估体系和劳动法合规，帮助企业高效吸引、筛选和留住优秀人才，打造有竞争力的雇主品牌。","cname":"马克思"},{"id":"specialized/report-distribution-agent","div":"specialized","name":"报告分发师","emoji":"📤","color":"#d69e2e","desc":"自动把整合好的销售报告按区域分发给对应的销售代表，支持定时和手动触发。","cname":"吴恩达"},{"id":"specialized/retail-customer-returns","div":"specialized","name":"零售退货专家","emoji":"↩️","color":"amber","desc":"综合零售退货专家，处理线上线下及全渠道零售的退货、换货和退款，涵盖政策执行、防欺诈、客户留存、供应商退货和退货分析，在最大化商品回收的同时维护客户忠诚度。","cname":"杨立昆"},{"id":"specialized/sales-data-extraction-agent","div":"specialized","name":"销售数据提取师","emoji":"📊","color":"#2b6cb0","desc":"监控 Excel 文件并提取关键销售指标（月累计、年累计、年末预测），服务于内部实时报告系统。","cname":"刘慈欣"},{"id":"specialized/specialized-ai-policy-writer","div":"specialized","name":"AI 治理政策专家","emoji":"📜","color":"#6366F1","desc":"面向中国企业和机构的 AI 治理与合规专家，精通《生成式 AI 管理办法》、算法备案制度、深度合成管理规定、大模型安全评估流程及 AI 伦理审查机制，帮助组织构建符合中国监管要求的 AI 治理框架并落地执行。","cname":"笛卡尔"},{"id":"specialized/specialized-chief-of-staff","div":"specialized","name":"幕僚长","emoji":"👔","color":"#6B7280","desc":"创始人和高管的首席协调者——过滤噪音、掌控流程、确保一致性、路由决策、将产出定位到最大影响处，让老板能清晰思考。","cname":"富兰克林"},{"id":"specialized/specialized-civil-engineer","div":"specialized","name":"土木工程师","emoji":"🏗️","color":"yellow","desc":"精通全球标准的土木与结构工程专家——覆盖 Eurocode、DIN、ACI、AISC、ASCE、AS/NZS、CSA、GB、IS、AIJ 等。专长领域包括结构分析、岩土设计、施工文件编制、建筑规范合规以及多标准国际项目协调。","cname":"麦克斯韦"},{"id":"specialized/specialized-cultural-intelligence-strategist","div":"specialized","name":"文化智能策略师","emoji":"🌏","color":"#FFA000","desc":"文化智商（CQ）专家，检测隐性排斥、研究全球化上下文，确保软件产品在跨文化和交叉身份中产生真实共鸣。","cname":"特斯拉"},{"id":"specialized/specialized-developer-advocate","div":"specialized","name":"开发者布道师","emoji":"📣","color":"purple","desc":"专业开发者关系专家，擅长构建开发者社区、创作技术内容、优化开发者体验（DX），通过真实的工程参与驱动平台采用。连接产品团队、工程团队与外部开发者。","cname":"图灵"},{"id":"specialized/specialized-document-generator","div":"specialized","name":"文档生成器","emoji":"📄","color":"blue","desc":"专业文档创建专家，通过代码化方式生成专业的 PDF、PPTX、DOCX 和 XLSX 文件，支持格式化、图表和数据可视化。","cname":"阿基米德"},{"id":"specialized/specialized-french-consulting-market","div":"specialized","name":"法国咨询市场专家","emoji":"🇫🇷","color":"#002395","desc":"法国 ESN/SI 自由职业生态导航专家，精通利润模型、平台机制（Malt、collective.work）、薪资代管、费率定位和付款周期。","cname":"欧拉"},{"id":"specialized/specialized-korean-business-navigator","div":"specialized","name":"韩国商务专家","emoji":"🇰🇷","color":"#003478","desc":"韩国商务文化导航专家，精通품의决策流程、눈치社交智慧、KakaoTalk 商务礼仪、层级关系处理和关系优先的交易模式。","cname":"莱布尼茨"},{"id":"specialized/specialized-mcp-builder","div":"specialized","name":"MCP 构建器","emoji":"🔧","color":"indigo","desc":"Model Context Protocol 开发专家，设计、构建和测试 MCP 服务器，通过自定义工具、资源和提示词扩展 AI 智能体能力。","cname":"霍金"},{"id":"specialized/specialized-meeting-assistant","div":"specialized","name":"会议效率专家","emoji":"📅","color":"#06B6D4","desc":"面向中国企业的会议管理与效率提升专家，精通飞书、钉钉、腾讯会议等协作平台，擅长会议纪要撰写、行动项追踪、议程设计、OKR 周会组织及跨时区会议协调，帮助团队将会议从\"时间黑洞\"变为\"决策引擎\"。","cname":"富兰克林"},{"id":"specialized/specialized-model-qa","div":"specialized","name":"模型 QA 专家","emoji":"✅","color":"#B22222","desc":"独立模型 QA 专家，端到端审计机器学习和统计模型——从文档审查、数据重建到复现、校准测试、可解释性分析、性能监控和审计级报告。","cname":"居里"},{"id":"specialized/specialized-pricing-analyst","div":"specialized","name":"定价分析师","emoji":"💰","color":"gold","desc":"专精定价分析师，通过市场调研、竞品分析、成本结构评估和 margin（利润率）优化，构建最优定价模型——把定价从凭感觉拍脑袋，变成数据驱动的竞争优势。","cname":"冯诺依曼"},{"id":"specialized/specialized-pricing-optimizer","div":"specialized","name":"动态定价策略师","emoji":"💲","color":"#E74C3C","desc":"专注电商动态定价与促销策略的价格优化专家，精通淘宝、京东、拼多多等平台的价格机制、大促定价规则、竞品价格监控和利润最大化策略，帮助商家在激烈的价格战中实现利润与销量的最优平衡。","cname":"伽利略"},{"id":"specialized/specialized-risk-assessor","div":"specialized","name":"企业风险评估师","emoji":"⚖️","color":"#E74C3C","desc":"面向中国企业的全面风险管理专家，精通国企风控体系建设、内控合规（COSO 框架本土化）、审计整改、ESG 风险管理及供应链风险评估，帮助企业构建系统化的风险识别、评估与应对机制，提升组织韧性。","cname":"哈萨比斯"},{"id":"specialized/specialized-salesforce-architect","div":"specialized","name":"Salesforce 架构师","emoji":"☁️","color":"#00A1E0","desc":"Salesforce 平台的解决方案架构——多云设计、集成模式、Governor Limits、部署策略和数据模型治理，适用于企业级组织","cname":"莱布尼茨"},{"id":"specialized/specialized-strategy-duel-agent","div":"specialized","name":"策略对决推演师","emoji":"⚔️","color":"#1e90ff","desc":"运用 game theory（博弈论）和三十六计开展实时策略对决推演","cname":"居里"},{"id":"specialized/specialized-workflow-architect","div":"specialized","name":"工作流架构师","emoji":"🔄","color":"orange","desc":"工作流设计专家，为每个系统、用户旅程和智能体交互绘制完整的工作流树——涵盖正常路径、所有分支条件、故障模式、恢复路径、交接契约和可观测状态，产出可直接用于构建的规格说明，让开发人员据此实现、QA 据此测试。","cname":"高斯"},{"id":"specialized/study-abroad-advisor","div":"specialized","name":"留学规划顾问","emoji":"✈️","color":"#1B4D3E","desc":"覆盖美英加澳欧港新的全阶段留学规划专家，精通本科/硕士/博士申请策略、选校定位、文书打磨、背景提升、标化规划、签证准备和海外生活适应，帮助中国学生制定个性化的全链路留学方案。","cname":"居里"},{"id":"specialized/technical-translator-agent","div":"specialized","name":"技术翻译专家","emoji":"🌐","color":"cyan","desc":"专注于技术领域的中英文双向翻译，精通编程、AI、云计算等技术术语，确保技术文档的准确性和专业性","cname":"萨根"},{"id":"specialized/zk-steward","div":"specialized","name":"ZK 管家","emoji":"🔐","color":"teal","desc":"秉承 Niklas Luhmann 卡片盒笔记法精神的知识库管家。默认视角为 Luhmann；按任务切换领域专家（Feynman、Munger、Ogilvy 等）。强制原子笔记、连接性和验证闭环。适用于知识库建设、笔记链接、复杂任务分解和跨领域决策支持。","cname":"李飞飞"},{"id":"supply-chain/supply-chain-garment-factory-planning-engineer","div":"supply-chain","name":"服装工厂规划工程师","emoji":"🏭","color":"#1565C0","desc":"全球多基地服装工厂规划专家——精通牛仔/羽绒服/无痕内衣/针织产线全流程设计，覆盖场地规划、产能测算、设备选型、精益优化与多国合规，支持中文/英文/法语/柬埔寨语","cname":"惠特尼"},{"id":"supply-chain/supply-chain-inventory-forecaster","div":"supply-chain","name":"库存预测专家","emoji":"📦","color":"#3498DB","desc":"专注需求预测与库存管理的供应链专家，擅长基于历史销售数据和市场趋势的精准需求预测、安全库存计算、补货策略优化，帮助企业在中国电商大促节奏下实现\"不断货、不积压\"的库存平衡。","cname":"惠特尼"},{"id":"supply-chain/supply-chain-route-optimizer","div":"supply-chain","name":"物流路线优化师","emoji":"🗺️","color":"#F39C12","desc":"专注物流配送路线规划与成本优化的供应链专家，精通中国快递物流体系、同城配送网络、冷链运输和跨境物流方案，帮助企业在保障时效的前提下实现物流成本最优。","cname":"泰勒"},{"id":"supply-chain/supply-chain-strategist","div":"supply-chain","name":"供应链采购策略师","emoji":"🔗","color":"blue","desc":"专业的供应链管理与采购策略专家，精通供应商开发与管理、战略采购、质量管控和供应链数字化。立足中国制造业生态，帮助企业构建高效、韧性、可持续的供应链体系。","cname":"戴明"},{"id":"supply-chain/supply-chain-vendor-evaluator","div":"supply-chain","name":"供应商评估专家","emoji":"🔍","color":"#2ECC71","desc":"专注供应商全生命周期管理的采购策略专家，擅长供应商筛选与评分、验厂审核、质量管理体系搭建、账期与成本谈判，帮助企业在1688等采购平台上建立稳定可靠的供应商体系。","cname":"福特"},{"id":"support/support-analytics-reporter","div":"support","name":"数据分析师","emoji":"📈","color":"teal","desc":"专业数据分析师，擅长将原始数据转化为可操作的业务洞察。创建仪表盘、执行统计分析、跟踪 KPI，并通过数据可视化和报告提供战略决策支持。","cname":"南丁格尔"},{"id":"support/support-executive-summary-generator","div":"support","name":"高管摘要师","emoji":"📝","color":"purple","desc":"像资深战略顾问一样思考和表达的 AI 专家，擅长把复杂的业务信息压缩成简洁、可执行的高管摘要。用 McKinsey SCQA、BCG Pyramid Principle、Bain 框架帮 C-level 在三分钟内做出决策。","cname":"杜威"},{"id":"support/support-finance-tracker","div":"support","name":"财务追踪员","emoji":"💵","color":"green","desc":"专业的财务分析与管控专家，擅长财务规划、预算管理和经营绩效分析。守住企业财务健康底线，优化现金流，为业务增长提供有数据支撑的财务洞察。","cname":"甘地"},{"id":"support/support-infrastructure-maintainer","div":"support","name":"基础设施运维师","emoji":"🔧","color":"orange","desc":"专业的基础设施运维专家，专注系统可靠性、性能优化和技术运营管理。用安全、高性能、低成本的方式维护稳定可扩展的基础设施，撑住业务运转。","cname":"特蕾莎"},{"id":"support/support-legal-compliance-checker","div":"support","name":"法务合规员","emoji":"⚖️","color":"red","desc":"专业的法律合规专家，确保业务运营、数据处理和内容创作符合多个司法管辖区的相关法律法规和行业标准。","cname":"卡耐基"},{"id":"support/support-recruitment-specialist","div":"support","name":"招聘运营专家","emoji":"🎯","color":"blue","desc":"专业的招聘运营与人才获取专家，精通中国主流招聘渠道运营、人才评估体系搭建和劳动法合规管理。帮助企业高效吸引、筛选和留住优秀人才，打造有竞争力的雇主品牌。","cname":"曼德拉"},{"id":"support/support-support-responder","div":"support","name":"客服响应者","emoji":"💬","color":"blue","desc":"专业的客户支持专家，提供卓越的客户服务、问题解决和用户体验优化。擅长多渠道支持、主动客户关怀，将支持互动转化为积极的品牌体验。","cname":"南丁格尔"},{"id":"testing/testing-accessibility-auditor","div":"testing","name":"无障碍审核员","emoji":"♿","color":"#0077B6","desc":"专注无障碍审核的可访问性专家，按 WCAG 标准审查界面、用辅助技术实测、确保产品人人可用。默认立场是找问题——没用屏幕阅读器测过的，就不算无障碍。","cname":"迈尔斯"},{"id":"testing/testing-api-tester","div":"testing","name":"API 测试员","emoji":"🔗","color":"purple","desc":"专注于全面 API 验证、性能测试和质量保证的 API 测试专家，覆盖所有系统和第三方集成","cname":"石川馨"},{"id":"testing/testing-embedded-qa-engineer","div":"testing","name":"嵌入式测试工程师","emoji":"🔌","color":"#E65100","desc":"嵌入式系统质量保障专家——精通硬件在环测试（HIL）、固件自动化测试、OTA 回归、EMC/ESD 测试规划、量产测试夹具设计、故障注入与可靠性验证。","cname":"克罗斯比"},{"id":"testing/testing-evidence-collector","div":"testing","name":"证据收集者","emoji":"🗂️","color":"#708090","desc":"专注测试证据链完整性的质量专家，确保每一个测试结论都有充分的证据支撑，让质量报告经得起任何质疑。","cname":"迈尔斯"},{"id":"testing/testing-performance-benchmarker","div":"testing","name":"性能基准师","emoji":"📊","color":"lime","desc":"专注系统性能测试和容量规划的性能工程专家，用数据找到性能瓶颈，用基准测试证明优化效果。","cname":"朱兰"},{"id":"testing/testing-reality-checker","div":"testing","name":"现实检验者","emoji":"🎯","color":"red","desc":"阻止幻想式审批，基于证据的认证——默认为\"需要改进\"，要求压倒性证据才能认定生产就绪","cname":"博姆"},{"id":"testing/testing-test-results-analyzer","div":"testing","name":"测试结果分析师","emoji":"📈","color":"indigo","desc":"专注测试结果评估和质量度量分析的测试分析专家，把原始测试数据变成可执行的洞察，驱动质量决策。","cname":"博姆"},{"id":"testing/testing-tool-evaluator","div":"testing","name":"工具评估师","emoji":"🔧","color":"teal","desc":"专注工具评测和选型的技术评估专家，通过全面的功能对比、性能测试和成本分析，帮团队选对工具、用好工具。","cname":"石川馨"},{"id":"testing/testing-workflow-optimizer","div":"testing","name":"工作流优化师","emoji":"🔄","color":"green","desc":"专注流程分析和优化的效率专家，通过消除瓶颈、精简流程和引入自动化，让团队干活更快、出错更少、人也更舒服。","cname":"迈尔斯"}]}};
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
    var copied = false;
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(instr).then(function () { copied = true; }).catch(function () {});
    }
    if (inputActions && typeof inputActions.setDraft === 'function') { inputActions.setDraft(instr); }
    else {
      fillInput(instr);
      setTeamMsg('✅ 已生成「' + name + '」编排指令并复制，到对话框「黏贴」后补一句任务再发送');
    }
    if (teamMsgTimer.current) clearTimeout(teamMsgTimer.current);
    teamMsgTimer.current = setTimeout(function () { setTeamMsg(''); }, 5000);
    jumpToChat(props);
    return void copied;
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
      ? React.createElement('div', { style: { padding: 10, width: 440, maxHeight: 460, overflowY: 'auto' } },
          React.createElement('div', { style: { fontSize: 12, fontWeight: 700, opacity: 0.92, marginBottom: 6 } }, '推荐团队'),
          React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 } },
            PRESETS.map(function (p) { return React.createElement('span', { key: p.name, onClick: function () { loadTeamIntoDraft(p); }, style: { cursor: 'pointer', borderRadius: 14, padding: '3px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit' } }, '⭐ ' + p.name); })
          ),
          teams.length > 0
            ? React.createElement('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 } },
                teams.map(function (t) { return React.createElement('span', { key: t.name, onClick: function () { loadTeamIntoDraft(t); }, style: { cursor: 'pointer', borderRadius: 14, padding: '3px 10px', fontSize: 12, border: '1px solid var(--dsw-alias-border-l1,#ccc)', background: 'var(--dsw-alias-bg-layer-1,#fff)', color: 'inherit' } }, '💾 ' + t.name); })
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


    exports.apply = apply;
    return module.exports;
  }
});

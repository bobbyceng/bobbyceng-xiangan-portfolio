const content = {
  meta: {
    title: {
      cn: '曾祥桉｜AI 产品经理',
      en: 'Xiangan Zeng | AI Product Manager',
    },
  },
  ui: {
    language: {
      label: { cn: '语言', en: 'Language' },
      cn: { cn: '中文', en: 'Chinese' },
      en: { cn: 'EN', en: 'English' },
    },
    brand: {
      separator: { cn: '·', en: '·' },
    },
    a11y: {
      primaryNav: { cn: '主导航', en: 'Primary navigation' },
    },
    cta: {
      downloadResume: { cn: '下载简历', en: 'Download Resume' },
      viewProjects: { cn: '查看项目', en: 'View Projects' },
      emailMe: { cn: '发邮件联系', en: 'Email Me' },
      openGithub: { cn: '打开 GitHub', en: 'Open GitHub' },
    },
    link: {
      github: { cn: '代码', en: 'GitHub' },
      demo: { cn: '原型', en: 'Demo' },
      prd: { cn: '文档', en: 'PRD' },
      resume: { cn: '简历', en: 'Resume' },
    },
    footer: {
      note: {
        cn: '以“清晰、克制、可验证”为原则构建的单页作品集。',
        en: 'A single-page portfolio built for clarity, restraint, and measurability.',
      },
    },
  },
  nav: {
    items: [
      { id: 'hero', label: { cn: '首页', en: 'Top' } },
      { id: 'highlights', label: { cn: '亮点', en: 'Highlights' } },
      { id: 'projects', label: { cn: '项目', en: 'Projects' } },
      { id: 'experience', label: { cn: '经历', en: 'Experience' } },
      { id: 'skills', label: { cn: '技能', en: 'Skills' } },
      { id: 'education', label: { cn: '教育', en: 'Education' } },
      { id: 'contact', label: { cn: '联系', en: 'Contact' } },
    ],
  },
  hero: {
    name: { cn: '曾祥桉', en: 'Xiangan Zeng' },
    title: { cn: 'AI 产品经理', en: 'AI Product Manager' },
    tagline: {
      cn: '用可验证的方式，把 AI 能力变成产品价值。',
      en: 'Turning AI capabilities into measurable product value.',
    },
    intro: {
      cn: '关注产品闭环、交付稳定性与可解释性：从需求洞察到方案落地，再到指标验证。',
      en: 'Focused on product loops, reliable delivery, and explainability—from discovery to shipping and metrics validation.',
    },
    avatarAlt: {
      cn: '曾祥桉头像',
      en: 'Portrait of Xiangan Zeng',
    },
  },
  highlights: {
    heading: { cn: '我擅长什么', en: 'What I’m good at' },
    items: [
      {
        title: { cn: '需求 → 方案 → 验证', en: 'Problem → Solution → Validation' },
        desc: {
          cn: '先把问题定义清楚，再用最小实验验证假设。',
          en: 'Define the problem clearly, then validate fast with minimal experiments.',
        },
      },
      {
        title: { cn: 'AI 能力产品化', en: 'Productizing AI' },
        desc: {
          cn: 'Prompt / 工具编排落地，关注可解释与稳定交付。',
          en: 'Prompt and tool orchestration with explainability and reliable delivery in mind.',
        },
      },
      {
        title: { cn: '指标与闭环', en: 'Metrics & Loops' },
        desc: {
          cn: '定义 KPI、监控与 A/B 思路，用数据推动迭代。',
          en: 'KPI definition, tracking, and A/B thinking to drive iterations.',
        },
      },
    ],
  },
  projects: {
    heading: { cn: '项目展示', en: 'Projects' },
    note: {
      cn: '个人项目与项目经历分开展示，均提供可访问的原型/文档/代码。',
      en: 'Personal projects and project experience are separated, with accessible demos, docs, or code.',
    },
    personalHeading: { cn: '个人项目', en: 'Personal Project' },
    experienceHeading: { cn: '项目经历', en: 'Project Experience' },
    personal: [
      {
        key: 'coach-titan',
        title: { cn: 'Coach Titan（iOS/Web）', en: 'Coach Titan (iOS/Web)' },
        subtitle: {
          cn: 'AI 饮食教练 MVP',
          en: 'AI Diet Coach MVP',
        },
        desc: {
          cn: '针对“健身但不愿精算食物”人群，基于拳掌法提供低门槛饮食记录与策略建议。',
          en: 'Low-friction diet logging for fitness users who avoid strict macro math, built on hand-portion estimation plus AI guidance.',
        },
        bullets: {
          cn: [
            '设计低摩擦录入闭环：快速输入、预览卡片、历史复盘',
            '分层推荐策略：基础估算与更准确方案并行',
            '安全门槛机制：伤病史预设后解锁深度建议',
            '工具链工程化迁移：从 Coze 迁移至 OpenCode',
            '完成 Web → iOS 真机可演示闭环',
          ],
          en: [
            'Low-friction input loop: quick entry, preview cards, history review',
            'Tiered recommendation strategy (baseline vs higher-accuracy)',
            'Safety gate: injury history required for deeper advice',
            'Toolchain migration from Coze to OpenCode for stability',
            'End-to-end demo: Web to iOS device',
          ],
        },
        links: [
          {
            label: { cn: '代码（GitHub）', en: 'GitHub' },
            href: 'https://github.com/bobbyceng/coach-titan-web',
          },
        ],
        gallery: [
          {
            src: '/assets/coach-titan/IMG_1151.PNG',
            alt: { cn: 'Coach Titan 应用截图 1', en: 'Coach Titan screenshot 1' },
          },
          {
            src: '/assets/coach-titan/IMG_1153.PNG',
            alt: { cn: 'Coach Titan 应用截图 2', en: 'Coach Titan screenshot 2' },
          },
          {
            src: '/assets/coach-titan/IMG_1154.PNG',
            alt: { cn: 'Coach Titan 应用截图 3', en: 'Coach Titan screenshot 3' },
          },
          {
            src: '/assets/coach-titan/IMG_1155.PNG',
            alt: { cn: 'Coach Titan 应用截图 4', en: 'Coach Titan screenshot 4' },
          },
        ],
      },
    ],
    experience: [
      {
        key: 'crm-labeling',
        title: { cn: 'CRM 智能客户标签系统', en: 'CRM Intelligent Labeling' },
        subtitle: {
          cn: 'PoC（PRD + 交互原型）',
          en: 'PoC (PRD + Prototype)',
        },
        desc: {
          cn: '外贸业务信息分散（企微/邮件/会议纪要），人工整理耗时且标签准确度低。',
          en: 'Structured fragmented B2B sales signals into a label system to improve lead identification and automation.',
        },
        bullets: {
          cn: [
            '需求梳理与范围界定，访谈 BD/运营',
            '端到端链路：接入 → 清洗 → 标签推理 → 回写 CRM',
            '建立标签体系与可解释机制，定义评估/验收口径',
          ],
          en: [
            'Scoped requirements with BD/ops interviews',
            'End-to-end pipeline: ingestion → cleaning → labeling → CRM writeback',
            'Label taxonomy, explainability, and evaluation criteria',
          ],
        },
        links: [
          { label: { cn: '原型（Demo）', en: 'Demo' }, href: '/demos/crm/index.html' },
          { label: { cn: '文档（PRD）', en: 'PRD' }, href: '/downloads/crm-labeling-prd.docx' },
        ],
      },
      {
        key: 'didi-copilot',
        title: { cn: '滴滴语音下单出行 Copilot', en: 'Didi Voice Ordering Copilot' },
        subtitle: {
          cn: '客户解决方案 Demo（PRD + 交互原型）',
          en: 'Solution Demo (PRD + Prototype)',
        },
        desc: {
          cn: '面向赶时间、提行李或视障/老年用户，通过语音简化下单流程。',
          en: 'Voice-first ordering flow for rushed, carrying-luggage, elderly, or visually-impaired scenarios.',
        },
        bullets: {
          cn: [
            '链路拆解：唤醒 → 转写 → 意图识别 → 信息补全',
            '交互方案：卡片式确认与一键修改',
            '策略与兜底：置信度触发追问、弱网回退',
          ],
          en: [
            'Flow breakdown: wake → ASR → intent → slot filling',
            'Card-based confirmation with one-tap edits',
            'Fallback strategies for low-confidence and weak network',
          ],
        },
        links: [
          { label: { cn: '原型（Demo）', en: 'Demo' }, href: '/demos/didi/index.html' },
          { label: { cn: '文档（PRD）', en: 'PRD' }, href: '/downloads/didi-copilot-prd.docx' },
        ],
      },
    ],
  },
  experience: {
    heading: { cn: '工作与实习经历', en: 'Experience' },
    items: [
      {
        org: { cn: '闪星互动科技有限公司', en: 'Shanxing Interactive Technology' },
        role: { cn: 'AI 产品经理助理', en: 'AI Product Manager Assistant' },
        time: '2025.05–2025.08',
        bullets: {
          cn: [
            '协助需求澄清、范围界定与版本优先级整理，沉淀 PRD 要点与会议纪要',
            '输出流程图、功能清单、异常路径、原型说明与验收 checklist',
            '参与指标口径与评估方案设计，整理测试样例与验收标准',
            '整理商业化与投放团队高频痛点，转化为 AI 提效机会点',
          ],
          en: [
            'Supported requirement clarification, scope definition, and release prioritization with PRD notes',
            'Produced flowcharts, feature lists, edge-case paths, prototype notes, and acceptance checklists',
            'Co-defined metrics and evaluation plans with test cases and acceptance criteria',
            'Synthesized business and delivery pain points into AI efficiency opportunities',
          ],
        },
      },
      {
        org: { cn: '万仕道（北京）管理咨询有限公司深圳分公司', en: 'Wandao Consulting — Shenzhen' },
        role: { cn: '猎头顾问', en: 'Headhunter Consultant' },
        time: '2023.10–2024.08',
        bullets: {
          cn: [
            '参与海外扩张岗位需求澄清与人岗匹配分析',
            '输出候选人 Shortlist 与评估 Brief，Time-to-Fill 缩短约 20%',
            '作为 AI 招聘助手“小易”种子用户，反馈检索与筛选体验问题',
          ],
          en: [
            'Clarified role requirements and performed role-to-candidate matching for overseas expansion',
            'Delivered shortlists and evaluation briefs; reduced Time-to-Fill by ~20%',
            'Seed user for AI recruiting assistant; provided search and screening feedback',
          ],
        },
      },
    ],
  },
  skills: {
    heading: { cn: '专业技能', en: 'Skills' },
    tags: {
      cn: [
        '需求洞察/范围界定',
        'PRD/信息架构/流程图',
        'Figma/Axure',
        '指标/A-B',
        'Prompt Engineering',
        '人机协作',
        'OpenCode',
        'Vibe Coding',
        'Excel 数据分析',
        '跨团队推进',
      ],
      en: [
        'Discovery & scoping',
        'PRD / IA / flows',
        'Figma / Axure',
        'Metrics & A/B',
        'Prompt Engineering',
        'Human-AI collaboration',
        'OpenCode',
        'Vibe Coding',
        'Excel analysis',
        'Cross-functional execution',
      ],
    },
  },
  education: {
    heading: { cn: '教育背景', en: 'Education' },
    items: [
      {
        org: { cn: '香港岭南大学', en: 'Lingnan University (HK)' },
        detail: { cn: '人工智能与未来 硕士', en: 'MSc, AI and the Future' },
        time: '2024.09–2025.08',
        note: {
          cn: '毕业论文：AI 在 HR 场景的应用与治理研究（招聘匹配标签体系与排序逻辑）',
          en: 'Thesis: AI governance in HR (label taxonomy and ranking logic for recruitment matching).',
        },
      },
      {
        org: { cn: '深圳技术大学', en: 'Shenzhen Technology University' },
        detail: { cn: '商务英语 本科', en: 'BA, Business English' },
        time: '2022.09–2024.06',
      },
    ],
  },
  contact: {
    heading: { cn: '联系我', en: 'Contact' },
    emailLabel: { cn: '邮箱', en: 'Email' },
    githubLabel: { cn: 'GitHub', en: 'GitHub' },
    email: 'xianganzeng873@gmail.com',
    github: 'https://github.com/bobbyceng',
  },
}

export default content

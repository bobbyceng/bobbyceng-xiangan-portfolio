const content = {
  meta: {
    title: {
      cn: '曾祥桉｜AI 产品经理',
      en: 'Xiangan Zeng | AI Product Manager',
    },
  },
  hero: {
    name: { cn: '曾祥桉', en: 'Xiangan Zeng' },
    badge: { cn: '产品经理', en: 'Product Manager' },
    status: { cn: '求职中', en: 'Open to work' },
    headline: {
      cn: '以人为本，\nAI 为器。',
      en: 'Humanity at the core.\nAI as the instrument.',
    },
    subtitle: {
      cn: '我是一名拥有哲学背景的 AI 产品经理。我不写复杂的底层代码，但我擅长定义产品的灵魂、交互的逻辑与伦理的边界。',
      en: 'I am an AI Product Manager with a philosophy background. I define the soul of products, the logic of interactions, and the boundaries of ethics.',
    },
    skills: [
      { label: { cn: 'Prompt 策略', en: 'Prompt Strategy' } },
      { label: { cn: '用户同理心', en: 'User Empathy' } },
      { label: { cn: '高效执行', en: 'Execution' } },
    ],
    avatarAlt: {
      cn: '曾祥桉头像',
      en: 'Portrait of Xiangan Zeng',
    },
  },
  timeline: {
    heading: { cn: '我的历程', en: 'My Journey' },
    quote: {
      cn: '"从专科到名校硕士，从军营到科技前沿。这段经历赋予我的不仅仅是学历的提升，更是面对复杂问题时，不轻言放弃的韧性与从底层逻辑破局的决心。"',
      en: '"From community college to a prestigious master\'s, from the barracks to the tech frontier. This journey gave me not just academic growth, but the resilience to never give up and the determination to break through from first principles."',
    },
    items: [
      {
        year: '2024 - 2025',
        title: { cn: '香港岭南大学', en: 'Lingnan University (HK)' },
        role: { cn: '硕士 | 人工智能与未来（哲学方向）', en: 'MSc | AI and the Future (Philosophy)' },
        desc: { cn: '研究 AI 伦理、生成式 AI 的逻辑边界与人机协作治理。', en: 'Research on AI ethics, generative AI boundaries, and human-AI governance.' },
        icon: 'brain',
      },
      {
        year: '2022 - 2024',
        title: { cn: '深圳技术大学', en: 'Shenzhen Technology University' },
        role: { cn: '本科 | 商务英语', en: 'BA | Business English' },
        desc: { cn: '通过退役士兵专项计划考入。打磨跨文化沟通能力与商业视野。', en: 'Admitted via veteran program. Developed cross-cultural communication and business acumen.' },
        icon: 'book',
      },
      {
        year: '2019 - 2021',
        title: { cn: '中国武警某部', en: 'China Armed Police Force' },
        role: { cn: '服役士兵', en: 'Soldier' },
        desc: { cn: '培养纪律性、团队协作与应急处理能力。', en: 'Developed discipline, teamwork, and crisis response abilities.' },
        icon: 'shield',
      },
    ],
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
      { id: 'hero', label: { cn: '理念', en: 'Philosophy' } },
      { id: 'work', label: { cn: '项目', en: 'Work' } },
      { id: 'timeline', label: { cn: '历程', en: 'Journey' } },
      { id: 'contact', label: { cn: '联系', en: 'Contact' } },
    ],
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
          cn: '针对"健身但不愿精算食物"人群，基于拳掌法提供低门槛饮食记录与策略建议。',
          en: 'Low-friction diet logging for fitness users who avoid strict macro math, built on hand-portion estimation plus AI guidance.',
        },
        insight: {
          cn: '痛点洞察：大部分健身人群放弃记录是因为"精算"太反人性。',
          en: 'Insight: Most fitness users quit logging because precise calculation is anti-human.',
        },
        logicSteps: [
          { step: 'Input', text: { cn: '用户语音："早上吃了两个大肉包"', en: 'User: "Had two big meat buns"' } },
          { step: 'AI Logic', text: { cn: '基于模糊语境，检索食物库大类均值', en: 'Fuzzy context → food category averages' } },
          { step: 'Safety', text: { cn: '检查用户伤病史（安全围栏）', en: 'Check injury history (safety gate)' } },
          { step: 'Output', text: { cn: '不仅给数据，更给建议', en: 'Data + actionable advice' } },
        ],
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

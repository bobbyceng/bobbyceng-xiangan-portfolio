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
          cn: 'Prompt / RAG / 工具链落地，关注可解释与稳定交付。',
          en: 'Prompt/RAG/tooling with explainability and reliable delivery in mind.',
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
    heading: { cn: '精选项目', en: 'Selected Projects' },
    note: {
      cn: '每个项目都附带可访问的原型/文档/代码链接。',
      en: 'Each project includes accessible links to demos, docs, or code.',
    },
    items: [
      {
        key: 'coach-titan',
        title: { cn: 'Coach Titan（iOS/Web）', en: 'Coach Titan (iOS/Web)' },
        subtitle: {
          cn: '低门槛饮食记录 MVP',
          en: 'Low-friction diet logging MVP',
        },
        desc: {
          cn: '面向“健身但不愿精算食物”的人群，用拳掌法 + 拍照估算降低记录成本，并给出下一餐建议。',
          en: 'Built for people who train but don’t want macro math—uses portion-hand method + photo estimation, then recommends next-meal actions.',
        },
        bullets: {
          cn: ['拳掌法快速估算摄入', '拍照辅助减少输入成本', '给出下一餐建议与行动指引'],
          en: [
            'Hand-portion estimation for quick logging',
            'Photo-assisted input to reduce friction',
            'Next-meal recommendations with actionable guidance',
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
            alt: {
              cn: 'Coach Titan 应用截图 1',
              en: 'Coach Titan screenshot 1',
            },
          },
          {
            src: '/assets/coach-titan/IMG_1153.PNG',
            alt: {
              cn: 'Coach Titan 应用截图 2',
              en: 'Coach Titan screenshot 2',
            },
          },
          {
            src: '/assets/coach-titan/IMG_1154.PNG',
            alt: {
              cn: 'Coach Titan 应用截图 3',
              en: 'Coach Titan screenshot 3',
            },
          },
          {
            src: '/assets/coach-titan/IMG_1155.PNG',
            alt: {
              cn: 'Coach Titan 应用截图 4',
              en: 'Coach Titan screenshot 4',
            },
          },
        ],
      },
      {
        key: 'didi-copilot',
        title: { cn: 'Didi Copilot', en: 'Didi Copilot' },
        subtitle: {
          cn: '语音一站式下单流程',
          en: 'Voice-first ordering flow',
        },
        desc: {
          cn: '语音一站式下单，降低手忙/老年/视障等场景使用门槛。',
          en: 'A voice-first ordering experience designed for accessibility and on-the-go use.',
        },
        bullets: {
          cn: ['语音引导减少操作步骤', '关键节点可确认/可纠错', '面向高噪音与低注意力场景'],
          en: [
            'Voice guidance reduces UI steps',
            'Confirmable checkpoints with correction paths',
            'Designed for noisy and low-attention contexts',
          ],
        },
        links: [
          {
            label: { cn: '原型（Demo）', en: 'Demo' },
            href: '/demos/didi/index.html',
          },
          {
            label: { cn: '文档（PRD）', en: 'PRD' },
            href: '/downloads/didi-copilot-prd.docx',
          },
        ],
      },
      {
        key: 'crm-labeling',
        title: { cn: 'CRM 智能客户标签系统', en: 'CRM Smart Labeling System' },
        subtitle: {
          cn: '结构化多渠道线索信号',
          en: 'Structuring fragmented lead signals',
        },
        desc: {
          cn: '多渠道信息结构化为标签体系，提升线索识别与自动化触达效率。',
          en: 'Structured multi-channel signals into a labeling system to improve lead identification and follow-up automation.',
        },
        bullets: {
          cn: ['标签体系与规则可配置', '支持线索评分与优先级', '提升销售触达效率与一致性'],
          en: [
            'Configurable labeling rules and taxonomy',
            'Lead scoring and prioritization',
            'More consistent, efficient outreach workflows',
          ],
        },
        links: [
          {
            label: { cn: '原型（Demo）', en: 'Demo' },
            href: '/demos/crm/index.html',
          },
          {
            label: { cn: '文档（PRD）', en: 'PRD' },
            href: '/downloads/crm-labeling-prd.docx',
          },
        ],
      },
    ],
  },
  experience: {
    heading: { cn: '经历', en: 'Experience' },
    items: [
      {
        org: { cn: '闪量互动', en: 'Shansheng Interactive' },
        role: { cn: '商务助理', en: 'Business Assistant' },
        time: '2025.05–2025.08',
        bullets: {
          cn: [
            'DSP/SSP 对接与协作，推动投放链路信息同步',
            '跟踪 CTR/eCPM/ROI，输出分析与优化建议',
          ],
          en: [
            'Collaborated with DSP/SSP partners across the delivery chain',
            'Tracked CTR/eCPM/ROI and proposed optimization actions',
          ],
        },
      },
      {
        org: { cn: '万仕道（深圳）', en: 'Wandao Consulting — Shenzhen' },
        role: { cn: '猎头顾问', en: 'Headhunter Consultant' },
        time: '2023.10–2024.08',
        bullets: {
          cn: [
            '交付候选人 Shortlist 与评估 Brief',
            'Time-to-Fill 缩短约 20%',
            '内部 AI 招聘助手种子用户，提供体验与流程反馈',
          ],
          en: [
            'Delivered candidate shortlists and evaluation briefs',
            'Reduced Time-to-Fill by ~20%',
            'Seed user for an internal AI recruiting assistant; provided UX and workflow feedback',
          ],
        },
      },
    ],
  },
  skills: {
    heading: { cn: '技能', en: 'Skills' },
    tags: {
      cn: [
        '需求洞察/范围界定',
        'PRD/信息架构/流程图',
        'Figma/Axure',
        '指标/A-B',
        'Prompt/RAG',
        'Excel',
        '跨团队推进',
      ],
      en: [
        'Discovery & scoping',
        'PRD / IA / flows',
        'Prototyping (Figma/Axure)',
        'Metrics & A/B',
        'Prompt / RAG',
        'Excel',
        'Cross-functional execution',
      ],
    },
  },
  education: {
    heading: { cn: '教育', en: 'Education' },
    items: [
      {
        org: { cn: '香港岭南大学', en: 'Lingnan University (HK)' },
        detail: { cn: '人工智能与未来 硕士', en: 'MSc, AI and the Future' },
        time: '2024.09–2025.08',
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

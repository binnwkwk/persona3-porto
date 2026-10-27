export type Experience = {
  headSrc: string
  title: string
  company: string
  period: string
  current?: boolean
  description: string[]
  bustupSrc: string
  about: { name: string; text: string }
  logoSrc?: string
}

export const EXPERIENCE: Experience[] = [
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_1_colored.png`,
    title: 'Student & Developer',
    company: 'Personal coding journey',
    period: 'Learning and building',
    current: true,
    description: [
      'I enjoy building digital projects, especially bots, websites, and interactive tools.',
      'I experiment with JavaScript, Node.js, APIs, and modern web interfaces.',
      'I like turning ideas into working features and improving them through testing.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0400.png`,
    about: {
      name: 'Abin',
      text: 'A curious learner who enjoys coding, experimenting with technology, and building projects one feature at a time.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_2_colored.png`,
    title: 'Bot Development',
    company: 'WhatsApp & Telegram',
    period: 'Personal projects',
    description: [
      'Exploring modular commands, menus, API integrations, and interactive bot features.',
      'Interested in making bots easier to use, maintain, and expand.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0600.png`,
    about: {
      name: 'Automation',
      text: 'Building chat-based tools that can make everyday digital tasks more convenient.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_3_colored.png`,
    title: 'Web Development',
    company: 'Frontend experiments',
    period: 'Learning by building',
    description: [
      'Practicing HTML, CSS, and JavaScript to create responsive web pages.',
      'Exploring fullscreen layouts, mobile interactions, and polished UI details.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_0700.png`,
    about: {
      name: 'Web',
      text: 'I enjoy experimenting with interfaces and making websites feel more interactive.',
    },
  },
  {
    headSrc: `${import.meta.env.BASE_URL}assets/head_row_4_colored.png`,
    title: 'AI & API Integration',
    company: 'Tools and experiments',
    period: 'Exploring',
    description: [
      'Interested in connecting applications with APIs and AI-powered features.',
      'Learning to structure code so features can be reused and maintained.',
    ],
    bustupSrc: `${import.meta.env.BASE_URL}assets/T_UI_Camp_Commu_Bustup_1400.png`,
    about: {
      name: 'Explore',
      text: 'Trying new tools, learning from examples, and steadily improving my development skills.',
    },
  },
]

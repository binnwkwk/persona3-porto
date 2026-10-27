/* Personal portfolio content for Abin / binnwkwk. */
const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`

export type Link = { label: string; url: string }

export type Project = {
  tag: string
  title: string
  summary: string
  stack: string[]
  highlights: string[]
  links: Link[]
  note?: string
  imageSrc: string
}

export const PROJECTS: Project[] = [
  {
    tag: 'Bot',
    title: 'WhatsApp Bot',
    summary: 'A modular chat assistant with useful commands',
    stack: ['Node.js', 'JavaScript', 'ESM', 'APIs'],
    highlights: [
      'Exploring categorized menus, interactive buttons, owner utilities, and modular commands.',
      'Interested in AI chat, media search, downloader tools, and useful everyday automation.',
    ],
    links: [{ label: 'GitHub Profile', url: 'https://github.com/binnwkwk' }],
    note: 'Add links to individual bot repositories here when you want to feature them.',
    imageSrc: head(1),
  },
  {
    tag: 'Bot',
    title: 'Telegram Userbot',
    summary: 'Command-driven automation and helper tools',
    stack: ['Node.js', 'JavaScript', 'Telegram API'],
    highlights: [
      'Exploring command modules for utilities, group management, and interactive features.',
      'Organizing commands into maintainable categories instead of one large handler.',
    ],
    links: [{ label: 'GitHub Profile', url: 'https://github.com/binnwkwk' }],
    imageSrc: head(5),
  },
  {
    tag: 'Web',
    title: 'Personal Portfolio',
    summary: 'An interactive portfolio inspired by Persona 3 Reload',
    stack: ['React', 'TypeScript', 'Vite', 'Three.js'],
    highlights: [
      'A game-inspired interface with animated menus and interactive navigation.',
      'Personalized to introduce my interests, projects, and coding journey.',
    ],
    links: [{ label: 'Repository', url: 'https://github.com/binnwkwk/persona3-porto' }],
    imageSrc: head(9),
  },
  {
    tag: 'Web',
    title: 'Web UI Experiments',
    summary: 'Small websites and interface experiments',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive UI'],
    highlights: [
      'Experimenting with responsive layouts, fullscreen experiences, and mobile-friendly interactions.',
      'Learning by modifying projects and testing how interfaces behave on different screens.',
    ],
    links: [{ label: 'GitHub Profile', url: 'https://github.com/binnwkwk' }],
    imageSrc: head(7),
  },
]

export type Contact = { tag: string; title: string; handle: string; url: string; imageSrc: string; blurb: string }

/*
 * Replace the sample YouTube, TikTok, and Instagram handles below with your
 * real usernames. GitHub is already set to your known profile.
 */
export const CONTACTS: Contact[] = [
  {
    tag: 'Video',
    title: 'YouTube',
    handle: '@username',
    url: 'https://www.youtube.com/@username',
    blurb: 'My videos and uploads.',
    imageSrc: head(1),
  },
  {
    tag: 'Social',
    title: 'TikTok',
    handle: '@username',
    url: 'https://www.tiktok.com/@username',
    blurb: 'Short videos and clips.',
    imageSrc: head(2),
  },
  {
    tag: 'Code',
    title: 'GitHub',
    handle: '@binnwkwk',
    url: 'https://github.com/binnwkwk',
    blurb: 'My repositories, experiments, and coding projects.',
    imageSrc: head(5),
  },
  {
    tag: 'Social',
    title: 'Instagram',
    handle: '@username',
    url: 'https://www.instagram.com/username/',
    blurb: 'My photos and updates.',
    imageSrc: head(7),
  },
]

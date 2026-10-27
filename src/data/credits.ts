export type Credit = {
  tag: string
  title: string
  author: string
  license: string
  url?: string
}

const head = (n: number) => `${import.meta.env.BASE_URL}assets/head_row_${n}_colored.png`
export const CREDIT_HEADS = [5, 6, 7, 8, 9, 10, 1, 2, 3, 4].map(head)

export const CREDITS: Credit[] = [
  {
    tag: 'Owner',
    title: 'Portfolio owner',
    author: 'Abin · @binnwkwk',
    license: 'Personal profile',
    url: 'https://github.com/binnwkwk',
  },
  {
    tag: 'Code',
    title: 'Portfolio source',
    author: 'binnwkwk/persona3-porto',
    license: 'GitHub repository',
    url: 'https://github.com/binnwkwk/persona3-porto',
  },
  {
    tag: 'Design',
    title: 'Persona-inspired interface',
    author: 'Inspired by Persona 3 Reload',
    license: 'Fan-made, non-official',
    url: 'https://www.atlus.com/',
  },
  {
    tag: 'Thanks',
    title: 'Open-source community',
    author: 'Developers and creators',
    license: 'Learning resources',
    url: 'https://github.com/',
  },
]

export type MenuEntry = {
  label: string
  indent: number
  scale: number
  rot: number
  skew: number
  tint: string
  alpha: number
  to?: string
}

export const MENU_ITEMS: MenuEntry[] = [
  {
    label: 'ABOUT ME',
    indent: 0.35,
    scale: 1.0,
    rot: -7,
    skew: -20,
    tint: '#4fe0f8',
    alpha: 0.98,
    to: '/careers',
  },
  { label: 'PROJECTS', indent: 0.3, scale: 1.02, rot: -11, skew: -18, tint: '#3ccfec', alpha: 1, to: '/builds' },
  { label: 'SOCIAL LINKS', indent: 0.6, scale: 0.98, rot: -13, skew: -21, tint: '#4adcf6', alpha: 0.96, to: '/links' },
  { label: 'CREDITS', indent: 0.3, scale: 0.98, rot: -7, skew: -20, tint: '#2fbcd9', alpha: 1, to: '/credits' },
]

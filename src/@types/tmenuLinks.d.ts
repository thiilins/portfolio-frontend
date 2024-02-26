type TMenuType = 'group' | 'link' | 'withIcon'
interface TMenuLinks {
  type: TMenuType
  name: string
  url: string
}
interface TMenuGroupLinks {
  type: TMenuType
  name: string
  url?: string
  links: TMenuLinks[]
}
interface TSocialMenuLinks {
  type: TMenuType
  name: string
  url: string
  icon: strings
}
interface THeaderMenuLinks {
  [key: string]: TMenuGroupLinks | TMenuLinks
}

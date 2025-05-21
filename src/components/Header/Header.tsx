// }
import { getPayload } from 'payload'
import config from '@payload-config'
import HeaderComponent, { NavItem } from '../header'

interface HeaderGlobal {
  navItems?: Array<{
    text: string
    link?: string
  }>
  logo?:
    | {
        url?: string
      }
    | string // Added string as possible type
}

const HeroHeader = async () => {
  const payload = await getPayload({ config })
  const header = (await payload.findGlobal({ slug: 'header' })) as HeaderGlobal | null
  console.log('Raw header data:', header)
  const navItems: NavItem[] =
    header?.navItems?.map((item) => ({
      name: item.text,
      href: item.link || '#',
    })) || []

  const logoUrl =
    typeof header?.logo === 'object'
      ? header.logo?.url
      : typeof header?.logo === 'string'
        ? header.logo
        : undefined

  return <HeaderComponent navItems={navItems} logoUrl={logoUrl} />
}

export default HeroHeader

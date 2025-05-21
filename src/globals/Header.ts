import { GlobalConfig } from 'payload'

const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'navItems',
      label: 'Navigations',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        },
      ],
    },
  ],
}

export default Header

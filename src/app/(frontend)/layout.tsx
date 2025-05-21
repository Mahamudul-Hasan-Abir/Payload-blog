import React from 'react'
import './styles.css'
import HeaderComponent from '@/components/header'
import HeroHeader from '@/components/Header/Header'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        {/* <HeaderComponent></HeaderComponent> */}
        <HeroHeader></HeroHeader>
        <main>{children}</main>
      </body>
    </html>
  )
}

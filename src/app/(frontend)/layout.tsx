import React from 'react'
import './global.css'
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="fr">
    <head>
      <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
    </head>
      <body className={"dark"}>
        <main>{children}</main>
      </body>
    </html>
  )
}

import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from './tailwind.css'
import { IconLink } from './routes/_index/IconLink'
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si/index.js'
import * as React from 'react'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export default function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-r from-slate-600 to-slate-800 text-gray-400">
        <main>
          <nav className="fixed left-2 top-2 flex gap-2">
            <IconLink href="https://github.com/chorobin" icon={<SiGithub />} />
            <IconLink
              href="https://twitter.com/c_horobin"
              icon={<SiTwitter />}
            />
            <IconLink
              href="https://cz.linkedin.com/in/christopher-horobin-801b4376"
              icon={<SiLinkedin />}
            />
          </nav>
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

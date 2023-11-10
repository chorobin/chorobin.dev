import * as React from 'react'
import { SiJavascript } from 'react-icons/si/index.js'
import { BackLink } from '../../components/BackLink'
import { Header } from '../../components/Header'
import { UnorderedList } from '../../components/UnorderedList'

const Index: React.FunctionComponent = () => {
  return (
    <Header>
      <SiJavascript className="text-5xl" />
      <UnorderedList>
        <li>Building web applications using JS since 2015</li>
        <li>Knowledge of JavaScript modules ESM and CJS</li>
        <li>Experience with modern JavaScript (ES6 and beyond)</li>
        <li>
          Years working with different environments (Node.js, Deno and recently
          Bun)
        </li>
      </UnorderedList>
      <BackLink to="..#ts" />
    </Header>
  )
}

export default Index

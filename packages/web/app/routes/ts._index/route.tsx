import { SiTypescript } from 'react-icons/si/index.js'
import { BackLink } from '~/components/BackLink'
import { Header } from '~/components/Header'
import { UnorderedList } from '~/components/UnorderedList'
import * as React from 'react'

const Index: React.FunctionComponent = () => {
  return (
    <Header>
      <SiTypescript className="text-5xl" />
      <UnorderedList>
        <li>Experience with TypeScript since 2017</li>
        <li>Deep understading of TypeScript&apos;s structural type system</li>
        <li>Proficiently using TypeScript advanced features to improve DX</li>
        <li>Debugging TypeScript performance to improve speed</li>
        <li>Experience with the TypeScript ecosystem (tRPC, zod)</li>
      </UnorderedList>
      <BackLink to="..#react" />
    </Header>
  )
}

export default Index

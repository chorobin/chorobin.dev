import { SiServerless, SiSst } from 'react-icons/si/index.js'
import { BackLink } from '~/components/BackLink'
import { Header } from '~/components/Header'
import { UnorderedList } from '~/components/UnorderedList'
import * as React from 'react'

const Index: React.FunctionComponent = () => {
  return (
    <Header>
      <div className="flex gap-2 text-5xl">
        <SiServerless />
        <SiSst />
      </div>
      <UnorderedList>
        <li>Using infrastructure as code since 2019</li>
        <li>Experience with Amazon CloudFormation</li>
        <li>Knowledge of Serverless Framework</li>
        <li>Deploying infrastructure to AWS using CDK</li>
        <li>Past year with SST (Serverless Stack) to improve DX</li>
      </UnorderedList>
      <BackLink to="..#podcast" />
    </Header>
  )
}

export default Index

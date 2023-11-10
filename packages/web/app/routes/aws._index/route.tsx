import { SiIcloud } from 'react-icons/si/index.js'
import { BackLink } from '~/components/BackLink'
import { Header } from '~/components/Header'
import { UnorderedList } from '~/components/UnorderedList'
import * as React from 'react'

const Index: React.FunctionComponent = () => {
  return (
    <Header>
      <SiIcloud className="text-5xl" />
      <UnorderedList>
        <li>Experience with AWS since 2020</li>
        <li>
          Ability to design Amazon DynamoDB schemas for single table design
        </li>
        <li>
          Experience with deploying JS frameworks to AWS (Next.js, Remix,
          SolidStart)
        </li>
        <li>Ability to optimize and reduce AWS Lambda cold starts</li>
        <li>Experience with message services (SQS, SNS, EventBridge)</li>
        <li>Proficiently using Amazon Step Functions</li>
      </UnorderedList>
      <BackLink to="..#iac" />
    </Header>
  )
}

export default Index

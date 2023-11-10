import type { HeadersFunction, MetaFunction } from '@remix-run/node'
import me from '../../me.jpg'
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiIcloud,
  SiServerless,
  SiSst,
  SiTrpc,
  SiGraphql,
} from 'react-icons/si/index.js'
import { Section } from './Section'
import { Header } from '~/components/Header'
import * as React from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Christopber James Horobin' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export const headers: HeadersFunction = () => ({
  'Cache-Control': 'max-age=31536000, stale-while-revalidate=600',
})

const Index: React.FunctionComponent = () => {
  return (
    <>
      <Header>
        <img className="rounded-2xl shadow" src={me} />
        <h1 className="text-center text-2xl font-bold md:text-4xl">
          Christopher James Horobin
        </h1>
        <h2 className="text-center text-xl font-bold md:text-2xl">
          Senior Fullstack Developer
        </h2>
      </Header>
      <Section
        id="js"
        to="/js"
        text="Eight years developing web applications"
        icons={<SiJavascript />}
      />
      <Section
        id="ts"
        to="/ts"
        text="Seven years of TypeScript experience"
        icons={<SiTypescript />}
      />
      <Section
        id="react"
        to="/react"
        text="Six years building web applications in React.js"
        icons={<SiReact />}
      />
      <Section
        id="aws"
        to="/aws"
        text="Four years with the Cloud AWS and Azure"
        icons={<SiIcloud />}
      />
      <Section
        id="iac"
        to="/iac"
        text="Three years using Infrastructure as Code in Serverless with SST/CDK/Serverless Framework"
        icons={
          <>
            <SiServerless />
            <SiSst />
          </>
        }
      />
      <Section
        id="podcast"
        text="I am a type-safety enthusiast and was on a podcast about AppSync (GraphQL) vs tRPC with API Gateway"
        icons={
          <>
            <SiGraphql />
            <SiTrpc />
          </>
        }
      >
        <iframe
          className="aspect-video w-full rounded-xl shadow md:w-1/2"
          src="https://www.youtube.com/embed/HM7PzUEKFcM?si=FAG3QXgrgDtZfvuW"
          title="YouTube video player"
        ></iframe>
      </Section>
    </>
  )
}

export default Index

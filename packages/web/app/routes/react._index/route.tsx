import { SiReact } from 'react-icons/si/index.js'
import { BackLink } from '~/components/BackLink'
import { Header } from '~/components/Header'
import { UnorderedList } from '~/components/UnorderedList'
import * as React from 'react'

const Index: React.FunctionComponent = () => {
  return (
    <Header>
      <SiReact className="text-5xl" />
      <UnorderedList>
        <li>Experience with React since 2018</li>
        <li>
          Understanding of React&apos;s hooks (useState, useReducer useRef,
          useEffect, useSES etc)
        </li>
        <li>
          Experience with React&apos;s concurrent features (useTransition,
          startTransition)
        </li>
        <li>Use of React State Management such as Redux, Jotai and Zustand</li>
        <li>Effective use of @tanstack/react-query</li>
        <li>Learning React Server Components</li>
      </UnorderedList>
      <BackLink to="..#aws" />
    </Header>
  )
}

export default Index

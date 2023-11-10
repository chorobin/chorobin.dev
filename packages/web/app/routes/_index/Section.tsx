import * as React from 'react'
import { Link, LinkProps } from '@remix-run/react'

export interface SectionProps extends Partial<Pick<LinkProps, 'to'>> {
  readonly id: string
  readonly text: React.ReactNode
  readonly icons: React.ReactNode
  readonly children?: React.ReactNode
}

export const Section: React.FunctionComponent<SectionProps> = props => {
  if (props.to != null) {
    return (
      <section
        id={props.id}
        className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-5 md:w-1/2"
      >
        <Link to={props.to} className="hover:text-white">
          <h1 className="flex flex-col items-center gap-3 text-center text-xl font-bold md:flex-row md:text-4xl">
            {props.text}{' '}
            <div className="flex flex-shrink-0 gap-2 text-4xl">
              {props.icons}
            </div>
          </h1>
        </Link>
        {props.children}
      </section>
    )
  }

  return (
    <section
      id={props.id}
      className="mx-auto flex h-screen w-full flex-col items-center justify-center gap-5 md:w-1/2"
    >
      <h1 className="flex flex-col items-center gap-3 text-center text-xl font-bold md:flex-row md:text-4xl">
        {props.text}{' '}
        <div className="flex flex-shrink-0 gap-2 text-4xl">{props.icons}</div>
      </h1>
      {props.children}
    </section>
  )
}

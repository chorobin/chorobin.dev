import { Link, LinkProps } from '@remix-run/react'
import * as React from 'react'
import { SlArrowRight } from 'react-icons/sl/index.js'

export type BackLinkProps = Pick<LinkProps, 'to'>

export const BackLink: React.FunctionComponent<BackLinkProps> = ({ to }) => {
  return (
    <Link
      to={to}
      className="border-solid border-white text-xl hover:text-white md:text-2xl"
    >
      <div className="flex content-center items-center gap-2 align-middle">
        <div>Continue</div> <SlArrowRight />{' '}
      </div>
    </Link>
  )
}

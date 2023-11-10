import * as React from 'react'

export interface IconLinkProps
  extends Pick<JSX.IntrinsicElements['a'], 'href'> {
  readonly icon: React.ReactNode
}

export const IconLink: React.FunctionComponent<IconLinkProps> = ({
  href,
  icon,
}) => {
  return (
    <a className="text-4xl  hover:text-white" href={href}>
      {icon}
    </a>
  )
}

import * as React from 'react'

export interface UnorderedListProps {
  readonly children: React.ReactNode
}

export const UnorderedList: React.FunctionComponent<UnorderedListProps> = ({
  children,
}) => {
  return (
    <ul className="mx-auto list-disc px-6 text-xl md:text-2xl">{children}</ul>
  )
}

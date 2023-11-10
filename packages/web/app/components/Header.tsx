import * as React from 'react'

export interface HeaderProps {
  readonly children: React.ReactNode
}

export const Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <header className="animate-fadeIn mx-auto flex h-screen w-full flex-col items-center justify-center gap-4 md:w-1/2">
      {props.children}
    </header>
  )
}

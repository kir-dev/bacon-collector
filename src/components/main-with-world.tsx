import clsx from 'clsx'
import { HTMLProps } from 'react'

export function MainWithWorld({ className, ...props }: HTMLProps<HTMLDivElement>) {
  return (
    <main
      className={clsx('flex min-h-full flex-col items-center justify-center p-24 bg-world-map bg-center bg-cover', className)}
      {...props}
    />
  )
}

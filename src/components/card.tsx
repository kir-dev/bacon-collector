import clsx from 'clsx'
import { HTMLProps, PropsWithChildren } from 'react'

export function Card({ className, ...props }: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  return <div className={clsx('bg-white shadow-lg p-10 rounded-md', className)} {...props} />
}

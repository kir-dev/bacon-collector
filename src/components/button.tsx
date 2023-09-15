import clsx from 'clsx'
import Link from 'next/link'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  href?: string
}

function Button({ children, href, variant = 'primary', size = 'medium', className, ...props }: ButtonProps) {
  const buttonClasses = clsx(
    'rounded-md  px-4 py-2 text-white focus:outline-none text-center',
    {
      'bg-brand-500 hover:bg-brand-600': variant === 'primary',
      'border-brand-500 text-brand-500 border-2 hover:bg-brand-100': variant === 'secondary',
      'bg-red-500 hover:bg-red-600': variant === 'danger',
      'text-sm': size === 'small',
      'text-lg': size === 'large',
      'text-base': size === 'medium'
    },
    className
  )

  if (href)
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    )

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button

import clsx from 'clsx'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
}

function Button({ children, variant = 'primary', size = 'medium', ...props }: ButtonProps) {
  const buttonClasses = clsx('rounded-md px-4 py-2 text-white focus:outline-none', {
    'bg-blue-500 hover:bg-blue-600': variant === 'primary',
    'bg-gray-500 hover:bg-gray-600': variant === 'secondary',
    'bg-red-500 hover:bg-red-600': variant === 'danger',
    'text-sm': size === 'small',
    'text-lg': size === 'large',
    'text-base': size === 'medium'
  })

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}

export default Button

'use client'
import { useRouter } from 'next/navigation'
import type { FormEventHandler } from 'react'
import { useRef, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const usernameField = useRef<HTMLInputElement>(null)

  const [error, setError] = useState('')

  const onUsernameSubmitted: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const username = usernameField.current?.value
    if (username?.trim()?.length) {
      router.push(`setup/${encodeURIComponent(username)}`)
    } else {
      setError('Add meg a felhasználóneved!')
    }
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <form className='flex flex-col p-12 bg-gray-300 items-stretch rounded' onSubmit={onUsernameSubmitted}>
        <h1 className='text-3xl font-medium pb-4'>Setup</h1>
        <label className='pb-2' htmlFor='username'>Add meg a felhasználóneved!</label>
        <input
          ref={usernameField}
          id='username'
          className='p-2 mb-2'
          type='text'
          name='username'
          placeholder='batman123'
          required
        />
        {error && <p className='text-red-700'>{error}</p>}
        <input
          className='mt-2 rounded-md px-4 py-2 text-white focus:outline-none bg-blue-500 hover:bg-blue-600 text-base'
          type='submit'
        />
      </form>
    </div>
  )
}

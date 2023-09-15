'use client'
import Button from '@/components/button'
import { Card } from '@/components/card'
import { MainWithWorld } from '@/components/main-with-world'
import clsx from 'clsx'
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
    <MainWithWorld>
      <Card>
        <form className="flex flex-col" onSubmit={onUsernameSubmitted}>
          <h1>Beállítási varázsló</h1>
          <label htmlFor="username" className="mb-3">
            Azonosító (ez fog megjelenni a térképen)
          </label>
          <input ref={usernameField} id="username" className={clsx({ error })} type="text" name="username" placeholder="A Csoport" />
          {error && <p className="text-red-700">{error}</p>}
          <Button type="submit">Beállítási link</Button>
        </form>
      </Card>
    </MainWithWorld>
  )
}

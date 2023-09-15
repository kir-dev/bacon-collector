import LinkButton from '@/components/link-button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LinkButton href="/setup">Open setup</LinkButton>
      <LinkButton href="/map">Open map</LinkButton>
    </main>
  )
}

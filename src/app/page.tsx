import Button from '@/components/button'
import { Card } from '@/components/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-world-map bg-center bg-cover">
      <Card>
        <h1 className="font-bold text-brand-500 text-2xl mb-10">B(e)acon Collector</h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <Button className="w-full" href="/map">
            Map
          </Button>
          <Button variant="secondary" className="w-full" href="/setup">
            Setup
          </Button>
          <Image className="mt-5" src="/images/kirdev.svg" alt="Powered by Kir-Dev" width={200} height={40} />
        </div>
      </Card>
    </main>
  )
}

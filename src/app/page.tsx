import Button from '@/components/button'
import { Card } from '@/components/card'
import { MainWithWorld } from '@/components/main-with-world'
import Image from 'next/image'

export default function Home() {
  return (
    <MainWithWorld>
      <Card>
        <h1>B(e)acon Collector</h1>
        <div className="flex flex-col items-center justify-center gap-5">
          <Button className="w-full" href="/map">
            Térkép
          </Button>
          <Button variant="secondary" className="w-full" href="/setup">
            App Beállítása
          </Button>
          <Image className="mt-5" src="/images/kirdev.svg" alt="Powered by Kir-Dev" width={200} height={40} />
        </div>
      </Card>
    </MainWithWorld>
  )
}

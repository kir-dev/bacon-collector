import Button from '@/components/button'
import { Card } from '@/components/card'
import { MainWithWorld } from '@/components/main-with-world'

interface Props {
  params: {
    userId: string
  }
}

export default function Page({ params: { userId } }: Props) {
  const appDeepLink = createAppDeepLink(userId ?? '')
  return (
    <MainWithWorld>
      <Card className="flex flex-col gap-5">
        <h1>App beállítása</h1>
        <p>
          <span className="font-bold">{decodeURI(userId)}</span> számára
        </p>
        <Button href={appDeepLink}>Megnyitás az alkalmazásban</Button>
        <Button variant="secondary" href="https://kir-dev.hu/ly/androidbacon">
          Letöltés Android-ra
        </Button>
        <Button variant="secondary" href="https://kir-dev.hu/ly/iosbacon">
          Letöltés iOS-re
        </Button>
      </Card>
    </MainWithWorld>
  )
}

function createAppDeepLink(userId: string) {
  const apiUrl = process.env.SITE_URL + '/api/location'

  return `cmsch-tracker://?endpoint=${encodeURI(apiUrl)}&key=${userId}`
}

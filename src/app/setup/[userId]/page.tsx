interface Props {
    params: {
        userId: string
    }
}

export default function Page({ params: {userId} }: Props){
    const appDeepLink = createAppDeepLink(userId ?? "")
    return (
        <div>
            <h1>Setup</h1>
            <a href={appDeepLink}>Open in CMSch Bacon</a>
        </div>
    )
}

function createAppDeepLink(userId: string){
    const apiUrl = process.env.SITE_URL+"/api/location"

    return `cmsch-tracker://?endpoint=${encodeURI(apiUrl)}&key=${userId}`
}
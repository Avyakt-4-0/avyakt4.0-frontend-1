export default async function Page({
    params,
}: {
    params: Promise<{ name: string }>
}) {
    const name = (await params).name
    return <div>My events: {name}</div>
}
async function getBodyLogs(bodyLogId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/logs/records/${bodyLogId}`,
    { next: { revalidate: 10 } }
  )
  const data = await res.json()
  return data
}

export default async function BodyLogPage({ params }: any) {
  const bodylog = await getBodyLogs(params.id)
  const createdDate = new Date(bodylog.created).toLocaleDateString("en-GB")
  return (
    <div>
      <h1>Body Log</h1>
      <div>
        <p>Date : {createdDate}</p>
        <p>Weight : {bodylog.weight}</p>
        <p>BFF : {bodylog.bff}</p>
        <p>Waist : {bodylog.waist}</p>
        <p>Chest : {bodylog.chest}</p>
        <p>Arms : {bodylog.arms}</p>
        <p>Shoulders : {bodylog.shoulders}</p>
        <p>Hips : {bodylog.hips}</p>
        <p>Thighs : {bodylog.thighs}</p>
        <p>Calves : {bodylog.calves}</p>
      </div>
    </div>
  )
}

// import PocketBase from 'pocketbase';
import Link from "next/link"
import styles from "./BodyLogs.module.css"
import CreateLog from "./CreateLog"

async function getBodyLogs() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/logs/records?page=1&perPage=30",
    { cache: "no-store" }
  )
  const data = await res.json()
  return data?.items as any[]
}

export default async function BodyLogs() {
  const bodylogs = await getBodyLogs()

  return (
    <div>
      <h1>Body Logs</h1>
      <div>
        {bodylogs?.map(bodylog => {
          return <BodyLog key={bodylog.id} bodylog={bodylog} />
        })}
      </div>
      <CreateLog />
    </div>
  )
}

function BodyLog({ bodylog }: any) {
  const {
    id,
    created,
    weight,
    bff,
    waist,
    chest,
    arms,
    shoulders,
    hips,
    thighs,
    calves,
  } = bodylog || {}
  const createdDate = new Date(created)

  return (
    <Link href={`bodylog/${id}`}>
      <div>
        <p>Date : {createdDate.toLocaleDateString("en-GB")}</p>
        <p>Weight : {weight}</p>
        <p>BFF : {bff}</p>
        <p>Waist : {waist}</p>
        <p>Chest : {chest}</p>
        <p>Arms : {arms}</p>
        <p>Shoulders : {shoulders}</p>
        <p>Hips : {hips}</p>
        <p>Thighs : {thighs}</p>
        <p>Calves : {calves}</p>
      </div>
    </Link>
  )
}

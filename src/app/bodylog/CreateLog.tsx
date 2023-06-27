"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateLog() {
  const [weight, setWeight] = useState("")
  const [bff, setBff] = useState("")
  const [waist, setWaist] = useState("")
  const [chest, setChest] = useState("")
  const [arms, setArms] = useState("")
  const [forearms, setForearms] = useState("")
  const [shoulders, setShoulders] = useState("")
  const [hips, setHips] = useState("")
  const [thighs, setThighs] = useState("")
  const [calves, setCalves] = useState("")

  const router = useRouter()

  const create = async () => {
    // const db = new PocketBase('http://127.0.0.1:8090');

    // await db.records.create('notes', {
    //   title,
    //   content,
    // });

    await fetch("http://127.0.0.1:8090/api/collections/logs/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight,
        bff,
        waist,
        chest,
        arms,
        forearms,
        shoulders,
        hips,
        thighs,
        calves,
      }),
    })

    setWeight("")
    setBff("")
    setWaist("")
    setChest("")
    setArms("")
    setForearms("")
    setShoulders("")
    setHips("")
    setThighs("")
    setCalves("")

    router.refresh()
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Log</h3>
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="BFF"
        value={bff}
        onChange={e => setBff(e.target.value)}
      />
      <input
        type="number"
        placeholder="Waist"
        value={waist}
        onChange={e => setWaist(e.target.value)}
      />
      <input
        type="number"
        placeholder="Chest"
        value={chest}
        onChange={e => setChest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Arms"
        value={arms}
        onChange={e => setArms(e.target.value)}
      />
      <input
        type="number"
        placeholder="Forearms"
        value={forearms}
        onChange={e => setForearms(e.target.value)}
      />

      <input
        type="number"
        placeholder="Shoulders"
        value={shoulders}
        onChange={e => setShoulders(e.target.value)}
      />
      <input
        type="number"
        placeholder="Hips"
        value={hips}
        onChange={e => setHips(e.target.value)}
      />
      <input
        type="number"
        placeholder="Thighs"
        value={thighs}
        onChange={e => setThighs(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calves"
        value={calves}
        onChange={e => setCalves(e.target.value)}
      />

      <button type="submit">Create Log</button>
    </form>
  )
}

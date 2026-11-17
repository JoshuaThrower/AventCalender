import Door from "./Assets/AdventDoor"
import { useState } from "react"

export default function App() {
  const [opened, setOpened] = useState<number[]>([])
  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-4xl font-bold">Advent Calendar</h1>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
        {Array.from({ length: 24 }, (_, i) => i + 1).map((day) => (
          <Door
            key={day}
            day={day}
            isOpen={opened.includes(day)}
            unlocked={day <= new Date().getDate()}
            onOpen={() => setOpened((prev) => [...prev, day])}
          />
        ))}
        
        
        
        
        </div>
    </main>
  )
}
type DoorProps = {
  day: number
  isOpen: boolean
  unlocked: boolean
  onOpen: () => void
}

export default function Door({ day, isOpen, unlocked, onOpen }: DoorProps) {
  return <button onClick={onOpen}
  disabled={!unlocked}
  className={`aspect-[3/4] rounded-md border-2 border-amber-600 text-2xl font-bold
  hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50
  ${isOpen ? "border-dashed bg-slate-100 text-amber-700" : "bg-rose-800 text-white"}`}
  >
    {day}</button>
}
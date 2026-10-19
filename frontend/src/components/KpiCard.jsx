import { IndianRupee, Users, Store, Timer } from 'lucide-react'

const icons = {
  revenue: IndianRupee,
  footfall: Users,
  occupancy: Store,
  queue: Timer,
}

export default function KpiCard({ label, value, change, positive, icon }) {
  const Icon = icons[icon]
  const changeColor =
    positive === true ? 'text-emerald-600' : positive === false ? 'text-accent' : 'text-navy-soft'

  return (
    <div className="rounded-xl border border-line bg-white p-5 shadow-sm transition hover:shadow-md fade-up">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-navy-soft">{label}</p>
        <span className="rounded-lg bg-red-50 p-2 text-accent">
          <Icon size={18} />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold tracking-tight text-navy">{value}</p>
      <p className={`mt-1 text-xs font-medium ${changeColor}`}>{change}</p>
    </div>
  )
}
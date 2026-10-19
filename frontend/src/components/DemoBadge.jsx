export default function DemoBadge({ label = 'Synthetic demo data' }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-800">
      {label}
    </span>
  )
}
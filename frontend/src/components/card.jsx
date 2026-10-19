import DemoBadge from './DemoBadge'

export default function Card({ title, subtitle, demo = true, children, className = '' }) {
  return (
    <section className={`rounded-xl border border-line bg-white p-5 shadow-sm fade-up ${className}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-navy">{title}</h2>
          {subtitle && <p className="mt-0.5 text-sm text-navy-soft">{subtitle}</p>}
        </div>
        {demo && <DemoBadge />}
      </div>
      {children}
    </section>
  )
}
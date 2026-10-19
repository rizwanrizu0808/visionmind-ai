import { Sparkles } from 'lucide-react'
import { insights } from '../data/demoData'

export default function InsightsPanel() {
  return (
    <div className="space-y-3">
      {insights.map((i) => (
        <div key={i.id} className="flex gap-3 rounded-lg border border-line bg-surface p-3">
          <Sparkles size={16} className="mt-0.5 shrink-0 text-accent" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy-soft">{i.type}</p>
            <p className="text-sm text-navy">{i.text}</p>
          </div>
        </div>
      ))}
      <p className="text-xs text-navy-soft">
        These are hand-written sample insights. AI-generated insights arrive in Phase 8.
      </p>
    </div>
  )
}
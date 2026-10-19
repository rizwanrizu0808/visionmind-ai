import { AlertTriangle } from 'lucide-react'
import { inventoryAlerts } from '../data/demoData'

export default function InventoryAlerts() {
  return (
    <ul className="divide-y divide-line">
      {inventoryAlerts.map((item) => {
        const critical = item.severity === 'critical'
        return (
          <li key={item.product} className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <AlertTriangle size={16} className={critical ? 'text-accent' : 'text-amber-500'} />
              <div>
                <p className="text-sm font-medium text-navy">{item.product}</p>
                <p className="text-xs text-navy-soft">Reorder level: {item.reorderAt}</p>
              </div>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              critical ? 'bg-red-50 text-accent' : 'bg-amber-50 text-amber-700'
            }`}>
              {item.stock} left
            </span>
          </li>
        )
      })}
    </ul>
  )
}
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, ScanEye, BarChart3, Package, LineChart, Bot, Settings, X,
} from 'lucide-react'

const nav = [
  { to: '/',          label: 'Dashboard',            icon: LayoutDashboard },
  { to: '/vision',    label: 'Vision Analytics',     icon: ScanEye },
  { to: '/sales',     label: 'Sales Analytics',      icon: BarChart3 },
  { to: '/inventory', label: 'Inventory',            icon: Package },
  { to: '/forecasts', label: 'Forecasts & Reports',  icon: LineChart },
  { to: '/copilot',   label: 'AI Business Co-Pilot', icon: Bot },
  { to: '/settings',  label: 'Settings & Admin',     icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-navy/40 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-line bg-white transition-transform lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-sm font-bold text-white">V</div>
            <span className="text-lg font-bold text-navy">VisionMind <span className="text-accent">AI</span></span>
          </div>
          <button onClick={onClose} className="text-navy-soft lg:hidden" aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="space-y-1 p-3">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-red-50 text-accent'
                    : 'text-navy-soft hover:bg-surface hover:text-navy'
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
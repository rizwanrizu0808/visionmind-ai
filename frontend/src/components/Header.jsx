import { Menu, Bell, Search } from 'lucide-react'

export default function Header({ onMenu }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-line bg-white/90 px-4 backdrop-blur sm:px-6">
      <div className="flex items-center gap-3">
        <button onClick={onMenu} className="text-navy lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
        <div className="hidden items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 sm:flex">
          <Search size={16} className="text-navy-soft" />
          <input
            placeholder="Search (coming soon)"
            disabled
            className="w-56 bg-transparent text-sm outline-none placeholder:text-navy-soft"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-navy-soft hover:text-navy" aria-label="Notifications">
          <Bell size={20} />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
            SO
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-navy">Store Owner</p>
            <p className="text-xs text-navy-soft">Demo Store</p>
          </div>
        </div>
      </div>
    </header>
  )
}
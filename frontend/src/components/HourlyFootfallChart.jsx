import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
} from 'recharts'
import { hourlyFootfall } from '../data/demoData'

export default function HourlyFootfallChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={hourlyFootfall} margin={{ top: 5, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="footfallFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#d62839" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#d62839" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e3e7ee" vertical={false} />
          <XAxis dataKey="hour" tick={{ fontSize: 11, fill: '#3d4a66' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#3d4a66' }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="visitors" name="Visitors" stroke="#d62839"
                strokeWidth={2} fill="url(#footfallFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
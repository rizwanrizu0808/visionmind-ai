import {
  ResponsiveContainer, ComposedChart, Bar, Line,
  XAxis, YAxis, Tooltip, CartesianGrid, Legend,
} from 'recharts'
import { salesFootfall } from '../data/demoData'

export default function SalesFootfallChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={salesFootfall} margin={{ top: 5, right: 8, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e3e7ee" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#3d4a66' }} axisLine={false} tickLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#3d4a66' }} axisLine={false} tickLine={false}
                 tickFormatter={(v) => `₹${v / 1000}k`} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#3d4a66' }}
                 axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="sales" name="Sales (₹)" fill="#d62839" radius={[4, 4, 0, 0]} barSize={26} />
          <Line yAxisId="right" type="monotone" dataKey="footfall" name="Footfall"
                stroke="#0b1b3a" strokeWidth={2} dot={{ r: 3 }} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
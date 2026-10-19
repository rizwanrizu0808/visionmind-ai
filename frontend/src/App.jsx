import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vision" element={<Placeholder title="Vision Analytics" phase="Phase 6" />} />
        <Route path="/sales" element={<Placeholder title="Sales Analytics" phase="Phase 3" />} />
        <Route path="/inventory" element={<Placeholder title="Inventory" phase="Phase 3" />} />
        <Route path="/forecasts" element={<Placeholder title="Forecasts & Reports" phase="Phase 7" />} />
        <Route path="/copilot" element={<Placeholder title="AI Business Co-Pilot" phase="Phase 8" />} />
        <Route path="/settings" element={<Placeholder title="Settings & Administration" phase="Phase 4" />} />
      </Route>
    </Routes>
  )
}
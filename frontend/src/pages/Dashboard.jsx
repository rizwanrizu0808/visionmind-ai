import KpiCard from '../components/kpicard'
import Card from '../components/card'
import SalesFootfallChart from '../components/SalesFootfallChart'
import HourlyFootfallChart from '../components/HourlyFootfallChart'
import InventoryAlerts from '../components/InventoryAlerts'
import InsightsPanel from '../components/InsightsPanel'
import { kpis } from '../data/demoData'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy">Business Dashboard</h1>
        <p className="text-sm text-navy-soft">
          Overview of store performance. All values are synthetic demo data for UI development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => <KpiCard key={k.id} {...k} />)}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card title="Sales & Footfall" subtitle="Last 7 days">
          <SalesFootfallChart />
        </Card>
        <Card title="Hourly Footfall" subtitle="Today">
          <HourlyFootfallChart />
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card title="Inventory Alerts" subtitle="Products near or below reorder level">
          <InventoryAlerts />
        </Card>
        <Card title="Insights & Recommendations" subtitle="Sample operational insights">
          <InsightsPanel />
        </Card>
      </div>
    </div>
  )
}
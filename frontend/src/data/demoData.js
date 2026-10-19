// ALL DATA IN THIS FILE IS SYNTHETIC DEMO DATA.
// It will be replaced by real backend data in Phase 5.

export const kpis = [
  { id: 'revenue',   label: "Today's Revenue",   value: '₹48,250', change: '+8.2%',          positive: true,  icon: 'revenue' },
  { id: 'footfall',  label: 'Customer Footfall',  value: '612',     change: '+4.5%',          positive: true,  icon: 'footfall' },
  { id: 'occupancy', label: 'Current Occupancy',  value: '37',      change: 'of 60 capacity', positive: null,  icon: 'occupancy' },
  { id: 'queue',     label: 'Avg. Queue Length',  value: '5.4',     change: '+1.2 vs avg',    positive: false, icon: 'queue' },
]

export const salesFootfall = [
  { day: 'Mon', sales: 41200, footfall: 540 },
  { day: 'Tue', sales: 38900, footfall: 505 },
  { day: 'Wed', sales: 43500, footfall: 560 },
  { day: 'Thu', sales: 40100, footfall: 520 },
  { day: 'Fri', sales: 52800, footfall: 690 },
  { day: 'Sat', sales: 61400, footfall: 820 },
  { day: 'Sun', sales: 48250, footfall: 612 },
]

export const hourlyFootfall = [
  { hour: '9AM', visitors: 18 },  { hour: '10AM', visitors: 34 },
  { hour: '11AM', visitors: 52 }, { hour: '12PM', visitors: 71 },
  { hour: '1PM', visitors: 66 },  { hour: '2PM', visitors: 48 },
  { hour: '3PM', visitors: 44 },  { hour: '4PM', visitors: 58 },
  { hour: '5PM', visitors: 83 },  { hour: '6PM', visitors: 96 },
  { hour: '7PM', visitors: 74 },  { hour: '8PM', visitors: 41 },
]

export const inventoryAlerts = [
  { product: 'Basmati Rice 5kg',  stock: 6,  reorderAt: 20, severity: 'critical' },
  { product: 'Sunflower Oil 1L',  stock: 14, reorderAt: 25, severity: 'warning' },
  { product: 'Whole Wheat Flour', stock: 18, reorderAt: 30, severity: 'warning' },
  { product: 'Tea Powder 500g',   stock: 4,  reorderAt: 15, severity: 'critical' },
  { product: 'Detergent 1kg',     stock: 22, reorderAt: 30, severity: 'warning' },
]

export const insights = [
  { id: 1, type: 'Operations', text: 'Queue length peaks between 5 PM and 7 PM, matching the highest footfall hours.' },
  { id: 2, type: 'Inventory',  text: 'Two products are below 30% of their reorder level and may run out within a day.' },
  { id: 3, type: 'Sales',      text: 'Weekend sales are noticeably higher than weekdays, with Saturday leading.' },
]
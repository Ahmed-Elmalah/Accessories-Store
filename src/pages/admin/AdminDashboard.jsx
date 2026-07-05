import React from 'react';
import StatsCard from '../../components/admin/DashBoard/StateCard';

export default function AdminDashboard() {
  const orders = [
    { id: '#LF-8842', name: 'Eleanor Vance', date: 'Oct 24, 2023', amount: '$1,250.00', status: 'Pending', badge: 'badge-pending' },
    { id: '#LF-8841', name: 'Arthur Pendelton', date: 'Oct 23, 2023', amount: '$3,400.00', status: 'Shipped', badge: 'badge-shipped' },
    { id: '#LF-8840', name: 'Isabella Rossi', date: 'Oct 23, 2023', amount: '$850.00', status: 'Shipped', badge: 'badge-shipped' },
    { id: '#LF-8839', name: 'Marcus Sterling', date: 'Oct 22, 2023', amount: '$5,200.00', status: 'Pending', badge: 'badge-pending' },
    { id: '#LF-8838', name: 'Sophia Chen', date: 'Oct 21, 2023', amount: '$425.00', status: 'Shipped', badge: 'badge-shipped' },
  ];

  return (
    <>
      {/* Top Row: Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Sales" value="$45,280" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} 
          trend={<><svg className="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> +12%</>} 
          trendText="vs last month"
          glowClass="bg-primary/10"
        />
        <StatsCard 
          title="Active Orders" value="12" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>} 
          badgeText="Urgent Attention" badgeClass="badge-urgent"
          glowClass="bg-error/10"
        />
        <StatsCard 
          title="Total Products" value="86" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14L4 7m8 4v10M4 7v10l8 4" /></svg>} 
          badgeText="In Stock (Healthy)" badgeClass="badge-success"
          glowClass="bg-success/10"
        />
        <StatsCard 
          title="Active Promos" value="2" 
          icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>} 
          badgeText="Live Now" badgeClass="badge-pending"
          glowClass="bg-primary/10"
        />
      </div>

      {/* Middle Row: Chart Area */}
      <div className="bg-surface border border-outline-variant rounded-xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
          <div>
            <h3 className="text-lg font-headline font-bold text-on-surface">Sales Performance</h3>
            <p className="text-sm text-on-surface-variant mt-1">Revenue over the last 6 months</p>
          </div>
          <select className="bg-background border border-outline-variant rounded-md text-sm py-1.5 pl-3 pr-8 text-on-surface focus:ring-primary focus:border-primary w-fit">
            <option>Last 6 Months</option>
            <option>This Year</option>
            <option>All Time</option>
          </select>
        </div>
        <div className="chart-container overflow-x-auto">
          <div className="min-w-150 h-full">
            <svg height="100%" preserveAspectRatio="none" viewBox="0 0 800 300" width="100%">
              <defs>
                <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.5"></stop>
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <g className="chart-grid-line">
                <line x1="40" x2="780" y1="20" y2="20"></line>
                <line x1="40" x2="780" y1="85" y2="85"></line>
                <line x1="40" x2="780" y1="150" y2="150"></line>
                <line x1="40" x2="780" y1="215" y2="215"></line>
                <line x1="40" x2="780" y1="280" y2="280"></line>
              </g>
              <g className="chart-axis-text" textAnchor="end">
                <text x="30" y="25">$50k</text>
                <text x="30" y="90">$40k</text>
                <text x="30" y="155">$30k</text>
                <text x="30" y="220">$20k</text>
                <text x="30" y="285">$10k</text>
              </g>
              <g className="chart-axis-text" textAnchor="middle">
                <text x="80" y="298">Jan</text>
                <text x="220" y="298">Feb</text>
                <text x="360" y="298">Mar</text>
                <text x="500" y="298">Apr</text>
                <text x="640" y="298">May</text>
                <text x="780" y="298">Jun</text>
              </g>
              <path className="chart-area" d="M 80 280 L 80 200 L 220 150 L 360 180 L 500 80 L 640 120 L 780 40 L 780 280 Z"></path>
              <path className="chart-line" d="M 80 200 L 220 150 L 360 180 L 500 80 L 640 120 L 780 40"></path>
              <circle className="chart-point" cx="80" cy="200" r="4"></circle>
              <circle className="chart-point" cx="220" cy="150" r="4"></circle>
              <circle className="chart-point" cx="360" cy="180" r="4"></circle>
              <circle className="chart-point" cx="500" cy="80" r="4"></circle>
              <circle className="chart-point" cx="640" cy="120" r="4"></circle>
              <circle className="chart-point" cx="780" cy="40" r="4"></circle>
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Row: Recent Orders Table */}
      <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center">
          <h3 className="text-lg font-headline font-bold text-on-surface">Recent Orders</h3>
          <button className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
            View All <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-background/50 border-b border-outline-variant text-on-surface-variant font-label text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Order ID</th>
                <th className="px-6 py-4 font-medium">Customer Name</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/50 text-on-surface">
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 font-mono text-primary/80">{order.id}</td>
                  <td className="px-6 py-4 font-medium">{order.name}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{order.date}</td>
                  <td className="px-6 py-4 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.badge}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-primary/10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
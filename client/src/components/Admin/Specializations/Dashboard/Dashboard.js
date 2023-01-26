import React from 'react'
import './Dashboard.css'
import DashboardStatsGrid from '../../DashboardStatsGrid/DashboardStatsGrid'
import TransactionChart from '../../TransactionChart/TransactionChart'
import BuyerProfilePieChart from '../../BuyerProfilePieChart/BuyerProfilePieChart'
import RecentOrders from '../../RecentOrders/RecentOrders'
import PopularProducts from '../../popularProducts/popularProducts '

function Dashboard() {
  return (
     
    <div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
				<PopularProducts />
			</div>
		</div>
    
  )
}

export default Dashboard
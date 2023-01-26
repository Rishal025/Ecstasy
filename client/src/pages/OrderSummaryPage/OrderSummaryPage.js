import React from 'react'
import OrderSummary from '../../components/User/OrderSummary/OrderSummary'
import Navbar from '../../components/User/Navbar/Navbar'

function OrderSummaryPage() {
  return (
    <React.Fragment>
          <Navbar/>
          <OrderSummary/>
    </React.Fragment>
  )
}

export default OrderSummaryPage
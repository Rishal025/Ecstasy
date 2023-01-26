import React from 'react'
import Navbar from '../../components/User/Navbar/Navbar'
import SubscriptionPlans from '../../components/User/SubsctiptionPlans/SubscriptionPlans'

function SubscriptionPage() {
    return (
        <React.Fragment>
            <Navbar />
            <SubscriptionPlans />
        </React.Fragment>
    )
}

export default SubscriptionPage
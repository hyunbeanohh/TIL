import React from 'react'
import SummaryPage from './pages/SummaryPage'
import OrderPage from './pages/OrderPage'

const App = () => {
  return (
    <div style={{ padding : '4rem' }}>
      <OrderPage />
      <SummaryPage />
    </div>
  )
}

export default App
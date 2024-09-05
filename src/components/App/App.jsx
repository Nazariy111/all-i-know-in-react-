import { useState } from 'react'
import ClickCounter from '../ClickCounter/ClickCounter'
import WelcomeModal from '../WellcomeModal/WelcomeModal'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <WelcomeModal/>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/click-counter" element={<ClickCounter />} />

      </Routes>
      
      
    </Layout>
      )
}

export default App

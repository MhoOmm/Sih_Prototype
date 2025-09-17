import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import ChatAi from "./components/chatAi"
import GovtCoinDashboard from './components/GovtCoinDashboard'


function App() {
   return (
    <>
      

      <Routes>
        <Route path="/govt-coin-dash" element={<GovtCoinDashboard />} />
        <Route path="/chat-ai" element={<ChatAi></ChatAi>}/>
      </Routes>
    </>
  )
}

export default App

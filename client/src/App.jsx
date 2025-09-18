import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your layout and page components
import ChatAi from "./components/chatAi"
import GovtCoinDashboard from './components/GovtCoinDashboard'
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import VirtualTour from './components/VirtualTour';
import Marketplaces from './components/MarketPlaces';

const Logout = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <h1 className="text-2xl">You have been logged out.</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes within this group will share the Layout (and its Navbar) */}
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tour" element={<VirtualTour />} />
          <Route path="/markets" element={<Marketplaces />} />
        </Route>

        {/* These routes are standalone (no Navbar) */}
        <Route path="/chat" element={<ChatAi />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/govt-coin-dash" element={<GovtCoinDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;


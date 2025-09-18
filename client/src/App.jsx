import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import your layout and page components
import ChatAi from "./components/chatAi"
import GovtCoinDashboard from './components/GovtCoinDashboard'
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import VirtualTour from './components/VirtualTour';
import Marketplaces from './components/MarketPlaces';
import PlaceDetail from './components/PlaceDetail';
import Login from './components/Login';
import Logout from './components/Logout';
import SignupSeller from './components/SignupSeller';
import SignupUser from './components/SignupUser';

// const Logout = () => {
//   return (
//     <div className="flex items-center justify-center h-screen bg-black text-white">
//       <h1 className="text-2xl">You have been logged out.</h1>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tour" element={<VirtualTour />} />
          <Route path="/markets" element={<Marketplaces />} />
          <Route path="/places/:placeId" element={<PlaceDetail />} /> 
        </Route>

        <Route path="/chat" element={<ChatAi />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/govt-coin-dash" element={<GovtCoinDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupuser" element={<SignupUser />} />
        <Route path="/signupseller" element={<SignupSeller />} />
      </Routes>
    </Router>
  );
}

export default App;

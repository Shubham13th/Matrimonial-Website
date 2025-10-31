import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import Dashboard from "./pages/Dashboard"
import Matches from "./pages/Matches"
import Search from "./pages/Search"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"
import ProfileDetail from "./pages/ProfileDetail"
import Help from "./pages/Help"
import EditProfile from "./pages/EditProfile"

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/search" element={<Search />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;

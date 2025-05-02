import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Fahrservice from './pages/Fahrservice'
import ChauffeurService from './pages/ChauffeurService'
import FlughafenTransfer from './pages/FlughafenTransfer'
import VipService from './pages/VipService'
import Fuhrpark from './pages/Fuhrpark'
import Limousine from './pages/Limousine'
import Van from './pages/Van'
import Luxury from './pages/Luxury'
import TourKonfigurator from './pages/TourKonfigurator'
import TourismusZiel from './pages/TourismusZiel'
import ShoppingTours from './pages/ShoppingTours'
import Freizeitparks from './pages/Freizeitparks'
import Bauernhoefe from './pages/Bauernhoefe'
import Kontakt from './pages/Kontakt'
import SimpleContact from './pages/SimpleContact'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.nav-item') && !event.target.closest('button')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fahrservice" element={<Fahrservice />} />
            <Route path="/chauffeur-service" element={<ChauffeurService />} />
            <Route path="/flughafen-transfer" element={<FlughafenTransfer />} />
            <Route path="/vip-service" element={<VipService />} />

            <Route path="/fuhrpark" element={<Fuhrpark />} />
            <Route path="/limousine" element={<Limousine />} />
            <Route path="/van" element={<Van />} />
            <Route path="/luxury" element={<Luxury />} />
            <Route path="/tour-konfigurator" element={<TourKonfigurator />} />
            <Route path="/tourismus-ziel" element={<TourismusZiel />} />
            <Route path="/shopping-tours" element={<ShoppingTours />} />
            <Route path="/freizeitparks" element={<Freizeitparks />} />
            <Route path="/bauernhoefe" element={<Bauernhoefe />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/simple-contact" element={<SimpleContact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

export default App

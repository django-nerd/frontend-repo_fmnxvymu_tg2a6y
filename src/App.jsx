import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProblemesSolutions from './pages/ProblemesSolutions'
import Fonctionnalites from './pages/Fonctionnalites'
import PreuvesEtudes from './pages/PreuvesEtudes'
import Tarifs from './pages/Tarifs'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problemes-solutions" element={<ProblemesSolutions />} />
      <Route path="/fonctionnalites" element={<Fonctionnalites />} />
      <Route path="/preuves-etudes" element={<PreuvesEtudes />} />
      <Route path="/tarifs" element={<Tarifs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App

import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import { PourQui, CommentCaMarche, Temoi, Benefices, CTAFinale } from '../components/Sections'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Ludopia — L’aide aux devoirs qui simplifie la vie des familles et des enseignants"
        description="Solution ludique et structurée pour accompagner les enfants, notamment avec TDAH."
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <PourQui />
        <CommentCaMarche />
        <Temoi />
        <Benefices />
        <CTAFinale />
      </main>
      <Footer />
    </div>
  )
}

export default Home

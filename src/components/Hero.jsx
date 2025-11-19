import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Ludopia, la plateforme de jeux éducatifs qui simplifie la vie des familles et des enseignants
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Une expérience interactive et ludique, pensée pour soutenir l’attention et l’organisation des enfants, notamment avec TDAH.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Link to="#decouvrir" className="px-6 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors">
              Découvrir Ludopia
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-md border border-amber-200 text-amber-800 font-semibold hover:bg-amber-50 transition-colors">
              Demander une démo
            </Link>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-amber-200 shadow-xl">
          {/* If you have a Spline 3D scene URL, replace the URL below */}
          <div className="aspect-video bg-white">
            <Spline scene="https://prod.spline.design/7b0C7O-Placeholder/scene.splinecode" onLoad={() => {}} />
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-amber-700 bg-white/80 px-2 py-1 rounded">
            Espace 3D interactif (remplacez par votre scène)
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

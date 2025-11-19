import Header from '../components/Header'
import Footer from '../components/Footer'
import { Users, BookOpen, Shield, BarChart3, Sparkles } from 'lucide-react'

function Card({ icon: Icon, title, text }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white">
      <Icon className="h-6 w-6 text-blue-600" />
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700 text-sm">{text}</p>
    </div>
  )
}

function Fonctionnalites() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Fonctionnalités</h1>
            <p className="mt-3 text-slate-700">Des outils pensés pour chaque profil : parents, enseignants et établissements.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Pour les parents</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card icon={Sparkles} title="Parcours ludiques" text="Activités interactives et motivantes, adaptées à l’âge et au niveau." />
              <Card icon={Users} title="Rituels à la maison" text="Guides et astuces pour instaurer une routine sans stress." />
              <Card icon={BarChart3} title="Suivi des progrès" text="Visualisation claire des objectifs et accomplissements." />
            </div>

            <h2 className="mt-10 text-xl font-bold text-slate-900 mb-4">Pour les enseignants</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card icon={BookOpen} title="Différenciation" text="Plans personnalisés selon les besoins (dont TDAH)." />
              <Card icon={BarChart3} title="Tableaux de bord" text="Suivi individuel et de groupe en temps réel." />
              <Card icon={Shield} title="Partage sécurisé" text="Communication fluide avec les familles, en toute confidentialité." />
            </div>

            <h2 className="mt-10 text-xl font-bold text-slate-900 mb-4">Pour les établissements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card icon={Shield} title="Conformité et sécurité" text="Gestion des accès, RGPD et hébergement sécurisé." />
              <Card icon={Users} title="Pilotage" text="Indicateurs et rapports consolidés pour l’équipe éducative." />
              <Card icon={BookOpen} title="Ressources" text="Bibliothèque commune d’activités et de bonnes pratiques." />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Fonctionnalites

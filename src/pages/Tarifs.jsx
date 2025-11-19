import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Tarifs() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Ludopia — Tarifs" description="Formules famille et établissement avec services inclus. Tarifs indicatifs à personnaliser." />
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Tarifs</h1>
            <p className="mt-3 text-slate-700">Des formules simples et transparentes, adaptées à vos besoins.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">Offre famille</h3>
              <div className="mt-2 text-3xl font-extrabold text-blue-700">€00/mois</div>
              <ul className="mt-4 text-slate-700 space-y-2 list-disc pl-5">
                <li>Accès à toutes les activités</li>
                <li>Suivi des progrès</li>
                <li>Support par email</li>
              </ul>
              <a href="/contact" className="mt-6 inline-block px-5 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600">Me contacter</a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">Offre école / établissement</h3>
              <div className="mt-2 text-3xl font-extrabold text-blue-700">€00/mois</div>
              <ul className="mt-4 text-slate-700 space-y-2 list-disc pl-5">
                <li>Tableaux de bord</li>
                <li>Accès multi-profils</li>
                <li>Support prioritaire</li>
              </ul>
              <a href="/contact" className="mt-6 inline-block px-5 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600">Demander un devis</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Tarifs

import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function PreuvesEtudes() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Ludopia — Preuves & Études" description="Références, chiffres clés et ressources autour de l’accompagnement aux devoirs et du TDAH." />
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Preuves & Études</h1>
            <p className="mt-3 text-slate-700">Références et chiffres clés autour de l’accompagnement aux devoirs et des approches adaptées (TDAH).</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
            <div className="rounded-xl border border-slate-200 p-6 bg-white">
              <h2 className="text-lg font-semibold text-slate-900">Références d’études (placeholders)</h2>
              <ul className="mt-3 list-disc pl-5 text-slate-700">
                <li>Étude 1 — à compléter</li>
                <li>Étude 2 — à compléter</li>
                <li>Rapport 3 — à compléter</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {['85% des familles constatent...', '2x plus d’engagement...', '70% des enseignants...'].map((c, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-6 bg-blue-50">
                  <div className="text-3xl font-extrabold text-blue-700">00%</div>
                  <p className="mt-2 text-slate-700 text-sm">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default PreuvesEtudes

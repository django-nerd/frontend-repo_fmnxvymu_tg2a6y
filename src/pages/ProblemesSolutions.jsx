import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function ProblemesSolutions() {
  const items = [
    {
      problem: 'Devoirs sources de conflit à la maison',
      solution: 'Activités guidées, rituels clairs et feedback positif pour apaiser le moment des devoirs.'
    },
    {
      problem: 'Manque de temps ou d’outils pour les parents',
      solution: 'Plans prêts à l’emploi, rappels et suggestions adaptées pour gagner du temps au quotidien.'
    },
    {
      problem: 'Difficultés de concentration et d’organisation (TDAH)',
      solution: 'Séquences courtes, timers visuels et renforcement positif pour rester engagé.'
    },
    {
      problem: 'Difficulté à suivre chaque élève individuellement',
      solution: 'Tableaux de bord et partages sécurisés pour mieux piloter les parcours.'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Ludopia — Problèmes & Solutions" description="Les défis du quotidien (concentration, organisation, TDAH) et les réponses concrètes proposées par Ludopia." />
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Problèmes & Solutions</h1>
            <p className="mt-3 text-slate-700">Les défis du quotidien et comment Ludopia y répond concrètement.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6">
            {items.map((it, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
                <h3 className="text-lg font-semibold text-slate-900">{it.problem}</h3>
                <p className="mt-2 text-slate-700"><span className="font-semibold text-blue-700">Solution :</span> {it.solution}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ProblemesSolutions

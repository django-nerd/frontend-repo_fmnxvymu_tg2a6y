import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function FAQ() {
  const faqs = [
    { q: 'À qui s’adresse Ludopia ?', a: 'Placeholder réponse — à compléter.' },
    { q: 'Ludopia convient-il aux enfants avec TDAH ?', a: 'Placeholder réponse — à compléter.' },
    { q: 'Comment se passe l’essai / la démo ?', a: 'Placeholder réponse — à compléter.' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Ludopia — FAQ" description="Questions fréquentes sur Ludopia, son fonctionnement et son public." />
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">FAQ</h1>
            <p className="mt-3 text-slate-700">Questions fréquentes (texte à compléter).</p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-6 bg-white">
                <h3 className="text-base font-semibold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-slate-700 text-sm">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default FAQ

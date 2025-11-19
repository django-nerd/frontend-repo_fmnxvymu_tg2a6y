import { CheckCircle2, Brain, Clock, LineChart, Users, BookOpen, Sparkles, Shield } from 'lucide-react'

export function PourQui() {
  const items = [
    { title: 'Parents', text: 'Des outils simples pour instaurer une routine sereine et suivre les progrès à la maison.' },
    { title: 'Enseignants', text: 'Un appui structuré pour différencier, motiver et garder une trace claire des avancées.' },
    { title: 'Établissements scolaires', text: 'Une solution fiable pour harmoniser les pratiques et renforcer le lien famille-école.' },
  ]
  return (
    <section className="py-16 bg-white" id="decouvrir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Pour qui ?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-lg font-semibold text-slate-900">{it.title}</h3>
              <p className="text-slate-700 mt-2">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CommentCaMarche() {
  const steps = [
    { title: 'Se connecter', text: 'Créez votre compte et paramétrez le profil de l’enfant.', icon: Users },
    { title: 'Choisir les activités', text: 'Sélection de modules adaptés au niveau et aux besoins.', icon: BookOpen },
    { title: 'Suivre la progression', text: 'Visualisez les progrès et adaptez le parcours si besoin.', icon: LineChart },
    { title: 'Motiver au quotidien', text: 'Approche ludique et rituels simples pour garder le cap.', icon: Sparkles },
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Comment ça marche ?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 bg-white">
              <s.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Temoi() {
  const testimonials = [
    { name: 'Sophie, maman', text: 'Moins de conflits, plus d’autonomie. Ludopia a transformé nos soirées devoirs.' },
    { name: 'Marc, enseignant', text: 'Un suivi clair et des outils concrets pour motiver mes élèves au quotidien.' },
    { name: 'Claire, CPE', text: 'La communication famille-école est facilitée et les progrès sont visibles.' },
  ]
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Témoignages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">{t.name.charAt(0)}</div>
                <div className="text-sm font-semibold text-slate-900">{t.name}</div>
              </div>
              <p className="mt-3 text-slate-700 text-sm">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Benefices() {
  const benefits = [
    { icon: Brain, title: 'Attention & concentration', text: 'Des activités courtes et rythmées pour maintenir l’engagement.' },
    { icon: Clock, title: 'Rituels simples', text: 'Des routines visuelles et sonores pour cadencer les temps d’apprentissage.' },
    { icon: Shield, title: 'Cadre rassurant', text: 'Un environnement apaisant, sans distractions inutiles.' },
    { icon: CheckCircle2, title: 'Progrès visibles', text: 'Des indicateurs clairs pour valoriser chaque avancée.' },
  ]
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Bénéfices clés</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-slate-200 p-6 bg-white">
              <b.icon className="h-6 w-6 text-blue-600" />
              <h3 className="mt-3 text-base font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-slate-700 text-sm">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTAFinale() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Prêt à essayer Ludopia ?</h2>
        <p className="mt-3 text-white/90">Inscrivez-vous ou demandez une démo pour découvrir la solution en action.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#" className="px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-600 font-semibold">S’inscrire</a>
          <a href="/contact" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 font-semibold">Demander une démo</a>
        </div>
      </div>
    </section>
  )
}

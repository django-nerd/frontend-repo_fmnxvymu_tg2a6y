import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', profil: 'parent', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci ! Votre message a été envoyé (placeholder).')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Ludopia — Contact" description="Contactez-nous pour une démo ou des informations sur Ludopia." />
      <Header />
      <main className="flex-1">
        <section className="bg-blue-50 border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contact</h1>
            <p className="mt-3 text-slate-700">Laissez-nous un message. Nous reviendrons vers vous rapidement.</p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nom</label>
                <input name="nom" value={form.nom} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Type de profil</label>
                <select name="profil" value={form.profil} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                  <option value="parent">Parent</option>
                  <option value="enseignant">Enseignant</option>
                  <option value="etablissement">Établissement</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <button className="mt-2 px-5 py-3 rounded-md bg-amber-500 text-white font-semibold hover:bg-amber-600">Envoyer</button>
            </form>

            <div className="mt-8 text-sm text-slate-600">
              <p>Coordonnées (placeholders) :</p>
              <p>Email : contact@ludopia.fr</p>
              <p>Téléphone : 00 00 00 00 00</p>
              <p>Adresse : 00 rue Exemple, 75000 Paris</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact

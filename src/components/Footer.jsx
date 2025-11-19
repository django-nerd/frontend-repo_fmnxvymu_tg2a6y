function Footer() {
  return (
    <footer className="mt-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Ludopia" className="h-8 w-auto" />
            <span className="font-semibold text-slate-800">Ludopia</span>
          </div>
          <p className="text-sm text-slate-600">
            Solution d’aide aux devoirs et aux apprentissages pensée pour les enfants, leurs familles et les enseignants.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-3">Légal</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><a href="#" className="hover:text-blue-700">Mentions légales</a></li>
            <li><a href="#" className="hover:text-blue-700">Politique de confidentialité</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-3">Nous suivre</h3>
          <ul className="text-sm text-slate-600 space-y-2">
            <li><a href="#" className="hover:text-blue-700">Facebook</a></li>
            <li><a href="#" className="hover:text-blue-700">Instagram</a></li>
            <li><a href="#" className="hover:text-blue-700">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Ludopia — Tous droits réservés.</div>
    </footer>
  )
}

export default Footer

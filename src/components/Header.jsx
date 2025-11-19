import { Link, NavLink } from 'react-router-dom'

function Header() {
  const navItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-amber-700 bg-amber-100' : 'text-slate-600 hover:text-amber-700 hover:bg-amber-50'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-phoenix.svg" alt="Ludopia" className="h-9 w-auto" />
          <span className="sr-only">Ludopia</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItem({ to: '/', label: 'Accueil' })}
          {navItem({ to: '/problemes-solutions', label: 'Problèmes & Solutions' })}
          {navItem({ to: '/fonctionnalites', label: 'Fonctionnalités' })}
          {navItem({ to: '/preuves-etudes', label: 'Preuves & Études' })}
          {navItem({ to: '/tarifs', label: 'Tarifs' })}
          {navItem({ to: '/faq', label: 'FAQ' })}
          {navItem({ to: '/contact', label: 'Contact' })}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link to="#" className="px-3 py-2 text-sm font-semibold text-amber-700 hover:text-amber-800">Connexion</Link>
          <Link to="#" className="px-4 py-2 text-sm font-semibold rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors">Inscription</Link>
        </div>
        <div className="md:hidden">
          <span className="text-slate-600 text-sm">Menu</span>
        </div>
      </div>
    </header>
  )
}

export default Header

import { useEffect } from 'react'

function ensureMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function SEO({ title = 'Ludopia — Aide aux devoirs douce et ludique', description = 'Ludopia aide les enfants, les parents et les enseignants avec des outils ludiques et structurés, adaptés notamment au TDAH.' }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) ensureMetaTag('description', description)
  }, [title, description])
  return null
}

export default SEO

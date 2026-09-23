import { useEffect } from 'react'

const SITE_NAME = 'Nathalia'
// TODO: substituir pelo domínio real assim que o projeto for publicado.
const SITE_URL = 'https://nathalia.design'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface SeoProps {
  /** Título da página. Renderizado como "{title} — Nathalia". */
  title: string
  description?: string
  /** Caminho relativo à raiz do site, ex: "/about". Padrão: rota atual. */
  path?: string
  /** URL absoluta para a imagem de Open Graph. Usa a imagem padrão do site se omitida. */
  image?: string
  noIndex?: boolean
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Client-side SEO tag manager for this SPA. Updates document.title, meta
 * description, Open Graph/Twitter tags and the canonical link on route change.
 *
 * Note: since this is a client-rendered SPA (no SSR/prerendering), crawlers
 * that don't execute JavaScript will only see the static tags in index.html.
 * If social-preview accuracy per page becomes important, revisit with
 * prerendering (e.g. vite-plugin-ssr, Vercel's static generation) or an
 * edge function that serves per-route meta tags.
 */
export function Seo({ title, description, path, image, noIndex }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} — ${SITE_NAME}`
    const url = `${SITE_URL}${path ?? window.location.pathname}`
    const ogImage = image ?? DEFAULT_OG_IMAGE

    document.title = fullTitle

    if (description) {
      setMetaTag('name', 'description', description)
      setMetaTag('property', 'og:description', description)
      setMetaTag('name', 'twitter:description', description)
    }
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', ogImage)

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:image', ogImage)

    setLinkTag('canonical', url)
  }, [title, description, path, image, noIndex])

  return null
}

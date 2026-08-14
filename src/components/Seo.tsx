import { useEffect } from 'react'

const SITE_NAME = 'Nomad Design'
const SITE_URL = 'https://nomaddesign.co'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

interface SeoProps {
  /** Page-specific title. Rendered as "{title} | Nomad Design". */
  title: string
  description: string
  /** Path relative to the site root, e.g. "/sobre". Defaults to "/". */
  path?: string
  /** Absolute URL to an Open Graph image. Falls back to the site default. */
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
export function Seo({ title, description, path = '/', image, noIndex }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path}`
    const ogImage = image ?? DEFAULT_OG_IMAGE

    document.title = fullTitle

    setMetaTag('name', 'description', description)
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')

    setMetaTag('property', 'og:type', 'website')
    setMetaTag('property', 'og:site_name', SITE_NAME)
    setMetaTag('property', 'og:title', fullTitle)
    setMetaTag('property', 'og:description', description)
    setMetaTag('property', 'og:url', url)
    setMetaTag('property', 'og:image', ogImage)

    setMetaTag('name', 'twitter:card', 'summary_large_image')
    setMetaTag('name', 'twitter:title', fullTitle)
    setMetaTag('name', 'twitter:description', description)
    setMetaTag('name', 'twitter:image', ogImage)

    setLinkTag('canonical', url)
  }, [title, description, path, image, noIndex])

  return null
}

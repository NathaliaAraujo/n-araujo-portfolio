import type { ImgHTMLAttributes } from 'react'

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  /** Required so the browser can reserve space and avoid layout shift (CLS). */
  width: number
  height: number
}

/**
 * Image with native lazy loading and async decoding by default. `alt` is
 * required (pass alt="" only for purely decorative images) and width/height
 * are required to prevent cumulative layout shift while the image loads.
 * Use loading="eager" via props to opt out for above-the-fold images (e.g. LCP).
 */
export function LazyImage({
  loading = 'lazy',
  decoding = 'async',
  ...props
}: LazyImageProps) {
  return <img loading={loading} decoding={decoding} {...props} />
}

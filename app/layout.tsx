import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import '@fontsource/bricolage-grotesque/500.css'
import '@fontsource/bricolage-grotesque/700.css'
import '@fontsource/bricolage-grotesque/800.css'
import '@fontsource/archivo-black/400.css'
import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import '@fontsource/caveat/500.css'
import '@fontsource/caveat/700.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Journey — Timothy Adegbola at LivePetal Systems',
  description:
      'An end-of-internship talk by Timothy "Timmy" Adegbola: six months of SIWES at LivePetal Systems, April to October 2026.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#3D8B43',
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="en">
      <body>
      {children}
      {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      </html>
  )
}
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Nunito } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-fredoka',
})
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Pocket Physics — Physics that fits in your pocket | PocketLearn',
  description:
    'Pocket Physics turns mechanics, electricity, waves and more into bite-sized interactive lessons, hands-on simulations and quick quizzes. Free on iOS and Android.',
  generator: 'v0.app',

  openGraph: {
    title: 'Pocket Physics by PocketLearn',
    description: 'Bite-sized physics lessons, simulations and quizzes for iOS and Android.',
    images: ['/images/owl-mascot.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d63f0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

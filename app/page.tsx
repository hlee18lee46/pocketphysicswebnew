import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Topics } from '@/components/topics'
import { HowItWorks } from '@/components/how-it-works'
import { Faq } from '@/components/faq'
import { DownloadCta } from '@/components/download-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Topics />
        <HowItWorks />
        <Faq />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}

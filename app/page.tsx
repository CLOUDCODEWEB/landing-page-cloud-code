import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { Process } from '@/components/process'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Process />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}

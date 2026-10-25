import Image from 'next/image'
import { Check } from 'lucide-react'

const steps = [
  {
    title: 'Learn it',
    body: 'A five-minute story-driven lesson with Newt. Plain words first, equations second.',
  },
  {
    title: 'Play with it',
    body: 'Drag sliders, launch cannonballs, wire circuits. See the physics react in real time.',
  },
  {
    title: 'Prove it',
    body: 'Quick quizzes with step-by-step hints. Keep your streak and level up your owl.',
  },
]

const perks = ['Works offline', 'Hints, not just answers', 'Synced across devices', 'Made with physics teachers']

export function HowItWorks() {
  return (
    <section id="how" className="py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="sticker w-64 rotate-3 overflow-hidden rounded-[2.5rem] bg-card md:w-72">
            <Image
              src="/images/screen-quiz.png"
              alt="Pocket Physics quiz screen asking how long a ball takes to fall 20 meters"
              width={720}
              height={1520}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-10 lg:order-2">
          <h2 className="text-4xl font-bold text-balance md:text-5xl">Learn it. Play with it. Prove it.</h2>
          <ol className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span
                  aria-hidden
                  className="sticker flex size-12 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-xl font-bold"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <ul className="grid gap-3 sm:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 font-semibold">
                <Check className="size-5 text-primary" aria-hidden />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

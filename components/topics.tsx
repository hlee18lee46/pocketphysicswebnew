import { Atom, Gauge, Magnet, Orbit, Sun, Waves, Zap, Flame } from 'lucide-react'

const topics = [
  { icon: Gauge, name: 'Motion & Forces', blurb: "Velocity, acceleration and Newton's three big ideas." },
  { icon: Orbit, name: 'Gravity & Orbits', blurb: 'Why the Moon keeps falling and never lands.' },
  { icon: Flame, name: 'Energy & Heat', blurb: 'Work, power, and where your calories really go.' },
  { icon: Waves, name: 'Waves & Sound', blurb: 'Frequency, resonance and the physics of music.' },
  { icon: Zap, name: 'Electricity', blurb: 'Build circuits and watch current flow live.' },
  { icon: Magnet, name: 'Magnetism', blurb: 'Fields, motors and the compass in your phone.' },
  { icon: Sun, name: 'Light & Optics', blurb: 'Lenses, rainbows and bending beams.' },
  { icon: Atom, name: 'Modern Physics', blurb: 'Atoms, relativity and a peek at quantum.' },
]

export function Topics() {
  return (
    <section id="topics" className="border-y-2 border-foreground bg-primary py-20 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-5">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="text-4xl font-bold text-balance md:text-5xl">The whole syllabus, bite-sized.</h2>
          <p className="text-lg leading-relaxed text-pretty opacity-90">
            Built for high school and intro college physics. Jump in anywhere, or let Newt pick your next lesson.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ icon: Icon, name, blurb }, i) => (
            <li
              key={name}
              className={`sticker flex flex-col gap-3 rounded-3xl bg-card p-6 text-card-foreground ${
                i % 2 === 0 ? 'lg:-rotate-1' : 'lg:rotate-1'
              }`}
            >
              <span className="flex size-12 items-center justify-center rounded-2xl border-2 border-foreground bg-accent">
                <Icon className="size-6" aria-hidden />
              </span>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="leading-relaxed text-muted-foreground">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Who is Pocket Physics for?',
    a: 'Students from around age 13 up to first-year university, plus anyone curious about how the world works. Lessons adapt to your level as you go.',
  },
  {
    q: 'Is it really free?',
    a: 'Yes. Every core lesson is free. Pocket Physics Plus unlocks advanced units, unlimited simulations and exam-prep packs.',
  },
  {
    q: 'Does it follow my school curriculum?',
    a: 'Units map to common curricula including AP Physics 1 & 2, GCSE and A-Level, and IB. You can filter lessons by exam board in settings.',
  },
  {
    q: 'Can I use it without internet?',
    a: 'Download any unit and learn offline. Your progress syncs the next time you connect.',
  },
  {
    q: 'What is PocketLearn?',
    a: 'PocketLearn builds small, joyful learning apps. Pocket Physics is our first — more subjects are on the way.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t-2 border-foreground bg-muted py-20">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-5">
        <h2 className="text-center text-4xl font-bold text-balance md:text-5xl">Questions, answered</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="group sticker rounded-2xl bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-heading text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

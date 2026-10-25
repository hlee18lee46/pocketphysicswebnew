import Image from 'next/image'
import { StoreButtons } from './store-buttons'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-12 pb-20 md:pt-20 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="sticker rounded-full bg-card px-4 py-1 text-sm font-bold">
            New: Waves & Sound unit is live
          </p>
          <h1 className="text-5xl leading-[1.05] font-bold text-balance md:text-7xl">
            Physics that fits in your{' '}
            <span className="relative inline-block text-primary">
              pocket
              <span aria-hidden className="absolute inset-x-0 -bottom-1 -z-10 h-4 rounded-full bg-accent" />
            </span>
            .
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Five-minute lessons, simulations you can poke at, and quizzes that actually stick. Your owl coach
            Newt walks you from falling apples to quantum weirdness — one tap at a time.
          </p>
          <StoreButtons />
          <p className="text-sm font-semibold text-muted-foreground">Free to start. No ads, ever.</p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6 animate-in fade-in zoom-in-95 delay-200 duration-700 fill-mode-both">
          <div aria-hidden className="absolute inset-6 rotate-6 rounded-[3rem] border-[2.5px] border-foreground bg-primary" />
          <div className="sticker relative w-60 -rotate-3 overflow-hidden rounded-[2.5rem] bg-card md:w-72">
            <Image
              src="/images/screen-lesson.png"
              alt="Pocket Physics lesson on projectile motion with an interactive launch-angle slider"
              width={720}
              height={1520}
              priority
              className="h-auto w-full"
            />
          </div>
          <Image
            src="/images/owl-mascot.png"
            alt="Newt, the Pocket Physics owl, winking while holding a pencil and a physics book"
            width={420}
            height={420}
            priority
            className="animate-bob absolute -bottom-14 -left-4 w-36 drop-shadow-xl sm:-left-10 md:-bottom-16 md:-left-24 md:w-52"
          />
        </div>
      </div>
    </section>
  )
}

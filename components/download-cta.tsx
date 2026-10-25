import Image from 'next/image'
import { StoreButtons } from './store-buttons'

export function DownloadCta() {
  return (
    <section id="download" className="px-5 py-20">
      <div className="sticker mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[2.5rem] bg-accent p-10 text-center text-accent-foreground md:flex-row md:p-14 md:text-left">
        <Image
          src="/images/owl-mascot.png"
          alt=""
          width={260}
          height={260}
          className="animate-bob w-40 shrink-0 md:w-56"
        />
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h2 className="text-4xl font-bold text-balance md:text-5xl">{"Newt's ready when you are."}</h2>
          <p className="max-w-md text-lg leading-relaxed text-pretty">
            Download Pocket Physics and finish your first lesson before your coffee cools.
          </p>
          <StoreButtons className="justify-center md:justify-start" />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

const links = [
  { href: '#topics', label: 'Topics' },
  { href: '#how', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" className="flex items-center gap-2" aria-label="Pocket Physics home">
          <Image src="/images/owl-mascot.png" alt="" width={44} height={44} className="size-11" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold">Pocket Physics</span>
            <span className="text-xs font-semibold text-muted-foreground">by PocketLearn</span>
          </span>
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8 font-semibold">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="underline-offset-4 hover:text-primary hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#download"
          className="sticker sticker-press rounded-full bg-accent px-5 py-2 font-heading font-semibold text-accent-foreground"
        >
          Get the app
        </a>
      </div>
    </header>
  )
}

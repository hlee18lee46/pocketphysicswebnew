const links = [
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Terms' },
  { href: '#', label: 'Support' },
  { href: '#', label: 'For teachers' },
]

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-lg font-semibold">
          Pocket Physics <span className="font-sans text-sm font-normal opacity-75">— a PocketLearn app</span>
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-6 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="opacity-80 hover:opacity-100 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm opacity-75">© {new Date().getFullYear()} PocketLearn</p>
      </div>
    </footer>
  )
}

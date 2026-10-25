import { cn } from '@/lib/utils'

const stores = [
  {
    href: '#',
    icon: '/images/apple.svg',
    eyebrow: 'Download on the',
    name: 'App Store',
  },
  {
    href: '#',
    icon: '/images/google-play.svg',
    eyebrow: 'Get it on',
    name: 'Google Play',
  },
]

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      {stores.map((store) => (
        <a
          key={store.name}
          href={store.href}
          className="sticker sticker-press flex items-center gap-3 rounded-2xl bg-secondary px-5 py-3 text-secondary-foreground focus-visible:outline-4 focus-visible:outline-offset-4"
        >
          <img src={store.icon} alt="" width={26} height={26} className="size-6 object-contain" />
          <span className="flex flex-col leading-tight">
            <span className="text-xs opacity-80">{store.eyebrow}</span>
            <span className="font-heading text-lg font-semibold">{store.name}</span>
          </span>
        </a>
      ))}
    </div>
  )
}

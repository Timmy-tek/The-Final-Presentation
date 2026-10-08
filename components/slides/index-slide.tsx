import { ArrowUpRight } from 'lucide-react'
import { Slide } from '@/components/deck/slide'
import { MonoLabel, Tag } from '@/components/ui/bits'
import { Swirl } from '@/components/ui/doodles'
import { chapters, index } from '@/data/slides'
import { cn } from '@/lib/utils'

const chipTones = ['orange', 'lime', 'purple', 'ink', 'yellow', 'orange', 'lime', 'purple'] as const

export function IndexSlide() {
  return (
    <Slide surface="paper">
      <Swirl className="pointer-events-none absolute inset-0 size-full" />

      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>CONTENTS / 24 SLIDES</MonoLabel>
      </div>
      <h2 className="line-mask absolute top-[160px] left-[90px] font-display text-[220px] leading-[0.9] tracking-[-0.02em]">
        <span data-anim="line" className="block">
          Index.
        </span>
      </h2>

      <ul className="absolute top-[200px] left-[1110px] flex w-[714px] flex-wrap gap-3" aria-label="Chapters">
        {Object.values(chapters).map((c, i) => (
          <li key={c.num} data-anim="fade">
            <Tag tone={chipTones[i]} size="lg">
              {c.label}
            </Tag>
          </li>
        ))}
      </ul>

      <ol className="absolute top-[440px] left-[96px] w-[1728px] border-t border-ink">
        {index.rows.map((row, i) => (
          <li
            key={row.num}
            data-anim="fade"
            className={cn(
              'grid h-[58px] grid-cols-[96px_1fr_1fr_48px] items-center border-b border-ink/30 px-4',
              i === 0 && 'bg-yellow',
            )}
          >
            <span className="mono text-[16px]">{row.num}.</span>
            <span className="font-sticker text-[32px] leading-none font-bold tracking-[-0.01em]">{row.title}</span>
            <span className="mono text-[14px] opacity-70">{row.meta}</span>
            <span aria-hidden className="grid size-9 place-items-center justify-self-end rounded-full border border-ink">
              <ArrowUpRight className="size-5" strokeWidth={1.75} />
            </span>
          </li>
        ))}
      </ol>
    </Slide>
  )
}

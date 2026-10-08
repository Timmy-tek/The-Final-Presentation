import { Slide } from '@/components/deck/slide'
import { Lines, MonoLabel } from '@/components/ui/bits'
import { ColorCard } from '@/components/ui/frames'
import { changed } from '@/data/slides'

export function ChangedSlide() {
  const [q, a] = changed.title
  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>BEFORE / AFTER</MonoLabel>
      </div>
      <Lines
        className="absolute top-[166px] left-[90px] font-display text-[76px] leading-[0.98] tracking-[-0.02em]"
        lines={[
          <span key="q">{q}</span>,
          <span key="a" className="relative inline-block">
            <span data-anim="wipe" aria-hidden className="absolute inset-x-[-0.06em] bottom-[0.08em] -z-10 h-[0.4em] bg-yellow" />
            {a}
          </span>,
        ]}
      />

      <ul className="absolute top-[420px] left-[96px] grid w-[1728px] grid-cols-5 gap-6">
        {changed.cards.map((c, i) => (
          <li key={c.skill} data-step={i + 1} className="h-[480px]">
            <ColorCard
              tone={c.tone}
              eyebrow={c.skill.toUpperCase()}
              className="h-full"
              title={
                <>
                  <span className="mono mb-2 block text-[12px] opacity-60">BEFORE</span>
                  <span className="mb-6 block text-[22px] font-medium line-through decoration-2 opacity-70">{c.before}</span>
                  <span className="mono mb-2 block text-[12px] opacity-60">AFTER</span>
                  <span className="block">{c.after}</span>
                </>
              }
            />
          </li>
        ))}
      </ul>
    </Slide>
  )
}

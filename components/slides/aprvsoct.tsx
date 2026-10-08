import { ArrowRight } from 'lucide-react'
import { Slide } from '@/components/deck/slide'
import { Hand, MonoLabel, Tag } from '@/components/ui/bits'
import { StatCard } from '@/components/ui/blocks'
import { aprVsOct } from '@/data/slides'
import { cn } from '@/lib/utils'

function Column({ label, traits, tone, faded = false }: { label: string; traits: string[]; tone: 'outline' | 'ink'; faded?: boolean }) {
  return (
    <section data-anim="fade" className={cn('flex w-[700px] flex-col gap-8', faded && 'text-graphite')}>
      <h3 className="line-mask font-display text-[150px] leading-[0.9] tracking-[-0.03em]">
        <span data-anim="line" className="block">
          {label}
        </span>
      </h3>
      <ul className="flex flex-wrap gap-3">
        {traits.map((t) => (
          <li key={t}>
            <Tag tone={tone} size="lg" className={faded ? 'border-graphite' : undefined}>
              {t}
            </Tag>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function AprVsOctSlide() {
  const { april, october, stats } = aprVsOct
  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>AFTER / SIX MONTHS LATER</MonoLabel>
      </div>

      <div className="absolute top-[190px] left-[96px] flex w-[1728px] items-start justify-between">
        <Column label={april.label} traits={april.traits} tone="outline" faded />
        <span
          data-anim="fade"
          aria-hidden
          className="mt-[40px] grid size-[120px] place-items-center rounded-full border-[1.5px] border-ink bg-yellow"
        >
          <ArrowRight className="size-14" strokeWidth={1.5} />
        </span>
        <Column label={october.label} traits={october.traits} tone="ink" />
      </div>

      <div className="absolute top-[470px] left-[1160px]">
        <Hand className="text-[48px] text-ink" rot={-4}>
          same person, new toolkit
        </Hand>
      </div>

      <ul className="absolute top-[640px] left-[96px] grid w-[1728px] grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <li key={s.label} data-step={i + 1}>
            <StatCard value={s.value} suffix={s.suffix} label={s.label} />
          </li>
        ))}
      </ul>
    </Slide>
  )
}

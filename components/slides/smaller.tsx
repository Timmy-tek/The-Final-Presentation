import { Slide } from '@/components/deck/slide'
import { StatusDot, Tag } from '@/components/ui/bits'
import { BrowserFrame } from '@/components/ui/frames'
import { smallerBuilds } from '@/data/slides'
import { FigLabel } from './shared'

const STATUS_LABEL = { live: 'LIVE', shipped: 'SHIPPED', handoff: 'HANDED OFF', wip: 'IN PROGRESS', unknown: 'UNKNOWN' }

export function SmallerSlide() {
  return (
    <Slide surface="paper">
      <FigLabel fig={smallerBuilds.fig} title={smallerBuilds.title} />
      <div className="absolute top-[160px] left-[96px] flex w-[1728px] items-end justify-between">
        <h2 className="line-mask font-display text-[90px] leading-[0.95] tracking-[-0.02em]">
          <span data-anim="line" className="block">
            {smallerBuilds.title}
          </span>
        </h2>
        <p data-anim="fade" className="mb-3 text-[26px]">
          {smallerBuilds.sub}
        </p>
      </div>

      <ul className="absolute top-[322px] left-[96px] grid w-[1728px] grid-cols-3 gap-x-8 gap-y-7">
        {smallerBuilds.items.map((b) => (
          <li key={b.name} data-anim="block" className="flex flex-col gap-3">
            <BrowserFrame src={b.src} url={`${b.name.toLowerCase()}.app`} w={554} h={214} alt={`${b.name} screenshot`} />
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <h3 className="font-display text-[26px] leading-none">{b.name}</h3>
                <span className="mono text-[13px] opacity-70">{b.caption}</span>
              </div>
              <span className="mono shrink-0 text-[12px]">
                <StatusDot tone={b.tone} label={STATUS_LABEL[b.tone]} />
              </span>
            </div>
            <Tag size="sm" className="self-start">
              {b.stack}
            </Tag>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

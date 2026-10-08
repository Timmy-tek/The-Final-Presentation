import { Slide } from '@/components/deck/slide'
import { MonoLabel, Tag } from '@/components/ui/bits'
import { roadmap } from '@/data/slides'
import { cn } from '@/lib/utils'

const LINE_Y = 560
const START = 200
const END = 1720
const CARD_W = 250
const tagTones = ['orange', 'purple', 'lime', 'yellow'] as const

export function RoadmapSlide() {
  const n = roadmap.nodes.length
  const nodeX = (i: number) => START + (i * (END - START)) / (n - 1)

  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>APR - OCT 2026 / 7 MONTHS</MonoLabel>
      </div>
      <h2 className="line-mask absolute top-[158px] left-[90px] font-display text-[96px] leading-[0.95] tracking-[-0.02em]">
        <span data-anim="line" className="block">
          {roadmap.title}
        </span>
      </h2>

      {/* faint full track */}
      <svg aria-hidden className="pointer-events-none absolute inset-0" width={1920} height={1080}>
        <line x1={96} y1={LINE_Y} x2={1824} y2={LINE_Y} stroke="#111" strokeOpacity={0.25} strokeDasharray="6 8" />
      </svg>

      {roadmap.nodes.map((node, i) => {
        const x = nodeX(i)
        const above = i % 2 === 0
        const prevX = i === 0 ? 96 : nodeX(i - 1)
        const cardLeft = Math.min(Math.max(x - CARD_W / 2, 96), 1824 - CARD_W)
        return (
          <div key={node.month}>
            <svg data-step={i + 1} data-step-plain aria-hidden className="pointer-events-none absolute inset-0" width={1920} height={1080}>
              <line
                data-anim="draw"
                x1={prevX}
                y1={LINE_Y}
                x2={x}
                y2={LINE_Y}
                pathLength={1}
                stroke="#111"
                strokeWidth={3}
                strokeDasharray="1"
              />
            </svg>

            <div data-step={i + 1}>
              <span
                aria-hidden
                className="absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center border border-ink bg-paper"
                style={{ left: x, top: LINE_Y }}
              >
                <span className="size-3 bg-ink" />
              </span>
              <span
                aria-hidden
                className="absolute w-px bg-ink"
                style={{ left: x, top: above ? LINE_Y - 44 : LINE_Y + 14, height: 30 }}
              />
              <article
                className={cn('absolute flex flex-col gap-2 border border-ink bg-paper p-4', above ? '-translate-y-full' : '')}
                style={{ left: cardLeft, top: above ? LINE_Y - 44 : LINE_Y + 44, width: CARD_W }}
              >
                <h3 className="font-display text-[28px] leading-none">{node.month}</h3>
                <p className="text-[17px] leading-snug">{node.body}</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {node.tags.map((t, ti) => (
                    <li key={t}>
                      <Tag tone={tagTones[(i + ti) % tagTones.length]} size="sm">
                        {t}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        )
      })}
    </Slide>
  )
}

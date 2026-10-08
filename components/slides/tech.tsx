import { Slide } from '@/components/deck/slide'
import { MonoLabel, Tag } from '@/components/ui/bits'
import { PopupWindow } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import { tech } from '@/data/slides'
import { RowNumbers } from './shared'

export function TechSlide() {
  const [popA, popB] = tech.popups
  return (
    <Slide surface="ink">
      <RowNumbers count={12} top={128} gap={70} />

      <div className="absolute top-[132px] left-[160px] text-cream">
        <MonoLabel>STACK / APR - OCT</MonoLabel>
      </div>
      <h2 className="line-mask absolute top-[160px] left-[154px] font-display text-[100px] leading-[0.95] tracking-[-0.02em] text-cream">
        <span data-anim="line" className="block">
          {tech.title}
        </span>
      </h2>

      <div className="absolute top-[340px] left-[160px] grid w-[1300px] grid-cols-4 gap-8">
        {tech.columns.map((col) => (
          <section key={col.name} data-anim="fade" className="border-t border-cream/40 pt-5">
            <Tag tone="yellow" size="md">
              {col.name}
            </Tag>
            <ul className="mt-6 flex flex-col gap-3">
              {col.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 font-sticker text-[32px] leading-tight font-semibold text-cream">
                  <span aria-hidden className="mono text-[16px] text-yellow">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Sticker x={1500} y={190} rot={4} depth={1.2} dieCut={false}>
        <PopupWindow title={popA.title} src={popA.src} w={310} h={200} dark />
      </Sticker>
      <Sticker x={1480} y={590} rot={-3} depth={0.8} dieCut={false}>
        <PopupWindow title={popB.title} src={popB.src} w={300} h={190} dark />
      </Sticker>
    </Slide>
  )
}

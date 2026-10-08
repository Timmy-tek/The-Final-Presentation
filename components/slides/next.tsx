import { ArrowUpRight } from 'lucide-react'
import { Slide } from '@/components/deck/slide'
import { Lines, MonoLabel } from '@/components/ui/bits'
import { PopupWindow } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import { Txt } from '@/components/ui/txt'
import { whatsNext } from '@/data/slides'

const DOTS = ['bg-orange', 'bg-purple', 'bg-lime', 'bg-yellow']

export function NextSlide() {
  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>WHAT&apos;S NEXT / LOADING</MonoLabel>
      </div>
      <Lines
        className="absolute top-[180px] left-[88px] font-display text-[180px] leading-[0.9] tracking-[-0.04em]"
        lines={[whatsNext.title]}
      />

      <ol className="absolute top-[480px] left-[96px] w-[1060px] border-t-[1.5px] border-ink">
        {whatsNext.items.map((item, i) => (
          <li
            key={item}
            data-step={i + 1}
            className="flex items-center gap-8 border-b-[1.5px] border-ink py-6"
          >
            <span className="mono w-[60px] text-[18px]">{`0${i + 1}`}</span>
            <span aria-hidden className={`size-4 shrink-0 rounded-full ${DOTS[i % DOTS.length]}`} />
            <span className="flex-1 font-sticker text-[44px] leading-none font-extrabold tracking-[-0.02em]">
              <Txt>{item}</Txt>
            </span>
            <span data-step-spin aria-hidden className="grid size-[56px] place-items-center rounded-full border-[1.5px] border-ink">
              <ArrowUpRight className="size-7" strokeWidth={1.75} />
            </span>
          </li>
        ))}
      </ol>

      <Sticker x={1300} y={300} rot={4} depth={1.2} dieCut={false}>
        <PopupWindow title={whatsNext.gif.title} src={whatsNext.gif.src} w={480} h={330} />
      </Sticker>
    </Slide>
  )
}

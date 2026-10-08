import { Slide } from '@/components/deck/slide'
import { Hand } from '@/components/ui/bits'
import { LabelBlock } from '@/components/ui/blocks'
import { DoodleIcon, PaperStar, Sparkle } from '@/components/ui/doodles'
import { Sticker } from '@/components/ui/sticker'
import { Txt } from '@/components/ui/txt'
import { beyond } from '@/data/slides'

const ROT = [-2, 1.5, -1, 2]

export function BeyondSlide() {
  return (
    <Slide surface="mat">
      <LabelBlock as="h2" tone="brown" rot={-3} tape="tl" className="absolute top-[150px] left-[96px] px-8 pt-2 pb-4 text-[110px] leading-none">
        {beyond.label}
      </LabelBlock>
      <div className="absolute top-[200px] left-[900px] text-yellow">
        <Hand className="text-[54px]" rot={-5}>
          {beyond.note}
        </Hand>
      </div>

      <Sticker x={1720} y={160} rot={-10} depth={1.5} dieCut={false}>
        <PaperStar size={76} />
      </Sticker>
      <Sticker x={1560} y={250} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={30} />
      </Sticker>

      <ul className="absolute top-[400px] left-[96px] grid w-[1728px] grid-cols-4 gap-7">
        {beyond.cards.map((c, i) => (
          <li
            key={c.title}
            data-step={i + 1}
            className="flex h-[480px] flex-col gap-5 rounded-[28px] bg-white p-8 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
            style={{ rotate: `${ROT[i]}deg` }}
          >
            <span className="grid size-[96px] place-items-center rounded-[22px] bg-lime">
              <DoodleIcon kind={c.icon} size={64} />
            </span>
            <span className="mono text-[13px] opacity-60">{`0${i + 1} / 04`}</span>
            <h3 className="font-sticker text-[48px] leading-none font-extrabold tracking-[-0.02em]">{c.title}</h3>
            <p className="text-[25px] leading-snug">
              <Txt>{c.story}</Txt>
            </p>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

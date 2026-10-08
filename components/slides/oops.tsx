import { Slide } from '@/components/deck/slide'
import { MonoLabel } from '@/components/ui/bits'
import { PaperStar, Sparkle } from '@/components/ui/doodles'
import { Sticker } from '@/components/ui/sticker'
import { Txt } from '@/components/ui/txt'
import { oops } from '@/data/slides'

const NOTE_ROT = [-3, 2, -1.5]
const NOTE_TONE = ['bg-yellow', 'bg-white', 'bg-lime']

export function OopsSlide() {
  return (
    <Slide surface="mat">
      <div className="absolute top-[132px] left-[96px] text-cream">
        <MonoLabel>REAL TALK / WHAT WENT WRONG</MonoLabel>
      </div>

      <h2 className="line-mask absolute top-[150px] left-[70px]">
        <span
          data-anim="line"
          className="distressed block font-display text-[400px] leading-[0.9] tracking-[-0.05em] text-cream"
        >
          {oops.word}
        </span>
      </h2>
      <p
        data-anim="fade"
        className="absolute top-[400px] left-[620px] font-hand text-[170px] leading-none font-bold text-yellow"
        style={{ rotate: '-8deg' }}
      >
        {oops.script}
      </p>

      <Sticker x={1700} y={150} rot={12} depth={1.4} dieCut={false}>
        <PaperStar size={90} />
      </Sticker>
      <Sticker x={1560} y={520} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={36} />
      </Sticker>

      <ol className="absolute top-[640px] left-[96px] grid w-[1728px] grid-cols-3 gap-8">
        {oops.notes.map((n, i) => (
          <li
            key={n.wrong}
            data-step={i + 1}
            className={`flex min-h-[320px] flex-col gap-5 p-7 text-ink shadow-[0_14px_28px_rgb(0_0_0/0.28)] ${NOTE_TONE[i]}`}
            style={{ rotate: `${NOTE_ROT[i]}deg` }}
          >
            <span className="mono text-[13px] opacity-60">{`OOPS 0${i + 1}`}</span>
            <p className="text-[26px] leading-snug">
              <Txt>{n.wrong}</Txt>
            </p>
            <div className="mt-auto border-t-[1.5px] border-dashed border-ink/50 pt-4">
              <span className="mono text-[12px] opacity-60">IT TAUGHT ME</span>
              <p className="font-hand text-[40px] leading-[1.05] font-bold">
                <Txt>{n.taught}</Txt>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Slide>
  )
}

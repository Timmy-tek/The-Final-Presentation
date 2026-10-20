import { Slide } from '@/components/deck/slide'
import { MonoLabel } from '@/components/ui/bits'
import { WindowControls } from '@/components/ui/doodles'
import { Txt } from '@/components/ui/txt'
import { finale } from '@/data/slides'
import { RowNumbers } from './shared'

export function FinaleSlide() {
  const last = finale.lines.length + 1
  return (
    <Slide surface="ink" seam={false}>
      <RowNumbers count={13} top={128} gap={64} />

      <div className="absolute top-[132px] left-[160px] text-cream">
        <MonoLabel>~/livepetal/siwes - zsh</MonoLabel>
      </div>

      <div
        data-anim="fade"
        className="absolute top-[200px] left-[160px] w-[1000px] overflow-hidden rounded-[14px] border-[1.5px] border-cream/40 bg-[#161616]"
      >
        <div className="flex h-[52px] items-center gap-4 border-b-[1.5px] border-cream/30 px-5">
          <WindowControls size={20} />
          <span className="mono flex-1 text-center text-[13px] text-cream/60">timmy@livepetal</span>
          <span className="w-[72px]" />
        </div>
        <ul className="flex flex-col gap-4 p-8 font-mono text-[34px] leading-tight text-cream">
          {finale.lines.map((line, i) => (
            <li key={line} data-step={i + 1} data-step-plain className={i === finale.lines.length - 1 ? 'text-lime' : undefined}>
              <Txt>{line}</Txt>
            </li>
          ))}
          <li aria-hidden className="text-yellow">
            {'> '}
            <span className="blink inline-block h-[0.9em] w-[0.55em] translate-y-[0.12em] bg-yellow" />
          </li>
        </ul>
      </div>

      <h2 data-step={last} className="absolute right-[96px] bottom-[110px] text-right">
        <span className="block font-display text-[220px] leading-[0.85] tracking-[-0.04em] text-cream">{finale.thanks}</span>
        <span className="mono mt-6 block text-[18px] text-yellow">QUESTIONS? ASK AWAY.</span>
      </h2>
    </Slide>
  )
}

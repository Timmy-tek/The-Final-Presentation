import { Slide } from '@/components/deck/slide'
import { Hand, Lines, Tag } from '@/components/ui/bits'
import { HandArrow, Sparkle } from '@/components/ui/doodles'
import { BrowserFrame } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import { personalBuilds } from '@/data/slides'
import { FigLabel, MonoLink } from './shared'

const tones = ['orange', 'purple', 'lime', 'yellow'] as const

export function PersonalSlide() {
  return (
    <Slide surface="paper">
      <FigLabel fig={personalBuilds.fig} title={personalBuilds.title} />
      <Lines
        className="absolute top-[170px] left-[90px] w-[520px] font-display text-[96px] leading-[0.92] tracking-[-0.02em]"
        lines={personalBuilds.title.split(' ')}
      />
      <p data-anim="fade" className="absolute top-[400px] left-[96px] w-[460px] text-[28px] leading-snug">
        {personalBuilds.sub}
      </p>
      <div className="absolute top-[560px] left-[150px] flex flex-col items-start gap-2">
        <Hand className="text-[50px]" rot={-6}>
          after hours, for fun
        </Hand>
        <HandArrow w={180} h={90} className="ml-24 rotate-[-10deg]" />
      </div>
      <Sticker x={480} y={170} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={36} />
      </Sticker>

      <ul className="absolute top-[150px] left-[640px] grid w-[1184px] grid-cols-2 gap-x-8 gap-y-8">
        {personalBuilds.items.map((b, i) => (
          <li key={b.name} data-anim="block" className="flex flex-col gap-3">
            <BrowserFrame src={b.src} url={`${b.name.toLowerCase().replace(/\s+/g, '-')}.dev`} w={576} h={300} alt={`${b.name} screenshot`} />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-[28px] leading-none">{b.name}</h3>
                {b.stack.map((s, si) => (
                  <Tag key={s} tone={tones[(i + si) % tones.length]} size="sm">
                    {s}
                  </Tag>
                ))}
              </div>
              <MonoLink label="LIVE" href={b.href} />
            </div>
          </li>
        ))}
      </ul>
    </Slide>
  )
}

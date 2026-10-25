import { Slide } from '@/components/deck/slide'
import { LabelBlock } from '@/components/ui/blocks'
import { Sparkle } from '@/components/ui/doodles'
import { InfoCard, Polaroid } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import { gratitude } from '@/data/slides'

const SPOTS = [
  { x: 820, y: 110, rot: -6, depth: 0.8 },
  { x: 1110, y: 150, rot: 4, depth: 1.1 },
  { x: 1400, y: 100, rot: -3, depth: 0.9 },
  { x: 1660, y: 200, rot: 7, depth: 1.3 },
  { x: 900, y: 560, rot: 5, depth: 1.2 },
  { x: 1200, y: 600, rot: -5, depth: 0.9 },
  { x: 1500, y: 580, rot: 3, depth: 1.4 },
  { x: 1750, y: 520, rot: -4, depth: 1.1 },
]

export function GratitudeSlide() {
  return (
    <Slide surface="mat">
      <LabelBlock
        as="h2"
        tone="yellow"
        rot={-4}
        tape="tl"
        className="absolute top-[200px] left-[96px] px-8 pt-2 pb-4 text-[130px] leading-none"
      >
        {gratitude.label}
      </LabelBlock>

      <div data-anim="fade" className="absolute top-[520px] left-[110px]" style={{ rotate: '2deg' }}>
        <InfoCard title={gratitude.card.title} w={460}>
          {gratitude.card.body}
        </InfoCard>
      </div>

      <Sticker x={640} y={180} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={40} />
      </Sticker>

      {gratitude.people.map((p, i) => (
        <Sticker key={p.role} x={SPOTS[i].x} y={SPOTS[i].y} rot={SPOTS[i].rot} depth={SPOTS[i].depth} dieCut={false}>
          <Polaroid src={p.src} caption={p.role} note={p.note} w={230} ratio={1} tapeRot={i % 2 ? 6 : -5} alt={p.role} />
        </Sticker>
      ))}

      {/* Gallery Stack */}
      <div className="absolute inset-0 flex items-center justify-center pt-[100px]">
        <div className="relative w-[1000px] h-[550px]">
          {gratitude.gallery?.map((item: any, i: number) => {
            const x = item.x ?? 0
            const y = item.y ?? 0
            const rot = item.rot ?? 0

            return (
              <div
                key={i}
                data-anim="block"
                data-step={i + 1}
                data-rot={rot}
                className="absolute inset-0 bg-[#F9F7F2] border-[15px] border-white shadow-2xl flex p-10 gap-10"
                style={{
                  translate: `${x}px ${y}px`,
                  zIndex: 100 + i,
                }}
              >
                {/* Image Side */}
                <div className="w-[45%] h-full bg-ink/5 border border-ink/10 overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rotate-45 translate-x-4 -translate-y-4" />
                </div>

                {/* Content Side */}
                <div className="w-[55%] flex flex-col justify-center">
                  <h3 className="font-display text-[35px] leading-[1.1] text-ink mb-6 tracking-tight">
                    {item.title}
                  </h3>
                  <div className="w-16 h-1 bg-yellow mb-8" />
                  <p className="font-hand text-[36px] leading-[1.3] text-ink/80 italic" style={{ whiteSpace: 'pre-line' }}>
                     {item.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Slide>
  )
}

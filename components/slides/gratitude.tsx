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
    </Slide>
  )
}

import { Slide } from '@/components/deck/slide'
import { Lines, MonoLabel } from '@/components/ui/bits'
import { StatCard } from '@/components/ui/blocks'
import { InfoCard, Polaroid } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import { Txt } from '@/components/ui/txt'
import { training } from '@/data/slides'

const STACK = [
  { x: 1290, y: 150, rot: -6, depth: 0.7 },
  { x: 1520, y: 230, rot: 5, depth: 1 },
  { x: 1380, y: 520, rot: -2, depth: 1.3 },
]

export function TrainingSlide() {
  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>MENTORING / SEPTEMBER</MonoLabel>
      </div>
      <Lines
        className="absolute top-[180px] left-[88px] font-display text-[132px] leading-[0.92] tracking-[-0.03em]"
        lines={training.title}
      />

      <div data-anim="fade" className="absolute top-[640px] left-[96px]">
        <InfoCard title={training.card.title} w={540}>
          <dl className="grid grid-cols-[120px_1fr] gap-y-2">
            {training.card.rows.map((r) => (
              <div key={r.k} className="contents">
                <dt className="opacity-60">{r.k}</dt>
                <dd>
                  <Txt>{r.v}</Txt>
                </dd>
              </div>
            ))}
          </dl>
        </InfoCard>
      </div>

      {training.stat && (
        <div data-anim="fade" className="absolute top-[650px] left-[720px] w-[420px]">
          <StatCard value={training.stat.value} label={training.stat.label} />
        </div>
      )}

      {training.photos.map((p, i) => (
        <Sticker key={p.src} x={STACK[i].x} y={STACK[i].y} rot={STACK[i].rot} depth={STACK[i].depth} dieCut={false}>
          <Polaroid src={p.src} caption={p.caption} w={300} ratio={0.78} tapeRot={i % 2 ? 8 : -6} alt={p.caption} />
        </Sticker>
      ))}
    </Slide>
  )
}

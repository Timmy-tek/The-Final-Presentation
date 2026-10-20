import { Slide } from '@/components/deck/slide'
import { MonoLabel, Tag } from '@/components/ui/bits'
import { Media } from '@/components/ui/media'
import { Sticker } from '@/components/ui/sticker'
import { projectsOverview } from '@/data/slides'
import { RowNumbers } from './shared'

const SPOTS = [
  { x: 300, y: 118, w: 250, rot: -4 },
  { x: 640, y: 108, w: 280, rot: 3 },
  { x: 1010, y: 130, w: 240, rot: -2 },
  { x: 1330, y: 112, w: 270, rot: 4 },
  { x: 1650, y: 150, w: 210, rot: -5 },
  { x: 1280, y: 390, w: 290, rot: -3 },
  { x: 1620, y: 430, w: 230, rot: 4 },
  { x: 180, y: 720, w: 250, rot: 3 },
  { x: 520, y: 740, w: 240, rot: -4 },
  { x: 860, y: 716, w: 270, rot: 2 },
  { x: 1220, y: 700, w: 250, rot: -3 },
  { x: 1570, y: 724, w: 240, rot: 5 },
]

export function ProjectsSlide() {
  return (
    <Slide surface="ink">
      <RowNumbers count={18} top={110} gap={48} />

      {projectsOverview.thumbs.map((t, i) => {
        const s = SPOTS[i % SPOTS.length]
        return (
          <Sticker key={t.name} x={s.x} y={s.y} rot={s.rot} depth={0.6 + (i % 4) * 0.25} dieCut={false} label={t.name}>
            <div className="group relative transition-transform duration-200 hover:scale-[1.08]">
              <div className="overflow-hidden rounded-[18px] border-[5px] border-white bg-white shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                <Media src={t.src} alt={t.name} className="rounded-[8px]" style={{ width: s.w - 20, height: (s.w - 20) * 0.62 }} />
              </div>
              <span className="pointer-events-none absolute -bottom-4 left-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Tag tone="yellow" size="sm">
                  {t.name}
                </Tag>
              </span>
            </div>
          </Sticker>
        )
      })}

      <div className="absolute top-[392px] left-[160px] text-cream">
        <MonoLabel>{`[ ${projectsOverview.label} ]`}</MonoLabel>
      </div>
      <h2 className="absolute top-[430px] left-[154px] font-display text-[132px] leading-[0.92] tracking-[-0.02em] text-cream">
        {projectsOverview.headline.map((l) => (
          <span key={l} className="line-mask block">
            <span data-anim="line" className="block">
              {l}
            </span>
          </span>
        ))}
      </h2>
    </Slide>
  )
}

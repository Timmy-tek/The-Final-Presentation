import { Slide } from '@/components/deck/slide'
import { StatusDot } from '@/components/ui/bits'
import { Callout } from '@/components/ui/callout'
import { BrowserFrame, InfoCard, Polaroid, PopupWindow } from '@/components/ui/frames'
import { Media } from '@/components/ui/media'
import { Sticker } from '@/components/ui/sticker'
import { Txt } from '@/components/ui/txt'
import { type Project, type SlideId, projects } from '@/data/slides'
import { cn } from '@/lib/utils'
import { FigLabel, MonoLink } from './shared'

const BAR = 44
const FRAME = {
  A: { x: 96, y: 196, w: 1060, h: 660 },
  B: { x: 760, y: 196, w: 1064, h: 640 },
  C: { x: 480, y: 330, w: 960, h: 500 },
} as const

const BOXED = 'border border-ink bg-paper px-2 py-1'

export function getProject(id: SlideId) {
  const p = projects.find((x) => x.id === id)
  if (!p) throw new Error(`Unknown project slide: ${id}`)
  return p
}

function Meta({ project, strip = false }: { project: Project; strip?: boolean }) {
  const rows = [
    { k: 'ROLE', v: project.meta.role },
    { k: 'STACK', v: project.meta.stack },
    { k: 'BUILD TIME', v: project.meta.buildTime },
  ]
  return (
    <dl data-anim="fade" className={cn(strip ? 'grid grid-cols-4 gap-6' : 'flex flex-col')}>
      {rows.map((r) => (
        <div key={r.k} className={cn('border-t border-ink/30 py-2', !strip && 'grid grid-cols-[150px_1fr] items-baseline')}>
          <dt className="mono text-[13px] opacity-60">{r.k}</dt>
          <dd className="text-[19px] leading-snug">
            <Txt>{r.v}</Txt>
          </dd>
        </div>
      ))}
      <div className={cn('border-t border-ink/30 py-2', !strip && 'grid grid-cols-[150px_1fr] items-baseline')}>
        <dt className="mono text-[13px] opacity-60">STATUS</dt>
        <dd className="mono text-[14px]">
          <StatusDot tone={project.meta.tone} label={project.meta.status} />
        </dd>
      </div>
    </dl>
  )
}

function Learned({ project, w }: { project: Project; w: number }) {
  return (
    <div data-anim="fade">
      <InfoCard title="WHAT I LEARNED" w={w}>
        <ul className="flex flex-col gap-1">
          {project.learned.map((l) => (
            <li key={l}>
              + <Txt>{l}</Txt>
            </li>
          ))}
        </ul>
      </InfoCard>
    </div>
  )
}

function Links({ project }: { project: Project }) {
  return (
    <div data-anim="fade" className="flex flex-wrap gap-6">
      {project.links.map((l) => (
        <MonoLink key={l.label} label={l.label} href={l.href} />
      ))}
    </div>
  )
}

function Title({ project, size }: { project: Project; size: number }) {
  return (
    <h2 className="line-mask font-display leading-[0.92] tracking-[-0.02em]" style={{ fontSize: size }}>
      <span data-anim="line" className="block">
        {project.title}
      </span>
    </h2>
  )
}

function Extra({ project, at }: { project: Project; at: { x: number; y: number } }) {
  const e = project.extra
  if (!e) return null
  if (e.kind === 'popup')
    return (
      <Sticker x={at.x} y={at.y} rot={4} depth={1.3} dieCut={false}>
        <PopupWindow title={e.caption} src={e.src} w={270} h={170} />
      </Sticker>
    )
  if (e.kind === 'polaroid')
    return (
      <Sticker x={at.x} y={at.y} rot={-6} depth={1.3} dieCut={false}>
        <Polaroid src={e.src} caption={e.caption} w={e.w ?? 250} h={e.h} ratio={e.ratio ?? 0.8} alt={e.caption} />
      </Sticker>
    )
  return (
    <Sticker x={at.x} y={at.y} rot={6} depth={1.3} label={e.caption}>
      <div className="overflow-hidden rounded-[30px] border-[8px] border-ink bg-ink">
        <Media src={e.src} alt={e.caption} className="rounded-[22px]" style={{ width: 150, height: 300 }} />
      </div>
    </Sticker>
  )
}

function shotPoint(f: { x: number; y: number; w: number; h: number }, c: { x: number; y: number }) {
  return { x: f.x + c.x * f.w, y: f.y + BAR + c.y * (f.h - BAR) }
}

/** Callouts that stay inside the screenshot, with boxed captions (layouts A and B). */
function InnerCallouts({ project, f }: { project: Project; f: { x: number; y: number; w: number; h: number } }) {
  return project.callouts.map((c) => {
    const from = shotPoint(f, c)
    const right = c.x < 0.5
    return (
      <Callout key={c.label} from={from} to={{ x: from.x + (right ? 120 : -120), y: from.y - 70 }} captionW={280} captionClassName={BOXED}>
        {c.label}
      </Callout>
    )
  })
}

/** Callouts that radiate out to the side columns in fixed lanes (layout C). */
function RadiatingCallouts({ project, f }: { project: Project; f: { x: number; y: number; w: number; h: number } }) {
  const lanes = [440, 620]
  const left = project.callouts.filter((c) => c.x < 0.5).sort((a, b) => a.y - b.y)
  const right = project.callouts.filter((c) => c.x >= 0.5).sort((a, b) => a.y - b.y)
  return [
    ...left.map((c, i) => (
      <Callout key={c.label} from={shotPoint(f, c)} to={{ x: f.x - 40, y: lanes[i] ?? lanes[1] }} captionW={300}>
        <Txt>{c.label}</Txt>
      </Callout>
    )),
    ...right.map((c, i) => (
      <Callout key={c.label} from={shotPoint(f, c)} to={{ x: f.x + f.w + 40, y: lanes[i] ?? lanes[1] }} captionW={260}>
        <Txt>{c.label}</Txt>
      </Callout>
    )),
  ]
}

function LayoutA({ project }: { project: Project }) {
  const f = FRAME.A
  return (
    <>
      <div data-anim="block" className="absolute" style={{ left: f.x, top: f.y }}>
        <BrowserFrame src={project.image} url={project.url} w={f.w} h={f.h} alt={`${project.title} screenshot`} />
      </div>
      <InnerCallouts project={project} f={f} />
      <Extra project={project} at={{ x: f.x + f.w - 240, y: f.y + f.h - 130 }} />
      <div className="absolute top-[196px] left-[1220px] flex w-[604px] flex-col gap-6">
        <Title project={project} size={84} />
        <p data-anim="fade" className="text-[24px] leading-snug">
          {project.what}
        </p>
        <Meta project={project} />
        <Learned project={project} w={604} />
        <Links project={project} />
      </div>
    </>
  )
}

function LayoutB({ project }: { project: Project }) {
  const f = FRAME.B
  return (
    <>
      <div data-anim="block" className="absolute" style={{ left: f.x, top: f.y }}>
        <BrowserFrame src={project.image} url={project.url} w={f.w} h={f.h} alt={`${project.title} screenshot`} />
      </div>
      <InnerCallouts project={project} f={f} />
      <Extra project={project} at={{ x: 670, y: 640 }} />
      <div className="absolute top-[196px] left-[96px] flex w-[540px] flex-col gap-6">
        <Title project={project} size={76} />
        <p data-anim="fade" className="text-[23px] leading-snug">
          {project.what}
        </p>
        <Meta project={project} />
        <Learned project={project} w={540} />
        <Links project={project} />
      </div>
    </>
  )
}

function LayoutC({ project }: { project: Project }) {
  const f = FRAME.C
  return (
    <>
      <div className="absolute top-[160px] left-[96px] flex w-[1300px] flex-col gap-3">
        <Title project={project} size={84} />
        <p data-anim="fade" className="max-w-[60ch] text-[23px] leading-snug">
          {project.what}
        </p>
      </div>
      <div className="absolute top-[140px] left-[1460px]">
        <Learned project={project} w={364} />
      </div>

      <div data-anim="block" className="absolute" style={{ left: f.x, top: f.y }}>
        <BrowserFrame src={project.image} url={project.url} w={f.w} h={f.h} alt={`${project.title} screenshot`} />
      </div>
      <RadiatingCallouts project={project} f={f} />
      <Extra project={project} at={{ x: 1620, y: 660 }} />

      <div className="absolute top-[852px] left-[480px] w-[960px]">
        <Meta project={project} strip />
      </div>
      <div className="absolute top-[880px] left-[96px]">
        <Links project={project} />
      </div>
    </>
  )
}

export function ProjectSlide({ project }: { project: Project }) {
  const Layout = project.layout === 'A' ? LayoutA : project.layout === 'B' ? LayoutB : LayoutC
  return (
    <Slide surface="paper">
      <FigLabel fig={project.fig} title={project.title} />
      <Layout project={project} />
    </Slide>
  )
}

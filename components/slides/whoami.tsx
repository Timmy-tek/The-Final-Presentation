import { Slide } from '@/components/deck/slide'
import { MonoLabel, StatusDot, Tag } from '@/components/ui/bits'
import { Ticker } from '@/components/ui/blocks'
import { FallbackImg } from '@/components/ui/fallback-img'
import { presenter, whoami } from '@/data/slides'
import { SilhouetteArt } from './shared'

export function WhoamiSlide() {
  return (
    <Slide surface="paper">
      <div data-anim="fade" className="absolute top-[110px] left-[1080px]">
        <FallbackImg src={presenter.silhouette} alt={`Silhouette portrait of ${presenter.firstName}`} className="h-[740px] w-[620px]">
          <SilhouetteArt w={600} />
        </FallbackImg>
      </div>

      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>01_ABOUT</MonoLabel>
      </div>

      <h2 className="line-mask absolute top-[160px] left-[86px] font-display text-[300px] leading-[0.9] tracking-[-0.03em]">
        <span data-anim="line" className="flex items-start gap-4">
          {presenter.wordmark}
          <span aria-hidden className="mt-[36px] inline-block size-[48px] bg-red" />
        </span>
      </h2>

      <span data-anim="wipe" aria-hidden className="absolute top-[500px] left-[96px] h-px w-[1728px] bg-ink" />

      <div className="absolute top-[530px] left-[96px] flex w-[1728px] items-start justify-between">
        <div>
          <p className="line-mask font-display text-[60px] leading-none">
            <span data-anim="line" className="block">
              {whoami.fullName}
            </span>
          </p>
          <p data-anim="mono" className="mt-4 font-mono text-[22px] italic">
            {presenter.tagline}
          </p>
        </div>
        <p data-anim="mono" className="mono mt-4 bg-paper/80 px-2 text-[16px]">
          STATUS: <StatusDot tone="live" label={presenter.status} />
        </p>
      </div>

      <ul className="absolute top-[720px] left-[96px] flex w-[1300px] flex-wrap gap-3" aria-label="Roles">
        {whoami.pills.map((p, i) => (
          <li key={p} data-anim="fade">
            <Tag tone={i === 3 ? 'ink' : 'outline'} size="lg" className="bg-paper">
              {p}
            </Tag>
          </li>
        ))}
      </ul>

      <div data-anim="wipe" className="absolute top-[860px] left-0 w-[1920px]">
        <Ticker items={whoami.ticker} />
      </div>
    </Slide>
  )
}

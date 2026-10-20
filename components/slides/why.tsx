import { Slide } from '@/components/deck/slide'
import { Hand, Lines, MonoLabel } from '@/components/ui/bits'
import { Callout } from '@/components/ui/callout'
import { HandArrow } from '@/components/ui/doodles'
import { InfoCard } from '@/components/ui/frames'
import { why } from '@/data/slides'

export function WhySlide() {
  const [first, ...rest] = why.line1.split(' ')
  return (
    <Slide surface="paper">
      <div className="absolute top-[132px] left-[96px]">
        <MonoLabel>WHY LIVEPETAL</MonoLabel>
      </div>

      <Lines
        className="absolute top-[200px] left-[90px] w-[1200px] font-display text-[84px] leading-[0.98] tracking-[-0.02em]"
        lines={[
          <span key="a" className="text-graphite">
            {first} {rest.join(' ')}
          </span>,
          <span key="b">{why.line2Before.trim()}</span>,
          <span key="c" className="relative inline-block text-[length:120px]">
            <span
              data-anim="wipe"
              aria-hidden
              className="absolute inset-x-[-0.08em] bottom-[0.1em] -z-10 h-[0.42em] bg-yellow "
            />
            {why.line2Highlight}
          </span>,
        ]}
      />

      <div data-anim="fade" className="absolute top-[250px] left-[1380px]">
        <InfoCard title={why.goalTitle} w={430}>
          {why.goalBody}
        </InfoCard>
      </div>

      <Callout from={{ x: 1450, y: 460 }} to={{ x: 1300, y: 690 }} captionW={200}>
        {`[ ${why.notes[0]} ]`}
      </Callout>
      <Callout from={{ x: 1720, y: 460 }} to={{ x: 1680, y: 790 }} captionW={200}>
        {`[ ${why.notes[1]} ]`}
      </Callout>

      <div className="absolute top-[740px] left-[620px] flex items-center gap-2">
        {/*<HandArrow w={130} h={74} flip className="-scale-y-100" />*/}
        <Hand className="text-[56px] text-ink" rot={-5}>
          {why.hand}
            <br/>
            <span className=" text-[length:40px]"> I became a fullstack dev instead 🤦🏻</span>
        </Hand>
      </div>

    </Slide>
  )
}

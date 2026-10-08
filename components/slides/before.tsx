import { Slide } from '@/components/deck/slide'
import { Hand, Tag } from '@/components/ui/bits'
import { LabelBlock } from '@/components/ui/blocks'
import { HandArrow, PaperStar, Sparkle } from '@/components/ui/doodles'
import { FallbackImg } from '@/components/ui/fallback-img'
import { Sticker } from '@/components/ui/sticker'
import { IllustrationDoodle, MiniUIFrame, PixelSprite, PSBadge } from '@/components/ui/sticker-art'
import { before } from '@/data/slides'

const ROT = [-6, 4, -3, 5]

function Art({ item }: { item: (typeof before.items)[number] }) {
  switch (item.kind) {
    case 'photoshop':
      return <PSBadge size={250} />
    case 'illustration':
      return (
        <FallbackImg src={item.src} alt="Digital illustration" className="size-[250px] overflow-hidden bg-white" fit="cover">
          <IllustrationDoodle size={250} />
        </FallbackImg>
      )
    case 'game':
      return (
        <FallbackImg src={item.src} alt="Game asset sprite" className="size-[250px] overflow-hidden bg-white" fit="contain">
          <PixelSprite size={250} />
        </FallbackImg>
      )
    case 'ui':
      return <MiniUIFrame w={300} />
  }
}

export function BeforeSlide() {
  return (
    <Slide surface="mat">
      <LabelBlock as="h2" tone="brown" rot={-3} tape="tr" className="absolute top-[150px] left-[96px] px-8 pt-2 pb-4 text-[110px] leading-none">
        {before.label}
      </LabelBlock>

      <div className="absolute top-[176px] left-[820px] flex items-start gap-3 text-yellow">
        <Hand className="text-[52px]" rot={-4}>
          {before.note}
        </Hand>
        <HandArrow w={140} h={80} className="mt-10" color="#FFE500" />
      </div>

      <Sticker x={1700} y={170} rot={12} depth={1.5} dieCut={false}>
        <PaperStar size={70} />
      </Sticker>
      <Sticker x={1540} y={300} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={30} />
      </Sticker>

      {before.items.map((item, i) => (
        <div
          key={item.kind}
          data-step={i + 1}
          className="absolute flex w-[340px] flex-col items-center gap-6"
          style={{ left: 140 + i * 432, top: 390 }}
        >
          <div className="relative grid h-[290px] w-[340px] place-items-center">
            <Sticker x={0} y={0} rot={ROT[i]} depth={0.6 + i * 0.25} anim="none">
              <div className="grid h-[290px] w-[340px] place-items-center">
                <Art item={item} />
              </div>
            </Sticker>
          </div>
          <Tag tone="yellow" size="lg">{`[ ${item.tag} ]`}</Tag>
          <p className="font-sticker text-[26px] font-medium text-cream">{item.line}</p>
        </div>
      ))}
    </Slide>
  )
}

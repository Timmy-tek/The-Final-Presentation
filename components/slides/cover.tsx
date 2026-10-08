import { Slide } from '@/components/deck/slide'
import { LabelBlock, SelectionBox } from '@/components/ui/blocks'
import { CursorArrow, PaperStar, Sparkle, Toggle, WindowControls } from '@/components/ui/doodles'
import { Polaroid } from '@/components/ui/frames'
import { Sticker } from '@/components/ui/sticker'
import {
  CameraArt,
  EarphonesArt,
  HeadphonesArt,
  KeyboardArt,
  MarkerArt,
  MouseArt,
  PlayBadgeArt,
  WatchArt,
} from '@/components/ui/sticker-art'
import { cover, presenter } from '@/data/slides'

export function CoverSlide() {
  const [thumbA, thumbB] = cover.thumbs
  return (
    <Slide surface="mat" seam={false}>
      {/* collage layer */}
      <Sticker x={40} y={118} rot={-8} depth={0.6}>
        <KeyboardArt w={400} />
      </Sticker>
      <Sticker x={60} y={380} rot={6} depth={0.9} dieCut={false}>
        <EarphonesArt w={220} />
      </Sticker>
      <Sticker x={300} y={790} rot={-14} depth={1.2}>
        <MouseArt w={110} />
      </Sticker>
      <Sticker x={1240} y={128} rot={8} depth={1.1}>
        <PlayBadgeArt w={150} />
      </Sticker>
      <Sticker x={1400} y={178} rot={-3} depth={0.8} dieCut={false}>
        <WindowControls size={40} />
      </Sticker>
      <Sticker x={1560} y={410} depth={1}>
        <Toggle />
      </Sticker>
      <Sticker x={1650} y={452} depth={1.4} dieCut={false} peel={false} bob={false}>
        <span className="cursor-loop block">
          <span className="cursor-press block">
            <CursorArrow size={64} />
          </span>
        </span>
      </Sticker>
      <Sticker x={1770} y={560} rot={14} depth={0.7}>
        <WatchArt w={110} />
      </Sticker>
      <Sticker x={1660} y={760} rot={28} depth={1.2}>
        <MarkerArt w={62} />
      </Sticker>
      <Sticker x={1400} y={770} rot={-6} depth={0.9}>
        <CameraArt w={210} />
      </Sticker>
      <Sticker x={1190} y={800} rot={12} depth={1.3}>
        <HeadphonesArt w={160} />
      </Sticker>

      <Sticker x={330} y={150} rot={-12} depth={1.5} dieCut={false}>
        <PaperStar size={72} />
      </Sticker>
      <Sticker x={960} y={905} rot={10} depth={1.5} dieCut={false}>
        <PaperStar size={58} />
      </Sticker>
      <Sticker x={1840} y={300} rot={20} depth={1.6} dieCut={false}>
        <PaperStar size={56} />
      </Sticker>
      <Sticker x={392} y={575} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={34} />
      </Sticker>
      <Sticker x={1010} y={565} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={28} />
      </Sticker>
      <Sticker x={1500} y={232} depth={1.6} dieCut={false} peel={false}>
        <Sparkle size={30} color="#F3EFCF" />
      </Sticker>

      <Sticker x={1610} y={112} rot={6} depth={0.8} dieCut={false}>
        <Polaroid src={thumbA.src} caption={thumbA.caption} w={210} ratio={0.7} tapeRot={-8} alt={thumbA.label} />
      </Sticker>
      <Sticker x={52} y={660} rot={-7} depth={0.8} dieCut={false}>
        <Polaroid src={thumbB.src} caption={thumbB.caption} w={200} ratio={0.7} tapeRot={6} alt={thumbB.label} />
      </Sticker>

      {/* clean core */}
      <span
        data-anim="fade"
        className="absolute top-[178px] left-[444px] bg-yellow px-3 py-0.5 font-sticker text-[32px] font-bold text-brown"
        style={{ rotate: '-3deg' }}
      >
        {presenter.handle}
      </span>

      <h1 className="sr-only">
        {`${cover.kicker} ${cover.title}: ${presenter.firstName} ${presenter.lastName}`}
      </h1>

      <LabelBlock tone="brown" rot={-4} tape="tl" className="absolute top-[238px] left-[420px] px-10 pt-5 pb-7">
        <span aria-hidden className="block text-[64px] leading-none text-yellow">
          {cover.kicker}
        </span>
        <span aria-hidden className="relative block text-[250px] leading-[0.82]">
          {cover.title}
          <SelectionBox className="-inset-x-4 -top-1 -bottom-4" />
        </span>
      </LabelBlock>

      <p
        data-anim="fade"
        className="absolute top-[622px] left-[452px] font-sticker text-[36px] font-bold text-white"
        style={{ rotate: '-5deg' }}
      >
        {cover.captionTop}
      </p>

      <LabelBlock tone="yellow" rot={3} tape="tr" className="absolute top-[598px] left-[1030px] px-8 pt-1 pb-3">
        <span aria-hidden className="block text-[128px] leading-none">
          {presenter.firstName.toUpperCase()}
        </span>
      </LabelBlock>

      <LabelBlock tone="white" rot={-2} tape="bl" className="absolute top-[730px] left-[520px] px-8 pt-1 pb-3">
        <span aria-hidden className="block text-[112px] leading-none">
          {presenter.lastName.toUpperCase()}
        </span>
      </LabelBlock>

      <p
        data-anim="fade"
        className="absolute top-[882px] left-[700px] font-sticker text-[34px] font-bold text-white"
        style={{ rotate: '3deg' }}
      >
        {cover.captionBottom}
      </p>
    </Slide>
  )
}

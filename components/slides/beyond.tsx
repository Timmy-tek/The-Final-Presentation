import React from "react"
import { Slide } from "@/components/deck/slide"
import { Hand } from "@/components/ui/bits"
import { LabelBlock } from "@/components/ui/blocks"
import { DoodleIcon, PaperStar, Sparkle } from "@/components/ui/doodles"
import { Sticker } from "@/components/ui/sticker"
import { Polaroid } from "@/components/ui/frames"
import { Txt } from "@/components/ui/txt"
import { beyond } from "@/data/slides"

const ROT = [-2, 1.5, -1, 2]

export function BeyondSlide() {
    return (
        <Slide surface="mat">
            <LabelBlock as="h2" tone="brown" rot={-3} tape="tl" className="absolute top-[150px] left-[96px] px-8 pt-2 pb-4 text-[110px] leading-none">
                {beyond.label}
            </LabelBlock>
            <div className="absolute top-[200px] left-[900px] text-yellow">
                <Hand className="text-[54px]" rot={-5}>
                    {beyond.note}
                </Hand>
            </div>

            <Sticker x={1720} y={160} rot={-10} depth={1.5} dieCut={false}>
                <PaperStar size={76} />
            </Sticker>
            <Sticker x={1560} y={250} depth={1.6} dieCut={false} peel={false}>
                <Sparkle size={30} />
            </Sticker>

            {/* 1. Cards render first in the DOM tree */}
            <ul className="absolute top-[400px] left-[96px] grid w-[1728px] grid-cols-4 gap-7">
                {beyond.cards.map((c, i) => (
                    <React.Fragment key={c.title}>
                        <li
                            data-step={i + 1}
                            className="flex h-[480px] flex-col gap-5 rounded-[28px] bg-white p-8 text-ink shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
                            style={{ rotate: `${ROT[i]}deg` }}
                        >
              <span className="grid size-[96px] place-items-center rounded-[22px] bg-lime">
                <DoodleIcon kind={c.icon} size={64} />
              </span>
                            <span className="mono text-[13px] opacity-60">{`0${i + 1} / 04`}</span>
                            <h3 className="font-sticker text-[48px] leading-none font-extrabold tracking-[-0.02em]">{c.title}</h3>
                            <p className="text-[25px] leading-snug">
                                <Txt>{c.story}</Txt>
                            </p>
                        </li>
                    </React.Fragment>
                ))}
            </ul>

            {/* 2. Images render after the cards and use a higher z-index (z-40) */}
            {beyond.cards.map((c, i) => (
                i === 0 && (
                    <React.Fragment key="teamwork-photos">
                        <Sticker x={80} y={350} rot={-12} depth={2} className="z-40" dieCut={false}>
                            <div data-step={1}>
                                <Polaroid src="/images/people/interns.jpg" caption="Teammate 1" w={180} ratio={1} tapeRot={-10} className="shadow-none" />
                            </div>
                        </Sticker>
                        <Sticker x={380} y={750} rot={8} depth={1.8} className="z-40" dieCut={false}>
                            <div data-step={1}>
                                <Polaroid src="/images/people/family.jpg" caption="Teammate 2" w={160} ratio={1} tapeRot={6} className="shadow-none" />
                            </div>
                        </Sticker>
                    </React.Fragment>
                )
            ))}
        </Slide>
    )
}
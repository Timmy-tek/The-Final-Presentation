'use client'

import { ArrowUpRight, X } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import type { CardTone } from '@/data/slides'
import { cn } from '@/lib/utils'
import { Tape } from './bits'
import { WindowControls } from './doodles'
import { Media } from './media'
import { Txt } from './txt'

/* ---------- Polaroid ---------- */
export function Polaroid({
  src,
  caption,
  w = 300,
  ratio = 1,
  tape = true,
  tapeRot = -4,
  className,
  alt,
  note,
}: {
  src?: string
  caption?: string
  note?: string
  w?: number
  ratio?: number
  tape?: boolean
  tapeRot?: number
  className?: string
  alt?: string
}) {
  return (
    <figure className={cn('relative bg-white p-3 pb-0 soft-shadow', className)} style={{ width: w }}>
      {tape && <Tape className="-top-4 left-1/2 -translate-x-1/2" rot={tapeRot} w={w * 0.42} />}
      <Media
        src={src}
        alt={alt ?? caption ?? ''}
        className="w-full"
        style={{ aspectRatio: `1 / ${ratio}` }}
        hint={`${Math.round(w * 2)} x ${Math.round(w * 2 * ratio)}`}
      />
      <figcaption className="flex min-h-[64px] flex-col justify-center gap-1 px-1 py-2 font-hand text-[28px] leading-none font-bold text-ink">
        {caption ? (
          <span>
            <Txt>{caption}</Txt>
          </span>
        ) : null}
        {note ? (
          <span className="text-[22px] font-semibold opacity-80">
            <Txt>{note}</Txt>
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}

/* ---------- BrowserFrame ---------- */
export function BrowserFrame({
  src,
  url,
  w,
  h,
  className,
  alt,
  dark = false,
}: {
  src?: string
  url: string
  w: number
  h: number
  className?: string
  alt?: string
  dark?: boolean
}) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[14px] border-[1.5px] border-ink bg-white soft-shadow',
        dark && 'border-cream/30 bg-[#1a1a1a]',
        className,
      )}
      style={{ width: w, height: h }}
    >
      <div className={cn('flex h-[44px] items-center gap-4 border-b-[1.5px] border-ink px-4', dark && 'border-cream/30')}>
        <WindowControls size={18} />
        <span className="mono flex-1 truncate rounded-full border border-ink/40 px-4 py-1 text-center text-[12px] normal-case tracking-[0.04em] text-ink/70">
          {url}
        </span>
        <span className="w-[66px]" />
      </div>
      <Media
        src={src}
        alt={alt ?? url}
        className="w-full"
        style={{ height: h - 44 }}
        hint={`${w * 2} x ${(h - 44) * 2}`}
        tone={dark ? 'dark' : 'light'}
      />
    </div>
  )
}

/* ---------- InfoCard ---------- */
export function InfoCard({
  title,
  children,
  className,
  w = 380,
  dark = false,
}: {
  title: string
  children: ReactNode
  className?: string
  w?: number
  dark?: boolean
}) {
  return (
    <div
      className={cn('relative border-[1.5px] bg-paper', dark ? 'border-cream bg-ink text-cream' : 'border-ink text-ink', className)}
      style={{ width: w, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 22px 100%, 0 calc(100% - 22px))' }}
    >
      <div className="flex items-center justify-between gap-3 p-2 pb-0">
        <span className={cn('mono px-2 py-0.5 text-[14px] font-bold', dark ? 'bg-cream text-ink' : 'bg-ink text-paper')}>
          <Txt>{title}</Txt>
        </span>
        <span aria-hidden className={cn('grid size-5 place-items-center border', dark ? 'border-cream' : 'border-ink')}>
          <X className="size-3" strokeWidth={2.5} />
        </span>
      </div>
      <div className="mono p-4 pt-3 text-[15px] leading-[1.45]">{children}</div>
    </div>
  )
}

/* ---------- PopupWindow ---------- */
export function PopupWindow({
  title,
  src,
  w = 300,
  h = 200,
  className,
  children,
  dark = false,
}: {
  title: string
  src?: string
  w?: number
  h?: number
  className?: string
  children?: ReactNode
  dark?: boolean
}) {
  const [open, setOpen] = useState(true)
  return (
    <div
      className={cn(
        'border-[1.5px] bg-white soft-shadow transition-[opacity,scale] duration-200',
        dark ? 'border-cream/70 bg-ink text-cream' : 'border-ink text-ink',
        !open && 'pointer-events-none scale-90 opacity-0',
        className,
      )}
      style={{ width: w }}
    >
      <div className={cn('flex h-8 items-center justify-between border-b-[1.5px] px-2', dark ? 'border-cream/70' : 'border-ink')}>
        <span className="mono truncate text-[12px] normal-case tracking-[0.06em]">{title}</span>
        <button
          type="button"
          data-interactive
          aria-label={`Close ${title}`}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(false)
          }}
          className={cn('grid size-5 place-items-center border', dark ? 'border-cream' : 'border-ink')}
        >
          <X className="size-3" strokeWidth={2.5} />
        </button>
      </div>
      <div className="p-1.5" style={{ height: h }}>
        {children ?? <Media src={src} alt={title} className="size-full" tone={dark ? 'dark' : 'light'} hint="looping gif / mp4" />}
      </div>
    </div>
  )
}

/* ---------- ColorCard ---------- */
const cardTones: Record<CardTone, string> = {
  orange: 'bg-orange text-ink',
  purple: 'bg-purple text-ink',
  lime: 'bg-lime text-ink',
  ink: 'bg-ink text-cream',
  white: 'bg-white text-ink border-[1.5px] border-ink',
}

export function ColorCard({
  tone,
  eyebrow,
  title,
  children,
  className,
}: {
  tone: CardTone
  eyebrow?: string
  title: ReactNode
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={cn('relative flex flex-col rounded-[28px] p-7 pb-24', cardTones[tone], className)}>
      {eyebrow && <span className="mono mb-5 text-[14px] opacity-80">{eyebrow}</span>}
      <div className="font-sticker text-[40px] leading-[1.02] font-extrabold tracking-[-0.02em]">{title}</div>
      {children && <div className="mt-3 text-[20px] leading-snug">{children}</div>}
      <span
        aria-hidden
        className="absolute right-0 bottom-0 grid size-[92px] place-items-center rounded-tl-[28px] bg-paper"
      >
        <span
          data-step-spin
          className="grid size-[64px] place-items-center rounded-full border-[1.5px] border-ink bg-white text-ink"
        >
          <ArrowUpRight className="size-8" strokeWidth={1.75} />
        </span>
      </span>
    </div>
  )
}

/* ---------- StatCard ---------- */
export function StatCard({
  value,
  suffix = '',
  label,
  className,
  dark = false,
}: {
  value: string
  suffix?: string
  label: string
  className?: string
  dark?: boolean
}) {
  const numeric = /^\d+$/.test(value)
  return (
    <div className={cn('border-t-[1.5px] pt-4', dark ? 'border-cream' : 'border-ink', className)}>
      <div className="font-display text-[120px] leading-[0.9] tracking-[-0.02em]">
        {numeric ? (
          <span data-anim="count" data-value={value} data-suffix={suffix}>
            {value}
            {suffix}
          </span>
        ) : (
          <Txt className="text-[56px] align-middle">{value}</Txt>
        )}
      </div>
      <p className="mono mt-3 text-[15px]">
        <Txt>{label}</Txt>
      </p>
    </div>
  )
}

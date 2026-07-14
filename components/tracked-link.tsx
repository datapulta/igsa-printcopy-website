"use client"

import Link, { type LinkProps } from "next/link"
import { captureEvent } from "@/lib/posthog"
import type { AnchorHTMLAttributes, ReactNode } from "react"

type EventProperties = Record<string, string | number | boolean | null | undefined>

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string
  properties?: EventProperties
  children: ReactNode
}

export function TrackedAnchor({ event, properties, onClick, children, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        captureEvent(event, properties)
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}

type TrackedLinkProps = LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
  event: string
  properties?: EventProperties
  children: ReactNode
}

export function TrackedLink({ event, properties, onClick, children, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        captureEvent(event, properties)
        onClick?.(e)
      }}
    >
      {children}
    </Link>
  )
}

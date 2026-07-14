"use client"

import posthog from "posthog-js"

export function captureEvent(event: string, properties?: Record<string, string | number | boolean | null | undefined>) {
  posthog.capture(event, properties)
}

export function captureException(error: unknown, properties?: Record<string, string | number | boolean | null | undefined>) {
  if (error instanceof Error) {
    posthog.captureException(error, properties)
    return
  }

  posthog.captureException(new Error("Unknown client error"), {
    ...properties,
    original_error_type: typeof error,
  })
}

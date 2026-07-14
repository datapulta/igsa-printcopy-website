# PostHog post-wizard report

The wizard has completed a PostHog integration for this Next.js App Router project using `instrumentation-client.ts`, a reverse-proxy ingestion rewrite in `next.config.mjs`, reusable client tracking helpers, and targeted event instrumentation across the main lead-generation journeys. Environment variables were written to `.env.local`, `posthog-node` was added for future server-side expansion, and the integration was verified with a successful production build.

| Event name | Description | File |
| --- | --- | --- |
| navigation_menu_toggled | Tracks when the mobile navigation menu is opened or closed. | components/header.tsx |
| navigation_link_clicked | Tracks when a visitor selects a primary navigation destination. | components/header.tsx |
| whatsapp_quote_clicked | Tracks when a visitor starts a WhatsApp quote flow from a major call to action. | components/header.tsx, components/floating-whatsapp.tsx |
| homepage_primary_cta_clicked | Tracks when a visitor clicks a primary homepage call to action. | components/home/hero-section.tsx |
| services_preview_clicked | Tracks when a visitor opens the services catalog from the homepage preview section. | components/home/services-preview.tsx |
| faq_whatsapp_clicked | Tracks when a visitor asks a question from the FAQ section via WhatsApp. | components/home/faq-section.tsx |
| contact_method_clicked | Tracks when a visitor selects a contact method on the contact page. | app/contacto/page.tsx |
| location_directions_clicked | Tracks when a visitor opens directions or maps for a branch location. | app/contacto/page.tsx |
| new_location_action_clicked | Tracks when a visitor copies the new address or opens turn-by-turn directions. | app/nuevo/page.tsx |
| services_cta_clicked | Tracks when a visitor requests a quote or opens a service detail path. | app/servicios/page.tsx |
| rigid_material_quote_clicked | Tracks when a visitor requests a quote for rigid material printing. | app/servicios/rigidos/page.tsx |
| giveaway_registration_clicked | Tracks when a visitor starts the giveaway registration flow from the campaign page. | app/_sorteo/page.tsx |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard)](https://us.posthog.com/project/510799/dashboard/1843672)
- [WhatsApp quote clicks (wizard)](https://us.posthog.com/project/510799/insights/t5xvbpjt)
- [Contact methods selected (wizard)](https://us.posthog.com/project/510799/insights/n70BTwYV)
- [Services CTA engagement (wizard)](https://us.posthog.com/project/510799/insights/XwjnBSWJ)
- [Giveaway registrations (wizard)](https://us.posthog.com/project/510799/insights/gU7yqeHZ)
- [Services to contact funnel (wizard)](https://us.posthog.com/project/510799/insights/glvInpei)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names you added to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

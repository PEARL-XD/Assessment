# Digital Marketing Doctor — React landing page

A frontend-only landing-page concept for a website developer assessment. It explores an alternative visual direction for Digital Marketing Doctor and demonstrates React development, responsive layout, accessible interactions and purposeful animation. The existing professional website provides the business context, service offering and portfolio references.

## Run locally

Requirements: Node.js 22.12+ or a newer supported LTS version, and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To build for submission:

```sh
npm run build
npm run preview
```

`dist/` contains the production build. It can be served by any static web host.

## Included

- React with Vite; local Manrope fonts and Lucide icons.
- Responsive landing page with a compact mobile menu.
- Service tabs with arrow-key, Home and End navigation.
- Three visible client cards, a results/website-preview switch and native modal dialogs with Escape support.
- FAQ accordions and reduced-motion support.
- Staggered hero entrances, one-time scroll reveals, service and dialog transitions, and card/button hover feedback. Animations settle quickly; there is no continuous movement.
- Scroll reveals use the native IntersectionObserver API. Content stays visible if that API is unavailable, becomes visible immediately on keyboard focus, and respects changes to the reduced-motion preference.
- Browser-validated name, email and URL inputs; the hero carries the website address into the audit form and service actions preselect the relevant service.
- A demo completion state that explicitly says nothing was sent or saved.
- No backend, database, analytics, remote imagery or external font requests.

## Submission notes

Read `ASSESSMENT.md` for the short review and design rationale.

Client and company figures are reported on the original agency website, not independently verified. Portfolio images are actual previews published by the agency; source references are in `ASSETS.md`. The service illustrations are original HTML/CSS examples. The three percentage changes are rounded calculations: (after − before) ÷ before × 100. The proposed audit scope and process are concept copy. Contact links use the agency’s publicly listed details and open an email or phone application only when clicked.

This is an independent redesign concept; do not present it as an official live website. The form intentionally has no network submission or data storage.

# Validation

Checked locally on 10 October 2026.

- Production build: `npm run build` passes.
- Local preview responds with HTTP 200.
- No horizontal page overflow at 320px, 390px, 768px and 1280px CSS viewport widths.
- Desktop and phone layouts reviewed visually.
- Mobile menu opens, closes and dismisses after selecting a section.
- Service tabs update their content; arrow-key navigation changes the active tab.
- Service actions select the corresponding option in the audit form.
- All three client cards are visible; the portfolio switch changes between results and website previews.
- Result dialogs open and close with Escape.
- FAQs open the selected answer and close the previous answer.
- Empty audit requests are blocked by the required name, email and URL fields.
- The hero transfers the entered website address to the audit form and focuses the name field.
- Valid sample details show the demo completion message without a backend request.
- The final page loads without new browser warnings or errors. Two temporary Vite reload errors occurred while renaming the revision files; a fresh page load resolves them.

## Version 3 motion checks

- Hero entrances recorded from the live browser; all elements settle into the original layout.
- Scroll reveals become visible on entry and run once. No pending reveal remained within the phone viewport after navigation.
- Focusing the audit form reveals it immediately and retains the selected service.
- Animated service switching retains arrow-key navigation, tab selection and panel content.
- Result dialogs still open and close with Escape; the phone menu closes after section selection.
- No horizontal overflow at 320px, 390px, 768px and desktop widths.
- No new browser warnings or errors during the motion checks.
- Reduced-motion handling and live preference cleanup reviewed in source. The system preference was not changed during browser checks.

This is a manual build, layout and interaction check. It is not a formal accessibility certification, performance benchmark, or test of backend delivery.

## Version 4 typography checks

- Confirmed larger body copy, navigation, labels and buttons in the browser; audit fields render at 16px.
- Desktop and phone previews reviewed visually.
- No horizontal overflow at 320px, 390px, 641px, 768px and 1280px.
- Navigation fits immediately above the mobile menu breakpoint.
- The long Website Development action fits on a 320px phone and selects the correct form option.
- Tablet agency copy remains clear of the heading; the smallest-phone hero form stacks its controls.

# Draft verification

## Blue immersive revision — 31 October 2026

- Restored original blue identity; removed the interim botanical palette. All eight page sections now have transparent surfaces over one continuous blue gradient, verified from rendered styles.
- Inspected the full desktop page and mobile layout. At 1440px and 390px, document width remained within the viewport. Mobile focus areas now use one readable column.
- Verified watch-float animation is active. The Pause motion control pauses watch, ribbon and ambient layers; Resume motion restores them. Reduced-motion CSS and preference-change handling were inspected; OS-level preference switching remains untested.
- Compass interest matching, save to My Conclave, opening the drawer and removing the test interest passed. No changes to registration or factual content.
- JavaScript and server syntax passed. Preview verified at port 4175; the server now prints the actual configured port.
- Replaced white section/input/notification surfaces with blue; kept light text for contrast. Added a feathered ribbon mask and a continuous SVG current behind the content.


Verified 30 October 2026 in the Codex in-app Chromium browser against the local HTTP server.

## Passed

- Visual inspection at 1440px desktop, 820px tablet, 390px mobile and 320px narrow mobile. No horizontal document overflow at these widths. Full mobile and desktop screenshots are in the local `qa/` directory.
- Compass multiple-interest selection, clear selection, relevant personal action, interest saving and removal.
- My Conclave restores interests and a completed personal intention after reload. Clear-all cancellation preserves choices; confirmation removes them and remains empty after reload.
- Personal time selection, save, mark done, undo completion and removal. No shared total.
- Native dialogs close with Escape and restore focus. Mobile menu section navigation restores focus to the destination section.
- Edition selection, previous/next navigation and disabled boundary controls. Missing archive entries stay explicitly unverified.
- Demo form empty-field errors, valid sample-input result, and clearing name/email when closed. The result explicitly says the visitor is not registered.
- Download control requests a text export and shows an honest browser-download message. No browser console warning/error appeared in this final smoke check.
- JavaScript/server syntax, unique HTML and topic IDs, internal anchor targets, referenced asset files and JSON parsing.
- Source inspection: no name/email persistence, no registration request, no invented programme/archive entries. Self-hosted fonts; reduced-motion CSS disables transitions and smooth scrolling.

## Fixes made during verification

- Stabilized Compass checkbox accessible names when selected.
- Restored focus to the selected section after mobile navigation.
- Added the original prototype logo and retained attribution/license material.
- Added static/no-JavaScript content fallback.
- Made export status describe a download request rather than falsely asserting file delivery.

## Limits and launch checks

- Responsive emulation is not physical-device or Safari/Firefox testing. Complete these and a screen-reader review before public launch.
- Reduced-motion rules were inspected; OS preference emulation was not exercised.
- The browser automation download-completion hook did not resolve. Export invocation is verified, but delivery of the resulting file to the user's Downloads folder is not independently verified.
- Approved event matching/bookmarks and a live official registration link are implemented but cannot be validated against committee data until that data exists.
- No registration backend, payment, email, analytics or shared account service is connected. This draft cannot issue admission or a valid ticket.
- Committee approval is still required for institution/committee wording, logo use, themes, date/venue, programme, historical evidence, participation routes, contacts, accessibility details, privacy wording and registration destination.

All test-only personal choices were removed from the local preview after testing.

## Stronger color bleed — 31 October 2026

Replaced the subtle linear blue background with five overlapping cobalt/cyan-blue radial pools and deeper navy intervals. Inspected the rendered full page; transitions remain continuous. Base body-text contrast against the brightest opaque stops is 5.69:1 (cobalt) and 5.20:1 (cyan-blue); transparent overlay combinations were visually reviewed, not exhaustively measured. Animation and layout code are unchanged.


## Section hierarchy refinement — 31 October 2026

Darkened translucent focus/Compass/action/registration tiles, added two alternating navy washes with feathered ends, and 1px low-opacity gradient dividers. Raised wave opacity modestly. Verified computed alternating washes and divider height across all sections, inspected desktop/mobile rendering, and confirmed no mobile horizontal overflow at 390px. No interaction or event-content changes.


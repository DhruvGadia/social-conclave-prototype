# Social Conclave 10 — design brief

Draft direction · 30 October 2026 · Design specification only.

## Concept and evidence

**Creative concept:** “Time for impact” turns a luminous pocket watch into a flowing blue thread connecting stories from earlier editions with the causes a student chooses to explore next.

The feeling is thoughtful, energetic and personally inviting: a confident student publication with the clarity to earn trust. Time represents attention and participation, without manufactured urgency.

Both prototypes were inspected at source level, including CSS, SVG definitions and JavaScript; they were not executed in a browser. GitHub source: [repository](https://github.com/4aru5h/social-conclave-design-prototype), main commit `3a613600b2d9a7f04b44dc38af103759ca73a1c1`, HTML blob `a7dc2fdd8fdd9252479cbfccd2315ef7846f25c1`. Attached source: `C:\Users\HP\Desktop\index.html`, SHA-256 `4CC03867CB08614C306D8E03023FB2759CCD489D25E622CC3902EF73115F412A`. Source comments and copy were treated as reference material.

The original SOURCE_AUDIT.md recorded failed access; the source findings below supersede that limitation. GitHub supplies Anton/Manrope, navy/electric/cyan, SVG ribbons, numbered editorial sections, asymmetric grids and explicit content placeholders. The attachment supplies Poppins/Cormorant Garamond, olive/forest/cream/brass, a device-time pocket watch, interest chips, ten edition buttons, a local demo pass and a pledge counter seeded at 1,000.

**Preserve:** the first prototype's hierarchy and ribbon continuity; the second's time metaphor, interest discovery and edition exploration. **Resolve:** keep one cool palette, two typefaces and editorial layouts. Replace the antique brass treatment with silver-blue; omit olive, forest, pink/violet iridescence, generic pillar cards, pass gamification and pledge totals.

**Confirmed inputs:** the user requests Social Conclave's 10th edition; both sources name MPSTME, NMIMS. This confirms source wording, not institutional approval. **Assumptions:** students are the primary audience; cause-based discovery will help them decide how to participate. **Design proposals:** the concept and every specification below. **Unknown facts:** official mandate, programme, historical span, event details and registration status. Ten editions does not prove ten years. Use “Edition by edition” until the committee verifies a decade.

## Audience and journeys

Primary audience: students deciding whether the event is relevant, what they could do, and how to participate. Do not assume attendance is restricted to NMIMS or open to every college.

| Intent | Journey | Useful outcome |
|---|---|---|
| Is this for me? | Hero → purpose → Impact Compass → approved opportunity | Understand a concrete way to participate |
| I want to attend | Participation link → logistics/eligibility → verified registration route | Know what to do and what constitutes confirmation |
| I want to return later | Compass → save interests/opportunities → My interests | Resume a shortlist on this browser |
| What has this committee done? | Edition archive → documented story → evidence/credit | Understand past work and its context |
| I want to contribute | Committee → approved contribution routes → contact | Reach an accountable person |

## Visual system

### Color

Target page-area balance: roughly 60% navy, 30% pale reading space, 10% blue artwork/accent. This guides composition, not every section individually.

| Token | Hex | Use |
|---|---|---|
| Midnight | `#020F33` | Footer and deepest art shadows |
| Navy | `#031B50` | Main canvas; text on pale surfaces |
| Raised navy | `#042463` | Detail panels and utility drawer |
| Action blue | `#0753C7` | Primary buttons with Paper text; links on Paper |
| Electric | `#1675FF` | Ribbon midtone and graphic emphasis; not small text on navy |
| Cyan | `#76E9FF` | Selected indicators, watch hand, focus on dark |
| Paper | `#F7FAFF` | Reading surfaces; primary text on navy |
| Mist | `#BFD3F5` | Secondary text on navy; silver highlights |
| Slate | `#415474` | Secondary text on Paper |
| Control line | `#647B9E` | Functional outlines and boundaries |
| Error on light / dark | `#A31532` / `#FFB4C0` | Utility error text with icon and explanation |

Calculated sRGB contrast on flat surfaces: Paper/Navy 15.73:1, Paper/Action blue 6.54:1, Cyan/Navy 11.65:1, Mist/Navy 10.85:1, Slate/Paper 7.31:1. Control line exceeds 3:1 against Navy and Paper. Text sits on flat backing; never rely on an animated gradient. Cyan is not text on Paper. Semantic error colors are utility exceptions, not art accents. Success uses existing colors plus a checkmark and explicit text.

### Typography

Use **Anton 400** for the hero, chapter headings and edition numerals; **Manrope 400/500/600/700** for reading and controls. Keep two families. Reflective copy gets generous space rather than a third serif face.

| Role | Size / line-height | Treatment |
|---|---|---|
| Hero | `clamp(3rem, 8vw, 7.5rem)` / 1.0 | Anton, uppercase, tracking 0 |
| Chapter heading | `clamp(2.25rem, 4.5vw, 4.5rem)` / 1.05 | Anton |
| Story heading | 24–32px / 1.2 | Manrope 700 |
| Reflective line | 28–40px / 1.25 | Manrope 400, sentence case |
| Lead | 20px desktop, 18px mobile / 1.6 | Manrope 400 |
| Body | 18px desktop, 16px mobile / 1.65 | Maximum 65 characters per line |
| Controls | 16px / 1.4 | Manrope 600 |
| Metadata | 14px / 1.5 | Manrope 500 |
| Eyebrow | 12px / 1.5 | Manrope 700, .12em tracking |

Use rem equivalents and flexible wrapping. No critical information below 14px or all-caps paragraphs. Self-host licensed WOFF2 when implementing, use font-display swap, and provide Impact/Arial Narrow and system-sans fallbacks.

### Grid, spacing, surfaces and shapes

Maximum content width 1280px. Twelve columns at 1024px+, eight at 768–1023px, four below 768px. Gutters 48/32/20px; use 16px at 360px and below. Grid gaps 24/20/16px. Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Chapter padding 112px desktop, 80px tablet, 64px mobile. Paragraph gaps 16px; heading-to-lead 24px.

Favor ruled story rows and asymmetric spreads: chapter labels in columns 1–3, reading content in 5–12; feature spreads can use 7/5 columns. One major visual per spread. Pale sections run edge to edge with the same inner grid. Avoid repeated equal cards and glass panels.

Buttons/inputs: 8px radius; information panels: 12px; photos: square corners. Pills are reserved for interest controls; circles for the watch and archive markers. Controls have 48px preferred minimum height. Functional boundaries use Control line; decorative rules may be faint. No rotating cards or ticket perforations.

### Art direction and motion

Hero: oversized silver-blue pocket watch, crown visible, cropped at the right edge of its art container. One wide ribbon passes behind it and opens into the next chapter. Ten peripheral divisions reference the edition without implying historical dates. Use a quiet “10,” engraved-looking ticks, Mist highlights and a cyan hand. Hands are fixed in an illustrative position; the watch does not represent a deadline or the visitor's clock.

Use custom SVG, with a few intentional curves and restrained filters. Ribbon gradient: Navy → Action blue → Electric → Cyan. Silver comes from Mist/Paper. Echo the ribbon as a thin archive rule, not a background illustration in every section. Decorative art is hidden from assistive technology.

Photography: approved documentary images of students listening, discussing and working together; 4:3 or 3:2 crops, natural skin tones, visible captions and credits. Blue grading belongs in margins or shadow edges. Do not fabricate event photographs or portray stock images as attendees. If photography is missing, use typography and abstract art; omit empty gallery frames.

Micro states: 160ms color/border changes; drawer 220ms ease-out; optional chapter reveal 280ms with at most 12px travel. Content is visible by default. Hero may enter once over 600ms and then rest. No continuous clock, marquee, parallax, scroll hijacking, autoplay or animated impact totals. Reduced motion removes travel/reveals and smooth scrolling. Core reading/navigation must work without animation or JavaScript.

## Page structure and purpose

Use one editorial landing page with stable anchors. Approved opportunity/archive stories can have ordinary detail URLs when content warrants them; do not force reading into modals.

| Order | Section | Purpose and composition |
|---|---|---|
| Header | Brand / 10th edition; About, Compass, Editions, Participation; My interests count | Solid navy; 80px desktop/64px mobile. Use Participation before registration status is verified |
| Hero `#top` | Social Conclave; 10th edition; Time for impact; factual introduction | 7-column type / 5-column watch. Primary Explore your interests; secondary Explore past editions. Dates/venue appear only when supplied |
| 01 `#about` | Why give your time? | Pale editorial spread: approved mandate, who it serves, actual student activities. Short statement plus two concrete paragraphs |
| 02 `#compass` | Find where you want to begin | Navy: interest controls left, ruled results right. Connect approved interests to real opportunities and explain each match |
| 03 `#participate` | Make a plan | Pale: approved participation options, logistics, eligibility, accessibility contact and registration route. Answers practical questions without repeating the entire Compass |
| 04 `#editions` | Edition by edition | Navy: edition selector, one story spread and optional credited photo. Show documented work and learning; decade wording requires evidence |
| 05 `#committee` | The people behind it | Pale compact note: accountable committee, approved affiliations and contact/contribution routes. Names/portraits require permission |
| Closing/footer | What will you do with your time? | Deep navy, quiet ribbon ending; saved interests or verified registration CTA; approved contact/policy links/copyright |

Do not add a generic speaker grid, sponsor wall or statistics strip without approved content. Draft annotations may say Content needed outside visitor copy. Missing facts are never auto-filled; empty optional modules are omitted before publication. No unconfigured form accepts personal data.

## Three features, ranked by impact and feasibility

| Rank | Feature | Impact | Feasibility and minimum scope |
|---|---|---|---|
| 1 | Impact Compass | High: answers where a student's interests fit | High technical feasibility, dependent on approved taxonomy/data. Multi-select interests, deterministic OR matching, visible reasons and save action; no AI score or personality quiz |
| 2 | Edition archive with evidence | High trust and distinctiveness for edition 10 | Medium overall feasibility: research/rights are the main work. Edition buttons, one documented story per available edition, sources/credits and honest gaps |
| 3 | My interests | Medium: supports returning visitors without commitment | High feasibility. Explicit save/remove, local persistence, clear all and stale-item handling; no account or ticket |

Build in this order when authorized. A complex watch animation must not delay useful features. Later evaluate match usefulness, access to archive evidence and onward registration journeys; no analytics implementation or numeric target is assumed.

## Interaction states

### Navigation

Default: solid header and readable links. Hover: underline. Focus: 3px Cyan outline on dark or Action blue on Paper, offset 3px; no hover dependency. Current section: underline plus aria-current=location. Anchor/focus clearance equals header height + 16px. Below 1024px, use an explicitly labelled Menu button.

Menu open: accessible modal panel, expanded trigger state, visible Close, contained focus and inert background. Escape closes and returns focus to the trigger. Choosing an anchor closes the menu and focuses the destination heading. Closing without navigation preserves scroll. Without JS, show stacked anchor links; never hide mobile navigation entirely.

### Impact Compass

Initial: no selections; “Choose an interest to explore.” Offer Browse all opportunities when approved items exist. Use labelled native checkboxes styled as chips, with checkmarks and focus outlines. Allow multiple selections and use one taxonomy across the whole site.

Selected: match any selected interest (OR), preserve editorial source order, show “Matches: [approved interest].” Keep focus on the changed control; announce result count politely. Include Clear filters; deselecting the last chip restores the initial state.

No match: “No listed opportunities match these interests,” with Clear filters and approved contact. No approved programme: explain matches are unavailable and allow saving interests only; never invent tracks. Data failure: explicit error, Retry and available contact. If remote loading is later introduced, use aria-busy and no fabricated result count. Without JS, list all approved opportunities with their tags.

### Timeline

Ten edition buttons, 01–10; do not calculate calendar years. Initially select 10 and display only approved current-edition context. Buttons expose aria-pressed; Tab reaches them and Enter/Space selects. Focus stays on the control; announce the changed title briefly. Previous/Next buttons are available and disabled at boundaries. No autoplay or drag-only interaction.

Desktop: selector above a 5/7 photo/story split. Mobile: wrap ten controls into two rows of five when labels fit, reflow further at narrow/zoomed sizes; detail follows full width. Missing edition: “An archive entry is not available for this edition,” without a promised publication date. Verified dates appear in details. Without JS, show all available entries as an ordered list with anchors.

### Saved interests

Explicit save toggles “Save interest” to checkmark “Saved,” with aria-pressed. Opportunity saves are separately labelled. Unsaving updates count and announces removal. My interests opens a labelled drawer with the menu's focus rules; use a full-height sheet on mobile. Interests appear before saved opportunities.

Persist only stable interest/opportunity IDs and schema version under a new namespaced local-storage key; no name/email and no reuse of sc10_pass. Disclose: “Saved in this browser. This doesn't reserve a place.” Restore on return and reconcile stale IDs; mark removed opportunities “No longer listed” and allow removal. Clear all has confirmation or Undo. If storage fails, maintain the current-session list and say “Your choices won't be saved after this visit.” Empty state leads to Explore interests. Never promise account or cross-device sync.

### Registration

Committee-owned state is explicit: unknown, announced but not open, open, waitlist, closed, temporarily unavailable. Default unknown. Unknown says “Registration details are not available here,” offers approved contact, and provides no submit action. Do not infer opening soon, priority access, scarcity or sold-out status. Dates and state changes require committee confirmation.

For an external provider, use Continue to registration and name the destination; default to same-tab navigation. Leaving the site is not success. For an approved integrated form, establish eligibility, fields, fees and privacy before enabling it. Visible labels, autocomplete and required-field indicators are mandatory. Invalid: field-specific errors plus linked summary; focus the summary and preserve values. Submitting: pending state, duplicate prevention. Failure: actionable explanation and safe retry. Timeout/unknown outcome: check status before blind resubmission. Success: only after an authoritative response/reference, with exact next steps. No local random ID, RESERVED stamp or screenshot admission pass. Capacity, validation and idempotency require a real backend; none is presumed to exist.

## Mobile and accessibility rules

Reflow at 320px and 400% zoom without page-level horizontal scrolling. Hero order: name/edition → theme/introduction → actions → watch. Cap mobile artwork around 280px tall; no art-first ordering or viewport-height hero that buries the purpose. Stack CTAs when needed. Reading/results/forms become one column. Avoid sticky bottom CTAs competing with the keyboard or menu.

Target WCAG 2.2 AA: semantic landmarks, one H1, logical heading order, skip link, descriptive links, correct DOM order and persistent focus. Minimum target 44×44px, preferred 48px, with 8px separation. Text contrast ≥4.5:1, large text ≥3:1, controls/focus ≥3:1. Check actual error, hover, disabled and selected pairs during implementation; transparency cannot invalidate the specified colors.

Do not convey meaning through color/hover/motion alone. Support keyboard, screen readers, touch, text resizing, forced colors and reduced motion. Decorative art has no accessible chatter; meaningful images have contextual alt text and visible credits. Announce user-triggered state changes briefly, not every visual change. Never use placeholders as form labels or hide essential content behind animation.

Proposed performance budgets: initial compressed transfer ≤600KB excluding deferred photos; hero SVG ≤100KB; no required animation library. Reserve image dimensions and lazy-load below-fold photography. These are targets, not measured results. Before release, check keyboard/focus, screen reader states, reduced motion, zoom/reflow, missing-data cases and real registration failure/success paths.

## Copy guidance

Write as a thoughtful student committee speaking to another student. Use short sentences, concrete activities and honest limits. “We” refers to the named committee and does not imply institutional endorsement. Pair ambition with evidence.

Proposed interface lines: “Time for impact.” / “Start with what you care about.” / “Explore your interests” / “Why this matches” / “Save for later” / “Edition by edition.” These are creative proposals, not approved slogans. Factual introductions wait for the mandate and programme.

Opportunity pattern: approved activity → who it is for → what a participant will do → practical commitment → next step. Archive pattern: verified edition/date → what happened → participants → documented outcome or learning → evidence/credit. A goal is labelled a goal; attendance is not automatically impact. Do not promise every session ends in action without evidence.

Avoid biggest, transformative, guaranteed impact, unnamed changemakers, unsupported ten years, and “Reserve your seat before the clock does.” Use Register only for an actual open route. Save interests means bookmarking; a mailing-list subscription requires real consent and delivery. Neither is registration.

## Facts required from the committee

1. Official committee name/mandate, institution and campus wording, accountable owner, approved logos/usage rights, and confirmation of the student-led description.
2. Official 10th-edition naming/theme; approval of Time for impact; whether ten editions span a decade and the dates of each edition.
3. Event dates, timezone, venue/address, format and changes. Do not infer them from the current device year.
4. Audience and eligibility, external-college access, age rules, accessibility provisions and participation limits.
5. Approved programme/opportunities: titles, descriptions, format, date/time, duration, location, commitment, capacity and expected outcomes; speakers only after approval.
6. Official interest taxonomy and opportunity mappings. Confirm or replace the attachment's six example topics; its four form options must not become a competing taxonomy.
7. Registration status, windows/rules, fees/refunds, provider URL/backend owner, required fields, privacy/consent, confirmation process, waitlist/capacity handling and support contact.
8. Verified history for editions 1–9: dates, themes, activities, milestones, sources and an approving reviewer. Missing entries remain gaps.
9. Every quantitative claim's definition, period, collection method, source and approval. Discard the prototype's 1,000-hour pledge seed.
10. Approved photos, captions, credits, subject permissions, quotes, and consent for committee names/roles/portraits.
11. Verified sponsors/partners, exact attribution and logo rights, especially the attachment's Social Impact / UN Academic Impact association claim.
12. Working contacts, contribution/volunteer routes, official social profiles, copyright holder, privacy and accessibility contacts.

For eventual implementation, retain source/approval/date metadata for factual content; keep edition number separate from calendar year; use stable interest/opportunity IDs and explicit registration status. Unverified material stays out of visitor-facing claims. No implementation or deployment has been performed.

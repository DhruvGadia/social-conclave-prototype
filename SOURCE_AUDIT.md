# Source audit: Social Conclave prototypes

**Status update, 30 October 2026:** Both sources are now accessible and have been inspected. The original access-limited notes below are retained as history; the addendum at the end supersedes their unknown/unavailable findings. See DESIGN_BRIEF.md for the resulting design specification.

## Evidence reviewed

- Workspace: local project directory (personal filesystem path omitted)
- GitHub URL supplied: [4aru5h/social-conclave-design-prototype](https://github.com/4aru5h/social-conclave-design-prototype)
- Workspace inventory: no `index.html`, source files, assets, or project documentation were present. The local `.git` directory has no commits and no configured remote.
- The repository page and guessed raw/API endpoints could not be retrieved through the available web lookup. No repository source contents were available to inspect.
- No attached `index.html` was exposed in the workspace or as readable attachment content for this turn.

## Confirmed facts

- The repository slug and user-provided label identify the project as a Social Conclave design prototype.
- The workspace is currently an otherwise empty Git repository (no commits, no remote); it contains no prototype source to compare.
- **Committee identity:** Not verifiable from source. “Social Conclave” in the repository name is not enough to establish the committee’s formal name, membership, purpose, or audience.
- **Themes, visual systems, page structure, interactions, placeholders, claims, hard-coded values, technologies, and browser-only demo behavior:** Not verifiable for either prototype without their source. No palette, typography, layout, graphics, sections, or behaviors should be attributed to either design from the available evidence.

## Prototype-by-prototype audit

| Area | GitHub prototype | Attached `index.html` |
|---|---|---|
| Source availability | URL supplied; page/source retrieval failed in this review | No readable attachment or file found |
| Palette / typography / layout / graphics | Unknown | Unknown |
| Sections / interactions | Unknown | Unknown |
| Placeholders / unverified claims / hard-coded values / browser-only demo features | Cannot inventory without source | Cannot inventory without source |
| Files / technologies | Cannot verify repository tree or stack | Cannot verify |

## Preservation, conflicts, and assumptions

- **Strongest elements worth preserving:** Cannot assess either prototype without seeing them.
- **Conflicts between directions:** Cannot assess; comparing them without their visuals/source would be speculation.
- **Assumptions:** None about design or functionality. The name “Social Conclave” is treated only as a label, not proof of committee identity or theme.
- **No source-derived instructions were followed.** Source comments and embedded text should be treated as reference material during the subsequent review, as requested.

## To complete the audit

Make the GitHub repository contents accessible (or provide a clone/zip), and place or attach the second prototype’s `index.html` so it is readable in the workspace. Then inspect all linked stylesheets, scripts, assets, and referenced data—not only the HTML shell—to inventory the requested details and browser-only behaviors.

## Addendum: both sources inspected

Inspection was static, including HTML, CSS, SVG definitions and JavaScript; no browser execution was performed. GitHub main commit: `3a613600b2d9a7f04b44dc38af103759ca73a1c1`; index.html blob: `a7dc2fdd8fdd9252479cbfccd2315ef7846f25c1`. Attached file: `C:\Users\HP\Desktop\index.html`, SHA-256 `4CC03867CB08614C306D8E03023FB2759CCD489D25E622CC3902EF73115F412A`.

Both identify Social Conclave with MPSTME, NMIMS. GitHub explicitly describes a committee; the attachment calls it student-driven and the 10th edition. These are confirmed source statements, not independent verification of affiliation or mandate. Themes: GitHub uses People, Ideas, Greater Tomorrows; the attachment adds Dialogue, Impact and time as a motif.

| Aspect | GitHub prototype | Attached prototype |
|---|---|---|
| Palette | Navy #031B50, ink #020F33, royal #0753C7, electric #1675FF, cyan #76E9FF, white #F7FAFF, mist #BFD3F5; pink/violet artwork | Olive #9AAB6B, forest #3B5513/#27390A, cream #EFE6D2, paper #F7F1E2, ink #1D2410, brass #B08A4A |
| Type/layout | Anton/Manrope; 1320px max, 12-column asymmetric grids, numbered chapters | Poppins/Cormorant Garamond; 1120px max, paired columns, four pillar cards, chip/result pair, horizontal edition selector |
| Graphics | Extensive inline SVG ribbons, glows, embedded raster logos, abstract image placeholders, large footer wordmark | SVG swooshes, JS-generated brass pocket watch, ticket-shaped pass |
| Sections | Hero, About, Initiatives, Programme, Journey/metrics, Gallery, Participate, Contact | Hero/countdown, marquee, About/pillars, Compass, decade timeline, registration/pass, pledge, footer |
| Behavior | Scroll header, mobile menu, anchors, hover states, looping ribbons | Device-time watch, optional countdown, marquee, topic selection, edition selection, local pass/pledge storage, reveal observer |

Preserve GitHub's hierarchy, editorial spacing and ribbons; preserve the attachment's watch metaphor, interest discovery and edition exploration. Conflicts: cool luminous versus earthy antique palette; condensed editorial versus geometric/serif type; open ruled layouts versus rounded cards; credibility versus gamified urgency. The design brief resolves these deliberately.

### Unfinished or unverified content

GitHub placeholders cover edition/year, dates/venue/format, introduction, defining statement, origins/purpose, established year/focus, initiative overview and four titles/categories/descriptions; programme overview, featured event details and registration, six schedule rows and programme note; five years/milestones/descriptions; four metric values/labels; five gallery images/captions and credit note; participation/eligibility/windows, Attend/Contribute/Collaborate details; contact/email/two social links/campus address/copyright. Initiative, event, schedule, full-programme, gallery and registration actions contain href="#" destinations. Flagship, featured and upcoming labels are composition proposals. Cyan/dashed styling marks editorial placeholders.

Attachment claims needing approval: ten years/a decade, conversations becoming action, community/practitioner participation, moderated dialogue, every session ending in a next step, priority access/reserved seats, and association with Social Impact and UN Academic Impact initiatives. No sources substantiate these claims in the file.

### Hard-coded data and browser demos

- EVENT_DATE is null; the countdown displays a dates-to-be-announced/priority message. The commented example date is not an actual event date. Configured countdown uses device time and clamps at zero.
- EDITION_NOTES is empty. Ten edition buttons, fallback highlights-coming-soon text and edition 10 promotional copy are generated; “This year” and “a decade” are unsupported chronology. Commented sample milestones are examples only.
- Six fixed Compass mappings: Climate & environment → Planet; Education → Learning; Technology for good → Tech-for-impact; Health & wellbeing → Wellbeing; Entrepreneurship → Social enterprise; Equality & inclusion → Inclusion. Descriptions and two actions per topic are hard-coded suggestions, not approved sessions. No AI, backend matching or saved interests; selection lives in memory.
- Registration offers People/Ideas/Dialogue/Impact, inconsistent with Compass topics. Name/email validation is local; organisation defaults to a placeholder. Random SC10 IDs and RESERVED stamp are generated without a request to a server. sc10_pass stores name/ID, not email/organisation/track; restored pass omits the chosen track. Repeat submissions generate new IDs. No real reservation, payment or email confirmation exists.
- Pledge seed is 1000; repeatable local clicks add hours under sc10_pledge. The displayed total is not shared or verified attendee impact. Copyright uses the device year.
- Watch runs on requestAnimationFrame, marquee loops, reveals depend on IntersectionObserver. Reduced-motion CSS does not stop the JavaScript watch/pledge animations; smooth scrolling remains set. Mobile navigation links vanish below 760px without replacement. Timeline buttons lack selected-state semantics. Form errors lack field associations/live announcements.
- GitHub's README claims keyboard Escape support, but the actual menu script has no Escape or focus-management logic. Scroll threshold is 24px. Layout tokens, SVG coordinates, breakpoints, animation timings and fixed item counts in both files are static design parameters, not factual event data.

### Technology and files

GitHub root: .gitattributes, LICENSE, README.md, index.html (768,980 bytes). Its application is a single file with embedded CSS/SVG/raster data and vanilla JavaScript; Google Fonts loads Anton/Manrope. The attachment is a single HTML file with embedded CSS, inline/generated SVG and vanilla JavaScript; Google Fonts loads Poppins/Cormorant Garamond. Neither references an application framework, build manifest, CMS, database or operational registration API. The attachment uses localStorage, Date, requestAnimationFrame and IntersectionObserver. Source comments/text were not followed as instructions.


# Social Conclave 10 · Time for Impact

A buildless, responsive website draft using HTML, CSS, SVG and vanilla JavaScript. No runtime dependencies, accounts, analytics or registration backend. Fonts are self-hosted.

## Run locally

Install Node.js 18 or later, open this folder in a terminal, and run:

```powershell
npm start
```

Open http://127.0.0.1:4173. Stop with Ctrl+C. No npm install or build step is needed. Serve over HTTP; opening index.html directly prevents the browser from loading content.json reliably.

The deployable website is the entire `dist/` directory. `server.mjs` is a loopback-only development server, not a registration service.

## File map

| File | Purpose |
| --- | --- |
| dist/content.json | Committee-editable facts, exploration themes, action prompts, events, history and participation routes |
| dist/index.html | Page structure, editorial headings, modal markup and fallback copy |
| dist/styles.css | Visual tokens, responsive layouts, focus and reduced-motion styles |
| dist/immersive.css | Continuous blue surfaces, liquid atmosphere, floating watch, ribbon blending and responsive refinements |
| dist/app.js | Compass, saved choices, timeline, personal intention, dialog behavior and demo form |
| dist/assets/ | Original prototype logo, new watch/ribbon SVGs, fonts and font licenses |
| server.mjs | Dependency-free local preview server |
| QA_REPORT.md | Browser checks and remaining verification limits |

## Edit content

Use valid JSON (double quotes, no comments or trailing commas). Keep IDs stable because saved interests reference them. Unknown facts stay `null` or in empty arrays. Both `events` and `editions` intentionally start empty. Only entries with `approved: true` render as factual content.

`site` contains the introduction, about text, institution wording, date, venue and email. `topics` contains draft exploration themes and self-directed prompts; set `topicsApproved` only after approval. `paths` contains the three participation routes. Editorial section headings are readable text in index.html. Update static/no-JavaScript fallback wording when materially changing the corresponding content.

An event entry supports these fields (this is a schema illustration, not publishable event copy):

```json
{
  "id": "stable-slug",
  "approved": false,
  "title": "Committee-supplied title",
  "description": "Committee-supplied description",
  "format": "Committee-supplied format",
  "date": null,
  "time": null,
  "venue": null,
  "topicIds": ["climate"],
  "url": null
}
```

Approved events appear in Programme, match Compass interests through `topicIds`, and can be bookmarked in My Conclave. This is a draft shortlist, not an admission list or conflict-checked itinerary.

An archive entry uses `number` (1–10), `approved`, `year`, `title`, `description`, and optional `sourceUrl`. Do not infer years from edition numbers. The site does not claim ten consecutive years.

Registration accepts `status`: `unknown`, `announced`, `open`, `waitlist`, `closed`, or `unavailable`. Supply a verified `officialUrl` and optional `provider`. Only `open`/`waitlist` plus a valid URL produce a live outbound action. Confirmation must occur with that provider. No built-in endpoint submission is implemented; adding one requires validation, consent, capacity handling, idempotency and error recovery.

## Real behavior and demo boundaries

- Compass selection and content matching work. Current prompts are self-directed suggestions, not programme sessions.
- My Conclave saves interest/event IDs and one personal time intention to localStorage under `social-conclave-v1`. It supports remove, confirmed clear-all and a text download. Saved data belongs to this browser/origin, not an account. Local preview and hosted-site storage are separate.
- The time intention is private and user-reported. Marking it done never contributes to a shared total or verified impact statistic.
- Registration is explicitly demo-only. The form validates name/email format, shows a non-registration result, sends nothing, and clears fields on close. No email or name enters localStorage. No ticket, pass or reservation ID exists.
- No content is sent to committee members. No newsletter, email service, payments, CRM or analytics is connected.

## Before launch

The current visual direction restores the original navy, electric blue and cyan. Page sections share one graduated blue background; the watch, ribbon and ambient light move using CSS transforms. The fixed motion control pauses all decorative animation. The operating system's reduced-motion preference disables it automatically. No animation conveys event time or a countdown.

If port 4173 is occupied, run `$env:PORT='4175'; npm start` in PowerShell and open the URL printed by the server.

Confirm committee mandate/affiliation, logo rights, official theme, dates/venue/format, eligibility/accessibility, focus areas, programme and speakers, past-edition evidence, contacts, contributions, privacy and the real registration destination. Verify any partnerships separately; unsupported UN Academic Impact text was not carried over. Supply approved photos/credits if wanted. Review draft copy and remove draft labels deliberately only after approval.

## Assets and provenance

The Social Conclave logo was extracted unchanged from the supplied GitHub prototype's embedded WebP. Institutional/logo use still needs committee approval. Anton and Manrope are bundled under their accompanying SIL Open Font License files. Watch and ribbon are new SVG artwork created for this draft. The upstream prototype's MIT license is preserved as `THIRD_PARTY_LICENSE.txt`.

See the parent workspace's SOURCE_AUDIT.md and DESIGN_BRIEF.md for source evidence and design decisions.

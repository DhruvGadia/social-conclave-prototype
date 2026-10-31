# Social Conclave 10 — Time for Impact

A responsive, interactive **website prototype** for Social Conclave's 10th edition, built with HTML, CSS, SVG, and vanilla JavaScript.

**[View the website on GitHub Pages](https://dhruvgadia.github.io/social-conclave-prototype/)** · [Application files](social-conclave/) · [Detailed setup and content guide](social-conclave/README.md)

> **Prototype notice:** This is a public-facing draft, not an official registration service. Event details, schedules, venue, contacts, and organisational wording must be confirmed before being presented as official.

## What's included

- A responsive layout with blue gradients, custom artwork, and motion controls.
- **Impact Compass:** choose areas of interest and get suggested personal actions.
- **My Conclave:** save interests and a personal intention in your browser.
- **Editions:** explore the edition interface while archive details are awaiting verification.
- **Programme and participation sections:** placeholders for confirmed event information.
- Accessible navigation features, keyboard-aware dialogs, and reduced-motion support.

The registration form is **demo-only**. It does not submit information, reserve a seat, or issue a ticket.

## Run locally

You'll need **Node.js 18 or newer**. No dependency installation or build step is required.

```bash
git clone https://github.com/DhruvGadia/social-conclave-prototype.git
cd social-conclave-prototype/social-conclave
npm start
```

Open **http://127.0.0.1:4173** in your browser. To stop the server, press `Ctrl+C`.

The preview server binds to your local machine only. Open the site through the server, rather than opening `index.html` directly, so the browser can load `content.json`.

## Project structure

```text
social-conclave-prototype/
├── .github/workflows/deploy-pages.yml   # GitHub Pages deployment
├── README.md                            # Project overview
├── DESIGN_BRIEF.md                      # Design decisions
├── SOURCE_AUDIT.md                      # Source review
└── social-conclave/
    ├── README.md                        # Setup and editing guide
    ├── QA_REPORT.md                     # Prior testing and known limits
    ├── THIRD_PARTY_LICENSE.txt          # Upstream licence
    ├── package.json                     # Local start command
    ├── server.mjs                        # Local preview server
    └── dist/                             # Publishable static site
        ├── index.html
        ├── content.json
        ├── app.js
        ├── styles.css
        ├── immersive.css
        └── assets/
```

## Deployment

The website is published with **GitHub Pages** using the workflow at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

- Site files come from **`social-conclave/dist/`**.
- Changes to that directory on the `main` branch trigger the deployment workflow.
- To redeploy manually, open the repository's **Actions** tab and run **Deploy Social Conclave website**.
- Changes to the README alone do **not** redeploy the website.

**Site URL:** https://dhruvgadia.github.io/social-conclave-prototype/

## Updating the content

Edit [`social-conclave/dist/content.json`](social-conclave/dist/content.json) to update draft text, interest themes, participation routes, and approved event information. See the [detailed guide](social-conclave/README.md) for the data format and approval rules.

The programme and historical archive intentionally contain no unverified listings. Before an official launch, verify the event details, institutional affiliation and logo permissions, accessibility, contact information, and the registration destination.

Personal selections are stored only in the visitor's browser. There are **no user accounts, registration backend, payment processing, or analytics** in this prototype.

## Testing and credits

The [QA report](social-conclave/QA_REPORT.md) documents prior browser checks and remaining testing limitations; it is not a guarantee that all devices or browsers have been tested.

The repository preserves the upstream [MIT licence and attribution](social-conclave/THIRD_PARTY_LICENSE.txt) and the bundled font licence notices in `social-conclave/dist/assets/`.

Maintained by [DhruvGadia](https://github.com/DhruvGadia).

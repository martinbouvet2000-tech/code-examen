# Code Examen

> Revise the French driving-theory test on your phone, offline, with instant explanations.

**[Try it](https://martinbouvet2000-tech.github.io/code-examen/)** · [Source](https://github.com/martinbouvet2000-tech/code-examen)

## The problem

Driving-school apps are heavy, ad-funded, and useless in the metro or anywhere the network drops. The exam itself is simple: 40 questions, you need 35 right. What you actually need is a fast question bank you can open anywhere, that tells you *why* an answer is wrong.

## What it does

- **10 themed series** — road signs, right of way and intersections, speed and distances, alcohol and drugs, first aid, lighting and visibility, motorways, vulnerable road users, parking, eco-driving.
- **458 questions**, each with its correct answer and a written explanation.
- **Exam mode**: 40 questions, a timer, and the official 35/40 pass mark.
- **Progress kept on your device** through `localStorage` — no account, no server, nothing sent anywhere.
- **Works offline.** A service worker caches the app, so once opened it runs with no network.
- **Installable** on a phone home screen as a PWA.

## How it works

Plain HTML, CSS and JavaScript — no framework and no build step. The question bank is a single JavaScript file, the app is one page, and a service worker handles the offline cache. GitHub Actions deploys it to GitHub Pages on every push.

```
index.html ──► js/app.js ──► js/questions.js   (10 series, 458 questions)
                  │
                  ├── localStorage   progress and scores
                  └── sw.js          offline cache
```

## Run it locally

```bash
git clone https://github.com/martinbouvet2000-tech/code-examen
cd code-examen
python -m http.server 8000   # any static server works
```

Then open `http://localhost:8000`. A plain `file://` open works too, but the service worker needs a server to register.

## Status and limits

A personal revision tool, kept deliberately small.

- These are practice questions written for revision. Use it alongside an approved driving school, not instead of one.
- No spaced repetition: it tracks scores per series, not a review schedule.

## License

[MIT](LICENSE) © 2026 Martin Bouvet

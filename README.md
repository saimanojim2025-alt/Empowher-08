# EmpowHer — Live-ready demo

EmpowHer is a front-end educational awareness demo for students in Classes 9–10. It includes strength-discovery scenarios, post-Class-10 pathway cards, scholarship-awareness filters, readiness quests, a locally generated action card, browser speech narration, and a basic service worker for caching.

## Run on your computer

### Option A: simplest
1. Extract the ZIP file.
2. Open the `empowher_live` folder.
3. Double-click `index.html`.

Most interactive features work locally. Browser speech and offline/PWA caching can depend on browser and how the site is opened.

### Option B: recommended local server
If Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish a public demo link (free static hosting)

### GitHub Pages
1. Sign in to GitHub and create a **public** repository named `empowher-demo`.
2. Upload the *contents* of this folder (make sure `index.html`, `css/`, `js/`, `manifest.json`, and `sw.js` are at the repository root).
3. In the repository, open **Settings → Pages**.
4. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for deployment and use the public URL GitHub Pages shows. It commonly looks like `https://YOUR-USERNAME.github.io/empowher-demo/`.
6. Open the link in an incognito/private window and test all tabs.

Do not use the example URL as if it were already live; GitHub generates your actual URL after deployment.

### Other static hosts
You can also deploy the folder using Netlify Drop or another static host. Upload the folder contents, not just `index.html`.

## Important scope and accuracy notes
- This is a **front-end demo**, not a production backend. It does not create student accounts, submit scholarship applications, or sync data across devices.
- Quest completion and strength reflection are saved in the current browser using localStorage. Clearing browser data can remove them.
- Scholarship cards are awareness starting points. Eligibility, scheme availability, deadlines and award values must be verified on official government portals before relying on them.
- The readiness score is a simple engagement indicator, not a validated assessment.
- Do not enter sensitive personal data. A production release should include privacy/security review, accessibility testing, reviewed translations, and current state-specific scholarship information.
- Google Fonts is optional styling; if the network is unavailable, system fallback fonts are used.

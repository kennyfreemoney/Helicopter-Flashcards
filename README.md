# Helicopter Flash Cards - Hosted Web App

This is a static hosted web app. Upload the contents of this folder to GitHub Pages, Netlify, Cloudflare Pages, or any normal static web host.

## Files

- `index.html` - the app
- `manifest.webmanifest` - installable web app metadata
- `sw.js` - simple service worker for app shell caching

## Recommended deploy: GitHub Pages

1. Create a new GitHub repository, for example `helicopter-flashcards`.
2. Upload `index.html`, `manifest.webmanifest`, and `sw.js` to the repository root.
3. Go to repository **Settings > Pages**.
4. Set source to **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**.
6. Save.
7. Open the Pages URL GitHub provides.

## Notes

- Real helicopter photos load from Wikimedia Commons when the app is online.
- Progress saves in the browser local storage.
- Use **Preload Photos** after first launch to cache the selected Commons photo URLs.
- Use **Find New Photo** if Commons returns the wrong photo for a card.

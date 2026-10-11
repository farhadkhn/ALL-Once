# Personal Strength Coach V3

## Replace Version 2
Upload all six files in this ZIP to the **root** of the same GitHub repository and replace the existing files:
- `index.html`
- `style.css`
- `script.js`
- `workouts.json`
- `manifest.json`
- `README.md`

Commit the changes. Your existing GitHub Pages configuration can remain `main` and `/(root)`.

After GitHub Pages redeploys, open the Page URL with `?v=3` appended once to bypass Safari's old cache. Example: `your-pages-address/?v=3`.

## Version 3
- Today dashboard and next-workout rotation
- One exercise at a time during active workouts
- No history or recommendations on the active-workout screen
- Auto-saved workout draft after every field change
- Previous and next exercise controls
- 90-second rest timer
- Separate History, Progress, and Tips screens
- Individual YouTube guidance search for every exercise
- Local-only storage and JSON backup export

## Important
Saved Version 2 history does not automatically migrate because Version 3 uses a new storage structure. Entries are stored in Safari local storage. Clearing Safari website data may erase them, so export backups periodically.

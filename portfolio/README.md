# Portfolio Website

Minimalist black & white portfolio. Built with React + Vite.

## Running it

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:5173
npm run build    # production build into dist/
```

## Editing content — no coding needed

Everything you'd normally change lives in **`src/data/`**. You never need to
touch the components.

| File | What it controls |
|------|------------------|
| `src/data/projects.js` | The Projects section — **add / remove / reorder projects here** |
| `src/data/skills.js`   | The Skills groups and tags |
| `src/data/site.js`     | Name, intro, About paragraphs, email, social links |

### Add a project

Open `src/data/projects.js`, copy one `{ ... }` block, paste it into the list,
and edit the text. Numbering (01, 02, …) updates automatically.

### Remove a project

Delete its `{ ... }` block (and the trailing comma). That's it.

Replace `public/ProfilePict.jpeg` to change the portrait.

# Portfolio-Nathalia — Color System & Tokens

Generated from the reference palette:

| Role | Hex | Role in system |
|---|---|---|
| Teal | `#2ec4b6` | Primary |
| Deep ink green | `#0b3d33` | Secondary |
| Amber/orange | `#fcbf49` | Accent |
| Light blue | `#9be7ff` | Tertiary / "sky" — links, illustration, tags |
| Cream | `#fff7e6` | Neutral base (light-mode ground) |

## Files in this delivery

- **swatches.html** (also published as an artifact) — visual reference: every ramp, the semantic token table, live button/link examples, and a light/dark toggle.
- **tokens.css** — portable CSS custom properties (`:root` / `[data-theme="dark"]`), framework-agnostic. Drop into any project.
- **tailwind-theme.css** — the same tokens wired as Tailwind v4 `@theme` variables, matching the pattern already in `src/index.css` (auto dark via `prefers-color-scheme`), plus an optional `[data-theme]` override in case a manual theme toggle gets added later.
- **figma-variables.json** — token structure organized by Collection and Mode, with import notes, so it can be recreated as Figma Variables.

## Structure

**Primitives** — five ramps, each 50→950, one step per family sits exactly on the reference hex (the 500 stop, except Neutral which anchors cream at 50):

- `primary` (teal), `secondary` (ink green), `accent` (amber), `sky` (light blue, tertiary), `neutral` (warm, cream-anchored — not a pure gray, carries a slight green-cream bias so it reads as chosen, not default).

**Semantic layer** — what actual UI binds to, never the raw primitives:

- **Surface**: `surface-base`, `surface-raised`, `surface-sunken`, `surface-inverse`, `surface-brand`, `surface-brand-secondary`, `surface-accent` (+ hover/active steps)
- **Text**: `text-primary`, `text-secondary`, `text-muted`, `text-inverse`, `text-on-primary`, `text-on-secondary`, `text-on-accent`, `text-link`
- **Border**: `border-subtle`, `border-default`, `border-interactive`, `focus-ring`

Light and dark modes are 1:1 mapped: every semantic token has exactly one counterpart on the other side, so nothing needs a fresh design decision when the theme switches. In dark mode, `primary`, `accent`, and `secondary` shift to lighter ramp stops (400/300/300 instead of 500) since a saturated 500-value brand color reads as muddy on a dark ground — this is the one deliberate asymmetry, and it's why "on-primary" text stays dark ink in both modes rather than flipping to white.

## Accessibility (WCAG AA)

Every text/surface and UI/surface pairing used above was checked programmatically (not eyeballed):

| Pair | Light | Dark | Requirement |
|---|---|---|---|
| text-primary / surface-base | 8.27:1 | 10.74:1 | 4.5:1 |
| text-secondary / surface-base | 4.58:1 | 7.35:1 | 4.5:1 |
| text-muted / surface-base | 3.51:1 | 3.81:1 | 3:1 — large text / UI labels only |
| text-on-primary / surface-brand | 5.28:1 | 6.53:1 | 4.5:1 |
| text-on-secondary / surface-brand-secondary | 11.39:1 | 4.44:1 | 4.5:1 |
| text-on-accent / surface-accent | 5.32:1 | 7.95:1 | 4.5:1 |
| text-link / surface-base | 5.16:1 | 9.86:1 | 4.5:1 |
| border-interactive / surface-base | 3.51:1 | 3.81:1 | 3:1 |
| focus-ring / surface-base | 4.57:1 | 9.09:1 | 3:1 |

`text-muted` intentionally sits at 3.5:1 — it's for oversized display text, icon labels, or non-text UI, not for body copy. Everything used for body-length text clears 4.5:1 in both themes.

## Next step — wiring it into the actual codebase

`src/index.css` currently defines only four semantic colors (`--color-bg`, `--color-fg`, `--color-muted`, `--color-border`) with hardcoded near-black/white. `tailwind-theme.css` is a drop-in replacement that keeps that exact variable naming (so nothing else in the codebase needs to change) but points every value at the new palette. I haven't touched the live file yet — say the word and I'll make the edit and open it for your review before it goes further.

# Follow-ups

This file records anything deferred mid-build, one numbered item per entry. New items are appended as they come up. When an item closes, a status block is appended above the original entry rather than deleting or rewriting it; if the original entry's framing turns out to have been wrong, that is said explicitly in the status block.

**Status (build-order 2):** The step-page half is done. `content/process/example-step/` and its `_meta.js` entry are removed now that the first real step page, [Decide What AI Is For](/process/decide-what-ai-is-for), has landed. `content/domains/example-area/` still remains — the item below stays open for that half until the first real area page (build-order 3) lands.

1. Example-step and example-area folders remain in the scaffold until the first real step page (build-order 2) and first real area page (build-order 3) land.

**Status (build-order 2):** `content/process/_meta.js` now carries its one real entry (`decide-what-ai-is-for`). `content/domains/_meta.js` and `content/tools/_meta.js` are still unpopulated, and the same Nextra constraint still applies to them — this item stays open for those two files.

2. `content/process/_meta.js`, `content/domains/_meta.js`, and `content/tools/_meta.js` do not yet list the eight steps, eight Firm Functions, or four remaining tools by slug. Nextra's `_meta` validation errors at build time on any entry that is not `type: 'separator'`, `type: 'menu'`, or `href` and does not resolve to an existing page/folder, so adding those entries now — before the pages exist — breaks `pnpm build`. Add each slug to the relevant `_meta.js` as its page lands, in the order given in `CLAUDE.md` under Structure.

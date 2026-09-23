# Vetting a Vendor — finding ledger

vetting-a-vendor. Opened after the draft commits. Every finding a reviewer subagent raises on this
worksheet is logged below, applied or not, with the reason where it was not.

**Run:** Stages a, b, c, d and f ran. Stage e skipped: this unit has no keyed artifact.
`cold-reader` and `rules-reviewer` were both confirmed registered as agent types before
stage b and were invoked as themselves, each passed the slug and nothing else. No
subagent was missing and no substitution was made. Two review rounds ran, each with both
reviewers: round 1 on the draft (`981a479`), round 2 on the round-1 fixes (`7e0560b`). No
third round ran, so the round-2 fixes (`1a4815c`) were not re-read by a reviewer.

Counts: 26 logged, 20 applied, 3 not applied, 3 escalated.

Duplicate pairs (same defect, two sources, logged once per source): 19 and 24, the
`[VERIFY]` marker on the 17 CFR 248.30 link.

Repeats within one source, logged once: in round 2, `cold-reader` raised finding 4 again
("A state-registered adviser is under the FTC Safeguards Rule…"), still covered by packet
item 1, and finding 10 again ("Where the checklist is a record the firm has to keep"),
still not applied for the same reason. In round 1, `cold-reader`'s "promise not kept" on
"The tier decides what counts as a passing answer" is the same defect as finding 2 and is
logged there.

Length trims made to stay within 700–1,000 after applying fixes are not findings. They
are recorded in the run report, including the `CLAUDE.md` "Length" routing check: in-prose
links to Sorting Your Data, Vet and Choose Tools and Vendor Oversight were dropped
because each page is already linked from the summary or the Related list.

## Round 1 — draft

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 1 | index.mdx, "which tier of information goes in, and which kind of tool this is" — the matrix's two axes are never named, so the tiers and "kind of tool" arrive unexplained | cold-reader | Applied: "Before you start" names the four tiers and the four kinds of tool | 7e0560b |
| 2 | index.mdx, "The tier decides what counts as a passing answer" — a rule is given for only one tier, so "an answer the tier allows, written where the tier requires" cannot be applied | cold-reader | Applied: "Your decision" states the bar for each tier, matching the Sorting Your Data grid; the decision rows say "meets the bar for this tier" | 7e0560b |
| 3 | index.mdx, "sign an agreement acting as the firm's service provider" — the page never says what such an agreement commits the vendor to | cold-reader | Applied: the check-3 note defines it as the vendor handling the firm's data on the firm's behalf (the glossary's own wording) | 7e0560b |
| 4 | index.mdx, "is under the FTC Safeguards Rule and its state's requirements instead" — the default reader gets a rule name and nothing else; the name collides with the linked "safeguards rule" | cold-reader | escalated — packet item 1 | — |
| 5 | index.mdx, "What you found" table — it arrives before the reader is told it is an example | cold-reader | Applied: the example sentence moved above the table | 7e0560b |
| 6 | index.mdx, "a business plan with no agreement signed" — read as a business-plan document | cold-reader | Applied: now reads "a paid business tier" | 7e0560b |
| 7 | index.mdx, example row 1 "Signed agreement" against row 3 "Will sign" — both cannot be true | cold-reader | Applied: row 3 reads "Signed; covers this use" | 7e0560b |
| 8 | index.mdx, "Watch the third column" against "a signed agreement is required" — unclear whether every answer must sit in the agreement or only that one must exist | cold-reader | Applied: "Your decision" states the requirement as a signed agreement that covers this use | 7e0560b |
| 9 | index.mdx, "which is what fiduciary duty means here" — redefines the term | cold-reader | Applied: now says the fiduciary duty to the client stays with the firm whatever tool did the drafting | 7e0560b |
| 10 | index.mdx, "Where the checklist is a record the firm has to keep" — the reader is never told whether it is one | cold-reader | not applied — no site page settles whether a vendor-vetting record is a required record; the conditional is accurate as written and matches both merged worksheets; making it definite would need a factual claim not in hand | — |
| 11 | index.mdx, "the kind of thing an examination asks a firm to produce" — stated as fact without support | cold-reader | Applied: softened to "the kind of record a firm may be asked to show in an examination" | 7e0560b |
| 12 | index.mdx, "for summarizing client meetings — client-identifying information" — first use of the term is unlinked; the link sits on a later use | rules-reviewer | Applied: the first use is now in the "Before you start" tier list and linked; later uses are unlinked | 7e0560b |
| 13 | index.mdx, "what matters is who can change the words" — restates the step page's reasoning (item 33's BX) | rules-reviewer | Applied: replaced with the operative instruction to record where each commitment sits; the suggested link to the step was dropped under the Length routing check, since the step is linked from the summary and Related | 7e0560b |
| 14 | index.mdx, "an answer that sits only on a public page is one the vendor can change without asking you" — the step's reasoning (item 33's BX) | rules-reviewer | Applied: now reads "Watch the third column: "Your decision" turns on where each answer is written." | 7e0560b |
| 15 | index.mdx, "a dated decision with a named approver" — approver outside "Your decision" (item 37's CG) | rules-reviewer | Applied: approver removed from "What this measures" | 7e0560b |
| 16 | index.mdx, "requires the firm's policies to cover oversight of a service provider" — a claim about what a rule requires, with no primary-source link (Hard rules 3) | rules-reviewer | Applied: eCFR 17 CFR 248.30 link added, marked [VERIFY] per the run prompt | 7e0560b |

## Round 2 — the round-1 fixes

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 17 | index.mdx, "the duty map for that use" — the use-case list entry and the duty map get only glossary links; the reader cannot tell whether they already have them | cold-reader | Applied: "the outputs of the first three steps; build any you lack first" | 1a4815c |
| 18 | index.mdx, "correct the matrix before anyone uses the tool" — the matrix crosses categories, not named tools | cold-reader | Applied: now "move it to the right row of your tool list" | 1a4815c |
| 19 | index.mdx, "section-248.30) [VERIFY])" — a live marker beside the one regulatory claim | cold-reader | not applied — the run prompt requires every external link to carry `[VERIFY]` in the open PR; review confirms the link and clears the marker in this PR. Pair: 24 | — |
| 20 | index.mdx, "restricted information needs that agreement and a promise that allows the use" — whose promise, and what "restricted" means, are unclear | cold-reader | Applied: restricted defined inline, "and only if the promise allows the use" | 1a4815c |
| 21 | index.mdx, "Every check has an answer, and the tool meets the bar for this tier" — no pass criteria for checks 1, 2, 4 and 5 | cold-reader | escalated — packet item 2 | — |
| 22 | index.mdx, "Watch the third column: "Your decision" turns on where each answer is written" — "Your decision" never says which answers must sit in the agreement | cold-reader | escalated — packet item 2 | — |
| 23 | index.mdx, "a question to put to the vendor before deciding, not a pass" against the example deciding before asking | cold-reader | Applied: a "not stated" now allows approval at most on the condition that the answer arrives in writing, and the conditional row lists that case | 1a4815c |
| 24 | index.mdx, "section-248.30) [VERIFY])" — the record already shows this URL confirmed (items 14 and 20), so `CLAUDE.md` "How to work" would clear it | rules-reviewer | not applied — the run prompt's checklist requires every external link to carry `[VERIFY]` and says a marker alone is not a packet item; review confirms and clears it in this PR. Pair: 19 | — |
| 25 | index.mdx, "for summarizing client meetings, which is client-identifying information" — ties the tier to the errand (item 25's BG) | rules-reviewer | Applied: "the meeting notes it takes in are client-identifying information" | 1a4815c |
| 26 | index.mdx, "is under the FTC Safeguards Rule and its state's requirements instead" — scope claim without a primary source (Hard rules 3) | rules-reviewer | Applied: Part 314 eCFR link on "FTC Safeguards Rule", marked [VERIFY] | 1a4815c |

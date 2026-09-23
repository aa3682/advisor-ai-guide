# Writing Your AI Policy — finding ledger

writing-your-ai-policy. Opened after the draft commits. Every finding a reviewer subagent raises on this
worksheet is logged below, applied or not, with the reason where it was not.

**Run:** Stages a, b, c, d and f ran. Stage e skipped: this unit has no keyed artifact.
`cold-reader` and `rules-reviewer` were both confirmed registered as agent types before
stage b (this session's agent-type list names both) and were invoked as themselves, each
passed the slug and nothing else. No subagent was missing and no substitution was made.
Two review rounds ran, each with both reviewers: round 1 on the draft (`ccff44a`), round 2
on the round-1 fixes (`56594fc`). No third round ran, so the round-2 fixes (`ffc48fd`) were
not re-read by a reviewer.

Counts: 18 logged, 16 applied, 0 not applied, 2 escalated.

Duplicate pairs (same defect, two sources, logged once per source): 5 and 10, the review
step named by neither name nor link ("the review step later in the Path" / "At the yearly
review").

Repeats within one source, logged once: in round 2, `cold-reader` raised finding 2 again
(the duty map is attached but no decision points to it), still covered by packet item 1
and logged as finding 13 with the round-2 phrase.

Known conditions, reported and not logged as findings, per the run order: item 38's
exemplar line was followed as written; item 40's `[VERIFY]` line was followed as written
(the page carries no external link, so no marker was placed); item 41's cold-reader
context was not reported by either cold read in this run, so it is not known to have held
here. Under item 39, the re-check-trigger wording in "The documents you attach" restates
the Vetting a Vendor checklist, not the companion step page; `rules-reviewer` checked it
against that page and found it matched, and nothing new is filed.

Length trims made to stay within 700–1,000 after applying fixes are not findings. They
are recorded here: after the round-1 fixes the page measured 1,008; the `CLAUDE.md`
"Length" routing check was run first — the two worksheet cross-references in "does not
tell you" moved to the Related list, replacing Vetting a Vendor and Records and
Documentation, which the body prose already links (Vetting a Vendor directly, Records and
Documentation through the figures-page anchor) — and two clauses of reasoning left the
prose under item 33's BX ("because each one changes on its own trigger and the policy
has to say which version it means", "Each is a short answer"), to 990. The round-2 fixes
measure 992.

## Round 1 — draft

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 1 | index.mdx, "A rule that comes from none of the four is not a rule the firm decided, and it comes out" — stated as absolute, but the example points provisions at the manual, a step page and the acknowledgments | cold-reader | Applied: the ground rule now reads "one of the four documents, or the step page that already covers it", and the test is "A rule that points nowhere" | 56594fc |
| 2 | index.mdx, "Duty map \| Map the Rules That Apply \| The date, and the duties per use" — the duty map is attached but none of the five decisions points to it | cold-reader | escalated — packet item 1 | — |
| 3 | index.mdx, "the re-check trigger set for each approved tool" against the appendix row, which records no trigger | cold-reader | Applied: the approved-tools row records "and its re-check trigger" | 56594fc |
| 4 | index.mdx, "A tool approved on a condition is listed with the condition, not as approved" against the example's "the one approved tool" | cold-reader | Applied: the example row reads "the one listed tool, for meeting summaries only and on its condition" (reworded again under 14) | 56594fc |
| 5 | index.mdx, "the review step later in the Path" — no name or link; the reader cannot fill in decision 3 | cold-reader | Applied: decision 3 names and links Review and Keep Records; the decisions table and the example name it. Pair: 10 | 56594fc |
| 6 | index.mdx, "the re-check trigger set for each approved tool" — first appearance, undefined | cold-reader | Applied: "The documents you attach" states the three triggers the checklist sets | 56594fc |
| 7 | index.mdx, "Build any you lack first; a policy written before them has nothing to point to" and "each has its own worksheet or step for that" — no route to the other steps or worksheets | cold-reader | Applied: the four step names in "Before you start" link their step pages; Building Your Use-Case Inventory and Sorting Your Data join the Related list | 56594fc |
| 8 | index.mdx, "the federal rule that the duty map already records" — singular and unnamed | cold-reader | Applied: "the rules the duty map already records for each use" (reworded again under 18) | 56594fc |
| 9 | index.mdx, "Who reviews output \| Sam, before any summary goes into a client file \| Handle Client-Facing Use" — internal use points to a client-facing step | cold-reader | Applied: the cell covers the file and the client; its "Points to" was split, then simplified under 15 | 56594fc |
| 10 | index.mdx, "At the yearly review, and whenever the tool's re-check trigger fires" — prints the compliance-program review cadence, a figure the figures page holds (Hard rules 5) | rules-reviewer | Applied: "At the Review and Keep Records step, and whenever the tool's re-check trigger fires". Pair: 5 | 56594fc |
| 11 | index.mdx, "Nothing from the client-identifying or restricted rows without de-identifying first" — implies restricted information may go in once de-identified, which the data matrix denies (item 33's BX; "A category the guide defines rests on the guide") | rules-reviewer | Applied: the cell separates the two tiers; reworded to cells under 16 | 56594fc |
| 12 | index.mdx, "so the rule is the one already worked out" — the step's reasoning (item 33's BX) | rules-reviewer | Applied: the bullet ends at "from the data matrix" | 56594fc |

## Round 2 — the round-1 fixes

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 13 | index.mdx, "Every rule in the policy names where it comes from: one of the four documents" — the duty map is attached and nothing points to it; repeat of 2 | cold-reader | escalated — packet item 1 | — |
| 14 | index.mdx, "A tool approved on a condition is listed with the condition, not as approved" — reads as a separate status; the example then calls the tool approved | cold-reader | Applied: "listed with its condition beside it" | ffc48fd |
| 15 | index.mdx, "The review point in statement 2; Handle Client-Facing Use" — the "Points to" entry points at the provision itself | cold-reader | Applied: the row points to Handle Client-Facing Use only, and the cell covers the file and the client in one clause | ffc48fd |
| 16 | index.mdx, "The date, and which cells say no" against "client-identifying rows" — cells in one place, rows in another | cold-reader | Applied: the example provision is written from the tool's two cells: "client-identifying only after de-identifying; restricted, never" | ffc48fd |
| 17 | index.mdx, "Update the section when one of its appendices changes, not on a calendar of its own" against decision 3's review date | cold-reader | Applied: "Update the section at the review in decision 3, and whenever one of its appendices changes" | ffc48fd |
| 18 | index.mdx, "which turns on your state's requirements or, for an SEC-registered adviser, the rules the duty map already records" — routes the default reader away from the duty map, which records their state rules too ("What this is"; "A category the guide defines rests on the guide") | rules-reviewer | Applied: the duty map is the reference for both readers, with the SEC flag inside it | ffc48fd |

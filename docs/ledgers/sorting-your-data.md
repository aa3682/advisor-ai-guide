# Sorting Your Data — finding ledger

sorting-your-data. Opened empty before the run. Every finding a reviewer subagent raises on this
worksheet is logged below, applied or not, with the reason where it was not.

**Run:** Stages a, b, c, d and f ran. Stage e skipped: this unit has no keyed artifact.
`cold-reader` and `rules-reviewer` were both confirmed registered as agent types before
stage b and were invoked as themselves, each passed the slug and nothing else. No
subagent was missing and no substitution was made.

## Stages b to d — cold read and rules read

Counts: 10 logged, 5 applied, 2 not applied, 3 escalated. The fix-up round below adds
5 more, for 15 across both rounds. Duplicate pairs
(same defect, two sources, logged once per source): none. Findings 3, 4, 5 and 10 all
land on "The result" table, but they are four different defects, not one reached twice.

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 1 | index.mdx, "is set out in its own terms-of-service and data-handling pages and nowhere else" — contradicts the "Where you confirm it" column, which sends the reader to a signed agreement | cold-reader | Applied: "and nowhere else" becomes ", and in any agreement the firm has signed — not in its marketing" | 760c6b6 |
| 2 | index.mdx, "put each into one of the four tiers the step page defines" — reader stopped, thinking the worksheet was incomplete without another page; the four tiers are in the table directly below | cold-reader | Applied: reads "one of the four tiers below" | 760c6b6 |
| 3 | index.mdx, "one plain answer in every cell" — four tiers against four categories is sixteen pairings, but the example lists five rows, so the reader could not tell whether five answers or sixteen were wanted | cold-reader | Applied: the sentence now names the sixteen pairings and says the example shows the shape rather than the whole grid | 760c6b6 |
| 4 | index.mdx, "Restricted \| Any general-purpose tool \| No" — "Any general-purpose tool" appears to cover the consumer and business tiers and possibly a signed-agreement tool, so it reads as contradicting the client-identifying row one line above | cold-reader | escalated — packet item 1 | — |
| 5 | index.mdx, "Yes, where the agreement covers this use" — the row it answers is "Signed-agreement or business tier", and a business-tier subscription has no negotiated agreement to consult | cold-reader | escalated — packet item 1 | — |
| 6 | index.mdx, "that was settled on the use-case list" — the worksheet never asks the reader to make a use-case list, so the reader could not tell whether they were behind | cold-reader | Applied: reads "that was settled before this worksheet, on the use-case list" | 760c6b6 |
| 7 | index.mdx, "a fifth usually means two things are kept apart that belong together" — a frequency claim the reader cannot check, and the only reason given for capping the scheme at four | cold-reader | not applied — the same framing is settled prose on the merged step page (`content/process/sort-your-data/index.mdx:20`, "a fifth or sixth usually means two are kept separate that need not be"); rewording it here alone would put the worksheet against a merged page | — |
| 8 | index.mdx, "Usually builds these commitments into the product itself" — a claim about a whole class of unnamed vendors that the reader cannot check against anything | cold-reader | not applied — same reason as 7; the merged step page states it at `:24` ("has usually already made these commitments part of the product itself") | — |
| 9 | index.mdx, "Retention windows and plan-level limits go nowhere on this page" — "this page" had meant the guide page everywhere else, so the instruction aimed at the reader read as the guide's editorial policy | cold-reader | Applied: reads "Do not copy retention windows or plan-level limits into the matrix" | 760c6b6 |
| 10 | index.mdx, "Removing a name is not removing the person" — ESCALATE: three passages restate the companion step page closely, and no written rule governs how much a worksheet may restate its step page | rules-reviewer | escalated — packet item 2 | — |

## Stage e — blind check

Skipped — this unit has no keyed artifact. No extract was taken, so none was read back
or deleted, and no `blind-checker` was invoked or checked for. The key is not in this
file because this repo holds none.

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |

## Found by the run, not by a reviewer

The first `pnpm build` after drafting emitted `warn [nextra] Failed to get the last
modified timestamp from Git for the file content/tools/sorting-your-data/index.mdx`,
because the file was still uncommitted. Committing it cleared the warning; the build is
warning-free on the reported head. Recorded because a run that builds before committing
its new page will see a warning that no edit fixes.

## The packet

| Item | Ruling | Option taken | Where it landed |
| ---- | ------ | ------------ | ---------------- |
| 1 | accept all | (c) | `8bd1ed5` — the result grid redrawn here; step-page half filed as FOLLOWUPS item 32 |
| 2 | accept all | (a) | no page change; filed as FOLLOWUPS item 33 |

New standing rules written into the rules doc: none.

## Fix-up round

One round, as capped. After Parts A to C were committed, `cold-reader` and `rules-reviewer`
were each invoked once more on `content/tools/sorting-your-data/` and passed the slug only.
`rules-reviewer` returned no findings: it reported the page clean against every check, and
recorded that the two things it would otherwise have raised — the worksheet's
*Client-identifying × Business tier* answer diverging from the step page, and the three
restating passages — are already held as FOLLOWUPS items 32 and 33. `cold-reader` returned
the five below. Counts: 5 logged, 4 applied, 1 not applied, 0 escalated.

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |
| 11 | index.mdx, "Business tier of the same tool" — the grid turns on the difference between a business tier and a signed agreement, and the page never says how to tell them apart or why the answers differ | cold-reader | Applied: "The result" now says the two rows differ on who signed what, and that a public terms page alone does not qualify for client-identifying information | 63d2366 |
| 12 | index.mdx, "That is sixteen pairings, each needing an answer." — with all sixteen cells printed, the reader could not tell whether the grid was their answer sheet or an example to reproduce | cold-reader | Applied: the prose now says the answers are the guide's, to copy and then change where the reader's own reading of the terms contradicts a cell | 63d2366 |
| 13 | index.mdx, "No — de-identify first" — if de-identifying succeeds the information is no longer client-identifying, so the cell reads as telling the reader to change tier rather than satisfy a condition inside one | cold-reader | Applied: the paragraph now states that what goes in is a different piece of information, sorted on its own — item 25's BG. See sign-off note C | 63d2366 |
| 14 | index.mdx, "a fifth usually means two things are kept apart that belong together" — a flat assertion with nothing behind it | cold-reader | not applied — repeat of finding 7; the same framing is settled prose on the merged step page (`content/process/sort-your-data/index.mdx:20`). See sign-off note D | — |
| 15 | index.mdx, "that was settled before this worksheet, on the [use-case list]" — nothing earlier on the page says a prior list exists or where it is made | cold-reader | Applied: reads "on the use-case list the first step builds" | 63d2366 |

## Sign-off notes

**A — Client-identifying information in a business tier, with no signed agreement, reads
"No — de-identify first".** The owner's substantive call, made under Part A.3 of the fix-up
order. Derivation, from text already in the guide: the worksheet's own "Read the terms, not
the reputation" bullet says a business tier runs on pages that "change on the vendor's
schedule"; `content/process/vet-and-choose-tools/index.mdx:24` says "If a tool is going to
touch client-identifying or restricted information, a signed agreement is not optional — a
public terms page alone does not qualify." A business plan without a signed agreement rests
on a public terms page, so it falls on the same side as the consumer tier. No new claim
about what vendors do was added to reach this. Accepting it means the guide now says a paid
business plan is not by itself enough for client-identifying information, which is stricter
than the bundled row the step page still carries (FOLLOWUPS item 32).

**B — the two Restricted rows read "Only if the promise behind the restriction allows it".**
A second substantive call from the same redraw, beyond the cell Part A.3 named. The
restricted tier is defined on this page as client-identifying information the firm has
promised to handle a set way, so whether any tool may take it depends on that promise rather
than on the tool. The step page's row reads "Restricted | Any general-purpose tool | No",
which the redraw keeps for the consumer and business tiers, the two general-purpose ones.
Accepting it means restricted information is not barred outright from a signed-agreement or
advisor-specific tool; the firm's own promise decides.

**C — the page still does not say when de-identification succeeds.** Finding 13 is applied,
so the page no longer reads as if de-identifying were a condition inside the
client-identifying tier. What remains is that the page says plainly when de-identification
fails ("Removing a name is not removing the person") and never says how a reader would know
it worked. That is the step page's position too. Accepting it means the reader is told to
judge it and given no test.

**D — the "fifth tier" claim is unsupported on both pages.** `cold-reader` raised it in both
rounds (findings 7 and 14) and it was not applied either time, because the same wording is
settled prose on the merged step page. Accepting it means the four-tier cap rests on the
guide's judgment, stated without a reason, in two places.

## Sign-off

| Note | What it said | Accepted as |
| ---- | ------------ | ----------- |

Reversals from this ledger at sign-off: <finding numbers and the commit that reversed
each, or none>.

## Published

<Merge commit. Publish steps in order, content deployed before anything went live.>

**Controls:** <each checking procedure used, and the known-good result it reproduced
before its verdict was trusted>

**Verified after publish:** <what was checked, how>

**Not verified, and not inferred:** <what could not be checked and why; the human check
that covers it, or the gap the owner accepted>

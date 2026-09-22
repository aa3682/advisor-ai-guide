# Sorting Your Data — finding ledger

sorting-your-data. Opened empty before the run. Every finding a reviewer subagent raises on this
worksheet is logged below, applied or not, with the reason where it was not.

**Run:** Stages a, b, c, d and f ran. Stage e skipped: this unit has no keyed artifact.
`cold-reader` and `rules-reviewer` were both confirmed registered as agent types before
stage b and were invoked as themselves, each passed the slug and nothing else. No
subagent was missing and no substitution was made.

## Stages b to d — cold read and rules read

Counts: 10 logged, 5 applied, 2 not applied, 3 escalated. Duplicate pairs
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
| 1 | awaiting owner | — | — |
| 2 | awaiting owner | — | — |

New standing rules written into the rules doc: none yet; packet item 2 asks for one.

## Fix-up round

One round, as capped. <What was re-read.>

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |

## Sign-off notes

<Lettered A, B, C — each a tension left after the fix-up, what it is and what accepting
it means. Or: None.>

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

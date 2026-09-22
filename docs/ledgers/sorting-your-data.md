# Sorting Your Data — finding ledger

sorting-your-data. Opened empty before the run. Every finding a reviewer subagent raises on this
worksheet is logged below, applied or not, with the reason where it was not.

**Run:** <which stages ran; each subagent confirmed registered and invoked as itself,
or which was missing and the run stopped>

## Stages b to d — cold read and rules read

Counts: <N> logged, <N> applied, <N> not applied, <N> escalated. Duplicate pairs
(same defect, two sources, logged once per source): <pairs, or none>.

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |

## Stage e — blind check

<Rounds run, and what each covered. Or: "Skipped — this unit has no keyed artifact.">
Extract taken outside the working tree each round, key stripped and read back, deleted:
<confirm>. The key is not in this file.

| # | Finding | Source | Fix | Commit |
| - | ------- | ------ | --- | ------ |

## Found by the run, not by a reviewer

<Defects the session found itself, beyond any reviewer's brief. Or: None.>

## The packet

| Item | Ruling | Option taken | Where it landed |
| ---- | ------ | ------------ | ---------------- |

New standing rules written into the rules doc: <list, or none>.

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

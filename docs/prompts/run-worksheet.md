# Run a worksheet

The one-touch pipeline. One agent session drafts a whole worksheet, has it reviewed,
applies what the written rules already cover, and comes back once with an escalation
packet.

**Input:** a worksheet <slug> whose outline is already ruled in `CLAUDE.md` "Worksheet page (tools)" for the section order, `content/tools/index.mdx` for the title and slug, and the `FOLLOWUPS.md` item that rules this worksheet's two input-section names, its sidebar label, and any skeleton heading it renames (item 29's BR requires one for every worksheet; item 31's BU binds all three exactly).

**Do not start** if the outline is not ruled. An unruled outline is the owner's first
touch, not this session's work. Say so and stop.

**The three touches.** The owner rules the outline, answers one escalation packet, and
reads the render once to sign off. Nothing else in this run waits on a reply.

## Standing constraints

These hold at every stage. They are decisions, not preferences.

- **One page per unit.** The worksheet is one file, `content/tools/<slug>/index.mdx` (`CLAUDE.md` "Page templates": one folder per page). Each outline entry is an H2 section of that file, not a file of its own.
- **item 29's BR.** This run follows this prompt. Its report replaces the "Report" section in `CLAUDE.md` "How to work", suggested follow-ups go under "Beyond-spec calls", and the run opens a pull request and does not merge. The run does not edit `CLAUDE.md`: it lists the Glossary running list lines the page needs, and the fix-up order applies them.
- **item 28's BQ.** On a worksheet page, "At a larger firm" is an H2 with the Callout beneath it, and only the Related list follows it.
- **item 31's BU.** The `FOLLOWUPS.md` item that rules this worksheet's outline binds every stage: its two input-section names, its sidebar label, and any skeleton heading it renames, each exactly.
- **item 13's F, with CLAUDE.md hard rule 2.** The guide holds no platform-set figures and names no vendor, model, or platform. Where a vendor's terms matter, name the concept, tell the reader to check the vendor's current terms, and link `/tools/vetting-a-vendor`.
- **item 16's T.** Do not merge, including after a fix-up.
- **item 19's AQ, with item 25's BM.** No pull request merges until the owner has reported the live-site check for the previous merge.
- **item 22's AX, AY, AZ, BA and BB.** Glossary links follow these rulings as written in item 22: which string gets the link, defining lines, headings, where the rule does not reach, and link text.
- **item 17's AL.** 17 CFR 248.30 is "Regulation S-P's safeguards rule" and 16 CFR 314 is "the FTC Safeguards Rule", exactly.
- **item 25's BE.** Which federal privacy-notice rule, if any, reaches a state-registered adviser is unresolved (item 17). Name none for that reader.
- **item 49's CV.** A piece of information's tier follows the information, not the errand it is attached to. Never map a tier to a kind of work.
- **item 8's closing status block.** The client-identifying tier is the guide's own plain-language category; 17 CFR 248.30 is cited only as illustration, scoped to Commission-registered advisers.

Everything in `CLAUDE.md` applies too. Read it at the start of the run rather than
working from memory of it.

**Branch.** Work on the branch the run order names and push there. Not your session's
default branch. **Do not merge.**

**Confirm each subagent is registered before the stage that needs it.** An agent file
that exists on disk is not the same as an agent type the session will dispatch to.
Check `cold-reader` and `rules-reviewer` before stage b. This repo defines no
`blind-checker`: stage e skips itself, so no check is made for it and its absence does
not stop the run.

**A missing subagent stops the run.** Report which one and stop. Do not hand its
definition to a general-purpose agent and carry on: the tool restriction in the agent
file is what isolates the reader, and a general-purpose agent turns that limit into a
request. A substituted read is not the read this pipeline specifies and must never be
reported as one.

**Files this run may touch:** `content/tools/<slug>/`, `docs/ledgers/<slug>.md`, and
`content/tools/_meta.js`, for one entry only: this worksheet's slug and its ruled sidebar label, placed in the order `content/tools/index.mdx` lists the tools. Anything else — including `CLAUDE.md` and
`FOLLOWUPS.md` — is an escalation, not an edit. If the run needs something outside
these paths that does not exist, stop and report it; it should have been found by the
discovery pass.

**Loop caps:** defaults. Defaults: a changed item is re-read at most **3 rounds**; what
remains after that is logged as unresolved or goes to the packet. Do not start a fourth.

**Credentials never enter this session.** A check that needs a login goes in the report
as NOT verified, with the human check that would verify it.

## Stage a — draft

Draft the worksheet in outline order: one H2 section per outline entry, all in the
single file `content/tools/<slug>/index.mdx`. Follow `CLAUDE.md` and the locked decisions in `FOLLOWUPS.md`.

Where the worksheet already has approved prose, it is the style exemplar. Where it has
none, `content/tools/building-your-use-case-inventory/index.mdx` is.

**Self-fix mechanical defects without asking.** The test is whether the fix can change
what the text means. If it cannot, fix it and move on. Mechanical here: spelling and punctuation that cannot change meaning; MDX and markdown syntax; a heading's level where the skeleton sets it; the exact Callout import line; a glossary anchor or internal link path corrected to an id or slug that exists under `content/`; and the frontmatter title matched to the H1. Nothing else is mechanical.

**Not mechanical, and therefore escalation material:** any change of meaning, any choice
the rules leave open, any change to the outline, and anything outside the allowed paths.

Commit per file or per coherent group. The ledger records commit hashes, so the commits
have to exist before stage d closes.

## Stage b — cold read

Invoke `cold-reader` on `content/tools/<slug>/`. Pass it the <slug> and nothing else — not
the outline, the rules, your drafting notes, or a summary of intent. Its value is that
it does not have them.
The session harness loads `CLAUDE.md` into every session's context, including the cold reader's, so the read is cold to everything except that file.

## Stage c — rules read

Invoke `rules-reviewer` on the same worksheet. It reads `CLAUDE.md`,
`FOLLOWUPS.md` and `content/tools/<slug>/` for itself. Pass it the <slug>.

## Stage d — apply and log

**Apply every finding whose fix stays inside the written rules.** A fix stays inside the
written rules when the rule it answers to is already written in `CLAUDE.md` or
`FOLLOWUPS.md` and applying it changes only prose inside the allowed paths. Apply
it by default. The owner reverses it at sign-off if it was wrong — that is the reversal
path, not a reason to ask first. Asking first would reinstate the round trip this
pipeline removes.

**Everything else goes to the packet in stage f.** Do not apply it and do not
half-apply it.

Log every finding in `docs/ledgers/<slug>.md`, applied or not, in the ledger's table
shape: finding, source, fix, commit.

- **Finding** — the reviewer's words, short, with the filename and searchable phrase.
- **Source** — which reviewer.
- **Fix** — what changed, in one line. Escalated: `escalated — packet item N`. Not
  applied: `not applied —` and the reason.
- **Commit** — the real hash. Never `this commit`. A commit cannot contain its own
  hash, so before you report, fill in the hashes for rows written in your last content
  commit with one final ledger-only commit.

**Log a duplicate once per source.** Two reviewers reaching the same defect
independently is signal; note the pair, do not merge the rows.

## Stage e — blind check

*Only if the worksheet has a keyed artifact (this repo's worksheets have none). If not, skip this stage and say so in the
report.*

Draft a keyed artifact (this repo's worksheets have none) against the rules in `CLAUDE.md`. The key stays in
no location (this repo holds no key) and never leaves it — not into `content/tools/<slug>/`, the ledger, the
extract, or the report.

1. **Extract to a temp file outside the working tree.** Items and their options only.
   Strip the key and anything that explains why an answer is right. **Read the extract
   back and confirm both are gone** before passing it on.
2. **Invoke `blind-checker`** with the <slug> and the extract's path. Nothing else.
3. **Compare its answers to the key.** Each of these is a finding: a wrong pick; a
   defensible alternative, picked or not; an item the worksheet never taught; an option
   carrying a claim the worksheet endorses; a pick it could not cite, even a correct one.
4. **Apply and log** in-rules fixes, source `blind-checker`. Anything else goes to the
   packet. If a fix changes an item, re-extract and re-check what changed, within the
   loop cap.
5. **Delete the temp file** and say so in the report.

Record findings as "the reader picked an option that was not the key", never as which
option the key names.

## Stage f — the escalation packet

A numbered list. Each item: what it is, what it touches, options **(a)(b)(c)**, and
**your recommendation**. One item per decision.

**An item belongs in the packet if it:**

1. touches a locked decision,
2. changes the unit's boundary, its order among units, or the outline,
3. rests on a factual claim you are not confident in,
4. sets the reviewers against each other, or two written rules against each other, or
5. needs a new rule.

Nothing else goes in it. If nothing qualifies, the packet is the single line
`No escalations.` That is a real outcome.

**The reply format is fixed.** The owner replies `accept all` or `accept all except N,
M`. `accept all` means each item's recommended option. **Treat no other reply as a
ruling.**

## Report format

Post this and nothing more. **Do not print full files.**

**1. Checklist.** Pass or fail, one line each, failure named:

- outline ruled, and unchanged by this run
- everything in the outline drafted, in outline order
- rules read against, not only searched
- subagents confirmed registered before the stages that use them
- `cold-reader` run; its file list matches `content/tools/<slug>/`
- `rules-reviewer` run; its file list includes the rules docs and every content file
- every in-rules finding applied and logged; every other finding logged with a reason
- blind check run, or skipped because there is no keyed artifact; temp extract deleted
- `blind-checker` run (if stage e ran); its file list matches `content/tools/<slug>/` plus the
  extract path
- no loop ran past its cap
- pushed to the branch the run order named; nothing merged
- no files touched outside the allowed paths
- `pnpm wordcount content/tools/<slug>/index.mdx` reads 700–1,000; raw output quoted. If outside the range, the `CLAUDE.md` "Length" routing check was run first, and what remains is a packet item, because recording an accepted exception in `FOLLOWUPS.md` is outside this run's paths
- `git fetch --unshallow` run first where the clone is shallow, its output quoted (item 31's BW); then `pnpm build` completes with no warnings; the raw tail of its output quoted
- H2 sections in the skeleton's order, the two input sections named and any renamed skeleton heading worded exactly as the outline item rules (item 31's BU)
- every table has three columns or fewer
- `content/tools/_meta.js` gained exactly one entry, this worksheet's slug with its ruled sidebar label, and nothing else in it changed
- every glossary link resolves to an id in `content/glossary/index.mdx`, and every internal link to a path under `content/` or to a tool slug `content/tools/index.mdx` lists (item 31's BT)
- Glossary running list: every term this page links, with the line `CLAUDE.md`'s running list needs; not applied in this run (item 29's BR)
- every external link the run cannot confirm live carries `[VERIFY]` and appears under NOT verified; a URL already confirmed in chat on an earlier merge carries no marker and appears under "previously confirmed" with where it was confirmed; chat still fetches every external link before merge; a `[VERIFY]` marker alone is not a packet item

**2. Commit hashes.** One line per commit, hash and subject.

**3. Ledger.** Path, and counts: logged, applied, not applied, escalated. They must add
up.

**4. Beyond-spec calls.** Every judgment you made that no rule told you to make. Empty
only if there were none.

**5. NOT verified.** Everything you could not check, and the short human check that
would. Empty only if you truly checked everything.

**6. The escalation packet.**

A checklist that reports pass on something you did not check is worse than a fail.

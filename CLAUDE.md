# The Adoption Path — repo instructions

## What this is
An open, public reference site on using AI inside a small independent investment advisory practice, built as a Nextra 4 docs site. Visual reference only: https://www.promptingguide.ai/ — match its look using the stock nextra-theme-docs; never copy its content or components.

Audience: the adviser who already runs a solo or two-person registered investment adviser and wants to use AI in the firm without creating a compliance problem, first; the adviser at a larger firm who wants to understand what independent practitioners are doing with these tools and what the rules require, second. Write for that reader: someone who knows how an advisory firm runs but has not thought through AI in it.

Default scenario: Most pages assume a state-registered adviser with no staff beyond an assistant, using general-purpose AI tools (chat assistants, document tools, automation platforms not built for the advisory industry) rather than advisor-specific vendor products. Where an advisor-specific platform changes the answer, the page says so and flags the divergence. Where an SEC-registered adviser's obligations differ, the page flags that too. The guide assumes the firm already exists and has a compliance program; it is not a guide to forming a firm.

## Hard rules
1. Never reference any professional certification body, certification mark, licensing exam, official curriculum, or official topic list — anywhere: page copy, titles, slugs, frontmatter, alt text, README, comments, commit messages. No certification acronyms, no "certified" phrasing. Describe concepts in plain language instead.
2. No AI model, platform, processor, or brand names anywhere in the guide — not in step names, area names, slugs, titles, descriptions, headings, metadata, or body prose. Nothing commercial is linked from the guide; no affiliate links.
3. All content is original. No verbatim or lightly paraphrased text from textbooks, study guides, courses, or official publications. When a fact needs support, cite a public primary source (statute, regulation, agency publication, standards document, court decision, peer-reviewed paper) with a link.
4. Content is educational, not individualized advice. The standard disclaimer lives on each section landing page only (introduction, process, domains, tools). Do not repeat it on individual pages.
5. Do not invent statistics, thresholds, limits, or rates. If a number is year-specific, state the year and cite the source. If unsure, write "[VERIFY]" inline and list it in the report. On knowledge-area pages the figures rule in the area template takes precedence: a figure set by law, regulation, or an agency goes on /tools/this-years-figures, not on the page. Figures set by a platform — pricing, data-retention windows, context and usage limits — are printed nowhere in the guide; see the area template.
6. No personal data, no real client examples. Worked examples use obviously fictional people.

## Attribution and license
- The guide is published under a project name, not a personal name. The site names no personal name, employer, credentials, or licenses anywhere, on pages or in metadata. Its author is described only by: written by someone with more than fifteen years of hands-on experience inside wealth management and investment advisory, working from public primary sources.
- Prose is CC BY 4.0 and code is MIT. This is stated on /about and in README.
- The About page carries one sentence of the landing-page disclaimer as plain prose, not the full Callout. This is intentional.

## Structure
Top-level sections, in this sidebar order:
1. introduction
2. process — the steps of The Adoption Path, one folder per step
3. domains — the knowledge areas (Firm Functions), one folder per area
4. tools — calculators, checklists, worksheets
5. glossary
6. about

The Adoption Path steps (title | slug):
1. Decide What AI Is For | decide-what-ai-is-for
2. Map the Rules That Apply | map-the-rules-that-apply
3. Sort Your Data | sort-your-data
4. Vet and Choose Tools | vet-and-choose-tools
5. Write the AI Policy | write-the-ai-policy
6. Build the Workflows | build-the-workflows
7. Handle Client-Facing Use | handle-client-facing-use
8. Review and Keep Records | review-and-keep-records

Firm Functions (title | slug):
- Advice and Planning Work | advice-and-planning-work
- Client Communication and Marketing | client-communication-and-marketing
- Operations and Back Office | operations-and-back-office
- Compliance and Supervision | compliance-and-supervision
- Data Privacy and Security | data-privacy-and-security
- Records and Documentation | records-and-documentation
- Vendor Oversight | vendor-oversight
- Prompting and Review Skills | prompting-and-review-skills

Step and area names are final; do not rename. Slugs are lowercase-kebab-case and match the folder name.

## Stack
- Nextra 4, nextra-theme-docs, Next.js App Router, MDX in content/
- pnpm only. Never use npm or yarn.
- Keep the build warning-free.
- Custom CSS limited to one accent color variable. No custom components unless the owner asks.

## Writing style
- Plain English, short paragraphs, active voice. Define a term the first time it appears and link it to the glossary.
- Landing pages and any page outside content/process/ and content/domains/: one H1, a two-sentence summary under it, then H2 sections. End with a "Related" list linking to 2–4 other pages. Pages under those two folders follow the Page templates section instead: the opening paragraph replaces the summary, and the cross-link sections replace the Related list.
- Use Nextra callouts sparingly: one "Note" or "Warning" per page at most.
- Tables for comparisons; bullet lists for steps; prose for explanation.

## Page templates
Two fixed skeletons. Every page under process/ uses the step skeleton. Every page under domains/ (the knowledge areas) uses the area skeleton. Write the sections in the order given; do not add, remove, or reorder them.
Every step page lives at `content/process/<slug>/index.mdx` and every knowledge-area page at `content/domains/<slug>/index.mdx`, one folder per page. The step-page and area-page skeletons are documented below; the example files that once showed each skeleton with a one-line instruction in place of every sentence were removed once the first real step and area pages landed.

Step page skeleton:
1. Frontmatter with `title` and `description`. The description is one sentence, plain language.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading: what this step is, in plain words.
4. "Why it matters"
5. "What actually happens" — 3–5 short H3 subsections describing the concrete work.
6. "Questions to ask yourself"
7. "Common mistakes"
8. "Which knowledge areas apply" — links to 2–4 area pages, one line each on why it applies at this step.
9. "At a larger firm" — a Callout, 3–6 sentences: what changes for the adviser at a larger firm — supervision, approvals, existing vendor stack.
10. "Next step" — one link to the following step page. The last step links back to the first.

Area page skeleton:
1. Frontmatter with `title` and `description`.
2. H1 matching the frontmatter title.
3. Opening paragraph, no heading.
4. "Key ideas" — 4–7 H3 subsections, one concept each.
5. "Where it shows up in the process" — links to the relevant step pages.
6. "Common misconceptions"
7. "At a larger firm" — a Callout, same treatment as above.
8. "Go deeper" — 2–6 links, prefer fewer, to public primary sources: statutes and regulations, agency publications, standards bodies, and academic papers cited by DOI. Primary sources for this topic: the Investment Advisers Act and rules under it; SEC releases, risk alerts, and staff guidance; state securities regulator publications and NASAA model rules; FINRA notices where they bear on dual registrants; the NIST AI Risk Management Framework.

Conventions for both:
- Measure with pnpm wordcount <path>. See Length below for the soft range.
- Second person, plain English. No jargon without a one-line explanation.
- Headings are plain nouns or short questions. H2 for the numbered sections above, H3 within them.
- No disclaimer on individual pages; it lives on the landing pages only.
- Area pages never print yearly-changing figures — limits, thresholds, rates, deadlines. Where one is relevant, name the concept in plain language and link to /tools/this-years-figures (for example: 'up to the yearly limit — see this year's figures'). That page holds every figure set by law, regulation, or an agency, with its year and primary source, and is updated once a year. Platform-set figures — pricing, data-retention windows, context and usage limits — are held nowhere in the guide, because a vendor's public terms change on the vendor's schedule, not the guide's. Where one matters, name the concept, tell the reader to check the vendor's current terms, and link /tools/vetting-a-vendor; never print the number and never link the figures page for it. Adding platform rows back is an owner ruling, not a drafting choice. Every 'Go deeper' link must be fetched and confirmed live before the PR is opened; any link that cannot be confirmed is marked [VERIFY] in the report. Round hypothetical numbers in a worked example ('200 units a month for ten years') are fine and encouraged.
- Links to the U.S. Code use the granuleid form: https://uscode.house.gov/view.xhtml?req=granuleid%3AUSC-prelim-titleNN-sectionNNNN&num=0&edition=prelim (substitute the title and section). The "title:NN section:NNN" form is not used.
- Row schema on /tools/this-years-figures: one figure per row, columns Concept | What it governs | Value | Year | Source, grouped under one H2 per Firm Function with a stable id (`## Firm Function [#slug]`) in the site's order. A figure appears once, under the area it fits best. Every Value comes from a fetched primary source or reads VERIFY; never fill a Value from memory.
- A row whose Value cannot be fetch-confirmed before merge is removed from the page, not merged with a marker. Its concept is appended to FOLLOWUPS item 9 under "Awaiting confirmation," with what was tried.
- Figures that vary by state: Value reads "Varies by state", Year is blank, and Source links a federal locator page if one exists or otherwise names the state office in plain text ("Your state's licensing board"). Never build a per-state table.
- Figures fixed by statute that do not change yearly still get a row: Year reads "Set by statute" and Source links the statute or the agency page.
- The Year column reads a year, "Set by statute," "Set by rule" (a figure fixed by a rule that has not changed), or is blank for "Varies by state." Confirmation dates are recorded in FOLLOWUPS.md, not on the page.
- A Firm Function section with no confirmed rows keeps its H2 and stable id, carries no table, and reads exactly: "No figure in this area is referenced in the guide yet."
- A category the guide defines rests on the guide. Where a federal rule that does not reach a state-registered adviser articulates the same concept, cite it as illustration, never as the definition's source, and say who the rule applies to.
- On /tools/this-years-figures, a row sourced to a rule that does not reach a state-registered adviser says who it applies to in the "What it governs" column.
- A row sourced to a federal rule that does not reach state-registered advisers carries its scope line inside the "What it governs" cell, for example "Applies to SEC-registered advisers; a state-registered firm follows its state's rule." No companion "Varies by state" row is added for scope alone.
- Internal links use the site's existing slugs. Check the actual paths under content/ before writing a link.
- The Callout is the stock component from nextra/components, the same one the landing pages use. Import it with exactly this line: `import { Callout } from 'nextra/components'`
- The hard rules and writing style above apply in full to page bodies, headings, and frontmatter, including titles, descriptions, and slugs.

Worksheet page (tools):
- Path: `content/tools/<slug>/index.mdx`, one folder per page.
- 700–1,000 words of body prose, tables excluded. Measure with pnpm wordcount <path>.
- Second person, plain English.
- H2 sections in this order, headings only: "What this measures", "Before you start", first input section, second input section, "The result", "What the number does and does not tell you", "What to do with it", "At a larger firm" (Callout), then Related.
- Input section names are worksheet-specific: name each for the two things the worksheet gathers.
- Checklists use the same skeleton with the input sections named "Goals to consider" / "Your goals" and "The result" renamed "Your short list".
- Tables have three columns at most so they render on a phone without horizontal scrolling.
- No regulated figures. Name the concept and link the matching section of /tools/this-years-figures.
- "At a larger firm" is a Callout and comes last, followed only by the Related list.
- No disclaimer.
- Example values in tables and worked examples are round hypothetical numbers.

## Length
Soft ranges, body prose only, measured with pnpm wordcount: step pages 800–1,100; area pages 900–1,200; worksheet pages 700–1,000; landing pages 300–500. A page outside its range is first checked for a cross-reference that belongs in a linked list instead of prose; an accepted exception is recorded in FOLLOWUPS.md with the measured length, what was tried, and why it stands.
/tools/this-years-figures is exempt from the worksheet range. Its table rows are not measured. Its non-table prose is capped at 500 words.
/glossary is exempt from all length ranges. Its length follows the term list; do not lengthen definitions to reach a word count.

## How to work
- Do exactly what the prompt asks. Do not add sections, pages, or features that were not requested.
- Commit after each completed prompt with a one-line message describing the change. Never push unless the prompt says to push.
- Never delete or rewrite existing content pages unless the prompt names the file.
- End every task with a "Report" section: what was created or changed (file paths), anything marked [VERIFY], anything you were unsure about, and the exact command to view the result.
- A link that cannot be confirmed live ships marked `[VERIFY]` in the open PR, where review fetches and confirms it. Once confirmed, remove the marker in the same PR. No page merges carrying a `[VERIFY]` marker; confirming and clearing are one step, not two.
- Claude Code merges a pull request only on the owner's explicit instruction to merge that pull request, given after chat has read the diff. It never merges on its own judgment, including after a fix-up commit. An instruction that carries a condition authorizes nothing until the owner confirms the condition is met. A prompt's closing line does not grant merge authority. No pull request is merged until the owner has reported the live-site check for the previous merge.
- Do only what the current prompt asks. Do not act on your own follow-up suggestions, and do not edit files outside the scope of the prompt, even to fix something you notice. List anything you would have done under a "Suggested follow-ups" heading at the end of your report and in the PR description, and leave it there.
- The post-merge live-site check is the owner's step, made from the phone. A merge instruction to Claude Code ends at the merge and main's head; Claude Code does not attempt the live check, because vercel.app is unreachable from sessions (FOLLOWUPS item 4).

## FOLLOWUPS
FOLLOWUPS.md at the repo root records anything deferred mid-build, one numbered item per entry. Append new items as they come up. When an item closes, append a status block below the original entry rather than deleting or rewriting it, and say so explicitly if the original entry's framing turns out to have been wrong.
A ruling recorded in FOLLOWUPS.md is cited item-qualified — "item 20's V", not "ruling V" — because some letters name two different rulings.

## Glossary
One page at /glossary, alphabetical. Every term is an H3 with an explicit id: `### Term [#term-id]`. The id is the term in lowercase, with spaces and slashes replaced by hyphens and hyphens already in the term kept as they are; all other punctuation is dropped, and there are no leading or trailing hyphens. Definitions are 1 to 3 sentences with no regulated figures; where a term turns on one, link the matching section of /tools/this-years-figures by anchor. Same-page cross-references (`[other term](#other-term-id)`) are allowed sparingly, and only where the linked term is part of the entry's own definition rather than background it merely touches on.
Links to glossary terms from any page use the anchor form /glossary#term-id; a plural link text maps to the singular term's id.
Link a term at its first use on every page, including when that first use is in a table cell.

## Glossary running list
Every term that any page links to /glossary. Rebuilt from the files by the consistency pass close-out on 2026-09-20, at main `0cfa5b5`; the maintenance rule still applies: add a page to a term's line when a new page links it. Future prompts reference this list instead of restating it.

- Advertisement [#advertisement] — linked from content/domains/client-communication-and-marketing/index.mdx, content/process/handle-client-facing-use/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/tools/this-years-figures/index.mdx
- Advisor-specific platform [#advisor-specific-platform] — linked from content/introduction/index.mdx, content/process/decide-what-ai-is-for/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Automation platform [#automation-platform] — linked from content/domains/operations-and-back-office/index.mdx, content/domains/vendor-oversight/index.mdx, content/introduction/index.mdx, content/process/sort-your-data/index.mdx
- Books and records [#books-and-records] — linked from content/domains/records-and-documentation/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/tools/this-years-figures/index.mdx
- Breach notification [#breach-notification] — linked from content/domains/data-privacy-and-security/index.mdx, content/tools/this-years-figures/index.mdx
- Brochure [#brochure] — linked from content/process/handle-client-facing-use/index.mdx, content/process/map-the-rules-that-apply/index.mdx
- Broker-dealer [#broker-dealer] — linked from content/process/map-the-rules-that-apply/index.mdx
- Client-identifying [#client-identifying] — linked from content/process/build-the-workflows/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Compliance program [#compliance-program] — linked from content/domains/compliance-and-supervision/index.mdx, content/introduction/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/tools/this-years-figures/index.mdx
- Concentration risk [#concentration-risk] — linked from content/domains/vendor-oversight/index.mdx
- Data matrix [#data-matrix] — linked from content/domains/data-privacy-and-security/index.mdx, content/domains/vendor-oversight/index.mdx, content/process/build-the-workflows/index.mdx, content/process/review-and-keep-records/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/process/write-the-ai-policy/index.mdx
- De-identification [#de-identification] — linked from content/domains/data-privacy-and-security/index.mdx, content/process/sort-your-data/index.mdx
- Dual registrant [#dual-registrant] — linked from content/process/decide-what-ai-is-for/index.mdx, content/process/index.mdx, content/process/map-the-rules-that-apply/index.mdx
- Duty map [#duty-map] — linked from content/domains/data-privacy-and-security/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/process/review-and-keep-records/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/process/write-the-ai-policy/index.mdx
- Endorsement [#endorsement] — linked from content/domains/client-communication-and-marketing/index.mdx
- Examination [#examination] — linked from content/process/map-the-rules-that-apply/index.mdx, content/process/review-and-keep-records/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/process/write-the-ai-policy/index.mdx
- Failure to supervise [#failure-to-supervise] — linked from content/domains/compliance-and-supervision/index.mdx
- Fiduciary duty [#fiduciary-duty] — linked from content/domains/advice-and-planning-work/index.mdx, content/process/decide-what-ai-is-for/index.mdx, content/process/handle-client-facing-use/index.mdx
- General-purpose tool [#general-purpose-tool] — linked from content/domains/operations-and-back-office/index.mdx, content/introduction/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/process/write-the-ai-policy/index.mdx
- Hallucination [#hallucination] — linked from content/domains/advice-and-planning-work/index.mdx, content/domains/client-communication-and-marketing/index.mdx, content/domains/operations-and-back-office/index.mdx, content/domains/prompting-and-review-skills/index.mdx
- Incident response program [#incident-response-program] — linked from content/domains/data-privacy-and-security/index.mdx, content/tools/this-years-figures/index.mdx
- Marketing Rule [#marketing-rule] — linked from content/domains/client-communication-and-marketing/index.mdx
- Model [#model] — linked from content/domains/client-communication-and-marketing/index.mdx, content/domains/data-privacy-and-security/index.mdx, content/domains/vendor-oversight/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Nonpublic personal information [#nonpublic-personal-information] — linked from content/process/sort-your-data/index.mdx
- Prompt [#prompt] — linked from content/domains/advice-and-planning-work/index.mdx, content/domains/client-communication-and-marketing/index.mdx, content/domains/data-privacy-and-security/index.mdx, content/domains/prompting-and-review-skills/index.mdx, content/domains/records-and-documentation/index.mdx, content/domains/vendor-oversight/index.mdx, content/process/build-the-workflows/index.mdx, content/process/sort-your-data/index.mdx
- Prompt template [#prompt-template] — linked from content/domains/prompting-and-review-skills/index.mdx, content/process/build-the-workflows/index.mdx
- Reasonably designed [#reasonably-designed] — linked from content/domains/compliance-and-supervision/index.mdx
- Registered representative [#registered-representative] — linked from content/process/map-the-rules-that-apply/index.mdx
- Regulation S-P [#regulation-s-p] — linked from content/domains/data-privacy-and-security/index.mdx
- Restricted [#restricted] — linked from content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Risk alert [#risk-alert] — linked from content/process/map-the-rules-that-apply/index.mdx
- Safeguards rule [#safeguards-rule] — linked from content/domains/data-privacy-and-security/index.mdx
- Safe harbor [#safe-harbor] — linked from content/domains/compliance-and-supervision/index.mdx
- SEC-registered adviser [#sec-registered-adviser] — linked from content/domains/client-communication-and-marketing/index.mdx, content/domains/data-privacy-and-security/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/process/sort-your-data/index.mdx, content/tools/this-years-figures/index.mdx
- Service provider [#service-provider] — linked from content/domains/vendor-oversight/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/tools/this-years-figures/index.mdx
- Shadow IT [#shadow-it] — linked from content/domains/operations-and-back-office/index.mdx
- State-registered adviser [#state-registered-adviser] — linked from content/domains/client-communication-and-marketing/index.mdx, content/domains/compliance-and-supervision/index.mdx, content/domains/data-privacy-and-security/index.mdx, content/domains/records-and-documentation/index.mdx, content/introduction/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/process/sort-your-data/index.mdx, content/tools/this-years-figures/index.mdx
- Subprocessor [#subprocessor] — linked from content/domains/vendor-oversight/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Substantiation [#substantiation] — linked from content/process/map-the-rules-that-apply/index.mdx
- Suitability [#suitability] — linked from content/process/handle-client-facing-use/index.mdx
- Testimonial [#testimonial] — linked from content/domains/client-communication-and-marketing/index.mdx
- Training [#training] — linked from content/domains/data-privacy-and-security/index.mdx, content/process/sort-your-data/index.mdx, content/process/vet-and-choose-tools/index.mdx
- Use-case list [#use-case-list] — linked from content/domains/operations-and-back-office/index.mdx, content/process/map-the-rules-that-apply/index.mdx, content/process/review-and-keep-records/index.mdx, content/process/vet-and-choose-tools/index.mdx, content/process/write-the-ai-policy/index.mdx

**Not yet linked from any page** — each is on FOLLOWUPS item 22's consistency list, and links once that pass writes the term at a first use:

- Adopting release [#adopting-release] — no page links it; item 22's consistency list (content/domains/compliance-and-supervision/index.mdx line 32)

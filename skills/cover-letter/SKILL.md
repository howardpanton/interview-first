---
name: cover-letter
description: Write a one-page cover letter for a specific role that follows the listing's own priorities, backs each claim with real evidence and names gaps honestly. Use when the user asks for a cover letter, a "why this role" answer, or a supporting statement for an application.
argument-hint: "[company or listing URL]"
---

# Cover letter

Load the `job-search-core` skill and read the candidate profile first. Have the listing and,
ideally, the `job-fit-score` result in hand.

## What makes a letter work

A hiring manager reads a cover letter to answer three questions: can this person do the
job, do they actually want this one, and will they be straight with me. Most letters fail
the second and third. This structure is built for them.

## Structure (one page, about 250 to 400 words)

1. **Opening (2 to 3 sentences).** The role, and the single strongest reason they fit,
   stated as evidence, not adjectives. If someone referred them or they've spoken to
   someone at the company, say so here.
2. **The listing's priorities, in its order (3 to 5 short paragraphs or bold-led
   points).** Take the listing's own headings or must-haves. For each: one real example
   from the profile, with a number or a named outcome where possible.
3. **Gaps, said plainly (2 to 3 sentences).** Name the missing or thin must-have, give the
   nearest real evidence, and how they'd close it. For example: "I haven't run formal A/B
   tests with split audiences. I have shipped feature flags that run a new page beside
   the old one, and that's the work I most want to grow into."
4. **Why this company (1 to 2 sentences).** Something specific about their product,
   customers or stage that connects to the candidate's story. Never generic praise.
5. **Close.** A thank-you, a link to a portfolio or profile if they have one, and their
   name.

## Rules

- Use the listing's own words for their priorities, so the reader sees their list ticked.
- Each claim needs evidence from the profile. No evidence, no claim.
- Don't repeat the CV line by line. Pick the two or three stories that matter most for
  this role and tell them properly.
- Address a named person if one is known (the hiring manager, or whoever posted the
  role). Otherwise "Dear hiring team".
- No confidential employer material.
- Plain English, the user's voice, their country's spelling, no em dashes.

## Format

- Draft it in the chat or a document first so the user can edit it.
- If they want a PDF, use `${CLAUDE_PLUGIN_ROOT}/templates/cover-letter.html` and
  `${CLAUDE_PLUGIN_ROOT}/scripts/render-pdf.js`, and check it fits on one page. File name:
  `Firstname-Lastname-Cover-Letter-Company.pdf`.
- If the application form has a text box instead, give a plain-text version with no
  formatting, within the box's character limit if known.

## After the draft

- One line on how the letter is built (which listing priorities it follows).
- How it handles each gap.
- A **Please check** list: any sentence that goes beyond what the user has told you.

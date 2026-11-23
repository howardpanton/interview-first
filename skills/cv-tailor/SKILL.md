---
name: cv-tailor
description: Build a master CV and tailor it for a specific role, honestly, then render it to PDF. Use when the user asks to write, improve, review or tailor their CV or resume, or to make a version for a particular job.
---

# CV tailor

Load the `interview-first:job-search-core` skill and read the candidate profile first.

## The model: one master, many tailored copies

- **Master CV** (`job-search/cv/master.html`): everything true and worth saying, built from
  `${CLAUDE_PLUGIN_ROOT}/templates/cv.html`. It can run long. It is the source, not the thing they send.
- **Base versions** (optional, 2 or 3): one per lane they are targeting, for example
  "frontend lead", "engineering manager", "AI enablement". Each has its own title line and
  summary.
- **Tailored copy** (`job-search/applications/<company>/cv.html`): a base version adjusted
  for one role, usually in under 15 minutes of changes.

Tailoring changes **emphasis and wording**, never facts.

## Building the master CV

1. Start from the profile. Ask for anything missing: dates, titles, the two or three
   things they are proudest of in each role, and numbers for each (team size, users, time
   saved, releases, money, speed).
2. For each role write 3 to 6 bullets. Each bullet: what they did, how, and what changed
   because of it. Lead with the verb. One line where possible, two at most.
3. Run the **"true but missing"** exercise in `${CLAUDE_PLUGIN_ROOT}/guides/cv-gaps-exercise.md`. Most people
   leave out a third of their best evidence because it felt ordinary at the time.
4. Skills section: grouped rows (languages, frameworks, testing, tools, ways of working),
   only things they could discuss in an interview. Mark nothing they would have to bluff.

## Tailoring for a role

1. Score the role first with `interview-first:job-fit-score` if that hasn't been done. Use the screener
   breakdown as the to-do list.
2. Change, in this order:
   - **Title line and summary:** rewrite for this role in 3 short paragraphs at most.
     Lead with the thing the role is really about (its core skill), if it is true of them.
   - **Keywords:** add the "true, currently missing" terms from the screener breakdown, in
     the listing's own wording, where they actually belong (a bullet, a skills row).
   - **Order:** move the most relevant bullets to the top of each role and the most
     relevant skills row first.
   - **Cut:** drop bullets that don't matter for this role to stay within the length
     (2 pages is normal for experienced people; 1 page early in a career).
3. Never add a Gap. If the role's core skill is a gap, say so, and recommend a person-first
   route rather than trying to get past a screener.
4. Re-score the screener part on the tailored text and report old and new scores. If the
   role is in the tracker, update its `screener_score` to the new score.

## Personal details on the CV

Name, town or city, email, phone and a portfolio or profile link are enough. Leave out date
of birth, age, photo, marital status, nationality, full home address and ID numbers unless
the user chooses to include one because it's expected in their country. Don't add them
without asking.

If the user is worried about age bias, it's honest and common to show only the last 15 or
so years in detail, summarise earlier roles in a line, and leave out graduation years.
Never change dates or facts.

## Screener-friendly layout

The template is built for this already. Keep it that way:

- One column, real text (no text in images), standard headings ("Experience", "Skills",
  "Education").
- Job title, company and dates on their own line for each role.
- No tables for layout, no icons that replace words, no headers or footers holding
  contact details.
- File name: `Firstname-Lastname-CV-Company.pdf`.

## Rendering to PDF

If a shell is available:

```
node "${CLAUDE_PLUGIN_ROOT}/scripts/render-pdf.js" job-search/applications/<company>/cv.html \
  job-search/applications/<company>/Firstname-Lastname-CV-Company.pdf
```

Then check the page count, and look at the pages if you can view images. Fix overflows by
cutting words, not by shrinking the type below 10pt or squeezing margins.

If no shell is available, tell the user to open the HTML in a browser and use Print, Save
as PDF, with margins set to "None" (the template sets its own).

## After the draft

Give the user:

- What changed and why, in 3 to 5 bullets.
- Old and new screener score.
- A **Please check** list: any line whose wording is stronger than what they told you.

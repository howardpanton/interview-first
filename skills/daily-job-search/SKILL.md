---
name: daily-job-search
description: Run a search for new roles that match the candidate profile, score each one, add the best to the tracker and report a short ranked summary. Use when the user asks to find jobs, run their job search, or set up a daily or scheduled search.
---

# Daily job search

Read the `job-search-core` skill and the candidate profile first.

## Running a search

1. **Build the queries** from the profile's "Targets" section: each target title, combined
   with each location or "remote" in the right country. Add any keyword the profile lists
   (for example "AI", "design system"). Aim for 4 to 8 queries.
2. **Where to look:** whatever web search and fetch tools are available. Good sources are
   job boards that show full listings without a login, company career pages on
   Greenhouse, Lever, Ashby and Workday, and LinkedIn's public job pages. Respect sites that
   block automated access or rate-limit you: stop, say so, and use another source. Never
   bypass a login, CAPTCHA or block.
3. **Filter to recent listings** (posted in the last 1 to 3 days for a daily run, the last
   2 weeks for a first run).
4. **Skip roles already in the tracker** before scoring them.
5. **Score each new role** with `job-fit-score`. If you could only read part of a listing,
   mark the score as an estimate.
6. **Add the best** to the tracker with status "To review": at most 8 per run, highest
   score first, only roles scoring 65 or more unless fewer than 3 qualify (then 50 to 64
   is allowed). Put the scores and one line on the main gap in `notes`.

## Summary

Keep it short, highest score first:

- One line: how many roles were added, and how many were scored but left out.
- For each role added: **Match NN / Screener NN | Company: Role**, one line on why, the
  main gap or thing to check, and the link.
- If nothing qualified, say so in one line and give the best score found.
- End with the one most useful action for today (often: reach a person at the top role).

## Setting it up as a daily task

If the user's Claude setup supports scheduled tasks, offer to create one. Write its prompt
so it stands alone, because each run starts fresh. A template is in
`examples/scheduled-search-prompt.md`. Suggest an early-morning time on weekdays, so the
results are waiting when they start their day.

If scheduling isn't available, tell them they can run `/interview-first:search` each
morning instead.

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

Used by `/interview-first:setup` (final step) and `/interview-first:schedule`.

1. **Check for a scheduling tool.** Look for one in this session (a tool to create
   scheduled or recurring tasks; search the available tools if they are loaded on demand).
   If there is none, say so in one line, suggest running `/interview-first:search` each
   morning, and stop.
2. **Check for an existing one.** If the tool can list scheduled tasks, look for one named
   "Interview First daily job search" and offer to change it instead of creating a second.
3. **Ask two things in one message:** what time (suggest a weekday time before they start
   their day, avoiding exactly on the hour), and where results should go if the tracker
   can't be reached (see step 5).
4. **Write the prompt from `examples/scheduled-search-prompt.md`,** filled in from
   `job-search/profile.md`. Each run starts fresh with no memory of this conversation, so
   put the essentials in the prompt itself: target titles, locations and work pattern,
   office-day limit, pay target and floor, right to work, and the skills grouped as Strong,
   Limited and Gap. Also give the path to the profile, so a run that can read files uses
   the full version.
5. **Check the tracker can be reached by a scheduled run.** Some scheduled runs happen in
   the cloud, without access to files on the user's computer.
   - A spreadsheet reached through a connected tool (such as Google Sheets) works anywhere.
   - A local `job-search/tracker.csv` only works if the task runs on their computer. If you
     can't be sure, have the prompt fall back to listing the roles in its summary, and
     tell the user they can paste that summary into a chat and ask to add the roles.
6. **Create the task** named "Interview First daily job search", on weekdays at the chosen
   time, using their time zone.
7. **Confirm in two or three lines:** the time and days, what it searches, where results go,
   whether runs will need the user's approval for actions (if the tool reports it), and
   that `/interview-first:schedule off` stops it.

The scheduled prompt must say: don't apply to anything, don't contact anyone, and skip any
site that blocks automated access.

To turn it off, confirm with the user first, then disable or delete the task.

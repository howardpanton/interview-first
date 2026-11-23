---
name: application-tracker
description: Keep a job-search tracker of roles, applications, contacts, next actions and outcomes, in a CSV file or a spreadsheet the user already uses. Use when the user adds a role, applies, hears back, asks what to follow up on, or wants a weekly review of their job search.
---

# Application tracker

Load the `job-search-core` skill first.

## Where the tracker lives

- **Default:** `job-search/tracker.csv`, copied from `${CLAUDE_PLUGIN_ROOT}/templates/tracker.csv`. Opens in any
  spreadsheet app.
- **Their own spreadsheet:** if the user prefers Google Sheets, Excel or similar and a
  connected tool can edit it, use that. Import `${CLAUDE_PLUGIN_ROOT}/templates/tracker.csv` as the first tab.
  Note the link in `profile.md`.
- Also keep `job-search/outcomes.md` (see `job-search-core`) for results with their scores.

## Columns

| Column | Values |
| --- | --- |
| date_found | YYYY-MM-DD |
| company | |
| role | |
| type | Permanent / Contract / Fixed-term |
| location | |
| work_pattern | Remote / Hybrid / Onsite / Not stated |
| office_days | number per week, blank if unknown |
| salary_min, salary_max | numbers, blank if not stated |
| day_rate | number, contracts only |
| match_score, screener_score | from `job-fit-score` |
| priority | High / Medium / Low |
| status | To review / Applying / Applied / Interviewing / Offer / Rejected / Withdrawn / Skipped |
| route | Cold / Contact first / Referral / Recruiter |
| cv_version | which base or tailored CV was sent |
| date_applied | YYYY-MM-DD |
| contact | name and role only (no personal phone numbers or private details) |
| next_action | one concrete step |
| next_action_date | YYYY-MM-DD |
| listing_url, apply_url | |
| notes | one or two sentences |

## Rules

- Before adding a role, check it isn't already there (same company and a similar title,
  or the same URL).
- Every live row (To review, Applying, Applied, Interviewing, Offer) has a `next_action`
  and a `next_action_date`. A row without one is a role being quietly forgotten.
- Default follow-ups: 7 working days after applying with no reply; 2 working days after an
  interview with no news. Pull these forward if the listing gives a closing date.
- When a status changes, update `next_action` in the same edit.
- When a result arrives, also add a row to `outcomes.md`.
- In a spreadsheet, never overwrite formula cells. Read the header row first.
- Only write to the tracker the user named. If you can't reach it, say so; don't create a
  copy somewhere else.
- When a role is closed, it's fine to keep the row for the user's records. If they ask to
  remove someone's details (for example a contact), delete them.

## What's due today

When asked "what should I do today" or "what's due", list, in this order:

1. Interviews in the next 7 days, and whether prep exists in `job-search/prep/`.
2. Overdue next actions, oldest first.
3. Actions due today.
4. High-priority roles still "To review", with their scores.

Keep it short: company, role, the action, one line each.

## Weekly review (about 30 minutes, once a week)

Report these numbers for the week and the total so far:

- Applications sent, split by route.
- Outreach messages sent and replies received.
- First conversations (recruiter screens count), and later-stage interviews.
- Rejections, and how many days each took.

Then compare with the targets in `${CLAUDE_PLUGIN_ROOT}/guides/60-day-interview-plan.md` and suggest **one**
change for next week, based on the evidence. For example: "All 9 applications this week
were cold and none got a reply; try contact-first for every High role next week."

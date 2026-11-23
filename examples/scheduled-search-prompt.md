# Scheduled daily search: prompt template

If your Claude setup supports scheduled tasks, paste this as the task's prompt, replacing
the parts in square brackets. Each run starts fresh, so the prompt has to stand alone.
Suggested schedule: weekdays, early morning.

---

Run my daily job search using the Interview First plugin's `daily-job-search` skill.

My profile is at [path to job-search/profile.md, or paste the key parts: target titles,
locations, work pattern and office-day limit, pay target and floor, right to work, skills
by Strong / Limited / Gap].

My tracker is [job-search/tracker.csv / the Google Sheet at LINK, tab NAME].

Search for roles posted in the last [2] days for these titles: [titles], in [locations or
"remote, UK"]. Score each new role with `job-fit-score`. Skip roles already in the
tracker. Add at most 8 roles scoring 65 or more (or 50 or more if fewer than 3 qualify),
with status "To review" and both scores in the notes.

Don't apply to anything and don't contact anyone. If a site blocks automated access, skip
it and say so.

Finish with a short summary, highest score first: Match / Screener, company, role, one
line on why and the main gap, and the link. End with the one most useful action for today.

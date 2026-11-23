---
description: Set up, change or turn off a daily job search that scores new roles and adds the best to your tracker
argument-hint: "[on | change | off]"
---

Request: **$ARGUMENTS**

Use the `interview-first:daily-job-search` skill's "Setting it up as a daily task" section.

- **on** (or nothing given): set up a daily search. If one already exists, show its time
  and what it searches, and ask whether to change it.
- **change:** show the current schedule and search, ask what to change, then update it.
- **off:** find the scheduled task and confirm before turning it off or deleting it.

If this Claude setup has no way to schedule tasks, say so in one line and suggest running
`/interview-first:search` each morning instead.

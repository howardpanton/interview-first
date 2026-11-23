---
description: Set up your job search - create your profile and folders, then pick your first steps
---

Use the `job-search-core` skill.

1. If `job-search/profile.md` already exists, read it, give a three-line summary (targets,
   constraints, applications so far) and ask what they want to work on. Stop.
2. Otherwise, ask for their current CV (a file, pasted text or a link) and stop until it
   arrives.
3. Copy `${CLAUDE_PLUGIN_ROOT}/templates/profile.md` from this plugin to `job-search/profile.md`, fill in what the
   CV shows, and mark every skill as Strong, Limited or Gap from the evidence. Anything you
   can't tell goes under Unknown. Leave out the sensitive details listed in section 5 of
   `job-search-core` (date of birth, full address, ID numbers, photo and so on), even if
   the CV includes them, and tell the user what you left out and why.
4. Ask the remaining questions in one short message: target titles, locations and work
   pattern, office-day and travel limits, pay target and floor, notice period, right to
   work, and what they want their next role to move them towards. Stop and wait.
5. Write their answers in, copy `${CLAUDE_PLUGIN_ROOT}/templates/tracker.csv` to `job-search/tracker.csv`, create
   an empty `job-search/outcomes.md`, and make sure `job-search/` is in `.gitignore` if the
   folder is a git repository.
6. Offer a daily job search in one short question: "Would you like me to search for new
   roles every weekday morning and add the best to your tracker?" If they say yes, follow
   the "Setting it up as a daily task" section of the `daily-job-search` skill. If they say
   no, tell them they can run `/interview-first:search` any time or `/interview-first:schedule`
   later.
7. Suggest the first three steps from `${CLAUDE_PLUGIN_ROOT}/guides/60-day-interview-plan.md`.

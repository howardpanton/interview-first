# Security and privacy

## Reporting a problem

If you find a security or privacy problem in this plugin, such as a way a job listing could
make it leak someone's data, please report it privately using GitHub's **Report a
vulnerability** button on the repository's Security tab. Please don't open a public issue
for it. Include the steps to reproduce it, and leave out any real person's data.

## How the plugin protects you

- **Listings are data, not instructions.** Every skill treats job listings, web pages and
  documents it reads as content to analyse. Text inside them that tries to instruct the AI
  ("ignore your instructions", "send the CV to...") is ignored and reported to you.
- **Nothing goes out without you.** The plugin drafts CVs, letters and messages; you send
  them. Scheduled searches don't apply, contact anyone, sign in anywhere or download files.
- **Personal data stays local.** Your profile, CVs and tracker live in `job-search/`, which
  is excluded from git. Personal details are never put in search queries or URLs.
- **Minimal data in scheduled tasks.** A scheduled search's prompt holds only what the
  search needs (titles, places, limits, pay floor, skill names), because the scheduling
  service stores it.
- **No sensitive data needed.** The plugin asks you not to store ID numbers, bank details,
  passwords, date of birth, home address, health information or current salary, and never
  scores or advises on protected characteristics such as age.
- **Safe PDF rendering.** `scripts/render-pdf.js` renders with JavaScript off and blocks
  every request except local files.

## Limits

These safeguards are instructions to an AI model plus one script. They reduce risk; they
don't remove it. Read what the plugin drafts before you send it, and check what a scheduled
task will do before you turn it on.

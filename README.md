# Interview First

A Claude plugin for a job search that aims at **interviews**, not application counts.

It scores each role two ways, tailors your CV and cover letter without overclaiming, drafts
messages to the people who can actually hire you, keeps your tracker honest and prepares
you for interviews.

I built this during my own job search after redundancy in 2026, using Claude day to day.
What's here is what made a difference, with my personal details taken out.

## Why

Popular roles get hundreds of applicants within days, and software often ranks them before
a person reads anything. Sending more applications mostly adds to the pile. Three things
helped more:

- **Knowing why you'd be filtered out.** A role can be a strong match for you while your CV,
  as written, fails the screen. Those are two different problems with different fixes, so
  this kit scores them separately.
- **Reaching a person.** A short message to a hiring manager or a referral gets read by a
  human. For strong-fit roles, that's often the better route.
- **Honesty.** An AI will happily write that you've done things you haven't. That might get
  you an interview, and it will lose you the job at the interview. Every skill here works
  from your own evidence, says gaps plainly, and flags anything it isn't sure of.

## What's in it

| Skill | What it does |
| --- | --- |
| `job-search-core` | Your profile, the honesty rules and the file layout every other skill uses |
| `job-fit-score` | Two scores out of 100: your **match** to the role, and how an AI **screener** would rank your CV, with what to fix |
| `cv-tailor` | A master CV and honest tailored versions, rendered to a screener-friendly PDF |
| `cover-letter` | One page that follows the listing's priorities, backs each claim with evidence and names gaps |
| `outreach` | Short messages to hiring managers, recruiters, referrers and contacts, plus follow-ups and thank-yous |
| `application-tracker` | A tracker (CSV or your own spreadsheet), what's due today, and a weekly review |
| `daily-job-search` | Finds new roles, scores them and adds the best to your tracker; can run on a schedule |
| `interview-prep` | A story bank, a prep pack per role, mock interviews with feedback, and debriefs |

| Command | |
| --- | --- |
| `/interview-first:setup` | Create your profile from your CV and set up your folders |
| `/interview-first:score [link]` | Score a listing |
| `/interview-first:tailor [role]` | Tailor your CV for a role |
| `/interview-first:cover-letter [role]` | Write a cover letter |
| `/interview-first:outreach [who and why]` | Draft a message |
| `/interview-first:search` | Find and score new roles |
| `/interview-first:schedule [on / change / off]` | Run the search every weekday morning |
| `/interview-first:today` | What's due today |
| `/interview-first:review` | Weekly numbers and one change to make |
| `/interview-first:prep [company] [prep / mock / debrief]` | Interview preparation |

**Guides**

- [The 60-day interview plan](guides/60-day-interview-plan.md): weekly targets, outcome
  checkpoints and what to change when the numbers fall short.
- [The "true but missing" exercise](guides/cv-gaps-exercise.md): find the good evidence
  your CV leaves out.
- [How screeners read your CV](guides/how-screeners-read-your-cv.md)
- [Leaving well](guides/leaving-well.md): redundancy, notice and telling new employers.

**Templates:** a [profile](templates/profile.md), a screener-friendly
[CV](templates/cv.html) and [cover letter](templates/cover-letter.html), and a
[tracker](templates/tracker.csv). See a [sample score](examples/sample-score.md).

## Install

In Claude Code:

```
/plugin marketplace add howardpanton/interview-first
/plugin install interview-first@interview-first
```

Then, in an empty folder for your job search:

```
/interview-first:setup
```

It asks for your CV and a few questions, then creates a private `job-search/` folder with
your profile, tracker and outcomes log.

At the end it offers a **daily job search**: each weekday morning it finds new roles, scores
them and adds the best to your tracker, so the results are waiting when you start. You can
set this up, change it or turn it off later with `/interview-first:schedule`.

This needs a Claude setup that can run scheduled tasks. If yours can't, run
`/interview-first:search` each morning instead. Some scheduled runs happen in the cloud and
can't reach files on your computer; a tracker in a connected spreadsheet (such as Google
Sheets) works either way. Otherwise the run lists the roles in its summary for you to add.

**Not using Claude Code?** The skills are plain Markdown. Open a skill's `SKILL.md`, paste
it into a chat with your profile or CV, then ask for what you need. The guides and
templates work on their own.

**PDFs:** to render your CV and letters, install Playwright once
(`npm i -D playwright && npx playwright install chromium`), then
`node scripts/render-pdf.js cv.html Your-Name-CV.pdf`. Or open the HTML in a browser and
print to PDF.

## Keep your data private

Your profile, CVs and tracker hold personal information. They live in `job-search/`, which
`.gitignore` excludes. Don't commit that folder to a public repository, and don't paste
confidential employer material into anything you send out.

## What this kit does not claim

- **The scores are estimates,** not predictions. Real screeners differ between employers
  and aren't public. The rubric is a practical model that matched one person's early
  results; check it against your own outcomes.
- **The targets in the 60-day plan are working goals,** not market statistics.
- **It can be wrong.** Check facts about companies, pay and law yourself.
- **It isn't legal or financial advice.** For redundancy terms or contracts, use your
  country's official guidance or a qualified adviser.
- **It doesn't apply or send messages for you.** You stay in charge of what goes out under
  your name.

## Contributing

Ideas, fixes and outcome data (anonymised) are welcome as issues or pull requests. The most
useful contribution is evidence: which routes, CV changes and scores led to interviews for
you.

## Licence

MIT

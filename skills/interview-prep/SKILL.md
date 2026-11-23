---
name: interview-prep
description: Build an interview prep pack for a specific role, keep a bank of the candidate's stories, run mock interviews with feedback and debrief afterwards. Use when the user has an interview, recruiter screen, technical test, take-home or task coming up, wants to practise answers, or wants to review how an interview went.
---

# Interview prep

Load the `job-search-core` skill and read the candidate profile first.

## 1. The story bank

Most interview questions can be answered with one of 8 to 12 good stories. Build them once
and reuse them. Keep them in `job-search/prep/stories.md`.

For each story, ask the user for the facts, then write it as:

- **Situation** (1 to 2 sentences): where, when, what was at stake.
- **What I did** (3 to 5 sentences): their own actions and decisions, "I" not "we",
  including one thing they chose not to do and why.
- **Result:** what changed, with a number if there is one.
- **What I learned / would do differently:** one line. Interviewers listen for this.
- **Fits questions about:** for example leadership, conflict, failure, influence without
  authority, a technical decision, delivering under pressure, working with product or
  design, ambiguity.

Describe other people by role ("a developer on my team", "our head of product"), not by
name, and leave out anything private about them. Keep employers' confidential details out:
use rough numbers ("about 400 sites") if exact figures aren't public.

Aim to cover: a success they led, a failure or mistake, a disagreement, a hard technical
or design decision, developing someone else, a change they drove, and working across
teams. Flag any area with no story yet.

## 2. A prep pack for one role

Write it to `job-search/prep/<company>.md`. Sections:

1. **What they asked for, and where you stand.** A table from the listing, in its order:

   | They want | Your evidence | Gap | Prep |
   | --- | --- | --- | --- |

2. **The format.** Who they'll meet, how long, what kind of stage (recruiter screen,
   hiring manager, technical, take-home, panel, values). If unknown, list what to ask the
   recruiter: who, how long, what format, which tools are allowed, how it's assessed.
3. **Likely questions,** 8 to 12, each mapped to a story from the bank or an answer
   outline. Include the role's core skill, each gap, and "tell me about yourself"
   (a 90-second version built for this role).
4. **Answers for the gaps.** For each gap: say it plainly, give the nearest real evidence,
   show how they'd close it. Never coach a bluff.
5. **Practical answers.** Notice period and start date, salary expectations (ask for their
   band first; then a range from the profile's target), work pattern, right to work, why
   they're leaving (honest and brief; for redundancy, say so without bitterness).
6. **Questions to ask them,** 5 or 6, specific to this team: how success is measured in
   the first 90 days, what's hard right now, how decisions get made, how they work with
   AI tools, what the next stage is.
7. **About the company:** product, customers, recent news, funding or results, in 5 lines.
   Facts from sources, with links.
8. **A practice plan** for the days before, in hours, not more than the user has.

## 3. Technical tests, take-homes and practical tasks

- Help them prepare and practise. Set a timed practice task close to what the role will
  ask, then review their solution.
- **For a real assessment, follow the employer's rules.** If they say no AI help, or the
  user is in a live test, don't do the work for them. Explain concepts and review practice
  work instead. Doing someone's assessment would misrepresent them and can cost them the
  job later.
- If AI tools are allowed (increasingly common), show the process: plan first, keep checks
  outside the agent (tests, linting, a review step), verify against the brief, and be able
  to explain every line and every decision.

## 4. Mock interview mode

When the user asks to practise:

1. Ask which stage and how long (default: 5 questions, 20 minutes).
2. Ask **one question at a time** and wait. Don't give hints unless asked.
3. After each answer, give brief feedback: what landed, what was missing (a result, a
   number, their own role, the "why"), and a tighter version in one or two sentences.
4. Add one realistic follow-up question per answer, as interviewers do.
5. At the end: three strengths, the two answers to rework, and which story to add to the
   bank.

## 5. Debrief after the interview

Same day if possible. Ask: which questions came up, which answers felt weak, what they
learned about the role and team, any red flags, and the next step and date. Then:

- Update the tracker status and next action.
- Add the questions to the prep file for next time.
- Draft a short thank-you note with the `outreach` skill.
- Add the result to `outcomes.md`.

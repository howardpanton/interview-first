# Cover letter template

A cover letter starts from the HTML below. Write it out as
`job-search/applications/<company>/cover-letter.html`, replace the fictional example
(Alex Morgan applying to Example Co) with the real letter, and keep these layout rules:

- One page, A4, with the margins set in the `@page` rule. Body text 11pt.
- Name and contact line at the top, in the body, not in a page header or footer.
- No scripts, no external fonts or images, and no links to other files: the page must
  look the same opened offline.
- Plain English, the candidate's own spelling and date format, no em dashes.

The user saves it as a PDF from their browser (see "Saving as PDF" in the
`interview-first:cv-tailor` skill).

## Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Alex Morgan - Cover letter</title>
<!-- One page. Replace the example (a fictional person and company) with your own.
     Save as PDF: open in a browser, Print > Save as PDF, margins Default, no headers or footers. -->
<style>
  @page { size: A4; margin: 22mm 22mm; }
  body { font-family: "Helvetica Neue", Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #1d1d1f; margin: 0; }
  .from { margin: 0 0 18pt; }
  .from strong { font-size: 13pt; }
  p { margin: 0 0 9pt; }
</style>
</head>
<body>
<p class="from"><strong>Alex Morgan</strong><br>alex.morgan@example.com &middot; example.com</p>

<p>Dear Sam,</p>

<p>I'm applying for the Lead Frontend Engineer role at Example Co. For the last four years I've led the frontend of a planning platform used by 400 depots, which is close to the scheduling product your team is building.</p>

<p><strong>Leading a frontend team.</strong> I mentor two developers, set our standards for testing and review, and own the release pipeline. Moving us to a monorepo cut CI time from 24 to 9 minutes.</p>

<p><strong>Design systems.</strong> I built the component library three of our product teams now use, with Storybook documentation and visual tests.</p>

<p><strong>AI-assisted delivery.</strong> Most of my work now runs through coding agents, with tests and review outside the agent and a person checking every change.</p>

<p>To be straightforward: my React production experience is one app, and most of my work is in Angular. My depth is in TypeScript, component architecture and testing, which carry across directly, and I'm building React work in public to close the gap.</p>

<p>Your recent move into same-day delivery planning is the kind of problem I most enjoy: dense screens where operators make quick decisions.</p>

<p>Thank you for considering my application. You can see more of my work at example.com.</p>

<p>Kind regards,<br><br>Alex Morgan</p>
</body>
</html>
```

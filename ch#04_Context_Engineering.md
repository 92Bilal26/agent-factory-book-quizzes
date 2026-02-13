# General Agents Foundations: Context Engineering

> Downloaded from Agent Factory on 2/12/2026
> Total lessons: 12

## Table of Contents

1. [What Is Context Engineering?](#what-is-context-engineering)
2. [Signal vs Noise: Auditing Your Context for Quality](#signal-vs-noise-auditing-your-context-for-quality)
3. [Context Architecture](#context-architecture)
4. [The Tasks System: Persistent State for Context Management](#the-tasks-system-persistent-state-for-context-management)
5. [The Two-Way Problem: Getting Tacit Knowledge In and Out](#the-two-way-problem-getting-tacit-knowledge-in-and-out)
6. [Context Lifecycle: Knowing When to Reset vs Compress](#context-lifecycle-knowing-when-to-reset-vs-compress)
7. [Long-Horizon Work: Progress Files and Session Architecture](#long-horizon-work-progress-files-and-session-architecture)
8. [Mid-Stream Memory: Injecting Context at Execution Time](#mid-stream-memory-injecting-context-at-execution-time)
9. [Context Isolation: Why Clean Slates Beat Dirty States](#context-isolation-why-clean-slates-beat-dirty-states)
10. [The Context Engineering Playbook: Decision Frameworks for Quality](#the-context-engineering-playbook-decision-frameworks-for-quality)
11. [Context Engineering Exercises](#context-engineering-exercises)
12. [Chapter 4: Context Engineering Quiz](#chapter-4-context-engineering-quiz)

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   What Is Context Engineering?

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/01-manufacturing-quality-problem.md)

# What Is Context Engineering?

Two engineers build contract review agents. Same model. Same basic architecture. One sells for $2,000/month. The other can't give it away.

What's different?

**The answer: context quality.**

In Chapter 1, you learned that Digital FTEs are AI agents that work 24/7, delivering consistent results at a fraction of human cost. But here's the uncomfortable truth: those same AI models are available to everyone. Your competitors have access to Claude, GPT, and Gemini too. They can spin up the same frontier model in minutes.

The model isn't your moat. **Context engineering is.**

If you've used AI for real work, you've experienced the breakdown. Your AI followed instructions brilliantly for the first twenty minutes. Then it started ignoring conventions, repeating mistakes you already corrected, producing wildly different outputs for similar inputs. The AI didn't get dumber. Its context got corrupted.

This chapter teaches you the quality control discipline that separates sellable Digital FTEs from expensive toys.

## The Definition

Anthropic defines context engineering as:

> "The art and science of curating what will go into the limited context window from that constantly evolving universe of possible information."

The guiding principle: **find the smallest set of high-signal tokens that maximize the likelihood of some desired outcome.**

Your prompt is what you say. Your context is everything the AI already knows when you say it. Context engineering is controlling that "already knows" part.

## Five Terms You Need

Term

Definition

**Token**

The unit AI models use to measure text. Roughly 3/4 of a word. "Context engineering" = 2 tokens.

**Context**

Everything the model processes when generating a response: system prompts, instructions, conversation history, file contents, tool outputs.

**Context window**

Maximum tokens the model can "see" at once (200,000 for Claude).

**Context engineering**

The discipline of designing what goes into that window, where it's positioned, and when it loads.

**Context rot**

When accumulated conversation degrades output quality. Old errors and abandoned approaches compete with current instructions.

## Why Context Beats Prompts

"Prompt engineering" was the 2023 discipline. It has a ceiling.

Prompts

Context

Token budget

50-200 tokens

200,000+ tokens

Your control

What you type

What you engineer

Impact on output

0.1%

99.9%

Your prompt is 0.1% of what the model processes. The other 99.9% is context. If you're optimizing prompts while ignoring context, you're polishing the doorknob while the house is on fire.

This matters for your Digital FTEs. A legal assistant Digital FTE with perfect prompts but corrupted context will hallucinate case citations. A sales Digital FTE with perfect prompts but bloated context will forget customer preferences mid-conversation. The context is what makes the difference between a $50/month chatbot and a $5,000/month professional assistant.

## The Four Types of Context Rot

Not all context degradation is equal. Recognizing the pattern helps you respond effectively.

### 1\. Poisoning: Outdated Information Persists

You renamed something, changed a decision, or updated terminology. But 40 messages ago, you discussed the old version extensively. That discussion is still in context. Claude might reference the outdated information, creating confusion or errors.

**Symptom:** Claude uses terminology, patterns, or references that were correct earlier but aren't anymore.

### 2\. Distraction: Irrelevant Content Dilutes Attention

You spent 20 messages on a tangent. Now you're working on something different. That tangent is still consuming attention budget—attention that could be allocated to your current constraints.

**Symptom:** Claude's responses feel less focused, miss details, or include tangential considerations.

### 3\. Confusion: Similar Concepts Conflate

You're working with two similar things—maybe two services, two documents, or two processes. They have similar names or overlapping terminology. Claude starts conflating them—using the wrong one in the wrong context.

**Symptom:** Claude mixes up similar-sounding concepts, uses wrong terminology, or applies patterns from one domain to another.

### 4\. Clash: Contradictory Instructions Compete

Early in the session, you said one thing. Later, you said something different. Both instructions are in context. Claude has to reconcile them and might choose wrong.

**Symptom:** Claude's decisions seem inconsistent, or it asks clarifying questions you thought you'd already answered.

## Automatic Context Management

Claude Code handles context automatically through a feature called autocompact. When your context window fills up, Claude Code summarizes the conversation, keeps key decisions, and forgets noise—without you doing anything.

Most of the time, this works well. Lesson 6 teaches when you need to manually intervene with `/compact` or `/clear` for situations where automatic management isn't enough.

## Lab: See Your Context

**Objective:** See what's consuming your context window right now.

### Task 1: Run the Context Command

In Claude Code, run:

```
/context
```

You'll see output showing:

-   **System prompt**: Claude's base instructions (fixed cost)
-   **MCP tools**: External integrations (each adds cost)
-   **Memory files**: Your CLAUDE.md + rules (you control this)
-   **Messages**: Conversation history (grows every turn)
-   **Free space**: Remaining budget for actual work

**What to observe:** Much of your context is consumed before you type anything. That's baseline cost. Context engineering is managing these numbers so you have room for the work that matters.

### Task 2: Identify Potential Rot

Think about your current or most recent working session with Claude. Ask yourself:

-   Did you change direction or rename anything mid-session? (Potential **poisoning**)
-   Did you go on tangents unrelated to your current task? (Potential **distraction**)
-   Are you working with similar-sounding concepts or files? (Potential **confusion**)
-   Did you give different instructions at different times? (Potential **clash**)

If you identified any of these, you've diagnosed context rot. Later lessons teach how to treat each type.

## Try With AI

**Prompt 1: Context Inventory**

```
List everything currently in your context.Estimate what percentage is:(1) directly relevant to my next task,(2) useful background,(3) noise that dilutes attention.
```

**What you're learning:** Before you can engineer context, you need to see what's actually there. This prompt develops awareness of context state.

**Prompt 2: Rot Diagnosis**

```
Based on our conversation history, identify any signs of context rot:- Poisoning (outdated information I've since changed)- Distraction (tangents no longer relevant)- Confusion (similar concepts that might be conflating)- Clash (contradictory instructions I've given)Be specific about what you find.
```

**What you're learning:** Diagnosis comes before treatment. This prompt helps you identify which rot type (if any) is affecting your current session, so you can apply the right fix.

**Safety note:** When running context diagnostics, you're examining the session state, not changing it. This is observational—safe to run at any time.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Signal vs Noise: Auditing Your Context for Quality

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/02-signal-vs-noise.md)

# Signal vs Noise: Auditing Your Context for Quality

Context has a budget—and that quality degrades as session window fills in with messages, tool definitions and CLAUDE.md. Now the question becomes: **how much of your CLAUDE.md is actually doing useful work?**

The uncomfortable answer, backed by research across enterprise deployments:

> "Across enterprise workloads, roughly 30% to 60% of tokens sent to models add no value." — Neal Patel

That means between one-third and two-thirds of your carefully crafted CLAUDE.md might be noise—content that consumes attention budget without improving output quality. Worse, that noise competes with signal for the limited attention available.

This lesson teaches you to tell the difference, and to engineer a CLAUDE.md that's lean, effective, and measurably better than a bloated one.

## The Instruction Limit Problem

Before diving into what counts as signal and noise, you need to understand a hard constraint most people don't know exists.

Research suggests that frontier LLMs can reliably follow approximately **150-200 distinct instructions**. Beyond that threshold, compliance drops. The model starts ignoring rules, conflating similar instructions, or applying them inconsistently.

Here's the problem: **Claude Code's system prompt already contains roughly 50 instructions.** That's the identity, safety rules, and base capabilities that Anthropic bakes in. You don't see them, but they're consuming instruction budget.

That leaves you roughly **100-150 instructions** for your CLAUDE.md before you hit diminishing returns.

Count the rules in your current CLAUDE.md. If you have 300 lines with 2-3 instructions per logical section, you might have 80-100 distinct instructions. Add the 50 from the system prompt, and you're at 130-150. You're already at the ceiling.

**This is why trimming noise matters.** Every instruction that doesn't add value is stealing budget from instructions that do.

## The 4-Question Audit Framework

For each line, section, or instruction in your CLAUDE.md, ask these four questions:

### Question 1: Would Claude ask me about this if I didn't include it?

If the answer is yes—Claude would be uncertain, would ask for clarification, or would make the wrong assumption—then it's **SIGNAL**.

If the answer is no—Claude would proceed correctly without being told—then it's potentially **NOISE**.

**Examples across domains:**

-   Legal: "Use APA citation format" → SIGNAL (Claude doesn't know your firm's preference)
-   Marketing: "Write in active voice" → NOISE (Claude defaults to this)
-   Research: "Include DOI links for all sources" → SIGNAL (specific requirement Claude wouldn't assume)
-   Consulting: "Use client's internal terminology from glossary.md" → SIGNAL (project-specific)

### Question 2: Could Claude figure this out from reading existing materials?

If the information is already present in your workspace—in existing documents, configuration files, templates, or established patterns—then including it in CLAUDE.md is redundant. Claude will read those files anyway.

**Examples across domains:**

-   Legal: "Our contracts use Delaware choice of law" → NOISE (visible in contract templates)
-   Marketing: "Target audience is B2B enterprise" → NOISE (evident from existing content)
-   Research: "We follow AMA style" → SIGNAL if not in any template (style preference)
-   Operations: "Invoices require three approval signatures" → NOISE (visible in existing invoices)

### Question 3: Does this change frequently?

Information that changes often becomes stale in CLAUDE.md. Stale information is worse than no information—it creates context poisoning where Claude follows outdated rules.

**Examples across domains:**

-   Legal: "Current matter focuses on the Johnson case" → NOISE (changes weekly; put in task file)
-   Marketing: "Q4 campaign theme is sustainability" → NOISE (changes quarterly)
-   Research: "Never cite retracted 2019 Smith paper" → SIGNAL (permanent constraint)
-   Consulting: "Client budget is $500K" → NOISE (put in project brief, not CLAUDE.md)

### Question 4: Is this a default convention Claude already knows?

Claude is trained on millions of documents across every domain. It knows standard conventions for most professional fields. Restating defaults wastes budget.

**Examples across domains:**

-   Legal: "Put case citations in parentheses" → NOISE (standard legal convention)
-   Legal: "Use OSCOLA format instead of Bluebook" → SIGNAL (deviates from common default)
-   Marketing: "End emails with call to action" → NOISE (standard practice)
-   Research: "Include methodology section in papers" → NOISE (standard academic convention)

## What Counts as Signal

After applying the framework, these categories typically survive as signal:

**Commands or workflows Claude can't guess:**

```
Submit briefs via client portal at portal.example.comRun compliance check before any client deliverable
```

**Style rules that DIFFER from defaults:**

```
- Use Oxford comma (firm standard)- Maximum 2 levels of heading depth in reports
```

**Review and approval requirements:**

```
All client-facing documents require partner reviewUse checklist in docs/review-checklist.md before submission
```

**Naming and organization conventions:**

```
File naming: [ClientCode]-[MatterNum]-[DocType]-[Date]All drafts go in /drafts before moving to /final
```

**Decisions specific to YOUR project or organization:**

```
Use firm's custom risk matrix (not standard 3x3)Client prefers bullet points over prose paragraphs
```

**Non-obvious behaviors or gotchas:**

```
Client timezone is Singapore (UTC+8), not US EasternConfidential materials must NOT be referenced in summaries
```

## What Counts as Noise

These categories typically fail the audit:

**Things Claude can infer from existing materials:**

```
# NOISE: Claude will read existing documentsIndustry: Healthcare consultingClient: Acme Corporation# NOISE: Claude can see the folder structureProject Structure:├── briefs/├── research/└── deliverables/
```

**Standard professional conventions:**

```
# NOISE: Claude knows professional standardsUse formal tone in client communicationsProofread all documents before sending
```

**Information that changes frequently:**

```
# NOISE: Will be stale next weekCurrent priority: finishing quarterly reportMeeting with client: Thursday 2pm
```

**Detailed reference documentation:**

```
# NOISE: Too verbose, will be stale## Client ContactsJohn Smith - CEO - john@acme.com - Decision makerJane Doe - CFO - jane@acme.com - Budget authority...[30 more lines of contact details]
```

**File-by-file descriptions:**

```
# NOISE: Claude will read the files anyway## Document Descriptions- briefs/summary.md: Executive summary- research/market-analysis.md: Market research- deliverables/final-report.md: Client deliverable  ...
```

## Position Matters: The Three-Zone Strategy

A lean CLAUDE.md is necessary but not sufficient. Research on LLM attention patterns reveals a **U-shaped curve**: models pay significantly more attention to the beginning and end of their context window, while middle content receives approximately 30% less recall. This isn't a bug—it's how attention mechanisms work.

### The Three Zones

Zone

Position

Attention Level

What Goes Here

**Zone 1**

First 10%

HIGH (primacy)

Critical constraints, identity, non-negotiable rules

**Zone 2**

Middle 80%

LOW

Reference material, templates, nice-to-haves

**Zone 3**

Last 10%

HIGH (recency)

Workflow instructions, "how to start", "when done"

### Zone Examples

**Zone 1 (Top Priority)**:

```
# IdentityYou are a senior legal analyst specializing in M&A due diligence.# Critical Constraints- NEVER discuss confidential client matters outside secure channels- All deliverables require partner sign-off before sending
```

**Zone 2 (Reference Material)**:

```
## Project StructureSee docs/structure.md## Coding ConventionsSee docs/style-guide.md
```

**Zone 3 (Workflow Instructions)**:

```
## Starting Any Task1. Read docs/current-priorities.md2. Check existing work in /drafts## When CompleteRun the review checklist at docs/review-process.md
```

### The Key Insight

**If you'd be upset when the AI ignores it, don't put it in the middle.**

Your most critical constraints belong in Zone 1 (top). Your workflow triggers belong in Zone 3 (bottom). Everything else—the reference material, the nice-to-haves, the detailed documentation—goes in Zone 2 or moves to external files entirely.

This is why progressive disclosure matters even more than you might think: not only does it keep your CLAUDE.md lean, it keeps your high-attention zones reserved for high-priority content.

## Progressive Disclosure via File References

The key to a lean CLAUDE.md is **progressive disclosure**: don't include detailed information inline. Reference external files that Claude reads on demand.

### The Pattern

Instead of:

```
## Quality Review ProcessAll deliverables require three-stage review. First, peer review for accuracy.Second, senior review for completeness. Third, compliance review for regulatoryrequirements. Use the checklist in Appendix B. Document all review commentsin the tracking spreadsheet. Final approval requires two signatures.[15 more lines of review process details]
```

Use:

```
## Quality ReviewRead docs/review-process.md before finalizing deliverables
```

Then create `docs/review-process.md` with the full content.

### Why This Works

1.  **CLAUDE.md stays lean** — Under 60 lines, under instruction budget
2.  **Details load on demand** — Claude reads the file when relevant
3.  **Single source of truth** — Update docs/review-process.md once, not CLAUDE.md plus separate docs
4.  **Position-optimized** — The reference line can stay in high-attention zones; verbose content doesn't consume prime real estate

### Recommended Reference Structure

```
docs/├── key-decisions.md           # Why we chose X over Y├── review-process.md          # How to review and approve work├── delivery-checklist.md      # Steps before client delivery├── style-conventions.md       # Formatting and style rules└── gotchas.md                 # Non-obvious behaviors to watch for
```

Your CLAUDE.md then becomes:

```
## Docs (read before relevant tasks)- docs/key-decisions.md — Read before strategic choices- docs/review-process.md — Read before finalizing work- docs/gotchas.md — Read if something behaves unexpectedly
```

## Lab: CLAUDE.md Signal-to-Noise Audit

**Objective:** Reduce your CLAUDE.md to under 60 lines while maintaining or improving effectiveness.

**Time:** 60 minutes

**Choose your domain:**

-   Software development project
-   Legal matter or case
-   Marketing campaign
-   Research project
-   Consulting engagement
-   Operations workflow

**What you'll need:**

-   Your current CLAUDE.md file (or create one for a project you're working on)
-   A representative task you've done before (for comparison testing)

### Protocol

**Step 1: Export and Measure Current State**

```
wc -l CLAUDE.md
```

Record your starting line count.

Count distinct instructions:

```
grep -c "^-\|^[0-9]\." CLAUDE.md
```

Record: explicit instructions + ~50 system prompt = total instruction count. How close to the 150-200 ceiling?

**Step 2: Apply the 4-Question Framework**

Create an audit table. For each major section of your CLAUDE.md:

Section

Q1: Claude ask?

Q2: In materials?

Q3: Changes?

Q4: Default?

Verdict

Project Overview

No

Yes (README)

No

N/A

NOISE

Team/Client Info

No

Yes (docs)

Yes

N/A

NOISE

Folder Structure

No

Yes (filesystem)

No

N/A

NOISE

Style Conventions

Partially

Some

No

Mostly yes

PARTIAL

Review Process

Yes

No

No

No

SIGNAL

Naming Conventions

Yes

No

No

No

SIGNAL

Confidentiality

Yes

No

No

No

SIGNAL

**Step 3: Delete or Move Noise**

For sections marked NOISE:

-   If useful reference: Move to docs/X.md and add reference line
-   If truly redundant: Delete entirely

For sections marked PARTIAL:

-   Keep only the instructions that deviate from defaults
-   Delete anything Claude would do anyway

**Step 4: Tighten Signal**

For sections marked SIGNAL, make them terser:

Before:

```
## Document Review ProcessWhen finalizing any document for this project, please follow these steps:- Have a colleague review for accuracy- Check against the style guide- Ensure all references are properly formatted- Get approval from the project lead- Save the final version in the deliverables folder
```

After:

```
## ReviewPeer review → Style check → Lead approval → Save to /deliverables
```

**Step 5: Add Progressive Disclosure**

Create reference files for detailed content:

```
mkdir -p docs
```

Move detailed content to appropriate files and update CLAUDE.md with references:

```
## Docs- docs/review-process.md — Before finalizing work- docs/style-conventions.md — For formatting questions
```

**Step 6: Measure New State**

```
wc -l CLAUDE.md
```

Record your new line count (target: under 60).

**Step 7: Comparison Test**

Run your comparison task with the old CLAUDE.md (restore from backup or git):

```
git stashclaude# Run representative task, record qualitygit stash pop
```

Run the same task with the new CLAUDE.md:

```
claude# Run representative task, record quality
```

Compare:

-   Task completion quality (same or better?)
-   Instruction compliance (same or better?)
-   Questions asked (fewer means clearer context)

**Deliverable:** A CLAUDE.md under 60 lines that performs equal to or better than your original.

### Expected Results

Most practitioners find:

-   40-60% of original content was noise
-   Shorter CLAUDE.md produces equal or better compliance
-   Agent asks fewer clarifying questions (clearer signal)
-   Sessions run longer before needing compaction (less budget consumed)

## Common Audit Mistakes

**Mistake 1: Keeping "helpful" noise**

"But this context helps Claude understand the project!"

If Claude can learn it by reading files, you're paying twice: once for the CLAUDE.md tokens, again for the file read. And the CLAUDE.md version might be stale.

**Mistake 2: Insufficient terseness**

Every word costs tokens. "Please always ensure that you thoroughly review all documents" becomes "Review all documents." Same meaning, 1/3 the tokens.

**Mistake 3: Not testing the result**

An audit without comparison testing is guesswork. You need empirical evidence that the new CLAUDE.md performs at least as well. Sometimes removing what you thought was signal reveals it wasn't.

**Mistake 4: Forgetting position optimization**

A lean CLAUDE.md still needs position engineering. Your 52 lines should have critical rules at the top and workflow instructions at the bottom—not signal buried in the middle.

## Try With AI

### Prompt 1: Automated Audit

```
Read my CLAUDE.md file. For each section, apply these four questions:1. Would you ask me about this if it wasn't included?2. Could you figure this out from reading existing materials?3. Does this seem like information that changes frequently?4. Is this a default convention you already know?For each section, give a verdict: SIGNAL, NOISE, or PARTIAL.Then show me what a lean version would look like (under 60 lines).
```

**What you're learning:** How to use AI as an audit partner. Claude can apply the 4-question framework to its own context—it knows what it would ask about, what it can infer, and what conventions it already follows. This prompt turns the audit from solo work into collaboration.

### Prompt 2: Progressive Disclosure Refactor

```
I want to refactor my CLAUDE.md to use progressive disclosure.Identify sections that should become external docs files.For each candidate:1. Suggest a filename (e.g., docs/review-process.md)2. Show what the CLAUDE.md reference line should be3. Explain when you would read this file during workHelp me create a docs/ structure that keeps CLAUDE.md leanwhile making detailed information available on demand.
```

**What you're learning:** The mechanics of progressive disclosure. Moving content to external files is straightforward, but knowing WHEN Claude will read those files matters. This prompt helps you design a reference structure where files get read at the right moments.

### Prompt 3: Signal Stress Test

```
I've reduced my CLAUDE.md to under 60 lines. Let's verify it has enough signal.Without reading any other files, tell me:1. What are the specific commands or workflows for this project?2. What are the non-obvious conventions or requirements?3. What mistakes should you avoid that aren't obvious from existing materials?If you can answer these confidently, my CLAUDE.md has sufficient signal.If you're uncertain, I've cut too much.
```

**What you're learning:** Whether you've gone too far. A CLAUDE.md can be too lean—stripped of signal Claude actually needs. This prompt stress-tests your audit by checking whether essential information survived. If Claude can't answer these questions, you need to restore some content.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Context Architecture

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/03-context-architecture.md)

# Context Architecture: The Complete System

You learned HOW to create CLAUDE.md files, Skills, Subagents, and Hooks in Chapter 3. This lesson teaches WHY each exists and WHEN to use each one—as parts of a complete context management system.

## Four Tools, Four Loading Patterns

Each tool has a different relationship with your context window:

Tool

When It Loads

What Loads

Context Cost

**CLAUDE.md**

Session start

Full content

Every request

**Skills**

Descriptions at start; content when invoked

~100 tokens per description; full content on use

Low until needed

**Subagents**

When spawned

Fresh, isolated context

Zero in main session

**Hooks**

On trigger

Nothing (runs externally)

Zero

Understanding this table is understanding context architecture.

## The Loading Timeline

**At session start**, Claude loads:

1.  System prompt (you don't control this)
2.  Your CLAUDE.md (full content)
3.  Skill descriptions (names and one-line summaries)
4.  MCP tool definitions (if any)
5.  Git status and workspace info

**During the session**, Claude loads:

-   Skill full content (when you invoke `/skill-name` or Claude decides it's relevant)
-   Subagent results (summaries returned, not full work)
-   Hook output (only if the hook returns messages)

**What this means**: CLAUDE.md consumes context from turn 1. Skills consume context only when needed. Subagents never consume your main context. Hooks run outside the context entirely.

## The Decision Framework

Use this framework to choose the right tool:

Information Type

Best Tool

Why

**Always needed, stable**

CLAUDE.md

Pay the cost once, available everywhere

**Sometimes needed, stable**

Skill

On-demand loading saves context

**Needs fresh analysis**

Subagent

Isolated context prevents pollution

**Must happen every time**

Hook

Deterministic, no LLM variance

### When to Use CLAUDE.md

Put information in CLAUDE.md when:

-   Claude needs it for EVERY task (project conventions, build commands)
-   It rarely changes (architectural decisions, team agreements)
-   Removing it would cause Claude to make mistakes

**Examples**:

-   `pnpm, not npm` (always relevant)
-   `Run tests with pytest -v` (needed whenever testing)
-   `Use snake_case for Python, camelCase for JavaScript` (affects all code)

### When to Use Skills

Put information in Skills when:

-   Claude needs it SOMETIMES (domain-specific workflows)
-   It's substantial (more than a few lines)
-   You might invoke it manually (`/skill-name`)

**Examples**:

-   Code review checklist (only when reviewing)
-   Deployment procedures (only when deploying)
-   API documentation (only when integrating)

### When to Use Subagents

Use Subagents when:

-   Work requires reading many files or extensive research
-   You need a fresh perspective without accumulated bias
-   The work should happen in parallel

**Examples**:

-   Research task: "Find all usages of deprecated API"
-   Analysis task: "Review security across all auth files"
-   Parallel work: Three agents tackle three modules simultaneously

### When to Use Hooks

Use Hooks when:

-   Something must happen EVERY time, no exceptions
-   It's deterministic (no LLM judgment needed)
-   It should run externally without consuming context

**Examples**:

-   Lint check after every file edit
-   Format validation before every commit
-   Logging for audit purposes

## Context Architecture in Practice

### Example: A Marketing Consultant

A marketing consultant uses Claude Code for campaign analysis:

**CLAUDE.md** (~50 lines, always loaded):

```
# Project Context- Client: TechStartup Inc.- Brand voice: Professional but approachable- Avoid: Industry jargon, corporate speak# Workflow- All reports in Markdown- Include metrics with sources- Weekly summary format: Executive → Details → Recommendations
```

**Skills** (loaded when relevant):

-   `/competitor-analysis` — Framework for analyzing competitor campaigns
-   `/metrics-dashboard` — Standard metrics definitions and benchmarks
-   `/campaign-brief` — Template for new campaign proposals

**Subagent** (isolated, returns summary):

-   Research agent scans 50 competitor social posts, returns "Top 5 patterns"
-   Main context never sees 50 posts, just the summary

**Hook** (zero context cost):

-   After every report edit, hook validates required sections exist
-   Returns only pass/fail, doesn't consume context

### The Math

**Without architecture** (everything in CLAUDE.md):

-   500-line CLAUDE.md = ~4,000 tokens
-   Competitor analysis framework = ~1,500 tokens
-   Metrics definitions = ~1,000 tokens
-   Campaign template = ~800 tokens
-   **Total baseline**: ~7,300 tokens every request

**With architecture**:

-   50-line CLAUDE.md = ~400 tokens (always)
-   3 skill descriptions = ~150 tokens (always)
-   Skill content = ~3,300 tokens (only when invoked)
-   Research via subagent = 0 tokens in main context
-   **Total baseline**: ~550 tokens every request

**Result**: 13x reduction in baseline context load. The saved tokens go to your actual work instead of always-loaded content.

## Common Architecture Mistakes

### Mistake 1: Everything in CLAUDE.md

**Symptom**: 300+ line CLAUDE.md, Claude ignores important instructions

**Problem**: Attention diluted across content that's only sometimes relevant

**Fix**: Move domain-specific content to Skills, keep CLAUDE.md under 60 lines

### Mistake 2: Never Using Subagents

**Symptom**: Context fills quickly during research tasks, quality degrades

**Problem**: All file reads and searches accumulate in main context

**Fix**: Delegate research to Subagents, receive summaries instead of raw data

### Mistake 3: Skills for Everything

**Symptom**: Many skills exist but Claude rarely invokes them correctly

**Problem**: Skill descriptions don't clearly signal when to use them

**Fix**: Write clear descriptions, or set `disable-model-invocation: true` for manual-only skills

### Mistake 4: Forgetting Hooks Exist

**Symptom**: Repetitive validation tasks consume LLM calls

**Problem**: Using Claude for deterministic checks it doesn't need to reason about

**Fix**: Move deterministic validations to Hooks, save context for actual reasoning

## Lab: Map Your Context Architecture

**Objective:** Design a context architecture for your project or domain.

**Step 1: Inventory Your Information**

List everything Claude needs to know for your work:

```
# Information Inventory## Always Needed- [List items Claude needs every single time]## Sometimes Needed- [List domain-specific workflows, templates, procedures]## Research-Heavy- [List tasks requiring extensive file reading or analysis]## Deterministic Checks- [List validations that don't require reasoning]
```

**Step 2: Apply the Framework**

For each item, assign the appropriate tool:

Information

Tool

Rationale

\[Item 1\]

CLAUDE.md / Skill / Subagent / Hook

\[Why this tool\]

\[Item 2\]

...

...

**Step 3: Calculate the Cost**

Estimate token impact:

```
# Context Cost Analysis## Without Architecture- All content in CLAUDE.md: ~[X] tokens every request## With Architecture- CLAUDE.md baseline: ~[Y] tokens- Skill descriptions: ~[Z] tokens- Average skill invocation: ~[W] tokens (only when needed)## Savings- Baseline reduction: [percentage]- Context available for work: [additional tokens]
```

**Step 4: Implement One Piece**

Choose the highest-impact change and implement it:

-   Move one section from CLAUDE.md to a Skill, OR
-   Create one Subagent for research tasks, OR
-   Add one Hook for deterministic validation

## What You Learned

1.  **Four tools have four loading patterns** — CLAUDE.md always loads, Skills load on-demand, Subagents use isolated context, Hooks run externally
2.  **The decision framework** maps information type to appropriate tool — always-needed → CLAUDE.md, sometimes-needed → Skill, fresh-analysis → Subagent, deterministic → Hook
3.  **Context architecture dramatically reduces baseline load** — 10x+ reduction is achievable by distributing information appropriately
4.  **Common mistakes** include overloading CLAUDE.md, avoiding Subagents, unclear skill descriptions, and forgetting Hooks

## Try With AI

### Prompt 1: Architecture Audit

```
Review my current context setup:- CLAUDE.md has [X] lines- I have [Y] skills- I never use subagents- I have no hooksAnalyze where I'm wasting context.What should I move to Skills?What should become Subagent tasks?What deterministic checks could be Hooks?
```

**What you're learning:** Identifying architecture inefficiencies in your own setup.

### Prompt 2: Design Challenge

```
I'm a [your profession] working on [your project type].My recurring tasks are:1. [Task 1]2. [Task 2]3. [Task 3]Design a context architecture:- What goes in CLAUDE.md (under 60 lines)?- What Skills should I create?- What Subagent patterns would help?- What Hooks would reduce context waste?
```

**What you're learning:** Applying the framework to your actual work.

### Prompt 3: Migration Plan

```
I have a 400-line CLAUDE.md that I need to refactor.Here's the current content: [paste content]Create a migration plan:1. What stays in CLAUDE.md? (under 60 lines)2. What becomes Skills? (list with descriptions)3. What changes to Subagent patterns?4. What becomes Hooks?Include rationale for each decision.
```

**What you're learning:** Practical migration from overloaded setup to proper architecture.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   The Tasks System: Persistent State for Context Management

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/04-tasks-system.md)

# The Tasks System: Persistent State for Context Management

You're deep in a complex refactoring project. You've built a mental map of what needs to happen: fix the authentication module, then update the user service that depends on it, then run the integration tests. Claude knows this plan too. You've discussed it. It's all in context.

Then you hit the wall. Context is at 80%. Quality is degrading. You need to run `/clear`.

And the plan vanishes.

This is the ephemeral state problem. Your project roadmap lived only in the conversation. Clear the context, lose the roadmap.

Claude Code's Tasks system solves this. **Tasks are filesystem-backed persistent state.** Your plan lives on disk, not in context. Clear freely. The roadmap survives.

## The Old Problem: Ephemeral Todos

Before Tasks, Claude Code had Todos. You might have seen them in the sidebar: an orange sticky-note icon. They helped Claude remember what to do during a session.

The problem: Todos lived in the chat. When you ran `/clear` or `/compact`, they could disappear along with your conversation history. The plan existed only as long as the context existed.

Aspect

Old Todos

New Tasks

**Storage**

In conversation

On filesystem (`~/.claude/tasks/`)

**Survives /clear**

No

Yes

**Survives crashes**

No

Yes

**Cross-session**

No

Yes (with environment variable)

**Dependencies**

No

Yes (blockedBy, addBlocks)

This isn't a small upgrade. It's a paradigm shift in how plans relate to context.

## The Core Insight: Plan on Disk Enables Context Freedom

Here's the key insight, directly from the VentureBeat analysis of this feature:

> "Because the plan is stored on disk, users can run /clear or /compact to free up tokens for the model's reasoning, without losing the project roadmap."

This is context engineering in action. You've learned that context fills up and quality degrades. You've learned about the attention budget and position sensitivity. Now you have a tool that **decouples your plan from your context**.

**Before Tasks:**

-   Plan lives in context
-   Context fills up
-   Can't clear without losing plan
-   Quality degrades as you work

**After Tasks:**

-   Plan lives on disk
-   Context fills up
-   Clear freely, plan persists
-   Quality stays high through aggressive context management

## How You Work With Tasks

You interact with tasks by talking to Claude. Claude uses internal tools (TaskCreate, TaskUpdate, TaskList, TaskGet) behind the scenes—you don't call these directly.

### Creating Tasks

**What you say:**

```
Create a task to review the vendor contract. It should include extractingkey terms and identifying liability provisions.
```

**What Claude does internally:** Uses TaskCreate to store the task with a subject, description, and status.

**What you see:** The task appears in your task list (press `Ctrl+T` to toggle the view).

### Viewing Tasks

**What you say:**

```
Show me the current tasks.
```

or

```
What's available to work on?
```

**What you see:**

```
#1 [completed] Extract key contract terms#2 [in_progress] Identify liability provisions [blocked by #1]#3 [pending] Draft recommendations [blocked by #1, #2]
```

**A task is "available" when:**

1.  Status is `pending` (not started yet)
2.  No one is working on it
3.  All its dependencies are complete (blockedBy list is empty)

### Setting Up Dependencies

**What you say:**

```
I need to review the contract, identify liability issues, compare to ourstandard terms, and draft recommendations. Create tasks with dependencies.
```

Claude breaks this into discrete tasks and wires up the dependencies so tasks become available only when their prerequisites complete.

### Completing Tasks

**What you say:**

```
Mark task 1 as complete.
```

or Claude marks it complete automatically after finishing the work.

**What happens:** Task 1 moves to `completed`. Tasks 2 and 3 (which were blocked by #1) automatically become available.

### CLI Shortcuts

-   **`Ctrl+T`**: Toggle the task list view in your terminal (shows up to 10 tasks)
-   **Just ask**: "Show me all tasks", "Clear all tasks", or "What's next?"

## Why Tasks Survive /clear

Tasks are stored as files in `~/.claude/tasks/`, not in your conversation. That's why they persist when you clear context—they're on disk, not in memory.

## Dependency Graphs: Task DAGs

Tasks support **Directed Acyclic Graphs (DAGs)**. Task 3 can be blocked by Tasks 1 and 2. When both complete, Task 3 automatically becomes available.

This is powerful for complex projects:

```
┌─────────────────┐│  1: Fix Auth    │└────────┬────────┘         │         ▼┌─────────────────┐     ┌─────────────────┐│ 2: User Service │     │ 4: Admin Panel  │└────────┬────────┘     └────────┬────────┘         │                       │         ▼                       │┌─────────────────┐              ││ 3: Integration  │◄─────────────┘│    Tests        │└─────────────────┘
```

Task 3 (integration tests) is blocked by Tasks 2 and 4. Both must complete before testing can begin.

**How you'd set this up:**

```
I need to fix authentication, update the user service and admin panel,then run integration tests. The user service depends on auth being fixed.Create tasks with the right dependencies.
```

Claude handles the internal mechanics—creating the tasks and wiring up the dependency graph. You describe WHAT you need; Claude figures out HOW to structure it.

## What Filesystem Persistence Means for You

Because tasks live on disk (`~/.claude/tasks/`), you get three benefits:

**1\. Crash Recovery**: If your terminal crashes, your tasks persist. Resume your session, ask "What tasks do we have?", and continue where you left off.

**2\. Session Independence**: Tasks don't consume context tokens. A 50-task project plan uses zero tokens in your conversation—it's all on disk.

**3\. Clear Freely**: Run `/clear` whenever context fills up. Your roadmap survives because it was never in context to begin with.

## The Pattern: Plan, Clear, Execute

Armed with Tasks, here's the pattern for long-running work:

**Phase 1: Plan** Create tasks at the beginning of a work session when context is fresh:

```
I need to review this contract and prepare negotiation recommendations.Create a task plan with dependencies.
```

Claude breaks this into discrete tasks (extract terms, identify provisions, flag issues, cross-reference, draft recommendations) and sets up the dependency chain automatically.

**Phase 2: Clear** When context fills up (60-80%), clear aggressively:

```
/clear
```

Your plan survives. The 6-task roadmap persists on disk.

**Phase 3: Execute** After clearing, check what's available and continue:

```
What's next?
```

Claude checks the task list, finds which tasks are unblocked, and continues execution.

**The key insight**: You're not losing information when you clear. You're freeing context for reasoning while your strategic plan persists.

## Real-World Example: Multi-Phase Projects

Here's how Tasks enable complex projects across different domains:

**Legal: Due Diligence Review**

```
Task plan:├── Task 1: Extract key terms from all contracts (no blockers)├── Task 2: Identify liability provisions (blocked by #1)├── Task 3: Flag regulatory compliance issues (blocked by #1)├── Task 4: Cross-reference findings (blocked by #2, #3)├── Task 5: Draft executive summary (blocked by #4)
```

**Marketing: Campaign Development**

```
Task plan:├── Task 1: Analyze competitor positioning (no blockers)├── Task 2: Define target personas (no blockers)├── Task 3: Develop messaging framework (blocked by #1, #2)├── Task 4: Create channel strategy (blocked by #3)├── Task 5: Draft creative briefs (blocked by #3, #4)
```

**Research: Literature Synthesis**

```
Task plan:├── Task 1: Search and gather sources (no blockers)├── Task 2: Extract methodology patterns (blocked by #1)├── Task 3: Identify key findings (blocked by #1)├── Task 4: Map contradictions and debates (blocked by #2, #3)├── Task 5: Draft synthesis narrative (blocked by #4)
```

**How execution flows:**

1.  **Wave 1**: Independent tasks run (no blockers)
2.  **Wave 2**: Tasks that only needed Wave 1 become available, can run in parallel
3.  **Wave 3**: Synthesis tasks run after their dependencies complete
4.  **Continue**: Each completed task automatically unblocks dependents

**Why this works**: Each task runs with focused context. The agent drafting the executive summary doesn't inherit the noise from analyzing 50 contracts—it gets the cross-referenced findings and writes clearly. Context stays clean at every stage.

This is the pattern: **plan → clear → delegate → synthesize**. The task system manages the coordination. You focus on the work.

## Cross-Session Coordination

For team workflows or parallel execution, multiple sessions can share the same task list using the `CLAUDE_CODE_TASK_LIST_ID` environment variable.

**Terminal A (Writer)**:

```
CLAUDE_CODE_TASK_LIST_ID=project-alpha claude
```

**Terminal B (Reviewer)**:

```
CLAUDE_CODE_TASK_LIST_ID=project-alpha claude
```

Both sessions now see the same tasks. When Writer marks a task complete, Reviewer sees it update. When Reviewer creates a feedback task, Writer sees it appear.

**The Writer/Reviewer Pattern**:

1.  Session A writes code, marks `implement-feature` complete
2.  System creates `review-feature` task blocked by `implement-feature`
3.  When `implement-feature` completes, `review-feature` becomes available
4.  Session B picks up `review-feature`, provides feedback
5.  If issues found, Session B creates `fix-issues` task
6.  Session A picks up `fix-issues`, continues work

This enables **parallel execution with coordination**. No stepping on each other's work. No duplicate effort. The task system manages handoffs.

## Tasks vs. Progress Files

You might wonder: "How are Tasks different from the progress files we'll learn about later in this chapter?"

Aspect

Tasks

Progress Files

**Purpose**

Track what needs to be done

Track what has been learned

**Scope**

Action items and dependencies

Decisions, context, discoveries

**Persistence**

Automatic (via tools)

Manual (you write them)

**Cross-session**

Built-in (environment variable)

Manual (git or shared filesystem)

**Use both together**: Tasks track the WHAT (action items). Progress files track the WHY (decisions and discoveries). Tasks tell you what to do next. Progress files tell you what you've learned along the way.

## Lab: Building a Task-Managed Workflow

**Objective:** Experience the plan-clear-execute pattern with real work.

**Setup:**

1.  Choose a multi-step task in your domain (refactoring, content creation, analysis)
2.  Start a fresh Claude Code session

**Protocol:**

**Step 1: Plan with Dependencies**

Ask Claude to create a task plan:

```
I need to [describe your project goal]. Create a task plan with dependencies.
```

Verify by pressing `Ctrl+T` or asking "Show me the tasks."

**Step 2: Work Until Context Fills**

Execute tasks until you notice quality degradation (typically 60-80% context usage).

Check with `/context`.

**Step 3: Clear and Verify**

Run `/clear`.

Then immediately ask: "What tasks do we have?" (or press `Ctrl+T`).

**Observation:** Your plan survived the clear. Your strategic roadmap persists even though your conversation history is gone.

**Step 4: Continue Execution**

Ask Claude to continue:

```
What's next? Let's keep going.
```

**Expected Finding:** The workflow continues seamlessly despite the context clear. This is the power of filesystem-backed state.

## What You Learned

1.  **Tasks are filesystem-backed**: They live in `~/.claude/tasks/{session-id}/`, not in your conversation
2.  **Plan on disk enables context freedom**: You can `/clear` aggressively without losing your roadmap
3.  **Talk to Claude, not tools**: You describe what you need; Claude handles task creation and dependency wiring
4.  **Dependencies form DAGs**: Tasks can block other tasks, automatically managing execution order
5.  **Cross-session coordination**: `CLAUDE_CODE_TASK_LIST_ID` lets multiple sessions share task state
6.  **CLI access**: Press `Ctrl+T` to toggle task view, or just ask Claude

## Try With AI

### Prompt 1: Create a Task Plan

Choose a project from your domain:

**Legal:**

```
I need to review a vendor contract and prepare negotiation recommendations.Create a task plan with proper dependencies.
```

**Marketing:**

```
I need to develop a product launch strategy from competitive analysisthrough launch timeline. Create a task plan with proper dependencies.
```

**Research:**

```
I need to write a literature review on [your topic]. Create a task planthat takes me from source gathering through the final synthesis.
```

**What you're learning:** Notice how Claude breaks down your goal into discrete tasks and figures out which ones depend on others. You describe the outcome; Claude handles the structure.

**After Claude creates the tasks:** Press `Ctrl+T` to see them in your terminal.

### Prompt 2: Test Persistence

```
Show me the tasks.
```

Then run `/clear` in your terminal. After clearing:

```
Show me the tasks again.
```

**What you're learning:** Your tasks survived because they're on disk, not in context. You just freed your entire context window while keeping your project roadmap intact.

### Prompt 3: Complete a Task

```
Mark the first task as done and show me what's now available.
```

**What you're learning:** When a blocking task completes, dependent tasks automatically become available. This is the DAG in action—no manual coordination needed.

### Prompt 4: Cross-Session Setup (Advanced)

```
How do I share tasks between two terminal sessions?
```

**What you're learning:** Claude will explain the `CLAUDE_CODE_TASK_LIST_ID` pattern. Try it yourself:

```
# Terminal 1CLAUDE_CODE_TASK_LIST_ID=my-project claude# Terminal 2 (different window)CLAUDE_CODE_TASK_LIST_ID=my-project claude
```

Both sessions now share the same task list.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   The Two-Way Problem: Getting Tacit Knowledge In and Out

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/05-tacit-knowledge.md)

# The Two-Way Problem: Getting Tacit Knowledge In and Out

You've been in your role for three years. You know why things are done a certain way—not because it's written down, but because you were there when the decisions got made.

Maybe you're a lawyer who knows which judges prefer concise briefs versus detailed ones, which opposing counsel will negotiate in good faith, and which contract clauses your firm has learned to avoid after a costly dispute five years ago. Maybe you're a marketing director who knows that this particular client hates the word "synergy," that their CEO responds better to data than stories, and that the Q4 campaign failed not because of the creative but because of timing with their product launch. Maybe you're a research scientist who knows which methodologies your reviewers trust, which citation styles signal credibility in your field, and which collaborators actually respond to emails.

None of this is documented. It lives in your head, in email threads nobody will ever search, in the institutional memory of colleagues who were there when the decisions got made.

Now you're working with AI. It can read your documents. It can follow your instructions. But it doesn't know *why*. It doesn't carry the weight of decisions that shaped your practice. It treats every contract clause, every client, every methodology as equally neutral—without the context that makes your expertise valuable.

This is the Two-Way Problem—and solving it is the difference between an AI that helps you and an AI that actually understands your work.

## The Two-Way Problem

Greg Foster, writing about the real bottlenecks in AI-assisted work, identified what he calls the Two-Way Problem. It's not about prompts or context windows. It's about knowledge transfer in both directions.

Direction

Challenge

Why It's Hard

**Professional -> AI**

Transfer tacit knowledge

Documentation records what someone thought to write down, not the dozens of micro-decisions that shaped current practice

**AI -> Professional**

Extract understanding

Reviewing AI-generated work takes different cognitive effort—you're reverse-engineering intent from output rather than following reasoning

Both directions matter. If you can't get your knowledge into the AI, it makes decisions that violate unwritten rules. If you can't extract understanding from what the AI produces, you're using deliverables you don't fully comprehend.

Most professionals focus only on the first direction. They spend hours crafting instructions and system prompts. But the second direction—actually understanding what the AI created—gets neglected. The result is work products where the AI understands the reasoning better than the humans responsible for defending or maintaining them.

## What IS Tacit Knowledge?

Tacit knowledge is what experienced professionals carry that never makes it into documentation. It's the unwritten rules—the stuff you'd tell a new colleague over coffee but would never think to write down.

**Examples of tacit knowledge across domains:**

Domain

Examples

**Legal**

Which judges prefer concise briefs; which opposing counsel negotiates in good faith; which contract clauses have caused problems before; how to read a client's risk tolerance

**Marketing**

Which clients hate certain buzzwords; what creative approaches have failed with this audience before; timing considerations that aren't in the brief; internal politics about brand voice

**Research**

Which methodologies your field's reviewers trust; which journals actually read submissions thoroughly; which collaborators deliver on time; citation conventions that signal credibility

**Consulting**

Which stakeholders have real decision-making power; how much detail this client wants; which recommendations will actually get implemented; historical context on failed initiatives

**Business Analysis**

Which processes are actually followed vs. documented; who the real subject matter experts are; which systems have unreliable data; political sensitivities around process changes

**Software**

Why certain architectural decisions were made; which parts of the codebase are dangerous to touch; performance vs. readability tradeoffs in specific areas; historical incidents that shaped current practice

**What tacit knowledge is NOT:**

-   Documented procedures and policies
-   Written style guides and standards
-   Formal decision records
-   Onboarding materials and handbooks

The distinction matters because AI systems can read documentation. What they can't read is the knowledge that never got documented—the context that makes documentation make sense.

**A Legal Example:** Your instructions say "Use standard indemnification language." That's explicit knowledge. But the tacit knowledge is: "We use standard language except for this client, who had a $2M claim two years ago, so we always add carve-outs for gross negligence—but only on service agreements, not licensing deals." Without that context, AI might use standard language where it shouldn't.

**A Marketing Example:** Your brand guide says "Use conversational tone." That's explicit knowledge. But the tacit knowledge is: "Conversational means different things for different audiences—our B2B clients want professional-conversational, while the consumer brand can be casual. And the CEO hates exclamation points." Without that context, AI might produce copy that's technically on-brand but wrong for the audience.

**A Software Example:** Your CLAUDE.md says "Use async/await for database calls." That's explicit knowledge. But the tacit knowledge is: "We switched to async because of connection pool issues during traffic spikes, but only on the product catalog service. The user service still uses sync calls because it's read-heavy and the added complexity wasn't worth it." Without that context, AI might refactor code that's actually fine.

## Strategies for Getting Knowledge IN

The first direction of the Two-Way Problem: how do you transfer what's in your head to the AI?

### Strategy 1: Structured Context Documents for AI Consumption

Most professional documentation is written for humans. It's full of context that assumes shared experience, references that require interpretation, and explanations that build on knowledge the reader already has.

Documents for AI consumption need to be different. Let's look at examples across several domains:

* * *

**Legal Context Example:**

*For Humans:*

```
## Client: Acme CorpStandard enterprise client. See the Henderson matter for background on their risk tolerance.
```

*For AI:*

```
## Client: Acme Corp### Relationship Context- Client since 2019, mid-market manufacturer- General Counsel is highly risk-averse after the Henderson litigation (2021)- Prefers plain language over legalese—CEO reviews all agreements personally### Contract Preferences (Non-Negotiable)- ALWAYS include gross negligence carve-out in indemnification clauses- Limitation of liability must specify actual damages cap (they won't accept consequential)- Arbitration clause required—they had bad experience with jury trial in Henderson### Historical Context- The Henderson matter cost them $1.8M—any similar liability language will be flagged- They terminated their previous firm over a missed filing deadline—punctuality matters- CFO overshadows GC on financial terms—get buy-in from both
```

* * *

**Marketing Context Example:**

*For Humans:*

```
## Brand VoiceConversational but professional. See last quarter's campaign for examples.
```

*For AI:*

```
## Brand Voice: TechStart### Core Voice Principles- Conversational but not casual (no slang, no exclamation points—CEO hates them)- Confident without arrogance (avoid "leading" or "best-in-class")- Technical credibility (can use jargon with developer audience, plain language for executives)### Constraints (Non-Negotiable)- NEVER use: "synergy," "leverage" (as verb), "disrupt," "game-changing"- ALWAYS use Oxford comma (brand guide exception from AP style)- Product name is "TechStart" not "Techstart" or "Tech Start"### Audience-Specific Adjustments- Developer content: Can be more technical, humor OK- Executive content: Formal tone, emphasize ROI and case studies- Social media: Shorter sentences, more direct, still no exclamation points### Historical Context- Q2 2024 campaign with casual tone underperformed—audience found it unprofessional- Competitor MegaTech owns "innovative"—avoid that word in positioning- Founder's story resonates—reference bootstrapping narrative when appropriate
```

* * *

**Research Context Example:**

*For Humans:*

```
## MethodologyStandard qualitative approach. IRB approved.
```

*For AI:*

```
## Research Methodology: User Behavior Study### Methodological Framework- Grounded theory approach (Strauss & Corbin tradition, not Glaser)- 30-minute semi-structured interviews, recorded and transcribed- Theoretical sampling until saturation (typically 15-25 participants in this domain)### Constraints (Non-Negotiable)- NEVER deviate from IRB-approved protocol without amendment- Informed consent must be documented before any data collection- Participant identifiers use P001-P999 format (never names, even in internal docs)### Field-Specific Conventions- This journal prefers APA 7th edition with DOI links- Reviewers in this subfield expect reflexivity statements- Mixed methods requires separate findings sections (not integrated)### Historical Context- Previous study (2022) was criticized for insufficient member-checking—always include- Lab's reputation is methodological rigor—never shortcut triangulation- Funding agency expects quarterly progress reports—design timeline accordingly
```

* * *

**Software Context Example:**

*For Humans:*

```
## Authentication ArchitectureWe use a microservices approach for auth, similar to what Netflix described in their 2019 blog post.
```

*For AI:*

```
## Authentication Architecture### Why This Design- Original monolithic auth couldn't scale past 10K concurrent users- Q4 2023 incident: 47 minutes downtime during Black Friday traffic spike- Solution: Decomposed into 3 services with circuit breakers### Current State- auth-gateway: Handles all external auth requests, rate limits at 1000 req/s- token-service: Issues and validates JWTs, 15-minute expiry- session-store: Redis-backed, 24-hour session TTL### Constraints (Non-Negotiable)- NEVER modify token-service without security review- All auth changes require integration tests against production-like load- Circuit breaker thresholds: 50% failure rate triggers open state### Historical Context- The "legacy_auth" module still exists for enterprise customers on old contracts- It will be deprecated Q3 2025—don't invest in improvements- If you see legacy_auth patterns in new code, flag it
```

* * *

The AI versions across all domains share common characteristics: they're explicit about constraints, include the "why" behind decisions, and call out what NOT to do. They're not trying to be comprehensive—they're trying to transfer the tacit knowledge that shapes decisions.

### Strategy 2: Encoded Preferences (Examples Over Rules)

Rules are ambiguous. Examples are concrete.

**Rule-based (weak):**

```
## Style Guide- Write clearly- Be professional- Follow best practices
```

AI already knows these generic principles. They don't help.

**Example-based (strong):**

Here's how this works across different domains:

* * *

**Legal Writing Example:**

```
## Brief Writing StyleWhen summarizing case holdings, follow this pattern (from Smith v. Jones brief, p.12):GOOD: "The Court held that contractual ambiguity must be construed againstthe drafter where the non-drafting party lacked bargaining power. Smith v. Jones,123 F.3d 456, 461 (9th Cir. 2023)."NOT this pattern (from the Johnson draft - do not copy):BAD: "The Court said contracts should be interpreted fairly."
```

* * *

**Marketing Copy Example:**

```
## Product Description StyleWhen describing features, follow this pattern (from Q3 landing page):GOOD: "TechStart processes your data in 3 seconds—not 3 minutes.That means your team reviews insights while they're still relevant,not after the meeting already ended."NOT this pattern (from the rejected Q1 copy):BAD: "Our innovative, best-in-class solution leverages cutting-edgetechnology to disrupt the data processing space."
```

* * *

**Research Writing Example:**

```
## Findings PresentationWhen reporting qualitative results, follow this pattern (from published Chen study):GOOD: "Participants consistently described a tension between organizationalexpectations and personal values. As P007 noted, 'I know what the policysays, but that's not how things actually work here.'"NOT this pattern (from the rejected first draft):BAD: "Many participants felt conflicted about their work."
```

* * *

**Software Example:**

```
## Error Handling StyleWhen writing error handling, follow this pattern (from services/payment.ts:142):```typescript// GOOD: Specific error types with contexttry {  await processPayment(order);} catch (error) {  if (error instanceof PaymentDeclinedError) {    logger.warn("Payment declined", {      orderId: order.id,      reason: error.reason,    });    return {      success: false,      retryable: true,      userMessage: error.userFacingMessage,    };  }  throw error; // Unknown errors are bugs - fail loudly}```NOT this pattern (from services/legacy/checkout.ts - do not copy):```typescript// BAD: Generic catch, swallowed errorstry {  await processPayment(order);} catch (e) {  console.log("payment failed");  return false;}```
```

* * *

The example-based versions give AI a concrete reference. When it encounters similar situations, it can pattern-match against the good example rather than interpreting vague rules.

### Strategy 3: Memory Systems

Memory systems capture preferences and knowledge as they emerge during conversations, then persist them for future sessions.

**The OpenAI Memory Lifecycle:**

```
inject -> reason -> distill -> consolidate
```

1.  **Inject**: At session start, render saved memories as context (YAML frontmatter + Markdown)
2.  **Reason**: Agent uses memories for decisions throughout the session
3.  **Distill**: During conversation, capture new durable preferences
4.  **Consolidate**: After session, merge new memories into persistent storage

This lifecycle means knowledge accumulates over time. You don't have to pre-specify everything upfront. The system learns your preferences as you work.

**Practical implementation:**

Most AI tools don't have built-in memory persistence (yet), but you can implement the pattern manually with a memories file:

```
## Memory File: .claude/memories.md### Established Preferences- Client prefers bullet points over paragraphs in executive summaries (captured 2025-01-15)- Always include page numbers in document references (captured 2025-01-18)- Dislikes passive voice—prefers direct statements (captured 2025-01-20)### Domain-Specific- [Legal] Use "shall" not "will" in contract obligations- [Marketing] This client prefers data-first messaging- [Research] Cite primary sources over review articles when possible- [Software] Prefers explicit type annotations over inference### Session Notes[Add notes here during work sessions, consolidate weekly]
```

Then in your instructions:

```
## MemoryRead memories.md at session start. It contains my established preferences.If you learn something new about my preferences during this session,suggest adding it to the memories file before we finish.
```

### Memory Scoping: Global vs Session

Not all knowledge should persist. The key question: **Should this affect future sessions?**

Type

Persistence

Examples

**Global Memory**

Across all sessions

"Client prefers formal tone"

"Always cite primary sources"

"Use Oxford comma in all documents"

"This firm uses APA citation style"

**Session Memory**

This session only

"Current task is the Johnson contract review"

"We decided to recommend Option A, not Option B"

"The issue is in Section 4.2 of the agreement"

"Today's deadline is the grant proposal"

Global memory shapes how AI works on your projects generally. Session memory shapes what it's working on right now.

The danger of over-globalizing: if you persist too much, your memories become noisy. "We're reviewing the Johnson contract" isn't a preference—it's current context that will be irrelevant tomorrow.

The danger of under-globalizing: if you don't persist enough, you re-explain the same preferences every session. "I already told you this client prefers bullet points" shouldn't happen.

## Strategies for Getting Understanding OUT

The second direction of the Two-Way Problem: how do you extract understanding from what the AI generates?

This direction gets less attention, but it's equally important. When AI produces a complex deliverable—a contract, a campaign strategy, a research analysis, or code—you need to understand it well enough to defend it, modify it, and explain it to others.

### Strategy 1: Require Explanations

Don't accept deliverables without reasoning.

**Weak approach (any domain):**

```
Draft the indemnification clause for the vendor agreement.
```

or

```
Create the Q4 campaign strategy for the product launch.
```

AI produces output. You read it. Maybe you understand the reasoning, maybe you don't. You're reverse-engineering intent from the deliverable.

**Strong approach (Legal example):**

```
Draft the indemnification clause for the vendor agreement.Before drafting, explain:1. What liability allocation approach you're recommending and why2. What carve-outs you're including and the reasoning3. How this compares to our standard template4. What risks remain even with this languageThen draft the clause.
```

**Strong approach (Marketing example):**

```
Create the Q4 campaign strategy for the product launch.Before writing, explain:1. Why you're recommending this channel mix2. What audience segments you're prioritizing and why3. How this differs from last quarter's approach4. What assumptions you're making about budget allocationThen create the strategy.
```

**Strong approach (Software example):**

```
Implement the caching layer for the product catalog.Before writing code, explain:1. What caching strategy you're using and why2. What the cache invalidation approach is3. What happens on cache miss4. What the failure modes are and how they're handledThen implement it.
```

Now you understand the intent before you see the deliverable. The output becomes verification of the explanation, not a puzzle to decode.

### Strategy 2: Structured Output

Ask for outputs that organize understanding, not just deliverables.

**For any complex work product, request structured documentation:**

```
When you complete this work, provide:## Summary- What was created (1-2 sentences)- Key decisions and reasoning (bullet points)## Components/Sections- [Component]: [what it does and why it's structured this way]## Review Notes- How to verify this is correct- Edge cases or exceptions to watch for## Future Considerations- What someone modifying this later should know- Potential issues or limitations
```

**Domain-specific variations:**

*Legal:*

```
## Contract Summary- Purpose and key terms- Deviations from standard template and why## Risk Analysis- Remaining exposure areas- Mitigation recommendations## Client Communication- How to explain this to the client- Questions they're likely to ask
```

*Marketing:*

```
## Campaign Summary- Core message and target audience- Channel strategy rationale## Success Metrics- How to measure effectiveness- Benchmarks for comparison## Stakeholder Notes- How to present this to leadership- Likely objections and responses
```

This structure forces AI to articulate the knowledge that would otherwise stay implicit. You're not just getting a deliverable—you're getting a knowledge transfer document.

### Strategy 3: Progressive Review

Don't try to understand everything at once.

**Weak approach:** AI generates a complete deliverable. You review a 20-page document or 500 lines of code, trying to hold the whole thing in your head.

**Strong approach:** Break the work into chunks that build understanding progressively.

**Legal example:**

```
Let's draft the service agreement step by step.Step 1: Show me the scope of services section and explain the key choices.[review and discuss]Step 2: Draft the compensation and payment terms.[review and discuss]Step 3: Draft the liability and indemnification sections.[review and discuss]Step 4: Add the termination and dispute resolution clauses.[review and discuss]
```

**Research example:**

```
Let's develop the methodology section step by step.Step 1: Outline the research design and explain why this approach fits the question.[review and discuss]Step 2: Detail the participant selection and sampling strategy.[review and discuss]Step 3: Describe the data collection procedures.[review and discuss]Step 4: Explain the analysis approach and how findings will be validated.[review and discuss]
```

Each step builds on the previous one. By the time you reach the final deliverable, you've accumulated understanding piece by piece instead of trying to absorb it all at once.

### Strategy 4: The Rubber Duck Test

After AI creates something significant, explain it back:

```
I want to make sure I understand what you created.Let me explain it back to you, and correct me if I'm wrong:[your explanation]Did I get that right? What did I miss or misunderstand?
```

This reveals gaps in your understanding. If you can't explain it, you don't understand it. And if you don't understand it, you shouldn't use it—whether it's a contract clause you'll need to defend, a campaign strategy you'll need to present, or code you'll need to maintain.

## Lab: Tacit Knowledge Extraction

**Objective:** Transform 10 minutes of verbal explanation into effective AI context.

This lab addresses the first direction of the Two-Way Problem: getting what's in your head into a format the AI can use.

**Choose Your Domain Context:**

This lab works for any professional domain. Select the context closest to your work:

Domain

Your "Project"

The "New Person"

**Legal**

A client relationship or practice area

A new associate joining the team

**Marketing**

A client account or campaign type

A new account manager

**Research**

A study or research program

A new graduate student or collaborator

**Business/Consulting**

A client engagement or business process

A new analyst or consultant

**Software**

A codebase or system

A new developer joining the team

**What you'll need:**

-   A project/client/engagement you know well (ideally one with undocumented history)
-   A way to record yourself talking (phone voice memo, laptop mic, etc.)
-   60-90 minutes of focused time

**Protocol:**

**Step 1: Record the Explanation (10 minutes)**

Imagine a competent new colleague is joining tomorrow. They can read documents and understand standard procedures—but they don't know the history, the relationships, or the unwritten rules.

Record yourself explaining your project/client/engagement to them.

*For Legal:*

-   Why this client's agreements are structured the way they are
-   Which issues they're sensitive about and why
-   Historical disputes or near-misses that shaped current practice
-   What a new associate needs to know to not upset this relationship

*For Marketing:*

-   Why this client's campaigns use certain approaches
-   What creative directions have failed before and why
-   Internal politics about brand voice or channel preferences
-   What a new account manager needs to know to not lose this client

*For Research:*

-   Why you chose this methodology over alternatives
-   Which reviewers or funders have specific expectations
-   Previous studies that shaped current approach
-   What a new collaborator needs to know to not compromise the work

*For Business/Consulting:*

-   Why this client's processes work the way they do
-   Which stakeholders have real power versus formal authority
-   Historical initiatives that failed and the lessons learned
-   What a new consultant needs to know to be effective

*For Software:*

-   Why the system is architected the way it is
-   Where the technical debt and danger zones are
-   Historical incidents that shaped current design
-   What a new developer needs to know to not break things

Don't script it. Talk naturally, as you would to a real colleague.

**Step 2: Transcribe (10 minutes)**

Transcribe your recording. You can use:

-   Claude: "Transcribe this audio recording" (if you have audio upload capability)
-   A transcription service (Whisper, Otter.ai, etc.)
-   Manual transcription (tedious but ensures you engage with the content)

**Step 3: Extract Non-Documented Knowledge (20 minutes)**

Read through your transcription and highlight everything that ISN'T in your existing documentation.

Create a document with these sections:

```
## Tacit Knowledge Extraction: [Project/Client/Engagement Name]### Historical Context (Why Things Are The Way They Are)- [Knowledge item 1]- [Knowledge item 2]### Unwritten Rules (What Everyone Knows But Nobody Wrote Down)- [Rule 1]- [Rule 2]### Danger Zones (Where New People Get Burned)- [Danger 1]- [Danger 2]### Key Relationships (Who Knows What)- [Person/team] owns [area] - ask them about [topic]- [Person/team] has context on [historical decision]### Political Landscape (How Decisions Actually Get Made)- [Insight 1]- [Insight 2]
```

**Step 4: Categorize for AI Consumption (15 minutes)**

Classify each item:

Knowledge Item

Should Go In...

Format

*Legal:* "Client requires gross negligence carve-outs"

Client context doc for AI

Structured document

*Marketing:* "Never use 'synergy' with this client"

Style constraints

Rule in instructions

*Research:* "Dr. Smith prefers Glaser over Strauss approach"

Not for AI (human context)

Keep in human docs

*Business:* "This client prefers bullet points"

Memory file

Global preference

*Software:* "Auth service has circuit breakers"

Architecture doc for AI

Structured document

Some tacit knowledge is for the AI. Some is for humans only. Some belongs in your instructions; some belongs in separate context files.

**Step 5: Encode as AI-Consumable Artifacts (30 minutes)**

Create the actual artifacts:

1.  **Update your AI instructions** (CLAUDE.md or equivalent) with critical constraints from your extraction
2.  **Create context docs** for AI consumption (see Strategy 1 format)
3.  **Start a memories file** with preferences that emerged
4.  **Create a skill** if the knowledge is complex enough (see Chapter 3)

**Step 6: Test (15 minutes)**

Start a fresh AI session and ask it to make a decision that requires the tacit knowledge you just encoded.

*Test examples by domain:*

-   *Legal:* Ask AI to draft a clause for this client. Does it apply the right carve-outs?
-   *Marketing:* Ask AI to write copy for this brand. Does it avoid the forbidden words?
-   *Research:* Ask AI to outline a methodology. Does it follow field-specific conventions?
-   *Business:* Ask AI to recommend a process change. Does it account for political sensitivities?
-   *Software:* Ask AI to refactor something sensitive. Does it flag the constraint?

Does the AI behave as an informed colleague would?

**Expected Finding:** You'll discover that verbal explanations contain far more tacit knowledge than you realized. Much of it is genuinely valuable and was at risk of being lost.

**Deliverable:** A tacit knowledge document capturing what experienced professionals carry in their heads, encoded into AI-consumable formats (instructions, context docs, memories file, or skills).

## The Connection to Context Engineering

This lesson addresses the human side of context engineering. Previous lessons taught you about attention budgets, position sensitivity, and signal-to-noise ratios. This lesson teaches you about the content itself—what knowledge to put in context and how to get knowledge back out.

**Without tacit knowledge transfer, your Digital FTE is a generic chatbot. With it, your Digital FTE becomes a domain expert worth paying for.**

The Two-Way Problem sits at the center of effective AI collaboration:

Lesson

Focus

The Two-Way Problem Connection

L1: Manufacturing

Why context determines quality

Tacit knowledge IS the quality differentiator

L2: Attention Budget

How much context fits

Tacit knowledge must fit the budget

L3: Position

Where context gets attention

Critical tacit knowledge needs Zone 1/3 placement

L4: Signal vs Noise

What context is useful

Tacit knowledge is high-signal by definition

**L5: Tacit Knowledge**

**What context to encode**

**How to identify and transfer tacit knowledge**

L6: Lifecycle

When to refresh context

When tacit knowledge becomes stale

Without tacit knowledge, your context is shallow—technically correct but missing the wisdom that makes work effective. Without strategies for extraction, you're using deliverables you don't fully understand.

## Try With AI

### Prompt 1: Tacit Knowledge Discovery

```
I want to identify tacit knowledge about my work that I haven't documented.Interview me with these questions, one at a time. After I answer each one,ask a follow-up to dig deeper.1. What would go wrong if a new colleague started working on this without asking anyone first?2. What's something that looks straightforward but is actually sensitive or risky?3. What historical event or past experience shaped how things are done today?4. What unwritten convention exists that you'd be frustrated if someone violated?5. What do you know about this work that you'd struggle to find in any documentation?After the interview, summarize the tacit knowledge we uncovered and suggestwhich pieces should go in AI instructions, context documents, or a memories file.
```

**What you're learning:** Structured extraction of tacit knowledge through guided questions. The AI becomes an interviewer, helping you surface knowledge you carry but might not think to document. This is the first step in the knowledge-IN direction.

### Prompt 2: Understanding Extraction

```
I'm about to review work you generated. Before I look at it, I want to make sureI'll actually understand it, not just accept it.For the next deliverable you create, provide:1. INTENT: What problem this solves (1-2 sentences)2. APPROACH: Why you chose this approach over alternatives3. DECISIONS: Key choices and their tradeoffs4. CONCERNS: Potential issues I should watch for5. FUTURE: What someone modifying this later should knowThen create the deliverable.I'll explain it back to you afterward to verify I understood.
```

**What you're learning:** Structuring the knowledge-OUT direction. Instead of passively receiving deliverables, you're requiring the AI to transfer understanding along with output. This prevents the "I'm using work I don't understand" failure mode.

### Prompt 3: Memory Scoping Exercise

```
I have these pieces of knowledge from recent work sessions. Help me classifyeach one as either GLOBAL (should persist across all sessions) or SESSION(relevant only to current work).For each item, explain your reasoning:1. "This client prefers formal tone over conversational"2. "The current task is reviewing the Johnson contract"3. "We decided to recommend Option A instead of Option B"4. "Always include page numbers in document references"5. "The proposal we're writing is for the Q3 budget cycle"6. "I prefer bullet points over long paragraphs in summaries"7. "The deadline for this deliverable is Friday"8. "Never use passive voice in executive communications"After classifying, explain the general principle: How do you decide what'sglobal vs session-scoped?
```

**What you're learning:** The skill of memory scoping. Not all knowledge should persist—over-globalizing creates noise; under-globalizing causes repetition. This prompt helps you develop intuition for the distinction and apply it to real knowledge items.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Context Lifecycle: Knowing When to Reset vs Compress

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/06-context-lifecycle.md)

# Context Lifecycle: Knowing When to Reset vs Compress

You've learned why context matters (Lesson 1), how the attention budget works (Lesson 2), and why position affects recall (Lesson 3). You've audited your CLAUDE.md for signal vs noise (Lesson 4) and explored getting tacit knowledge in and out (Lesson 5).

Now comes the operational question: **What do you actually DO when context becomes a problem?**

Whether you're a lawyer deep into contract review, a marketer building a campaign, a researcher synthesizing literature, or a developer debugging code—the principles are identical. Context fills up. Quality degrades. You need to decide: reset or compress?

You've seen `/clear` and `/compact` in Chapter 3. You know they exist. But knowing commands isn't the same as knowing strategy. Should you clear now or compact? Should you preserve this tangent or let it go? Is 65% utilization fine or concerning?

This lesson gives you the decision frameworks for context lifecycle management—when to reset, when to compress, how to customize compaction, and how to persist work across sessions.

## The Context Zones Framework

In Lesson 2, you learned that quality holds steady until roughly 70% utilization, then drops. But "monitor until 70%" isn't actionable. You need zones with specific actions.

```
CONTEXT ZONES FRAMEWORK───────────────────────────────────────────────────────────────────│ GREEN   │ YELLOW  │ ORANGE  │  RED    │ BLACK   ││  0-50%  │ 50-70%  │ 70-85%  │ 85-95%  │  95%+   ││ ░░░░░░░ │ ▒▒▒▒▒▒▒ │ ▓▓▓▓▓▓▓ │ ███████ │ ██████× ││  Work   │ Monitor │ Compact │Emergency│  Reset  ││ freely  │ prepare │   NOW   │ compact │ required│───────────────────────────────────────────────────────────────────
```

Zone

Utilization

State

Action Required

**Green**

0-50%

Plenty of room

Work freely

**Yellow**

50-70%

Approaching threshold

Monitor, prepare compaction

**Orange**

70-85%

Quality degradation starting

`/compact` NOW

**Red**

85-95%

Critical capacity

Emergency `/compact`

**Black**

95%+

Near limit

`/clear` required

**Why these thresholds?**

-   **50%**: Research shows this is roughly where you should start paying attention. Context is accumulating faster than you might realize.
-   **70%**: The cliff. Quality starts degrading here. Compacting at 70% preserves most of your work while maintaining quality.
-   **85%**: Emergency territory. Compaction becomes increasingly difficult as you approach the limit—there's less room for the compacted summary.
-   **95%**: Too late for graceful compaction. The overhead of compaction itself might push you over. Reset is safer.

**Checking your zone:**

```
/context
```

**Output:**

```
Context: 87,432 / 200,000 tokens (44%)Cost this session: $0.36
```

44% = Green zone. Work freely.

```
Context: 147,891 / 200,000 tokens (74%)Cost this session: $1.24
```

74% = Orange zone. Compact NOW.

## The /clear vs /compact Decision

Both commands reduce context. They're not interchangeable. The wrong choice costs you either work (clearing when you should compact) or quality (compacting poisoned context).

**Use `/clear` when:**

Condition

Why /clear is right

Task is complete

Nothing to preserve. Fresh start for next task.

Context is poisoned

Outdated decisions, wrong directions, or accumulated confusion. Compaction preserves the poison.

Switching to unrelated work

The context from task A actively hurts task B. Better to start clean.

In Black zone (95%+)

No room for compaction overhead. Reset is the only option.

Session is 3+ days old

Conversation has become too convoluted. Resuming causes more confusion than starting fresh.

**Use `/compact` when:**

Condition

Why /compact is right

Same task continues

You need the decisions made, the files identified, the direction established.

Need to preserve decisions

Important architectural choices or constraints discovered during session.

Context is large but relevant

The size is the problem, not the content. Compression helps, deletion hurts.

Compaction faster than re-explaining

If it would take 10 minutes to re-establish context vs 30 seconds to compact.

**The Decision Tree:**

```
Is context > 70%?├─ NO → Continue working, monitor at 50%+└─ YES → Needs action         │         Is task complete?         ├─ YES → /clear         └─ NO → Is context poisoned (outdated, confused, wrong direction)?                 ├─ YES → /clear and re-establish                 └─ NO → /compact with custom instructions
```

**Context Poisoning Examples:**

Context poisoning happens in every professional domain. Here's what it looks like:

**Legal Professional:** You started analyzing Contract A for liability clauses. Midway through, the client pivoted to reviewing Contract B instead. Now your context is full of Contract A analysis, clause references, and risk assessments that actively confuse work on Contract B.

Compacting this preserves the confusion. Clear instead.

**Marketing Professional:** You've been iterating on campaign messaging for an hour. You tried three positioning angles before finding one that works. The context is full of those rejected angles.

Compacting this might preserve "we tried lifestyle messaging and it didn't resonate" (useful) but also preserves the detailed exploration of that angle (noise). Clear might be cleaner.

**Research Professional:** You've been synthesizing literature on your topic for 2 hours. You've identified 15 key themes, established methodological criteria, and noted 8 seminal papers. Context hit 75%.

Compact this. You want those decisions preserved.

**Business Analyst:** You started mapping Process A. Stakeholder feedback redirected you to Process B. Your context contains detailed flowcharts and edge cases for the wrong process.

Compacting this preserves the wrong mental model. Clear instead.

**Developer:** You've been working on the same feature for 2 hours. You've made 15 good decisions about architecture, identified 8 relevant files, and established constraints. Context hit 75%.

Compact this. You want those decisions preserved.

## What /compact Actually Does

When you run `/compact`, Claude:

1.  **Summarizes the conversation history** into a condensed form
2.  **Preserves critical information**: decisions made, files changed, current task state
3.  **Discards**: verbose explanations, exploration tangents, superseded plans
4.  **Reduces token count** while maintaining continuity

The result is a new session that "remembers" the important parts but has room for more work.

**Without custom instructions**, compaction uses Claude's judgment about what's important. This is often good but sometimes misses domain-specific priorities.

**With custom instructions**, you guide what gets preserved.

## Custom Compaction Instructions

The power move is telling Claude exactly what to preserve. Here are examples across professional domains:

**Legal:**

```
/compact Preserve: the liability clause analysis, our assessment of indemnification risks, and the list of flagged sections. Discard: the general discussion about contract law principles we explored in messages 10-15.
```

**Marketing:**

```
/compact Preserve: the final positioning statement, the three audience segments we defined, and the messaging hierarchy. Discard: the brainstorming about rejected taglines and the competitor analysis tangent.
```

**Research:**

```
/compact Preserve: the literature synthesis structure, the 8 key sources identified, and the methodological criteria. Discard: the detailed summaries of papers we decided weren't relevant.
```

**Consulting:**

```
/compact Preserve: the client requirements matrix, our recommendation framework, and the implementation timeline. Discard: the discussion about pricing models we rejected.
```

**Development:**

```
/compact Preserve: the list of modified files, the authentication architecture we chose, the decision to use JWT instead of sessions. Discard: the discussion about database options we rejected.
```

**Structure for custom compaction:**

```
/compact [Preserve: X, Y, Z] [Discard: A, B, C] [Focus: current task description]
```

**Configurable in CLAUDE.md:**

You can encode your default compaction priorities. Here's a domain-neutral template:

```
## Context ManagementWhen compacting, always preserve:- All key decisions made this session with rationale- The current task definition and acceptance criteria- Any constraints or requirements discovered- The list of documents/files referenced or modified- Client/stakeholder preferences notedWhen compacting, feel free to discard:- Exploration of options we rejected- Tangents that led to dead ends- Verbose explanations of content I can re-read- Background research that informed but isn't directly needed
```

This becomes your default compaction behavior. Claude will follow these priorities unless you override with specific instructions.

## Session Persistence Commands

Context lifecycle isn't just within sessions—it's across them. Sometimes you close the terminal and need to return.

Command

Function

Use When

`claude --continue`

Resume most recent session

You closed the terminal and want to pick up

`claude --resume`

Pick from list of recent sessions

You have multiple projects, need to choose

`/resume`

Switch to different conversation (in-session)

You're in one session but need another context

**\--continue example:**

```
# You closed terminal last night mid-taskclaude --continue
```

**Output (varies by your work):**

```
Resuming session from 2026-01-28 23:45Last context: Reviewing vendor contract terms, 67% utilization──────────────────────────────────────────────────────────────Ready to continue where you left off.
```

**\--resume example:**

```
claude --resume
```

**Output (example showing multi-project work):**

```
Recent sessions:1. [2026-01-28 23:45] contract-review - 67% - "Reviewing vendor contract terms..."2. [2026-01-28 14:20] campaign-q2 - 45% - "Planning Q2 marketing campaign..."3. [2026-01-27 10:15] literature-review - 23% - "Synthesizing research on..."Select session (1-3) or 'n' for new:
```

**/resume (in-session) example:**

```
/resume
```

**Output:**

```
Available sessions to switch to:1. campaign-q2 (45%) - paused 2026-01-282. literature-review (23%) - paused 2026-01-27Switch to session number, or 'cancel':
```

## The 3-Day Rule

Conversations have a viability window. After roughly 3-4 days, a session typically becomes un-resumable—too many tangents, too much accumulated drift, too many implicit assumptions that no longer hold.

**Signs a session has expired:**

-   You can't remember what you were doing
-   The context references files or decisions that have changed
-   Resuming takes longer than starting fresh would
-   Claude seems confused about the current state

**The rule:** If a session is more than 3 days old, start fresh instead of resuming. Use the old session as reference (read the summary) but don't continue in it.

**Exception:** Sessions with excellent progress files (Lesson 7) can last longer because the state is externalized, not trapped in conversation history.

## The Save Checkpoint Pattern

The safest context lifecycle pattern combines compaction with externalizing your progress. For developers, this means Git commits. For other professionals, it means saving documents, notes, or deliverables.

```
1. Work in Green/Yellow zone2. Make meaningful progress3. Save checkpoint (commit code, save document, export notes)4. Check /context5. If Orange+: /compact6. Continue from checkpoint
```

**Why checkpoints matter:**

-   Checkpoints externalize progress (it's saved externally, not just in context)
-   If compaction loses something important, the work is still saved
-   You can /clear without losing work because work is checkpointed
-   Recovery is always possible

**The pattern across domains:**

**Legal Professional:**

```
[Work for 30 minutes reviewing contract][Complete analysis of liability section]Save: contract-review-notes.md with liability findings/context→ Context: 142,000 / 200,000 (71%)/compact Preserve the liability assessment and flagged clauses. The analysis is saved, can reference notes directly now.[Continue with reduced context, saved checkpoint]
```

**Marketing Professional:**

```
[Work for 25 minutes on campaign][Complete audience segmentation]Save: campaign-strategy.md with audience definitions/context→ Context: 138,000 / 200,000 (69%)/compact Preserve the three audience segments and positioning direction. Segmentation is saved.[Continue with reduced context, saved checkpoint]
```

**Researcher:**

```
[Work for 40 minutes synthesizing sources][Complete thematic analysis of first 8 papers]Save: literature-synthesis.md with themes and citations/context→ Context: 145,000 / 200,000 (73%)/compact Preserve the 5 themes identified and methodology criteria. Synthesis is saved.[Continue with reduced context, saved checkpoint]
```

**Developer:**

```
[Work for 20 minutes][Complete a logical unit]$ git add src/auth/$ git commit -m "Add token validation middleware"/context→ Context: 142,000 / 200,000 (71%)/compact Preserve the auth implementation decisions and current task (adding refresh tokens). The token validation is committed, can reference code directly now.[Continue with reduced context, committed checkpoint]
```

This is Principle 5 (Persisting State in Files) applied to context lifecycle. The checkpoint IS the externalized progress. Context can be cleared or compacted because the real progress is saved outside the conversation.

## Lab: Context Zone Monitoring

**Objective:** Build awareness of context utilization patterns in your actual workflow.

**Choose Your Professional Context:**

Pick the scenario that matches your work:

Professional Context

Example Task

Duration

**Legal**

Contract review with clause analysis

45-60 min

**Marketing**

Campaign brief development

30-45 min

**Research**

Literature synthesis for a topic

45-60 min

**Consulting**

Client deliverable preparation

30-45 min

**Development**

Feature implementation

30-60 min

**What you'll need:**

-   A Claude Code session with real work to do
-   A task from your domain that will take 30-60 minutes
-   A simple logging mechanism (text file or spreadsheet)

**Protocol:**

**Step 1: Create Your Monitoring Log**

Create a simple log file:

```
# Context Zone Monitoring Log## Session: [Date] [Task Description]## Domain: [Legal / Marketing / Research / Consulting / Development]| Message # | Tokens | Utilization | Zone | Action Taken || --------- | ------ | ----------- | ---- | ------------ || 0         | ?      | ?           | ?    | Starting     |
```

**Step 2: Establish Baseline**

Start a fresh session and check initial utilization:

```
/context
```

**Output:**

```
Context: 12,456 / 200,000 tokens (6%)
```

Log it: Message 0, 12,456 tokens, 6%, Green, Starting

**Step 3: Work and Monitor**

Every 10 messages (or every 5-10 minutes), run `/context` and log:

-   Current token count
-   Utilization percentage
-   Zone (Green/Yellow/Orange/Red/Black)
-   Any action you took

**Sample log progressions by domain:**

**Legal Professional (Contract Review):**

Message #

Tokens

Utilization

Zone

Action Taken

0

12,456

6%

Green

Starting

10

45,892

23%

Green

Loaded contract document

20

78,234

39%

Green

Analyzed liability clauses

30

108,456

54%

Yellow

Started monitoring more closely

40

138,567

69%

Yellow

Saved clause analysis to notes

45

152,923

76%

Orange

/compact (preserved risk assessment)

46

48,678

24%

Green

Post-compaction, back to Green

**Marketing Professional (Campaign Brief):**

Message #

Tokens

Utilization

Zone

Action Taken

0

12,456

6%

Green

Starting

10

38,892

19%

Green

Explored audience segments

20

72,234

36%

Green

Developed messaging options

30

105,456

53%

Yellow

Monitoring, saved segment definitions

40

142,567

71%

Orange

/compact (preserved positioning)

41

52,678

26%

Green

Post-compaction, back to Green

**Researcher (Literature Synthesis):**

Message #

Tokens

Utilization

Zone

Action Taken

0

12,456

6%

Green

Starting

10

52,892

26%

Green

Loaded first batch of papers

20

89,234

45%

Green

Identified key themes

30

118,456

59%

Yellow

Saved thematic notes, monitoring

35

148,923

74%

Orange

/compact (preserved themes, methodology)

36

45,678

23%

Green

Post-compaction, back to Green

**Step 4: Identify Your Pattern**

After the session, analyze your log:

-   **Average tokens per 10 messages**: How fast does your context grow?
-   **Time to Yellow zone**: How long can you work before needing to monitor?
-   **Optimal compaction point**: Where did compaction work best?
-   **Post-compaction utilization**: How much room did compaction buy you?

**Step 5: Calculate Your Compaction Cadence**

Based on your growth rate, calculate:

```
Messages to Orange zone = (140,000 - starting_tokens) / tokens_per_10_messages * 10Example: (140,000 - 12,456) / 8,000 * 10 = 159 messages to Orange
```

This is your compaction cadence—roughly how many messages before you need to compact.

**Deliverable:** A completed monitoring log showing your typical context growth pattern, with calculated compaction cadence for your workflow.

**Expected Finding:** Most professionals discover they hit Yellow zone faster than expected. The first time you see context jump 20% from loading a single large document or generating a detailed analysis, you'll understand why monitoring matters.

## What You Learned

This lesson gave you the operational framework for context lifecycle management—applicable whether you're reviewing contracts, building campaigns, synthesizing research, or writing code:

1.  **Context Zones** provide actionable thresholds: Green (work freely), Yellow (monitor), Orange (compact now), Red (emergency), Black (reset required).
    
2.  **/clear vs /compact** have distinct use cases: clear when task is complete or context is poisoned; compact when you need to preserve decisions and continue.
    
3.  **Custom compaction instructions** let you guide what survives: preserve key decisions, discard rejected explorations. The specific content varies by domain—liability assessments for legal, audience segments for marketing, thematic analysis for research, architecture decisions for development.
    
4.  **Session persistence** (--continue, --resume, /resume) lets you work across terminal sessions, but sessions expire after roughly 3 days.
    
5.  **The save checkpoint pattern** combines external saves with compaction—externalize progress (notes, documents, commits) before reducing context.
    

The next lesson (Long-Horizon Work) builds on this foundation. You'll learn how to structure work that spans multiple sessions, using progress files and session architecture to maintain continuity beyond what context alone can provide.

## Try With AI

### Prompt 1: Zone Assessment Practice

```
Run /context and tell me:1. What zone am I in (Green/Yellow/Orange/Red/Black)?2. Based on our conversation so far, what's in context that's:   - Essential to preserve if we compact   - Safe to discard   - Potentially poisoning (outdated or conflicting)Help me understand my current context state.
```

**What you're learning:** Context awareness in practice. Before you can make good /clear vs /compact decisions, you need to accurately assess your current state. This prompt practices zone identification and context triage—the foundation of lifecycle management.

### Prompt 2: Compaction Decision Scenario

Choose the scenario that matches your domain:

**For Legal Professionals:**

```
I'm at 73% context utilization. Here's my situation:- I've been reviewing a vendor contract for 45 minutes- I made decisions about acceptable liability limits, identified problematic indemnification clauses, and flagged three sections for negotiation- There was a 10-minute tangent about a different contract type we decided doesn't apply- I haven't saved my analysis notes yetShould I /clear or /compact? If /compact, what custom instructions should I give?Walk me through your reasoning.
```

**For Marketing Professionals:**

```
I'm at 73% context utilization. Here's my situation:- I've been developing a Q2 campaign brief for 45 minutes- I made decisions about target audience segments, core messaging, and channel priorities- There was a 10-minute tangent about a promotion strategy we decided doesn't fit the budget- I haven't saved the campaign strategy document yetShould I /clear or /compact? If /compact, what custom instructions should I give?Walk me through your reasoning.
```

**For Researchers:**

```
I'm at 73% context utilization. Here's my situation:- I've been synthesizing literature on my research topic for 45 minutes- I identified 5 key themes, established inclusion/exclusion criteria, and noted methodological gaps- There was a 10-minute tangent about a related but ultimately off-topic subtopic- I haven't saved my synthesis notes yetShould I /clear or /compact? If /compact, what custom instructions should I give?Walk me through your reasoning.
```

**For Consultants:**

```
I'm at 73% context utilization. Here's my situation:- I've been preparing a client recommendations document for 45 minutes- I made decisions about priority recommendations, implementation sequence, and risk mitigation- There was a 10-minute tangent about an approach we decided doesn't fit the client's constraints- I haven't saved the deliverable draft yetShould I /clear or /compact? If /compact, what custom instructions should I give?Walk me through your reasoning.
```

**For Developers:**

```
I'm at 73% context utilization. Here's my situation:- I've been working on implementing a REST API for 45 minutes- I made decisions about endpoint structure, authentication approach, and error handling- There was a 10-minute tangent about database options we rejected- I haven't committed anything yetShould I /clear or /compact? If /compact, what custom instructions should I give?Walk me through your reasoning.
```

**What you're learning:** Decision framework application. This prompt gives you practice with the /clear vs /compact decision tree using a realistic scenario from your domain. Claude's reasoning will model the analysis process you should internalize.

### Prompt 3: Custom Compaction Design

```
I need to /compact but I want to make sure critical context survives.From our conversation, identify:1. The 3 most important decisions or discoveries to preserve2. The 2 largest "noise" sections that can be safely discarded3. Write the exact /compact command with custom instructions I should useThen explain what I might lose even with good compaction instructions, so I know what to document externally before compacting.
```

**What you're learning:** Compaction instruction crafting. Effective compaction requires understanding both what you want to keep AND what will inevitably be lost. This prompt practices creating precise compaction instructions while acknowledging the tradeoffs—preparing you to use external documentation (progress files, saved notes, commits) as backup.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Long-Horizon Work: Progress Files and Session Architecture

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/07-progress-files.md)

# Long-Horizon Work: Progress Files and Session Architecture

You're working on something substantial. Not a quick task you can finish in one sitting—a real project that matters. Maybe it's a multi-phase contract review. A marketing campaign launch spanning several weeks. A comprehensive literature review for your research. A consulting engagement with multiple deliverables. You've estimated five hours of work, but life happens. You close the laptop after ninety minutes, promising to continue tomorrow.

Tomorrow arrives. You open Claude Code. Where were you? What decisions did you make? Which aspects did you complete? What's left?

Without a system, you spend the first thirty minutes re-establishing context—re-reading documents, re-explaining the goal, hoping Claude picks up where you left off. Sometimes it does. Often it doesn't. Work gets repeated. Decisions get forgotten. Progress feels like walking up an escalator going down.

This lesson introduces the architecture for long-horizon work: **progress files** that persist state across sessions, **task decomposition** that turns vague goals into trackable deliverables, and **session protocols** that ensure every session starts informed and ends with work preserved.

## The Problem with Long Conversations

Lesson 6 taught you when to `/compact` versus `/clear`. But compaction and session resumption only help within a single narrative—a conversation that grows, gets compressed, and continues.

Real projects don't work that way.

Real projects span multiple days, interrupted by meetings, sleep, weekends, and the hundred other demands on your attention. Each interruption creates a session boundary. Each session boundary creates a continuity problem.

Claude Code offers `--continue` to resume the most recent session, but sessions accumulate context rot (Lesson 2). After 3-4 days, resumed sessions become convoluted—too many tangents, too much noise. You need a different architecture.

## The Harness Architecture

Harrison Chase, CEO of LangChain, introduced what he calls the "harness architecture" for long-horizon tasks. The insight: don't try to maintain one continuous conversation. Instead, treat each session as independent, coordinated through a shared artifact.

**Traditional single-agent architecture:**

```
[User] → [Single Agent] → [Output]
```

One session, one agent, one conversation. Context accumulates until it overflows. Works for tasks you can finish in one sitting.

**Long-horizon harness architecture:**

```
[Initializer Agent] → [Progress File] ← [Coding Agent Session 1]                                      ← [Coding Agent Session 2]                                      ← [Coding Agent Session N]
```

The progress file becomes the coordination mechanism. Each session reads it to understand state, does work, then writes back to it. Sessions don't need to share context—they share the file.

## The Two-Agent Mental Model

Think of it as two collaborating agents:

**The Initializer Agent** runs once at project start. Its job:

-   Break down the project into granular tasks
-   Create the initial progress file
-   Establish the working context and baseline state
-   Make the first key decisions

**The Working Agent** runs in each subsequent session. Its job:

-   Read the progress file to understand current state
-   Select the highest-priority incomplete task
-   Do focused work on that task
-   Update the progress file before ending

You might be thinking: "But I'm using Claude Code for both." Yes. The distinction is mental, not technical. The Initializer phase happens in your first session. Every subsequent session is a Working Agent session. The progress file bridges them.

## Progress File Anatomy

Here's the template that makes this work:

```
# Project: [Feature Name]## Last Updated: [Date/Time]## Current Session: [Session Number]## Completed- [x] Task description (Session 1)- [x] Task description (Session 1)- [x] Task description (Session 2)## In Progress- [ ] Task description (started Session 3)## Blocked- [ ] Task description (waiting on: specific blocker)## Not Started- [ ] Task description- [ ] Task description## Decisions Made- Decision: [What you decided]  - Rationale: [Why you decided it]  - Session: [When you decided it]  - Alternatives considered: [What you rejected]## Known Issues- Issue: [What's broken or concerning]  - Impact: [How bad is it]  - Plan: [What to do about it]## Session Log### Session 1 (Date)- Started: [time]- Ended: [time]- Commits: [commit hashes]- Summary: [One paragraph of what happened]### Session 2 (Date)- Started: [time]- Ended: [time]- Commits: [commit hashes]- Summary: [One paragraph of what happened]
```

Let's break down why each section matters.

### Completed (with Session Markers)

```
## Completed- [x] Scope and objectives documented (Session 1)- [x] Initial research completed (Session 1)- [x] Key stakeholders identified (Session 2)- [x] First draft of main deliverable (Session 2)- [x] Stakeholder feedback incorporated (Session 3)
```

The session markers aren't just for tracking. They help future-you understand the project arc. If something goes wrong in Session 5, you can trace back: "The stakeholder feedback was Session 3—what else changed then?"

### In Progress

```
## In Progress- [ ] Executive summary draft (started Session 3, 70% complete)  - Done: Key findings section, methodology overview  - Remaining: Recommendations section, final formatting
```

Don't just mark things "in progress." Annotate them. What's done within this task? What remains? When you return after a weekend, this annotation prevents you from re-doing completed subtasks.

### Blocked

```
## Blocked- [ ] Competitor analysis section (waiting on: Q4 market data from finance team)- [ ] Final recommendations (waiting on: decision on budget allocation approach)
```

Blocked items need specific blockers. "Blocked on information" is useless. "Blocked on Q4 market data from finance team" is actionable—you can follow up with them.

### Decisions Made

This is the most undervalued section.

```
## Decisions Made- Decision: Organizing report by business unit, not by timeline  - Rationale: Stakeholders care most about their unit's performance; timeline view available in appendix  - Session: 2  - Alternatives considered: Chronological (rejected: harder to find unit-specific info), by metric type (rejected: loses narrative flow)- Decision: Using conservative revenue projections, not optimistic  - Rationale: CFO prefers under-promise/over-deliver; matches company culture  - Session: 3  - Alternatives considered: Optimistic (rejected: credibility risk), range-based (rejected: too complex for executive summary)- Decision: Including competitor benchmarks in main body, not appendix  - Rationale: Competitive context essential for understanding our position; leadership specifically requested visibility  - Session: 3  - Alternatives considered: Appendix only (rejected: too buried), separate report (rejected: fragments the narrative)
```

Why does this matter? Because in Session 7, you'll look at your deliverable and think "Why did we organize by business unit? Should we reorganize by timeline?" Without the decision log, you'll have to research the tradeoffs again—or worse, restructure and introduce inconsistency.

The decision log is your institutional memory. It answers "why did we do it this way?" when you've forgotten.

### Known Issues

```
## Known Issues- Issue: Q3 data incomplete for European markets  - Impact: Regional analysis less reliable; acknowledged in methodology section  - Plan: Flag as limitation; update when finance provides complete data- Issue: Two stakeholder interviews still pending  - Impact: May miss perspectives from operations team; low risk for initial draft  - Plan: Schedule interviews; incorporate feedback in revision cycle
```

Known issues aren't failures—they're conscious acknowledgments of limitations. You know about them, you've assessed their impact, you have a plan. This prevents the "surprise" of discovering problems you actually knew about but forgot.

### Session Log

```
## Session Log### Session 3 (2026-01-29)- Started: 14:00- Ended: 16:30- Checkpoint: Saved draft v3, exported PDF for stakeholder review- Summary: Drafted executive summary and key findings. Chose conservative projections based on CFO preference. Hit a snag with competitor data formatting—decided to include benchmarks in main body per leadership request. Left off at 70% complete on executive summary; recommendations section remaining.
```

The session log is narrative context. When the progress file sections give you facts, the session log gives you story. "Hit a snag with competitor data formatting" explains why Session 3 took longer than expected.

## Task Decomposition: The Art of Granular Work

The harness architecture only works if your tasks are granular enough to complete within a session. "Complete the market analysis" isn't a task—it's a project. You need decomposition.

**Bad decomposition:**

```
## Not Started- [ ] Do the research- [ ] Write the report- [ ] Handle feedback
```

These are too vague. "Do the research" could take five sessions or fifteen. You can't track progress against it. You can't know when you're 50% done.

**Good decomposition varies by domain.** Here are examples across professional contexts:

### Legal: Contract Review Project

```
## Not Started- [ ] Create contract review checklist from template- [ ] Extract key terms from counterparty's draft (parties, dates, amounts)- [ ] Identify non-standard clauses requiring attention- [ ] Draft redline suggestions for liability section- [ ] Draft redline suggestions for indemnification section- [ ] Review IP assignment language against company policy- [ ] Flag termination provisions for partner review- [ ] Prepare summary of material changes for client- [ ] Draft negotiation talking points (priority order)- [ ] Create comparison table: their draft vs. our standard terms- [ ] Review force majeure and dispute resolution clauses- [ ] Compile list of open items requiring client decision- [ ] Prepare final recommendation memo
```

### Marketing: Campaign Launch

```
## Not Started- [ ] Define campaign objectives and KPIs- [ ] Identify target audience segments (3 personas)- [ ] Audit existing content assets for reuse- [ ] Create messaging framework (value props, proof points)- [ ] Draft email sequence (awareness, consideration, decision)- [ ] Create social media content calendar (4 weeks)- [ ] Design landing page copy and structure- [ ] Develop A/B test plan for subject lines- [ ] Set up tracking parameters for attribution- [ ] Create performance dashboard template- [ ] Draft launch announcement for internal stakeholders- [ ] Prepare contingency messaging for common objections- [ ] Create post-launch optimization checklist
```

### Research: Literature Review

```
## Not Started- [ ] Define research questions (3-5 specific questions)- [ ] Establish inclusion/exclusion criteria for sources- [ ] Search primary databases and export citations- [ ] Screen abstracts for relevance (first pass)- [ ] Obtain full text for shortlisted papers (20-30)- [ ] Create extraction template for key data points- [ ] Extract data from methodology sections- [ ] Extract data from findings sections- [ ] Identify themes across sources- [ ] Map contradictions and debates in literature- [ ] Draft synthesis of current consensus- [ ] Identify gaps for future research- [ ] Write annotated bibliography for top 10 sources- [ ] Draft literature review narrative
```

### Consulting: Client Engagement

```
## Not Started- [ ] Document current state from intake interview notes- [ ] Map key stakeholders and their priorities- [ ] Identify quick wins (implementable in 30 days)- [ ] Analyze root causes for top 3 pain points- [ ] Benchmark against industry standards- [ ] Draft options matrix (3 approaches with tradeoffs)- [ ] Create financial impact model for recommendations- [ ] Develop implementation timeline (phases)- [ ] Identify risks and mitigation strategies- [ ] Prepare executive summary for steering committee- [ ] Create detailed implementation playbook- [ ] Draft success metrics and measurement plan- [ ] Prepare transition/handoff documentation
```

### Software Development: Feature Build

```
## Not Started- [ ] Design database schema for users table- [ ] Create User model with TypeScript types- [ ] Implement registration endpoint (POST /api/register)- [ ] Add password validation (min 8 chars, requires number)- [ ] Implement password hashing with bcrypt- [ ] Create login endpoint (POST /api/login)- [ ] Implement JWT token generation- [ ] Add token verification middleware- [ ] Implement refresh token rotation- [ ] Create logout endpoint (POST /api/logout)- [ ] Add rate limiting to auth endpoints- [ ] Write integration tests for auth flows- [ ] Document API endpoints
```

### The Common Pattern

Notice what all these decompositions share:

-   Each task is **concrete**: "Extract key terms" not "Review contract stuff"
-   Each task is **verifiable**: You know when it's done
-   Each task is **completable**: Most can be finished in 30-90 minutes
-   Tasks are **sequenced**: Later tasks depend on earlier ones

**The 10-15 rule:** For a ~5 hour project, aim for 10-15 granular tasks. Fewer tasks means each is too large; more means overhead exceeds value.

### Universal Decomposition Technique

When facing a large project, use this questioning protocol:

1.  **What's the first thing that has to exist?** (Scope definition, criteria, framework)
2.  **What depends on that?** (Research, data gathering, initial analysis)
3.  **What's the first tangible output?** (Draft, prototype, initial findings)
4.  **What validates that output?** (Review, testing, stakeholder feedback)
5.  **What makes it complete?** (Polish, documentation, handoff materials)

Apply this recursively until each answer is a 30-90 minute task.

## Session Initialization Protocol

Every work session should start the same way. Consistency prevents context-reconstruction delays.

**The Five-Step Initialization:**

```
1. Check working context (where are your files?)2. Read progress file3. Verify current state of deliverables4. Select highest-priority incomplete item5. Establish baseline (what's working, what exists)
```

In practice, tell Claude at session start:

```
I'm resuming work on [project name]. Read my progress file to understandcurrent state, check the status of my working files, then tell me:1. What was completed in previous sessions2. What's currently in progress3. What's blocked and why4. What you recommend tackling next5. Verify the current state of my deliverables
```

This prompt does several things:

-   Forces Claude to read the progress file (grounding in documented state)
-   Checks for unsaved or in-progress work (prevents losing changes)
-   Gets Claude's recommendation (leverages its understanding)
-   Establishes baseline (so you know the current state before continuing)

The output should look like:

```
Reading progress file...## Session State Summary**Previous Sessions:** 3 sessions, last on 2026-01-28**Completed:** 8 of 15 tasks (53%)- Scope defined, research framework established, stakeholder map complete,  initial data gathered, first draft of findings, executive summary started**In Progress:** Executive summary (70% - recommendations section remaining)**Blocked:**- Competitor analysis (waiting on Q4 market data from finance team)- Final projections (waiting on budget allocation decision)**Recommendation:** Complete executive summary (30 min remaining), then move toimplementation timeline which depends on it.Verifying deliverables...✓ Draft v3 saved and backed up✓ All source documents accessibleBaseline established.
```

Now you know exactly where you are. No reconstruction. No guessing.

## Session Exit Protocol

Ending a session well is as important as starting one well. The exit protocol ensures continuity.

**The Two-Step Exit:**

```
1. Save work at a stable checkpoint2. Update progress file with session summary
```

**The Work Checkpoint Pattern:**

Never end a session with work in an unstable state. This is critical.

If your deliverable is half-edited with notes to yourself scattered throughout, next session starts with cleanup instead of progress. If your research notes are unsorted, you'll waste time re-organizing before you can continue.

Different domains have different checkpoint mechanisms:

Domain

Checkpoint Method

**Software**

Git commit with passing tests

**Documents**

Save versioned draft (v1, v2, v3) or export snapshot

**Research**

Export bibliography, save organized notes file

**Legal**

Save redlined version with clear change summary

**Marketing**

Save campaign assets to organized folder with date

**Consulting**

Export deliverable snapshot, save working files

```
Before ending this session:1. Ensure deliverables are in a clean, resumable state2. Save/commit all work with a descriptive note3. If anything is half-done and messy, either:   a. Finish it to a clean stopping point (preferred), or   b. Note clearly what's incomplete and save the stable portions4. Update your progress file with this session's work
```

The checkpoint becomes a recovery point. If next session goes badly, you can return to this state. Your progress is preserved even if your experiments fail.

**Progress File Update:**

At session end, update all sections:

```
Update progress file:- Move completed tasks from "In Progress" to "Completed" with session marker- Add any new decisions to "Decisions Made" with rationale- Add any new issues discovered to "Known Issues"- Add this session to the "Session Log" with summary- Adjust "Not Started" if scope changed
```

Example update prompt:

```
Session complete. Update my progress file:- Executive summary is now complete (was in progress)- New decision: Using conservative projections (reasoning: matches CFO preference)- New issue: Need stakeholder sign-off before final formatting- Session summary: Completed executive summary and recommendations. Chose  conservative projections per finance guidance. Identified need for one more  stakeholder review before finalizing.
```

## Version Control and Recovery

Progress files and version control work together. Your checkpoint history becomes a recovery mechanism.

### For Software Projects (Git)

```
feat(auth): complete login endpoint with JWT generationSession 4 of user-auth feature- Implemented POST /api/login- Added JWT generation with RS256 signing- Token middleware now validates all protected routesProgress: 10/15 tasks (67%)Next: Refresh token rotation
```

Recovery scenario:

```
git stash                    # Save your broken workgit checkout HEAD~1          # Return to last checkpointcat claude-progress.txt      # Session 5's state is intact
```

### For Document-Based Projects

**Checkpoint naming convention:**

```
ProjectName_v3_Session4_2026-01-29.docxProjectName_v3_Session4_2026-01-29.pdf
```

**Cloud storage with version history:**

-   Google Docs: Version history tracks all changes
-   Microsoft 365: Version history in OneDrive/SharePoint
-   Dropbox: File version history for recovery

**Recovery scenario:** Your latest edits made the document worse. You can't remember what it looked like before.

-   Open version history
-   Find "Session 4" checkpoint
-   Restore or copy from that version
-   Progress file from Session 4 tells you exactly where you were

### For Research Projects

**Citation manager checkpoints:**

-   Zotero: Export collection snapshot (.rdf)
-   Mendeley: Export library backup
-   EndNote: Export compressed library

**Note-taking checkpoints:**

-   Notion: Export workspace backup
-   Obsidian: Commit vault to git or export .md files
-   OneNote: Export section backups

### Universal Checkpoint Log

Whatever your domain, your progress file should capture checkpoints:

```
## Session Log### Session 4 (2026-01-29)- Started: 14:00- Ended: 16:30- Checkpoint: [describe what you saved and where]- Summary: [what you accomplished]
```

You've lost one session's work, not four. The progress file from the previous session tells you exactly where you were. Resume from there.

## Lab: The Five-Session Project

**Objective:** Complete a real project across 5 sessions using progress tracking. Experience the full harness architecture lifecycle.

**Duration:** 5+ hours across 5 sessions (can span multiple days)

**Deliverable:** A completed project AND a reusable progress file template refined from your experience.

### Phase 1: Initialization (Session 1)

**Step 1: Choose a Real Project**

Pick something that matters to you—a real work deliverable or personal project. It should require approximately 5 hours of work. Choose from your professional domain:

**Legal Projects:**

-   Multi-phase contract review with redlines and negotiation memo
-   Due diligence summary for a transaction
-   Policy compliance audit with recommendations

**Marketing Projects:**

-   Campaign launch plan with messaging framework and content calendar
-   Competitive analysis with positioning recommendations
-   Customer journey map with touchpoint optimization plan

**Research Projects:**

-   Literature review on a topic relevant to your work
-   Industry analysis with trend synthesis
-   Case study compilation with cross-case themes

**Consulting Projects:**

-   Client diagnostic with current state and recommendations
-   Process improvement proposal with implementation roadmap
-   Stakeholder analysis with engagement strategy

**Software Projects:**

-   User authentication system for a side project
-   API integration with a third-party service
-   Test suite for an existing codebase

**Step 2: Create Initial Progress File**

Create a text file in your project folder:

```
project-progress.txt
```

**Step 3: Decomposition**

Ask Claude to help decompose:

```
I'm working on [describe your project in 2-3 sentences].My domain is [legal/marketing/research/consulting/software/other].Help me decompose this into 10-15 granular tasks that can each be completedin 30-90 minutes. Each task should be:- Concrete (specific deliverable)- Verifiable (clear completion criteria)- Sequenced (respect dependencies)Start with scoping and research, move to analysis and drafting, then toreview and polish.
```

**Step 4: Populate Progress File**

Based on the decomposition, create your initial progress file with all sections. Verify your baseline state (files accessible, tools working). Save your first checkpoint:

```
Session 1 checkpoint:- Created progress file with 12 tasks- Verified all source materials accessible- First task: [task name]Progress: 0/12 tasks (0%)Next: [first task]
```

**Step 5: Complete First Tasks**

Work on 2-3 tasks. Practice the checkpoint pattern. End session with progress file update.

### Phase 2: Continuation (Sessions 2-4)

For each session:

**Start:**

```
I'm resuming work on [project]. Read my progress file and tell me current state.Verify my working files are accessible. What should I focus on this session?
```

**Work:** Complete 2-4 tasks per session, depending on complexity.

**End:**

```
Session complete. Help me save a checkpoint and update my progress file with:- Tasks completed (move to Completed with session marker)- Any new decisions (with rationale)- Any new issues discovered- Session summary for the log
```

**Track:** Note what works and what doesn't about your progress file format. What's missing? What's unnecessary?

### Phase 3: Completion (Session 5)

**Final tasks and polish:**

-   Complete remaining tasks
-   Address any known issues marked as blocking
-   Review deliverable for quality and completeness
-   Prepare handoff or final materials

**Retrospective:**

After completing the project, answer these questions:

1.  **Continuity:** How long did it take to re-establish context at each session start?
    
    -   Session 2: \_\_\_ minutes
    -   Session 3: \_\_\_ minutes
    -   Session 4: \_\_\_ minutes
    -   Session 5: \_\_\_ minutes
2.  **Progress accuracy:** How well did your decomposition match reality?
    
    -   Tasks that took longer than expected: \_\_\_
    -   Tasks that weren't needed: \_\_\_
    -   Tasks you had to add: \_\_\_
3.  **Decision utility:** How often did you reference the "Decisions Made" section?
    
    -   Never / Once / Multiple times
4.  **Template refinement:** What would you change about your progress file format?
    

**Deliverable:**

-   Completed project deliverable
-   Final progress file (completed state)
-   Refined progress file template based on your experience
-   Retrospective notes

### Assessment Criteria

**Basic (Passing):**

-   Project deliverable complete
-   Progress file maintained across all 5 sessions
-   Checkpoints saved at each session end

**Proficient:**

-   All basic criteria
-   Decisions documented with rationale
-   Session context reconstruction under 10 minutes average
-   Decomposition accuracy within 20% (tasks added/removed)

**Advanced:**

-   All proficient criteria
-   Progress file template refined based on retrospective
-   Known issues tracked and resolved
-   Session log narrative provides useful context

## Common Failure Modes

**Failure: Vague tasks that never complete**

```
## In Progress- [ ] Address feedback (Session 2, 3, 4, 5...)
```

"Address feedback" is infinite. It's never done because it's not defined. Replace with specific tasks: "Incorporate CFO's three budget comments," "Revise executive summary per marketing review," "Add competitor comparison table requested by VP."

**Failure: Forgetting to update progress file**

You close the laptop without updating. Next session, the progress file is stale. You re-do work that was already done.

Prevention: Make progress file update part of your checkpoint routine. They happen together or not at all.

**Failure: Ending with work in disarray**

"I'll organize this first thing tomorrow." Tomorrow, you've forgotten what was half-finished. You spend 30 minutes figuring out the current state before you can even start.

Prevention: Never end with work in disarray. If you can't clean it up in 10 minutes, save the stable portions and note clearly what's incomplete.

**Failure: Decision amnesia**

Session 3: "Let's use conservative projections." Session 6: "Should we use optimistic projections? Wait, did we already decide this?"

Prevention: Every decision goes in the Decisions Made section. Every time.

## Beyond Individual Projects

The harness architecture scales beyond solo work.

**Team coordination:** Multiple team members can use the same progress file, with session logs attributed to individuals. The file becomes a lightweight standup replacement—everyone reads current state, no meeting required.

**Handoffs:** When you need to hand work to someone else, the progress file is the handoff document. They don't need to understand your conversation history—they read the file.

**Context for AI:** Future AI sessions don't share your memory. The progress file IS the memory. Every session's Claude starts fresh but informed.

## Try With AI

### Prompt 1: Project Decomposition Practice

```
I want to complete [describe your project in 2-3 sentences].My domain is [legal/marketing/research/consulting/software/other].Help me decompose this into 10-15 granular tasks using this protocol:1. Start with scoping—what must be defined or gathered first2. Move to research and analysis that builds on the scope3. Then initial drafts or prototypes4. Then review, validation, and refinement5. Finally polish and deliverable preparationFor each task, specify:- What exactly gets produced (concrete deliverable)- How I'll know it's done (verification criteria)- Approximately how long it takes (30-90 min target)Challenge me if my project is too vague to decompose properly.
```

**What you're learning:** Task decomposition is a skill that transfers across domains. Most people start too coarse ("complete the analysis") or too fine ("format page 3"). This prompt trains the middle ground—tasks granular enough to track but substantial enough to matter. You're learning to think in completable units regardless of your professional context.

### Prompt 2: Progress File Audit

```
Here's my current progress file:[paste your progress file]Audit it for these common problems:1. Tasks too vague to verify completion2. Missing decisions that should be documented3. "In Progress" items without progress annotation4. Blocked items without specific blockers5. Missing session context in the logSuggest specific improvements. Be harsh—I want this file to actually workacross multiple sessions.
```

**What you're learning:** Progress files degrade. Without auditing, they become stale documentation rather than living coordination artifacts. This prompt builds the habit of treating your progress file as a system that needs maintenance, not a document you write once.

### Prompt 3: Session Protocol Execution

```
I'm starting a new session on [project name]. Execute the full initialization protocol:1. Read my progress file and summarize current state2. Check the status of my working files and deliverables3. Verify my source materials are accessible4. Recommend what to work on next and why5. Identify any blockers that need resolution before productive workFormat the output as a "Session Briefing" I can scan in 30 seconds.
```

**What you're learning:** Consistency in session starts. By having Claude execute the same protocol every time, you build muscle memory. Eventually, you'll internalize the checklist. Until then, let the prompt be your checklist. You're learning that good processes can be encoded as prompts—whether you're resuming a legal brief, a marketing plan, or a software feature.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Mid-Stream Memory: Injecting Context at Execution Time

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/08-memory-injection.md)

# Mid-Stream Memory: Injecting Context at Execution Time

Imagine an employee who gets reminded of relevant company policies exactly when making decisions, not just at the start of the day.

At 9am, you brief them: "Here are our quality standards, client preferences, and the project scope." Perfect. By 3pm, they're making a critical decision—but the morning briefing has faded. They remember the general direction but not the specific constraint that matters right now.

Now imagine a different employee. Every time they're about to make a decision, a helpful colleague appears: "Hey, remember the Johnson incident? Here's what you need to know for this exact situation." That's memory injection.

You start a complex task with a clear goal. Your AI assistant knows your preferences, your project conventions, your stakeholder requirements. Turn 1 goes perfectly. By turn 20, the AI has forgotten half of what made turn 1 successful.

What happened?

The memories you injected at the beginning are still in context. They haven't disappeared. But they're now buried under 19 turns of conversation, research outputs, and evolving requirements. The AI's attention budget (Lesson 2) means those turn 1 memories are receiving only a fraction of the processing power they need. More importantly, those memories were selected for turn 1's intent. Turn 20 has different intent. The memories that would help turn 20 are sitting unused in your memory store.

This is **workflow drift**. And fixing it requires a fundamental shift in when and how you inject context.

## The Workflow Drift Problem

Semantic memory injection typically happens at prompt submission. You type a request. A hook queries your memory store for relevant context. The results are injected into the AI's context. Then the AI processes your request.

This works well for single-turn interactions. But multi-turn workflows create a problem:

**Consider a legal professional reviewing a complex contract:**

**Turn 1:** You ask the AI to review vendor agreement terms. The memory hook finds relevant memories about your firm's standard terms, this client's risk tolerance, and contract negotiation history. Perfect match.

**Turn 5:** The AI has identified a problematic indemnification clause. It's now focused on liability allocation. Your general contract memories are still there, but they're less relevant than memories about indemnification precedents and insurance requirements.

**Turn 12:** The AI is drafting alternative language for the dispute resolution section. It needs memories about this client's arbitration preferences and past dispute history. The indemnification memories from turn 5 are noise.

**Turn 20:** The AI is preparing a summary memo for the partner. The drafting memories from turn 12 are now irrelevant. Client communication preferences would help, but they were never injected.

**Or consider a marketing strategist developing a campaign:**

**Turn 1:** You ask the AI to develop Q4 campaign strategy. The memory hook finds brand voice guidelines, audience demographics, and budget parameters. Perfect match.

**Turn 5:** The AI has pivoted to channel strategy. It's evaluating media mix options. Your brand voice memories are still there, but they're less relevant than memories about channel performance history and media costs.

**Turn 12:** The AI is writing creative briefs for each channel. It needs memories about past creative that worked with this audience, design constraints, and production timelines. The channel strategy memories from turn 5 are noise.

**Turn 20:** The AI is forecasting campaign ROI for leadership approval. The creative brief memories from turn 12 are now irrelevant. CFO preferences for financial presentations would help, but they were never injected.

Each turn, the AI's actual needs drift further from the context you provided at the start. The memories you injected were correct for turn 1. They're wrong for turn 20.

## Two Injection Timing Strategies

Claude Code's hook system offers two points where you can inject context:

Hook

When It Fires

Best For

**UserPromptSubmit**

When user submits a prompt

Initial context, session setup, one-shot queries

**PreToolUse**

Before each tool execution

Ongoing relevance, multi-step workflows, execution-time context

**UserPromptSubmit** happens once per user message. It's synchronous with your input. The memories it injects reflect what you asked for at that moment.

**PreToolUse** happens potentially many times per user message. Each time the AI is about to use a tool—reading a document, searching files, editing content—this hook fires. That means you get multiple opportunities to inject relevant context throughout the workflow.

The key insight: The AI's thinking evolves during the reasoning process. By turn 20, the AI's thinking block contains intent and reasoning about what it's about to do next. That thinking is the perfect query for semantic memory.

## PreToolUse Memory Injection Architecture

Here's the flow:

```
1. User submits prompt2. AI reasons about the request → creates thinking block3. AI decides to take an action (read file, search, edit document)4. PreToolUse hook fires (synchronous)   └── Hook receives transcript_path (file path, not thinking directly)   └── Hook reads the transcript file from disk   └── Hook parses JSONL to extract thinking blocks   └── Hook embeds the thinking text (~100-300ms for embeddings)   └── Hook queries vector database for similar memories (~5-50ms)   └── Hook returns JSON with hookSpecificOutput containing memories5. AI receives the injected memories via additionalContext6. AI continues reasoning with fresh, relevant context7. Action executes8. AI reasons about results → new thinking block9. AI decides to take another action10. PreToolUse fires again...
```

**Important implementation detail:** The PreToolUse hook does NOT receive thinking blocks directly. It receives a `transcript_path` input pointing to a JSONL file on disk. Your hook must:

1.  Read the file at `transcript_path`
2.  Parse each line as JSON
3.  Extract thinking content from the parsed objects
4.  This I/O adds latency (typically 10-50ms depending on transcript size)

**Why this works:** The AI's thinking block contains what it is about to do and why. When you embed that thinking and search for similar memories, you find memories that are relevant to the current action, not the original prompt.

**Legal example:** Turn 20's thinking might be: "I need to summarize the key risks in this agreement for the partner review memo. The main concerns are the indemnification carve-outs and the ambiguous termination provisions. I should highlight these in language appropriate for partner consumption."

Embedding that thinking and searching your memory store finds:

-   Partner memo formatting preferences
-   This partner's risk communication style
-   Previous memos on similar contract issues

These memories are exactly what turn 20 needs. They would never have been selected at turn 1 when the thinking was about reviewing contract terms.

**Marketing example:** Turn 20's thinking might be: "I need to forecast ROI for leadership approval. The campaign costs total $450K across channels. I should present this using the format the CFO prefers."

Embedding that thinking finds:

-   CFO presentation preferences
-   ROI calculation standards your company uses
-   Past campaign performance benchmarks

Again—exactly what turn 20 needs, not what turn 1 needed.

## Why Thinking Blocks Matter

The AI's thinking isn't just internal monologue. It's structured reasoning that reveals:

-   **Current intent:** What the AI is trying to accomplish right now
-   **Decision context:** Why the AI chose this approach
-   **Constraints remembered:** What limitations the AI is working within
-   **Assumptions made:** What the AI believes to be true

This makes thinking blocks the ideal query for semantic search. They contain the dense, specific context about what the AI needs to know.

Compare:

**User prompt (turn 1):** "Review the vendor agreement"

-   Broad, could match many memories
-   Matches general contract memories
-   Doesn't indicate current state

**Thinking block (turn 20):** "I'm preparing the partner memo summarizing key contract risks. The main issues are the indemnification carve-outs in Section 7.2 and the ambiguous termination language in Section 12.1. I should use the format the partner prefers for risk summaries."

-   Specific, narrow match space
-   Matches memo writing memories, risk communication preferences
-   Indicates exactly what the AI needs to know

The specificity of thinking blocks produces more relevant memory retrievals.

## Building Your Memory Corpus

A memory injection system is only as good as its memories. What should you store?

**High-value memories across domains:**

Domain

High-Value Memories

**Legal**

Precedent patterns, client risk preferences, judge tendencies, clause variations that have worked

**Marketing**

Brand voice rules, audience insights, successful campaign patterns, stakeholder presentation styles

**Research**

Citation standards, methodology conventions, reviewer preferences, field-specific writing patterns

**Business**

Process templates, stakeholder communication styles, industry conventions, decision-making patterns

**Operations**

Vendor preferences, compliance requirements, approval workflows, exception handling patterns

**Software**

Error handling patterns, API conventions, architectural decisions, testing strategies

**Lower-value memories (across all domains):**

-   Standard practices the AI already knows
-   Obvious patterns the AI can infer from documents
-   One-time decisions that won't recur
-   Information that changes frequently

**Memory structure example (Legal):**

```
# Memory: Client Risk Communication for Acme Corp## SummaryAcme Corp's General Counsel prefers risk summaries that lead with business impact,not legal analysis. Always quantify exposure when possible.## ContextAfter the Henderson dispute, their GC restructured how legal communicates riskto the board. They now require dollar ranges, not just "material exposure."## PatternGOOD: "This clause exposes us to $500K-$2M in potential liability if the vendorfails to deliver. We recommend adding a cap at $750K."NOT: "The indemnification provisions create significant exposure that shouldbe addressed through additional limitations."## When to ApplyAny client communication about contract risk. Any memo going to their GC.
```

**Memory structure example (Marketing):**

```
# Memory: CFO Presentation Format## SummaryCFO requires all campaign proposals to lead with ROI projection andpayback period before any creative discussion.## ContextAfter Q2 2024 campaign exceeded budget without clear ROI tracking, CFOmandated new financial-first presentation format.## PatternGOOD: "This $450K campaign projects 3.2x ROI with 4-month payback, based oncomparable Q3 2023 campaign performance. Here's the channel breakdown..."NOT: "We've developed an exciting creative concept that will resonate withour target demographic. The budget is $450K."## When to ApplyAny campaign proposal going to leadership. Any budget approval request.
```

**Memory structure example (Research):**

```
# Memory: Journal of Applied Psychology Submission Standards## SummaryJAP requires APA 7th edition with DOI links. Reviewers in this journalexpect power analysis justification and effect size reporting.## ContextOur lab's 2023 submission was desk-rejected for insufficient power analysisdocumentation despite strong methodology otherwise.## PatternGOOD: "Power analysis using G\*Power indicated a required sample of n=120to detect medium effects (d=0.50) with 80% power at alpha=.05. Our sampleof n=147 exceeded this threshold."NOT: "The sample size was adequate for the planned analyses."## When to ApplyAny submission to JAP or similar APA journals in organizational psychology.
```

**Start with 10-20 memories.** You don't need a massive corpus. A focused collection of genuinely useful memories outperforms a large collection of noise.

## Combining Both Injection Strategies

PreToolUse doesn't replace UserPromptSubmit. They serve different purposes:

Strategy

Use When

**UserPromptSubmit**

Session initialization, user preferences, project-wide context

**PreToolUse**

Task-specific memories, execution-time relevance, long workflows

A robust system uses both:

1.  **UserPromptSubmit** injects baseline context: project conventions, user preferences, active working context
2.  **PreToolUse** injects execution-time context: memories relevant to what the AI is doing right now

This layered approach provides both stability (consistent baseline) and adaptability (evolving relevance).

## Lab: Understanding Memory Injection

**Objective:** Understand how workflow drift affects your work and design a memory corpus that maintains relevance throughout multi-step tasks.

**Duration:** 90 minutes

**Choose your path:**

-   **Conceptual Track** (60 min): Design memory corpus and understand injection timing
-   **Technical Track** (additional 60 min): Implement a working memory injection hook

* * *

### Part 1: Workflow Drift Analysis (All Participants, 30 min)

**Step 1: Map Your Own Workflow Drift**

Think about a recent complex task you worked on with AI assistance. This could be:

-   **Legal:** Reviewing a complex agreement and preparing a client memo
-   **Marketing:** Developing a campaign from strategy through creative briefs
-   **Research:** Moving from literature review through methodology design
-   **Business:** Analyzing a process and developing recommendations
-   **Operations:** Troubleshooting an issue across multiple systems

Write down the major turns in that workflow:

```
Turn 1: What you started withTurn 5: How the focus shiftedTurn 10: What you were working on at this pointTurn 15: How the work evolved furtherTurn 20: What you ended up doing
```

**Step 2: Identify the Context Gaps**

For each turn, answer:

-   What context would have been most helpful at this turn?
-   How different is that from what would have helped at Turn 1?
-   What memories were relevant earlier but are now noise?
-   What memories would you wish the AI had access to?

**Step 3: Quantify the Drift**

Create a simple drift score for your workflow:

Turn

Relevance of Turn 1 Context

New Context Needed

1

100%

(baseline)

5

?%

(list new needs)

10

?%

(list new needs)

15

?%

(list new needs)

20

?%

(list new needs)

This exercise makes workflow drift concrete and visible.

* * *

### Part 2: Memory Corpus Design (All Participants, 30 min)

**Step 1: Brainstorm High-Value Memories**

Based on your workflow analysis, list 15-20 memories that would have helped at different points. Don't worry about format yet—just capture the knowledge.

**Step 2: Categorize by Relevance Pattern**

Group your memories:

**Always Relevant** (inject at UserPromptSubmit):

-   General preferences that apply throughout
-   Project-wide conventions
-   Stakeholder communication styles

**Situationally Relevant** (inject at PreToolUse):

-   Task-specific patterns
-   Stage-specific knowledge
-   Context-dependent rules

**Step 3: Structure 5-7 Key Memories**

Pick your highest-value situationally relevant memories and structure them:

```
# Memory: [Clear, searchable title]## Summary[One paragraph: what this memory captures]## Context[Why this became important—the history]## Pattern[Concrete example of good practice][Contrast with what to avoid]## When to Apply[Trigger conditions—what thinking would retrieve this]
```

**Deliverable (Conceptual Track):** A memory corpus document with 5-7 well-structured memories for your domain.

* * *

### Part 3: Simple Hook Implementation (Optional, 20 min)

For those comfortable with Python, here's a minimal memory injection hook. No vector databases or embeddings—just read a markdown file and inject it.

#### Step 1: Create Your Memory File

Create `memories.md` in your project:

```
# Project Memories## Client Preferences- Acme Corp's GC prefers risk summaries with dollar ranges, not vague language- Always lead with business impact before legal analysis## Writing Standards- Use active voice in all client communications- Keep executive summaries under 200 words## Past Decisions- We chose JWT over sessions for the auth system (see ADR-003)- The billing module uses Stripe, not custom implementation
```

#### Step 2: Create the Hook Script

Create `memory_hook.py`:

```
#!/usr/bin/env python3"""Simple memory injection hook - reads a markdown file and injects it."""import jsonimport sysfrom pathlib import Pathdef main():    # Read hook input from stdin    hook_input = json.loads(sys.stdin.read())    # Find memory file (adjust path as needed)    memory_file = Path.home() / "project" / "memories.md"    if not memory_file.exists():        print("{}")  # No injection if file missing        return    memories = memory_file.read_text()    # Return properly formatted hook response    result = {        "hookSpecificOutput": {            "hookEventName": "PreToolUse",            "additionalContext": f"## Relevant Context\n\n{memories}"        }    }    print(json.dumps(result))if __name__ == "__main__":    main()
```

#### Step 3: Register the Hook

Add to your `.claude/settings.json`:

```
{  "hooks": {    "PreToolUse": [      {        "command": "python3 /path/to/memory_hook.py"      }    ]  }}
```

#### Step 4: Test It

Run any Claude Code session. Before each tool use, your memories get injected into context.

**That's it.** ~25 lines of Python. No dependencies beyond the standard library.

#### Going Further

Want smarter injection? Here are paths to explore:

Enhancement

Approach

**Keyword matching**

Check if tool name or recent conversation contains keywords before injecting

**Multiple memory files**

Different files for different project areas

**Semantic search**

Add ChromaDB + sentence-transformers for similarity matching

**Tool-specific memories**

Different memories for Read vs Edit vs Bash

The simple version works. Start there. Add complexity only when you need it.

* * *

### Assessment Criteria

**Conceptual Understanding (All Participants):**

-   Can explain workflow drift with domain-specific examples
-   Can distinguish UserPromptSubmit from PreToolUse timing
-   Has designed a coherent memory corpus for their domain

**Technical Implementation (Optional):**

-   Hook script runs without errors
-   Hook returns proper JSON with `hookSpecificOutput` format
-   Memory file is structured and readable
-   Hook is registered in settings.json

## Common Issues and Solutions

**Problem: Memories too generic**

Solution: Make memories specific. Instead of "communicate clearly with clients," write "Acme Corp's GC requires dollar ranges in risk summaries—never use vague terms like 'significant exposure.'"

**Problem: Too much context injected**

Solution: Keep your memory file focused. If it's over 500 words, you're probably injecting noise. Split into multiple files and inject selectively.

**Problem: Hook not firing**

Solution: Check that your hook is registered in `.claude/settings.json` and the script path is correct. Test the script standalone first: `echo '{}' | python3 memory_hook.py`

## Try With AI

### Prompt 1: Diagnose Your Workflow Drift

```
I'm going to describe a multi-step workflow from my field. For each step, tell me:1. What context would be most helpful at this step2. How different that is from step 1's context3. What memories you wish you had access toMy field: [legal/marketing/research/business/operations/other]The workflow:Step 1: [Describe your starting point]Step 5: [How the work evolved]Step 10: [Current focus at this point]Step 15: [Further evolution]Step 20: [What you ended up doing]Show me how context needs evolve across this workflow.
```

**What you're learning:** Workflow drift is invisible until you examine it explicitly. This prompt makes the drift concrete by tracking context needs across steps in YOUR domain. You're learning to anticipate where prompt-time injection will fail.

### Prompt 2: Design Your Memory Corpus

```
I work in [describe your field and typical projects in 2-3 sentences].Help me design a memory corpus of 10-15 memories that would be most valuablefor semantic injection during my workflows. For each memory, specify:1. Title (searchable identifier)2. Core content (what AI needs to know)3. When it's relevant (what thinking would trigger retrieval)Prioritize memories that:- Contain non-obvious conventions or preferences- Apply frequently during my work- Would be hard for AI to infer from documents aloneAvoid memories that:- State standard professional practices- Would match too many different contexts- Contain information that changes frequently
```

**What you're learning:** Memory corpus design is intentional, not exhaustive. This prompt trains you to identify high-value memories for YOUR domain. You're learning the difference between memories that genuinely help versus documentation that happens to exist.

### Prompt 3: Evaluate Injection Timing

```
For each of these knowledge types from my field, recommend the injection strategy(UserPromptSubmit, PreToolUse, both, or neither) and explain why:1. My general writing style preferences2. The specific project I'm working on today3. Client/stakeholder communication preferences for specific recipients4. Standard conventions in my field5. Historical context about why decisions were made6. Current deadlines and time constraints7. My organization's approval workflows8. Quality standards and review criteriaFormat as a table with columns: Knowledge Type | Strategy | Reasoning
```

**What you're learning:** Not all context needs the same injection strategy. Some context is stable across the entire session. Some evolves with the workflow. This prompt builds intuition for matching context to injection timing in your professional domain.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Context Isolation: Why Clean Slates Beat Dirty States

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/09-context-isolation.md)

# Context Isolation: Why Clean Slates Beat Dirty States

You've built a sophisticated system. Agent A researches the problem. Agent B analyzes the findings. Agent C writes the final deliverable. Three specialized agents, each doing what it does best.

The first time you run it, Agent A produces excellent research. Agent B delivers sharp analysis. But Agent C? The deliverable is confused—it references research tangents that weren't relevant to the analysis, conflates two similar concepts Agent B carefully distinguished, and misses the core insight entirely.

What went wrong?

Agent C inherited a polluted context. Every token of Agent A's research notes, every exploratory dead-end Agent B considered—all of it accumulated in the context window by the time Agent C started writing. The context was full, but full of the wrong things. Agent C had no room for clear thinking because its attention budget was consumed by its predecessors' work-in-progress.

This is the dirty slate problem. And it's why sophisticated multi-agent systems often produce worse results than a single, well-prompted Digital FTE. Complexity without discipline produces chaos, not value.

## The Dirty Slate Problem

Consider how most people build multi-agent workflows:

```
Agent A → (context accumulates) → Agent B → (more accumulates) → Agent C
```

This is a **linear pipeline**. Each agent passes its full context to the next. It feels natural—after all, Agent B needs to know what Agent A discovered, right?

The problem is what else comes along for the ride.

Agent A didn't just produce its final research summary. It also:

-   Read fifteen documents, most of which turned out to be irrelevant
-   Explored three approaches before finding the right one
-   Generated intermediate reasoning that was scaffolding, not insight
-   Made tool calls whose outputs are still in context

When Agent B starts, all of that research detritus is in the context window. Agent B's attention budget is already 40% consumed before it begins its actual task. It spends attention on Agent A's exploratory dead-ends instead of its own analysis.

By the time Agent C starts, the context is chaos:

-   Agent A's fifteen document reads
-   Agent A's three exploratory approaches
-   Agent A's final summary (the only part that matters)
-   Agent B's analytical tangents
-   Agent B's reasoning scaffolding
-   Agent B's final analysis (the only part that matters)

Agent C needs maybe 2,000 tokens of actual input: Agent B's analysis and the original task description. Instead, it has 50,000 tokens of accumulated process. Its attention is diluted across content that isn't relevant to producing the deliverable.

This is why multi-agent systems fail. As LangChain's research concluded:

> "The main issue with multi-agent systems is that they are highly failure-prone when agents work from conflicting assumptions or incomplete information. Failure generally boils down to missing context."

The irony: they fail from *missing* context while drowning in *irrelevant* context. The signal gets lost in noise.

### The Problem Across Domains

The dirty slate problem isn't unique to any profession. Here's how it manifests across different fields:

Domain

Research Phase Pollution

Analysis Phase Pollution

Final Deliverable Suffers

**Legal**

Case searches, irrelevant precedents, statute explorations

Jurisdictional tangents, abandoned arguments

Brief references weak cases, misses strongest argument

**Marketing**

Competitor pages, market reports, trend articles

Positioning experiments, messaging drafts

Strategy document lacks focus, contradicts itself

**Research**

Source documents, literature searches, data queries

Hypothesis explorations, abandoned frameworks

Synthesis paper wanders, misses central thesis

**Consulting**

Client documents, industry benchmarks, interview notes

Framework applications, discarded analyses

Recommendations lack coherence, bury key insight

**Development**

API docs, code explorations, dependency research

Architecture experiments, abandoned approaches

Technical spec references wrong approaches

The pattern is universal: exploratory work pollutes the context for synthesis work.

## The Clean Context Pattern

The solution isn't to avoid multi-agent systems. It's to isolate their contexts.

```
         ┌─────────────────┐         │   Orchestrator  │         │   (maintains    │         │    task state)  │         └────────┬────────┘                  │ delegates with FRESH context      ┌───────────┼───────────┐      ▼           ▼           ▼┌─────────┐   ┌─────────┐   ┌─────────┐│ Agent A │   │ Agent B │   │ Agent C ││ (clean) │   │ (clean) │   │ (clean) ││ Research│   │ Analyze │   │  Write  │└────┬────┘   └────┬────┘   └────┬────┘     │             │             │     │ summary     │ summary     │ summary     └─────────────┼─────────────┘                   │                   ▼         ┌─────────────────┐         │   Orchestrator  │         │   SYNTHESIZES   │         └─────────────────┘
```

In the **Clean Context Pattern**:

1.  **The Orchestrator** holds the task definition and coordinates work
2.  **Each subagent** receives only what it needs to do its job—fresh context
3.  **Subagents return summaries** of their work, not their full process
4.  **The Orchestrator synthesizes** the summaries into the final output

Each subagent uses its **full attention budget** for its specific task. No pollution from other agents' work. No diluted attention. No accumulated noise.

### Domain Examples of Clean Context

**Legal: Creating a Case Brief**

```
Orchestrator: "Prepare brief for employment discrimination case"Agent A (Research): Receives case facts only → Returns:  "3 strongest precedents: [case citations with relevance]"Agent B (Analyze): Receives precedent summary only → Returns:  "Recommended argument structure: [analysis]"Agent C (Write): Receives argument structure only → Returns:  "Draft brief focused on strongest theory"
```

**Marketing: Creating a Strategy Document**

```
Orchestrator: "Develop positioning strategy for product launch"Agent A (Research): Receives product brief only → Returns:  "Competitive landscape summary: [key findings]"Agent B (Analyze): Receives competitive summary only → Returns:  "Positioning options with tradeoffs: [analysis]"Agent C (Write): Receives positioning analysis only → Returns:  "Strategy document with clear recommendations"
```

**Research: Creating a Synthesis Paper**

```
Orchestrator: "Synthesize literature on remote work productivity"Agent A (Gather): Receives research question only → Returns:  "Key sources with main findings: [structured summary]"Agent B (Synthesize): Receives source summary only → Returns:  "Emerging themes and contradictions: [analysis]"Agent C (Write): Receives theme analysis only → Returns:  "Synthesis paper with clear narrative"
```

**Consulting: Creating Recommendations**

```
Orchestrator: "Develop operational improvement recommendations"Agent A (Discover): Receives engagement scope only → Returns:  "Current state assessment: [findings]"Agent B (Analyze): Receives assessment only → Returns:  "Gap analysis with prioritization: [analysis]"Agent C (Recommend): Receives gap analysis only → Returns:  "Actionable recommendations with ROI"
```

### Why This Matters

Dirty Slate

Clean Context

Attention diluted across all agents' work

Full attention budget per task

Context polluted with irrelevant artifacts

Only relevant input per agent

Debugging nightmare (which agent's pollution caused the failure?)

Clear accountability (which agent produced wrong summary?)

Sequential execution (A must finish before B starts)

Parallel execution possible (if tasks are independent)

Degrading quality as pipeline lengthens

Consistent quality regardless of pipeline length

The clean context pattern doesn't just prevent failures—it enables capabilities. When agents have isolated contexts, they can run **in parallel**. Research, analysis, and even preliminary writing can happen simultaneously if the orchestrator structures the task correctly.

## Context Isolation Benefits

Let's examine each benefit more concretely.

### 1\. Full Attention Budget Per Task

In Lesson 2, you learned about the attention budget—how context utilization above 70% degrades quality. In a dirty slate pipeline:

-   Agent A uses 30% of context → quality: good
-   Agent B inherits 30%, adds 25% → at 55%, starting to stress
-   Agent C inherits 55%, adds 20% → at 75%, quality degrading

With context isolation:

-   Agent A uses 30% of context → quality: good
-   Agent B uses 25% of fresh context → quality: good
-   Agent C uses 20% of fresh context → quality: good

Each agent operates in its optimal zone. No agent inherits its predecessors' burden.

### 2\. No Pollution from Irrelevant Work

Agent A's job is research. Part of research is exploring dead ends. That's not a bug—it's how discovery works. But Agent C doesn't need to know about the five approaches you considered before finding the right one. Agent C needs the winning choice and why it won.

Clean context means each agent only sees what it needs. The orchestrator translates "Agent A explored five options and chose Option 3 because of X, Y, Z" into "Use Option 3. Reasoning: X, Y, Z." The exploration is preserved in Agent A's context; the decision is passed to Agent C.

**Examples across domains:**

-   **Legal**: The brief writer doesn't need to see 47 cases that were searched but rejected—only the 3 cases that support the argument
-   **Marketing**: The strategy writer doesn't need 15 competitor analyses—only the positioning gaps and opportunities identified
-   **Research**: The synthesis writer doesn't need 200 search results—only the 12 sources that inform the narrative
-   **Consulting**: The recommendation writer doesn't need interview transcripts—only the themes and pain points extracted

### 3\. Easier Debugging

When a dirty slate pipeline fails, debugging is archaeology. The failure might be:

-   Agent A found bad information
-   Agent A's information was good but Agent B misinterpreted it
-   Agent B's analysis was good but got lost in context noise
-   Agent C had good inputs but was overwhelmed by accumulated tokens

With clean contexts, debugging is straightforward:

-   Check Agent A's summary: Was the research correct?
-   Check Agent B's summary: Was the analysis sound?
-   Check Agent C's output: Given correct inputs, did it produce quality work?

Each agent can be evaluated independently. You can even rerun a single agent with modified inputs without rerunning the entire pipeline.

### 4\. Parallel Execution

Consider this task: "Create a comprehensive market analysis."

Dirty slate approach (sequential):

```
Research Industry → Research Competitors → Analyze Trends → Write Report          |                |                  |              |          └────────────────┴──────────────────┴──────────────┘                    Total time: T₁ + T₂ + T₃ + T₄
```

Clean context approach (parallel where possible):

```
┌─ Research Industry Trends ─────┐│                                │├─ Research Competitor Positions ┤│                                │├─ Gather Customer Feedback ─────┤│                                │└────────────────────────────────┘            │ (all summaries)            ▼    Synthesize → Draft Report → Review         |           |           |         └───────────┴───────────┘              Parallel research phase              Sequential synthesis phase
```

The research tasks are independent—they can run simultaneously. Only the synthesis and drafting require sequential execution because they depend on the research results. Clean contexts enable this parallelism because each research agent doesn't need to wait for another to finish.

## Subagent Design Patterns

Not all multi-agent work requires the same pattern. Here are three patterns for different needs:

### Pattern 1: Stateless (Subagent)

```
Orchestrator → [fresh context] → Subagent → [summary] → Orchestrator
```

**Context handling:** Fresh context each call, strong isolation

**Key constraint:** Subagents cannot spawn other subagents. This is a fundamental architectural limitation—only the orchestrator can delegate work. If you need nested delegation, structure your orchestrator to handle all agent creation directly.

**Best for:**

-   Tasks that are truly independent
-   Work that shouldn't be influenced by other agents' findings
-   Parallel execution scenarios
-   When debugging requires clear boundaries

**Example use cases by domain:**

Domain

Use Case

**Legal**

Three independent legal researchers assess the same contract for different risk types

**Marketing**

Three analysts evaluate the same campaign from different perspectives (brand, performance, competitive)

**Research**

Three reviewers independently assess the same paper for methodology, significance, and clarity

**Consulting**

Three experts review the same organization from different lenses (operations, finance, technology)

**In Claude Code:**

```
Task for subagent: [specific task]Context: [only what's needed]Output format: [structured summary]Do not reference any previous work or context.Return only your findings in the specified format.
```

### Pattern 2: Stateful (Handoff)

```
Agent A → [context transfers] → Agent B → [context transfers] → Agent C
```

**Context handling:** Context transfers between agents

**Best for:**

-   Tasks with genuine dependencies
-   When later agents must understand the process, not just the result
-   Iterative refinement where Agent B improves Agent A's work
-   Debugging scenarios where you need full trace

**Example use cases by domain:**

Domain

Use Case

**Legal**

First draft of brief → Senior review and markup → Final polish (each reviewer sees previous edits)

**Marketing**

Creative concept → Brand review → Compliance review (each reviewer needs to see what was changed)

**Research**

Data analysis → Peer feedback → Revision (reviser needs to understand the feedback conversation)

**Consulting**

Draft recommendations → Partner review → Client-ready version (quality control chain)

**Warning:** This is the dirty slate pattern. Use only when context transfer is genuinely necessary, and monitor context utilization carefully.

### Pattern 3: Shared (Network)

```
         ┌──────────────┐         │ Shared State │         │   (memory)   │         └──────────────┘           ▲    ▲    ▲           │    │    │     ┌─────┴──┐ │ ┌──┴─────┐     │Agent A │ │ │Agent C │     └────────┘ │ └────────┘                │          ┌─────┴────┐          │ Agent B  │          └──────────┘
```

**Context handling:** Common memory layer, agents read/write

**Best for:**

-   Long-running projects with persistent state
-   Teams of agents that need to coordinate over time
-   When the "source of truth" must persist beyond any single agent
-   Workflows where agents may need to re-enter at any point

**Example use cases by domain:**

Domain

Use Case

**Legal**

Multi-week case preparation with different agents handling discovery, depositions, motions—all referencing central case file

**Marketing**

Campaign development over months—brand agent, content agent, analytics agent all reference central brand guidelines

**Research**

Multi-year study with different agents handling data collection, analysis, writing—all referencing central methodology doc

**Consulting**

Long-term engagement with different workstreams—all referencing central findings document that evolves over time

**Implementation:** The shared state is typically a file (progress file, central document, database) that all agents can read and update. Each agent still operates with relatively clean context—they read the shared state at start, do their work, write updates back.

### Choosing a Pattern

Question

If Yes →

Do tasks have genuine sequential dependencies?

Stateful

Must agents operate without influencing each other?

Stateless

Does work span multiple sessions or days?

Shared

Is parallel execution important?

Stateless

Do you need full execution trace for debugging?

Stateful

Is there a "source of truth" that must persist?

Shared

Most real workflows combine patterns. An orchestrator might use Stateless subagents for parallel research, collect summaries into a Shared progress file, then use Stateful handoff for sequential refinement.

## Agent Teams: The Network Pattern in Practice

You just saw three subagent design patterns: Stateless, Stateful, and Shared (Network). The Stateless and Stateful patterns are well-established. But the Shared pattern raises a practical question: how do you actually coordinate multiple agents that need to communicate with each other, share state, and self-organize around a problem?

Claude Code's **agent teams** feature is a native implementation of the Network pattern. The key evolution from subagents: subagents report results back to their caller only. They cannot talk to each other. Agent teams are separate Claude Code instances that can message each other directly, share a task list, and self-coordinate without routing every communication through the orchestrator.

This changes what's possible. With subagents, the orchestrator is a bottleneck for all communication. Agent A discovers something relevant to Agent C, but must report it to the orchestrator, which must then relay it to Agent C. With agent teams, Agent A messages Agent C directly. The lead coordinates the overall mission, but teammates handle tactical communication on their own.

### Subagents vs Agent Teams

Dimension

Subagents

Agent Teams

**Context**

Own context window; results return to caller

Own context window; fully independent

**Communication**

Report results back to main agent only

Teammates message each other directly

**Coordination**

Main agent manages all work

Shared task list with self-coordination

**Best for**

Focused tasks where only the result matters

Complex work requiring discussion and collaboration

**Token cost**

Lower: results summarized back to main context

Higher: each teammate is a separate Claude instance

Use subagents when you need quick, focused workers that report back. Use agent teams when teammates need to share findings, challenge each other, and coordinate on their own.

### When Agent Teams Add Value

Agent teams shine in specific scenarios where inter-agent communication produces better results than isolated reports:

-   **Research and review**: Multiple teammates investigate different aspects of a problem simultaneously, then share and challenge each other's findings. A security reviewer, a performance analyst, and a test coverage auditor working the same codebase produce richer results when they can question each other's conclusions than when they report independently to the orchestrator.
    
-   **New modules or features**: Teammates each own a separate piece without stepping on each other. A frontend specialist, a backend specialist, and a test writer can coordinate directly about interface contracts instead of routing every question through a lead.
    
-   **Debugging with competing hypotheses**: Teammates test different theories in parallel and converge faster. When the root cause is unclear, sequential investigation anchors on the first plausible explanation. Multiple independent investigators actively trying to disprove each other's theories surface the actual root cause more reliably.
    
-   **Cross-layer coordination**: Changes that span frontend, backend, and tests, each owned by a different teammate, benefit from direct communication about shared interfaces and dependencies.
    

Agent teams add coordination overhead and use significantly more tokens than a single session. They work best when teammates can operate independently on separate files or concerns. For sequential tasks, same-file edits, or work with many dependencies, subagents are more effective. The pattern selection table from earlier still applies -- agent teams are the practical implementation of "Shared (Network)" for cases where inter-agent dialogue matters.

### When to Use Which

The original pattern selection table covered Stateless, Stateful, and Shared. Here is how agent teams fit alongside subagents within the Stateless and Shared categories:

Your situation

Use subagents

Use agent teams

Three independent research tasks that produce separate reports

Yes -- each reports back to orchestrator, no inter-agent dialogue needed

Overkill -- coordination overhead adds cost without benefit

Code review from security, performance, and testing perspectives where findings inform each other

Possible but limited -- security finding about auth can't reach test reviewer directly

Yes -- reviewers can challenge each other and cross-reference findings

Multi-day project with persistent shared state

No -- subagents are ephemeral, one-shot workers

Yes -- shared task list persists, teammates can be replaced as work evolves

Quick fact-check or file lookup

Yes -- single focused task, minimal overhead

No -- spawning a team for a quick lookup wastes tokens

Parallel implementation of three independent modules

Either works -- if modules have clean interfaces, subagents suffice

Better if modules share interfaces that need negotiation

The decision comes down to one question: **do the workers need to talk to each other?** If yes, agent teams. If no, subagents.

### Practical: Starting Your First Agent Team

Agent teams are experimental and disabled by default. Enable them in your settings:

```
// settings.json{  "env": {    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"  }}
```

Then describe the team structure you want in natural language:

```
Create an agent team to review this project from different angles:- One teammate focused on security implications- One checking performance impact- One validating test coverageHave them each review and report findings.
```

**Output:**

```
Created team "project-review" with 3 teammates:  - security-reviewer: Reviewing for security vulnerabilities  - performance-analyst: Checking performance impact  - test-validator: Validating test coverageTask list created with 3 tasks. Teammates are starting work.
```

Here is how agent teams operate in practice:

-   **The lead coordinates work and synthesizes results.** The session where you create the team becomes the lead for its lifetime. The lead breaks work into tasks, assigns them, and combines findings when teammates finish.
    
-   **Teammates work independently in their own context windows.** Each teammate loads the same project context (CLAUDE.md, MCP servers, skills) but does not inherit the lead's conversation history. Task-specific details must go in the spawn prompt -- this is why specifying clear, focused prompts for each teammate matters.
    
-   **A shared task list coordinates who does what.** Tasks have three states: pending, in progress, and completed. Tasks can depend on other tasks -- a pending task with unresolved dependencies cannot be claimed until those dependencies complete. Teammates self-claim available work when they finish a task, and file locking prevents two teammates from claiming the same task simultaneously.
    
-   **Teammates can message each other directly.** This is the fundamental difference from subagents. When a security reviewer discovers that the authentication module has no rate limiting, it can message the test coverage teammate directly: "Check whether rate limiting tests exist for the auth module." No routing through the lead required.
    

**Interacting with teammates:**

Action

Keyboard shortcut

What it does

Select teammate

**Shift+Up/Down**

Cycle through active teammates to message one directly

View task list

**Ctrl+T**

Toggle the shared task list showing all pending, in-progress, and completed tasks

Delegate mode

**Shift+Tab**

Restrict the lead to coordination-only tools, preventing it from implementing tasks itself

View teammate session

**Enter** (on selected teammate)

See full output of a teammate's work in progress

Interrupt teammate

**Escape** (while viewing)

Stop a teammate's current turn to redirect their approach

**Delegate mode** deserves special attention. Without it, the lead sometimes starts implementing tasks itself instead of waiting for teammates. This defeats the purpose of the team -- the lead should be coordinating, not coding. Delegate mode restricts the lead to spawning, messaging, shutting down teammates, and managing tasks. Use it when you want strict separation between orchestration and implementation.

### Context Engineering for Agent Teams

Every best practice for agent teams maps directly to context engineering principles from this chapter.

**"Give teammates enough context."** Teammates load CLAUDE.md automatically, but they do not inherit the lead's conversation history. If the lead spent ten minutes discussing the authentication architecture with you, none of that context reaches the teammate who reviews the auth module. Task-specific details must go in the spawn prompt:

```
Spawn a security reviewer teammate with the prompt: "Review theauthentication module at src/auth/ for security vulnerabilities.Focus on token handling, session management, and input validation.The app uses JWT tokens stored in httpOnly cookies.Report any issues with severity ratings."
```

This is Strategy 3 (Include Critical Context in Delegation Prompt) from the context amnesia section, applied at the team level. The more specific the spawn prompt, the less time the teammate spends orienting and the more time it spends on actual analysis.

**"Size tasks appropriately."** Too small and coordination overhead exceeds benefit. Too large and teammates work too long without check-ins, increasing the risk of wasted effort. The recommendation is 5-6 tasks per teammate as a starting point. This is the Signal vs Noise principle from Lesson 2 applied to task granularity: each task should be large enough to produce meaningful signal but small enough that the lead can detect problems before they compound.

**"Avoid file conflicts."** Two teammates editing the same file leads to overwrites. Break the work so each teammate owns a different set of files. This is context isolation applied to file system state, not just token context. The same principle that keeps Agent A's research artifacts out of Agent C's attention budget also keeps Agent A's file edits from colliding with Agent C's file edits.

These are not new principles. They are the same context engineering fundamentals you have been learning throughout this chapter, applied at a different scale. The pattern holds: clean signal in, clean signal out, regardless of whether "in" means a single agent's context window or a team of six coordinating across a codebase.

### Case Study: 16 Agents Build a C Compiler

Anthropic researcher Nicholas Carlini used 16 parallel Claude instances to build a C compiler from scratch. Over nearly 2,000 Claude Code sessions and approximately 2 billion input tokens, the agents produced a 100,000-line Rust-based compiler that can compile Linux 6.9 across x86, ARM, and RISC-V architectures. The compiler achieves a 99% pass rate on standard compiler test suites and can also compile QEMU, FFmpeg, SQLite, PostgreSQL, and Redis. Total cost: approximately $20,000.

The project was not a toy demonstration. It produced a working compiler that handles real-world software. And the engineering challenges Carlini encountered read like a chapter summary of everything you have learned about context engineering.

**Test suites as signal.** High-quality test suites directed agent behavior without human supervision. But the test harness had to be clean. As Carlini documented, the harness should avoid printing noise that obscures the actual error. Instead, it should log important information to files and keep error output on single lines for automated grep searches. This is Lesson 2 (Signal vs Noise) at compiler scale: the agents spent attention diagnosing real problems, not parsing noisy output.

**Documentation for agent onboarding.** Agents maintained extensive READMEs and progress files updated frequently with current status. When a new agent session started, these documents helped it orient quickly without human intervention. This is the context amnesia workaround (Strategy 2: Master-Clone) working at production scale: every fresh agent reads the project brief before starting its task.

**Randomized test sampling.** The harness included a fast mode that runs a 1% or 10% random sample of test cases, deterministic per-agent but random across instances. This enabled parallel debugging: each agent worked on different failure subsets simultaneously. This is decomposition for parallelism, the same principle behind the clean context pattern, applied to the test suite itself.

**Clear error messaging.** Pre-computed statistics and clear error messages reduced the computational overhead of understanding failures. Agents could immediately see what failed and why, rather than sifting through thousands of lines of output. This is context quality at the infrastructure level: the environment itself was engineered to present clean signal to the agents.

Lesson from Compiler Project

Context Engineering Principle

Where You Learned It

Clean test harness output

Signal vs Noise

Lesson 2

READMEs for agent orientation

Master-Clone architecture

This lesson (Strategy 2)

Randomized test sampling

Decomposition for parallelism

This lesson (Clean Context Pattern)

Pre-computed error statistics

Context quality

Lesson 4 (structured context)

The takeaway: at 16-agent scale, the differentiator was not the model or the tools. It was context quality. The same model, the same tools, but disciplined context engineering produced a compiler that passes real-world test suites. Sloppy test harnesses, verbose output, or missing documentation would have turned those 2 billion tokens into noise instead of progress.

This principle scales down, too. Whether you are coordinating 16 agents building a compiler or 3 teammates reviewing a contract, the work succeeds or fails based on the quality of context each agent receives. Clean signal in, clean results out.

## Context Amnesia Workarounds

Here's the catch: clean context means subagents don't know your project. They start fresh. They don't know your organization's conventions, your client's preferences, your "we tried that already and it failed" history.

This is **context amnesia**—the price of isolation.

Three strategies to work around it:

### Strategy 1: Preload Skills with Domain Knowledge

Create Skills (from Chapter 3) that encode domain-specific knowledge:

**Legal Professional:**

```
# Skill: Firm Writing StandardsWhen drafting legal documents for this firm:- Use active voice in argument sections- Citations follow Bluebook 21st edition- Never cite cases overturned in the last 5 years- Client confidentiality language must appear in all external docs- Opposing counsel references use formal style (not nicknames)
```

**Marketing Professional:**

```
# Skill: Brand Voice GuidelinesWhen creating content for this brand:- Tone is confident but never arrogant- Always lead with customer benefit, not product features- Avoid jargon: say "easy to use" not "intuitive UX"- Never mention competitor names directly- All claims require substantiation in footnotes
```

**Research Professional:**

```
# Skill: Academic StandardsWhen writing for this research group:- Use APA 7th edition formatting- Hedging language required for all causal claims- Statistical significance threshold is p < 0.01 for this journal- Conflict of interest statement required in all submissions- Data availability statement follows funder requirements
```

**Consulting Professional:**

```
# Skill: Deliverable StandardsWhen creating client deliverables:- Executive summary never exceeds one page- Recommendations must include implementation timeline- All charts use client's brand colors- Financial projections require sensitivity analysis- Never include internal team discussions in client-facing docs
```

When invoking a subagent, include the relevant skill:

```
Task: [specific task]Use the '[domain]-standards' skill for conventions.Return: [output format]
```

The skill provides domain knowledge without polluting context with irrelevant details.

### Strategy 2: Master-Clone Architecture

The subagent reads the full project brief at the start of its task:

```
Before starting this task:1. Read the project brief from [location]2. Identify the sections relevant to your task3. Apply those guidelines to your workTask: [specific task]Return: [output format]
```

This works well when project briefs are well-organized (under 60 lines of signal, per Lesson 4). The subagent gets full project context at the cost of some token budget, but starts fresh without other agents' pollution.

### Strategy 3: Include Critical Context in Delegation Prompt

The orchestrator extracts only the critical context for each delegation:

**Legal example:**

```
Task: Draft the facts section of the briefCritical context:- Client is defendant (use defensive framing)- Jurisdiction is 9th Circuit (cite 9th Circuit precedent first)- Judge Chen assigned (known for favoring plain language)- Opposing counsel filed 42-page brief (we're aiming for 25 pages)Draft for: Clarity and persuasionReturn: Facts section with citations
```

**Marketing example:**

```
Task: Write the product launch announcementCritical context:- Audience is existing customers (not prospects)- Tone should emphasize "you asked, we delivered"- Pricing is premium tier only (don't mention basic plan)- Embargo lifts Tuesday 9am ET (no social shares before)Write for: Customer excitement and urgencyReturn: Announcement with suggested subject lines
```

The orchestrator knows what context matters for this specific task. It includes that context explicitly, leaving out everything else.

**Best practice:** Combine strategies. Use Skills for stable conventions, master-clone for project-wide context, and explicit context for task-specific details.

## Tool Access Control by Role

Context isolation includes controlling what each subagent can do, not just what it knows.

Role

Tools

Why

**Read-only** (reviewers)

Read, Grep, Glob

Can explore documents but can't modify them

**Research** (analysts)

\+ WebFetch, WebSearch

Can gather external information

**Writers**

\+ Write, Edit

Can create and modify documents

**Full access**

All tools

Reserved for orchestrator or trusted agents

In Claude Code, you specify tool access when launching subagents:

```
Agent definition:- Role: document-reviewer- Tools: Read, Grep, Glob (read-only access)- Task: Review contract for liability risks
```

This prevents a research subagent from accidentally modifying files. It prevents a review subagent from "fixing" issues without proper oversight. Tool access control is another form of isolation—capability isolation alongside context isolation.

## Lab: Dirty Slate vs Clean Context Comparison

**Objective:** See the difference between polluted and isolated context with your own eyes.

**Duration:** 60 minutes

**Deliverable:** Evidence documenting which pattern produces better results for a realistic task.

### Choose Your Domain

Select the professional context that matches your work:

Option

Domain

Deliverable

A

**Legal**

Case brief recommending litigation strategy

B

**Marketing**

Strategy document for product positioning

C

**Research**

Synthesis paper on emerging topic

D

**Consulting**

Recommendations for client problem

E

**Development**

Technical specification for new feature

The three-step process is the same regardless of domain:

1.  **Research**: Gather relevant information, sources, precedents, or data
2.  **Analyze**: Synthesize findings into actionable insights
3.  **Write**: Create the professional deliverable

### Implementation A: Dirty Slate (Single Agent)

**Step 1:** Start a fresh Claude Code session.

**For Legal (Option A):**

```
I'm going to create a case brief about [employment/contract/IP dispute of your choice].Phase 1 - Research:Find the following:- What are the key legal issues?- What precedents are most relevant?- What are the strongest arguments for each side?- What procedural considerations apply?Be thorough. Search for cases, read statutes, explore different theories.
```

**For Marketing (Option B):**

```
I'm going to create a positioning strategy for [product/service of your choice].Phase 1 - Research:Find the following:- Who are the main competitors?- What positioning do they use?- What gaps exist in the market?- What does the target audience value most?Be thorough. Research competitors, analyze messaging, explore market reports.
```

**For Research (Option C):**

```
I'm going to create a synthesis paper about [emerging topic of your choice].Phase 1 - Research:Find the following:- What are the key sources on this topic?- What do the leading perspectives argue?- Where do experts disagree?- What gaps exist in current understanding?Be thorough. Search literature, read studies, explore different viewpoints.
```

**For Consulting (Option D):**

```
I'm going to create recommendations for [business problem of your choice].Phase 1 - Research:Find the following:- What are the symptoms of this problem?- What approaches have others tried?- What best practices exist?- What constraints typically apply?Be thorough. Research solutions, analyze frameworks, explore case studies.
```

**For Development (Option E):**

```
I'm going to create a technical specification for [feature of your choice].Phase 1 - Research:Find the following:- What problem does this solve?- What approaches could work?- What are the tradeoffs?- What constraints apply?Be thorough. Read documentation, search for patterns, explore examples.
```

Let Claude research. Note what gets added to context: document reads, search results, exploratory tangents.

**Step 2:** Continue in the same session.

```
Phase 2 - Analyze:Based on your research, synthesize recommendations:- What approach do you recommend?- What are the key tradeoffs?- What risks should we consider?Consider the research you just did.
```

Note: Claude now has research context PLUS analysis context.

**Step 3:** Continue in the same session.

```
Phase 3 - Write:Create the professional deliverable. Include:- Executive summary (2 sentences)- Problem/situation statement- Your recommendation with reasoning- Key tradeoffs and considerations- Next stepsMake it appropriate for a senior stakeholder.
```

**Save the output.** Note the quality. Note context utilization.

### Implementation B: Clean Context (Orchestrator Pattern)

**Step 1:** Start a fresh Claude Code session.

Use the same domain prompt from above, but add this structure:

```
I'm going to create [deliverable] about [same topic].I'll use an orchestrator pattern:1. You'll research and return a summary2. Fresh context: You'll analyze the summary and return recommendations3. Fresh context: You'll write based on recommendationsLet's start with Phase 1 - Research:[same research questions as above]Return your findings as a structured summary in this format:---**Core Issue:** [1-2 sentences]**Key Findings:** [bullet list of 3-5 most important discoveries]**Options Considered:** [bullet list with brief descriptions]**Comparison:** [table comparing top 2-3 options]---
```

Save the summary.

**Step 2:** Start a NEW session (or `/clear`).

```
Phase 2 - Analyze:Here is research about [topic]:---[paste the summary from Step 1]---Based on this research, provide recommendations:- What approach do you recommend?- What are the key tradeoffs?- What risks should we consider?Return your analysis as a structured summary:---**Recommendation:** [Clear statement]**Rationale:** [3 key reasons]**Risks:** [bullet list with mitigations]**Decision Factors:** [what would change this recommendation]---
```

Save the analysis.

**Step 3:** Start a NEW session (or `/clear`).

```
Phase 3 - Write:Here is analysis about [topic]:---[paste the analysis from Step 2]---Create the professional deliverable. Include:- Executive summary (2 sentences)- Problem/situation statement- Your recommendation with reasoning- Key tradeoffs and considerations- Next stepsMake it appropriate for a senior stakeholder.
```

**Save the output.**

### Comparison

Now compare the two deliverables:

Criterion

Dirty Slate (A)

Clean Context (B)

**Clarity**: Is the recommendation clear?

**Focus**: Does it avoid irrelevant tangents?

**Structure**: Is it well-organized?

**Relevance**: Does every section serve the purpose?

**Token efficiency**: How much context was used?

**Stakeholder ready**: Which would you share with a client/boss?

### Reflection Questions

1.  In the dirty slate version, did Agent C reference details from the research phase that weren't relevant to the final deliverable?
    
2.  In the clean context version, did the structured summaries lose any important nuance?
    
3.  How much larger was the dirty slate context by Phase 3 compared to the clean context Phase 3?
    
4.  Which version was easier to debug if you wanted to improve the output?
    
5.  If you were building an automated pipeline for this task, which architecture would you choose?
    

### Deliverable

Create a brief document (1/2 page) with:

-   Both final deliverables
-   Your comparison table
-   Your conclusion: which pattern produced better results and why
-   When you might choose the losing pattern instead

## Common Failure Modes

### Failure: Summaries Lose Critical Detail

**Symptom:** The final output misses nuances that were in the original research.

**Cause:** Summaries were too aggressive; important details were compressed away.

**Fix:** Use structured summary formats that force inclusion of key elements. For complex tasks, use "summary + supporting evidence" format:

```
**Summary:** [high-level takeaway]**Supporting Evidence:**- [specific fact that supports summary]- [specific fact that supports summary]**Caveats:**- [important nuance that qualifies the summary]
```

### Failure: Subagent Doesn't Know Domain Context

**Symptom:** Subagent produces output that violates professional conventions.

**Cause:** Clean context means no domain knowledge.

**Fix:** Use context amnesia workarounds: Skills for professional conventions, master-clone for project-wide context, explicit context in delegation prompt.

### Failure: Orchestrator Becomes Bottleneck

**Symptom:** The orchestrator is doing all the work; subagents aren't contributing much.

**Cause:** Tasks are too small or poorly defined; the overhead of delegation exceeds the benefit.

**Fix:** Increase task granularity. If a subagent task takes less than 5 minutes, it might not be worth isolating. Consolidate into larger, meaningful work units.

### Failure: Parallel Results Don't Synthesize

**Symptom:** Three subagents ran in parallel, but their outputs contradict each other.

**Cause:** Parallel subagents didn't share assumptions; they made incompatible decisions.

**Fix:** Provide shared constraints in each delegation. If certain decisions must be consistent across subagents, make those decisions before delegation, not during.

## Try With AI

### Prompt 1: Diagnose Your Current Workflow

```
Let's analyze a multi-step professional workflow I use.Here's my workflow:[describe your process for creating a deliverable—brief, strategy, report, recommendations, etc.]Diagnose this for context pollution:1. At each step, what information accumulates beyond what's needed for the next step?2. By the final step, what percentage of accumulated information is actually relevant?3. Where would clean context boundaries improve quality?4. What would an orchestrator pattern look like for this workflow?Be specific about what's polluting vs what's signal.
```

**What you're learning:** How to analyze existing professional workflows for context pollution. The diagnosis skill helps you see accumulation that you might have normalized as "just how it works."

### Prompt 2: Design an Orchestrator for Your Domain

```
I need to accomplish this professional task:[describe a deliverable you create regularly—case brief, strategy doc, research paper, client recommendation, etc.]Design an orchestrator-based architecture:1. Break this into subagent responsibilities (research, analyze, write, review)2. Specify what context each subagent needs (minimum viable context)3. Define the output format each subagent returns4. Show how the orchestrator synthesizes resultsInclude context amnesia workarounds: what domain knowledge do subagents need,and how should they get it (Skills for conventions, master-clone for project context, or explicit delegation context)?
```

**What you're learning:** How to architect multi-agent systems for your specific professional domain. The design process—decomposing into agents, specifying minimum context, defining summaries—builds the instinct for clean context patterns.

### Prompt 3: Compare Pattern Tradeoffs for Your Use Case

```
I'm building a system that needs to:[describe your multi-agent use case—complex deliverable, multi-phase project, team collaboration]Compare three implementation approaches:1. Stateless subagents with orchestrator2. Stateful handoffs between agents3. Shared memory layer with independent agentsFor each approach, evaluate:- Context pollution risk- Coordination overhead- Debugging complexity- Parallelism opportunity- Implementation effortRecommend which pattern (or hybrid) fits best, and explain why.
```

**What you're learning:** There's no universally correct pattern—the choice depends on your specific needs. This prompt builds judgment about when isolation helps versus when it adds unnecessary overhead.

### Prompt 4: Experience Agent Teams for Parallel Review

Enable agent teams in your settings, then try this:

```
Create an agent team to analyze [a project or codebase you're working on].Spawn three teammates:- A "Researcher" who investigates the project structure and documents  key patterns- A "Critic" who identifies potential problems, risks, and improvements- A "Architect" who proposes structural improvements based on findingsHave them share findings with each other and debate their conclusions.Synthesize a final assessment when they converge.
```

**What you're learning:** Agent teams demonstrate the network pattern from this lesson in action. Notice how each teammate operates with clean context (they don't inherit the lead's history), how they coordinate through the shared task list, and how inter-agent communication produces richer analysis than isolated subagents reporting back independently. The debate structure -- teammates challenging each other's findings -- is impossible with subagents, which can only report to their caller.

The insight that ties this chapter together: **context is attention budget, and attention is finite**. Every technique in this chapter—position sensitivity, signal-to-noise auditing, compaction, progress files, and now context isolation—serves the same goal: ensuring the AI's attention is spent on what matters, not on accumulated noise.

In the final lesson, you'll bring all these techniques together into a coherent playbook for building Digital FTEs worth selling.

## References

-   Anthropic. (2026). "[Orchestrate teams of Claude Code sessions](https://code.claude.com/docs/en/agent-teams)." Claude Code Documentation.
-   Anthropic. (2026). "[Building a C Compiler with Parallel Claude Agents](https://www.anthropic.com/engineering/building-c-compiler)." Anthropic Engineering Blog.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   The Context Engineering Playbook: Decision Frameworks for Quality

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/10-context-engineering-playbook.md)

# The Context Engineering Playbook: Decision Frameworks for Quality

You've spent nine lessons learning the physics of context engineering. Position sensitivity. Attention budgets. Signal versus noise. Progress files. Memory injection. Context isolation. These aren't abstract concepts anymore. You understand WHY Claude forgets things, WHEN to compact versus clear, and HOW to structure information for maximum attention allocation.

Now it's time to put it all together.

This lesson is the capstone. You'll learn decision frameworks that tell you WHICH technique to apply WHEN. You'll understand how to allocate your context budget across components. And you'll build something real: a production-quality agent that demonstrates every technique from this chapter working in concert.

More importantly, you'll connect everything back to the thesis that drives this entire book.

## Back to the Thesis

In Chapter 1, you learned the Agent Factory paradigm: domain experts manufacturing Digital FTEs powered by AI. The thesis:

> General Agents BUILD Custom Agents.

You've spent three chapters learning the tools (Chapter 3) and the physics (this chapter). Now answer the question that actually matters:

**What separates a $50/month agent from a $5,000/month agent?**

Not the model. Every law firm, marketing agency, research lab, and consulting practice has access to Claude, GPT, and Gemini. Your competitor can spin up the same frontier model in minutes.

Not the basic prompts. Prompts plateau quickly. You can only polish a single instruction so much before diminishing returns set in.

**The context engineering discipline.**

A well-engineered agent:

-   Maintains consistency across sessions (progress files + session architecture)
-   Doesn't degrade over long conversations (attention budget management)
-   Applies tacit knowledge automatically (memory injection)
-   Scales to complex multi-step tasks without drift (context isolation)
-   Improves from use (memory consolidation)

This is what clients pay for. Whether you're building a contract review assistant, a campaign planning agent, a literature synthesis tool, or a code reviewer—the value isn't raw intelligence. Everyone has access to that. Clients pay for reliability, consistency, and domain expertise that accumulates rather than resets.

**This chapter gave you the quality control toolkit. This lesson shows you how to apply it.**

## The Context Engineering Decision Tree

When you encounter a context problem, you need a decision framework. Not "try everything and see what works" but "diagnose the specific problem and apply the specific solution."

Here's the decision tree:

```
Is context utilization > 70%?├─ YES → Compaction needed (Lesson 6)│        Is the current task complete?│        ├─ YES → /clear (fresh start)│        └─ NO → /compact with custom instructions│                "Preserve: [decisions, file changes, current goal]"│└─ NO → Continue, but monitor (/context every 10 messages in yellow zone)Is this task multi-session?├─ YES → Progress file architecture (Lesson 7)│        - Create claude-progress.txt│        - Decompose into 10-15 granular tasks│        - Use session initialization protocol│        - Commit at session boundaries│└─ NO → Single session workflow (standard)Is workflow drifting from original intent?├─ YES → Memory injection needed (Lesson 8)│        - Set up vector DB for domain knowledge│        - Implement PreToolUse hook│        - Extract thinking blocks for embedding│        - Add deduplication layer│└─ NO → UserPromptSubmit injection is sufficientIs work distributed across multiple agents?├─ YES → Context isolation (Lesson 9)│        - Use orchestrator pattern│        - Fresh context per subagent│        - Summary-based communication│        - Careful tool access control│└─ NO → Single agent workflow
```

Each branch points to a specific lesson and technique. The decision tree isn't "which sounds good"—it's "what does the diagnosis say?"

### Reading the Decision Tree

Let's trace through realistic scenarios across different domains.

* * *

**Scenario A: Legal — Contract Review Assistant**

You're reviewing a complex commercial lease agreement. Your AI assistant has been running for 45 minutes, and it's starting to miss liability clauses it caught earlier.

**Decision 1: Is context > 70%?**

Run `/context`. Output: `Context: 156,000 / 200,000 tokens (78%)`

Yes. You're in the orange zone. Compaction needed.

**Decision 2: Is the task complete?**

No—you're mid-review. You don't want to lose the context of which sections have been analyzed and what red flags were identified.

**Action:** `/compact Focus on the lease review findings and clauses already analyzed. Discard the tangent about formatting preferences from messages 12-18.`

Now you're back to ~40% utilization with the important context preserved.

**Decision 3: Is this multi-session?**

No—you'll finish this contract today.

**No action needed** for progress files.

**Decision 4: Is workflow drifting?**

You started reviewing for "indemnification and liability risks" but Claude has shifted to "general grammar corrections." That's drift.

**Action:** You could implement memory injection, but for a single session, a simpler fix works: re-state your goal explicitly. "Return focus to liability and indemnification clauses. Grammar is out of scope for this review."

* * *

**Scenario B: Marketing — Campaign Planning Assistant**

You're developing a product launch campaign. The AI has been helping for an hour, brainstorming messaging across multiple channels. Now its suggestions are becoming generic, losing the brand voice you established earlier.

**Decision 1: Is context > 70%?**

Run `/context`. Output: `Context: 145,000 / 200,000 tokens (72%)`

Yes, approaching the danger zone. Proactive compaction recommended.

**Decision 2: Is the task complete?**

No—you've done social media but still need email sequences and landing page copy.

**Action:** `/compact Preserve: brand voice guidelines, approved messaging themes, target persona details. Discard: rejected tagline brainstorms, competitor research tangent.`

**Decision 3: Is this multi-session?**

Yes—this campaign will take several days to develop fully.

**Action:** Create a progress file:

```
# Campaign: [Product] Launch## Approved Direction- Brand voice: [captured decisions]- Core messaging: [finalized themes]- Target persona: [documented]## Completed- Social media concepts (Instagram, LinkedIn)## Next Session- Email nurture sequence- Landing page copy
```

**Decision 4: Is workflow drifting?**

The suggestions lost your brand's distinctive voice. That's knowledge drift.

**Action:** Memory injection would help for future sessions. For now, re-inject the brand voice document explicitly: "Review our brand voice guidelines before the next suggestion. All copy must match this tone."

* * *

**Scenario C: Research — Literature Synthesis Assistant**

You're synthesizing 30 papers for a systematic review. The AI has been helping categorize findings, but it's starting to misattribute claims to the wrong papers.

**Decision 1: Is context > 70%?**

Yes—you've loaded substantial paper summaries.

**Decision 2: Is the task complete?**

No—you're at paper 18 of 30.

**Action:** `/compact Preserve: synthesis table with paper citations, methodology classification schema. Discard: detailed quotes from papers 1-10 (keep citations only).`

**Decision 3: Is this multi-session?**

Definitely—this is a week-long project.

**Action:** Your progress file should track which papers have been analyzed, key findings extracted, and where conflicts exist between sources.

**Decision 4: Is workflow drifting?**

Attribution errors suggest memory pollution from overlapping contexts.

**Action:** Consider multi-round processing—analyze 5 papers per session, produce a mini-synthesis, then combine syntheses in a final session with fresh context.

* * *

**Scenario D: Consulting — Proposal Development Assistant**

You're developing a consulting proposal. The AI has been helping with the executive summary, scope definition, and pricing rationale. Now it's suggesting deliverables that don't match what you discussed with the client.

**Decision 1: Is context > 70%?**

Run `/context`. Moderate usage—not the primary issue.

**Decision 2: Is the task complete?**

No—you still need the implementation timeline and team bios section.

**No compaction needed** yet.

**Decision 3: Is this multi-session?**

Yes—proposals typically span multiple working sessions with client feedback loops.

**Action:** Create a progress file capturing: client requirements (from discovery call), agreed scope boundaries, pricing approach, and key differentiators.

**Decision 4: Is workflow drifting?**

Yes—the deliverables don't match client needs. Classic drift.

**Action:** Re-inject the client requirements document. "Review the discovery call notes before suggesting deliverables. Every deliverable must trace to a stated client need."

* * *

**Scenario E: Development — Code Review Assistant**

You're reviewing a large pull request. The AI has been running for 45 minutes, and quality is degrading—it's missing security issues it caught earlier.

**Decision 1: Is context > 70%?**

Run `/context`. Output: `Context: 156,000 / 200,000 tokens (78%)`

Yes. Compaction needed.

**Decision 2: Is the task complete?**

No—you're mid-review.

**Action:** `/compact Focus on the PR review findings and files already analyzed. Discard the debugging tangent from messages 12-18.`

**Decision 3: Is this multi-session?**

No—you'll finish this review today.

**No action needed** for progress files.

**Decision 4: Is workflow drifting?**

You started reviewing for "security issues" but Claude has shifted to "code style." That's drift.

**Action:** Re-state your goal explicitly. "Return focus to security issues. Code style is out of scope for this review."

* * *

The decision tree didn't tell you to use every technique. It told you which ones match your situation—regardless of your domain.

## Context Budget Allocation

Context isn't free. Every token you add competes for attention with every other token. Understanding budget allocation helps you make tradeoffs.

Component

Recommended %

Notes

System prompt

5-10%

Core identity, constraints (Anthropic-controlled)

CLAUDE.md

5-10%

Project-specific context (your control)

Tool definitions

10-15%

Available actions (grows with enabled tools)

Message history

30-40%

Conversation state (accumulates over session)

Tool outputs

20-30%

File reads, command results

**Reserve buffer**

10-15%

Room for growth, unexpected needs

The reserve buffer is critical. If you're running at 90% utilization, any file read might push you into degradation territory. Keep headroom.

### Budget Allocation by Session Phase

These percentages shift throughout a session:

**Early session (first 10 messages):**

-   System prompt: 15%
-   CLAUDE.md: 15%
-   Tool definitions: 20%
-   Message history: 10%
-   Tool outputs: 25%
-   Reserve: 15%

**Mid session (messages 20-40):**

-   System prompt: 8%
-   CLAUDE.md: 8%
-   Tool definitions: 12%
-   Message history: 35%
-   Tool outputs: 27%
-   Reserve: 10%

**Late session (messages 50+):**

-   System prompt: 5%
-   CLAUDE.md: 5%
-   Tool definitions: 8%
-   Message history: 50%
-   Tool outputs: 27%
-   Reserve: 5%

Notice how message history grows to dominate. This is why conversations degrade—the useful context (CLAUDE.md, tools) gets proportionally smaller as conversation noise accumulates.

## The Seven Token Budgeting Strategies

When you're over budget, these strategies help you reclaim tokens without losing quality:

### Strategy 1: Summarize Large Text Blocks

Before including a large document, summarize it:

```
Instead of pasting the entire 5,000-word contract,summarize the key clauses relevant to this review in 200 words.Instead of including the full research paper,extract the methodology and key findings relevant to our synthesis.Instead of loading the complete brand guidelines,summarize the voice and tone principles for this campaign.
```

**When to use:** Documents > 2,000 tokens that you need for reference but don't need verbatim.

### Strategy 2: Chunk Documents into Vector DB

Store large knowledge bases in a vector database. Retrieve only relevant chunks:

```
# Instead of loading 50 pages of precedent contractsquery = "indemnification clause commercial lease"relevant_chunks = vector_db.search(query, top_k=3)# Include only the 3 most relevant clauses# Instead of loading entire research corpusquery = "methodology randomized controlled trial"relevant_chunks = vector_db.search(query, top_k=5)# Include only the relevant methodology sections
```

**When to use:** Reference materials, documentation, knowledge bases that are too large to include whole.

### Strategy 3: Offload to External Memory

Not everything needs to live in context. Use external storage:

-   Database for structured data
-   Files for persistent state
-   Vector DB for semantic search

Pass IDs or references, not full content.

**When to use:** Data that changes, accumulates, or exceeds context limits.

### Strategy 4: Use Relevancy Checks

Before including content, verify it's needed:

```
# Before including a fileif "authentication" in file_content.lower() and task == "auth_review":    include_file()else:    skip_file()
```

**When to use:** When you're including files "just in case" rather than because they're definitely needed.

### Strategy 5: Structure Prompts Wisely

System messages persist across turns. User messages accumulate in history. Structure accordingly:

-   **System messages:** Stable rules, identity, constraints
-   **User messages:** Task-specific instructions, changing context
-   **Tool results:** Ephemeral data, can be summarized or dropped

**When to use:** When designing your context architecture from scratch.

### Strategy 6: Monitor Real-Time

Set guardrails and check regularly:

```
# In CLAUDE.md## Context Monitoring- Run /context every 10 messages when above 50%- At 70%+: Stop and suggest /compact- At 85%+: Mandatory compact before continuing
```

**When to use:** Always. Monitoring should be automatic, not an afterthought.

### Strategy 7: Multi-Round Processing

For tasks requiring more context than fits, process in rounds:

```
Round 1: Analyze files 1-5, produce summaryRound 2: Analyze files 6-10, produce summaryRound 3: Synthesize summaries into final output
```

Each round uses fresh context. The final round operates on summaries, not raw data.

**When to use:** Analysis tasks requiring more input than context allows.

## The When-to-Use Framework

Techniques map to situations. Here's the quick reference:

Situation

Primary Technique

Lesson

Context is noisy

Signal-to-noise audit

4

Critical instructions ignored

Position optimization

3

Work spans multiple days

Progress files

7

Agent drifts from original intent

Memory injection

8

Multiple agents conflicting

Context isolation

9

Context utilization > 70%

Compaction or clear

6

Same task, different quality

Attention budget management

2

Claude "forgets" discussed topics

Position + compaction

3, 6

Tacit knowledge not being applied

Memory extraction + storage

5

Notice that problems often have multiple contributing causes. Here are examples across domains:

**Legal:** "Claude keeps missing liability clauses" might be:

-   Position problem (clause types are in middle of CLAUDE.md)
-   Noise problem (review criteria buried in 400 lines of context)
-   Budget problem (context is at 80%, criteria don't get attention)

**Marketing:** "Claude keeps going off-brand" might be:

-   Position problem (brand voice buried in reference section)
-   Noise problem (too many example campaigns diluting the signal)
-   Knowledge problem (brand guidelines never properly extracted)

**Research:** "Claude keeps misattributing findings" might be:

-   Budget problem (too many papers loaded simultaneously)
-   Scalability problem (synthesis task too complex for single context)
-   Persistence problem (paper details lost between sessions)

**Consulting:** "Claude keeps suggesting irrelevant deliverables" might be:

-   Drift problem (original client requirements faded)
-   Position problem (scope constraints not in prime attention zone)
-   Knowledge problem (industry-specific patterns not documented)

Start with the most likely cause. If it doesn't resolve, check the next.

## Quality Assessment Criteria

How do you know if your Digital FTE is production-ready? Apply these four criteria.

**The four quality criteria (Consistency, Persistence, Scalability, Knowledge) are your Digital FTE's performance review metrics. Score below 3/5 on any = not ready for client deployment.**

### 1\. Consistency

**The test:** Does it give the same quality answer at turn 1 vs turn 50?

**How to measure:**

1.  Define a standard test task
2.  Run it at session start
3.  Work for 30-45 minutes on other things
4.  Run the identical test task
5.  Compare outputs

**Scoring:**

-   5: Outputs indistinguishable
-   4: Minor quality difference, conclusions identical
-   3: Noticeable quality drop, conclusions mostly correct
-   2: Significant quality drop, some conclusions wrong
-   1: Dramatically worse, major errors

**What affects it:** Attention budget management, compaction timing, position sensitivity.

### 2\. Persistence

**The test:** Can it resume work after a 24-hour break?

**How to measure:**

1.  Work on a multi-session task for 2 hours
2.  Close the session completely
3.  Wait 24 hours
4.  Resume with `claude --continue` or fresh session + progress file
5.  Measure: How long to re-establish context? How much is remembered?

**Scoring:**

-   5: Picks up exactly where you left off (under 5 min reconstruction)
-   4: Minor re-explanation needed (5-10 min)
-   3: Significant re-explanation (10-20 min)
-   2: Most context lost (20+ min or rework)
-   1: Effectively starting over

**What affects it:** Progress file quality, decision documentation, session exit protocol.

### 3\. Scalability

**The test:** Can it handle 10-step tasks without drift?

**How to measure:**

1.  Define a complex task with 10+ sequential steps
2.  Start the task
3.  Track: Does each step align with the original goal?
4.  Note any drift points

**Scoring:**

-   5: All steps aligned, goal maintained throughout
-   4: Minor drift corrected with brief redirect
-   3: Required 2-3 explicit corrections
-   2: Significant drift, substantial corrections needed
-   1: Lost the plot, task failed or required restart

**What affects it:** Memory injection, context isolation, explicit goal statements.

### 4\. Knowledge

**The test:** Does it apply domain expertise automatically?

**How to measure:**

1.  Establish domain-specific rules (standards, terminology, preferences)
2.  Work on tasks that should trigger those rules
3.  Track: Did Claude apply them without prompting?

**Domain examples:**

-   **Legal:** Does it flag indemnification issues using your firm's risk thresholds?
-   **Marketing:** Does it match brand voice without being reminded?
-   **Research:** Does it apply your citation format and methodology criteria?
-   **Consulting:** Does it structure recommendations per your firm's framework?
-   **Development:** Does it follow coding standards and architecture patterns?

**Scoring:**

-   5: Domain rules applied consistently, unprompted
-   4: Applied most rules, occasional misses
-   3: Required occasional reminders
-   2: Required frequent reminders
-   1: Domain rules ignored, generic responses

**What affects it:** CLAUDE.md signal quality, memory extraction, tacit knowledge documentation.

## Lab: Build Your First Production-Quality Agent

**Objective:** Apply the full context engineering toolkit to build an agent worth showing to clients.

**Duration:** 120 minutes active work (may span multiple sessions)

**Deliverable:** A production-quality specialized agent with quality verification evidence.

### Choose Your Domain

Select an agent type that matches your expertise:

-   **Legal: Contract Review Assistant** — Reviews contracts against your firm's risk criteria, flags problematic clauses, suggests negotiation points based on your jurisdiction and practice area
-   **Marketing: Campaign Strategy Assistant** — Develops campaigns in your brand voice, maintains messaging consistency across channels, applies your audience segmentation methodology
-   **Research: Literature Synthesis Assistant** — Synthesizes academic papers per your methodology, maintains attribution accuracy, applies your quality assessment criteria
-   **Business: Process Improvement Assistant** — Analyzes workflows using your framework, identifies optimization opportunities, structures recommendations per your consulting methodology
-   **Development: Code Review Assistant** — Analyzes code against your team's standards, catches architectural violations, enforces your security requirements

The domain should be specific enough that generic agents fail. Your agent should have an unfair advantage because it knows YOUR context—your firm's standards, your industry's terminology, your methodology.

### Phase 1: Foundation (30 minutes)

**Step 1: Audit Your CLAUDE.md**

Apply the signal-to-noise audit from Lesson 4:

```
Read my CLAUDE.md. For each line, classify as:- SIGNAL: Claude couldn't figure this out from code/context- NOISE: Claude could infer this, it's wasting tokensTarget: < 60 lines of pure signal.
```

**Step 2: Optimize for Position**

Apply the three-zone strategy from Lesson 3:

```
# ═══════════════════════════════════════════════════# ZONE 1: FIRST 10% — Critical constraints# ═══════════════════════════════════════════════════## Non-Negotiables- [Your most critical rules here]# ═══════════════════════════════════════════════════# ZONE 2: MIDDLE 80% — Reference material# ═══════════════════════════════════════════════════## Project Context[Less critical information]# ═══════════════════════════════════════════════════# ZONE 3: LAST 10% — Workflow instructions# ═══════════════════════════════════════════════════## How to Start Work[Session protocols]
```

**Step 3: Establish Baseline**

Run your test task. Record the output quality. This is your "before" measurement.

### Phase 2: Persistence Architecture (30 minutes)

**Step 1: Create Progress File Template**

Based on your domain, create `claude-progress.txt`:

```
# Agent: [Your Agent Name]## Domain Knowledge Status### Captured Rules- [Rules you've documented]### Pending Extraction- [Tacit knowledge still in your head]## Quality Metrics### Last Assessment: [Date]- Consistency: [score]/5- Persistence: [score]/5- Scalability: [score]/5- Knowledge: [score]/5## Session Log### Session 1 ([Date])- Focus: Foundation setup- Changes: [what you did]- Next: [what comes next]
```

**Step 2: Extract Tacit Knowledge**

Apply the extraction protocol from Lesson 5:

```
I'm building a [domain] agent. Interview me to extract tacit knowledge:1. What decisions do I make that aren't written anywhere?2. What would a new team member need months to figure out?3. What patterns do I follow that feel like "common sense" but aren't obvious?4. What mistakes do beginners make that I catch automatically?For each answer, turn it into a concrete instruction for the agent.
```

**Domain-specific examples:**

-   **Legal:** "Always flag indemnification clauses over $500K" / "Watch for choice of law issues in cross-border contracts"
-   **Marketing:** "Our brand never uses exclamation points" / "Lead with benefit, not feature"
-   **Research:** "Exclude studies with n less than 30 unless qualitative" / "Always note funding sources for bias assessment"
-   **Business:** "Quantify impact in dollars, not percentages" / "Always include quick win recommendations"
-   **Development:** "Never approve PRs that change auth without security review" / "Prefer composition over inheritance"

**Step 3: Document Decisions**

As you make choices about your agent's behavior, record them:

```
## Agent Design Decisions- Decision: Always suggest tests before implementation  - Rationale: Prevents "implement then forget to test" pattern  - Alternative rejected: Test-after (too often skipped)- Decision: Use specific file paths, never relative  - Rationale: Subagents need absolute paths (Chapter 3 lesson)  - Alternative rejected: Context-dependent paths (error-prone)
```

### Phase 3: Memory System (30 minutes)

**Step 1: Define Your Memory Schema**

What memories should your agent have? Define categories:

```
## Memory Categories### Domain Rules- Type: Persistent (never changes)- Example: "Always use TypeScript strict mode"- Injection: Session start### Project Decisions- Type: Evolving (changes with project)- Example: "We chose PostgreSQL over MySQL because..."- Injection: When topic arises### Learned Preferences- Type: Accumulated (grows over time)- Example: "User prefers detailed explanations"- Injection: PreToolUse (based on thinking)
```

**Step 2: Build Initial Memory Store**

Create a memories file or vector DB. Examples by domain:

```
# memories/domain-rules.md (Legal Example)## Risk Thresholds- Flag any indemnification clause over $500K for partner review- Automatic escalation for unlimited liability provisions- Cross-border contracts require conflicts of law analysis## Jurisdiction Patterns- California contracts: watch for CCPA compliance requirements- Delaware entities: verify certificate of good standing- International: check GDPR data processing requirements## Common Issues- Force majeure clauses often missing pandemic language (post-2020 standard)- Assignment clauses need change-of-control carveouts- Termination for convenience requires 60-day minimum in our practice
```

```
# memories/domain-rules.md (Marketing Example)## Brand Voice- Tone: confident but not arrogant, helpful not pushy- Never use: "revolutionary," "game-changing," exclamation points- Always use: active voice, second person ("you"), concrete benefits## Channel Standards- LinkedIn: professional tone, industry insights, thought leadership- Instagram: aspirational, visual-first, lifestyle connection- Email: personalization required, subject lines under 40 chars## Campaign Patterns- Always lead with customer pain point, not product feature- Include social proof within first 3 sentences- CTAs should be specific actions, not "Learn More"
```

```
# memories/domain-rules.md (Development Example)## Coding Standards- Use 2-space indentation (not 4, not tabs)- Prefer early returns over nested conditionals- All functions must have JSDoc comments## Architecture Patterns- Services live in /src/services- Never import directly from node_modules in components- All API calls go through the API layer## Common Gotchas- The auth token expires after 1 hour; refresh proactively- The legacy endpoint uses XML, not JSON- Rate limiting kicks in at 100 req/min
```

**Step 3: Configure Memory Injection**

Add to your CLAUDE.md:

```
## Memory ProtocolBefore starting work, read: memories/domain-rules.mdWhen encountering unfamiliar patterns, check: memories/decisions.mdAt session end, note any new learnings for: memories/learned.md
```

For advanced implementation, set up PreToolUse hooks per Lesson 8.

### Phase 4: Quality Gate (30 minutes)

**Step 1: Consistency Test**

1.  Start fresh session
2.  Run your standard test task
3.  Work 30 minutes on unrelated things
4.  Run the identical test task
5.  Score consistency (1-5)

**Step 2: Persistence Test**

1.  Work on a multi-step task for 30 minutes
2.  Close the session
3.  Wait at least 4 hours (or until tomorrow)
4.  Resume and measure reconstruction time
5.  Score persistence (1-5)

**Step 3: Scalability Test**

1.  Define a 10-step task in your domain
2.  Execute it start to finish
3.  Track drift points (where did focus shift?)
4.  Score scalability (1-5)

**Step 4: Knowledge Test**

1.  Remove explicit reminders of domain rules from your prompt
2.  Run a task that should trigger those rules
3.  Did the agent apply them unprompted?
4.  Score knowledge (1-5)

### Deliverable

Your final deliverable is a folder containing:

```
my-production-agent/├── CLAUDE.md              # < 60 lines, position-optimized├── claude-progress.txt    # Progress tracking template├── memories/│   ├── domain-rules.md    # Persistent domain knowledge│   ├── decisions.md       # Design decisions with rationale│   └── learned.md         # Accumulated preferences└── quality-assessment.md  # Scores with evidence
```

The `quality-assessment.md` should look like:

```
# Agent Quality Assessment## Test Date: [Date]## Scores| Criterion   | Score | Evidence                                                || ----------- | ----- | ------------------------------------------------------- || Consistency | 4/5   | Minor quality drop at turn 45, conclusions identical    || Persistence | 5/5   | Resumed after 24h in 3 minutes via progress file        || Scalability | 4/5   | One drift correction at step 7, redirected successfully || Knowledge   | 4/5   | Applied 8/10 domain rules unprompted                    |## Overall: Ready for production use with monitoring## Improvement Plan1. Add explicit drift checkpoints at step 5 and 102. Document the 2 missed domain rules more prominently3. Consider PreToolUse memory injection for complex tasks
```

**This is your prototype for the Digital FTE manufacturing process you'll refine throughout the book. By the end of this lab, you'll have a production-quality Digital FTE that demonstrates the difference between "using AI" and "selling AI solutions."**

## Connecting to Principle 5

Everything in this chapter supports Principle 5: "Persisting State in Files."

You now understand:

-   **WHY** files work: They survive session boundaries where memory doesn't
-   **HOW** to structure them: Position sensitivity, signal density, progress tracking
-   **WHEN** to use them: Multi-session work, knowledge persistence, decision documentation

Without context engineering discipline, "persisting state in files" is cargo cult. With it, file-based state becomes a superpower.

In Chapter 6, you'll learn Principle 5 explicitly, along with the other six principles of general agent problem solving. This chapter gave you the physics. Chapter 6 gives you the practices.

## What You Learned

This capstone lesson synthesized the entire chapter:

1.  **The decision tree** tells you which technique to apply for specific situations. Diagnose first, then act.
    
2.  **Context budget allocation** shows where your tokens go. Message history dominates late sessions, which is why quality degrades.
    
3.  **The seven token budgeting strategies** help you reclaim budget: summarize, chunk, offload, relevancy check, structure, monitor, multi-round.
    
4.  **The when-to-use framework** maps situations to techniques. Most problems have multiple contributing causes.
    
5.  **Four quality criteria** define production-readiness: consistency, persistence, scalability, knowledge.
    
6.  **The production agent lab** applies everything to build something real.
    

The difference between a $50/month chatbot and a $5,000/month Digital FTE is now concrete. It's not magic. It's discipline. Context engineering is the manufacturing quality control that makes your AI solutions worth buying.

## Try With AI

### Prompt 1: Domain-Specific Quality Assessment

```
I'm building a [describe your domain: legal/marketing/research/business/development] agent.Assess my agent's production-readiness:1. Consistency (1-5): Would I get the same quality at turn 1 vs turn 50?   - What evidence supports your score?   - What's the biggest risk to consistency in my domain?2. Persistence (1-5): Can work resume after a session break?   - What mechanisms exist for continuity?   - What domain-specific context gets lost when sessions end?3. Scalability (1-5): Can it handle complex multi-step tasks without drift?   - Where would drift most likely occur for [domain] work?   - What safeguards exist against losing the original brief?4. Knowledge (1-5): Does domain expertise get applied automatically?   - What [industry/field] rules are documented?   - What tacit expertise still lives only in my head?Be honest and specific. I want actionable improvement targets that would make this agent worth $5,000/month to a client.
```

**What you're learning:** Quality assessment requires evidence, not gut feeling. This prompt forces you to justify each score with domain-specific observations, building the habit of evidence-based evaluation. You're learning to see your agent the way a paying client in your industry would.

### Prompt 2: The Client Pitch

```
I built a [describe your agent in one sentence — include your domain].Write a client-facing description for [target buyer: law firm partner / CMO / research director / COO / engineering manager]. The constraints:- Don't mention "context engineering" (clients don't care about internals)- Don't mention technical mechanisms (vector DB, hooks, etc.)- Focus on outcomes: reliability, consistency, domain expertise, time savingsStructure it as:1. The problem this solves for [target buyer] (2-3 sentences)2. What makes this agent different from generic AI (2-3 bullet points)3. Expected results (specific, measurable outcomes in their language)This is how I'd pitch this to someone who might pay $5,000/month for it.
```

**What you're learning:** Technical quality must translate to business value. Your context engineering discipline is invisible to clients—a law firm sees "catches 95% of liability issues," not "memory injection prevents drift." This prompt trains you to articulate value in terms that matter to buyers in YOUR industry, which is essential for the Agent Factory thesis of building sellable Digital FTEs.

### Prompt 3: The Improvement Roadmap

```
Based on my [domain] agent setup, what are the 3 highest-impact improvements?For each improvement:1. What specific problem it solves (in my domain context)2. Estimated effort (hours)3. Expected impact on quality scores4. Dependencies (what must exist first)Consider domain-specific factors:- [Legal: compliance requirements, partner review workflows]- [Marketing: brand consistency, multi-channel coordination]- [Research: citation accuracy, methodology rigor]- [Business: quantifiable outcomes, stakeholder communication]- [Development: code quality, security requirements]Prioritize by effort-to-impact ratio. I want the quick wins that move the needle most for my specific domain.
```

**What you're learning:** Continuous improvement requires domain-aware prioritization. Not every improvement matters equally in every field. This prompt trains you to think economically about quality investments—maximizing impact per hour invested for your specific industry. You're learning that quality manufacturing is iterative, not one-shot.

## Chapter Summary

You've completed the context engineering discipline. Here's what you now know:

Lesson

Core Insight

Applies To

1

Context, not prompts, determines agent value

All domains: your expertise IS the value

2

More context isn't better; the 70% threshold matters

Contract review, research synthesis, code analysis

3

Position determines attention; middle = danger zone

Critical rules (legal thresholds, brand voice, standards)

4

30-60% of context is noise; audit ruthlessly

Reference materials, style guides, precedent files

5

Tacit knowledge must be extracted and documented

The expertise that makes YOU valuable

6

Know when to compact vs clear; lifecycle matters

Long reviews, multi-document analysis, deep research

7

Progress files enable multi-session work

Week-long projects across any domain

8

Memory injection prevents workflow drift

Maintaining focus on original brief/requirements

9

Clean context beats dirty state for multi-agent

Complex workflows with multiple specialized agents

10

Decision frameworks turn knowledge into practice

Knowing WHICH technique for WHICH problem

This isn't abstract theory. You've built a production-quality agent for YOUR domain. You've measured its quality against concrete criteria. You've created artifacts you can show to clients—whether they're law firms, marketing agencies, research institutions, or engineering teams.

The Agent Factory thesis is now operational: you know how to manufacture Digital FTEs with quality control. Whether your expertise is in contracts, campaigns, citations, or code—the discipline you've learned here applies to all of them.

Welcome to professional context engineering.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Context Exercises

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/11-context-exercises.md)

# Context Engineering Exercises: The Context Lab

You have spent ten lessons learning how context engineering works. You know that context rots when left unmanaged, that most CLAUDE.md files contain more noise than signal, that position inside the context window determines how much attention an instruction receives, and that multi-session work requires explicit persistence. You understand the theory. Now it is time to prove the theory works by measuring it.

These exercises use a single evolving project: a **Contract Review Agent** that starts broken and gets progressively better as you apply each context engineering technique. The agent reviews legal contracts and produces risk assessments. In its starting state, it misses obvious red flags, contradicts its own earlier findings, and forgets critical requirements mid-session. By Module 7, the same agent will catch every issue, maintain consistency across sessions, and coordinate multiple specialist reviewers without contamination. The difference between the broken version and the production version is not a better model or more data. It is better context engineering.

Every module follows the same pattern: apply a technique, then measure the result. You will run the same three contract review tasks at each stage and score the output using a consistent rubric. This measurement discipline is the most important thing you will learn. Context engineering is not hand-waving about "better prompts." It is an engineering discipline where you can quantify the impact of every change you make.

Download Exercise Files

**[Download Context Engineering Exercises (ZIP)](https://github.com/panaversity/claude-code-context-exercises/releases/latest/download/context-exercises.zip)**

After downloading, unzip the file. Each module has its own folder with an `INSTRUCTIONS.md` and any starter files you need.

If the download link doesn't work, visit the [repository releases page](https://github.com/panaversity/claude-code-context-exercises/releases) directly.

* * *

## How the Context Lab Works

Unlike standalone exercises where each problem is independent, the Context Lab is a **single project that evolves across all 7 modules**. You start with a broken Contract Review Agent and apply one context engineering technique per module. After each technique, you re-run the same three benchmark tasks and score the results. This lets you measure exactly how much each technique contributes.

**The workflow for every module:**

1.  **Read the module folder** from the `context-exercises/` directory
2.  **Read INSTRUCTIONS.md** inside the folder for setup steps and starter files
3.  **Read the walkthrough below** for context on what you are practicing and why
4.  **Apply the technique** (Exercise X.1) — make the specific change described
5.  **Measure the result** (Exercise X.2) — re-run benchmark tasks, score output, compare to previous module
6.  **Record your scores** in the tracking spreadsheet provided — this is your evidence of improvement
7.  **Reflect** on what changed and why

You do not need to complete all 7 modules in one sitting. Each module takes 20-40 minutes. But you must complete them **in order** because each module builds on the previous one.

* * *

## Tool Guide

-   **Claude Code** — Best for all exercises. Terminal-based interaction lets you test context changes, run /clear, manage sessions, and observe context behavior directly.
-   **Cowork** — Suitable for the contract review tasks themselves, but Claude Code is required for exercises involving /clear, /compact, progress files, and multi-agent patterns.

* * *

## The Scoring Framework

Every time you run the three benchmark tasks, score each output on four criteria using a 1-5 scale:

Criteria

1 (Poor)

3 (Adequate)

5 (Excellent)

**Completeness**

Misses more than half the contract issues

Catches major issues, misses minor ones

Identifies all issues including subtle patterns

**Accuracy**

Multiple incorrect risk assessments

Mostly correct, 1-2 errors

All risk levels correctly assessed with reasoning

**Consistency**

Contradicts itself within the same review

Minor inconsistencies between sections

Internally consistent, references its own earlier findings

**Actionability**

Vague warnings like "review this section"

Identifies issues but recommendations are generic

Specific recommendations with clause references and suggested language

**Maximum score per task:** 20 (4 criteria x 5 points) **Maximum score per benchmark run:** 60 (3 tasks x 20 points)

The starter agent typically scores 25-35 out of 60. By Module 7, students routinely reach 50-58.

* * *

## Module 1: Context Rot

> **Technique:** Diagnosing the four types of context rot (Lesson 1)
> 
> **What you will learn:** How to identify accumulation, contradiction, staleness, and poisoning in a real CLAUDE.md — and why each type degrades agent performance differently.

### Exercise 1.1 — Rot Audit

**The Setup:** Open the `module-1-context-rot/exercise-1.1-rot-audit/` folder. You will find a `starter-agent/` directory containing a CLAUDE.md, several rules files, and a skills directory. This is your Contract Review Agent in its broken starting state. The CLAUDE.md is 650 lines long and was accumulated over months of ad-hoc additions by multiple team members.

**Your Task:** Read the entire CLAUDE.md and categorize every section into one of four rot types:

-   **Accumulation** — content that was added over time without removing what it replaced (duplicate rules, overlapping instructions)
-   **Contradiction** — instructions that conflict with each other (e.g., "always use formal tone" vs. "keep it casual and accessible")
-   **Staleness** — content that was accurate when written but is now outdated (references to deprecated tools, old team members, changed processes)
-   **Poisoning** — content that actively causes wrong behavior (incorrect examples, misleading heuristics, rules that produce bad output)

Produce a rot report: a table listing each section, its rot type, and the specific harm it causes. Count the total instructions and estimate what percentage are signal vs. noise.

**What to Expect:** Most students find the starter CLAUDE.md contains 15-25% signal. The rest is rot. The most dangerous category is usually poisoning — instructions that look helpful but actively degrade output quality. Staleness is the most common by volume.

**Reflection Questions:**

1.  Which rot type was hardest to identify? Why?
2.  Did you find any instructions that seemed like signal but were actually poisoning? What made them dangerous?
3.  How would you prevent each rot type from accumulating in the first place?

* * *

### Exercise 1.2 — Baseline Measurement

**The Setup:** Open the `module-1-context-rot/exercise-1.2-baseline-measurement/` folder. You will find three benchmark contract files and a scoring template. The benchmark contracts are designed to test different aspects of review quality: Contract A has obvious liability issues, Contract B has subtle inconsistencies between clauses, and Contract C has standard terms that should NOT be flagged (testing for false positives).

**Your Task:** Run all three benchmark contracts through the starter agent (with the broken CLAUDE.md from Exercise 1.1). For each output, score it on the 4-criteria rubric. Record your scores in the provided tracking spreadsheet. This is your **Module 1 baseline** — every future module will be compared against these scores.

**What to Expect:** Typical baseline scores range from 25-35 out of 60. The agent usually catches the obvious issues in Contract A but misses the subtle inconsistencies in Contract B and produces false positives on Contract C. Consistency scores tend to be lowest because contradictory CLAUDE.md instructions produce contradictory output.

**Reflection Questions:**

1.  Which scoring criterion had the lowest score? Can you trace it back to a specific rot type from Exercise 1.1?
2.  Did the agent produce any false positives on Contract C? What in the CLAUDE.md caused it to over-flag?
3.  What is your prediction for how much improvement Module 2 will deliver?

* * *

## Module 2: Signal vs. Noise

> **Technique:** The 4-question signal audit (Lesson 2)
> 
> **What you will learn:** How to separate actionable instructions from noise, and how dramatically a lean CLAUDE.md outperforms a bloated one.

### Exercise 2.1 — Four-Question Audit

**The Setup:** Open the `module-2-signal-noise/exercise-2.1-four-question-audit/` folder. You will find the CLAUDE.md from Module 1 plus the 4-question audit framework. The four questions are: (1) Would Claude ask about this if not told? (2) Is this specific enough to act on? (3) Does this change Claude's default behavior? (4) Can compliance be verified?

**Your Task:** Apply the 4-question audit to every instruction in the CLAUDE.md. Remove everything that fails all four questions. Compress everything that passes some questions but not all. Keep only content where all four questions answer "yes." Your target is a CLAUDE.md of approximately 400 words — down from the original 650 lines.

Be ruthless. "Write high-quality reviews" fails all four questions (Claude already tries to write high-quality output, it is not specific, it does not change defaults, and compliance cannot be verified). "Flag any clause where liability exceeds 2x contract value" passes all four (Claude would not apply this threshold unprompted, it is specific, it changes behavior, and you can check compliance).

**What to Expect:** Students typically reduce the CLAUDE.md from 650 lines to 40-60 lines. The process is uncomfortable — it feels like you are throwing away important information. The measurement in Exercise 2.2 will show that less is more.

**Reflection Questions:**

1.  How many instructions survived all four questions? What percentage of the original?
2.  What was the hardest instruction to cut? Did it feel important even though it failed the audit?
3.  Where did you move the content you removed? Delete, external file, or skill?

* * *

### Exercise 2.2 — Quality Comparison

**The Setup:** Open the `module-2-signal-noise/exercise-2.2-quality-comparison/` folder. Use the same three benchmark contracts from Module 1, but now run them through the agent with your optimized CLAUDE.md.

**Your Task:** Re-run all three benchmark contracts. Score each output on the same 4-criteria rubric. Compare every score to your Module 1 baseline. Calculate the improvement per criterion and overall.

**What to Expect:** Students typically see a 8-15 point improvement (out of 60) from signal optimization alone. The biggest gains are usually in Consistency (removing contradictions eliminates contradictory output) and Actionability (specific instructions produce specific recommendations). Completeness may stay flat or even dip slightly — you will recover it in Module 3 when you redistribute removed content to the right tools.

**Reflection Questions:**

1.  Which criterion improved most? Does that match what you removed in Exercise 2.1?
2.  Did any criterion get worse? Why might removing content reduce completeness?
3.  If you could only keep 10 instructions in CLAUDE.md, which 10 from your optimized version would you choose?

* * *

## Module 3: Context Architecture

> **Technique:** Mapping content to the right context tool (Lesson 3)
> 
> **What you will learn:** How to distribute information across CLAUDE.md, Skills, Hooks, and Subagents so that each piece lives where it gets the most attention at the lowest token cost.

### Exercise 3.1 — Tool Mapping

**The Setup:** Open the `module-3-architecture/exercise-3.1-tool-mapping/` folder. You will find the content you removed in Module 2 plus a tool mapping worksheet. The worksheet lists each context tool (CLAUDE.md Zones 1/2/3, Skills, Hooks, Subagents, External Files) with its characteristics: when it is loaded, how many tokens it consumes, and what it is best for.

**Your Task:** Take every piece of content you removed from CLAUDE.md in Module 2 and map it to the correct tool:

-   **Zone 1 (top of CLAUDE.md):** Critical constraints that must always apply — the 3-5 rules that should never be forgotten
-   **Zone 2 (middle of CLAUDE.md):** Reference material consulted when relevant
-   **Zone 3 (bottom of CLAUDE.md):** Workflow triggers and session initialization protocols
-   **Skills:** Domain expertise that should be loaded on demand (e.g., specific legal review checklists)
-   **Hooks:** Dynamic injections based on what the agent is currently doing (e.g., inject relevant precedent when analyzing liability clauses)
-   **Subagents:** Specialized tasks that benefit from isolated context (e.g., separate financial analysis from legal analysis)
-   **External Files:** Stable reference material that rarely changes (e.g., company contract templates, approved clause language)

Create the actual files: write the skills, define the hook logic, specify the subagent prompts. Your Contract Review Agent should now have a multi-file context architecture, not just a single CLAUDE.md.

**What to Expect:** Most students distribute content roughly: 30% stays in CLAUDE.md (across all three zones), 25% becomes skills, 15% becomes hook triggers, 10% defines subagent scope, and 20% moves to external reference files. The exact distribution depends on the content, but a common mistake is keeping too much in CLAUDE.md because it "feels safer."

**Reflection Questions:**

1.  Which content was hardest to place? What made the decision difficult?
2.  Did you find content that did not belong in any tool? What did you do with it?
3.  How many tokens does your CLAUDE.md consume now vs. Module 1? What is the percentage reduction?

* * *

### Exercise 3.2 — Token Budget

**The Setup:** Open the `module-3-architecture/exercise-3.2-token-budget/` folder. You will find a token budget calculator and instructions for estimating the token cost of your architecture.

**Your Task:** Calculate the token budget for two scenarios:

1.  **Module 1 architecture** (everything in CLAUDE.md): Estimate the token cost at session start, at turn 10, and at turn 30.
2.  **Module 3 architecture** (distributed across tools): Estimate the same three measurements, accounting for skills loaded on-demand, hooks that fire conditionally, and subagents that run in isolated contexts.

Produce a comparison table showing: tokens consumed at each measurement point, percentage of context window used, and estimated attention quality based on the utilization curves from Lesson 6.

**What to Expect:** The distributed architecture typically uses 40-60% fewer tokens at session start and degrades much more slowly over a 30-turn session. The most dramatic difference appears at turn 30, where the monolithic approach is often at 65-75% utilization (degraded attention) while the distributed approach stays at 35-45% (full attention).

**Reflection Questions:**

1.  At which measurement point is the difference between architectures largest? Why?
2.  Which tool contributes the most token savings? Skills (on-demand loading) or Subagents (isolated contexts)?
3.  What is the theoretical maximum number of turns before each architecture hits the 70% degradation threshold?

* * *

## Module 4: Persistence

> **Technique:** Task DAGs and tacit knowledge extraction (Lessons 4-5)
> 
> **What you will learn:** How to make your agent's work survive session boundaries — so that /clear does not destroy accumulated understanding.

### Exercise 4.1 — Tasks and Knowledge

**The Setup:** Open the `module-4-persistence/exercise-4.1-tasks-and-knowledge/` folder. You will find a multi-session contract review scenario: a complex 50-page vendor agreement that requires analysis across multiple sessions. The scenario includes session transcripts showing how a naive agent loses context between sessions.

**Your Task:** Design two persistence artifacts for the Contract Review Agent:

1.  **Task DAG:** Decompose the 50-page contract review into a dependency graph of tasks. Which sections can be reviewed independently? Which require understanding from earlier sections (e.g., definitions in Section 1 affect interpretation of liability in Section 15)? Express this as a task file with dependencies and completion status.
    
2.  **Tacit Knowledge File:** Read the session transcripts and extract every piece of domain knowledge the agent discovered during review — interpretation of ambiguous clauses, relationships between sections, client-specific preferences. Encode these as explicit rules in a knowledge file that a fresh session can read.
    

**What to Expect:** The task DAG typically has 8-12 tasks with 3-5 dependency chains. Students often underestimate dependencies — Section 15 (liability) depends not just on Section 1 (definitions) but also Section 8 (scope of work) because liability limits reference deliverable categories. The tacit knowledge file usually captures 10-15 rules that were implicit in the session transcripts.

**Reflection Questions:**

1.  How many dependency chains did you identify? Were any circular (A depends on B depends on A)?
2.  Which tacit knowledge rules were hardest to extract? Were they buried in casual observations or explicit decisions?
3.  Could a new team member use your task DAG and knowledge file to continue the review without reading the session transcripts?

* * *

### Exercise 4.2 — Survival Test

**The Setup:** Open the `module-4-persistence/exercise-4.2-survival-test/` folder. You will find instructions for the survival test: run a partial contract review session, execute /clear, then resume and verify continuity.

**Your Task:** Conduct this three-phase test:

1.  **Phase 1 (Pre-clear):** Start a session with your Contract Review Agent (using the Module 3 architecture + Module 4 persistence files). Review Contract A partially — complete 3 of the task DAG items. Note specific findings and decisions.
    
2.  **Phase 2 (The clear):** Execute `/clear` to wipe the conversation context. This simulates a session boundary.
    
3.  **Phase 3 (Post-clear):** Start a new message in the same session. The agent should read the task DAG and knowledge file to reconstruct state. Verify: Does it know which tasks are complete? Does it remember the findings from Phase 1? Can it continue the review without re-doing work?
    

Score the post-clear session on the same 4-criteria rubric and compare to pre-clear quality.

**What to Expect:** With well-designed persistence files, post-clear quality typically scores within 2-3 points of pre-clear quality. The most common failure is losing tacit knowledge — findings that were discovered during Phase 1 but not captured in the knowledge file. Students who wrote thorough knowledge files in Exercise 4.1 see nearly perfect continuity.

**Reflection Questions:**

1.  What information was lost after /clear? Was it captured in your persistence files or only in conversation history?
2.  How long did it take the agent to "warm up" after /clear? What determined warmup time?
3.  If you could add one more persistence artifact to improve continuity, what would it be?

* * *

## Module 5: Lifecycle

> **Technique:** Context zone monitoring and compaction strategy (Lessons 6-7)
> 
> **What you will learn:** How to keep your agent performing well across long sessions by actively managing context utilization and knowing when to compact.

### Exercise 5.1 — Zone Monitoring

**The Setup:** Open the `module-5-lifecycle/exercise-5.1-zone-monitoring/` folder. You will find a 25-turn contract review session script and a zone monitoring worksheet. The worksheet tracks context utilization at each turn: how much is system prompt, CLAUDE.md, conversation history, tool outputs, and reserve.

**Your Task:** Execute the 25-turn session with your Contract Review Agent. At turns 1, 5, 10, 15, 20, and 25, estimate the context composition:

-   **Zone 1 (System + CLAUDE.md):** Approximately stable across turns
-   **Zone 2 (Conversation history):** Grows with each turn
-   **Zone 3 (Tool outputs):** Spikes when reading files, then gets compressed
-   **Reserve:** Shrinks as other zones grow

Plot these on the utilization curve. Identify the turn where utilization crosses 60% (caution zone) and predict when it would cross 70% (degradation zone).

Add a progress file that the agent updates every 5 turns with: current task state, key findings since last update, and context health assessment.

**What to Expect:** Most agents cross 60% utilization between turns 15-20, depending on how many files they read. The progress file adds 200-400 tokens per update but pays for itself by enabling effective compaction later. Students often discover that tool outputs (reading contract sections) are the biggest context consumer — not conversation history.

**Reflection Questions:**

1.  At which turn did utilization cross 60%? Was it sooner or later than you expected?
2.  What was the biggest context consumer — conversation history, tool outputs, or something else?
3.  How would you redesign the workflow to delay the 60% threshold?

* * *

### Exercise 5.2 — Compaction Strategy

**The Setup:** Open the `module-5-lifecycle/exercise-5.2-compaction-strategy/` folder. You will find compaction instruction templates and a comparison framework.

**Your Task:** Design and test three compaction strategies for your Contract Review Agent at the 60% threshold:

1.  **Naive compaction:** `/compact Keep the important stuff`
2.  **Structured compaction:** `/compact Preserve: [specific decisions, findings, current task]. Discard: [exploration, intermediate reasoning, resolved questions].`
3.  **Progress-file compaction:** Update the progress file first, then `/compact Preserve only what is NOT in claude-progress.txt. The progress file is the source of truth for decisions and findings.`

Run each strategy and continue the review for 10 more turns. Score the output quality at turn 35 (10 turns after compaction) using the 4-criteria rubric.

**What to Expect:** Naive compaction typically loses 30-50% of critical context. Structured compaction preserves most decisions but may lose rationale. Progress-file compaction consistently produces the best results because the critical context is safely persisted outside the context window before compaction discards it. The quality scores after compaction usually tell the story clearly.

**Reflection Questions:**

1.  Which compaction strategy preserved the most quality? By how many points?
2.  What did naive compaction lose that you did not expect?
3.  When should you compact proactively (before hitting 60%) vs. reactively (after hitting 60%)?

* * *

## Module 6: Memory

> **Technique:** Designing a memory corpus for domain expertise (Lesson 8)
> 
> **What you will learn:** How to build a persistent memory layer that makes your agent smarter over time — so turn 20 reviews are better than turn 1 reviews.

### Exercise 6.1 — Memory Corpus

**The Setup:** Open the `module-6-memory/exercise-6.1-memory-corpus/` folder. You will find a set of 10 previously reviewed contracts with annotated findings. These represent the "experience" your agent should learn from. You will also find a memory corpus template.

**Your Task:** Design a memory corpus for the contract review domain. For each of the 10 previously reviewed contracts, extract:

-   **Patterns:** Recurring clause structures that indicate risk (e.g., "unlimited liability language often appears in Section 12 of vendor agreements")
-   **Precedents:** Specific decisions and their rationale (e.g., "rejected auto-renewal clause in Contract #3 because client requires explicit opt-in")
-   **Heuristics:** Rules of thumb learned from experience (e.g., "when indemnification exceeds 3x contract value, flag for executive review")

Organize these into a searchable memory structure. Define the injection strategy: which memories should be injected via hooks (PreToolUse), which should live in the knowledge file (always available), and which should be retrieved on-demand from external files.

**What to Expect:** Students typically extract 25-40 memories from the 10 contracts. The hardest part is deciding granularity — a memory that is too broad ("watch out for liability clauses") is noise, while one that is too narrow ("Contract #3, Section 12.4(b) had a typo") is not transferable. The best memories are pattern-level: specific enough to act on, general enough to apply to new contracts.

**Reflection Questions:**

1.  How many memories did you extract? How many were patterns vs. precedents vs. heuristics?
2.  Which injection strategy did you choose for each type? Why?
3.  How would you handle memory conflicts — when a new contract contradicts a previously learned pattern?

* * *

### Exercise 6.2 — Drift Measurement

**The Setup:** Open the `module-6-memory/exercise-6.2-drift-measurement/` folder. You will find instructions for a controlled comparison test.

**Your Task:** Run a controlled experiment:

1.  **Turn 1 review:** Start a fresh session with your memory-enhanced agent. Review a new benchmark contract (Contract D, provided in the folder). Score the output.
2.  **Turn 20 review:** Continue the session for 19 more turns of contract review work (the folder provides review tasks to fill the turns). Then review Contract D again at turn 20. Score the output.
3.  **Compare:** Did the agent's review improve, degrade, or stay the same between turn 1 and turn 20?

The key question: does your memory injection system maintain quality as the session progresses, or does accumulated conversation history dilute the injected memories?

**What to Expect:** With well-designed memory injection, turn 20 quality should be equal to or better than turn 1 — the agent has more context from the session's work. Without proper injection, turn 20 quality typically degrades by 3-5 points as conversation history crowds out memory content. Students who implemented deduplication in their hook design see the most stable results.

**Reflection Questions:**

1.  Did turn 20 quality improve, degrade, or stay the same compared to turn 1? By how many points?
2.  If quality degraded, what caused it? Too many memories injected? Conversation history diluting signal?
3.  How would you modify your injection strategy to ensure quality never degrades below the turn 1 baseline?

* * *

## Module 7: Isolation

> **Technique:** Multi-agent pipeline with clean context boundaries (Lesson 9)
> 
> **What you will learn:** How to split a complex review into parallel specialist agents that produce better results than a single generalist — by keeping each agent's context clean and focused.

### Exercise 7.1 — Pipeline Design

**The Setup:** Open the `module-7-isolation/exercise-7.1-pipeline-design/` folder. You will find a complex contract (Contract E) that requires expertise in three domains: legal terms, financial analysis, and operational feasibility. You will also find a pipeline design template.

**Your Task:** Split the Contract Review Agent into a multi-agent pipeline:

1.  **Orchestrator:** Receives the contract, delegates to specialists, synthesizes findings
2.  **Legal Reviewer:** Analyzes legal terms, liability, compliance — with legal-specific CLAUDE.md and skills
3.  **Financial Analyst:** Analyzes pricing, payment terms, financial risk — with finance-specific context
4.  **Operations Assessor:** Analyzes implementation timeline, resource requirements, feasibility — with operations-specific context

For each agent, define:

-   Its isolated CLAUDE.md (only instructions relevant to its specialty)
-   Its return format (structured summary, not raw analysis)
-   Shared constraints (baseline contract terms all agents must assume)

For the orchestrator, define:

-   How it delegates (what context each specialist receives)
-   How it synthesizes (what format it expects back)
-   How it handles conflicts between specialists

**What to Expect:** The biggest design challenge is the orchestrator's synthesis prompt. Students who simply concatenate specialist outputs get confused results. Students who define structured return formats (Summary, Key Findings, Risk Level, Recommendations) and synthesize by category get clean, coherent final reports. The shared constraints document is often overlooked but critical — without it, specialists make incompatible assumptions.

**Reflection Questions:**

1.  How much context overlap exists between your three specialists? Could you reduce it further?
2.  What happens if the Legal Reviewer flags a clause as high-risk but the Financial Analyst says the financial terms are favorable? How does your orchestrator resolve this?
3.  How many tokens does each specialist consume compared to the single-agent approach?

* * *

### Exercise 7.2 — Clean vs. Dirty

**The Setup:** Open the `module-7-isolation/exercise-7.2-clean-vs-dirty/` folder. You will find instructions for a head-to-head comparison test.

**Your Task:** Run Contract E through two architectures and compare:

1.  **Dirty slate:** Give one agent all three specialist contexts (legal + financial + operations) in a single CLAUDE.md. Run the full review. Score the output.
2.  **Clean slate:** Use your multi-agent pipeline from Exercise 7.1. Run the same review. Score the output.

Compare scores across all four criteria. Pay special attention to Accuracy (does the dirty-slate agent conflate legal and financial concepts?) and Consistency (does it maintain clear boundaries between analysis domains?).

**What to Expect:** The clean-slate pipeline typically scores 5-10 points higher than the dirty-slate single agent. The largest gains are in Accuracy and Consistency — isolated contexts prevent the cross-contamination that happens when legal, financial, and operational reasoning share the same attention space. Completeness often improves too, because specialists catch domain-specific issues that a generalist overlooks.

**Reflection Questions:**

1.  Where did the clean-slate pipeline outperform the dirty-slate agent most? Does this match the theory from Lesson 9?
2.  Did the dirty-slate agent make any errors that were clearly caused by context contamination — where information from one domain corrupted analysis in another?
3.  What is the overhead cost (latency, complexity) of the multi-agent pipeline? Is the quality improvement worth it?

* * *

## Capstone Projects

> **Choose one (or more). These combine all seven modules — no step-by-step guidance provided.**

Capstones are different from the module exercises. There are no guided walkthroughs — you design the entire approach yourself. Each project requires applying multiple context engineering techniques together to solve a realistic problem.

### Capstone A — Your Domain Agent

Open the `capstone-A-your-domain-agent/` folder. You will find a project template and self-assessment rubric.

**The Challenge:** Build a production-quality agent for **your own profession or domain** using all seven context engineering techniques. This is not a contract review agent — it is an agent that does work you actually need done. A teacher might build a lesson planning agent. A marketer might build a campaign review agent. A developer might build a code review agent.

Apply every technique from the Context Lab:

-   Audit for rot and optimize signal-to-noise ratio
-   Distribute context across the right tools
-   Design persistence that survives session boundaries
-   Implement lifecycle management with compaction strategy
-   Build a memory corpus from your domain expertise
-   If applicable, design multi-agent isolation for complex workflows

**Deliverable:** A complete agent directory with CLAUDE.md, skills, hooks, persistence files, and memory corpus. Include a self-assessment scoring your agent on the Context Engineering Assessment Rubric (below).

* * *

### Capstone B — Context Relay

Open the `capstone-B-context-relay/` folder. You will find a 3-session project specification.

**The Challenge:** Execute a complex project across three separate Claude Code sessions. The project requires building a small application (specified in the folder). The constraint: each session must start fresh (/clear between sessions). Your only continuity comes from the persistence artifacts you create.

-   **Session 1:** Requirements analysis and architecture design. Persist everything needed for Session 2.
-   **Session 2:** Implementation. Read Session 1's artifacts, build the application, persist state for Session 3.
-   **Session 3:** Testing and refinement. Read Session 2's artifacts, verify the implementation, fix issues.

**Scoring:** Compare the quality of Session 3's output to what a single uninterrupted session would produce. Effective context engineering should make the multi-session version nearly as good as the single-session version.

* * *

### Capstone C — Forensics Challenge

Open the `capstone-C-forensics-challenge/` folder. You will find three broken agents, each failing for a different context engineering reason.

**The Challenge:** Diagnose each agent's failure without being told what is wrong. For each agent:

1.  Run it on a test task and observe the failure mode
2.  Audit its context artifacts (CLAUDE.md, skills, hooks, persistence files)
3.  Identify the root cause using context engineering principles
4.  Fix the agent and verify the fix with a re-test

The three agents have different problems — one is a rot issue, one is an architecture issue, and one is an isolation issue. You must determine which is which.

**Scoring:** For each agent, assess: (1) Did you correctly identify the failure type? (2) Was your root cause analysis accurate? (3) Did your fix resolve the problem without introducing new issues?

* * *

## The Context Engineering Assessment Rubric

Use this rubric to evaluate your overall context engineering skill after completing the modules. This is also the rubric for Capstone A.

Criteria

Beginner (1)

Developing (2)

Proficient (3)

Advanced (4)

**Context Diagnosis**

Cannot identify rot types

Identifies rot but cannot classify by type

Identifies and classifies all four rot types; produces actionable rot report

Spots rot proactively; predicts which instructions will rot fastest

**Architecture Design**

Everything in one CLAUDE.md

Uses CLAUDE.md zones but nothing else

Maps content to correct tools; calculates token budget impact

Designs adaptive architectures where context loads dynamically based on task

**Persistence Engineering**

No persistence — loses everything on /clear

Basic progress file with task list

Task DAG with dependencies + tacit knowledge extraction; survives /clear cleanly

Designs persistence that improves over time as more sessions contribute knowledge

**Lifecycle Management**

No awareness of context utilization

Monitors utilization but compacts reactively

Proactive compaction strategy with structured instructions; manages all three zones

Designs compaction protocols that are automated via hooks and progress files

**Advanced Patterns**

No memory or isolation

Basic memory file; single-agent only

Memory corpus with injection strategy; multi-agent pipeline with clean handoff

Memory with deduplication and decay; isolation patterns optimized for domain-specific analysis

* * *

## Measuring Your Transformation

If you completed all seven modules in order, you now have a complete measurement trail: baseline scores from Module 1, incremental improvements from each module, and a final score from Module 7. Review your tracking spreadsheet and answer these questions:

1.  **Total improvement:** What is the difference between your Module 1 baseline and your Module 7 final score? Express it as both points and percentage.
    
2.  **Biggest single improvement:** Which module produced the largest score jump? Why do you think that technique had the most impact on your specific agent?
    
3.  **Diminishing returns:** Did later modules produce smaller improvements than earlier ones? If so, what does that tell you about the order of operations for context engineering?
    
4.  **Criterion analysis:** Which of the four scoring criteria (Completeness, Accuracy, Consistency, Actionability) improved most across all seven modules? Which improved least?
    
5.  **The meta-lesson:** You transformed a 25-35 point agent into a 50-58 point agent without changing the model, adding training data, or writing code. The only variable was context engineering. What does this tell you about where to invest your effort when building AI agents?
    

* * *

## What's Next

You have practiced the three core skills — **context diagnosis** (identifying what is wrong with an agent's context), **context architecture** (designing where information should live), and **context engineering** (building production-quality context systems) — across 14 exercises and up to 3 capstones. These skills compound: every exercise builds intuition for recognizing context problems and knowing which technique to apply. Context engineering is not a one-time setup activity — it is an ongoing discipline that separates agents that degrade over time from agents that improve over time. Next in **Lesson 12: Chapter Quiz**, you will test your conceptual understanding of all context engineering principles and their interactions. The quiz focuses on scenario-based reasoning — exactly the kind of diagnosis you practiced throughout the Context Lab.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 4: Effective Context Engineering with General Agents](/docs/General-Agents-Foundations/context-engineering)
-   Chapter 4: Context Engineering Quiz

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/04-context-engineering/12-chapter-quiz.md)

# Chapter 4 Quiz: Context Engineering

This diagnostic assessment evaluates your judgment in real-world context engineering scenarios. Each question presents a situation requiring you to reason about tradeoffs, identify failure modes, and select appropriate interventions.

**Target audience:** Practitioners who will architect long-running agent systems.

Checking access...

---

Source: https://agentfactory.panaversity.org/docs/01-General-Agents-Foundations/04-context-engineering
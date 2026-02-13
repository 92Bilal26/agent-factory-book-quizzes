# General Agents Foundations: Spec Driven Development

> Downloaded from Agent Factory on 2/12/2026
> Total lessons: 10

## Table of Contents

1. [Why Specs Beat Vibe Coding](#why-specs-beat-vibe-coding)
2. [The Three Levels of SDD](#the-three-levels-of-sdd)
3. [The Four-Phase Workflow](#the-four-phase-workflow)
4. [Phase 1: Parallel Research with Subagents](#phase-1-parallel-research-with-subagents)
5. [Phase 2: Writing Effective Specifications](#phase-2-writing-effective-specifications)
6. [Phase 3: Refinement via Interview](#phase-3-refinement-via-interview)
7. [Phase 4: Task-Based Implementation](#phase-4-task-based-implementation)
8. [The Decision Framework](#the-decision-framework)
9. [Practical SDD Exercises](#practical-sdd-exercises)
10. [Chapter 5: Spec-Driven Development Quiz](#chapter-5-spec-driven-development-quiz)

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Why Specs Beat Vibe Coding

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/01-why-specs-beat-vibe-coding.md)

# Why Specs Beat Vibe Coding

You ask Claude to write a report about personal AI employees. It generates a draft. You realize you wanted more focus on business ROI, so you ask for that. Claude rewrites—but now the technical details you liked are gone. You clarify, and Claude apologizes and adds them back—but the structure is completely different. Twenty minutes later, you have a document that technically addresses your topic but reads like three different authors with conflicting views.

Sound familiar?

This is **vibe coding**—the natural way people first approach AI assistants. You have a vague idea, you describe it, and AI generates something. You refine through conversation. Sometimes it works brilliantly. Other times, you spend more time correcting than you would have spent writing it yourself.

The problem is not the AI. The problem is the workflow. Vibe coding fails systematically for substantial work, and understanding why reveals the solution.

## The Vibe Coding Pattern

Vibe coding follows a predictable cycle:

```
Prompt → Output → "No, I meant..." → Output → "Actually..." → Output → Repeat
```

Each iteration seems like progress. You're getting closer to what you want. But something corrosive happens beneath the surface.

Consider this real conversation (simplified for clarity):

**Turn 1:** "Write a report about personal AI employees in 2026."

Claude generates a broad overview covering tools, use cases, and future predictions.

**Turn 5:** "Focus more on business ROI and cost savings."

Claude rewrites with heavy business focus, but drops the specific tool comparisons you found useful.

**Turn 9:** "Bring back the tool comparisons, but keep the ROI focus."

Claude attempts to merge both, but the structure becomes inconsistent—some sections are technical, others are business-focused.

**Turn 14:** "Why does this read like a blog post? I needed something more like a research report with citations."

Claude apologizes and restructures, but the ROI analysis you refined is now buried in an appendix.

**Turn 20:** You give up and start over.

What went wrong? Not any single turn—each response was reasonable given the question asked. The failure is structural.

## Three Failure Modes

Vibe coding fails in three predictable ways. Once you recognize these patterns, you'll see them everywhere.

### 1\. Context Loss: Each Iteration Loses Discoveries

When you ask Claude to add ROI focus in Turn 5, it focuses on that request. The nuances you established in earlier turns—the specific tools you wanted compared, the technical depth you appreciated, the structure that was working—fade from attention. Not because Claude forgot (they're technically still in context), but because newer information receives more weight.

**The mechanism**: Each new request shifts focus. Previous decisions become background noise. With enough turns, early requirements are effectively invisible.

**What it looks like**:

-   Content that worked gets rewritten after unrelated changes
-   Decisions you made early get silently reversed later
-   You find yourself re-explaining the same constraints

### 2\. Assumption Drift: Reasonable Guesses Diverge from Intent

You said "report about personal AI employees." Claude reasonably assumed:

-   You wanted a broad overview for general readers
-   Blog-style format would be accessible
-   Predictions about the future would be interesting

Each assumption is defensible. A thoughtful writer might make the same choices. But you needed a research report for technical decision-makers. Your audience wants citations and evidence. You need specific tool comparisons, not general predictions.

**The mechanism**: Without explicit constraints, AI fills gaps with reasonable defaults. Those defaults compound, and by Turn 10, you're editing a document written for an audience you don't have.

**What it looks like**:

-   Output technically addresses your topic but feels wrong
-   You discover structural decisions you didn't ask for
-   Fixes require understanding an approach you didn't choose

### 3\. Pattern Violations: Generated Output Ignores Your Standards

Turn 14 reveals the deepest problem. Claude wrote blog-style content because that's a reasonable pattern for "reports." But your work has specific standards: research reports have methodology sections, claims need citations, structure follows academic conventions.

**The mechanism**: Without knowledge of your specific standards, AI follows general best practices. Those practices may directly contradict your requirements.

**What it looks like**:

-   Output works but doesn't fit your standards
-   Colleagues question why the format is inconsistent
-   "Fixing" requires substantial restructuring

## The Compounding Problem

These three modes don't just occur—they amplify each other.

Context loss means you stop re-explaining constraints. Assumption drift means Claude fills those gaps with defaults. Pattern violations mean the defaults conflict with your architecture. By Turn 15, you're not iterating toward your goal. You're managing an increasingly divergent codebase.

Turn

Context Loss

Assumption Drift

Pattern Violations

1-5

Minimal

Beginning

Undetected

6-10

Noticeable

Compounding

Emerging

11-15

Significant

Structural

Blocking

16+

Critical

Architectural

Requires rewrite

The further you go, the harder correction becomes. This is why vibe coding works for simple tasks but fails for complex ones.

## The Context Engineering Connection

In Chapter 4, you learned that context quality determines agent reliability. The three vibe coding failure modes are actually **context engineering failures**:

Failure Mode

Context Engineering Problem

Context loss

Violates persistence principle (Ch 4, Lesson 7)

Assumption drift

Missing constraints in context (Ch 4, Lesson 5)

Pattern violations

Architecture not in working memory (Ch 4, Lesson 2)

Specifications solve these by applying context engineering systematically—front-loading the context Claude needs rather than discovering it through iteration. The spec becomes the **persistent, high-signal context** that Chapter 4 taught you to build.

## The Insight: Claude Needs the Complete Picture Upfront

The solution is surprisingly simple once you see the problem clearly.

Claude can write your report correctly on the first try—if it knows:

-   **What exists**: Your current tables, patterns, and architecture
-   **What to build**: Specific requirements, not vague features
-   **What NOT to build**: Explicit constraints and boundaries
-   **How to validate**: Success criteria that can be verified

The pattern for all three failure modes is the same: information Claude needed but didn't have. Context loss happens because requirements weren't written down. Assumption drift happens because constraints weren't explicit. Pattern violations happen because existing architecture wasn't communicated.

**The specification captures this information once, upfront.**

Failure Mode

Prevented By

Context loss

Written requirements that persist across turns

Assumption drift

Explicit constraints that eliminate guessing

Pattern violations

Architecture documentation that defines patterns

This is the foundation of Spec-Driven Development: front-loading the information Claude needs rather than discovering it through iteration.

## Try With AI

**Running Example:** Throughout this chapter, you'll write a real report: "Personal AI Employees in 2026." This lesson lets you experience why vibe coding fails for this task.

**Prompt 1: Experience the Problem**

```
Write a report about personal AI employees in 2026—tools likeClaude Code, Cowork, and similar systems that function asdigital teammates.
```

After Claude generates the draft, follow up: "Focus more on business ROI," then "Add specific tool comparisons," then "Make it more like a research report with citations." Notice how each iteration changes or loses earlier decisions.

**What you're learning:** Each clarification shifts focus. By the third iteration, the structure you liked may have disappeared. The tool comparisons get buried. This is the vibe coding failure pattern in action.

**Prompt 2: Surface the Assumptions**

```
Look at the report you just wrote. List every assumption you made:- Who is the target reader?- What do they already know about AI tools?- What format did you choose and why?- What did you emphasize vs skip?For each assumption, what should you have asked me first?
```

**What you're learning:** Claude made dozens of implicit decisions—general audience vs technical, blog format vs research report, breadth vs depth. These assumptions, not your topic, caused the iteration cycles. The questions Claude identifies are the outline of a specification.

**Prompt 3: Preview the Solution**

```
If I had given you a specification upfront:- Audience: CTOs evaluating AI tools for their teams- Format: Research report with executive summary- Required sections: Tool comparison, ROI analysis, implementation risks- Constraints: 2000 words, include citations, no speculationHow would your first draft have been different?
```

**What you're learning:** The specification you DIDN'T write caused the iteration. With constraints (no speculation), audience (CTOs), and format (research report) defined upfront, Claude's first draft would have matched your needs. This is why specs beat vibe coding.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   The Three Levels of SDD

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/02-three-levels-of-sdd.md)

# The Three Levels of SDD

In Lesson 1, you experienced why vibe coding fails: context loss, assumption drift, and pattern violations compound until your AI produces unusable output. Specifications solve this by giving Claude the complete picture upfront.

But not all specifications are created equal. Some are planning artifacts you throw away after implementation. Others become living documentation that evolves with your codebase. And at the experimental frontier, some teams treat specifications as the only artifact worth maintaining, regenerating code on demand.

Understanding where you operate on this spectrum helps you calibrate your effort. You don't need enterprise-grade living documentation for a weekend project. But you also shouldn't throwaway specs for a system your team will maintain for years.

## The Three Levels

Level

Creation

Maintenance

Use Case

**Spec-First**

Spec guides implementation

Spec discarded after

Most common; quick tasks

**Spec-Anchored**

Spec written first

Both spec + code maintained

Team projects; living documentation

**Spec-as-Source**

Spec is primary artifact

Only spec edited; code regenerated

Experimental (Tessl approach)

Let's examine each level.

## Level 1: Spec-First (Most Common)

**You write the spec. Claude implements it. You move on.**

This is where most practitioners operate, and for good reason. For 80% of tasks, the specification served its purpose the moment Claude finished implementing it. The spec prevented vibe coding, ensured Claude had complete context, and resulted in working code.

After that? The spec becomes historical record at best, garbage at worst.

### When Spec-First Works

-   Single-session tasks that won't require revisiting
-   Personal projects without team coordination
-   Prototypes and experiments
-   Bug fixes where the spec is the fix description

### The Trade-off

**Benefit**: Zero maintenance overhead. Write once, implement once, done.

**Cost**: Six months later, when you need to modify the feature, you have no specification. You're reading code to understand intent, which is exactly the problem specifications solve.

### Example: Personal AI Employees Report (Spec-First)

```
# Personal AI Employees Report Specification## IntentWrite a one-time report analyzing the 2026 landscape of AI toolsthat function as digital employees (Claude Code, Cowork, etc.).## Requirements- Executive summary for quick scanning- Tool comparison section (Claude Code, Cursor, Copilot)- ROI analysis with concrete metrics- Implementation risks and mitigations## Constraints- 2000 words maximum- Target audience: CTOs evaluating tools- No speculation—only documented capabilities## Success Criteria- Reader can compare tools on key dimensions- ROI section includes specific cost/benefit numbers- Risks are actionable, not vague warnings
```

Claude writes it. You publish it. The spec gets filed somewhere you'll never look again. This is perfectly appropriate for a one-time deliverable.

## Level 2: Spec-Anchored (Team Standard)

**Both specification and code are maintained artifacts.**

When you work with a team, specifications become documentation. A new analyst joining in month six shouldn't need to reverse-engineer your report methodology from the final document. They should read the spec and understand how to update it.

### When Spec-Anchored Works

-   Team projects with multiple contributors
-   Systems requiring compliance documentation
-   Products with long maintenance horizons
-   Features that will undergo multiple iterations

### The Trade-off

**Benefit**: Specifications serve as onboarding documentation, architectural decision records, and implementation guides. When requirements change, you update the spec first, then the code, maintaining alignment.

**Cost**: Double maintenance burden. Every code change potentially requires a spec change. Specs and code can drift out of sync if discipline lapses.

### The Discipline Requirement

Spec-Anchored only works if you enforce the discipline:

1.  **Spec changes before code changes.** Always.
2.  **Code reviews check spec alignment.** Reviewers verify the spec was updated.
3.  **Specs live near code.** Not in a separate wiki no one visits.

When teams adopt Spec-Anchored without this discipline, they get the worst outcome: outdated specs that actively mislead readers, combined with maintenance overhead that provides no value.

### Example: The Same Report, Anchored

The spec from Level 1 becomes a living document—updated quarterly as the AI landscape evolves:

```
reports/  personal-ai-employees/    spec.md              # Living specification    changelog.md         # History of updates    decisions/           # Why we track these metrics    2026-q1-report.md    # Generated from spec
```

When you later need to add a new tool to the comparison, you:

1.  Update `spec.md` with the new requirements
2.  Have Claude implement against the updated spec
3.  Commit both spec and code changes together

An analyst joining the team reads `spec.md` and understands the report methodology without reverse-engineering the final document.

## Level 3: Spec-as-Source (Experimental)

**The specification is the primary artifact. Code is regenerated on demand.**

This is the frontier. Companies like Tessl are exploring a world where you never edit code directly. You edit specifications, and AI regenerates the implementation. Code becomes a build artifact, like compiled binaries.

### The Appeal

Think about it: if Claude can generate code reliably from specifications, why maintain code at all? Code has bugs, requires refactoring, accumulates technical debt. Specifications express intent directly.

In this model:

-   You edit the spec to add a feature
-   AI regenerates affected code
-   Tests verify the generation
-   Code is never manually modified

### The Problem: Determinism

Here's where Spec-as-Source breaks down in practice:

**Identical specifications do not produce identical code.**

Ask Claude to implement the same spec twice. You'll get functionally equivalent but syntactically different implementations. Variable names differ. Control flow varies. Comments appear or disappear.

For production systems, this creates problems:

-   Git diffs become meaningless (every regeneration is a massive diff)
-   Debugging becomes harder (which generation introduced the bug?)
-   Performance characteristics vary unpredictably
-   Third-party integrations may break on regeneration

### The MDD Parallel

This isn't a new challenge. Model-Driven Development (MDD) promised the same transformation in the 2000s: write models, generate code, never touch implementation.

MDD failed to achieve mainstream adoption for the same reasons Spec-as-Source struggles:

-   Generated code needed manual patches for edge cases
-   Models couldn't express all implementation concerns
-   The abstraction leaked, requiring developers to understand both layers

AI-powered generation is more flexible than MDD code generators, but the determinism problem remains unsolved.

### When to Consider Spec-as-Source

Despite challenges, Spec-as-Source makes sense for:

-   **Highly repetitive code**: CRUD operations, API clients, data transformations
-   **Disposable code**: Scripts, one-time migrations, proof-of-concepts
-   **Environments with strong test coverage**: When tests validate behavior, implementation variance matters less

For a production web application with years of expected maintenance? Spec-Anchored remains the safer choice.

## Choosing Your Level

Most practitioners should default to **Spec-First** and graduate to **Spec-Anchored** when:

-   Working with a team (2+ people)
-   Building something with 6+ month maintenance horizon
-   Creating systems that require compliance documentation
-   Developing features that will undergo multiple iterations

Reserve **Spec-as-Source** experimentation for:

-   Personal projects with strong test coverage
-   Highly repetitive, well-understood domains
-   Situations where you're willing to accept regeneration variance

## The Maturity Spectrum

Think of these levels as a maturity spectrum you can adopt gradually:

**Week 1**: Start with Spec-First. Write specs before asking Claude to implement. Experience the improvement over vibe coding.

**Month 1**: For projects you'll maintain, try Spec-Anchored. Keep specs alongside code. Update specs when requirements change.

**Later**: When you have strong test coverage and understand the trade-offs, experiment with Spec-as-Source for appropriate use cases.

You don't need to commit to one level for all projects. A solo weekend project is Spec-First. Your team's core product is Spec-Anchored. That AI-generated API client you regenerate weekly might be Spec-as-Source.

## Try With AI

**Prompt 1: Level Classification for Real Projects**

```
I'm building a CLI tool that generates project scaffolding for my team.It will be used by 8 developers, maintained for 2+ years, and needsclear documentation for onboarding new team members.Which SDD level fits this scenario? Walk me through your reasoningconsidering: team coordination needs, documentation value, andmaintenance burden.
```

**What you're learning:** This prompt uses a concrete project with clear characteristics. Claude's analysis reveals how team size, maintenance horizon, and documentation needs map to SDD levels. Notice how "8 developers" and "onboarding" push toward Spec-Anchored.

**Prompt 2: Trade-off Analysis**

```
Compare these two real scenarios:Scenario A: Solo developer building a weekend side project to learna new API. No plans to maintain it beyond the learning exercise.Scenario B: Two-person startup building their MVP. Tight deadline,but they'll need to onboard contractors in 3 months.For each, recommend an SDD level and explain what they'd lose bychoosing a different level.
```

**What you're learning:** The same methodology applies differently based on context. Scenario A's "learning exercise" suggests Spec-First (or skip specs entirely). Scenario B's "onboard contractors" changes everything—even under time pressure, Spec-Anchored provides future value.

**Prompt 3: Spec-as-Source Reality Check**

```
A team wants to use Spec-as-Source for their REST API client library.Their argument: "The API spec already exists as OpenAPI, so we shouldjust regenerate the client whenever the spec changes."What could go wrong? Give me three specific failure scenarios theyhaven't considered.
```

**What you're learning:** Spec-as-Source sounds appealing in theory. This prompt surfaces practical issues: determinism problems breaking git workflows, debugging challenges when generated code varies, and edge cases requiring manual patches that get overwritten on regeneration.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   The Four-Phase Workflow

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/03-four-phase-workflow.md)

# The Four-Phase Workflow

In Lesson 1, you learned that SDD exists because vibe coding fails at scale. The question becomes: what do you do instead?

The answer is a structured workflow that treats Claude not as a solo coder who figures everything out through conversation, but as a **development team** you orchestrate. You provide direction. Multiple agents investigate. A comprehensive specification emerges. Implementation follows the spec, not the other way around.

This lesson introduces the four-phase workflow that makes SDD work. By the end, you'll understand why this sequence matters and how it prevents the mid-implementation pivots that derail vibe coding projects.

## The Four Phases

Here's the complete workflow at a glance:

```
Phase 1: Research (Parallel Subagents)    ↓ Multiple agents investigate different aspectsPhase 2: Specification (Written Artifact)    ↓ Comprehensive markdown documentPhase 3: Refinement (Interview)    ↓ AskUserQuestion surfaces ambiguitiesPhase 4: Implementation (Task Delegation)    ↓ Atomic tasks with commits
```

Each phase has a clear deliverable. Each transition is a checkpoint where you can review, adjust, or stop. Unlike vibe coding—where you're constantly course-correcting during implementation—SDD front-loads the thinking so implementation becomes execution of a well-understood plan.

### Phase 1: Research (Parallel Subagents)

**Deliverable**: Written summaries of findings from multiple investigation threads

**What happens**: You ask Claude to investigate your problem from multiple angles. Instead of a single conversation exploring everything sequentially, Claude spawns multiple independent subagents. Each subagent investigates a specific aspect:

-   One examines reference implementations
-   Another analyzes your existing codebase
-   A third researches best practices for your specific challenge

**Why parallel matters**: Each subagent operates with fresh context. They don't pollute each other's thinking. Research that would take hours sequentially becomes minutes in parallel. Different agents may discover conflicting approaches—that's valuable information for your specification.

### Phase 2: Specification (Written Artifact)

**Deliverable**: A comprehensive markdown document (spec.md)

**What happens**: Research findings converge into a written specification. This isn't a to-do list or rough notes. It's a complete description of:

-   What you're building and why
-   Patterns discovered in research
-   How this fits your existing architecture
-   Implementation approach with phases
-   Explicit constraints (what NOT to build)
-   Measurable success criteria

**Why written matters**: The specification becomes your **source of truth**. When Claude's session ends, the conversation disappears. When you start a new session tomorrow, your spec.md persists. Every decision captured in the spec survives session restarts.

### Phase 3: Refinement (Interview)

**Deliverable**: An updated specification with ambiguities resolved

**What happens**: Before implementation, Claude interviews you using AskUserQuestion patterns. The goal is to surface every design decision that would otherwise become a mid-implementation pivot:

-   "Should we migrate existing data or start fresh?"
-   "The research found two patterns for this. Which matches your constraints?"
-   "What's the failure recovery approach?"

**Why interview matters**: Every ambiguity found now saves correction time during implementation. The spec becomes more precise. You maintain architectural control instead of discovering surprises in generated code.

### Phase 4: Implementation (Task Delegation)

**Deliverable**: Working code committed in atomic chunks

**What happens**: With a refined specification, Claude extracts tasks and delegates each to a fresh subagent. Each subagent:

1.  Reads the spec
2.  Implements one task
3.  Commits with an atomic message
4.  Returns control

The main agent orchestrates, tracking progress and handling blockers. If a task fails, only that subagent's context is affected—the overall project state is preserved in git commits.

**Why delegation matters**: Context isolation prevents accumulated errors. Atomic commits enable rollback. The spec serves as the contract that keeps every subagent aligned.

## Why This Order Matters

The sequence isn't arbitrary. Each phase depends on what comes before:

Transition

Why It Must Happen This Way

Research → Spec

You can't write a good spec without understanding the problem space

Spec → Refinement

You can't find ambiguities until you've written something concrete

Refinement → Implementation

You can't implement confidently until ambiguities are resolved

**What happens if you skip phases:**

-   Skip Research → Your spec is based on assumptions, not evidence
-   Skip Specification → Implementation drifts because there's no reference point
-   Skip Refinement → Mid-implementation discoveries force costly pivots
-   Skip Task Delegation → Single context accumulates clutter, errors compound

## The Key Insight: Planning vs Execution

Traditional AI coding blurs planning and execution. You prompt, see code, adjust, prompt again—planning and execution interleaved in a single conversation.

SDD separates them completely:

Aspect

Vibe Coding

SDD

**When you review**

During coding (approval fatigue)

At phase gates (focused review)

**What persists**

Nothing—conversation lost on restart

Spec.md survives sessions

**How you correct**

Edit generated code

Edit spec, regenerate code

**Context management**

Single accumulating context

Fresh context per task

**Review at phase gates, not during coding.** After research, you review findings. After specification, you review the plan. After refinement, you confirm decisions. During implementation, Claude executes the agreed plan—you don't need to approve every file edit because the spec already captured your intent.

## The Spec as Source of Truth

When you start a new Claude Code session, your conversation history is gone. But your specification remains:

```
project/├── docs/│   └── my-feature-spec.md  ← Persists across sessions└── src/    └── ...
```

Tomorrow's Claude can read today's spec and understand:

-   What you decided to build
-   Why you made specific architectural choices
-   What constraints exist
-   What success looks like

The specification captures accumulated decisions. Without it, every new session starts from scratch—you're explaining the same context repeatedly instead of building on documented decisions.

## Comparison: One Hour of Vibe Coding vs One Hour of SDD

Consider what happens when you invest one hour in each approach:

**One hour of vibe coding:**

-   You prompt Claude, get code, find issues, prompt again
-   Each iteration loses context from earlier iterations
-   After an hour, you have working code that might not fit your architecture
-   Session ends—knowledge about your decisions disappears
-   Tomorrow: Start over, re-explaining context

**One hour of SDD:**

-   15 minutes: Research phase produces investigation summaries
-   25 minutes: Specification phase produces documented plan
-   15 minutes: Refinement phase resolves ambiguities
-   5 minutes: Implementation begins with clear direction
-   After an hour, you have a spec and partial implementation
-   Session ends—spec preserves all decisions
-   Tomorrow: Continue from documented state

The one-hour outcomes look different. Vibe coding produces code faster initially. SDD produces more durable artifacts. For a quick script, vibe coding wins. For a system you'll maintain for months, SDD's documentation pays dividends.

## Lab: Map Your Next Task to Four Phases

**Objective:** Practice thinking in phases before you need to execute.

### Task

Think of a real task you need to accomplish with Claude Code—something you'd normally tackle through conversation. Map it to the four phases:

**Phase 1 (Research):** What would you want subagents to investigate?

-   What reference implementations exist?
-   How does your current codebase handle similar problems?
-   What patterns apply to this domain?

**Phase 2 (Specification):** What sections would your spec need?

-   What are you building?
-   What are the constraints?
-   What does success look like?

**Phase 3 (Refinement):** What questions might surface ambiguities?

-   Are there decisions you haven't made yet?
-   Where might different approaches apply?

**Phase 4 (Implementation):** How would you break this into tasks?

-   What's the logical sequence?
-   Which tasks could run in parallel?

You don't need to execute this yet—Lessons 4-7 cover each phase in detail. The goal is to start thinking in phases rather than jumping straight to implementation.

## Try With AI

**Running Example:** Throughout this chapter, you'll write "Personal AI Employees in 2026"—a research report for CTOs. This lesson maps that task to the four phases.

**Prompt 1: Phase Mapping**

```
I want to write "Personal AI Employees in 2026"—a research reportfor CTOs evaluating AI tools like Claude Code for their teams.Map this to the four SDD phases:1. Research: What do I need to investigate?2. Specification: What sections would the report need?3. Refinement: What decisions haven't I made yet?4. Implementation: How would writing break into tasks?
```

**What you're learning:** Even a writing task benefits from SDD thinking. The research phase discovers what CTOs actually care about (not what you assume). The spec commits to structure before you write 2000 words in the wrong direction.

**Prompt 2: Skip-Phase Analysis**

```
What if I skipped research and wrote the report based on myexisting knowledge of AI tools? What would I miss?
```

**What you're learning:** Your knowledge is partial. Research might reveal: CTOs care about security compliance (you forgot), Cursor has enterprise features you didn't know, ROI calculations need specific metrics. Skipping research means writing for yourself, not your audience.

**Prompt 3: Artifact Comparison**

```
After 1 hour, what would I have with vibe coding ("write a reportabout AI employees") versus SDD (research → spec → refine → tasks)?List the actual artifacts, not just the process.
```

**What you're learning:** Vibe coding produces a draft that might not fit your audience. SDD produces: research.md (what CTOs need), report-spec.md (structure decisions), and sections written to spec. The artifacts persist; the conversation doesn't.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Phase 1: Parallel Research with Subagents

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/04-parallel-research.md)

# Phase 1: Parallel Research with Subagents

In Lesson 3, you learned the four-phase SDD workflow. Now you'll execute the first phase: research that transforms hours of sequential reading into parallel minutes.

Here's the economics that makes this lesson worth your time. That reference implementation you've been meaning to understand? The library documentation you've been piecing together? The architecture decisions scattered across multiple files? What would take you four hours of sequential reading, Claude can investigate in twenty minutes using parallel research agents.

This isn't about AI reading faster. It's about architecture. Claude's subagent system lets you spawn multiple independent investigators, each with fresh context, each focused on a specific question. While one agent studies CRDT data structures, another examines WebSocket protocols, a third analyzes storage patterns, and a fourth maps overall architecture. They don't wait for each other. They don't cross-contaminate each other's understanding. They report back simultaneously.

## The Prompt Pattern

The pattern that activates parallel research is direct:

```
Spin up multiple subagents for your research task
```

That's the trigger. When Claude sees this instruction alongside a research goal, it spawns 3-5 independent agents. Each agent operates in isolation, investigates one aspect, and returns findings. You receive parallel perspectives without the accumulated confusion of sequential conversation.

### What Happens Behind the Scenes

When you invoke parallel research, Claude:

1.  **Analyzes your research goal** to identify distinct investigation threads
2.  **Spawns independent subagents** (typically 3-5, depending on complexity)
3.  **Assigns each agent a focused question** without overlap
4.  **Collects findings** as agents complete their work
5.  **Synthesizes results** into a consolidated summary

The key architectural insight: each subagent starts with fresh context. When Agent 2 investigates WebSocket patterns, it doesn't carry assumptions from Agent 1's CRDT analysis. This isolation prevents the cross-contamination that plagues sequential research conversations.

## A Real Example: IndexedDB Migration Research

Here's what parallel research looks like in practice. Alex, a developer building a local-first application, needed to migrate from SQLite to IndexedDB while adding real-time sync capabilities. The investigation required understanding:

-   CRDT (Conflict-free Replicated Data Types) for sync
-   WebSocket protocols for real-time updates
-   IndexedDB persistence patterns
-   Overall architectural integration

Sequential approach: research CRDTs, then WebSockets, then IndexedDB, then architecture. Each phase builds on the previous. Estimated time: 3-4 hours of reading and note-taking.

Parallel approach: spawn four agents simultaneously.

**Alex's prompt:**

```
I need to understand how to implement local-first sync with IndexedDB.Spin up multiple subagents for your research task:1. CRDT data structures — focus on CoMap, CoList patterns for collaborative data2. WebSocket sync protocols — focus on the 4-message handshake pattern3. Storage persistence — focus on IndexedDB patterns for offline-first apps4. Overall architecture — how these pieces integrate togetherReference repo: [link to jazz.tools or similar implementation]
```

**What returned:**

-   **Agent 1** reported on CRDT primitives, comparing CoMap (key-value) vs CoList (ordered sequences), with code examples from the reference
-   **Agent 2** documented the WebSocket handshake: `connect → authenticate → subscribe → sync`, with message formats
-   **Agent 3** analyzed IndexedDB transaction patterns, noting the async nature and common gotchas
-   **Agent 4** mapped how CRDT changes flow through WebSocket to IndexedDB, identifying the sync manager as the central orchestrator

**Time elapsed**: 18 minutes instead of 4 hours.

More importantly, the findings were independent. Agent 1's CRDT understanding didn't assume anything about storage. When Alex later found that IndexedDB had limitations Agent 3 hadn't considered, it didn't invalidate the CRDT or WebSocket research.

## Why Parallel Works Better

The advantage isn't just speed. Context isolation changes the quality of research.

Aspect

Sequential Research

Parallel Research

**Context**

Accumulates with each topic

Fresh per agent

**Assumptions**

Early findings influence later investigation

Each agent investigates independently

**Conflicts**

Hidden (later research adapts to earlier)

Visible (agents may report contradictions)

**Revision cost**

High (must re-research if early assumption wrong)

Low (only affected thread needs revision)

**Hidden conflicts become visible.** When you research sequentially, you unconsciously reconcile contradictions as you go. Agent 1 says "use approach A." By the time you get to related research, you're looking for information that supports A, not challenges it.

With parallel research, Agent 1 might recommend approach A while Agent 3 recommends approach B for the same problem. That conflict is valuable information. It means you have a genuine design decision to make, not an assumption that slipped through.

**Revision stays surgical.** If you discover Agent 2's WebSocket analysis missed something critical, you re-run Agent 2. Agents 1, 3, and 4 are unaffected. In sequential research, late-stage discoveries often invalidate earlier work because of accumulated assumptions.

> **Beyond subagents:** For research tasks where investigators need to *challenge each other's findings* rather than report independently, Claude Code's **Agent Teams** (Chapter 4, Lesson 9) enable direct inter-agent communication. Subagents work well when only the result matters. Agent teams work better when the debate between investigators produces the real insight.

## Constructing Effective Research Requests

The quality of parallel research depends on how you decompose your investigation. Effective decomposition creates threads that are:

-   **Independent**: Each agent can complete without information from others
-   **Focused**: Each agent has a clear, answerable question
-   **Bounded**: Each agent knows what's in scope and what's not
-   **Complementary**: Together, agents cover the full problem space

### Decomposition Template

```
Research Task: [HIGH-LEVEL GOAL]Spawn parallel subagents to investigate:1. [ASPECT 1] — focus on [SPECIFIC QUESTION]2. [ASPECT 2] — focus on [SPECIFIC QUESTION]3. [ASPECT 3] — focus on [SPECIFIC QUESTION]   [4-5. Add more if complexity warrants]Reference: [CODEBASE/DOCUMENTATION/EXAMPLE]Return: Written summary of findings for each aspect
```

### Example Decompositions

**For understanding an authentication system:**

```
Research Task: Understand how [app] implements OAuthSpawn parallel subagents to investigate:1. Token management — how are tokens stored, refreshed, and validated?2. Session handling — how does the app track logged-in state?3. Provider integration — how are external OAuth providers configured?4. Security measures — what protections exist against token theft?Reference: @src/auth/
```

**For evaluating a new library:**

```
Research Task: Evaluate FastAPI for our agent API layerSpawn parallel subagents to investigate:1. Async patterns — how does FastAPI handle concurrent requests?2. Validation — how does Pydantic integration work for request/response?3. Dependency injection — how do we structure shared services?4. Testing — what testing patterns does FastAPI support?Reference: FastAPI documentation and @existing-api/
```

**For analyzing a performance issue:**

```
Research Task: Investigate why dashboard loads slowlySpawn parallel subagents to investigate:1. Database queries — which queries take longest? Are indexes used?2. API response times — where is latency introduced?3. Frontend rendering — what's the component render timeline?4. Network waterfall — what resources block first paint?Reference: @src/dashboard/ and browser profiling data
```

## Receiving and Using Research Findings

When parallel research completes, you receive structured findings from each agent. Your job is synthesis: identifying patterns, conflicts, and implications.

### Pattern Recognition

Look for themes that appear across multiple agents:

-   "Agent 1 and Agent 3 both mention the importance of idempotent operations"
-   "All four agents reference the event bus as the integration point"
-   "Agents 2, 3, and 4 assume a specific data model—Agent 1 challenges that assumption"

### Conflict Identification

Conflicts between agents often indicate genuine design decisions:

-   "Agent 2 recommends optimistic updates; Agent 4 recommends pessimistic locking"
-   "Agent 1 uses sync storage; Agent 3 assumes async transactions"
-   "Agent 3 and Agent 4 disagree on error handling responsibility"

These conflicts become inputs to Phase 3 (Refinement) where you'll resolve ambiguities before implementation.

### Implications for Specification

Research findings directly feed your specification:

Finding Type

Spec Section It Informs

Discovered patterns

Part 1: Reference Architecture Analysis

Current state analysis

Part 2: Current Architecture Analysis

Identified conflicts

Input for Phase 3 interview questions

Best practices

Part 3: Implementation Plan

Constraints discovered

Constraints section

## Common Research Scenarios

### Scenario 1: Understanding a Reference Implementation

You found a project that does something similar to what you need. Parallel research can dissect it:

```
Research Task: Understand how [repo] implements real-time collaborationSpawn parallel subagents to investigate:1. Data model — what entities exist and how do they relate?2. Sync mechanism — how do changes propagate between clients?3. Conflict resolution — how are simultaneous edits handled?4. Offline support — how does the app work without network?Reference: [repo URL]
```

### Scenario 2: Evaluating Technology Options

You're deciding between two approaches. Research can inform the decision:

```
Research Task: Compare WebSocket vs Server-Sent Events for our use caseSpawn parallel subagents to investigate:1. WebSocket capabilities — bidirectional, connection management, scaling2. SSE capabilities — unidirectional, reconnection, browser support3. Our requirements — what do we actually need? (broadcast? bidirectional?)4. Infrastructure impact — how does each choice affect our deployment?Reference: Our architecture docs at @docs/architecture.md
```

### Scenario 3: Auditing Existing Code

You inherited code and need to understand it:

```
Research Task: Audit the payment processing moduleSpawn parallel subagents to investigate:1. Transaction flow — how does a payment move through the system?2. Error handling — how are failures captured and recovered?3. Security — what sensitive data exists and how is it protected?4. External dependencies — what third-party services are involved?Reference: @src/payments/
```

## Lab: Execute Your First Parallel Research

**Objective:** Apply the parallel research pattern to a real investigation need.

### Task

Choose a research goal that's been on your backlog. Maybe it's understanding a library, auditing code you inherited, or investigating how a reference project implements something.

Construct a research request using the template:

```
Research Task: [Your goal]Spawn parallel subagents to investigate:1. [Aspect] — focus on [question]2. [Aspect] — focus on [question]3. [Aspect] — focus on [question]Reference: [What agents should examine]Return: Written summary of findings for each aspect
```

### Evaluation Criteria

Your decomposition is effective if:

-    Each aspect can be investigated independently (no "first do X, then Y")
-    Each focus question is specific enough to answer definitively
-    Together, the aspects cover your full research need
-    No two aspects substantially overlap

Run the research. When findings return, identify:

-   What patterns appeared across multiple agents?
-   Did any agents report conflicting information?
-   What design decisions do the findings imply?

## Try With AI

**Running Example Continued:** We're writing "Personal AI Employees in 2026" for CTOs. Now we research the landscape in parallel.

**Prompt 1: Parallel Research on AI Tools**

```
I'm writing a report on personal AI employees for CTOs evaluatingtools like Claude Code, Cursor, and GitHub Copilot.Spin up multiple subagents for your research task:1. Tool capabilities — What can each tool actually do today?2. Business ROI — What cost/productivity data exists?3. Implementation risks — What do companies struggle with?4. Future trajectory — Where is this category heading?Write findings to research.md with a section per agent.
```

**What you're learning:** Each agent investigates independently. Agent 1 discovers Claude Code can run autonomously while Copilot needs more guidance. Agent 2 finds ROI studies. Neither pollutes the other's findings. Conflicts (Agent 1 says X is best, Agent 4 says Y is trending) surface real decisions.

**Prompt 2: Synthesis**

```
Read research.md. Create a synthesis section:- What appeared in multiple agents' findings?- Where did agents find conflicting information?- What structure does this suggest for our report?
```

**What you're learning:** Four agents produce four perspectives. Synthesis reveals what CTOs must know (appears everywhere) versus what's optional depth. Conflicts become explicit: "Agent 2 found ROI data, Agent 3 found skepticism"—both belong in an honest report.

**Prompt 3: Gap Analysis**

```
Based on research.md, what's MISSING that a CTO would need?We have tool capabilities and ROI, but what practical questionswould a CTO ask that our research doesn't answer?
```

**What you're learning:** Research isn't just collecting data—it's identifying gaps. CTOs might ask: "How do we measure success?" "What's the learning curve?" "How do we handle security review?" If research.md doesn't answer these, the spec needs to address how we'll fill them.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Phase 2: Writing Effective Specifications

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/05-writing-effective-specs.md)

# Phase 2: Writing Effective Specifications

A spec is a contract between you and Claude. Vague contracts produce vague results.

In the previous lesson, you learned how to spawn parallel subagents to research a problem from multiple angles. Now that you have research findings, you need to capture them in a document that Claude can execute flawlessly. This is where most developers fail—not because they lack research, but because they write specs that leave too much to interpretation.

Consider this: when you hand a specification to a human developer, they ask clarifying questions. When you hand the same specification to Claude, it makes assumptions. Every assumption is a potential bug. Every ambiguity becomes a decision made without your input. The goal of specification writing is to answer questions before they're asked.

Addy Osmani (Chrome Engineering Lead) describes effective specifications as combining **PRD thinking** (why we're building this) with **SRS precision** (how it should behave). Your spec should give Claude both the motivation and the mechanics.

## The Four-Part Specification Template

Every effective specification follows a consistent structure. Here's the template that separates sellable Digital FTEs from weekend experiments:

```
# [Feature Name] Specification## Part 1: Reference Architecture Analysis- Patterns discovered in research- Key design decisions and rationale- What similar implementations do well- What they do poorly (mistakes to avoid)## Part 2: Current Architecture Analysis- Existing implementation details relevant to this feature- Pain points and limitations in current system- Constraints imposed by existing code- Files and modules that will be affected## Part 3: Implementation Plan- Phased approach (what order to build)- Risk mitigation strategies- Dependencies between phases- Rollback strategy if things go wrong## Part 4: Implementation Checklist- [ ] Task 1: Description of first atomic unit- [ ] Task 2: Description of second atomic unit- [ ] Task N: Final cleanup and validation## Constraints- What NOT to build (explicit exclusions)- Technology boundaries (must use X, cannot use Y)- Performance requirements (latency, throughput)- Security requirements (authentication, authorization)- Compatibility requirements (browsers, platforms)## Success Criteria- Measurable outcome 1 (e.g., "< 100ms p95 latency")- Measurable outcome 2 (e.g., "All existing tests pass")- Measurable outcome 3 (e.g., "Works offline after initial load")- Acceptance tests that prove completion
```

**Why this structure works**: Each part serves a distinct purpose. Reference Architecture tells Claude what good looks like. Current Architecture shows Claude where you are. Implementation Plan provides the path. Checklist enables task extraction for Phase 4. Constraints prevent wrong turns. Success Criteria define done.

## What Makes Specs Effective

Three qualities separate specifications that work on first attempt from those requiring five iterations:

### 1\. Explicit Constraints (What NOT to Do)

Constraints are often more important than requirements. They prevent Claude from making reasonable but wrong choices.

Vague Spec

Explicit Constraints

"Build a caching layer"

"Do NOT modify database schema. Do NOT add Redis (use in-memory only). Do NOT cache user-specific data."

"Add authentication"

"Use existing OAuth provider only. Do NOT implement custom password hashing. Do NOT store tokens in localStorage."

"Improve performance"

"Do NOT pre-fetch more than 3 items. Do NOT change API contracts. Do NOT sacrifice correctness for speed."

**Why constraints matter**: Without them, Claude optimizes for the general case. Your system is not the general case. Constraints encode your specific context.

### 2\. Measurable Success Criteria (Not "Fast", Not "Good")

Every success criterion must be testable. If you can't write a test for it, it's not a criterion—it's a wish.

Vague Criteria

Measurable Criteria

"Should be fast"

"P95 latency < 100ms for queries under 1000 results"

"Works on mobile"

"Renders correctly on viewport widths 320px-768px"

"Handles errors gracefully"

"All API errors return structured JSON with error code and user-friendly message"

"Scales well"

"Supports 1000 concurrent connections with < 5% degradation"

**How to convert vague to measurable**: Ask "How would I know if this failed?" The answer is your criterion.

### 3\. Checklist Format for Task Extraction

Phase 4 of SDD uses the Task system to delegate work to subagents. Each checklist item becomes a potential task. Write them as atomic units of work.

**Bad checklist items** (too vague, can't be delegated):

-    Set up the system
-    Make it work
-    Test everything

**Good checklist items** (atomic, delegatable):

-    Create `/lib/cache.ts` with LRU implementation (max 1000 entries)
-    Add cache middleware to `/api/products` endpoint
-    Write tests for cache hit/miss/eviction scenarios
-    Update `/docs/caching.md` with new configuration options

**Rule of thumb**: If you can't explain the task to a junior developer in one sentence, it's not atomic enough.

## Anti-Patterns to Avoid

### Anti-Pattern 1: HOW Instead of WHAT

Specifications describe **behavior**, not **implementation**. Let Claude choose the how.

```
<!-- WRONG: Prescribing implementation -->Use a HashMap with String keys and User values.Iterate through the map using a for-each loop.Check if the user exists before adding.<!-- CORRECT: Describing behavior -->Maintain a user lookup that:- Returns user by ID in O(1) time- Prevents duplicate IDs- Supports 10,000+ users without degradation
```

**Why this matters**: Claude often knows better implementation patterns than you. By specifying behavior, you get the benefit of its knowledge. By specifying implementation, you lock in your assumptions.

### Anti-Pattern 2: Missing Constraints

No constraints means Claude decides everything. This is Vibe Coding with extra steps.

```
<!-- WRONG: No boundaries -->## Constraints(none specified)<!-- CORRECT: Clear boundaries -->## Constraints- Do NOT modify the User model schema- Do NOT add new npm dependencies without approval- Do NOT use any beta or experimental APIs- Must work with existing PostgreSQL 14 installation- Must maintain backward compatibility with v2 API clients
```

### Anti-Pattern 3: Vague Success Criteria

"Works correctly" is not a success criterion. Neither is "user-friendly" or "efficient."

```
<!-- WRONG: Unmeasurable -->## Success Criteria- System works correctly- Good user experience- Performs efficiently<!-- CORRECT: Measurable -->## Success Criteria- All 47 existing API tests pass (regression)- New endpoints return within 200ms for 95th percentile- Error responses include machine-readable error codes- Swagger documentation auto-generates from code annotations
```

## A Complete Specification Example

Here's a real specification that follows all principles:

```
# Offline-First Sync Specification## Part 1: Reference Architecture AnalysisResearch of similar implementations (linear.app, notion.so) revealed:- CRDT-based conflict resolution prevents data loss during offline edits- Local-first storage (IndexedDB) enables immediate UI response- Background sync queues batch operations for efficiency- Retry logic with exponential backoff handles network flakinessKey insight: Notion uses operation log rather than state sync—each edit is an operation that can be replayed. This enables undo/redo for free.## Part 2: Current Architecture AnalysisCurrent system uses synchronous API calls:- Each save triggers POST request (blocking)- No offline support (fails silently)- Conflict resolution: last-write-wins (data loss risk)Files affected:- `/src/stores/document.ts` - state management- `/src/api/documents.ts` - API layer- `/src/components/Editor.tsx` - UI integrationConstraint: Must maintain existing API contract for mobile app compatibility.## Part 3: Implementation PlanPhase 1: Local persistence (IndexedDB integration)Phase 2: Operation queue (batch and retry logic)Phase 3: Conflict detection (CRDT comparison)Phase 4: UI indicators (sync status display)Rollback: Each phase is independently revertible via feature flag.## Part 4: Implementation Checklist- [ ] Create IndexedDB wrapper in `/src/lib/local-db.ts`- [ ] Add operation queue with retry in `/src/lib/sync-queue.ts`- [ ] Implement CRDT merge in `/src/lib/conflict-resolver.ts`- [ ] Add sync status component to Editor- [ ] Write integration tests for offline scenarios- [ ] Update documentation with offline behavior## Constraints- Do NOT change API response formats (mobile app compatibility)- Do NOT add dependencies larger than 50KB gzipped- Do NOT modify existing database schema- Use existing auth tokens (no separate offline auth)- Support last 2 versions of Chrome, Firefox, Safari## Success Criteria- Documents save locally within 50ms- Sync completes within 5 seconds of connectivity restoration- Zero data loss in conflict scenarios (verified by test suite)- Offline indicator visible within 1 second of connection loss- All existing e2e tests pass without modification
```

**Notice**: This spec answers every question Claude might ask. Reference Architecture shows what good looks like. Current Architecture shows where we're starting. Implementation Plan provides sequence. Checklist enables task delegation. Constraints prevent wrong turns. Success Criteria define done.

## Try With AI

**Running Example Continued:** We have research.md from parallel investigation. Now we write report-spec.md.

**Prompt 1: Draft Specification from Research**

```
Based on research.md, write report-spec.md for "Personal AI Employees in 2026."Use the four-part template:- Part 1: Reference Analysis (what makes good CTO-facing reports?)- Part 2: Current State (what does research.md tell us?)- Part 3: Implementation Plan (sections and order)- Part 4: Checklist (atomic writing tasks)Plus Constraints and Success Criteria.
```

**What you're learning:** The spec transforms research findings into a writing plan. Research.md's "tool capabilities" becomes the comparison section. "ROI data" becomes the business case section. "Gaps CTOs would ask about" become sections we must address or explicitly scope out.

**Prompt 2: Strengthen Constraints**

```
Review report-spec.md. The constraints section is weak.Add explicit constraints for:- What this report is NOT (not a tutorial, not a product pitch)- Length limits (CTOs won't read 50 pages)- Assumed knowledge (what do readers already know about AI?)- What to skip (implementation details, they have engineers for that)For each constraint, explain why it prevents a specific failure mode.
```

**What you're learning:** Constraints prevent scope creep. Without "NOT a tutorial," you'd explain how to use each tool. Without "CTOs have engineers," you'd dive into technical setup. Constraints encode audience judgment.

**Prompt 3: Make Criteria Testable**

```
The success criteria in report-spec.md say "actionable" and "balanced."These can't be tested.Rewrite each criterion so I could verify it:- "Actionable" → specific recommendation requirement- "Balanced" → specific comparison structure- Add: what would a CTO be able to DO after reading?
```

**What you're learning:** Vague criteria let anything pass. "Each tool section includes pricing and limitations" is testable. "CTO can justify tool selection to their board" defines actual success.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Phase 3: Refinement via Interview

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/06-refinement-via-interview.md)

# Phase 3: Refinement via Interview

Every ambiguity you find before coding saves 10x the time it would cost to fix mid-implementation.

In Lesson 4, you learned to write effective specifications. But even well-structured specs contain hidden assumptions. You know what "conflict resolution" means in your head. Does Claude? You imagine the error handling approach. Did you write it down?

This lesson teaches the refinement phase: a structured interview where Claude surfaces every design decision that would otherwise become a mid-implementation pivot. The result is a specification precise enough that implementation becomes execution of a well-understood plan.

## The Interview Pattern

The refinement phase uses a specific prompt pattern that triggers Claude's ask\_user\_question tool:

```
Here's my spec. Use the ask_user_question tool to surface any ambiguitiesbefore we implement.
```

When you give this instruction, Claude shifts from implementation mode to investigation mode. Instead of generating code, Claude reads your specification critically and asks questions about anything unclear, unstated, or potentially problematic.

**What makes this different from conversation:**

In normal prompting, you ask questions and Claude answers. In the interview pattern, the roles reverse. Claude asks questions and you answer. This shift matters because Claude can identify gaps you didn't know existed—assumptions so natural to you that you didn't think to document them.

## Why Ambiguities Are Expensive

Consider what happens when an ambiguity survives to implementation:

When Discovered

What Happens

Time Cost

**During spec**

Add clarification, continue

5 minutes

**During interview**

Answer question, update spec

10 minutes

**During coding**

Stop, discuss, decide, restart

30 minutes

**After first commit**

Code review reveals issue, refactor needed

2-4 hours

**In production**

Bug report, investigation, emergency fix, review

8-16 hours

The 10x multiplier is conservative. A decision that takes 10 minutes to clarify in an interview can cost days when discovered after deployment.

**Real example:** A developer's specification said "handle conflicts optimistically." The developer meant "last write wins." Claude interpreted this as "prompt user to resolve." Implementation proceeded with user prompts. The developer discovered this three days later during testing. Refactoring took an entire afternoon—time that a single interview question would have prevented.

## The Five Ambiguity Categories

Claude's interview questions cluster around five categories. Understanding these helps you anticipate questions and write better specs proactively.

### 1\. Data Decisions

How existing information transitions to the new system:

-   Should we migrate existing data or start fresh?
-   What happens to records that don't match the new schema?
-   How do we handle data from the old system during the transition period?

**Why this matters:** Data decisions are often unstated because developers assume "obviously we keep our data." But the HOW requires explicit decisions.

### 2\. Conflict Resolution

What happens when systems disagree:

-   What's the conflict resolution strategy? (Last write wins? User resolves? Merge automatically?)
-   If two users edit simultaneously, who wins?
-   What happens when local and server state diverge?

**Why this matters:** Every multi-user or distributed system faces conflicts. The absence of a stated strategy means Claude chooses one—possibly not the one you wanted.

### 3\. Pattern Selection

Which approach among valid alternatives:

-   The research found two patterns for this. Which matches your constraints?
-   Should we use the approach from \[reference A\] or \[reference B\]?
-   Given your performance requirements, which architecture fits?

**Why this matters:** Research often surfaces multiple valid approaches. Without explicit selection, Claude picks based on its training distribution—not your project's needs.

### 4\. Failure Recovery

What happens when things go wrong:

-   What's the failure recovery approach?
-   If the external API times out, do we retry, queue, or fail?
-   What state should the system preserve after a crash?

**Why this matters:** Happy path specifications are common. Error path specifications are rare. But production systems spend significant time in error states.

### 5\. Boundary Conditions

Where the system's scope ends:

-   What happens at the rate limit boundary?
-   How do we handle users who exceed storage quotas?
-   What's the maximum scale this needs to support?

**Why this matters:** Specifications often describe the normal case. Edge cases at boundaries are where implementations diverge from intent.

## The Interview in Action

Here's what a refinement interview looks like with our report specification:

**Your specification includes:**

```
## Tool Comparison SectionCompare Claude Code, Cursor, and GitHub Copilot on key dimensionsrelevant to CTO decision-making.
```

**Claude's interview questions:**

> Question 1: For the tool comparison—should we include pricing? Enterprise pricing is often confidential or negotiated. Do we use list prices, price ranges, or skip pricing entirely?

Your answer: "Include list prices where public, note 'contact for enterprise pricing' otherwise. CTOs need ballpark numbers to budget."

> Question 2: The spec mentions 'key dimensions.' Which dimensions matter most to CTOs? Technical capabilities? Security compliance? Learning curve? Integration difficulty?

Your answer: "Good catch. Prioritize: (1) security/compliance, (2) integration with existing tools, (3) learning curve, (4) technical capabilities. CTOs care about adoption risk before features."

> Question 3: How should we handle rapidly changing information? Tool capabilities change monthly. Should we include version numbers? Publish dates? Caveats about currency?

Your answer: "Include 'as of \[date\]' header. Note that capabilities change rapidly. Link to official docs for current features."

**Specification updates based on answers:**

```
## Tool Comparison SectionCompare Claude Code, Cursor, and GitHub Copilot on key dimensions.### Comparison Dimensions (in priority order)1. Security and compliance certifications2. Integration with enterprise tools (SSO, audit logs)3. Learning curve and adoption timeline4. Technical capabilities### Pricing ApproachInclude public list prices. Note "contact for enterprise" where applicable.### Currency HandlingHeader: "Comparison current as of [Month 2026]"Link to official documentation for latest capabilities.
```

Three questions. Three decisions documented. Three mid-writing pivots prevented.

## The Interview Checklist

Use this checklist to ensure your specification addresses common ambiguity areas before implementation:

```
## Pre-Implementation Interview Checklist### Data Decisions[ ] Migration strategy defined (migrate existing / start fresh / hybrid)[ ] Schema transition plan documented[ ] Data validation rules specified### Conflict Resolution[ ] Multi-user edit strategy defined[ ] Local/server sync behavior documented[ ] Tie-breaking rules specified### Pattern Selection[ ] Architectural approach chosen from research options[ ] Performance tradeoffs acknowledged[ ] Scalability approach defined### Failure Recovery[ ] Timeout handling specified[ ] Retry strategy documented[ ] Crash recovery behavior defined[ ] Error state persistence rules specified### Boundary Conditions[ ] Rate limits defined[ ] Resource quotas documented[ ] Scale limits acknowledged[ ] Edge case behaviors specified
```

You don't need to fill every checkbox for every specification. A small utility script doesn't need crash recovery documentation. But running through the checklist surfaces which categories apply to your project.

## When to Stop Interviewing

The interview phase ends when:

1.  **Questions become repetitive** — Claude asks variations of questions you've already answered
2.  **New questions are trivial** — Questions about details that don't affect architecture
3.  **Specification feels complete** — You can read through it and imagine implementation without guessing

If Claude's questions feel like implementation details rather than design decisions, you're ready for Phase 4.

**Warning sign:** If you're annoyed by the questions, that's often a signal that you haven't thought through those decisions. The annoyance comes from realizing you need to think harder, not from Claude being pedantic.

## Lab: Interview Your Specification

**Objective:** Practice the interview pattern on a real specification.

### Task

Take a specification you've written (or use the one from Lesson 5's lab). Run it through the interview pattern:

1.  **Trigger the interview:**
    
    ```
    Here's my spec. Use the ask_user_question tool to surface any ambiguitiesbefore we implement.[paste your spec]
    ```
    
2.  **Answer the questions thoughtfully.** Don't rush. Each question represents a potential mid-implementation pivot.
    
3.  **Update your specification** with decisions from your answers.
    
4.  **Check the checklist.** Which categories did Claude's questions address? Which categories weren't relevant to your spec?
    

The goal isn't to fill checkboxes—it's to surface decisions you hadn't consciously made.

## Try With AI

**Running Example Continued:** We have report-spec.md. Now we refine it through interview before writing.

**Prompt 1: Interview the Report Spec**

```
Read report-spec.md. Use ask_user_question to surface ambiguities.Focus on decisions that would cause rewrites if wrong:- Which CTOs exactly? (Startup vs enterprise? Tech company vs traditional?)- What's their current AI adoption level?- What decision are they trying to make after reading this?
```

**What you're learning:** The interview surfaces implicit assumptions. "CTOs evaluating AI tools" is vague—a startup CTO has different concerns than an enterprise CTO. Each answer sharpens the spec and prevents writing for the wrong audience.

**Prompt 2: Update Spec with Decisions**

```
Based on my answers:- Target: CTOs at mid-size companies (100-1000 employees) considering first AI tool adoption- Assumed: They've seen demos but haven't deployed; have security/compliance concerns- Decision: Whether to pilot Claude Code, Cursor, or waitUpdate report-spec.md with these decisions. Add them as explicit constraints.
```

**What you're learning:** Interview answers must persist. "First AI tool adoption" means we explain basics enterprise CTOs already know. "Security/compliance concerns" becomes a required section. The spec now encodes these CTO-specific needs.

**Prompt 3: Identify Remaining Gaps**

```
Review updated report-spec.md. What questions would a writer still have?For each gap:- Add to spec now (important for structure)- Leave for writer judgment (minor detail)- Flag for research (we don't have the data yet)
```

**What you're learning:** Perfect specs don't exist. The goal is specs good enough that writing doesn't require restructuring. Whether to use bullet points vs prose can stay flexible; whether to include a security section cannot.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Phase 4: Task-Based Implementation

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/07-task-based-implementation.md)

# Phase 4: Task-Based Implementation

"You are the main agent and your subagents are your devs."

This single prompt transforms Claude from a solo coder into a development team. In Lesson 5, you refined your specification through interview until ambiguities disappeared. Now you have a spec precise enough that implementation becomes execution of a well-understood plan.

But here's the problem: even with a perfect spec, a single AI context accumulates errors. Decisions made in minute 5 affect code written in minute 45. A wrong assumption early contaminates everything downstream. And when something breaks after an hour of work, you're left debugging a massive context with no clear rollback point.

Task-based implementation solves this. Instead of one long implementation session, you decompose the spec into independent tasks. Each task executes in a fresh subagent context. Each completed task commits before the next begins. If task 7 fails, tasks 1-6 are safely committed. You roll back only what broke.

## The Core Prompt Pattern

The implementation phase begins with this prompt:

```
Implement @docs/my-spec.mdUse the task tool and each task should only be done by a subagentso that context is clear. After each task do a commit before you continue.You are the main agent and your subagents are your devs.
```

This prompt triggers a specific behavior mode in Claude Code. Let's break down what happens.

## What Happens When You Run This

**Step 1: Task Extraction**

Claude reads your specification and extracts the implementation checklist. Each checkbox becomes a task. Dependencies between tasks are identified—some must complete before others can start.

**Step 2: Subagent Delegation**

For each task, Claude spawns a fresh subagent. This subagent receives:

-   The specific task description
-   Relevant context from the spec
-   Access to the codebase state

The subagent does NOT receive the main agent's accumulated conversation history. It starts fresh.

**Step 3: Task Execution and Commit**

The subagent completes its assigned task, then commits the changes with an atomic commit message describing exactly what changed. Control returns to the main agent.

**Step 4: Progress Tracking**

The main agent updates task status and moves to the next task. If a task fails, the main agent can retry, skip, or escalate based on the error.

## The Task System Tools

Claude Code provides four tools for managing this workflow:

Tool

Purpose

When Used

**TaskCreate**

Define a new task with description and dependencies

Main agent extracts tasks from spec

**TaskUpdate**

Change task status (pending, in\_progress, completed, failed)

Subagent completes or fails task

**TaskList**

View all tasks with current status and blockers

Main agent tracks overall progress

**TaskGet**

Retrieve full details of a specific task

Before starting work on a task

The main agent orchestrates. The subagents execute. Tasks provide the coordination layer between them.

## Why Context Isolation Matters

Chapter 4 (Lesson 9) introduced context isolation—why subagents use clean slates. Here we see that principle in action, solving two named problems from the SDD research literature:

**Agent Amnesia**: Starting a new session mid-task loses all progress unless documented. The specification and task list persist across sessions, providing external memory that survives restarts. This is why Phase 2 produces a written spec—it's your insurance against amnesia.

**Context Pollution**: A full context window causes agents to drop discovered bugs instead of tracking them. Fresh subagent context per task prevents accumulated errors from propagating. The Tasks system you learned in Chapter 4 (Lesson 4) enables this—persistent state that coordinates isolated subagents.

Consider what happens without isolation:

```
Minute 10: Main agent makes assumption about data formatMinute 25: Writes validation logic based on assumptionMinute 40: Implements API endpoint using validationMinute 55: Tests fail - original assumption was wrongResult: 45 minutes of contaminated work to untangle
```

Now with context isolation:

```
Task 1: Define data schema (subagent 1, commits)Task 2: Write validation logic (subagent 2, commits)Task 3: Implement API endpoint (subagent 3, commits)Task 4: Add tests (subagent 4, fails - schema assumption wrong)Result: Roll back task 4, fix schema in task 1, tasks 2-3 still valid
```

Each subagent starts with clean context. If it makes a wrong assumption, that assumption dies with the subagent. The contamination doesn't spread to other tasks.

**Parallel execution benefit**: Tasks without dependencies can run simultaneously. Task 2 doesn't need to wait for task 1 if they're independent. The main agent can spawn multiple subagents working in parallel—like a development team where each developer handles their assigned feature.

## The Backpressure Pattern

Fast execution without validation creates a different problem: you might commit broken code faster. The backpressure pattern (inspired by Steve Yegge's "Beads" project) adds quality gates that slow implementation when quality drops.

**Pre-commit hooks** are the primary backpressure mechanism:

```
# .husky/pre-commitpnpm typecheck && pnpm lint && pnpm test-run
```

When a subagent attempts to commit, this hook runs automatically. If typechecking fails, the commit is rejected. If linting fails, the commit is rejected. If tests fail, the commit is rejected.

The subagent must fix the issues before the commit succeeds. This prevents broken code from entering the repository—even when AI is writing it.

**Setting up pre-commit hooks:**

```
# Install husky (if using npm/pnpm)pnpm add -D huskypnpm exec husky init# Create the pre-commit hookecho "pnpm typecheck && pnpm lint && pnpm test-run" > .husky/pre-commit
```

Now every commit—whether from you or from a subagent—must pass the quality gates.

## Real Results: The alexop.dev Implementation

Here's what task-based implementation looks like on a real project (alexop.dev redesign):

Metric

Result

**Total time**

45 minutes

**Tasks completed**

14

**Commits made**

14 (one per task)

**Context usage**

71% of available window

**Rollbacks needed**

0

Each task averaged about 3 minutes. Each commit was atomic and self-contained. The final 29% of context remained available for any follow-up work.

Compare this to a single-session approach: 45 minutes of accumulated context would have consumed nearly the entire window, with no clear rollback points if something broke late in the process.

## When to Use Task-Based Implementation

**Use task-based implementation when:**

-   Specification has 5+ distinct implementation items
-   Work can be parallelized across independent components
-   You need clear rollback boundaries
-   Implementation will exceed 30 minutes

**Use simpler approaches when:**

-   Specification is small (1-3 items)
-   Work is inherently sequential with no parallel opportunities
-   Quick prototype or exploration (not production code)
-   Entire implementation fits in single commit

The overhead of task extraction and subagent coordination isn't free. For a two-line bug fix, just fix it directly. For a feature implementation with database changes, API updates, and frontend modifications—use tasks.

## Lab: Task Decomposition

**Objective:** Practice identifying task structure from a specification.

### Task

Take a specification (your own or from previous labs) and extract its task structure:

1.  **List all implementation items** from the spec's checklist or requirements
    
2.  **Identify dependencies:**
    
    -   Which tasks require others to complete first?
    -   Which tasks can run in parallel?
3.  **Estimate task sizes:**
    
    -   Tasks should be 5-15 minutes of work each
    -   If larger, split into subtasks
    -   If smaller, consider combining
4.  **Draw the dependency graph:**
    
    ```
    Task 1 (schema) ─┬─> Task 3 (API)                 │Task 2 (utils) ──┴─> Task 4 (tests)
    ```
    

Don't implement yet—just map the structure. Understanding task relationships before implementation prevents mid-execution surprises.

## Try With AI

**Running Example Continued:** We have a refined report-spec.md. Now we implement by extracting tasks and delegating to subagents.

**Prompt 1: Extract Tasks from Spec**

```
Read report-spec.md. Extract the implementation checklist into tasks.For each task:- One sentence description- Dependencies (what must complete first?)- Can it run in parallel with others?Write to tasks.md.
```

**What you're learning:** The spec's checklist becomes your task list. "Write executive summary" depends on other sections (summarizes them). "Write tool comparison section" and "Write ROI section" might be independent. Making dependencies explicit prevents blocked subagents.

**Prompt 2: Implement First Task**

```
Implement report-spec.md using tasks.md.Use the task tool. Each task should be done by a subagent.After each task, commit before continuing.You are the main agent; your subagents are your writers.Start with task 1 only. Verify it meets the spec before proceeding.
```

**What you're learning:** The main agent orchestrates; subagents execute. Each subagent reads the spec and writes one section. Fresh context means the subagent writing "ROI Analysis" doesn't carry assumptions from the subagent that wrote "Tool Comparison."

**Prompt 3: Parallel Execution**

```
"Tool Comparison" and "Implementation Risks" in tasks.md have nodependencies on each other. Execute them in parallel using separatesubagents. Commit each independently when complete.
```

**What you're learning:** Independent sections can be written simultaneously. If "Tool Comparison" and "Implementation Risks" don't cross-reference, parallel execution halves the time. The spec keeps both subagents aligned on audience, tone, and depth.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   The Decision Framework

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/08-decision-framework.md)

# The Decision Framework

SDD is a power tool, not a universal solution. The wisdom is knowing when NOT to use it.

In Lesson 6, you learned the full implementation workflow: task delegation, context isolation, atomic commits. You now have the complete SDD toolkit. But a toolkit isn't valuable if you use a sledgehammer for every nail.

This lesson develops your judgment. By the end, you'll recognize task characteristics that signal "use SDD" versus "skip the ceremony." You'll learn the lightweight spec pattern for borderline cases. And you'll understand the common critiques of SDD so you can navigate them thoughtfully.

## When SDD Excels

The four-phase workflow adds overhead: research time, specification writing, interview questions, task orchestration. That overhead pays dividends when the alternative is worse.

Scenario

Why SDD Helps

**Large refactors (15+ files)**

Upfront spec prevents mid-refactor pivots

**Unclear requirements**

Research phase surfaces what you don't know

**Learning new libraries**

Parallel research accelerates understanding

**Team coordination**

Spec serves as contract between implementers

**Legacy modernization**

Captures original intent before rebuilding

**The pattern:** These scenarios share a characteristic—complexity that exceeds working memory. You can't hold a 15-file refactor in your head. You can't remember all the assumptions you made while exploring an unfamiliar library. The specification becomes external memory that preserves decisions across sessions and collaborators.

### Large Refactors: The Specification as Anchor

Without a spec, large refactors drift. You start renaming a module, realize you need to update imports, discover those imports have side effects, chase those side effects into another module, and suddenly you're four directories deep with no clear picture of what you've changed or why.

With a spec, you define the end state upfront. Each task references that spec. When you're deep in the fourth module, the spec reminds you: "We're renaming for consistency, not refactoring for performance." That anchor prevents well-intentioned tangents from derailing the project.

### Unclear Requirements: Research Reveals Structure

When requirements are fuzzy, SDD's research phase transforms vague goals into concrete specifications. The research isn't just about finding code patterns—it's about discovering what questions you didn't know to ask.

A developer approaching "add real-time collaboration" without SDD might jump straight to WebSocket code. With SDD, the research phase reveals: What conflict resolution strategy? What persistence model? What happens offline? By the time you write the spec, you understand the problem well enough to solve it.

### Learning New Libraries: Parallel Acceleration

Learning a new library through vibe coding means sequential trial and error. You try something, it fails, you search for examples, try again. Each failure teaches one lesson.

SDD's parallel research pattern changes this. You spawn subagents to investigate different aspects simultaneously: one explores authentication patterns, another investigates pagination, a third examines error handling. Research that takes hours sequentially completes in minutes—and you have a comprehensive spec before writing any application code.

## When SDD Is Overkill

The same overhead that pays dividends on complex tasks wastes time on simple ones.

Scenario

Why Skip SDD

**Single-file bug fixes**

Three-document workflow for one-line fix wastes time

**Well-defined simple features**

Implementation is obvious; spec adds no value

**Exploratory prototyping**

You're discovering requirements; vibe coding is faster

**Production incidents**

Need immediate action, not spec documents

**The pattern:** These scenarios share a characteristic—the solution is either obvious or unknowable. When you know exactly what to change, specifying it first adds no information. When you're exploring to discover what's possible, specifying upfront constrains discovery.

### Bug Fixes: Match Effort to Impact

A null pointer exception in line 47 of a utility function doesn't need a specification. You know the problem. You know the fix. The overhead of research, spec, interview, and tasks would take longer than just fixing the bug.

**Heuristic:** If you can explain the fix in one sentence, skip SDD. "Add null check before accessing user.preferences" doesn't benefit from a formal specification.

### Exploratory Prototyping: Discovering the Problem

Sometimes you don't know what you're building until you build something. A creative exploration—"What if we visualized this data differently?"—benefits from rapid iteration, not upfront specification.

Vibe coding serves exploration. You try an approach, see what happens, adjust. The "specification" emerges from what you learn. Formalizing too early constrains the creative process.

**Important:** Exploration is a phase, not an end state. Once you discover what works, you should often write a specification before building the production version. Exploration generates understanding; SDD turns that understanding into reliable implementation.

### Production Incidents: Time Sensitivity Overrides Process

When the system is down, you fix it first and document later. A production incident isn't the time for research phases and interview questions.

**Post-incident:** After resolving the immediate issue, SDD can help with the follow-up. "Prevent this class of failure" is the kind of unclear-requirement task where SDD excels. The incident response is direct; the long-term fix benefits from specification.

## The Decision Heuristic

For quick classification, apply this logic:

```
IF files_affected > 5 OR requirements_unclear OR learning_new_tech:    Use SDDELSE IF single_file AND bug_fix:    Skip SDDELSE:    Judgment call — try lightweight spec first
```

**The variables:**

-   **files\_affected > 5** — Changes across multiple files compound complexity. Coordination costs rise.
-   **requirements\_unclear** — If you can't explain the deliverable in one paragraph, research phase adds value.
-   **learning\_new\_tech** — Unfamiliar territory benefits from parallel research.
-   **single\_file AND bug\_fix** — Known problem, contained scope, obvious solution.

Most tasks fall into the "judgment call" category. That's where the lightweight spec pattern helps.

## The Lightweight Spec Pattern

When you're uncertain whether SDD is warranted, start light:

```
# Task: [One-line description]## Constraints- [What NOT to do]- [Boundaries on scope]## Success Criteria- [ ] [Measurable outcome 1]- [ ] [Measurable outcome 2]
```

That's it. No reference architecture analysis. No multi-phase implementation plan. Just constraints and success criteria.

**Why this works:** Constraints prevent scope creep. Success criteria define done. These two elements provide 80% of specification value with 20% of the overhead.

**When to expand:** If writing the lightweight spec reveals complexity—"Wait, how DO we handle the existing data?"—that's your signal. Convert to a full specification with research phase and interview. The lightweight spec became the seed for comprehensive planning.

**When to ship as-is:** If the lightweight spec feels sufficient—constraints are clear, success criteria are unambiguous—proceed directly to implementation. The spec exists for reference without the full ceremony.

## The Judgment Skill

Experienced practitioners develop intuition for when spec ceremony pays off. This intuition isn't mystical—it's pattern recognition from feedback loops.

**Building judgment requires:**

1.  **Tracking outcomes.** When a project struggles, ask: Would a specification have helped? When a project succeeds quickly, ask: Did I need the spec, or did I write it out of habit?
    
2.  **Calibrating overhead.** Time your specification writing. If a lightweight spec takes 10 minutes and a full spec takes 2 hours, you know the investment you're making. Match investment to risk.
    
3.  **Recognizing signals.** Certain project characteristics predict specification value:
    
    -   Multiple collaborators → Spec as contract
    -   Unfamiliar domain → Research phase valuable
    -   Reversibility low → Upfront planning justified
    -   Time horizon long → Specification ages better than memory

## Critiques and Counterpoints

SDD isn't universally praised. Research identifies legitimate concerns worth acknowledging.

### Critique 1: "This Is Just Waterfall"

**The concern:** Sequential phases (research → spec → implement) resemble waterfall methodology, which failed precisely because upfront planning couldn't anticipate implementation reality.

**The counterpoint:** SDD phases aren't isolated handoffs. The spec updates during implementation when reality diverges from plan. The difference from waterfall: tasks are atomic and reversible (git revert), not months-long commitments with no feedback.

### Critique 2: "Double Code Review"

**The concern:** Reviewing the spec AND reviewing the code doubles overhead.

**The counterpoint:** Spec review catches design problems; code review catches implementation problems. They're different error classes. Finding a design flaw during code review means discarding implementation work. Spec review surfaces design issues when changes are cheap.

### Critique 3: "Diminishing Returns at Scale"

**The concern:** As projects grow, specification maintenance becomes its own burden.

**The counterpoint:** This is legitimate. Long-running projects must decide whether to maintain specs as living documents (Spec-Anchored level) or treat them as implementation kickoff artifacts (Spec-First level). The choice depends on organizational needs.

### Critique 4: "Overhead on Simple Tasks"

**The concern:** Not every change needs four phases and three documents.

**The counterpoint:** Agreed. That's the point of this lesson. The decision framework exists precisely because SDD isn't always appropriate. The skill is knowing when.

## Try With AI

**Running Example Concluded:** We completed "Personal AI Employees in 2026" using the full workflow. Now we reflect: was SDD worth it?

**Prompt 1: Retrospective on Our Running Example**

```
We used SDD to write a CTO-facing report on AI tools:- Research: 4 agents investigated tools, ROI, risks, trajectory- Specification: report-spec.md with audience and constraints- Refinement: Interview clarified CTO context and decision needs- Implementation: Task-based writing with section commitsWas this overkill for a 2000-word report? Walk through:- What would we have missed with vibe coding?- What overhead did SDD add?- Net: was the investment justified?
```

**What you're learning:** For our report, research prevented writing for the wrong audience. The spec prevented scope creep into tutorials. Refinement caught that mid-size CTOs have different needs than enterprise. But a quick blog post wouldn't need this ceremony.

**Prompt 2: Classify These Tasks**

```
Apply the decision heuristic to these writing tasks:1. Fix typo in documentation (one line, obvious fix)2. Write quarterly report update (unclear what changed, many sections)3. Update team member bio (one paragraph, clear change)4. Write product launch announcement (unclear audience, needs research)5. Add FAQ item (one question, clear answer)For each: SDD, skip SDD, or lightweight spec?
```

**What you're learning:** Quick classification builds intuition. Tasks 1, 3, 5 are skip SDD (obvious, contained). Task 2 needs at least lightweight spec (what changed?). Task 4 needs full SDD (audience research required). Practice makes this instant.

**Prompt 3: Lightweight Spec for Borderline Task**

```
Task: "Write a blog post about our AI adoption journey"This is borderline—not trivial, not massive. Write a lightweight spec:- Just constraints (what NOT to reveal, what tone)- Just success criteria (what should readers take away?)If writing reveals complexity, note what research we'd need.
```

**What you're learning:** Lightweight specs are your probe. "Blog post about AI adoption" sounds simple until you write constraints: "Don't reveal vendor pricing" (wait, can we share ROI without that?), "Don't criticize tools we evaluated" (or do we want honest comparisons?). The spec reveals hidden decisions.

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Practical SDD Exercises

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/09-sdd-exercises.md)

# Practical SDD Exercises

You know the four-phase SDD workflow. You understand why specs beat vibe coding, how research prevents wrong assumptions, and how refinement catches what you missed. That knowledge gives you a vocabulary — but vocabulary without practice is just terminology.

These exercises put you in messy, realistic situations where the only path to a good outcome is the SDD discipline you learned in Lessons 1-8. Each one starts with a deliberately vague or chaotic scenario and asks you to transform it into something an AI agent can execute reliably. Three skills run through every exercise: **specification writing** (turning vague goals into precise, actionable documents), **research and refinement** (gathering context and surfacing hidden assumptions before committing to a plan), and **task delegation** (breaking specs into atomic, ordered tasks that an agent can execute independently).

None of these exercises involve writing code. SDD is a thinking methodology — it works for event planning, business operations, content creation, and any complex project where "just do it" leads to rework.

Download Exercise Files

**[Download SDD Exercises (ZIP)](https://github.com/panaversity/claude-code-sdd-exercises/releases/latest/download/sdd-exercises.zip)**

After downloading, unzip the file. Each exercise has its own folder with an `INSTRUCTIONS.md` and any starter files you need.

If the download link doesn't work, visit the [repository releases page](https://github.com/panaversity/claude-code-sdd-exercises/releases) directly.

* * *

## How to Use These Exercises

The workflow for every exercise is the same:

1.  **Open the exercise folder** from the `claude-code-sdd-exercises/` directory
2.  **Read the INSTRUCTIONS.md** inside the folder — it has setup steps and starter files
3.  **Read the walkthrough below** for context on what you're practicing and why
4.  **Start Claude Code or Cowork** and point it at the exercise folder
5.  **Work through the exercise** — write your own specs, don't just copy the starter
6.  **Reflect** using the questions provided — this is where the real learning happens

You don't need to complete all 27 in one sitting. Work through one module at a time. Each module targets a different phase of the SDD workflow.

* * *

## Tool Guide

-   🖥️ = **Claude Code** (terminal-based, best for exercises involving file creation and multi-step workflows)
-   🗂️ = **Cowork** (desktop app — point it at a folder and describe the task, best for research and document review)
-   Most exercises work with either tool. Start with whichever you're comfortable with.

* * *

## The SDD Exercise Framework

Use this for every exercise:

1.  **Research** — What do I need to know before I can specify this? What assumptions am I making?
2.  **Specify** — Write it down: goals, constraints, success criteria, what's out of scope
3.  **Refine** — What did I miss? Interview stakeholders (or yourself). Find the ambiguities.
4.  **Execute** — Hand the spec to Claude. Let the spec do the talking.
5.  **Verify** — Does the output match the spec? Not "does it look okay" — does it meet every criterion?
6.  **Iterate** — What would I change in the spec? Not in the output — in the spec itself.

This framework mirrors the four-phase SDD workflow from the chapter, with verification and iteration added because exercises give you the luxury of immediate feedback. In professional work, this same loop runs across days or weeks.

* * *

## Assessment Rubric

For each exercise, evaluate yourself on:

Criteria

Beginner (1)

Developing (2)

Proficient (3)

Advanced (4)

**Research Quality**

Skipped research entirely

Gathered some context

Systematic multi-angle investigation

Identified non-obvious sources and cross-validated

**Spec Completeness**

Vague description, no structure

Has goals but missing constraints

Goals, constraints, success criteria, scope

Reusable spec with edge cases anticipated

**Constraint Coverage**

No constraints defined

Listed obvious limits

Explicit inclusions AND exclusions

Tested constraints against edge cases

**Refinement Depth**

No refinement pass

Caught 1-2 gaps

Systematic ambiguity hunt with stakeholder lens

Refinement changed the spec's direction

**Task Delegation**

Monolithic "do everything"

Broke into a few chunks

Atomic tasks with clear dependencies

Tasks any agent could execute independently

* * *

## Module 1: Spec vs. Vibe — Seeing the Difference

> **Core Skill:** Recognizing the gap between vague instructions and precise specifications by experiencing both side by side.

### Exercise 1.1 — The Event Gone Wrong 🗂️🖥️

**The Problem:** Open the `event-gone-wrong/` folder in the exercise directory. You'll find `vibe-prompt.md` — a single vague instruction someone gave to an AI: "Plan a team building event for next month." You'll also find `aftermath.md` — a description of everything that went wrong when the AI executed that prompt (wrong date, wrong budget, activities nobody wanted, dietary restrictions ignored, no parking info).

**Your Task:** Read the aftermath document and reverse-engineer what the original prompt should have said. Write a complete specification that would have prevented every single problem described in the aftermath. Don't just add details — structure it with goals, constraints, attendee requirements, and measurable success criteria.

**What You'll Learn:**

-   Why vague prompts produce unpredictable results even when the AI "tries its best"
-   How to identify the gap between what you assumed and what you specified
-   That most project failures trace back to specification gaps, not execution errors

**Starter Prompt (Intentionally Vague):**

> "Plan a team building event for next month."

**Better Prompt (Build Toward This):** Think about: Who is attending? What's the budget ceiling? Are there date constraints? Dietary restrictions? Accessibility requirements? What does "successful" mean — how would you measure it? What should definitely NOT happen?

**Reflection Questions:**

1.  How many of the aftermath problems could you trace to a single missing sentence in the original prompt?
2.  What assumptions did the AI make that seemed reasonable but turned out wrong?
3.  Could your revised spec be handed to a completely different AI agent and still produce the right event?

* * *

### Exercise 1.2 — The Side-by-Side Test 🗂️🖥️

**The Problem:** Open the `side-by-side/` folder. You'll find a project brief: creating a company welcome packet for new employees. The brief has enough information to work with but plenty of ambiguity.

**Your Task:** Approach this project TWO different ways:

1.  **Vibe approach:** Give Claude the brief and a single-sentence instruction: "Create a welcome packet based on this brief." Save the output.
2.  **SDD approach:** Before touching Claude, write a full specification — goals, audience, required sections, tone constraints, success criteria, what NOT to include. Then give Claude the spec. Save the output.

Compare the two outputs side by side.

**What You'll Learn:**

-   The measurable difference between vibe-coded and spec-driven output
-   How specifications prevent the AI from making reasonable-but-wrong assumptions
-   That writing the spec takes 10 minutes but saves hours of revision

**Starter Prompt (Intentionally Vague):**

> "Create a welcome packet based on this brief."

**Better Prompt (Build Toward This):** Before prompting, write a spec document answering: What sections must be included? What tone (formal? friendly? casual)? What's the maximum length? What topics are off-limits? What should a new hire be able to DO after reading it? Who approved the content?

**Reflection Questions:**

1.  Which output would you actually send to a new employee? What specific differences made it better?
2.  How long did the spec take to write versus the time you'd spend fixing the vibe output?
3.  Were there any areas where the vibe approach actually produced something the spec approach missed?

* * *

### Exercise 1.3 — Vibe-to-Spec Rescue 🗂️🖥️

**The Problem:** Open the `vibe-rescue/` folder. You'll find three files — outputs from vibe-coded AI sessions that went sideways. Each one almost works but has fundamental problems: a marketing email with the wrong tone, a project timeline with impossible dependencies, and a budget spreadsheet with missing categories.

**Your Task:** For each failed output:

1.  Identify exactly what went wrong and why
2.  Write the specification that should have been written BEFORE the AI was asked to produce this
3.  Run your spec through Claude and compare the new output to the original failure

**What You'll Learn:**

-   How to diagnose specification failures from their symptoms in the output
-   That "fixing the output" is treating symptoms — fixing the spec treats the cause
-   The pattern of working backward from failure to missing specification

**Reflection Questions:**

1.  Which of the three failures was hardest to diagnose? Why?
2.  Did writing the spec after seeing the failure feel different from writing one cold?
3.  How would you explain the "fix the spec, not the output" principle to a colleague?

* * *

## Module 2: Research Phase — Gathering Context

> **Core Skill:** Transforming a broad question into a structured research task that produces actionable context for specification writing.

### Exercise 2.1 — The Multi-Angle Investigation 🗂️🖥️

**The Problem:** Open the `multi-angle/` folder. You'll find `project-brief.md` — a one-paragraph description of a project: building an internal knowledge base for a 50-person company. The brief is deliberately thin. Before you can write a useful spec, you need to understand the landscape.

**Your Task:** Ask Claude to research this topic from four different angles — write a separate research prompt for each:

1.  **User angle:** What do employees actually need from an internal knowledge base? What frustrations do they have with existing approaches?
2.  **Technical angle:** What platforms, formats, and organizational patterns exist for internal knowledge bases?
3.  **Organizational angle:** What change management challenges come with introducing a knowledge base? What makes adoption succeed or fail?
4.  **Competitive angle:** What do similar-sized companies use? What worked and what didn't?

Synthesize the four research outputs into a single "Research Summary" document.

**What You'll Learn:**

-   How different research angles reveal different constraints you'd otherwise miss
-   That a single research prompt produces shallow results — multi-angle research produces specification-ready context
-   How to structure research so its output feeds directly into specification writing

**Starter Prompt (Intentionally Vague):**

> "Research internal knowledge bases for me."

**Better Prompt (Build Toward This):** Write four separate, focused research prompts — each targeting one angle. Specify what format you want the findings in (bullet points? comparison table? summary paragraph?). Include a final synthesis prompt that combines all four into a research summary document.

**Reflection Questions:**

1.  Which research angle produced the most surprising findings?
2.  How would skipping any one angle have changed your understanding of the project?
3.  Did the synthesis reveal contradictions between angles (e.g., users want simplicity but the technical landscape is complex)?

* * *

### Exercise 2.2 — Source Reliability Audit 🗂️🖥️

**The Problem:** Open the `source-audit/` folder. You'll find `research-output.md` — a research document Claude produced about "best practices for remote team communication." The document is plausible but contains a mix of well-supported claims, vague generalizations, outdated references, and at least two statements that sound authoritative but are unverifiable.

**Your Task:**

1.  Read the research document carefully
2.  For each major claim, classify it: **Verified** (can confirm source), **Plausible** (reasonable but unverified), **Suspect** (sounds wrong or outdated), or **Unverifiable** (no way to check)
3.  Create an audit report that flags every suspect and unverifiable claim
4.  Ask Claude to redo the research with explicit instructions about sourcing: "Only include claims you can attribute to a specific source. Flag anything uncertain."
5.  Compare the original and audited versions

**What You'll Learn:**

-   That AI research output requires verification, not trust
-   How to build source-checking into your research workflow
-   The difference between "sounds right" and "is right"

**Reflection Questions:**

1.  How many claims in the original did you flag as suspect or unverifiable?
2.  Did the audited version produce fewer claims overall? Was that a good tradeoff?
3.  How would you incorporate source reliability checking into a real SDD research phase?

* * *

### Exercise 2.3 — Research Summary Document 🗂️🖥️

**The Problem:** Open the `research-summary/` folder. You'll find three separate research files — each covers a different aspect of the same topic (launching a community newsletter): audience analysis, content strategy research, and distribution platform comparison. They were produced independently and use different formats.

**Your Task:**

1.  Read all three research files
2.  Write a specification for a unified "Research Summary Document" — define the sections, format, how conflicts between sources should be handled, and what the document must contain to be useful for specification writing
3.  Give Claude your spec plus the three raw research files
4.  Evaluate the output: Does it actually synthesize (finding connections and conflicts) or just summarize (restating each file)?

**What You'll Learn:**

-   That synthesis and summarization are different skills — and your spec must demand synthesis
-   How to write specs for research outputs (meta-specification)
-   Why research quality determines specification quality

**The Challenge:** After generating the research summary, write the first draft of a specification for the community newsletter — using ONLY the research summary as your input. Note everywhere you wish the research had gone deeper.

**Reflection Questions:**

1.  Did Claude synthesize or summarize? What in your spec made the difference?
2.  Where did the research summary fall short when you tried to write a spec from it?
3.  What would you add to your research prompts next time to produce more spec-ready output?

* * *

## Module 3: Writing Your First Spec

> **Core Skill:** Transforming messy real-world requirements into structured specifications with clear goals, constraints, and success criteria.

### Exercise 3.1 — The Home Renovation Spec 🗂️🖥️

**The Problem:** Open the `home-renovation/` folder. You'll find `homeowner-notes.md` — a rambling, stream-of-consciousness dump from a homeowner describing what they want done to their kitchen. It's full of contradictions ("I want it modern but also cozy"), vague preferences ("nice countertops"), budget hand-waving ("not too expensive"), and missing information (no measurements, no timeline, no mention of permits).

**Your Task:** Transform the homeowner's notes into a structured renovation specification. Your spec must include:

1.  **Clear objectives** — What exactly is being renovated and why
2.  **Constraints** — Budget range, timeline, must-keep elements, non-negotiables
3.  **Success criteria** — How will the homeowner know the renovation succeeded?
4.  **Scope boundaries** — What is explicitly included AND excluded
5.  **Open questions** — What information is still missing that you'd need before a contractor could start

**What You'll Learn:**

-   How to extract structure from unstructured input without inventing information
-   The discipline of marking what you DON'T know instead of filling in assumptions
-   That good specs explicitly state their own gaps

**Starter Prompt (Intentionally Vague):**

> "Turn these renovation notes into a project plan."

**Better Prompt (Build Toward This):** Don't ask for a plan — ask for a spec. Tell Claude: "Extract goals, constraints, and success criteria from these notes. For anything ambiguous or missing, create an 'Open Questions' section rather than making assumptions. Format as a structured specification document."

**Reflection Questions:**

1.  How many contradictions did you find in the homeowner's notes? How did your spec handle them?
2.  How long was your "Open Questions" section? Does that tell you something about the quality of the original input?
3.  Could a contractor read your spec and give an accurate quote without additional conversation?

* * *

### Exercise 3.2 — The Charity Fundraiser Spec 🗂️🖥️

**The Problem:** Open the `charity-fundraiser/` folder. You'll find `committee-email-thread.md` — an email thread from a 5-person charity event committee. Everyone has different ideas. One wants a gala dinner, another wants a fun run, a third wants an online auction. They agree on the cause but not the approach. The thread also reveals unstated constraints: one member can't do weekends, the venue contact is the chair's personal connection, and there's an implicit assumption about the budget that nobody's confirmed.

**Your Task:** Write a specification for the fundraiser that:

1.  Captures all stated AND unstated constraints from the email thread
2.  Resolves (or explicitly flags) the disagreements between committee members
3.  Defines what "successful fundraiser" means in measurable terms
4.  Includes a "Decisions Required" section listing every choice the committee still needs to make
5.  Is structured so each committee member can review the section relevant to them

**What You'll Learn:**

-   How to extract specifications from multi-stakeholder input where people disagree
-   The critical skill of separating "decided" from "still open"
-   That surfacing unstated constraints is more valuable than solving stated ones

**Reflection Questions:**

1.  How many unstated constraints did you find in the email thread?
2.  Did structuring the disagreements as "Decisions Required" make them easier or harder to resolve?
3.  Would this spec work as the agenda for the next committee meeting?

* * *

### Exercise 3.3 — Spec from Chaos 🗂️🖥️

**The Problem:** Open the `spec-from-chaos/` folder. You'll find a mix of input files — a voice memo transcript (`transcript.md`), a whiteboard photo description (`whiteboard.md`), a Slack conversation export (`slack-thread.md`), and a half-finished project brief (`draft-brief.md`). Together they describe a project to create an employee onboarding program, but no single document tells the whole story.

**Your Task:**

1.  Read all four input files
2.  Create a "Source Map" — for each piece of information in your spec, note which source it came from
3.  Write a complete specification that synthesizes all four sources
4.  Identify contradictions between sources and resolve them (or flag them in a "Conflicts" section)
5.  List everything that's assumed but not confirmed by any source

**What You'll Learn:**

-   How to synthesize multiple messy sources into a single coherent spec
-   The discipline of traceability — knowing where each spec requirement came from
-   That real-world specifications rarely come from a single clean brief

**The Twist:** After writing your spec, remove one of the four source documents and see what's missing. This reveals which sources contributed unique information versus redundant context.

**Reflection Questions:**

1.  Which source contributed the most unique information? Which was mostly redundant?
2.  How did contradictions between sources change the spec compared to using any single source?
3.  Would you structure the information-gathering phase differently if you could start over?

* * *

## Module 4: Constraints & Success Criteria

> **Core Skill:** Writing constraints and success criteria that are specific enough to verify and broad enough to allow creative solutions.

### Exercise 4.1 — The Missing Guardrails 🗂️🖥️

**The Problem:** Open the `missing-guardrails/` folder. You'll find three specifications (`spec-a.md`, `spec-b.md`, `spec-c.md`) that each have goals and some structure but are missing critical constraints. Spec A is for a company blog content calendar — no constraints on topics, frequency, or voice. Spec B is for an office supply ordering system — no budget limits, no approval process. Spec C is for a customer feedback survey — no length limit, no scope boundary, no privacy constraints.

**Your Task:** For each specification:

1.  Identify what would go wrong if Claude executed this spec as-is (predict the failure mode)
2.  Add the missing constraints — be specific, not vague ("budget: $500/month" not "reasonable budget")
3.  For each constraint you add, write a one-sentence justification of why it's necessary
4.  Run both versions (original and constrained) through Claude and compare outputs

**What You'll Learn:**

-   That specifications without constraints produce technically-correct-but-useless output
-   How to anticipate failure modes by reading a spec critically
-   The difference between constraints that prevent harm and constraints that shape quality

**Starter Prompt (Intentionally Vague):**

> "Create a content calendar for our blog."

**Better Prompt (Build Toward This):** Before giving the task, list what MUST NOT happen: no topics outside our expertise areas, no posts longer than 1200 words, no more than 3 posts per week, no promotional tone in educational content. Then list what MUST happen: every post needs a clear CTA, every post targets one of our 4 audience segments.

**Reflection Questions:**

1.  Which specification was most dangerous without constraints? Why?
2.  Did adding constraints change the output quality or just prevent problems?
3.  How many constraints is "too many"? Did any of your constraints fight each other?

* * *

### Exercise 4.2 — Measurable vs. Vague 🗂️🖥️

**The Problem:** Open the `measurable-vs-vague/` folder. You'll find `success-criteria.md` — a list of 15 success criteria from various real projects. Some are measurable ("newsletter opens exceed 25% within 3 months"), some are vague ("users should find it easy to use"), and some are somewhere in between.

**Your Task:**

1.  Classify each criterion as **Measurable**, **Vague**, or **Borderline**
2.  Rewrite every vague and borderline criterion to make it measurable
3.  For each rewrite, note what decision you had to make (e.g., "easy to use" required defining easy for whom, doing what, measured how)
4.  Pick 3 of your rewritten criteria and ask Claude to create a verification plan — how would you actually test whether the criterion was met?

**What You'll Learn:**

-   The difference between success criteria that sound good and ones you can verify
-   That making criteria measurable forces you to make decisions you'd otherwise defer
-   How verification plans expose criteria that are technically measurable but impractical to check

**Reflection Questions:**

1.  Which vague criterion was hardest to make measurable? What made it hard?
2.  Did any measurable-sounding criteria turn out to be unverifiable when you wrote the verification plan?
3.  How would you explain the value of measurable criteria to a stakeholder who says "we'll know it when we see it"?

* * *

### Exercise 4.3 — Constraint Stress Test 🗂️🖥️

**The Problem:** Open the `constraint-stress-test/` folder. You'll find a well-written specification for an employee training program (`training-spec.md`). It has goals, constraints, success criteria — the works. Your job is to break it.

**Your Task:**

1.  Read the spec carefully
2.  Write 5 scenarios that technically satisfy every constraint but produce a terrible outcome (malicious compliance)
3.  For each scenario, identify the missing constraint that would have prevented it
4.  Add your new constraints to the spec
5.  Try to break the updated spec with 3 more scenarios
6.  Repeat until you can't find loopholes

**What You'll Learn:**

-   That "stress testing" specifications is as important as stress testing code
-   How to think adversarially about your own specifications
-   That the best constraints come from imagining how they could be maliciously obeyed

**The Twist:** Swap your stress-tested spec with a classmate's (or set it aside for 24 hours and return fresh). Can you find loopholes they missed? Can they find yours?

**Reflection Questions:**

1.  How many rounds of stress testing did it take before you couldn't find more loopholes?
2.  Did adversarial thinking change how you write constraints going forward?
3.  Is there a point where adding more constraints makes the spec harder to work with?

* * *

## Module 5: Refinement — Finding What's Missing

> **Core Skill:** Using structured interviews and systematic review to surface the assumptions, ambiguities, and gaps that survive the first draft.

### Exercise 5.1 — The Interview Challenge 🗂️🖥️

**The Problem:** Open the `interview-challenge/` folder. You'll find `draft-spec.md` — a first-draft specification for a company offsite retreat. It covers the basics (date, location, activities) but has the typical first-draft problems: unexamined assumptions, missing stakeholder perspectives, and ambiguities that would cause problems during execution.

**Your Task:**

1.  Read the draft spec
2.  Ask Claude to play the role of "tough interviewer" — someone whose job is to find every assumption, ambiguity, and gap. Use this prompt pattern: "Read this spec and ask me every question that, if left unanswered, could cause the project to fail or deliver the wrong result."
3.  Answer Claude's questions honestly (you'll discover that some answers require decisions you haven't made yet)
4.  Update the spec based on the interview
5.  Compare the before and after versions

**What You'll Learn:**

-   That first drafts always contain hidden assumptions — the interview process surfaces them
-   How to use Claude as a refinement partner, not just an executor
-   The difference between "I think the spec is done" and "the spec has survived questioning"

**Starter Prompt (Intentionally Vague):**

> "Review my spec and tell me if it's good."

**Better Prompt (Build Toward This):** Be specific about what you want challenged: "Read this spec. For every statement, ask: What could go wrong if this is ambiguous? What assumption am I making? What stakeholder perspective is missing? Don't be polite — find the gaps."

**Reflection Questions:**

1.  How many questions did Claude ask that you couldn't answer without making a new decision?
2.  Which question surprised you the most?
3.  How much did the spec change after the interview? Was it cosmetic or structural?

* * *

### Exercise 5.2 — Ambiguity Hunter 🗂️🖥️

**The Problem:** Open the `ambiguity-hunter/` folder. You'll find `polished-spec.md` — a specification that looks complete and professional. It has sections, formatting, success criteria — all the right structure. But it contains 10 deliberate ambiguities hidden in plain sight. They're not typos or missing sections — they're statements that two reasonable people would interpret differently.

**Your Task:**

1.  Read the spec and find as many ambiguities as you can
2.  For each ambiguity, write two different interpretations that are both valid
3.  Ask Claude to find ambiguities you missed (compare its list to yours)
4.  Resolve each ambiguity by rewriting the statement to be unambiguous
5.  Check your answer against `answer-key.md` — how many of the 10 did you catch?

**What You'll Learn:**

-   That professional-looking specs can hide dangerous ambiguities
-   How ambiguity differs from vagueness — ambiguous statements feel clear until two people disagree
-   The discipline of reading specs as if you're trying to misunderstand them

**Reflection Questions:**

1.  How many of the 10 ambiguities did you catch before checking the answer key?
2.  Were the ambiguities you missed different in character from the ones you caught?
3.  Did Claude find ambiguities you missed, or did you outperform it?

* * *

### Exercise 5.3 — Stakeholder Perspectives 🗂️🖥️

**The Problem:** Open the `stakeholder-perspectives/` folder. You'll find `product-spec.md` — a specification for a new internal tool. It was written from the project manager's perspective. Your job is to review it from three other perspectives that weren't consulted.

**Your Task:**

1.  Review the spec as the **end user** — someone who'll use this tool daily. What's missing? What would frustrate you?
2.  Review the spec as the **IT administrator** — someone responsible for security, maintenance, and integration. What concerns you?
3.  Review the spec as the **executive sponsor** — someone funding this and expecting ROI. What success criteria are missing?
4.  Write a "Stakeholder Review Summary" documenting every gap, concern, and missing requirement from each perspective
5.  Update the spec to address the most critical findings

**What You'll Learn:**

-   That every spec has blind spots determined by who wrote it
-   How different stakeholders see different risks and requirements in the same project
-   The practice of systematic perspective-shifting as a refinement technique

**The Extension:** Ask Claude to review the spec from a perspective you didn't think of — a compliance officer, a competitor, or a new employee encountering the tool for the first time. Did this novel perspective reveal anything the three standard perspectives missed?

**Reflection Questions:**

1.  Which perspective found the most critical gaps?
2.  Were there requirements that one perspective demanded but another would oppose?
3.  How many perspectives is "enough" for a real project? How do you decide when to stop?

* * *

## Module 6: Task Breakdown & Delegation

> **Core Skill:** Decomposing specifications into atomic, dependency-ordered tasks that an AI agent (or human team) can execute independently.

### Exercise 6.1 — The Dependency Map 🗂️🖥️

**The Problem:** Open the `dependency-map/` folder. You'll find `project-spec.md` — a specification for organizing a 3-day workshop. The spec lists 20 deliverables (venue booking, schedule creation, materials preparation, speaker coordination, catering, AV setup, registration system, etc.) but doesn't specify any ordering or dependencies.

**Your Task:**

1.  Read the spec and identify all 20 deliverables
2.  Map the dependencies: which tasks must complete before others can start? Which can run in parallel?
3.  Create a visual dependency map (as a text diagram or table) showing the critical path
4.  Identify which tasks are "blocking" (many things depend on them) vs. "independent" (can happen anytime)
5.  Ask Claude to execute the first 3 tasks from your dependency map in the correct order

**What You'll Learn:**

-   That task ordering isn't obvious — the same deliverables can be sequenced many valid ways
-   How to identify critical-path tasks that block everything else
-   The difference between sequential constraints (A must finish before B) and resource constraints (only one person, so A and B can't actually be parallel)

**Starter Prompt (Intentionally Vague):**

> "Break this project into tasks and do them."

**Better Prompt (Build Toward This):** Don't ask Claude to just "break it down." Ask: "Identify all deliverables, map which ones depend on which, find the critical path, and tell me which 3 tasks should start first and why. Show the dependency map as a diagram."

**Reflection Questions:**

1.  How many dependency relationships did you find? Were any surprising?
2.  Which task is the biggest bottleneck — the one where a delay cascades to the most other tasks?
3.  If you had two AI agents working in parallel, which tasks would you assign to each?

* * *

### Exercise 6.2 — Atomic Task Writer 🗂️🖥️

**The Problem:** Open the `atomic-tasks/` folder. You'll find `bad-tasks.md` — a list of 10 task descriptions that are too vague for an AI agent to execute reliably. Examples: "Handle the marketing stuff," "Make the website better," "Deal with customer feedback." Each task is an actual instruction someone might give, and each one would produce unpredictable results.

**Your Task:**

1.  For each vague task, rewrite it as 2-4 atomic tasks that are specific enough for Claude to execute without follow-up questions
2.  Each atomic task must pass the "hand-off test": could you give this task description to someone with zero context and get the right result?
3.  Include for each atomic task: a clear deliverable, an input (what the agent needs), and a verification check (how to confirm it's done correctly)
4.  Test 3 of your atomic tasks by actually giving them to Claude — does the output match your expectations?

**What You'll Learn:**

-   The difference between human-understandable tasks and agent-executable tasks
-   How to write task descriptions that don't require follow-up questions
-   That the "hand-off test" is the gold standard for task specification

**Reflection Questions:**

1.  Which vague task was hardest to make atomic? What made it resist decomposition?
2.  Did any of your "atomic" tasks still produce unexpected output from Claude? What was still ambiguous?
3.  How granular is "too granular"? Where's the line between helpfully specific and micromanaging?

* * *

### Exercise 6.3 — Delegation Simulation 🗂️🖥️

**The Problem:** Open the `delegation-sim/` folder. You'll find `product-launch-spec.md` — a complete specification for launching a new product. Your job is to act as the project manager: break the spec into tasks, assign them, sequence them, and manage the execution.

**Your Task:**

1.  Break the spec into 8-12 atomic tasks
2.  Identify which tasks could be delegated to different "agents" (in a real workflow, these would be Claude Code subagents)
3.  Write a delegation plan: which agent gets which task, in what order, with what inputs
4.  Execute the first 3 tasks by giving Claude each task description one at a time (simulating separate agent contexts)
5.  After each task, verify the output meets the spec before moving to the next
6.  Write a brief "execution report" noting where the delegation plan worked and where it needed adjustment

**What You'll Learn:**

-   The full loop from spec to tasks to delegation to execution to verification
-   That delegation plans need adjustment during execution — rigid plans break
-   How task handoffs work when each "agent" has no memory of what the previous one did

**The Goal:** Your delegation plan should be detailed enough that someone else could manage the execution by following your plan, without understanding the original spec.

**Reflection Questions:**

1.  Did any task's output not match what the next task expected as input? How did you handle the handoff?
2.  Which tasks benefited from being in separate "agent" contexts, and which suffered from losing shared context?
3.  How would you change your delegation plan if you were doing this project again?

* * *

## Module 7: Full SDD Cycle — End to End

> **Core Skill:** Running the complete SDD workflow — from research through execution — on a single real-world project.

### Exercise 7.1 — Community Newsletter 🗂️🖥️

**The Problem:** Open the `community-newsletter/` folder. You'll find `brief.md` — a brief from a neighborhood association that wants to start a monthly community newsletter. The brief mentions wanting to "keep everyone informed" but is otherwise vague. No format, no content strategy, no distribution plan, no budget.

**Your Task:** Run the complete SDD cycle:

1.  **Research:** Investigate what successful community newsletters look like (ask Claude to research formats, frequency, content types, distribution methods, common mistakes)
2.  **Specify:** Write a complete specification covering content strategy, format, distribution, schedule, roles, and success criteria
3.  **Refine:** Ask Claude to interview you about the spec — let it challenge your assumptions about audience, content mix, and sustainability
4.  **Execute:** Break the spec into tasks and have Claude produce the first issue (template, content outline, distribution plan)
5.  **Verify:** Check every output against your spec's success criteria

**What You'll Learn:**

-   How the four SDD phases feel when you run them end-to-end on a real project
-   Where you're tempted to skip phases (research and refinement, usually)
-   That the discipline pays off in output quality, not just process compliance

**Reflection Questions:**

1.  Which phase took the longest? Which produced the most value per minute spent?
2.  Where were you tempted to skip ahead? What would you have missed?
3.  Could someone run the second newsletter issue using only your spec, without talking to you?

* * *

### Exercise 7.2 — Office Move Planner 🗂️🖥️

**The Problem:** Open the `office-move/` folder. You'll find `scenario.md` — a scenario where a 30-person company needs to move to a new office in 8 weeks. The scenario includes constraints (budget, lease dates, IT requirements, employees with accessibility needs) and a few curveballs (the CEO wants a standing desk area, the server room needs special cooling, two teams refuse to sit near each other).

**Your Task:** Run the complete SDD cycle:

1.  **Research:** What does a successful office move require? What goes wrong most often? What's typically forgotten?
2.  **Specify:** Write a move specification covering timeline, budget allocation, space planning requirements, IT migration, employee communication plan, and contingency provisions
3.  **Refine:** Have Claude interview you about the spec — particularly around the curveball requirements (standing desks, cooling, seating politics)
4.  **Execute:** Break into phased tasks (Week 1-2, 3-4, 5-6, 7-8) with dependencies and have Claude produce the deliverables for Phase 1
5.  **Verify:** Check Phase 1 output against spec criteria

**What You'll Learn:**

-   How SDD handles projects with hard deadlines and non-negotiable constraints
-   How curveball requirements stress-test your specification's flexibility
-   The value of phased execution with verification checkpoints

**The Twist:** After completing Phase 1 deliverables, introduce a change: the budget just got cut by 20%. Update the spec and re-plan remaining phases. This tests whether your spec is adaptable or brittle.

**Reflection Questions:**

1.  How did the curveball requirements affect your spec? Did they require structural changes or just additions?
2.  When the budget changed, how much of your spec survived versus needed rewriting?
3.  What would have happened if you'd started executing without a spec and THEN the budget changed?

* * *

### Exercise 7.3 — Product Launch Playbook 🗂️🖥️

**The Problem:** Open the `product-launch/` folder. You'll find `pitch.md` — an entrepreneur's pitch for a new local meal prep delivery service. The pitch is passionate but disorganized — part business plan, part feature list, part marketing copy. Your job is to turn this chaos into an executable launch playbook using the full SDD cycle.

**Your Task:** Run the complete SDD cycle:

1.  **Research:** Investigate the meal prep delivery market (competitors, pricing models, common failure modes, regulatory requirements for food businesses)
2.  **Specify:** Write a launch playbook specification covering: pre-launch tasks, launch day plan, first-week operations, success metrics, budget allocation, and risk mitigation
3.  **Refine:** Interview yourself from three perspectives — the entrepreneur, a potential customer, and a skeptical investor. Update the spec based on what each perspective reveals.
4.  **Execute:** Break into tasks and have Claude produce: a launch timeline, a marketing plan outline, an operations checklist, and a budget spreadsheet
5.  **Verify:** Score every deliverable against the spec's success criteria

**What You'll Learn:**

-   How SDD transforms an unstructured vision into an executable plan
-   How multi-perspective refinement catches blind spots a single viewpoint misses
-   The end-to-end experience of going from chaos to structured deliverables

**Reflection Questions:**

1.  How different is the final playbook from what the entrepreneur originally described in the pitch?
2.  Which perspective (entrepreneur, customer, investor) changed the spec the most?
3.  Is the playbook actually executable — could the entrepreneur follow it starting tomorrow?

* * *

## Module 8: Capstone Projects

> **Choose one (or more). Spend real time on it. This is where everything comes together.**

Capstones are different from the exercises above. There are no starter prompts — you design the entire SDD workflow yourself. Each project is complex enough to require genuine research, meaningful refinement, and multi-phase task delegation.

### Capstone A — Wedding Planner System 🗂️🖥️

Open the `capstone-wedding/` folder. You'll find `couple-brief.md` — a couple's wish list for their wedding (150 guests, outdoor ceremony, indoor reception, specific dietary mix, budget range, 3 potential dates). The brief has the usual contradictions (elegant but casual, locally-sourced but affordable) and missing information (no mention of accessibility, weather contingency, or vendor preferences).

Run the full SDD cycle to produce a complete wedding planning system:

-   Research: venue options, vendor categories, timeline benchmarks, common disaster scenarios
-   Specification: comprehensive wedding spec with every vendor category, timeline, budget allocation, guest management approach, and contingency plans
-   Refinement: interview from four perspectives (couple, guest, venue coordinator, day-of coordinator)
-   Execution: produce a master timeline, budget tracker, vendor comparison matrices, guest management system, and day-of run sheet
-   Verification: every deliverable checked against the spec

**What You'll Learn:**

-   How SDD handles emotionally-charged projects where stakeholders have conflicting desires
-   How to manage specifications with hundreds of interconnected details
-   The full professional workflow from client brief to deliverable package

* * *

### Capstone B — Small Business Launch Kit 🗂️🖥️

You're helping a friend launch a tutoring business. Open the `capstone-business/` folder for the `founder-vision.md` — a mix of market observations, personal goals, service ideas, and financial hopes. No structure, many assumptions, some unrealistic expectations.

Run the full SDD cycle to produce a complete business launch kit:

-   Research: local tutoring market, pricing models, legal requirements, marketing channels for education businesses, common failure modes in first-year tutoring businesses
-   Specification: business plan spec covering services, pricing, target market, marketing strategy, operations, financial projections, and legal/compliance requirements
-   Refinement: interview from four perspectives (founder, parent/customer, competing tutor, accountant)
-   Execution: produce a business plan document, pricing calculator, marketing calendar, client intake form, and first-month operations checklist
-   Verification: every deliverable checked against measurable success criteria

**What You'll Learn:**

-   How SDD applies to business planning where most decisions are interconnected
-   How research prevents common first-business mistakes (underpricing, overcommitting, skipping legal)
-   Building a complete deliverable package that a real founder could use

* * *

### Capstone C — Personal Goal System 🗂️🖥️

This capstone is different. Instead of a provided scenario, you build a system for YOUR real goals. Open the `capstone-personal/` folder for a template, but the content comes from you.

Pick a real personal goal (career change, fitness target, financial milestone, learning objective, creative project) and run the full SDD cycle:

-   Research: what does success look like for this type of goal? What do people who achieved it say about the process? What are common failure modes?
-   Specification: write a personal goal spec with milestones, constraints (time, money, energy), success criteria, and a realistic timeline
-   Refinement: have Claude interview you ruthlessly — challenge your assumptions about available time, motivation sustainability, and whether your criteria are truly meaningful to you
-   Execution: produce a tracking system, weekly review template, milestone checklist, and contingency plans for common obstacles
-   Verification: does every deliverable actually serve the goal? Would you use it tomorrow?

**What Makes This Special:** Unlike Capstones A and B, this one has real stakes. The SDD cycle applied to your actual goals produces deliverables you'll keep using after this course. The refinement phase — where Claude challenges your assumptions — often reveals that the goal you stated isn't quite the goal you meant.

**What You'll Learn:**

-   How SDD applies to personal planning, not just business or technical projects
-   That the refinement interview is most valuable when the stakes are personal
-   The difference between a vague aspiration and a specified, executable goal

* * *

## What's Next

You've practiced the three core SDD skills — specification writing, research-driven refinement, and task delegation — across 27 exercises. These skills compound: each exercise builds intuition for transforming vague intentions into precise, executable plans. The SDD workflow you practiced here isn't just for software development — it's a general methodology for any complex project where "just figure it out" leads to rework. Up next is the Chapter 5 Quiz, where you'll test your conceptual understanding of everything from vibe coding failure modes to the four-phase workflow and the decision framework.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 5: Spec-Driven Development with Claude Code](/docs/General-Agents-Foundations/spec-driven-development)
-   Chapter 5: Spec-Driven Development Quiz

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/05-spec-driven-development/10-chapter-quiz.md)

# Chapter 5 Quiz

Test your understanding of Spec-Driven Development with Claude Code. This quiz covers all concepts from the chapter including vibe coding failure modes, the three SDD levels, the four-phase workflow, and the decision framework.

Checking access...

---

Source: https://agentfactory.panaversity.org/docs/01-General-Agents-Foundations/05-spec-driven-development
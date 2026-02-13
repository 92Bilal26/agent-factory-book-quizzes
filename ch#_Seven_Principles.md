# General Agents Foundations: Seven Principles

> Downloaded from Agent Factory on 2/12/2026
> Total lessons: 11

## Table of Contents

1. [Operational Best Practices](#operational-best-practices)
2. [Principle 1: Bash is the Key](#principle-1-bash-is-the-key)
3. [Principle 2: Code as the Universal Interface](#principle-2-code-as-the-universal-interface)
4. [Principle 3: Verification as Core Step](#principle-3-verification-as-core-step)
5. [Principle 4: Small, Reversible Decomposition](#principle-4-small-reversible-decomposition)
6. [Principle 5: Persisting State in Files](#principle-5-persisting-state-in-files)
7. [Principle 6: Constraints and Safety](#principle-6-constraints-and-safety)
8. [Principle 7: Observability](#principle-7-observability)
9. [Putting It All Together: Workflows in Practice](#putting-it-all-together-workflows-in-practice)
10. [Principles Exercises: Practice the Seven Principles](#principles-exercises-practice-the-seven-principles)
11. [Chapter 6: The Seven Principles Quiz](#chapter-6-the-seven-principles-quiz)

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Operational Best Practices

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/00-operational-best-practices.md)

# Operational Best Practices

You've learned what General Agents are and experienced Claude Code firsthand. But here's a pattern that separates struggling users from productive ones: **workflow discipline**.

Picture this scenario. You open Claude Code with a vague task in mind. You type a prompt. Claude responds. You add more context. Claude does something unexpected. You correct it. Claude tries again. Your context fills up. Quality degrades. You're twenty minutes in, frustrated, with nothing to show.

This isn't Claude's failure—it's a workflow failure. The most productive Claude Code users follow specific operational patterns that prevent this frustration before it starts. This lesson introduces those patterns before you learn the seven principles that explain *why* they work.

Think of this as learning to drive before studying automotive engineering. You need practical competence first; the deeper understanding comes next.

## The Four-Phase Workflow

Every non-trivial task benefits from structure. The four-phase workflow transforms messy exploration into systematic progress.

### Phase 1: Explore

Before Claude changes anything, it needs to understand what exists. Plan Mode enforces this discipline.

Enter Plan Mode by pressing `Shift+Tab` or clicking the toggle in the interface. In this mode, Claude will read files and gather context but won't make any edits. It's reconnaissance.

> **Teacher's Tip**: Plan Mode is Principle 6 (Constraints and Safety) in action—it's a read-only constraint. If you're working on mission-critical files, stay in Plan Mode until you're 100% sure of the approach.

Your prompt in Plan Mode might be:

```
Explore this codebase. I want to add user authentication.Where would that logic go? What patterns does this project already use?
```

Claude reads, searches, and maps the territory. You see what it discovers. No files change. No risk. Just understanding.

### Phase 2: Plan

Once Claude understands the landscape, ask it to create a plan:

```
Based on what you found, create an implementation plan for addinguser authentication. List the files you'll change and what each change does.
```

Claude produces a structured plan. Review it. Use `Ctrl+G` (or `Cmd+G` on Mac) to edit the plan if something looks wrong. This is where you catch misunderstandings—before any code is written.

The key insight: **course correction is cheap during planning, expensive during implementation**.

### Phase 3: Implement

With a reviewed plan, switch to Normal Mode (`Shift+Tab` again). Now Claude can make changes. But it's not improvising—it's executing an agreed plan, one step at a time.

After each significant step, Claude should verify. Did the change work? Do tests pass? Is the behavior correct? This is where Principle 3 (Verification as Core Step) becomes concrete, which you'll learn in detail later in this chapter.

### Phase 4: Commit

When implementation is complete and verified, ask Claude to commit the work:

```
Commit these changes with a descriptive message summarizingwhat we did and why.
```

Claude stages the relevant files and creates a commit. Your work is safely captured in version control, ready to share or revert if needed.

### When to Skip Planning

Not everything needs the full four-phase treatment. Simple tasks can go straight to implementation:

-   Fixing a typo
-   Adding a single log statement
-   Changing one configuration value
-   Tasks where the path is obvious and the scope is tiny

But here's the rule of thumb: **if you're unsure whether to plan, you should plan**. The cost of unnecessary planning is a few minutes. The cost of improvising a complex change is often an hour of cleanup.

## Course Correction and Reversibility

Claude Code sessions are experiments. Not every experiment succeeds. The key is recognizing when to change direction—and having the tools to do so cleanly.

### The Escape Key

When Claude is mid-response and you see it heading somewhere unproductive, press `Esc`. Claude stops immediately. Your context is preserved. You haven't lost anything—you've just prevented wasted tokens.

Use `Esc` liberally. It's not an emergency brake; it's a steering wheel. See Claude starting to refactor code you didn't ask about? `Esc`. See Claude exploring files that aren't relevant? `Esc`. See a response that's going to be too long? `Esc`.

### Checkpoints and /rewind

Claude Code creates checkpoints automatically before every tool use that modifies your system. These are snapshots you can return to.

Press `Esc` twice (or use `/rewind`) to open the checkpoint menu. You'll see a list of recent states. Select one, and Claude restores your session to that point. All the files, all the context, all the conversation—rolled back.

> **The Time Machine Combo**: Single `Esc` is your steering wheel (stops Claude mid-response). Double `Esc` (press twice) or `/rewind` opens the checkpoint menu—your time machine to go back before you steered wrong. Together, they mean you can never truly get lost.

This transforms how you work with Claude. You can try risky approaches knowing you can always rewind. You can explore multiple solutions and keep the best one. Checkpoints make experimentation safe.

### Resuming Sessions

Sometimes you need to stop mid-task. Two commands help you pick up where you left off:

-   `--continue`: Resume your most recent session in the current directory
-   `--resume`: Show a list of recent sessions to choose from

Your context, conversation, and progress are preserved. You don't start from scratch.

### Context Management (Reference)

When your context window fills with irrelevant information, quality degrades. Chapter 4, Lesson 6 covers context lifecycle commands in detail:

-   `/clear`: Start fresh with empty context
-   `/compact`: Summarize and compress existing context

For now, know they exist. When you notice responses getting worse, context pollution is often the cause.

## Permission Configuration

Claude Code's permission system balances autonomy with safety. Understanding it helps you configure the right level of trust.

### The Permission Prompt

By default, Claude asks permission before running commands or editing files. This is safe but interrupts flow. When you see a permission prompt, you have three choices:

-   **Allow once**: Permit this specific action
-   **Allow for session**: Permit this category of action for the rest of the session
-   **Deny**: Block this action

### Configuring Permissions

Use `/permissions` to see and modify your current permission settings. You can allowlist commands you trust:

```
# Allow all git commandsgit *# Allow running testsnpm testpytest# Allow reading any filecat *
```

Allowlisted commands run without prompting. This speeds up common workflows while keeping unusual operations gated.

### Standard Safe List (Copy This)

Not sure what to allowlist? Here's a starting point for most developers:

```
# Read operations (safe - can't modify anything)ls, cat, grep, find, head, tail, wc# Verification operations (safe - just runs tests)npm test, pytest, go test, cargo test# Observability operations (safe - just shows status)git status, git diff, git log
```

These commands let Claude investigate and verify without asking permission for every read. Start here, then add commands you trust as patterns emerge.

### Sandbox Mode

For maximum autonomy, `/sandbox` creates an OS-level isolated environment. Claude can do almost anything inside the sandbox without affecting your real system.

This is useful for:

-   Letting Claude explore and experiment freely
-   Running untrusted code safely
-   Automated workflows where you can't be present to approve

The `--dangerously-skip-permissions` flag disables permission prompts entirely. Only use this inside sandboxed environments where Claude can't do real damage.

### Finding Your Level

Most users start with default permissions, then gradually allowlist trusted commands. The goal is a permission configuration that matches your trust level:

-   **Tight permissions**: Every action asks. Safe but slow.
-   **Moderate permissions**: Common actions allowed, unusual actions ask.
-   **Loose permissions (sandboxed)**: Full autonomy in an isolated environment.

Chapter 6, Lesson 6 explores constraints and safety in depth. For now, experiment with `/permissions` to find your comfort level.

## The Interview Pattern

For larger features, there's a counterintuitive approach that saves time: have Claude interview *you* before it writes anything.

### The One-Liner Version

If you want the shortest possible prompt:

```
Don't code yet. Interview me until you have a 100% clear spec.
```

That's it. Claude will ask questions until it understands exactly what you need.

### How It Works

Instead of describing what you want and hoping Claude understands, ask Claude to ask you questions:

```
I want to add a notification system to this app. Before we startimplementing, interview me about the requirements. Use the questiontool to ask one question at a time. Cover edge cases, user experience,and technical constraints I might not have thought about.
```

Claude becomes a requirements analyst. It asks about:

-   Who gets notified and when?
-   What channels (email, in-app, push)?
-   How do users configure their preferences?
-   What happens when notification delivery fails?
-   Should notifications be batched or immediate?

Each question surfaces a decision you need to make. By the time the interview is complete, you have a clear specification—and Claude has the context to implement it correctly.

### The Golden Reset (Fresh Session Trick)

After the interview, you have two choices:

1.  **Continue in the same session**: Claude has all the context but also all the back-and-forth exploration.
    
2.  **Start fresh with the spec**: Copy the specification from the interview into a new session. Claude gets the clean, refined requirements without the exploratory noise.
    

Option 2 often produces better results—we call it the **Golden Reset**. The specification is signal-dense. A fresh context window means Claude's full attention on implementation rather than remembering conversation tangents.

> **Pro tip**: The Golden Reset is the most effective way to avoid Principle 7 (Observability) issues where you can't tell which part of a messy conversation caused a bug. Clean spec → clean session → clean code.

## Five Failure Patterns to Avoid

With experience, you'll recognize when a session is going wrong. Here are five common patterns and their remedies.

### 1\. The Kitchen Sink Session

**What it looks like**: You start by fixing a bug, then ask about documentation, then explore a new feature, then debug an unrelated error. Each task adds context. Quality degrades as the context window fills with unrelated information.

**Why it fails**: Claude's responses are influenced by everything in context. When context contains five unrelated tasks, Claude's attention is fragmented across all of them.

**The fix**: One session, one purpose. When you finish a task, use `/clear` before starting an unrelated one. If tasks are related, keep them together. If they're not, separate sessions.

### 2\. The Correction Loop

**What it looks like**: Claude does something wrong. You correct it. Claude tries again. Still wrong, in a different way. You correct again. After several rounds, you're frustrated and Claude's context is polluted with failed attempts and corrections.

**Why it fails**: Each correction adds noise. Claude is now juggling the original request plus multiple failed attempts plus your frustrations. The signal-to-noise ratio collapses.

**The fix**: Follow the **Rule of Two**.

> **The Rule of Two**: If Claude misses the mark twice on the same fix, STOP. Don't try a third time. `/clear` and start over with a better prompt that includes what you learned from the failures.

The failed attempts taught you what Claude needed to know. A fresh prompt with that information upfront beats a third round of corrections every time.

### 3\. The Bloated CLAUDE.md

**What it looks like**: Your CLAUDE.md file grows to 200+ lines. It contains everything you've ever wanted Claude to know: coding standards, personal preferences, project history, debugging tips, style guides, and that one edge case from six months ago.

**Why it fails**: When everything is important, nothing is. Long CLAUDE.md files consume context and dilute focus. Claude can't distinguish critical rules from nice-to-haves.

**The fix**: Keep CLAUDE.md under 60 lines. Move domain-specific knowledge into skills (`.claude/skills/`). Use the file for project-wide patterns that apply to every session, not accumulated notes.

### 4\. The Trust-Then-Verify Gap

**What it looks like**: Claude produces plausible-looking output. You assume it's correct because it looks right. Later, you discover the code doesn't work, the facts are wrong, or the approach is flawed.

**Why it fails**: Claude is optimized to produce confident, plausible responses. Plausibility isn't correctness. Without verification, errors propagate.

**The fix**: Every claim needs verification criteria. Did the code compile? Do tests pass? Did you actually run it? "It looks right" isn't verification—running it and observing the result is.

### 5\. The Infinite Exploration Spiral

**What it looks like**: You ask Claude to investigate something. It reads files, searches, reads more files, finds related topics, explores those. Your context fills with exploration. When you finally ask for implementation, Claude has forgotten why you started.

**Why it fails**: Open-ended exploration has no natural stopping point. Each discovered file suggests more files to read. Context fills with research, leaving no room for action.

**The fix**: Scope exploration narrowly ("Find where authentication is configured—just that, nothing else"). Better yet, use subagents for research: they explore in their own context and return only findings. Your main session stays clean.

## Quick Reference: Principles to Implementation

You're about to learn seven principles that explain *why* these operational patterns work. Here's how they connect:

Principle

What It Teaches

Claude Code Implementation

**P1: Bash is the Key**

Terminal access enables agency

CLI tools (`gh`, `aws`, `git`), MCP servers

**P2: Code as Universal Interface**

Precision through specificity

`@` file references, concrete examples in prompts

**P3: Verification as Core Step**

Trust through testing

Run tests, screenshots, Plan Mode verification

**P4: Small, Reversible Decomposition**

Managing complexity

Plan Mode phases, checkpoints, `/rewind`

**P5: Persisting State in Files**

Accumulated context

CLAUDE.md, skills in `.claude/skills/`

**P6: Constraints and Safety**

Confident delegation

`/permissions`, `/sandbox`, hooks

**P7: Observability**

Transparency and debugging

`/context`, checkpoint history, `--verbose`

The principles are the *why*. The operational practices in this lesson are the *how*. Together, they form a complete system for productive AI collaboration.

## Summary

Productive Claude Code sessions share common patterns:

1.  **Structure non-trivial tasks** with the four-phase workflow: Explore (understand), Plan (design), Implement (execute), Commit (save).
    
2.  **Course correct freely** using `Esc` to stop, checkpoints to revert, and `/rewind` to try different approaches.
    
3.  **Configure permissions** to match your trust level—tight for unfamiliar work, loose (with sandbox) for autonomous operation.
    
4.  **Use the interview pattern** for complex features, having Claude ask questions before implementing.
    
5.  **Recognize failure patterns** before they waste your time: kitchen sink sessions, correction loops, bloated CLAUDE.md, trust-without-verification, and infinite exploration.
    

These aren't rules to memorize—they're habits to build. With practice, they become automatic, and the frustrating sessions become rare.

## Try With AI

**Prompt 1: Practice the Four-Phase Workflow**

```
I want to practice the four-phase workflow. Here's a real task I need to do:[Describe a non-trivial task you actually need to accomplish]Let's do this properly:1. First, explore what exists (I'm in Plan Mode)2. Then, create an implementation plan3. I'll review the plan before we implement4. Finally, we'll commit when doneStart by exploring. What do you need to understand before we plan?
```

**What you're learning**: The four-phase workflow prevents the pattern of diving into changes without understanding context. By practicing on a real task, you experience how exploration and planning reduce rework.

**Prompt 2: Identify Your Failure Patterns**

```
I've been using Claude Code for a while. Help me audit my workflow forfailure patterns. I'll describe a recent session that didn't go well:[Describe a frustrating Claude Code session—what you asked for,what happened, how it went wrong]Based on this, which of the five failure patterns was I falling into?What specific change to my workflow would have prevented it?
```

**What you're learning**: Recognizing failure patterns in your own work is harder than recognizing them in examples. By analyzing a real frustrating session, you build the pattern recognition to catch problems earlier.

**Prompt 3: Design Your Permission Configuration**

```
I work primarily on [describe your domain—web development, data science,DevOps, content creation, etc.].Help me design a permission configuration that balances safety and speed.What commands should I allowlist for my typical workflows?What should always require approval?When might I want to use sandbox mode?
```

**What you're learning**: Permission configuration is personal—it depends on what you do and what risks matter to you. Designing your own configuration forces you to think about trust levels and operational patterns in your specific domain.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 1: Bash is the Key

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/01-bash-is-the-key.md)

# Principle 1: Bash Is the Key

> "What if BASH is all you need?" — Andrew Qu, Vercel

## The Vercel Discovery

Here's a story that changed how engineers think about building AI agents.

Vercel is the company behind Next.js, one of the most popular web frameworks. They host millions of websites and have some of the best engineers in the industry. When they decided to build an internal AI agent called d0 to answer data questions for their employees, they did what good engineers do: they engineered it properly.

The first version had specialized tools for different tasks. It had heavy prompt engineering to guide the AI's behavior. It had elaborate context management to keep track of what was happening. It was sophisticated.

It worked. Kind of. But it was fragile and slow.

Then they tried something radical. They stripped the agent down to a single capability: **BASH**.

What is BASH? It's the terminal on your computer. That black window where you can type commands. BASH (which stands for "Bourne Again Shell") lets you interact with your computer through text commands instead of clicking around. Commands like `grep` to search through files, `cat` to read file contents, `ls` to list what's in a folder.

Vercel gave their agent access to just these basic commands. Nothing fancy. Just the ability to explore files the way a programmer would.

The results surprised everyone:

Metric

Complex Design

BASH-Only Design

Execution time

274.8 seconds

77.4 seconds

Success rate

80%

100%

Token usage

~102k tokens

~61k tokens

Steps required

~12 steps

~7 steps

The simpler version was 3.5x faster, achieved 100% success rate, and used fewer resources. All by doing less.

This isn't a fluke. It reveals something fundamental about how General Agents work best.

## The Unix Philosophy: Why Simpler Wins

To understand why BASH works so well, you need to understand a philosophy that's over 50 years old.

In the 1970s, engineers at Bell Labs developed Unix, an operating system that would eventually influence almost every computer you use today. They built it around a radical idea: **simplicity through composability**.

Instead of building one giant program that does everything, they built many small programs that each do one thing really well. Then they made it easy to connect these programs together, passing the output of one as the input to another.

This is the Unix philosophy:

**1\. Each tool does one thing well.**

`grep` searches. That's all it does. It doesn't edit files, it doesn't organize them, it doesn't do anything else. It just searches, and it does that brilliantly.

`cat` reads files and shows you what's inside. That's it.

`ls` lists what's in a folder. Nothing more.

**2\. Tools connect through pipes.**

You can chain these simple tools together. Want to find all lines containing "error" in your log files and count how many there are? Chain `grep` to `wc`:

```
grep "error" logs.txt | wc -l
```

The `|` symbol is called a pipe. It takes the output of `grep` and feeds it into `wc` (word count). Simple tools, combined to do complex things.

**3\. Everything is text.**

Files are text. Command output is text. No special formats, no proprietary structures. This makes everything compatible with everything else.

This is why BASH and LLMs are a natural fit. LLMs process text. BASH commands are text. Command output is text. There's no translation layer, no format conversion, no API schema to learn. The model reads text, reasons about it, and produces text that the terminal executes directly. This text-to-text alignment is why simple BASH access often outperforms elaborate tool frameworks.

## Why This Matters for General Agents

So why does a 50-year-old philosophy matter for AI?

**Models are smart.** Modern LLMs don't need elaborate scaffolding. When you give them basic tools and room to reason, they often make better choices than pre-planned workflows allow. The Vercel team discovered that their complex tooling was actually getting in the way. The AI was smarter than their architecture gave it credit for.

**Simplicity reduces failure.** Every layer you add to a system is a potential breaking point. A custom "file search tool" might have bugs. A "context management system" might lose track of state. But `grep`? It's been doing text search for 50 years. It works.

**These tools are battle-tested.** Millions of programmers use these commands every day. Every edge case has been found and fixed. Every performance optimization has been made. Why build a custom solution when your operating system already has one that's been refined for decades?

## What This Looks Like in Practice

Let's see how a General Agent actually uses BASH to get things done.

### Reading and Exploring

Imagine you ask a General Agent: "What files do I have in my Documents folder related to the budget?"

Without terminal access, the AI could only tell you: "Try opening your file explorer and searching for 'budget'."

With terminal access, the agent can actually look:

```
ls -la Documents/
```

This command lists everything in your Documents folder. The `-la` flags mean "show all files, with details." The agent now sees your actual files, not a guess about what might be there.

Then it can search:

```
grep -r "budget" Documents/
```

This searches through every file in Documents (and all subfolders, that's what `-r` means) for the word "budget". The agent gets back a list of every file that mentions budget, with the exact lines where it appears.

### Organizing and Managing

Now say you want to organize those budget files. The agent can:

```
mkdir -p Projects/Budget-2026/
```

This creates a new folder. The `-p` flag means "create parent folders if needed." So if Projects doesn't exist yet, it creates that too.

Then it can move files:

```
cp Documents/quarterly-report.xlsx Projects/Budget-2026/
```

This copies your quarterly report into the new folder. The agent can do this for each file it found, organizing your scattered documents into a sensible structure.

### Iterating Until It Works

Here's where it gets interesting. General Agents don't just run one command and stop. They observe what happens and adjust.

Watch this sequence:

```
find ~/Downloads -name "*.pdf"
```

The agent runs this to find all PDF files in Downloads. But maybe it gets back unexpected results: some are in nested folders, some have weird names.

So it adjusts:

```
find ~/Downloads -name "*.pdf" -type f
```

Adding `-type f` means "only actual files, not folders." Better results.

Now it can organize them:

```
mkdir -p ~/Documents/PDFs/2026mv ~/Downloads/*.pdf ~/Documents/PDFs/2026/
```

And verify:

```
ls ~/Documents/PDFs/2026/
```

Did it work? The agent checks. If something went wrong, it tries another approach.

This is the OODA loop you learned about earlier: Observe, Orient, Decide, Act. BASH is what makes this loop possible. Without the ability to run commands and see results, the agent can't iterate. It's stuck giving you instructions instead of actually helping.

## Without Terminal Access vs. With Terminal Access

Let's make this concrete with a real scenario.

### Without Terminal Access

You're working with a regular AI chatbot. You need to find all files related to your Q4 budget project and organize them.

```
You: "I need to find all files related to Q4 budget"AI: "I'd suggest searching for 'budget' or 'Q4' in your file explorer.     On Mac, you can use Spotlight. On Windows, use the search bar in     File Explorer."You: [You open Finder, search "Q4", wait for results]You: "I found some files but they're scattered across Downloads,     Desktop, and Documents"AI: "You could create a new folder called 'Q4-Budget' and manually     move the files there. Would you like step-by-step instructions?"You: [You create the folder, then drag files one by one]You: "Some files reference 'quarterly review' instead of Q4"AI: "Good catch! Try searching for that term too and add those     files to your folder."You: [Search again, find more files, drag those too]
```

This takes 15-20 minutes of your time. The AI is helpful, but you're doing all the actual work.

### With Terminal Access

Same scenario, but now the AI is a General Agent with BASH access.

```
You: "Find all files related to Q4 budget and organize them"Agent: [runs: find ~ -type f \( -iname "*budget*" -o -iname "*Q4*"       -o -iname "*quarterly*" \) 2>/dev/null]       "I found 23 files across your Documents, Downloads, and Desktop       folders. Here's what I found:       - 8 spreadsheets (.xlsx)       - 11 documents (.docx, .pdf)       - 4 email exports (.eml)       I'll create an organized structure. Does this look right?       ~/Projects/Q4-Budget/       ├── Spreadsheets/       ├── Documents/       └── Communications/"You: "Yes, go ahead"Agent: [runs: mkdir -p ~/Projects/Q4-Budget/{Spreadsheets,Documents,Communications}]       [runs: mv commands for each file type]       [runs: ls -la ~/Projects/Q4-Budget/]       "Done. All 23 files organized. Here's the final structure..."
```

Three minutes. The agent did the searching, found related terms you might have missed, created a sensible structure, and verified everything worked.

The difference isn't just speed. It's that the agent can actually help instead of just advising.

## Safety and Permissions

At this point you might be thinking: "Wait, I'm giving AI access to run commands on my computer? That sounds dangerous."

You're right to be cautious. Terminal access is powerful, and powerful tools need safeguards.

Well-designed General Agents handle this through a permission system. Not all commands are treated equally.

**Read-only commands run freely.** When the agent wants to look at what files exist or search through content, that's safe. It's just looking, not changing anything.

```
ls -la Documents/       # Just looking at what's therecat meeting-notes.txt   # Just reading a filegrep "budget" *.txt     # Just searchingfind . -name "*.pdf"    # Just finding files
```

These commands can't hurt anything. The agent runs them immediately to gather information.

**Commands that change things ask for permission.** When the agent wants to create, move, or especially delete files, it pauses and asks you first.

```
mkdir Projects/NewClient/    # Creates a folder - usually asksmv report.txt Reports/       # Moves a file - asks for confirmationrm old-draft.txt             # Deletes a file - definitely asks
```

You see exactly what the agent wants to do and approve it before it happens.

**Dangerous commands require you to run them yourself.** Some operations are too risky for any automated system. Things like deleting entire folders recursively (`rm -rf`) or running commands with admin privileges (`sudo`). A well-designed agent won't even attempt these. It will tell you what needs to happen and let you decide whether to do it manually.

Here's a simple way to think about risk levels:

What the Command Does

Examples

How It's Handled

Just reads or searches

`ls`, `cat`, `grep`, `find`

Runs automatically

Creates something new

`mkdir`, `touch`

Usually runs, you can review

Moves or renames

`mv`, file edits

Asks for confirmation

Deletes things

`rm`, bulk operations

Explicit approval required

System-level changes

`rm -rf`, `sudo`

You do it yourself

The goal is confident collaboration. You trust the agent to explore and gather information freely. You stay in control of anything that changes your files. And you keep full authority over anything dangerous.

Start with read-only operations to build trust. As you see the agent make good decisions, you can give it more autonomy. But always keep the ability to review destructive operations before they happen.

### How to Verify an Agent is Safe

Before trusting any AI agent with terminal access, verify these safeguards:

What to Check

What to Look For

**Command visibility**

The agent shows you each command before or as it runs—no hidden operations

**Permission prompts**

Destructive commands (delete, move, overwrite) trigger explicit approval requests

**Cancel capability**

You can press Escape or Ctrl+C to stop the agent mid-operation

**Scope boundaries**

The agent respects folder limits—if you say "only in Downloads," it stays there

**Audit trail**

You can review a log of everything the agent did after a session

**Red flags to watch for:**

-   Agent runs commands without showing them
-   No confirmation before file deletion or modification
-   Claims it "already has permission" without asking
-   Unable to explain what a command does when you ask

When in doubt, test the agent on a folder with files you don't care about. See how it behaves before trusting it with important data.

## The Core Insight

Let's step back and see what we've learned.

Vercel's discovery wasn't really about BASH specifically. It was about simplicity. Their complex agent architecture, with specialized tools and elaborate prompts and heavy metadata, performed dramatically worse than a simple agent with just file system access.

This pattern shows up again and again in General Agent design:

**Simple foundations outperform complex architectures.** The Unix tools that power BASH have been refined for 50 years. They're fast, reliable, and handle edge cases gracefully. Custom tools, no matter how cleverly designed, can't match that maturity.

**Models reason better with room to breathe.** When you constrain an AI with rigid workflows, you limit its ability to adapt. When you give it simple tools and let it figure out how to combine them, it often finds better solutions than you would have prescribed.

**Every principle in this chapter builds on this one.** Terminal access is what makes the other principles possible:

-   **Principle 2 (Code as Universal Interface)**: You can only write and run code if you have terminal access.
-   **Principle 3 (Verification as Core Step)**: You can only verify results if you can run commands and check output.
-   **Principle 4 (Small, Reversible Decomposition)**: You can only break work into small steps if each step can be executed and observed.
-   **Principle 5 (Persisting State in Files)**: You can only save state to files if you can write files.
-   **Principle 6 (Constraints and Safety)**: The permission model only matters if there are real operations to permit or deny.
-   **Principle 7 (Observability)**: You can only observe what the agent is doing if it's actually doing things.

BASH is the key that unlocks everything else. Without it, a General Agent is just a chatbot giving advice. With it, the agent becomes a true collaborator that can observe your world, reason about it, and take action.

## Try With AI

**Prompt 1: Experience the difference**

```
Here's a task I do manually that involves files on my computer:[describe something like: organizing downloads, finding old documents,creating folder structures for projects, compiling information frommultiple files]First, tell me how you'd help if you could only give me instructionsto follow (no file access).Then, tell me how you'd approach it with direct file system access.What's the actual difference in how we'd work together?
```

**Prompt 2: Understand command safety**

```
I'm learning to work with AI that has terminal access.Help me understand the safety levels of these commands:- ls -la ~/Documents- cat notes.txt- cp report.txt backup.txt- mv Downloads/*.pdf Documents/- rm old-draft.txt- rm -rf ~/Projects/old/For each one: What does it do? What could go wrong?How should I think about approving or denying it?
```

**Prompt 3: Apply the simplicity principle**

```
I want to [describe a file-related task].Before we start: what's the simplest approach using basic commandslike ls, cat, grep, find, cp, mv, and mkdir?Don't build anything complex. Show me how Unix philosophy(simple tools that combine) applies to this task.
```

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 2: Code as the Universal Interface

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/02-code-as-universal-interface.md)

# Principle 2: Code as the Universal Interface

Sarah had 3,000 photos from her trip across Southeast Asia. They were scattered across her phone, her camera, and a backup drive. The filenames were meaningless: IMG\_4521.jpg, DSC\_0089.jpg, Photo\_2024\_03\_15.png. She wanted them organized by country and city, with dates in the filenames, duplicates removed.

She tried three different photo organization apps. Each did part of what she wanted, but none could handle her specific combination of requirements. The apps had pre-built features, and her needs did not fit those features exactly.

Then she asked a general agent for help. Here's what she wrote:

> "I have 3,000 photos scattered across three folders. They have meaningless names like IMG\_4521.jpg. I want them organized by country and city based on their location data, with dates in the filenames (YYYY-MM-DD format), duplicates removed, and everything in a clean folder structure."

That's it. Plain English. No code, no technical knowledge required.

The agent translated her request into a program that:

1.  Read the location data embedded in each photo
2.  Figured out which country and city it was taken in
3.  Renamed the files with proper dates
4.  Detected duplicates by comparing actual image content
5.  Organized everything into a clean folder structure

Fifteen minutes later, her photos were perfectly organized in exactly the way she wanted. Sarah didn't write a single line of code. She described what she wanted in her own words, and the agent handled the translation.

**This is Principle 2 in action.** The general agent succeeded where specialized apps failed because it could write code. Code became the interface through which the agent could do anything Sarah needed, not just what some app designer anticipated.

## Wait—Isn't Bash Already Code?

If you just read about Principle 1 (Bash is the Key), you might wonder: "Isn't Bash code? Why are these separate principles?"

Good question. Here's the distinction:

Principle

Role

What It Does

Analogy

**Bash (Principle 1)**

The Hands

Navigate, explore, move files, search, observe

Walking through rooms, opening drawers, looking around

**Code (Principle 2)**

The Brain

Calculate, process data, build logic, create solutions

Thinking, planning, solving puzzles, building tools

Bash commands like `ls`, `grep`, `mv`, and `find` let the agent **navigate and manipulate** the file system. They're quick, direct operations—look here, move that, search for this.

Code (Python scripts, data processing, custom programs) lets the agent **think and build**. When Sarah needed her photos analyzed for location data, compared for duplicates, and reorganized with custom naming—that required computation, not just file manipulation.

**Bash opens the door. Code does the work inside.**

Both are essential. An agent with only Bash can explore but not compute. An agent with only code generation but no file access can think but not act. Together, they make general agents truly capable.

## Why General Agents That Write Code Win

Here is what Anthropic discovered when they released Claude Code. People were not just using it to write software. They were using it to:

-   Manage todo lists
-   Organize files
-   Analyze spreadsheets
-   Sort through emails
-   Automate repetitive tasks

This led to a fundamental insight: **general agents that write code can solve any computational problem**. Code is not just for programmers. Code is the universal interface through which agents interact with computers.

Think about what this means. A specialized "photo organizer" tool can only do what its creators built into it. Ten features, maybe twenty. If your needs do not match those features, you are stuck.

But a general agent that writes code has no such limits. Whatever you can describe, it can build. Your specific situation, your exact requirements, your unique combination of needs. The agent writes code that fits your problem precisely.

### The Specialist Trap

Imagine you need work done on your house. The traditional approach is to call specialists:

-   **Leaky faucet?** Call a plumber
-   **Broken light?** Call an electrician
-   **Squeaky door?** Call a carpenter

Each specialist is good at their one thing. But this approach has problems:

1.  You need to know which specialist to call
2.  If your problem spans two areas, you are coordinating between experts
3.  If you have a truly novel problem, you might not find anyone who can help

Early approaches to building helpful software worked the same way. A "research agent" for gathering information. A "finance agent" for calculations. A "writing agent" for content. Each one limited to its pre-built capabilities.

### The General Agent Advantage

Now imagine a different approach. Instead of specialists, you have one skilled problem-solver who can build tools for any job:

-   **Need to fix the faucet?** They craft the right solution
-   **Need to repair the light?** They figure it out
-   **Need something that combines plumbing and electrical work?** No problem

This is what a general agent does when it writes code. Instead of selecting from pre-built features, it writes solutions. Instead of being limited to what designers anticipated, it creates what you actually need.

Sarah's photo organization worked because the agent was not constrained by pre-built features. It wrote code that handled her exact situation:

-   Photos from **multiple devices**
-   Needing **country-level organization**
-   With **duplicate detection** based on actual image content, not just filenames

## The Five Powers of Code

Why is code such an effective interface for agents? Because code gives agents **five distinct powers** that nothing else provides.

### Power 1: Precise Thinking

Watch what happens when you ask a general agent to calculate something complex. If it tries to reason through the calculation in words, it might make mistakes. Language is fuzzy:

-   "About 30%" could mean 28% or 32%
-   "A few hundred" could mean 200 or 500

But when the agent writes code to do the calculation, something changes. The code executes with **perfect precision**. 127 times 89 always equals 11,303. No approximation, no drift, no fuzzy thinking.

**Story: The Budget Analysis**

Marcus needed to analyze his small business expenses. He had a year of transactions and wanted to know:

-   Average monthly spending by category
-   Which months had unusual spikes
-   How spending compared quarter over quarter

If he just asked for "a summary," the results would be vague. But the general agent wrote code that processed every transaction precisely. It:

1.  Calculated **exact averages** down to the cent
2.  Identified months that were more than two standard deviations from the mean
3.  Produced quarter-by-quarter comparisons with **specific percentages**

The code did not approximate. It computed. That precision came from code being the interface between the agent's understanding and the computer's execution.

### Power 2: Workflow Orchestration

Many tasks involve multiple steps. First do this, then check that, then based on the result, do something else. Traditional approaches handle these steps one at a time, with back-and-forth at each stage.

Code lets the agent write an **entire workflow at once**. All the steps, all the conditions, all the logic, captured together. Then the whole thing runs smoothly from start to finish.

Think of it like building a train track versus pushing a cart by hand. Without code, the agent asks you at every junction: "Should I go left or right? What if it's a PDF? What if it's empty?" With code, the agent builds the entire track in advance—all the switches, all the decision points—and the train runs itself.

```
File arrives → Is it a PDF?                 ├─ Yes → Extract text → Contains "Invoice"?                 │                         ├─ Yes → Move to Finances/                 │                         └─ No  → Move to Documents/                 └─ No  → Is it an image?                           ├─ Yes → Move to Images/                           └─ No  → Move to Other/
```

This decision tree runs automatically. No back-and-forth. No interruptions. The code handles every branch.

**Story: The Job Application Tracker**

Emma was applying for jobs and losing track of:

-   Where she had applied
-   When she needed to follow up
-   Which applications were still active

She had information scattered across emails, a spreadsheet, and various job site accounts.

She described her situation to a general agent. The agent wrote code that:

1.  **Scanned her emails** for application confirmations
2.  **Checked her spreadsheet** for manual entries
3.  **Looked up each company** to see if the job posting was still active
4.  **Calculated days elapsed** since each application
5.  **Generated a prioritized list** of follow-ups needed

This was not one simple task. It was a workflow with multiple data sources, conditional logic, and calculated outputs. Code let the agent orchestrate all of it as a coherent whole.

### Power 3: Organized Memory

Agents often need to work with lots of information:

-   Documents and data
-   Intermediate results
-   Context from earlier steps

How do they keep track of it all?

**File systems provide the answer.** The agent can create files to store information, read files to retrieve it, search through files to find what it needs, and organize files into meaningful structures.

**Story: The Research Project**

David was researching electric vehicles for a major purchase decision. He wanted to compare:

-   Range and charging speed
-   Price and reliability ratings
-   Owner satisfaction

Across a dozen different models.

A general agent helped by:

1.  **Gathering information** from multiple sources
2.  **Saving each piece** to organized files
3.  **Cross-referencing the data** to build comparison tables
4.  **Generating a final report** that pulled everything together

The agent created folders for each car model, files for different types of data, and summary documents. Without file system access, the agent would have struggled to manage all that information. With it, the agent had **organized memory** that persisted across the entire research process.

### Power 4: Universal Compatibility

Different systems store data in different formats:

-   Spreadsheets
-   Databases
-   PDFs
-   Web pages
-   Specialized file types

Different services have different ways of being accessed. This fragmentation could make integration impossible.

But code can **read any format, transform any data, and connect to any service**. Code serves as a universal translator between systems that were never designed to work together.

**Story: The Event Planning Merge**

Aisha was planning a large family reunion. She had:

-   Guest information in a **spreadsheet**
-   Dietary restrictions in **email threads**
-   RSVP responses from a **web form**
-   Flight itineraries in **PDF attachments**

A general agent needed to bring all of this together. The agent wrote code that:

1.  Read the spreadsheet for guest names and contact info
2.  Parsed the emails for dietary notes
3.  Pulled data from the web form for RSVPs
4.  Extracted arrival times from the PDFs
5.  Merged everything into a **unified guest list** with all relevant details

No single tool was designed to handle this combination of sources. But code could interface with all of them, making the agent universally compatible.

### Power 5: Instant Tool Creation

Sometimes you need a custom tool that does not exist:

-   A specific calculation for your situation
-   A particular way of processing your data
-   A unique automation for your workflow

Code lets agents **create these tools on demand**. You describe what you need, the agent writes code, and suddenly you have a tool that does exactly that thing.

**Story: The Custom Report**

Alex managed a community garden and needed to track:

-   Plot assignments
-   Water usage
-   Harvest yields
-   Volunteer hours

No garden management app did quite what he needed. Commercial tools were either too simple or too complex.

A general agent built Alex exactly what he needed. Code that:

1.  Tracked his **specific data points**
2.  Calculated the **metrics he cared about**
3.  Generated **weekly reports** in the format that worked for his community newsletter

The agent did not find an existing tool. It created one. That is the power of code as an interface. **Anything you can describe, the agent can build.**

## What This Means for You

Understanding this principle changes how you work with general agents.

### Describe What You Want, Not How to Do It

Your job is to be clear about **what you need**. The agent's job is to figure out how to accomplish it through code.

Less Effective

More Effective

"Can you write a Python script that uses the os module to walk through directories and rename files?"

"I have 500 files with random names. I want them renamed to include the date they were created, in the format YYYY-MM-DD, followed by the original name."

The second version focuses on the **outcome** you want. It gives the agent freedom to write whatever code accomplishes that goal.

### Be Specific About Your Situation

The more precisely you describe your situation, the better the agent can tailor the solution.

**Vague:**

> "Organize my files."

**Specific:**

> "I have files in three folders: Downloads, Desktop, and Documents. I want all PDFs moved to a folder called 'PDFs', all images to 'Images', and all spreadsheets to 'Spreadsheets'. Files older than one year should go into an 'Archive' subfolder within each category."

Specific descriptions help agents write code that fits your exact needs.

### Trust the Process

When a general agent writes code to solve your problem, you do not need to understand every line. What matters is whether the **result matches what you wanted**.

The collaboration loop works like this:

1.  **You describe** what you want
2.  **The agent writes code** to accomplish it
3.  **You verify** the results
4.  **You refine** if something is not quite right

If something is wrong, describe what you expected versus what you got. The agent will adjust the code.

## The Bigger Picture

This principle connects to the core thesis of this book. General agents are powerful because they are not limited to pre-built capabilities. They can write code to solve any computational problem.

**Code is the universal interface between agents and computers.** Through code, agents can:

Power

What It Enables

**Precise Thinking**

Exact calculations without fuzzy approximations

**Workflow Orchestration**

Multi-step processes that run smoothly

**Organized Memory**

Persistent storage across complex tasks

**Universal Compatibility**

Working with any format or system

**Instant Tool Creation**

Custom solutions built on demand

This is why "all agents will become coding agents," as Davis Treybig observed. Specialized agents with fixed features will always be limited. General agents that write code can do anything.

### The Catch: Code Must Actually Work

There's an important caveat to everything we've discussed. LLMs sometimes generate code that **looks correct but isn't**.

The agent might:

-   Misunderstand your intent and solve the wrong problem
-   Use a function that doesn't exist or works differently than expected
-   Write logic that fails on edge cases you didn't mention
-   Make assumptions that don't match your actual data

This isn't a flaw—it's the nature of probabilistic language models. They're remarkably capable, but they're not compilers. They don't *execute* code in their heads; they *predict* what correct code looks like.

**Code is powerful, but only when it actually works.** A beautiful program that crashes on your data is worthless. An elegant solution that misunderstands your requirements wastes your time.

This is why the next principle is essential.

In the next lesson, we will explore **Principle 3: Verification as a Core Step**. The power of code demands the discipline of verification. You'll learn how to confirm that what the agent built actually does what you intended—before you trust it with your real work.

## Try With AI

### Prompt 1: See the General Agent Advantage

```
I want to understand why general agents that write code are more powerful than specialized tools.Here is my situation: I have a folder with hundreds of receipts. Some are photos from my phone, some are PDFs from email, and some are screenshots. I need to:1. Extract the date and amount from each receipt2. Categorize them (groceries, dining, transportation, etc.)3. Create a monthly summary showing totals by category4. Flag any unusually large purchasesWalk me through how you would approach this. Do not write actual code, since I am still learning. Instead, explain:- What different steps would you take?- How does this approach give you flexibility that a pre-built receipt app would not have?- Which of the Five Powers are you using?
```

**What you are learning:** You are seeing how a general agent thinks about solving a problem. Notice how the agent can handle your specific combination of requirements rather than forcing you to fit pre-built features.

### Prompt 2: Experience the Five Powers

```
I want to understand the Five Powers that code gives to general agents.Pick an everyday task: planning a dinner party for 12 people with various dietary restrictions.Show me how each power would help you handle this task:1. **Precise Thinking:** How would code help calculate quantities and portions exactly?2. **Workflow Orchestration:** What multi-step process would you create?3. **Organized Memory:** How would files help track all the details?4. **Universal Compatibility:** What different formats or sources might you need to work with?5. **Instant Tool Creation:** What custom mini-tools might you build?Help me see that these powers are not about programming. They are about what becomes possible when an agent can write code to solve problems.
```

**What you are learning:** You are experiencing how each power contributes to solving real problems. The dinner party is not a "coding task," but a general agent can handle it beautifully through these five powers.

### Prompt 3: Practice Describing Problems

```
Help me practice describing problems in ways that help you write effective solutions.I will give you three vague requests. For each one, help me make it specific enough that you could write code to solve it.Request 1: "Help me manage my passwords better."Request 2: "I want to read more books this year."Request 3: "Keep track of my exercise."For each request:- Point out what is vague or ambiguous- Ask me questions that would make it specific- Show me what a clear, specific version would look likeThen explain how the specific version helps you write better code.
```

**What you are learning:** You are developing the skill of clear problem description. This is your main contribution to the human-agent collaboration. The clearer you describe what you want, the better code the agent can write to achieve it.

## Summary

**General agents are powerful because they write code.** Code is the universal interface through which agents interact with computers to accomplish any task.

This principle explains why specialized tools with pre-built features will always be limited. A photo organizer app can only do what its designers built in. But a general agent can write whatever solution your specific situation requires.

**Code gives agents five powers:**

1.  **Precise Thinking** through exact calculations
2.  **Workflow Orchestration** through multi-step programs
3.  **Organized Memory** through file systems
4.  **Universal Compatibility** through the ability to work with any format
5.  **Instant Tool Creation** through writing custom solutions on demand

Your role in working with general agents is to **describe what you want clearly and specifically**. Focus on outcomes, not methods. Be precise about your situation. Then verify that the results match your intentions.

"All agents will become coding agents." This is not a prediction. It is already happening. Understanding why prepares you for a world where the most capable help comes from agents that can write code to solve any problem you bring them.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 3: Verification as Core Step

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/03-verification-as-core-step.md)

# Principle 3: Verification as Core Step

You've probably experienced this: An AI tool generates code that looks correct. You accept it, commit it, deploy it. Then—usually at the worst possible moment—you discover it doesn't actually work. Maybe it handles only the happy path and crashes on edge cases. Maybe it uses an API incorrectly. Maybe it has a subtle bug that only appears under load.

The problem wasn't that the AI failed. The problem was that **you skipped verification**.

Verification is the step where you confirm that AI-generated work actually does what you intend. It's not a nice-to-have—it's the core step that makes agentic workflows reliable. Without verification, you're not collaborating with an intelligent system; you're hoping it gets things right.

This lesson explores why verification matters, how to integrate it into your workflow, and how to calibrate your trust based on evidence.

## The Trust Problem: Why AI Output Requires Verification

AI systems are confident—even when they're wrong. They'll generate incorrect API calls with the same certainty as correct ones. They'll miss edge cases while handling the main scenario perfectly. They'll make assumptions that don't match your context.

### The Confidence Trap

Consider this interaction:

```
You: "Add a function to parse CSV files"AI: [Generates function]```pythondef parse_csv(file_path):    with open(file_path, 'r') as f:        return [line.split(',') for line in f.readlines()]
```

You: "Looks good, thanks."

\[LATER - Production bug report\] You: "Why are quoted fields with embedded commas breaking?"

The AI's solution looked correct but failed on:

-   Quoted fields containing commas: `"Smith, John",123,manager`
-   Empty fields: `Jane,,Doe`
-   Newlines within quoted fields
-   Different line endings (Windows vs Unix)

The AI didn't lie—it provided a reasonable starting point. But **you accepted it without verification**, and that's the failure mode.

### The Same Task, With Verification

Now watch the same task with verification built in:

```
You: "Add a function to parse CSV files"AI: [Generates the same naive function]You: "Let me test this. Run it on a file with quoted commas."AI: [Runs test]    Error: "Smith, John" split incorrectly into ["Smith", " John"]You: "The function doesn't handle quoted fields. Fix it."AI: [Generates improved version using Python's csv module]```pythonimport csvdef parse_csv(file_path):    with open(file_path, 'r') as f:        reader = csv.reader(f)        return [row for row in reader]
```

You: "Test it again with quoted commas, empty fields, and Windows line endings."

AI: \[Runs tests\] ✓ Quoted commas: Passed ✓ Empty fields: Passed ✓ Windows line endings: Passed

You: "Now it's production-ready."

```
**The difference**: Same starting point, completely different outcome. Verification turned a bug into a fix in under 2 minutes. Without verification, that bug would have surfaced in production—possibly weeks later, possibly at 2 AM.### Why Verification Is Non-Negotiable| AI Behavior | Why It Happens | Why Verification Matters ||-------------|----------------|-------------------------|| **Hallucinates APIs** | Trained on many codebases; patterns blend together | Tests catch nonexistent methods || **Misses edge cases** | Optimizes for common scenarios | Tests expose boundary failures || **Makes wrong assumptions** | Lacks your specific context | Review reveals mismatched intent || **Handles happy path only** | Training data shows typical usage | Edge case tests uncover gaps || **Confident but wrong** | No internal uncertainty indicator | Verification exposes actual correctness |**Key insight**: AI systems are not truth-tellers. They're pattern-completers. Their output requires the same verification you'd apply to code written by a junior developer—maybe more, because they don't learn from your project's specific mistakes unless you verify and correct them.### Red Flags Cheat Sheet: 3 Things to Scan ForWhen you don't have time for thorough verification, at minimum scan for these three common AI code mistakes:| Red Flag | What to Look For | Why It's Dangerous ||----------|------------------|-------------------|| **1. Hardcoded secrets** | API keys, passwords, tokens written directly in code | Security breach waiting to happen || **2. Silent error swallowing** | `try/except: pass` or `catch(e) {}` with no handling | Bugs hide; failures go unnoticed || **3. Missing input validation** | No checks on user input before processing | Opens door to crashes and exploits |**Quick scan command:**```bash# Find potential hardcoded secretsgrep -rn "api_key\|password\|secret\|token" --include="*.py" --include="*.js"# Find empty exception handlersgrep -rn "except.*pass\|catch.*{}" --include="*.py" --include="*.js"
```

These three checks take 30 seconds and catch the most dangerous issues. Make them a habit.

### Verification vs Validation: Two Different Questions

Engineers distinguish between two types of checking:

Type

Question

Example

**Verification**

"Did we build it right?"

Code runs without errors, tests pass, syntax is correct

**Validation**

"Did we build the right thing?"

Code actually solves the user's problem

An AI can write a *perfect* CSV parser that organizes files by date—when you actually wanted them organized by size. That's a **validation failure**: the code works correctly but solves the wrong problem.

**Always check both:**

-   Verification: Does it run? Does it pass tests?
-   Validation: Does it do what I actually asked for?

## The Verification Loop: Continuous, Not Final

The most important mindset shift: **Verification is not the final step. It's continuous.**

### Traditional Waterfall Verification

```
1. Generate code2. Generate code3. Generate code4. [Days later] Verify everything5. [Weeks later] Discover issues6. [Too late] Fix problems
```

This fails because:

-   Errors compound over time
-   Context is lost between generation and verification
-   Fixing problems requires re-understanding old code
-   The cost of fixes increases with time

### Continuous Verification in Agentic Workflows

```
Generate → Verify → Generate → Verify → Generate → Verify   ↑                                           |   |___________________________________________|                    Loop continuously
```

Each generation is immediately verified:

-   Errors caught before they compound
-   Context is fresh for corrections
-   Learning happens incrementally
-   Cost of fixes is minimal

### Why Continuous Works Better

Aspect

Final Verification

Continuous Verification

**Error detection**

After all code written

Immediately after each change

**Fix cost**

High (context lost)

Low (context fresh)

**Learning**

Delayed, abstract

Immediate, concrete

**Feedback to AI**

Aggregate, vague

Specific, actionable

**Confidence**

Low (unverified)

High (continually tested)

## Verification Strategies: What to Verify When

Not all verification is equal. Different tasks require different approaches.

### Strategy 1: Syntax Verification (Seconds)

**What**: Does the code run?

**How**:

-   Run linter/formatter (eslint, black, rustfmt)
-   Execute compile/type-check command
-   Load the file in the interpreter

**Verifies**: No syntax errors, correct types, proper formatting

**Example**:

```
# Syntax check only—doesn't verify correctnesspython -m py_compile generated_file.pynpm run type-check
```

### Strategy 2: Unit Verification (Minutes)

**What**: Do individual functions work as expected?

**How**:

-   Run existing tests
-   Create targeted unit tests
-   Test with example inputs

**Verifies**: Function behavior matches expectations for specific cases

**Example**:

```
# Test the CSV parser with a simple caseresult = parse_csv("name,age\nJohn,30")assert result == [["name", "age"], ["John", "30"]]
```

### Strategy 3: Integration Verification (Tens of Minutes)

**What**: Does the new code work with the existing system?

**How**:

-   Run the full test suite
-   Test actual user workflows
-   Check for breaking changes

**Verifies**: No regressions, compatible with existing code

**Example**:

```
# Full test suite catches integration issuesnpm testpytest
```

### Strategy 4: Manual Verification (Variable)

**What**: Does it solve the actual problem?

**How**:

-   Manual testing of user workflows
-   Code review for logic and security
-   Performance testing under load

**Verifies**: Real-world behavior, not just test passing

**Example**:

```
Actually run the application and try:- Import a CSV with quoted commas- Import an empty file- Import a file with Windows line endings
```

## Risk-Based Verification: How Deep to Go

You can't verify everything thoroughly. You need to triage based on risk.

### Risk Assessment Matrix

Consequence of Failure

Example

Verification Approach

**Catastrophic**

Data loss, security breach, financial transaction errors

Thorough verification: tests + manual review + security audit

**Significant**

Feature broken for users, data corruption, performance degradation

Standard verification: tests + integration checks

**Moderate**

Minor bugs, workaround exists

Basic verification: tests

**Low**

Cosmetic issues, internal tools

Quick verification: syntax check

### Application Examples

**High Risk (Payment Processing)**:

```
// AI generates payment processing code// Verification required:1. Code review for security issues2. Unit tests for all edge cases3. Integration tests with payment gateway4. Manual testing with real payments (sandbox)5. Security audit6. Load testing
```

**Medium Risk (User Profile Update)**:

```
// AI generates profile update code// Verification required:1. Run existing tests2. Add tests for new functionality3. Manual verification of user workflow
```

**Low Risk (Internal Admin Tool)**:

```
// AI generates admin dashboard// Verification required:1. Syntax check2. Quick manual test
```

## The Trust Zone: Calibrating Confidence Over Time

Trust isn't binary—it's earned through repeated verification. Think of trust as existing in zones based on evidence.

### Zone 1: Unverified (Initial AI Output)

**Confidence**: Low

**Action**: Verify everything

**Reasoning**: No track record yet. AI doesn't know your patterns, constraints, or edge cases.

### Zone 2: Pattern-Recognized (Repeated Success)

**Confidence**: Medium

**Action**: Verify syntax, spot-check logic

**Reasoning**: AI has demonstrated understanding of your codebase patterns. You trust routine work but verify novel situations.

### Zone 3: Domain-Mastered (High-Stakes History)

**Confidence**: High (for this domain)

**Action**: Verify integration, spot-check edge cases

**Reasoning**: AI has consistently delivered correct results in this specific area. You accelerate verification but don't skip it.

### Zone 4: Never Fully Trusted (Critical Systems)

**Confidence**: Capped at medium

**Action**: Always verify thoroughly

**Reasoning**: Some areas (security, payments, compliance) never earn full trust. The consequence of failure is too high.

> **Human-in-the-Loop Required**: For critical systems, AI is an assistant, not a replacement for human judgment. A human must review and approve every change to security configurations, financial transactions, medical decisions, or legal documents. No amount of AI track record justifies removing human oversight from high-consequence decisions.

### Why Trust Zones Matter

Blind trust is always wrong. Trust zones help you:

-   Start strict, accelerate over time
-   Maintain appropriate skepticism for high-risk areas
-   Focus verification where it provides the most value
-   Balance speed with safety

## Making Verification Practical: The 80/20 Rule

You can't verify everything perfectly. Aim for:

-   **20% of effort** to catch **80% of issues**
-   Focus verification on high-risk, high-value areas
-   Use automation to make verification cheap

### Automated Verification Checklist

For every AI-generated change:

```
# 1. Syntax check (catches 10% of issues, takes 10 seconds)npm run lintblack --check .# 2. Type check (catches 20% of issues, takes 30 seconds)npm run type-checkmypy .# 3. Run tests (catches 50% of issues, takes 2 minutes)npm testpytest# 4. Check for obvious issues (catches 10% of issues, takes 30 seconds)grep -r "TODO\|FIXME\|XXX" src/git diff --check
```

Total time: ~3 minutes Issues caught: ~90%

### Manual Verification Focus

Manual verification should focus on what automation can't catch:

-   Security issues (authentication, authorization, input validation)
-   Business logic correctness (does it match requirements?)
-   User experience (does it feel right?)
-   Performance under realistic conditions
-   Edge cases that tests don't cover

## The Verification Mindset: Questions to Ask

When reviewing AI-generated work, ask these questions:

### Functional Correctness

-   Does it solve the stated problem?
-   What happens if X fails? (database, API, file system)
-   What if the input is empty/null/invalid?
-   What if the user is malicious?

### Integration

-   Does it break existing functionality?
-   Does it follow project patterns?
-   Does it handle errors consistently?
-   Is it compatible with dependencies?

### Security

-   Are user inputs validated?
-   Are secrets properly managed?
-   Is there proper authentication/authorization?
-   Could this be exploited?

### Maintainability

-   Is it readable and understandable?
-   Is it appropriately modular?
-   Are there appropriate comments?
-   Could another developer (or you, in 6 months) understand this?

## Why This Principle Matters: Reliability at Scale

Without verification, agentic workflows don't scale:

-   One script: You can catch problems manually
-   Ten scripts: Problems slip through
-   Hundred scripts: You're constantly debugging
-   Thousand scripts: The system is unreliable

With continuous verification:

-   Each change is validated before building on it
-   Problems caught early, fixed cheaply
-   Confidence compounds with each verified success
-   System reliability scales with complexity

Verification is what transforms AI from a novelty into a reliable tool for production work.

## This Principle in Both Interfaces

Verification isn't just "running tests." It's the general practice of confirming that AI actions produced the intended result—applicable in any General Agent workflow.

Verification Type

Claude Code

Claude Cowork

**Syntax check**

Linter, compiler, type-check

File format validation, template conformance

**Unit check**

Run specific test

Review specific section of output

**Integration check**

Full test suite

Complete document review against requirements

**Existence check**

`ls`, `cat` to confirm file exists

Check output in artifacts panel

**Content check**

`grep` for expected patterns

Read generated content for accuracy

**In Cowork**: When you ask Cowork to create a report, verification means checking that all requested sections exist, data is accurate, and formatting is correct. The principle is identical—you never blindly accept output.

### Cowork Verification Checklist

For non-code AI output (documents, reports, content), use this quick checklist:

Check

Question to Ask

Common AI Mistakes

**Fact-Check**

Did the AI hallucinate statistics or dates?

Inventing plausible-sounding but false data

**Tone-Check**

Is the language appropriate for the audience?

Too formal, too casual, or inconsistent voice

**Completeness**

Did it include everything I asked for?

Skipping sections, ignoring specific requests

**Accuracy**

Are names, quotes, and references correct?

Misattributing quotes, wrong spellings

**Logic**

Does the argument/structure make sense?

Non-sequiturs, circular reasoning

**Quick verification habit**: Before accepting any AI-generated document, scan for one made-up statistic, one tone mismatch, and one missing element. This 60-second check catches most issues.

**The pattern**: After every significant AI action, verify the result matches intent. Whether that's `npm test` in Code or reviewing a generated document in Cowork, the habit is the same.

## Try With AI

### Prompt 1: Verification Strategy Design

```
I want to design verification strategies for different types of AI-generated code.Here are some tasks I might ask AI to do:1. Add a new API endpoint2. Refactor a function for readability3. Fix a bug in data processing4. Add input validation to a form5. Generate documentation6. Create a database migrationFor each task, help me design a verification strategy:- What level of verification is needed? (syntax, unit, integration, manual)- What specifically should I check?- What tests should I run?- What red flags should I look for?Create a table showing the task, risk level, verification approach, and time investment.
```

**What you're learning**: How to design appropriate verification strategies for different types of work. You're learning to triage verification effort based on risk and consequence, focusing thorough verification where it matters most.

### Prompt 2: Trust Zone Assessment

```
I want to understand my trust zones with AI.Help me think through:1. What areas have I seen AI consistently get right? (Zone 2: Pattern-Recognized)2. What areas has AI struggled with or gotten wrong? (Zone 1: Unverified)3. What areas would I NEVER fully trust AI to get right without thorough verification? (Zone 4: Critical)For each area, help me understand:- Why is AI good or bad at this?- What's the consequence of failure?- What verification approach is appropriate?Then, help me create a personal "trust profile" I can use to decide how thoroughly to verify AI work in different domains.
```

**What you're learning**: How to calibrate your trust based on evidence and consequence. You're developing a personalized framework for balancing verification effort with trust—learning where to be skeptical and where you can safely accelerate.

### Prompt 3: Verification Practice

```
I want to practice verifying AI-generated code.Ask me to provide a piece of code (either something I wrote or AI-generated).Then, help me verify it by going through these steps:1. Syntax check: Does it run? Any obvious errors?2. Functionality: What does this code actually do? Step through it line by line.3. Edge cases: What could go wrong? Empty inputs, null values, errors, concurrent access?4. Integration: How does this fit with the rest of the codebase?5. Security: Are there any security issues?6. Improvements: What would make this more robust?For each step, show me how to verify and what to look for.Then, let's try this with actual code I'm working on. Help me build the verification habit.
```

**What you're learning**: How to systematically verify AI-generated code, developing a comprehensive review process that catches issues before they become problems. You're building the verification habit through structured practice.

### Safety Note

Verification is your safety net. Never skip verification for code that will:

-   Handle user data (privacy/security risk)
-   Process payments or financial transactions (financial risk)
-   Modify production systems directly (operational risk)
-   Affect compliance or legal requirements (legal risk)

For these areas, thorough verification is non-negotiable, no matter how much you trust the AI.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 4: Small, Reversible Decomposition

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/04-small-reversible-decomposition.md)

# Principle 4: Small, Reversible Decomposition

You've seen this happen: Someone makes a large, complex change involving multiple files, new dependencies, and refactored architecture. They deploy it. Something breaks. Where's the problem? Is it the new library? The refactored code? The interaction between components? They spend hours debugging, eventually reverting everything and starting over.

Now imagine a different approach: The same work is done as ten small changes, each committed separately. Each change is tested before moving to the next. When something breaks, you know exactly which change caused it—you revert that one commit and keep the rest.

The difference is **small, reversible decomposition**—breaking problems into small, independently verifiable steps that can be easily rolled back. This is the key to managing complexity in agentic workflows.

## Why Small Steps Win: The Psychology and Mathematics of Decomposition

### The Cognitive Limit: Why Big Changes Fail

Human cognition has limits. We can hold about 7±2 items in working memory. When you make a large change:

-   You must understand the before state
-   You must understand the after state
-   You must track all intermediate changes
-   You must remember what you've tested and what you haven't

Exceed these limits, and you make mistakes. You forget to test something. You miss an interaction between components. You create bugs you won't discover until later.

### The Mathematics of Debugging

The cost of finding bugs grows exponentially with change size:

Lines Changed

Variables to Consider

Bug Surface Area

Expected Debugging Time

10

5

Small

5 minutes

100

50

Medium

30 minutes

1,000

500

Large

3 hours

10,000

5,000

Enormous

Days

With 10 small changes of 10 lines each:

-   Each change: 5 minutes to debug
-   Total: 50 minutes maximum
-   Most changes: no debugging needed (tested immediately)

**The insight**: Ten small, tested changes are faster than one large change even before accounting for debugging—because you catch issues immediately, when context is fresh.

### The AI Amplification Effect

This principle is even more important with AI because:

-   **AI makes plausible mistakes**: Code looks right but has subtle bugs
-   **AI doesn't learn your context**: Each change may not fit your patterns
-   **AI can generate lots of code**: It's easy to accept too much at once
-   **AI has context limits too**: When generating 1,000 lines, AI starts losing track of its own earlier logic. Small steps keep its "attention" sharp.

Small decomposition lets you verify AI work incrementally, catching mistakes before they compound.

## Atomic Changes: The Smallest Verifiable Unit

Think of it like building with **Lego vs sculpting clay**:

Approach

Material

If Something Goes Wrong

**Atomic (Lego)**

Modular bricks that snap together

Pop off the bad brick, snap in a new one. Rest of the build stays intact.

**Monolithic (Clay)**

One continuous mass

Fixing the nose might mean reworking the whole face. Changes ripple outward.

Small, atomic changes give you Lego-style work: each piece is independent, swappable, and doesn't affect the others when changed.

An **atomic change** is the smallest unit of work that:

1.  Can be independently verified
2.  Makes sense on its own
3.  Can be reverted without breaking other work

### What Makes a Change Atomic?

**Atomic**: One logical change, one commit

```
Add user authentication with OAuth, JWT tokens, password reset,and email verification
```

Not atomic—too many concerns, hard to verify, hard to revert if partly broken.

**Atomic**: One concern per commit

```
Commit 1: Add OAuth login flowCommit 2: Add JWT token generation and validationCommit 3: Add password reset email functionalityCommit 4: Add email verification for new accounts
```

Each commit can be tested independently. If JWT has bugs, OAuth still works.

### The Atomic Change Checklist

Before accepting a change, ask:

-   Can this be tested independently?
-   Does this make sense as a standalone unit?
-   Can this be reverted without breaking other work?
-   Is this small enough to review in one sitting?

If any answer is "no," decompose further.

## Reversibility: The Safety Net That Enables Experimentation

Reversibility means you can undo a change without side effects. This is what enables safe experimentation—you can try something knowing you can always go back.

> **The "Revert, Don't Fix" Mindset**: Beginners try to fix broken code by adding more code. Pros revert to the last working state and try a different approach. Reverting isn't failure—it's a strategic retreat that saves hours of debugging.

### Git as Reversibility Mechanism

Git is designed for reversible changes:

```
# Each commit is a reversible unitgit commit -m "Add user authentication"# Can always revertgit revert HEAD# Or reset to previous stategit reset --hard HEAD~1# Or compare statesgit diff HEAD~1 HEAD
```

### Commit Boundaries Define Reversibility Units

Good commit boundaries create natural reversibility points:

```
a1b2c3d - Add OAuth login flowd4e5f6g - Add JWT token validationg7h8i9j - Add password resetj0k1l2m - Add email verification
```

If JWT has bugs:

```
# Revert just the JWT commitgit revert d4e5f6g# OAuth, password reset, email verification remain intact
```

Bad commit boundaries break reversibility:

```
a1b2c3d - Add authentication and refactor user service and update databased4e5f6g - Add authorization and fix bug in authentication
```

Reverting d4e5f6g might reintroduce the bug. Reverting a1b2c3d loses authentication, refactor, and database changes together.

### Strategies for Reversible Changes

**1\. Feature Branches**

```
# Each feature on its own branchgit checkout -b feature/add-auth# Work on featuregit checkout main# Merge when readygit merge feature/add-auth# Or discard if not workinggit branch -D feature/add-auth
```

**2\. Frequent Commits**

```
# Commit often, even work-in-progressgit commit -m "WIP: auth skeleton"git commit -m "WIP: auth endpoints"git commit -m "WIP: auth tests"# Squash into logical units when donegit rebase -i HEAD~3
```

**3\. Staging for Experimentation**

```
# Try something experimentalgit stash# Make experimental changes# If it works, commitgit commit -m "Add experimental feature"# If not, revertgit checkout .git stash pop
```

## Decomposition Strategies: How to Break Things Down

Different problems require different decomposition approaches.

### Strategy 1: Vertical Slicing (By Feature)

Build one complete feature at a time, across all layers:

```
Feature: User login├── Change 1: Add login endpoint├── Change 2: Add login UI component├── Change 3: Add authentication tests└── Change 4: Add login error handling
```

**When to use**: Building features for users, when you need working functionality at each step.

**Advantage**: Each step produces visible, testable functionality.

### Strategy 2: Horizontal Slicing (By Layer)

Build one layer at a time, across features:

```
Layer: Database schema├── Change 1: Create users table├── Change 2: Create sessions table└── Change 3: Add indexes and constraintsLayer: Data access layer├── Change 4: Add user repository├── Change 5: Add session repository└── Change 6: Add database migrationsLayer: API layer├── Change 7: Add authentication endpoints└── Change 8: Add session management endpoints
```

**When to use**: Building infrastructure, when changes to one layer won't break others.

**Advantage**: Each layer can be tested independently. Clear separation of concerns.

### Strategy 3: Dependency-First (By Prerequisites)

Build dependencies before dependents:

```
Change 1: Add input validation libraryChange 2: Add logging utilityChange 3: Add error handling frameworkChange 4: Add authentication (uses validation, logging, errors)Change 5: Add authorization (depends on authentication)
```

**When to use**: When features have clear dependencies.

**Advantage**: Never work on something that depends on unfinished code.

### Strategy 4: Test-First (By Verification)

Write tests before implementation:

```
Change 1: Add test for user authenticationChange 2: Implement minimal code to pass testChange 3: Add test for edge caseChange 4: Implement code to pass edge case testChange 5: Add test for error caseChange 6: Implement error handling
```

**When to use**: Complex logic with many edge cases.

**Advantage**: Each change is immediately verified by tests.

## The Iteration Strategy: Small Loops Beat Big Batches

The essence of this principle: **Many small iterations beat one large batch.**

### Large Batch Approach (Slow)

```
Day 1: Implement entire featureDay 2: Debug issues found during implementationDay 3: Integrate with existing codeDay 4: Fix integration issuesDay 5: Test and discover more issuesDay 6: Fix test failuresDay 7: Finally workingTotal: 7 days, high stress, uncertain outcome
```

### Small Iteration Approach (Fast)

```
Hour 1: Implement smallest usable pieceHour 1: Test and verify it worksHour 2: Extend with next featureHour 2: Test and verifyHour 3: Handle edge caseHour 3: Test and verify...Every hour: Working, tested codeTotal: 2-3 days, low stress, continuous progress
```

### Why Iterations Win

Aspect

Large Batch

Small Iterations

**Feedback**

Delayed until complete

Immediate each iteration

**Debugging**

Hard—isolate from many changes

Easy—only last change could be broken

**Motivation**

Low—no visible progress for days

High—each iteration produces results

**Risk**

High—everything or nothing

Low—each step is tested

**Course correction**

Difficult—committed to large change

Easy—change direction anytime

## Working with AI: Prompting for Small, Reversible Steps

When working with AI systems, you need to guide them toward small, reversible changes.

### Step Zero: Always Start with a Plan

Before any implementation, make decomposition collaborative:

```
"I want to build [feature]. Before we write any code,help me break this into 5-7 small steps. For each step,tell me what it accomplishes and how I'll know it worked."
```

This simple habit transforms decomposition from something you do alone into something you do *with* the AI. The AI often spots dependencies and edge cases you'd miss. And now you have a roadmap before writing a single line.

### Bad Prompt: Too Large

```
"Add user authentication with OAuth, JWT tokens, password reset,and email verification"
```

AI generates:

-   Hundreds of lines of code across many files
-   Impossible to review thoroughly
-   Hard to test each piece independently
-   If broken, where to start debugging?

### Good Prompt: Decomposed

```
"I need to add user authentication. Let's do this step by step.Step 1: First, add a basic login endpoint that accepts email/passwordand returns a simple token. Focus on just this—no OAuth, no JWTvalidation yet, just the basic structure.After I review and approve, we'll move to step 2."
```

AI generates:

-   Focused, small change
-   Easy to review
-   Easy to test
-   Clear what to verify

### Prompt Pattern: Progressive Elaboration

```
"Help me implement [feature]. Break this into small steps.For each step:1. Tell me what you're about to do2. Make the change3. Show me what changed4. Wait for my approval before proceedingStart with the first step only."
```

This pattern ensures:

-   You see each change before the next
-   You can redirect at any point
-   Each step is independently verifiable
-   You maintain control throughout

## When Decomposition Goes Wrong: Anti-Patterns

### Anti-Pattern 1: Micro-Commits

```
Commit: Fix typoCommit: Fix another typoCommit: Add semicolonCommit: Fix the same typo again
```

Too fine-grained. Each commit doesn't make sense independently. Clutters history.

**Fix**: Group related tiny changes into one atomic change.

### Anti-Pattern 2: Mixed Concerns

```
Commit: Add authentication and fix unrelated UI bug
```

Two unrelated changes in one commit. Can't revert without losing both.

**Fix**: One concern per commit, even if it feels inefficient.

### Anti-Pattern 3: Untested Middle States

```
Commit: Add authentication (doesn't compile)Commit: Fix compilation errorsCommit: Add testsCommit: Fix test failures
```

Intermediate states don't work. Can't revert to a working state easily.

**Fix**: Each commit should leave the code in a working state.

## Why This Principle Matters: Complexity Management

Software complexity grows faster than code size. A 1,000-line program isn't 10x more complex than a 100-line program—it's often 100x more complex due to interactions between components.

Small, reversible decomposition manages this complexity by:

-   **Limiting scope**: Each change fits in your head
-   **Enabling verification**: Each change can be tested independently
-   **Facilitating debugging**: Problems are isolated to recent changes
-   **Reducing risk**: You can always roll back
-   **Enabling experimentation**: Try something, learn, revert if needed

Without decomposition, you're constantly fighting complexity. With it, complexity becomes manageable—one small step at a time.

## This Principle in Both Interfaces

Decomposition applies universally—whether you're building software or producing documents.

Pattern

Claude Code

Claude Cowork

**Chunk size**

One function, one commit

One section, one file at a time

**Reversibility**

`git revert`, undo changes

Re-request specific section, keep rest

**Checkpoint**

Commit after each step

Save/approve after each major output

**Verification**

Test after each change

Review after each section

**Recovery**

`git reset` to known state

Re-start from last good output

**In Cowork**: When creating a long document, don't ask for the entire thing at once. Ask for the outline first (verify it). Then ask for section 1 (verify it). Then section 2. This way, if section 3 goes wrong, you don't lose sections 1-2.

**The universal rule**: Large tasks fail silently. Small tasks fail loudly. The smaller your steps, the faster you find and fix problems.

## Try With AI

### Prompt 1: Decomposition Practice

```
I want to practice breaking complex problems into small, reversible steps.Here's a feature I need to build: [describe a real feature you're working on or interested in]Help me decompose this into small, atomic steps. For each step:1. What specifically is being changed?2. What files are involved?3. How will I verify this step works?4. How can I revert this step if needed?Aim for 5-10 steps where each can be completed and tested independently.After we have the steps, help me understand:- Did I miss any dependencies between steps?- Are any steps too large or too small?- What's the optimal order to do these in?
```

**What you're learning**: How to decompose complex problems into small, manageable steps. You're developing the skill of breaking work into atomic units that can be independently verified and reverted.

### Prompt 2: Commit Boundary Design

```
I want to improve my commit boundaries.Here are some recent commits I made (or imagine some commits):- [Paste actual commit messages or describe commits]Analyze these commits:- Are they atomic (one logical change)?- Can they be easily reverted?- Do they leave the code in a working state?For any that aren't ideal, help me understand how to split them into better commits.Then, help me design a commit strategy for this scenario:"I spent the afternoon working on feature X. I changed files A, B, and C. File A changes are mostly complete, file B has some work in progress, file C I just started. How should I commit this work?"Show me the commit messages and what each commit should contain.
```

**What you're learning**: How to design good commit boundaries that create natural reversibility points. You're learning to structure your work so that each commit represents a coherent, revertable unit.

### Prompt 3: Iteration vs Batch Comparison

```
I want to understand the difference between large batch changes and small iterations.Pick a feature you could help me build (or suggest one). Show me two approaches:Approach A: Large batch- Implement the entire feature in one go- Show me all the code at once- Help me understand what would be involved in reviewing thisApproach B: Small iterations- Break it into 5-10 small steps- Show me the code for just the first step- Wait for my feedback before proceedingAfter seeing both, help me reflect:- Which approach felt more manageable?- Where would bugs be easier to find in each approach?- What if we needed to change direction halfway through?- How does each approach affect my confidence in the code?Then, let's actually build the feature using approach B and see how it feels.
```

**What you're learning**: The practical difference between large batch and small iteration approaches. You're experiencing firsthand how small, reversible steps reduce cognitive load and increase confidence.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 5: Persisting State in Files

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/05-persisting-state-in-files.md)

# Principle 5: Persisting State in Files

You've had this conversation: "As I mentioned earlier, we use TypeScript with strict mode, we prefix interfaces with 'I', we don't use any, and our API follows REST conventions." You find yourself repeating the same context every time you start a new conversation with AI. Each new session forgets everything from previous sessions. You waste time re-establishing context that never changes.

The solution is simple but powerful: **persist state in files**.

When you store project knowledge, decisions, and context in files within your repository, AI systems can read them directly. You stop repeating yourself. Context becomes cumulative rather than reset each session. New team members (or future you) can understand decisions without hunting through git history.

This lesson explores what to persist, how to structure it, and why file-based persistence is the secret to effective AI collaboration.

## The Memory Problem: Why AI Context Doesn't Persist

### AI Systems Are Stateless

Here's the fundamental limitation: **AI systems have no persistent memory between sessions**.

Each conversation starts fresh:

-   Session 1: You explain your project conventions
-   Session 2: You explain them again
-   Session 3: You explain them a third time

The AI doesn't remember your previous conversations. It doesn't learn about your project over time. Each session is a blank slate.

### Why This Matters

Without persistent state, you face:

-   **Repetitive context sharing**: Re-explaining the same things
-   **Lost knowledge**: Decisions disappear with closed chats
-   **Inconsistency**: Different sessions might get different context
-   **Onboarding friction**: New team members start from zero
-   **Future confusion**: You forget why you made a decision

Approach

Time per Session

Over 20 Sessions

Re-explain context each time

~10 minutes

3+ hours wasted

Write CLAUDE.md once

0 seconds (auto-read)

3+ hours saved

The 20 minutes you spend writing a context file pays for itself after just two sessions. That's the laziness that pays off.

### The Solution: Files as Persistent Memory

Files in your repository are the one thing AI systems can read and that persists across sessions:

```
Repository Structure:├── src/├── tests/├── CLAUDE.md          ← Project conventions for AI├── docs/│   └── decisions/     ← Why we made choices└── .cursorrules       ← AI coding guidelines
```

Every AI session reads these files. Context is shared automatically. Knowledge accumulates.

## What to Persist: The State Hierarchy

Not all state is equal. Some changes constantly (current task status), some rarely changes (architecture decisions), some never changes (project language).

### State Types and Persistence Strategy

State Type

Change Frequency

Persistence Strategy

Examples

**Ephemeral**

Every session

Don't persist

Current task, what you're debugging right now

**Session**

Within session

Task files, TODO comments

"Working on auth bug," "Need to refactor X"

**Project**

Weekly/Monthly

CLAUDE.md, docs

Coding conventions, architecture patterns

**Permanent**

Rarely

Architecture Decision Records

Why we chose PostgreSQL, why we use Redux

### What NOT to Persist

-   **Current session context**: "We just discussed the login bug" → This isn't useful tomorrow
-   **Transient opinions**: "I think we should rewrite in Rust" → Unless decided, don't document
-   **Outdated information**: Update or remove, don't let it rot
-   **Sensitive data**: API keys, secrets, passwords → Use environment variables

## Context Files: CLAUDE.md and Friends

The most direct way to persist state for AI collaboration is through context files that AI systems automatically read.

### CLAUDE.md: Project Context for AI

Claude Code automatically reads `CLAUDE.md` in your project root. This is the perfect place to capture project-specific knowledge:

```
# Project Context## Project OverviewThis is a customer support dashboard for Acme Inc.## Tech Stack- Frontend: React with TypeScript- Backend: Node.js with Express- Database: PostgreSQL- Auth: JWT tokens## Coding Conventions- Use functional components with hooks- Prefix interfaces with 'I' (IUser, IAuthResponse)- No 'any' types—use 'unknown' if truly unknown- Async functions must handle errors explicitly## File Structuresrc/├── components/     # React components├── services/       # API calls├── utils/          # Shared utilities└── types/          # TypeScript types## Important Patterns- API calls go through services/, not from components- All errors are logged and user-friendly messages shown- Components receive data via props, no global state except auth## Current Work- Refactoring authentication to use refresh tokens- Next: Add password reset flow
```

Every Claude Code session reads this automatically. No more repeating conventions.

> **The Handshake**: When Claude Code sees CLAUDE.md, it doesn't just read it—it treats your project-specific conventions as context that takes precedence over generic patterns. Think of it as a handshake between you and the AI: "These are MY rules for THIS project."

### Other Context Files

Different AI tools read different files:

File

Tool

Purpose

`CLAUDE.md`

Claude Code

Project context for Anthropic Claude

`.cursorrules`

Cursor

Coding rules and patterns

`README.md`

All tools

General project documentation

`.aider.conf.yml`

Aider

AI coding assistant configuration

`docs/adr/`

All tools

Architecture Decision Records

## Architecture Decision Records: Why We Made Choices

One of the most valuable things to persist: **why you made technical decisions**.

Six months later, you won't remember why you chose PostgreSQL over MongoDB. A new developer won't know why you used Redux instead of Context API. These decisions deserve persistent documentation.

### ADR Template

```
# ADR-001: Choose PostgreSQL as Primary Database## StatusAccepted## ContextWe need a database for customer data. Requirements:- ACID transactions for payment processing- Complex relationships between customers, orders, products- SQL expertise available on team## DecisionUse PostgreSQL as the primary database.## ConsequencesPositive:- ACID guarantees for payments- Mature tooling and monitoring- Team has PostgreSQL experienceNegative:- Vertical scaling limitations (mitigate with read replicas)- More complex schema management than NoSQL## Alternatives Considered- MongoDB: Rejected due to ACID requirements- MySQL: Rejected due to team's PostgreSQL preference## Date2024-03-15
```

### Why ADRs Matter

When someone (or AI) asks "Why did we use PostgreSQL?", you don't need to remember. The ADR explains the decision, alternatives considered, and tradeoffs.

This is especially valuable for AI: when suggesting changes, AI can read ADRs and respect previous decisions rather than re-opening settled debates.

## Reproducibility: The Ultimate Goal

The highest form of state persistence: **someone (or some AI) can understand your entire project from the files alone**.

### What Makes a Project Reproducible?

**Complete Context**:

-   CLAUDE.md explains conventions and current work
-   README.md explains how to run the project
-   ADRs explain why key decisions were made
-   Code comments explain tricky logic
-   Tests document expected behavior

**Self-Documenting Structure**:

```
acme-dashboard/├── CLAUDE.md              # "This is a customer dashboard..."├── README.md              # "To start: npm install && npm start"├── docs/│   ├── adr/              # "Why PostgreSQL? Why Redux?"│   ├── architecture.md   # "How components interact"│   └── api.md            # "API endpoint documentation"├── src/│   ├── components/       # Organized by feature│   ├── services/         # API abstraction layer│   └── types/            # TypeScript definitions└── tests/                # Document behavior
```

Someone opening this project for the first time can:

1.  Read CLAUDE.md to understand what it is and how to work on it
2.  Read README.md to run it
3.  Read ADRs to understand key decisions
4.  Read code to understand implementation
5.  Read tests to understand expected behavior

AI can do the same—giving it complete context without you explaining anything.

## Practical State Persistence Patterns

### Pattern 1: Convention Documentation

Capture coding conventions in context files:

```
## Naming Conventions- Files: kebab-case (user-service.ts)- Components: PascalCase (UserProfile.tsx)- Functions: camelCase (getUserById)- Constants: UPPER_SNAKE_CASE (API_BASE_URL)## Import Order1. React imports2. Third-party imports3. Internal imports (grouped: types, components, services, utils)4. CSS imports
```

AI follows these automatically. Code stays consistent.

### Pattern 2: Work-in-Progress Tracking

Document current work to help future sessions:

```
## Current Work (2025-01-22)### In Progress- Refactoring auth to use refresh tokens### Completed Recently- Added email verification (2025-01-20)- Fixed pagination bug (2025-01-18)### Next Up- Add password reset flow- Implement rate limiting on API
```

When you return to a project after a break, you know exactly where you left off.

### Pattern 3: Known Issues and Gotchas

Document things that trip people up:

```
## Known Issues- API rate limits: 100 req/min, use exponential backoff- Test database: Must run `docker-compose up -d db` first- Hot reload: Doesn't work for environmental variables, restart server
```

AI can warn about these when suggesting changes.

### Pattern 4: The Session Journal

Here's a powerful pattern: ask the AI to maintain a `scratchpad.md` or `session-notes.md` file where it records its own reasoning.

```
## Session Notes (2025-01-22)### What I figured out- The auth bug was caused by token expiry not being checked- Fixed by adding middleware in src/auth/validate.ts### Where I left off- Implemented fix, tests passing- Still need to handle refresh token edge case### Questions for next session- Should refresh tokens have the same expiry policy?- Consider adding rate limiting to token refresh endpoint
```

**The insight**: Documentation is for *others*. Persisting state is for *the loop*. When the AI writes down its thought process, the next session picks up mid-thought instead of starting from scratch.

## The Anti-Pattern: When Persistence Goes Wrong

### Anti-Pattern 1: Outdated Context

```
## Tech StackReact, Redux, PostgreSQL
```

But you migrated to MongoDB six months ago.

**Fix**: Treat context files like code—update them in the *same commit* as your code changes. Renamed a function? Update CLAUDE.md in that commit. Changed the tech stack? Update the context file before merging. This ties directly to Principle 4 (Atomic Changes): one logical change, one commit, documentation included.

### Anti-Pattern 2: Over-Documenting Trivia

```
## We use semicolons## We use 2-space indentation## We use double quotes for strings
```

These are formatting conventions—let your linter handle them. Context files should capture meaningful decisions, not trivia.

### Anti-Pattern 3: Scattered Knowledge

Some decisions in Slack, some in email, some in tickets, some in people's heads.

**Fix**: If it's a decision, write an ADR. If it's a convention, add to CLAUDE.md. If it's not in git, it doesn't exist.

### Anti-Pattern 4: Context Overload

Pasting entire library documentation, full API references, or every possible convention into CLAUDE.md.

**The problem**: AI has a limited context window. Stuffing too much in means the AI might miss the important parts—or run out of room for your actual conversation.

**Golden Rule**: Keep context files dense but concise. Link to external docs instead of pasting them. Summarize the parts you actually use. If your CLAUDE.md is longer than 200 lines, ask yourself what can be moved to separate files that AI reads only when relevant.

## Working with AI: Guiding Context Reading

AI systems can be guided to read specific context:

```
# When working on authentication:Read: CLAUDE.md, docs/adr/003-auth-decision.md, src/auth/README.md# When working on database:Read: CLAUDE.md, docs/adr/001-database-choice.md, docs/schema.md# When adding new features:Read: CLAUDE.md first, then the relevant feature directory
```

This focuses AI's attention on relevant context rather than reading everything.

## Why This Principle Matters: Compounding Knowledge

Without state persistence:

-   Each session starts from zero
-   Knowledge doesn't accumulate
-   Onboarding is expensive
-   Decisions are forgotten

With state persistence:

-   Each session builds on previous ones
-   Knowledge compounds over time
-   Onboarding is self-service
-   Decisions are preserved

The difference is dramatic. With good state persistence, your AI collaboration gets better over time. Each session benefits from all previous documentation. You're not starting fresh—you're continuing an ongoing conversation.

## This Principle in Both Interfaces

Files are the durable layer that both General Agents share. The specific file types differ, but the principle is universal.

Pattern

Claude Code

Claude Cowork

**Context file**

CLAUDE.md (explicit, you create it)

Could use CLAUDE.md if working in folder with one

**Progress tracking**

Request explicit progress.md files

Progress visible in right panel during session

**Artifacts**

All outputs are files in filesystem

Artifacts panel shows generated files

**Session persistence**

Files persist, chat history doesn't

Same—files are the durable layer

**Handoff**

Document approach in files for next session

Save outputs for future reference

**In Cowork**: Ask Cowork to maintain a `progress.md` file tracking what's been completed. Create a `context.md` file before starting complex projects. These files serve the same purpose as CLAUDE.md—they persist knowledge that would otherwise be lost between sessions.

**Non-coder tip**: Start every Cowork session with: *"Before answering any questions, please read 'project\_brief.docx' in my files."* This simple prompt gives Cowork the same "memory" that CLAUDE.md gives Claude Code. The principle is universal—only the file format changes.

**The meta-insight**: Both interfaces are stateless. The AI doesn't remember you. But files do. The more you invest in persistent context files, the smarter every future session becomes—regardless of which interface you use.

## Try With AI

### Prompt 1: Context File Creation

```
I want to create a CLAUDE.md file for my project.Here's what I can tell you about my project:- [Project description]- [Tech stack]- [Coding conventions I follow]- [File structure]- [Any patterns or important decisions]Help me create a comprehensive CLAUDE.md that will help AI work effectively on this project.After creating it, help me understand:- What did I include that's most valuable?- What did I miss that should be added?- How will this file improve my AI collaboration going forward?
```

**What you're learning**: How to capture project-specific knowledge in a format that AI systems can use. You're learning to identify what context matters and how to structure it for maximum impact.

### Prompt 2: ADR Writing Practice

```
I want to practice writing Architecture Decision Records.Help me write an ADR for a decision I made recently:[Describe a technical decision you made—choice of database, framework, library, or approach]For this ADR:1. What was the context/problem?2. What decision did I make?3. What are the consequences (positive and negative)?4. What alternatives did I consider?5. Why did I choose this over the alternatives?Write the ADR in proper format, then help me understand how this document would be valuable to:- Future me (6 months from now)- A new team member- An AI assistant working on this project
```

**What you're learning**: How to document technical decisions in a way that preserves the "why" behind choices. You're learning to create knowledge assets that compound in value over time.

### Prompt 3: Reproducibility Audit

```
I want to audit my project for reproducibility.Help me assess: If a new developer (or AI) joined my project today, could they understand everything from the files alone?Check for:1. Project overview: Is there a clear description of what this project is?2. Getting started: Can someone run the project from README instructions?3. Conventions: Are coding patterns documented?4. Decisions: Are key technical choices explained with ADRs?5. Architecture: Is the system structure documented?6. Current work: Is it clear what's being worked on now?For each area, tell me:- What's currently in place?- What's missing or inadequate?- What specific file should I create or update to improve this?Then, help me create the missing pieces one by one.
```

**What you're learning**: How to design a project for maximum reproducibility. You're learning to create a self-documenting codebase where knowledge persists and compounds—making collaboration with humans and AI more effective.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 6: Constraints and Safety

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/06-constraints-and-safety.md)

# Principle 6: Constraints and Safety

You give an AI system access to your codebase. It's working well—making helpful changes, running tests, suggesting improvements. Then you notice something odd in git history. The AI deleted a directory you didn't ask it to touch. It ran commands you don't remember approving. It's refactoring code you specifically said not to change.

This isn't science fiction—these are real incidents that have happened. AI systems are powerful, and power without constraints is dangerous.

This principle is about **balancing capability with safety**. You want AI to be effective—but not so effective it causes damage. You want autonomy—but not so much autonomy that you lose control. The solution is thoughtful constraints and safety measures.

> **The Safety Mantra**: "As long as I haven't `git push`ed, I am the master of my machine." Everything the AI does locally can be undone. Uncommitted changes can be reverted. Commits can be reset. The moment of no return is the push—and you control that moment.

## The Risk Spectrum: Understanding What Can Go Wrong

Before designing safety measures, understand what you're protecting against.

### Category 1: Data Loss (Destructive Operations)

AI deletes or overwrites important data:

-   `rm -rf` on the wrong directory
-   Overwriting files without confirmation
-   Git operations that discard work
-   Database changes without backups

**Impact**: Hours to weeks of lost work **Likelihood**: Medium—AI follows instructions literally

### Category 2: Security Vulnerabilities

AI introduces security issues:

-   Hardcoded credentials in code
-   Insecure authentication implementations
-   SQL injection vulnerabilities
-   Dependency confusion attacks

**Impact**: System compromise, data breach **Likelihood**: Medium—AI doesn't automatically think like an attacker

### Category 3: Cost Overruns

AI generates expensive operations:

-   Infinite loops in cloud resources
-   API calls without rate limiting
-   Inefficient algorithms consuming compute
-   Unintended large-scale operations

**Impact**: Unexpected cloud bills **Likelihood**: Low—AI tries to be efficient, but doesn't know costs

### Category 4: Reputation Damage

AI makes changes that affect users:

-   Offensive content in user-facing materials
-   Bugs that corrupt user data
-   Performance issues that cause downtime
-   Privacy violations

**Impact**: Lost trust, user churn **Likelihood**: Low—but high impact

### Category 5: Workflow Disruption

AI interferes with team processes:

-   Commits that break CI/CD
-   Changes that conflict with others' work
-   Alters agreed-upon conventions
-   Makes conflicting changes across branches

**Impact**: Team friction, lost productivity **Likelihood**: Medium—AI doesn't know team context

## The Safety Hierarchy: Defense in Depth

No single safety measure is sufficient. You need layers—each protecting against different failure modes.

### Layer 1: Technical Constraints

**What**: Hard limits on what AI can do

**Examples**:

```
# Read-only filesystem access (sandbox)# Network restrictions (no external API calls)# Resource limits (CPU, memory, disk)# Whitelisted commands only
```

**Protects against**: Accidental damage, runaway processes

### Layer 2: Permission Controls

**What**: Require approval for certain actions

**Examples**:

```
# Approve before: deleting files# Approve before: running git push# Approve before: installing packages# Approve before: modifying config files
```

**Protects against**: Unintended destructive operations

### Layer 3: Environment Isolation

**What**: Separate AI work from production

**Examples**:

```
# AI works in staging/sandbox environment# Production requires manual deployment# Separate database instances# Separate API keys/tokens
```

**Protects against**: Production incidents

### Layer 4: Process Controls

**What**: Workflow that incorporates safety

**Examples**:

```
# Always review diffs before applying# Run tests before committing# Peer review for AI-generated changes# Rollback plans prepared in advance
```

**Protects against**: Bad code reaching production

### Layer 5: Human Verification

**What**: Human review before impact

**Examples**:

```
# Review AI suggestions before accepting# Manual approval for deployments# Security review for sensitive changes# Testing in isolated environment first
```

**Protects against**: All categories—final safety net

## Permission Models: Choosing Your Safety Level

Different AI tools offer different permission models. Understanding them helps you choose appropriate settings.

### Model 1: Permissive (Auto-Approve Safe Operations)

**How it works**: AI executes read operations and safe writes automatically; prompts for destructive actions

**Best for**: Experienced users, trusted AI, familiar codebase

**Example configuration**:

```
Auto-approve:- Read operations (cat, grep, find)- Test execution (npm test, pytest)- Git status/diff- File creation (new files only)Require approval:- File deletion (rm)- Git reset/rebase- Package installation- Config file changes
```

### Model 2: Confirming (Approve All Writes)

**How it works**: AI prompts before any write operation

**Best for**: New AI collaboration, unfamiliar codebase, learning phase

**Example configuration**:

```
Auto-approve:- Read operations onlyRequire approval:- All write operations- All file modifications- All command execution
```

### Model 3: Restricted (Sandbox Mode)

**How it works**: AI can only read; cannot modify anything

**Best for**: Exploration, code review, understanding unfamiliar codebases

**Example configuration**:

```
Auto-approve:- Read operations onlyBlocked:- All write operations- All command execution- All file modifications
```

### Choosing Your Model

Situation

Recommended Model

Rationale

**First time with AI**

Confirming

Build trust before autonomy

**Routine work on familiar project**

Permissive

Efficiency for safe operations

**Exploring unfamiliar code**

Restricted

Understand before modifying

**Production systems**

Confirming + Staging

Extra caution for critical systems

**Prototype/experimental work**

Permissive

Speed over caution, rollback available

## The Destructive Operations List

Know which commands require extra scrutiny. These should always trigger confirmation:

### File Operations

```
rm, rm -rf              # Delete files/directoriesmv                      # Move (can overwrite)cp                      # Copy (can overwrite)> file                  # Redirect and overwritedd                      # Low-level disk write
```

### Version Control

```
git reset --hard        # Discard all changesgit rebase              # Rewrite historygit push --force        # Overwrite remotegit clean -fd           # Delete untracked filesgit checkout -- .       # Discard working directory changes
```

### Package Management

```
npm install             # Can change dependenciespip install             # Can change dependenciesapt install             # System-level changesbrew install            # System-level changes
```

### System Operations

```
sudo                    # Elevated privilegessystemctl               # Service managementkill -9                # Force kill processesreboot, shutdown        # System operations
```

### Data Operations

```
DROP DATABASE           # Database destructionDELETE FROM            # Data deletion (without WHERE)TRUNCATE TABLE         # Remove all dataUPDATE (no WHERE)      # Modify all rows
```

## Sandboxing: Isolating AI Work

The most effective safety measure: **don't let AI touch production directly**.

### The Simplest Sandbox: A Git Branch

Before you worry about Docker containers or staging environments, know this: **a git branch is 90% of the safety most people need**.

```
git checkout -b ai-experiment
```

That's it. Now the AI can do whatever it wants—and you can throw it all away with `git checkout main && git branch -D ai-experiment`. No Docker knowledge required. No DevOps complexity. Just git.

Start here. Graduate to more sophisticated sandboxes only when you need them.

### Advanced Sandbox Strategies

**1\. Docker Container Sandbox**

```
# Run AI work in containerdocker run -it -v $(pwd):/workspace -w /workspace node:18 bash# AI works inside container# Can't affect host system# Can't access production resources
```

**2\. Staging Environment**

```
AI works on: staging.example.comManual deploy: production.example.comAI can make all the changes it wants to stagingYou review before promoting to production
```

**3\. Feature Branch Workflow**

```
# AI works on feature branchgit checkout -b feature/ai-work# Changes isolated from main# Merge only after review
```

**4\. Separate Credentials**

```
# .env.ai - AI's environmentAI_DATABASE_URL=postgresql://localhost:5432/sandbox_dbAI_API_KEY=sandbox_key_limited_permissions# .env - Production (never shown to AI)PRODUCTION_DATABASE_URL=postgresql://prod-server:5432/real_dbPRODUCTION_API_KEY=production_key_full_permissions
```

## Trust Gradualism: Easing into Autonomy

Don't go from zero autonomy to full autonomy overnight. Build trust gradually.

### Phase 1: Observation Only (Week 1)

-   AI reads files and explains them
-   AI suggests changes but doesn't apply them
-   You manually apply AI suggestions
-   Goal: Understand AI's capabilities and patterns

### Phase 2: Supervised Autonomy (Week 2-4)

-   AI makes changes in sandbox/feature branches
-   You review all diffs before applying
-   Destructive operations always require approval
-   Goal: Build confidence with safety net

### Phase 3: Selective Autonomy (Month 2-3)

-   AI autonomously handles safe operations (tests, linting)
-   AI handles routine refactors within approved patterns
-   Destructive operations still require approval
-   Goal: Accelerate routine work while maintaining oversight

### Phase 4: Calibrated Autonomy (Month 3+)

-   AI autonomously handles most operations
-   Pre-approve known-safe command patterns
-   Approval only for novel or high-risk operations
-   Goal: Maximum efficiency with maintained safety

### Trust Signals to Track

Track these to decide when to increase autonomy:

-   **Error rate**: How often does AI make mistakes?
-   **Correction ease**: How easy is it to fix AI mistakes?
-   **Pattern adherence**: Does AI follow project conventions?
-   **Risk awareness**: Does AI avoid known dangerous operations?

## Safety Checklist: Before Each Session

Before starting an AI session, verify:

**Environment**:

-    Working in correct directory (not production)
-    On correct branch (feature branch, not main)
-    Environment variables set correctly (sandbox credentials)
-    Uncommitted work is backed up or committed

**Tool Configuration**:

-    Permission mode appropriate for task
-    Destructive operations require approval
-    Read-only mode if just exploring
-    Logging enabled for audit trail

**Mental Model**:

-    Clear task scope (what AI should and shouldn't do)
-    Identified high-risk operations to watch for
-    Rollback plan if things go wrong
-    Stopping point defined

## Incident Response: What to Do When Something Goes Wrong

Despite all precautions, things will go wrong. Have a plan.

### Emergency Cheat Sheet (Memorize This)

Situation

Command

What It Does

**Stop AI immediately**

`Ctrl+C`

Kills the current operation

**See what changed**

`git status`

Shows modified/deleted files

**Undo uncommitted changes**

`git checkout -- .`

Restores all files to last commit

**Nuclear reset**

`git reset --hard HEAD`

Discards everything since last commit

**Undo last commit**

`git reset --hard HEAD~1`

Removes the most recent commit entirely

Print this. Tape it to your monitor. When panic hits, you won't remember—but you can read.

### Immediate Actions

```
# 1. Stop the AI# Ctrl+C or stop button# 2. Assess damagegit status          # What changed?git diff            # What's the diff?# 3. If bad, revertgit checkout -- .   # Revert working directorygit reset --hard    # Reset to last commit# 4. If already committedgit revert HEAD     # Revert the commitgit reset --hard HEAD~1  # Or remove commit entirely
```

### Post-Incident Review

After an incident, ask:

-   What happened?
-   Why did safeguards fail?
-   What constraint would have prevented this?
-   How do I adjust permissions/configuration?

### Example: AI Deleted Wrong Directory

**Incident**: AI ran `rm -rf node_modules/` but executed in wrong directory, deleting source files.

**Immediate**: Ctrl+C immediately. Assess damage with `git status`.

**Recovery**: `git checkout -- .` to restore from git.

**Prevention for next time**:

-   Add safeguard: AI must `pwd` before destructive operations
-   Change permission mode: require approval for all `rm` commands
-   Add alias: `rm` → `rm -i` (interactive mode)

## Why This Principle Matters: Trust Through Safety

Paradoxically, **constraints enable autonomy**. When you have good safety measures:

-   You feel comfortable giving AI more autonomy
-   You can focus on high-level direction rather than worrying
-   AI can be more effective without risking disaster

Without safety measures, you're constantly on edge—afraid to let AI do anything meaningful. With safety measures, you can collaborate confidently.

The goal isn't to prevent AI from doing anything. The goal is to prevent AI from doing **certain things**—while enabling everything else.

## Prompt-Based Safety: Guardrails in Your Instructions

Beyond tool configuration, you can build safety directly into your prompts.

### The Safety Hook (Cost Control)

For operations that might incur costs (API calls, cloud resources), add this to your prompt:

```
Before performing any operation that might cost money (API calls,cloud deployments, external service requests), stop and tell methe estimated cost. Don't proceed until I approve.
```

This catches the invisible risks—the $500 API bill from an infinite loop, the runaway cloud instance.

### The Guardrail Prompt Template

For maximum safety, start sessions with explicit constraints:

```
You are helping me with [task]. Follow these safety rules:FORBIDDEN actions (never do these):- Never use `rm` on any file containing `.env`, `config`, or `credentials`- Never run `git push` without my explicit approval- Never modify files outside the /src directoryREQUIRED checks (always do these):- Before any destructive command, run `pwd` and show me the current directory- Before deleting anything, show me what will be deleted and wait for confirmation- Before running commands with side effects, explain what they'll doIf you're unsure whether an action is safe, ask me first.
```

Customize this template for your specific project and risk tolerance.

## This Principle in Both Interfaces

> "Cowork asks before deleting anything. This isn't just UX—it's architectural."

Constraints manifest differently in each interface, but the underlying safety model is the same.

Constraint Type

Claude Code

Claude Cowork

**Boundary**

Permission flags, CLAUDE.md restrictions

Folder selection, connector permissions

**Action**

Configured via settings/hooks

Built-in confirmation dialogs

**Resource**

API cost monitoring, token limits

Subscription limits apply

**Output**

Specified in prompts/Skills

Skills define output formats

**In Cowork**: The confirmation dialogs ARE the constraint system. When Cowork asks "Should I delete this file?" or "Should I modify this document?", it's implementing the same safety principle that Claude Code's permission model provides. The difference is that Cowork's constraints are built into the GUI—you don't configure them, you respond to them.

**The paradox applies equally**: In both interfaces, constraints enable capability. When you trust the safety model, you give the agent more autonomy. Without constraints, you'd never let either agent do meaningful work on important files.

## Try With AI

### Prompt 1: Risk Assessment Exercise

```
I want to practice assessing safety risks in AI workflows.Here's a scenario: I'm planning to have AI help me [describe a task—refactor database schema, update authentication system, optimize performance, etc.]Help me assess:1. What could go wrong? Brainstorm specific risks2. What's the impact if something does go wrong?3. What safety measures should I put in place?For each safety measure, categorize it:- Technical constraint (what to restrict)- Permission control (what to approve)- Environment isolation (where to work)- Process control (how to work)- Human verification (when to review)Then, help me create a specific plan: "Before starting, I will X. During work, AI can Y but not Z. After work, I will verify W."
```

**What you're learning**: How to identify risks and design appropriate safety measures. You're developing the skill of anticipating problems before they occur and structuring AI work to be safe by design.

### Prompt 2: Permission Model Design

```
I want to design an appropriate permission model for my situation.Here's my context:- [Your experience level with AI]- [How familiar you are with your codebase]- [What you're working on—prototype, production, personal project, team project]- [Your risk tolerance—low, medium, high]Help me design a permission model:1. Should I use Permissive, Confirming, or Restricted mode? Why?2. What operations should be auto-approved?3. What operations should require approval?4. What operations should be blocked entirely?Also, help me understand:- When should I move to a more permissive model?- What signals should I track to build trust?- What would cause me to tighten restrictions?
```

**What you're learning**: How to choose appropriate permission models based on context and experience. You're learning to calibrate autonomy based on trust and risk—balancing safety with effectiveness.

### Prompt 3: Sandbox Setup

```
I want to set up a safe sandbox environment for AI work.Help me design a sandboxing strategy for my project:- [Project type—web app, data pipeline, scripts, etc.]- [Current setup—local development, cloud, etc.]I want to make sure:1. AI can't affect production systems2. AI can experiment freely without risk3. I can easily promote AI work to production after reviewDesign a sandbox setup that includes:- Directory structure (sandbox vs production)- Git workflow (branches, merge process)- Environment variables (sandbox credentials)- Database approach (separate instances)- Deployment process (manual promotion after review)After we design it, help me actually set it up step by step.
```

**What you're learning**: How to create isolated environments where AI can work safely. You're learning to structure your workflow so that AI experimentation never puts production at risk—enabling confident collaboration.

### Safety Note

When in doubt, start with more restrictions and ease into autonomy. It's always easier to loosen constraints later than to recover from a preventable incident. The best safety measure is a cautious approach—especially when you're just starting with AI collaboration.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principle 7: Observability

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/07-observability.md)

# Principle 7: Observability

You ask an AI system to refactor a database query. It says it's done. You run the application. It crashes. You check the query—it looks completely different from what you expected. When did it change? What steps did it take? What files did it modify? You have no idea. You're flying blind.

This is the observability problem: **if you can't see what the AI is doing, you can't debug problems, build trust, or improve the collaboration**.

Observability means seeing into the black box. It's understanding what actions the AI took, in what order, with what results. This principle is about making AI workflows transparent, traceable, and debuggable.

> **Synergy with Principle 3**: Observability and Verification are partners. Verification (Principle 3) is the *act* of checking; Observability (this principle) provides the *evidence* that makes checking possible. Without observability, verification is guesswork. Observability gives you the map; Verification tells you if you've arrived at the right destination.

## The Black Box Problem: What Happens When You Can't See

### Without Observability

```
You: "Fix the authentication bug"AI: [Works for 30 seconds] "Done!"You: "Thanks!"[Later - Authentication completely broken]You: "What did you actually change?"AI: "I don't remember—this is a new conversation."[You spend 2 hours debugging, reading git diff, trying to understand what happened]
```

### With Observability

```
You: "Fix the authentication bug"AI:  1. Reading src/auth/login.js...  2. Found issue: token validation missing  3. Adding token validation...  4. Running tests...  5. Tests passed  6. Changes: Modified src/auth/login.js (added 5 lines)"Done! Here's what I changed."[Later - Authentication completely broken]You: "What did you actually change?"[You check the log]You: "I see—you added token validation but the validation function doesn't exist yet. That's the real bug."
```

The difference: Observability lets you understand the full context of what happened, not just the final result.

## The Three Pillars of Observability

### Pillar 1: Action Visibility (What Did It Do?)

You need to see each action the AI took:

```
✓ Read package.json✓ Read src/auth/login.js✓ Modified src/auth/login.js  - Added validateToken() call  - Added error handling✓ Ran npm test✓ Tests passed✓ Git diff shows 5 lines added
```

Without this, you can't debug. With this, you can trace exactly what happened.

### Pillar 2: Rationale Visibility (Why Did It Do It?)

You need to understand the AI's reasoning:

```
Reading src/auth/login.js...→ Identified issue: Missing token validation→ Chose approach: Add validateToken() call→ Why: This matches the pattern used in other auth functions
```

Without rationale, you see changes but not the intent. With rationale, you can evaluate whether the approach makes sense.

> **Warning: AI Rationalization**: AI can sound confident even when wrong. It will give plausible-sounding explanations for broken code. Never trust the rationale alone—always verify with actual results (tests, output, behavior). If the rationale says "this will work" but the tests fail, trust the tests.

### Pillar 3: Result Visibility (What Was the Outcome?)

You need to see the result of each action:

```
Ran npm test...→ PASS: src/auth/login.test.js→ 12 tests passed→ 0 tests failed→ Coverage: 85% (unchanged)Modified files:- src/auth/login.js (+5 lines, -1 line)
```

Without results, you can't verify success. With results, you can confirm the AI achieved what it intended.

## Reading Activity Logs: A Practical Guide

Most AI tools provide activity logs. Here's how to read them effectively.

### Log Structure

Typical activity log structure:

```
[TIME] [ACTION] [DETAIL][2025-01-22 14:32:15] [READ] /Users/project/src/auth/login.js[2025-01-22 14:32:16] [ANALYZE] Found missing token validation[2025-01-22 14:32:17] [EDIT] /Users/project/src/auth/login.js  + Added: validateToken() call  + Added: try-catch for validation errors[2025-01-22 14:32:18] [COMMAND] npm test  → Exit code: 0  → Output: 12 passing[2025-01-22 14:32:19] [COMPLETE] Task finished successfully
```

### What to Look For

**Success Pattern**:

```
READ → ANALYZE → EDIT → VERIFY → COMPLETE
```

Each step logically follows the previous one. Verification happens after changes.

**Warning Pattern**:

```
READ → EDIT → EDIT → EDIT → [NO VERIFICATION] → COMPLETE
```

Multiple edits without verification. No testing. High risk of problems.

**Failure Pattern**:

```
READ → EDIT → VERIFY → [TESTS FAIL] → EDIT → [TESTS FAIL AGAIN] → GAVE UP
```

AI tried but couldn't solve the problem. Needs human intervention.

### The "Scan for Verbs" Technique

Feeling overwhelmed by 50-line logs? Here's how to skim effectively:

**Ignore the timestamps. Look only for the verbs**: READ, EDIT, TEST, FAIL, COMPLETE.

```
[timestamp] [READ]  ← AI looked at something[timestamp] [EDIT]  ← AI changed something[timestamp] [TEST]  ← AI verified something[timestamp] [FAIL]  ← Something went wrong
```

**The red flag**: If you see EDIT without TEST after it, that's a problem. The AI changed code but didn't verify it works.

```
READ → EDIT → EDIT → EDIT → COMPLETE  ← No verification! Danger!READ → EDIT → TEST → COMPLETE         ← Good: verified before finishing
```

This 10-second scan catches most issues without reading every line.

### Debugging Through Logs

When something goes wrong, trace through the log:

```
# Problem: Tests failing after AI work# Log shows:[14:32:15] [EDIT] src/utils/validation.js  + Added: stricter email validation  - Removed: regex-based validation[14:32:16] [COMMAND] npm test  → FAIL: 15 tests failing  → All failures in email validation tests# Diagnosis: AI changed validation approach but broke existing tests# Solution: Revert change, ask AI to run tests first
```

## Designing for Observability: Building Transparent Workflows

When working with AI, design workflows that make actions visible.

### Pattern 1: Explain Before Executing

```
You: "Refactor the authentication system"AI: "Here's my plan:1. Extract token logic to TokenService class2. Update login.js to use TokenService3. Update logout.js to use TokenService4. Run tests to verify5. If tests pass, commit changesShall I proceed?"You: "Yes, proceed"AI: [Executes with full logging]
```

The plan makes intentions visible. You can redirect before execution.

### Pattern 2: Checkpoint After Major Steps

```
AI: "Step 1 complete: Created TokenService classChanges:- src/services/TokenService.js (new file, 45 lines)Status: Ready for step 2Shall I continue with updating login.js?"
```

Checkpoints let you verify progress incrementally.

### Pattern 3: Summary After Completion

```
AI: "Task complete. Summary:Files modified: 3- src/services/TokenService.js (created)- src/auth/login.js (modified: -12 lines, +8 lines)- src/auth/logout.js (modified: -8 lines, +6 lines)Tests: 15 passing, 0 failingGit status: 3 files stagedNext steps:- Review changes with git diff- Commit if satisfied- Or ask me to adjust anything"
```

The summary provides complete context for review.

## Tool-Specific Observability Features

Different AI tools provide different observability features.

### Claude Code

**Activity Logs**: `.claude/activity-logs/prompts.jsonl`

-   Records all prompts and responses
-   Can review past sessions
-   Full conversation history

**Subagent Logs**: `.claude/activity-logs/subagent-usage.jsonl`

-   Tracks when Claude delegated to specialized agents
-   Shows which subagent handled what task

### Cursor

**History Panel**: Shows all AI interactions in current session

-   Can review each suggestion
-   See diffs before accepting

**Cmd+K Quick Actions**: Contextual suggestions with preview

-   See what will change before accepting

### GitHub Copilot

**Copilot Workspace**: Full AI project work with visible steps

-   Shows plan before executing
-   Displays file changes
-   Provides test results

## Observability Anti-Patterns

### Anti-Pattern 1: Silent Failures

```
AI: "Done!" [but something actually failed]You only discover hours later when the system breaks.
```

**Fix**: Require confirmation/visibility for all operations, not just successes.

### Anti-Pattern 2: Output Without Context

```
AI: [Shows diff] "I changed this file"[You can't tell why, or if it's correct]
```

**Fix**: Require rationale with every change. "I changed X because Y."

### Anti-Pattern 3: Missing Intermediate Steps

```
AI: [Works for 2 minutes] "Done!"[You have no idea what happened in those 2 minutes]
```

**Fix**: Require progress updates for long-running tasks.

## Real-Time vs Post-Mortem: Two Types of Observability

There are two ways to observe AI work:

### Real-Time Observation (Watching It Happen)

You see actions as they occur. This is your chance to **intervene before damage**.

**Key insight**: If you see the AI reading the wrong directory or about to delete the wrong file, don't wait for it to finish. Hit `Ctrl+C` immediately.

```
AI: Reading /Users/wrong-project/src/...  ← STOP! Wrong directory!You: [Ctrl+C]You: "Wait, you're in the wrong directory. We're working on /Users/correct-project/"
```

Real-time observation is your first line of defense. Use it.

### Post-Mortem Observation (Reviewing Logs)

You review logs after the task completes. This is how you **debug problems and learn patterns**.

```
# After something goes wrong:cat .claude/activity-logs/prompts.jsonl | jqgit log --oneline -5git diff HEAD~1
```

Post-mortem tells you what happened. Real-time lets you prevent it from happening.

**Use both**: Watch in real-time during the task. Review logs afterward to catch anything you missed.

## Building Your Observability Toolkit

### Essential Observability Tools

**1\. Git History**

```
# See what changedgit log --oneline -10# See the exact changesgit diff HEAD~1 HEAD# See who changed what (including AI if attributed)git blame file.js
```

**2\. Activity Log Review**

```
# Claude Code logscat .claude/activity-logs/prompts.jsonl | jq# Filter by timecat .claude/activity-logs/prompts.jsonl | jq 'select(.timestamp > "2025-01-22")'# Show only errors (copy-paste this one!)cat .claude/activity-logs/prompts.jsonl | jq 'select(.error != null)'# Show only tool calls that failedcat .claude/activity-logs/prompts.jsonl | jq 'select(.tool_result.success == false)'
```

> **Log Query Cheat Sheet**: The error filter above is your superpower. When something goes wrong, run that one command first—it cuts through hundreds of log lines to show you exactly what failed.

**3\. Test Results**

```
# Run tests and save outputnpm test 2>&1 | tee test-results.log# Compare before/aftergit diff HEAD~1:test-results.log
```

### Custom Logging Patterns

Add logging to your AI workflows:

```
// Log AI actions for later reviewfunction logAIAction(action, details) {  const logEntry = {    timestamp: new Date().toISOString(),    action: action,    details: details,    user: process.env.USER,    workingDirectory: process.cwd()  };  fs.appendFileSync('.ai-activity.log', JSON.stringify(logEntry) + '\n');}// Use in workflowlogAIAction('READ', { file: 'src/auth/login.js' });logAIAction('EDIT', { file: 'src/auth/login.js', changes: '+5 -1' });
```

## Why Observability Enables Trust

Trust isn't given—it's earned through transparency. When you can see what AI is doing:

-   You understand its decisions
-   You can correct mistakes early
-   You learn its patterns
-   You feel confident giving it more autonomy

Without observability, you're always second-guessing. With it, you can build genuine trust based on evidence.

## The 2-Minute Audit: A Habit That Catches Silent Failures

After every AI task, spend exactly 2 minutes on this checklist:

Check

Command

What You're Looking For

**1\. Git diff**

`git diff`

Do the changes match what AI claimed it did?

**2\. AI summary**

(review AI's final message)

Does its summary match the diff?

**3\. Quick test**

`npm test` or equivalent

Do tests still pass?

**The catch**: If the git diff doesn't match the AI's summary, you've found a "silent failure"—the AI said it did X but actually did Y. These are the dangerous bugs.

**Time investment**: 2 minutes per task. **Payoff**: Catches problems before they compound into hours of debugging.

Make this automatic. Every task ends with this audit. No exceptions.

## This Principle in Both Interfaces

> "If you can't see what the agent is doing, you can't fix it when it goes wrong."

Both interfaces provide observability—through different mechanisms.

Layer

Claude Code

Claude Cowork

**Plan**

Chat shows reasoning

Progress panel shows plan

**Actions**

Terminal shows commands executed

Progress panel shows steps taken

**Outputs**

Files visible in filesystem

Artifacts panel shows outputs

**Errors**

Terminal shows error output

Progress panel shows issues

**Cowork's observability advantage**: The three-panel layout (chat, progress, artifacts) was designed specifically for observability. You can see plan, execution, and outputs simultaneously without switching contexts.

**Claude Code's observability advantage**: Full terminal access means nothing is hidden. You see exactly every command executed, every file read, every output generated. The raw transparency of the terminal is unmatched.

**The principle is the same**: Regardless of interface, you need visibility into what the agent is doing. Without it, agents are black boxes. With it, they're debuggable systems you can trust and improve.

## Try With AI

### Prompt 1: Log Analysis Practice

```
I want to practice reading and understanding AI activity logs.Here's an activity log from an AI session:[Paste a real or hypothetical activity log showing a sequence of actions]Help me analyze:1. What actions did the AI take? (List them in order)2. What was the AI trying to accomplish?3. Did it succeed? How do you know?4. Are there any warning signs or potential issues?5. What would I check to verify the work is correct?Then, help me understand: What patterns should I look for in logs to identify successful vs problematic AI sessions?
```

**What you're learning**: How to read and interpret AI activity logs. You're developing the skill of understanding agent behavior through observation—essential for debugging and building trust.

### Prompt 2: Designing Observable Workflows

```
I want to design more observable AI workflows.I'm going to have you help me with [describe a task]. But first, let's design how you'll make your work visible:For this task, I want you to:1. Show me your plan before executing2. Check in with me after each major step3. Provide a summary when complete4. Explain the rationale for significant changesLet's execute this task with full observability. After we're done, help me reflect:- What was most useful to see?- What was missing?- How would I modify this approach for future tasks?
```

**What you're learning**: How to design workflows that are transparent and observable. You're learning to structure AI collaboration so that actions are visible, traceable, and understandable.

### Prompt 3: Debugging Through Logs

```
I want to practice debugging AI work using logs.Scenario: I had an AI help me with a task, but something isn't working right.Here's what I know:- [Describe the problem—tests failing, unexpected behavior, etc.]- [Share the activity log if available, or describe what the AI did]Help me debug this by:1. Reconstructing what likely happened based on the information2. Identifying the most likely cause of the problem3. Suggesting what to check or verify4. Proposing a fixThen, help me understand: What observability would have made this easier to debug? What should I track next time?
```

**What you're learning**: How to use observability to debug problems effectively. You're learning to trace issues through logs, understand agent behavior, and identify what additional visibility would help.

### Safety Note

Observability is your defense against unexpected behavior. Always review activity logs when something seems wrong. The more you understand what the AI is doing, the better you can direct it and catch problems early.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Putting It All Together: Workflows in Practice

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/08-putting-it-all-together.md)

# Putting It All Together: Workflows in Practice

You've learned the seven principles of general agent problem solving:

1.  **Bash is the Key** - Terminal access enables agentic capability
2.  **Code as Universal Interface** - Code provides precision in communication
3.  **Verification as Core Step** - Continuous testing ensures reliability
4.  **Small, Reversible Decomposition** - Breaking problems into manageable steps
5.  **Persisting State in Files** - Context files maintain shared understanding
6.  **Constraints and Safety** - Guardrails enable confident collaboration
7.  **Observability** - Visibility enables debugging and trust

Knowing the principles is one thing. Applying them together in real workflows is another. This lesson shows how the principles combine in practice, with concrete examples you can adapt to your own work.

## Your New Role: From Typist to Director

Here's the mindset shift: **You're no longer the one typing code. You're the director managing an agent.**

Think of the AI as a junior developer with infinite energy but no institutional knowledge. It will work tirelessly, but it needs:

-   Clear direction (what to do)
-   Context (why and how)
-   Guardrails (what NOT to do)
-   Verification (did it work?)

Your job is no longer typing—it's directing, reviewing, and approving. The seven principles are your management framework.

## The Integration Challenge: Principles in Combination

Real workflows rarely involve a single principle in isolation. They require multiple principles working together:

Task

Key Principles

Why These Principles Matter

**Debug production issue**

1, 3, 7

Terminal access to investigate, verification of fixes, observability to understand what happened

**Refactor large module**

2, 4, 5

Code as specification, small reversible steps, context persistence for patterns

**Add new feature**

All principles

Complete workflow needs all aspects

**Set up new project**

1, 5, 6

Terminal for setup, context files, safety for new environment

**Optimize performance**

1, 3, 7

Terminal for profiling, verification of improvements, observability to find bottlenecks

## Workflow 1: Debugging a Production Issue

### Scenario

You get a report: "Users are seeing 'Invalid token' errors when logging in."

### Applying the Principles

**Principle 1: Bash is the Key**

```
# AI can investigate directlytail -f /var/log/app.log              # Real-time logsgrep "Invalid token" /var/log/app.log # Find related errorsps aux | grep node                    # Check running processes
```

**Principle 7: Observability**

```
# Trace through the system# AI reads logs to understand the sequence:# 14:32:15 - Login request from user@example.com# 14:32:16 - Token generated: eyJhbGc...# 14:32:17 - Token validation: FAIL# 14:32:17 - Error: Invalid token
```

**Principle 3: Verification as Core Step**

```
# AI proposes fix, then verifies# "I see the issue: Token validation uses wrong secret"# AI reads .env file# AI confirms: TOKEN_SECRET mismatch# AI proposes: Fix secret in .env# You verify: Is this the correct secret?# AI tests: Login with test credentials
```

**Principle 4: Small, Reversible Decomposition**

```
# Fix in one step, verify, then move onStep 1: Update .env with correct secretStep 2: Restart applicationStep 3: Verify login worksStep 4: Monitor logs for recurrence
```

**Principle 6: Constraints and Safety**

```
# AI doesn't automatically modify production .env# Requires your confirmation# You: "Show me the diff before applying"# AI shows: -TOKEN_SECRET=old +TOKEN_SECRET=new# You approve, AI applies change
```

### Complete Workflow

```
You: "Users getting 'Invalid token' errors. Help debug."AI: "Let me investigate.[Reads logs]I see: Token validation failing for all logins.[Checks .env]Found: TOKEN_SECRET doesn't match what's encoded in tokens.[Checks token generation code]Confirmed: app.js uses TOKEN_SECRET from .env, but .env has wrong value.Proposed fix:1. Update .env with correct TOKEN_SECRET2. Restart application3. Test login4. Monitor logsShall I proceed?"You: "Show me the diff first."AI: [Shows .env diff]You: "Approved."AI: [Applies change][Restarts app][Tests login]✓ Login working[Monitoring logs]✓ No new errorsFixed. Summary: TOKEN_SECRET mismatch caused validation failures.Corrected secret, restarted, verified login working."
```

## Workflow 2: Implementing a New Feature

### Scenario

You need to add: "Users can reset their password via email."

### Applying the Principles

**Principle 5: Persisting State in Files**

```
# First, update CLAUDE.md with new context## Current Work### In Progress- Password reset feature: email token generation, reset endpoint, UI### Requirements- Token expires in 1 hour- Single-use tokens- Email sent via SendGrid
```

**Principle 2: Code as Universal Interface**

```
// Write specification as code (test)test('password reset flow', async () => {  // Request reset  const response1 = await requestReset('user@example.com');  expect(response1.success).toBe(true);  // Get token from email (mock)  const token = await getLastEmailToken();  // Use token to reset  const response2 = await resetPassword(token, 'newPassword123');  expect(response2.success).toBe(true);  // Login with new password  const response3 = await login('user@example.com', 'newPassword123');  expect(response3.success).toBe(true);});
```

**Principle 4: Small, Reversible Decomposition**

```
Break into 8 steps:1. Add password reset token to database schema2. Create token generation utility3. Create password reset email template4. Add POST /auth/reset-request endpoint5. Add POST /auth/reset-confirm endpoint6. Add password reset UI7. Add tests8. Integrate with SendGrid
```

**Principle 3: Verification as Core Step**

```
# After each step:npm test                     # Run testsgit diff                     # Review changesnpm run build               # Verify build
```

**Principle 1: Bash is the Key**

```
# AI executes each step# Step 1: Modify schemanpx prisma migrate dev --name add-reset-tokens# Step 2: Create utility# [AI writes src/utils/token-generator.ts]# Step 3: Create email template# [AI writes emails/reset-password.html]# Continue through all steps...
```

**Principle 6: Constraints and Safety**

```
# Safety checkpoints:- Database migration: Show SQL before applying- Email sending: Use sandbox API key first- UI changes: Review before committing
```

**Principle 7: Observability**

```
AI provides progress updates:"Step 3 complete: Created email templateFiles: +emails/reset-password.htmlNext: Add reset-request endpointContinue?"
```

### Complete Workflow Timeline

Time

Step

Principle(s) Applied

0:00

Write test specification

2 (Code as Interface)

0:05

Update CLAUDE.md with context

5 (Persist State)

0:10

Break into 8 steps

4 (Decomposition)

0:15

Step 1: Database migration + verify

1, 3, 6

0:20

Step 2: Token utility + verify

1, 3, 6

0:25

Step 3: Email template + verify

1, 3, 6

0:30

Step 4: Reset-request endpoint + verify

1, 3, 6, 7

0:35

Steps 5-8: Remaining work

1, 3, 6, 7

0:50

Full test suite + integration tests

3 (Verification)

0:55

Review all changes with git diff

7 (Observability)

1:00

Commit if satisfied

4 (Reversible)

## Workflow 3: Refactoring a Large Module

### Scenario

Refactor `src/auth/auth.js` (500 lines) into smaller, testable modules.

### Applying the Principles

**Principle 5: Persisting State in Files**

```
# Document before starting## Refactoring Plan: src/auth/auth.jsCurrent issues:- 500-line file, hard to understand- Mixed concerns: validation, storage, tokens- No testsTarget structure:src/auth/├── validation.js    # Input validation├── storage.js       # Database operations├── tokens.js        # Token generation/validation├── auth.js          # Orchestration (small)└── __tests__/    ├── validation.test.js    ├── storage.test.js    └── tokens.test.js
```

**Principle 4: Small, Reversible Decomposition**

```
Step 1: Extract validation logic (reversible via git)Step 2: Extract storage logic (reversible via git)Step 3: Extract token logic (reversible via git)Step 4: Write tests for extracted modulesStep 5: Update auth.js to use new modulesStep 6: Add integration testsStep 7: Remove old auth.js codeStep 8: Full test suite
```

**Principle 2: Code as Universal Interface**

```
// Before: Show current code// After: Show refactored code// AI proposes diff, you review
```

**Principle 3: Verification as Core Step**

```
# After each extraction:npm test                      # Ensure tests still passnpm run lint                  # Ensure code qualitynpm run build                 # Ensure build succeeds
```

**Principle 1: Bash is the Key**

```
# AI executes refactor stepsgit checkout -b refactor/auth-extraction# [Performs extractions]git diff --stat               # Show summary
```

**Principle 6: Constraints and Safety**

```
# Work on feature branch# Commit after each successful step# Easy rollback if needed
```

**Principle 7: Observability**

```
AI provides progress:"Extracted validation (87 lines)Created: src/auth/validation.jsModified: src/auth/auth.js (-87 lines)Tests: PASSCommit? [y/n]"
```

## Principle Selection Guide: Which Principles When?

Not all principles are equally important for every task. Use this guide to prioritize:

Task Type

Most Critical Principles

Why

**Quick bug fix**

1, 3, 7

Fast investigation, verify fix, see what happened

**New feature**

All

Complete workflow needs all aspects

**Refactoring**

2, 4, 5

Code precision, small steps, context persistence

**Debugging**

1, 3, 7

Terminal access, verification, visibility

**Learning codebase**

1, 7, 5

Read files, observe patterns, understand context

**Setup/install**

1, 5, 6

Terminal commands, state files, safety in new env

**Performance work**

1, 3, 7

Profiling (terminal), verification, observability

## Workflow Templates: Ready-to-Use Patterns

### Template 1: Quick Fix Pattern

```
1. Describe problem to AI2. AI reads files to understand (Principle 1, 7)3. AI proposes solution as code diff (Principle 2)4. You review and approve (Principle 6)5. AI applies change (Principle 1)6. AI verifies with tests (Principle 3)7. AI shows summary (Principle 7)8. You commit if satisfied (Principle 4)
```

### Template 1b: When the Fix Fails

What happens when step 6 (verification) fails? Don't panic—follow this recovery path:

```
6. AI verifies with tests → TESTS FAIL   ↓6b. AI identifies WHY it failed (Principle 7: Observability)    "Tests fail because: [specific reason]"   ↓6c. AI reverts the change (Principle 4: Reversibility)    git checkout -- . OR git reset --hard HEAD   ↓6d. AI proposes NEW approach based on what it learned    "The first approach failed because X. Let me try Y instead."   ↓6e. Return to step 3 with new approach
```

**Key insight**: Failure is information. The failed attempt tells you what DOESN'T work, narrowing down what will. Revert cleanly, learn from the failure, try again.

### Template 2: Feature Development Pattern

```
1. Write test/specification (Principle 2)2. Update CLAUDE.md with context (Principle 5)3. Break feature into steps (Principle 4)4. For each step:   a. AI implements (Principle 1)   b. AI verifies (Principle 3)   c. AI shows progress (Principle 7)   d. You approve (Principle 6)5. Full integration tests (Principle 3)6. Review all changes (Principle 7)7. Commit (Principle 4)
```

### Template 3: Refactoring Pattern

```
1. Document current state (Principle 5)2. Plan refactoring steps (Principle 4)3. Create feature branch (Principle 6)4. For each extraction:   a. AI extracts code (Principle 2)   b. AI verifies tests pass (Principle 3)   c. AI shows what changed (Principle 7)   d. Commit if good (Principle 4)5. Integration tests (Principle 3)6. Merge to main when ready (Principle 6)
```

## Evaluating Your Workflow: A Self-Assessment

Use this checklist to evaluate how well you're applying the principles:

### Terminal Access (Principle 1)

-    AI can read project files directly
-    AI can run commands (tests, builds, etc.)
-    You're not copying/pasting code manually
-    AI uses terminal for investigation, not just code generation

### Code as Interface (Principle 2)

-    You provide specifications as code/tests, not vague descriptions
-    You review AI-generated code as the primary feedback mechanism
-    You use concrete examples to clarify requirements
-    You iterate through code changes, not natural language debate

### Verification (Principle 3)

-    You verify after every significant change
-    Tests run automatically or with AI assistance
-    You never accept code without testing
-    You have appropriate verification depth for risk level

### Decomposition (Principle 4)

-    You break tasks into small steps
-    Each step can be independently tested
-    Each commit is atomic and reversible
-    You iterate rather than batch

### State Persistence (Principle 5)

-    You maintain CLAUDE.md or similar context file
-    Project conventions are documented
-    Current work is tracked
-    Decisions are documented (ADRs)

### Safety (Principle 6)

-    Destructive operations require approval
-    You work in sandbox/feature branches
-    You have appropriate permission model
-    You can easily rollback changes

### Observability (Principle 7)

-    You can see what AI is doing
-    You understand AI's rationale for changes
-    You review activity logs when debugging
-    AI provides progress updates

### Your Project Health Score

Count how many principles you're actively applying (1 point per principle with at least 2 checkboxes marked):

Score

Level

What It Means

**0-2**

🤠 Cowboy Coder

High risk. You're flying blind. Start with Principles 3 (Verification) and 7 (Observability).

**3-4**

🤝 Collaborator

Good progress. You're working WITH the AI, not just using it. Focus on the gaps.

**5-6**

🏗️ Agent Architect

Professional grade. You're managing AI effectively. Fine-tune for efficiency.

**7**

🎯 Master Director

Full integration. You've internalized the principles. Now optimize and teach others.

**Where to start if you're at 0-2**: Begin with just two principles—Verification (always test) and Observability (always see what AI did). These two alone prevent most disasters.

## Why This Integration Matters

The principles are powerful individually. Together, they're transformative:

-   **Terminal + Code + Verification**: AI can investigate, implement, and test autonomously
-   **Decomposition + Safety + Observability**: Small, safe, visible steps
-   **State Persistence**: Context accumulates across sessions

When you apply all principles together, you move from "using AI" to "collaborating with an intelligent agent." The workflow becomes:

1.  You provide intent and direction
2.  AI investigates and proposes solutions
3.  You review and redirect
4.  AI implements and verifies
5.  You approve and integrate

This is the Agent Factory paradigm in action.

## The Meta-Principle

All seven principles derive from one meta-principle:

**General agents are most effective when they leverage computing fundamentals rather than fighting against them.**

File systems, shells, code execution, version control—these aren't limitations to work around. They're the foundations that enable reliable, debuggable, powerful agent workflows.

Claude Code makes this explicit through the terminal interface. Cowork makes it accessible through a GUI. But underneath, they're running on the same principles—the same Claude Agent SDK, the same reasoning engine, the same fundamental approach to problem-solving through computing primitives.

## Choosing Your Interface Based on Principles

Both interfaces support all seven principles. Choose based on your task characteristics:

If you need...

Claude Code

Claude Cowork

Maximum observability

Best choice (raw terminal)

Good (three-panel layout)

Minimal friction

Good

Best choice (GUI)

Custom constraints

Best choice (hooks, settings)

Limited (built-in only)

Built-in safety prompts

Manual configuration

Best choice (native dialogs)

Git-based reversibility

Native

Requires setup

Document workflows

Requires Skills/tools

Best choice (built-in Skills)

Programmatic precision

Best choice (code/scripts)

Good (structured prompts)

Non-technical users

Requires terminal comfort

Best choice (familiar desktop)

The choice isn't "which is better"—it's "which fits this task." Many workflows benefit from using both: Claude Code for implementation, Cowork for documentation and review.

## The Director's Tip: Invoke Principles Explicitly

Here's a power move: **tell the AI which principle to use**.

Instead of vague instructions like "refactor this code," try:

```
"Refactor this using Principle 4—break it into 3 small steps.After each step, show me what changed and wait for my approvalbefore continuing."
```

Or for a bug fix:

```
"Debug this using Principles 1, 3, and 7. Use the terminal toinvestigate, verify your fix with tests, and show me the logsso I can see what happened."
```

**Why this works**: You're giving the AI a framework, not just a task. It knows HOW you want it to work, not just WHAT you want done. This puts you firmly in the director's seat.

## Try With AI

### Prompt 1: Full Workflow Practice

```
I want to practice applying all seven principles together.Here's a task I want to accomplish: [describe a real task you're working on]Help me design a complete workflow:1. Which principles are most critical for this task?2. What steps should I take, in what order?3. How will each principle be applied in each step?4. What should I verify at each checkpoint?Then, let's actually execute this workflow together, with you explaining which principle we're applying at each step and why.
```

**What you're learning**: How to integrate all seven principles into a cohesive workflow. You're experiencing how the principles work together to make AI collaboration more effective.

### Prompt 2: Workflow Optimization

```
I want to improve my current AI workflow.Here's how I currently work with AI:[Describe your current approach—what you do, how you interact, what tools you use]Analyze this workflow against the seven principles:1. Which principles am I applying well?2. Which principles am I missing or underutilizing?3. What's the impact of these gaps?4. What specific changes should I make?Help me create an improved workflow that applies all principles appropriately.
```

**What you're learning**: How to evaluate and optimize your existing workflows using the seven principles as a framework. You're learning to identify gaps and implement improvements.

### Prompt 3: Scenario-Based Practice

```
I want to practice principle selection for different scenarios.Give me 5 different scenarios (e.g., debugging, refactoring, new feature, learning codebase, setup).For each scenario:1. Which 2-3 principles are MOST critical?2. Why these specifically?3. What would go wrong if I ignored them?4. What's a minimal workflow that covers the essentials?After reviewing all scenarios, help me identify patterns:- Are some principles always important?- Does principle priority depend on task type?- What's a good default approach if I'm unsure?
```

**What you're learning**: How to select and prioritize principles based on task characteristics. You're developing judgment about which principles matter most in different contexts.

* * *

## Next Steps

These seven principles form the foundation for effective problem-solving with General Agents. In Part 2 and beyond, you'll apply these principles to increasingly sophisticated workflows:

-   **Complex file processing** (Principles 1, 4, 5)
-   **Data analysis and reporting** (Principles 2, 3, 7)
-   **Multi-step research projects** (Principles 4, 5, 6)
-   **Automated document generation** (Principles 2, 3, 4)
-   **Browser-based automation** (Principles 3, 6, 7)
-   **Building Custom Agents** (All principles at scale)

Each workflow will demonstrate how the principles combine in practice, using whichever interface—Claude Code or Cowork—best fits the task. The principles don't change; only their application deepens.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Principles Exercises

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/09-principles-exercises.md)

# Principles Exercises: Practice the Seven Principles

You've read about the Seven Principles. You understand why bash verification matters, why code beats prose, why verification catches bugs before they reach production. But understanding principles and applying principles are different skills entirely. The gap between knowing the theory and having the muscle memory is where most people stall — they can explain what "small, reversible decomposition" means but still make monolithic commits when the pressure is on.

These 17 exercises close that gap. Each module targets one principle with two exercises: a **guided** exercise where you know which principle to apply, and a **discovery** exercise where you diagnose what went wrong. Three skills run through every exercise: **principle recognition** (identifying which principle fits a scenario), **principle application** (using a principle to solve a concrete problem), and **workflow diagnosis** (spotting which principle was violated when something breaks). By the end, you won't need to think about which principle fits — you'll recognize the pattern instantly.

Download Exercise Files

**[Download Principles Exercises (ZIP)](https://github.com/panaversity/claude-code-principles-exercises/releases/latest/download/principles-exercises.zip)**

After downloading, unzip the file. Each exercise has its own folder with an `INSTRUCTIONS.md` and any starter files you need.

If the download link doesn't work, visit the [repository releases page](https://github.com/panaversity/claude-code-principles-exercises/releases) directly.

* * *

## How to Use These Exercises

The workflow for every exercise is the same:

1.  **Open the exercise folder** from the `claude-code-principles-exercises/` directory
2.  **Read the INSTRUCTIONS.md** inside the folder — it has setup steps and starter files
3.  **Read the walkthrough below** for context on what you're practicing and why
4.  **Start Claude Code or Cowork** and point it at the exercise folder
5.  **Work through the exercise** — write your own prompts, don't just copy the starter
6.  **Reflect** using the questions provided — this is where the real learning happens

You don't need to complete all 17 in one sitting. Work through one module at a time. Each module targets a different principle.

* * *

## Tool Guide

-   Claude Code — Terminal-based, best for exercises involving bash commands, file verification, and multi-step workflows
-   Cowork — Desktop app, best for exercises involving document review and prompt design

Most exercises work with either tool. Where one is clearly better, the exercise notes will say so.

* * *

## The Principle Application Framework

Use this for every exercise:

1.  **Identify** — Which principle applies to this scenario?
2.  **Diagnose** — What failure does this principle prevent?
3.  **Plan** — How will you apply this principle here?
4.  **Execute** — Apply the principle with Claude Code or Cowork
5.  **Verify** — Did it work? What changed compared to the no-principle approach?
6.  **Compare** — What would have happened WITHOUT the principle?
7.  **Generalize** — When else does this principle apply in your work?

This framework mirrors how professionals internalize any methodology: identify the pattern, apply it deliberately, then reflect on the result. Over time, the framework becomes invisible — you just do it.

* * *

## Assessment Rubric

For each exercise, evaluate yourself on:

Criteria

Beginner (1)

Developing (2)

Proficient (3)

Advanced (4)

**Principle Recognition**

Can't identify which principle applies

Identifies principle when told the category

Correctly identifies principle from scenario clues

Spots violations before they cause problems

**Application Quality**

Applies principle mechanically

Applies with some adaptation to context

Adapts principle fluently to novel scenarios

Combines multiple principles proactively

**Diagnosis Depth**

Describes symptoms only

Identifies the violated principle

Explains root cause and prevention

Proposes systematic checks to prevent class of failures

**Prompt Specificity**

Vague, principle-unaware prompts

Mentions principle but not HOW to apply it

Prompts encode principle as concrete constraint

Prompts teach Claude the principle for future use

**Reflection Quality**

No reflection or generic answers

Notes what worked/didn't

Connects exercise to other scenarios

Identifies personal workflow gaps and commits to changes

* * *

## Module 1: Bash is the Key

> **Core Skill:** Using terminal commands to verify state before making changes

### Exercise 1.1 — Verify Before You Modify (Guided)

**The Problem:** Open the `module-1-bash-is-the-key/exercise-1.1-server-detective/` folder. You'll find a project directory with a `README.md` describing a small website, several source files, and a config that controls the build. Someone wants to "update the styling" but hasn't told you which files handle styles or what build system is in use.

**Your Task:** Before asking Claude to change anything, use bash commands to map the project: what files exist, what the build system is, where styles live, what the current output looks like. Then — and only then — write a prompt that gives Claude the context it needs to make the right change.

**What You'll Learn:**

-   Why exploring with bash before modifying prevents wrong assumptions
-   How `ls`, `cat`, `grep`, and `find` give you ground truth that natural language descriptions miss
-   That the 30 seconds you spend verifying state saves 10 minutes of correction loops

**Starter Prompt (Intentionally Vague):**

> "Update the styling on this website to look more modern."

**Better Prompt (Build Toward This):** After running `ls -la`, `cat package.json`, and `grep -r "styles" .`, try: "The project uses \[build system\] with styles in \[path\]. Update \[specific file\] to use a sans-serif font stack and increase body padding to 2rem. Don't touch \[other files\]. Run `npm run build` after changes and verify the output."

**Reflection Questions:**

1.  How many assumptions did the vague prompt force Claude to make? How many did your bash exploration eliminate?
2.  Which bash command gave you the most useful information before writing your prompt?
3.  Could you apply this "explore first" pattern to a project you're working on right now?

* * *

### Exercise 1.2 — The Blind Refactor (Discovery)

**The Problem:** Open the `module-1-bash-is-the-key/exercise-1.2-deploy-disaster/` folder. You'll find a `session-log.md` describing what happened when someone asked Claude to "refactor the API routes into separate files" without first checking the project structure. Claude assumed an Express.js setup, but the project uses Hono. It created files in the wrong directory, imported non-existent modules, and broke the working server.

**Your Task:** Read the session log. Identify every point where a single bash command would have prevented the mistake. Write the specific commands that should have been run and when. Then write the prompt that should have been used instead.

**What You'll Learn:**

-   How skipping bash verification leads to cascading wrong assumptions
-   That Claude's guesses about project structure are often reasonable but wrong
-   The specific bash commands that prevent the most common "blind modification" failures

**Reflection Questions:**

1.  How many of Claude's mistakes traced back to a single unchecked assumption about the framework?
2.  What's the minimum set of bash commands you'd run before any refactoring task?
3.  If you were writing a CLAUDE.md rule to prevent this class of failure, what would it say?

* * *

## Module 2: Code as Universal Interface

> **Core Skill:** Expressing requirements as structured specifications rather than natural language

### Exercise 2.1 — Spec vs. Prose (Guided)

**The Problem:** Open the `module-2-code-as-interface/exercise-2.1-report-spec/` folder. You'll find `requirements.md` — a natural-language description of a data validation function. It says things like "make sure emails are valid," "names shouldn't be too long," and "ages need to make sense." Every phrase is ambiguous.

**Your Task:** Write the requirements as code — a test file or type definition that specifies exactly what "valid email" means, exactly how long is "too long," and exactly what age range "makes sense." Give Claude both versions (prose and code) and compare the implementations.

**What You'll Learn:**

-   Why "valid email" means different things to different people (and different AIs)
-   How a test file eliminates interpretation by defining exact inputs and expected outputs
-   That writing the spec as code takes 5 minutes but prevents 30 minutes of "that's not what I meant"

**Starter Prompt (Intentionally Vague):**

> "Write a validation function based on these requirements."

**Better Prompt (Build Toward This):** After writing your test file: "Implement a validation function that passes all tests in `validation.test.ts`. Don't modify the tests. If any requirement is ambiguous, follow the test expectations exactly."

**Reflection Questions:**

1.  How many ambiguities did you find in the prose requirements? How many survived in your code spec?
2.  Did Claude's implementation from the code spec match your expectations more closely than from the prose?
3.  When would you choose prose requirements over code specs? Is there ever a good reason?

* * *

### Exercise 2.2 — The Interpretation Gap (Discovery)

**The Problem:** Open the `module-2-code-as-interface/exercise-2.2-lost-in-translation/` folder. You'll find two files: `prompt.md` (a natural-language request to "build a dashboard showing user activity") and `output-a.md` plus `output-b.md` — two completely different implementations Claude produced from the same prompt on different runs. One shows a table of login timestamps. The other shows a chart of feature usage frequency. Both are reasonable interpretations.

**Your Task:** Analyze why the same prompt produced two different outputs. Identify every ambiguous word in the prompt. Then write a code specification (interface definition, mock data structure, or test) that would force both runs to produce the same result.

**What You'll Learn:**

-   That natural language doesn't just allow multiple interpretations — it guarantees them
-   How to spot ambiguity by comparing divergent outputs from the same input
-   The specific techniques (interfaces, test cases, mock data) that eliminate interpretation variance

**Reflection Questions:**

1.  How many ambiguous terms did you find in the original prompt?
2.  Does your code specification leave any room for interpretation? Could you make it even tighter?
3.  What's the cost of ambiguity — how much time would the "wrong" implementation waste in a real project?

* * *

## Module 3: Verification as Core Step

> **Core Skill:** Systematically verifying output rather than trusting "looks right"

### Exercise 3.1 — Trust But Verify (Guided)

**The Problem:** Open the `module-3-verification/exercise-3.1-data-audit/` folder. You'll find customer data files and transformation claims describing what was supposedly done to clean and restructure the data. Your job isn't to perform the transformation — it's to verify whether the claimed output is actually correct.

**Your Task:** After Claude produces the transformed data, verify it using bash commands — don't just scan it visually. Check row counts (`wc -l`), spot-check specific values (`grep`, `awk`), verify no data was lost, and confirm the format matches the spec. Find at least one error that visual inspection would miss.

**What You'll Learn:**

-   That "looks right" and "is right" are different things, especially with data transformations
-   Specific bash verification commands for common data operations
-   How to build a verification checklist that catches errors before they propagate

**Starter Prompt (Intentionally Vague):**

> "Clean up this CSV data according to the spec."

**Better Prompt (Build Toward This):** After the transformation: "Now verify the output: confirm the row count matches input (100 rows), check that all email addresses match the normalized format, verify no NULL values in required fields, and compare 5 random rows against the original to confirm accuracy."

**Reflection Questions:**

1.  What error did you find that visual inspection missed? How did you catch it?
2.  Which verification command was most useful? Would you add it to a personal checklist?
3.  How long did verification take compared to the transformation itself? Was it worth it?

* * *

### Exercise 3.2 — The "Looks Done" Trap (Discovery)

**The Problem:** Open the `module-3-verification/exercise-3.2-silent-corruption/` folder. You'll find `completed-work.md` — a session log where someone asked Claude to build a simple REST API with 4 endpoints. Claude reported "Done! All endpoints implemented and working." The log shows Claude writing code and declaring success. But the `project/` subfolder contains the actual code, and there are 3 bugs hiding in plain sight.

**Your Task:** Find all 3 bugs. For each one, explain what verification step would have caught it (e.g., "running `curl localhost:3000/users` would have returned a 500 error" or "running the test suite would have shown a failing assertion"). Then write the verification protocol that should follow every "Done!" declaration.

**What You'll Learn:**

-   That "done" without verification is just a claim, not a fact
-   The specific verification steps that catch the most common "looks done" failures
-   How to build a personal "definition of done" checklist that goes beyond "it compiled"

**Reflection Questions:**

1.  Which bug was hardest to find? Would automated tests have caught it?
2.  Why did Claude declare "done" when bugs existed? What does this tell you about trusting self-reported completion?
3.  What's your "definition of done" for your own work? Does it include verification steps?

* * *

## Module 4: Small, Reversible Decomposition

> **Core Skill:** Breaking complex changes into atomic, verifiable, reversible steps

### Exercise 4.1 — Atomic Commits (Guided)

**The Problem:** Open the `module-4-decomposition/exercise-4.1-migration-steps/` folder. You'll find a project that needs 5 changes: rename a database table, update the ORM model, update 3 API endpoints that reference the old name, update the tests, and update the documentation. Someone's instinct is to make all 5 changes in one commit.

**Your Task:** Decompose this into 5 separate commits, each atomic and independently verifiable. For each commit, write: what changes, how to verify it works, and how to revert if it doesn't. Then execute the first 2 commits with Claude, verifying after each one.

**What You'll Learn:**

-   Why atomic commits make bugs isolatable (git bisect needs small commits to work)
-   How to sequence dependent changes so each step leaves the system in a working state
-   That the discipline of small commits forces you to think about ordering and dependencies

**Starter Prompt (Intentionally Vague):**

> "Rename the users table to accounts and update everything that references it."

**Better Prompt (Build Toward This):** "We need to rename the `users` table to `accounts`. Break this into atomic steps. Step 1: Add a migration that renames the table. Verify with `npm run migrate && npm test`. Commit only if tests pass. Step 2: Update the ORM model. Verify the same way. Continue one step at a time — don't batch changes."

**Reflection Questions:**

1.  What ordering did you choose for the 5 commits? Could you have sequenced them differently?
2.  Did any commit leave the system in a broken state? How would you fix the sequencing?
3.  If commit 3 introduced a bug, how would atomic commits help you find it compared to one big commit?

* * *

### Exercise 4.2 — The Big-Bang Commit (Discovery)

**The Problem:** Open the `module-4-decomposition/exercise-4.2-big-bang-failure/` folder. You'll find `commit-diff.md` — a single massive commit that touched 14 files across 3 different concerns: a feature addition, a bug fix, and a style update. After deployment, users reported a regression. The team can't figure out which of the 14 file changes caused it because everything is tangled in one commit.

**Your Task:** Analyze the diff and untangle it. Identify which changes belong to the feature, which to the bug fix, and which to the style update. Propose a decomposition into 3+ atomic commits that would have made the regression isolatable. Explain how `git bisect` would have found the bug if the work had been decomposed.

**What You'll Learn:**

-   How tangled commits make debugging exponentially harder
-   The technique of retroactively decomposing a monolithic change
-   Why "I'll commit everything at the end" is a false efficiency — it trades 5 minutes of discipline for hours of debugging

**Reflection Questions:**

1.  How long did it take to untangle the diff? How long would it have taken to write 3 separate commits originally?
2.  Which of the 3 concerns (feature, fix, style) caused the regression? How did you determine this?
3.  What rule would you add to your workflow to prevent big-bang commits?

* * *

## Module 5: Persisting State in Files

> **Core Skill:** Creating persistent artifacts that survive session boundaries

### Exercise 5.1 — Build a CLAUDE.md (Guided)

**The Problem:** Open the `module-5-persisting-state/exercise-5.1-decision-journal/` folder. You'll find multiple session transcripts from the same project plus a project-files directory. The earlier sessions establish conventions and make architectural decisions. The later sessions start from scratch and violate those conventions because the context was lost between sessions.

**Your Task:** Read both transcripts. Extract every convention, decision, and project pattern from Session 1. Write a `CLAUDE.md` that would have prevented Session 2's violations. Include: project structure, coding conventions, workflow rules, and any architectural decisions.

**What You'll Learn:**

-   How to identify implicit knowledge that needs to be made explicit in context files
-   The structure of an effective CLAUDE.md (conventions, decisions, workflows)
-   That 15 minutes documenting context saves hours of re-establishing it across sessions

**Starter Prompt:**

> "Read these two session transcripts. Extract every convention from Session 1 that Session 2 violated. Create a CLAUDE.md that persists this knowledge so no future session repeats these mistakes."

**Reflection Questions:**

1.  How many conventions from Session 1 did Session 2 violate? How many would your CLAUDE.md prevent?
2.  Did you find implicit conventions that neither session stated explicitly but both assumed?
3.  How would you test whether your CLAUDE.md actually works? What would you check in Session 3?

* * *

### Exercise 5.2 — The Groundhog Day Sessions (Discovery)

**The Problem:** Open the `module-5-persisting-state/exercise-5.2-groundhog-day/` folder. You'll find three session transcripts from the same project, spaced weeks apart. Sessions 2 and 3 repeat Session 1's mistakes almost exactly: re-discovering the same bugs, re-establishing the same patterns, making the same wrong assumptions before correcting them. The developer wasted 40+ minutes across sessions relearning what they already knew.

**Your Task:** Map the repeated work: which discoveries in Session 2 were already made in Session 1? For each repeated discovery, write the specific file artifact (CLAUDE.md entry, ADR, or session journal) that would have carried the knowledge forward. Explain why each artifact type is the right choice for that piece of knowledge.

**What You'll Learn:**

-   The real cost of not persisting state: measured in wasted minutes and repeated mistakes
-   How to choose between CLAUDE.md (conventions), ADRs (decisions), and session journals (context)
-   That different types of knowledge require different persistence strategies

**Reflection Questions:**

1.  How many minutes of Session 2 were wasted re-discovering Session 1 knowledge?
2.  Which artifact type (CLAUDE.md, ADR, journal) would have prevented the most repeated work?
3.  What's the minimum set of artifacts you'd create after every session to prevent Groundhog Day?

* * *

## Module 6: Constraints and Safety

> **Core Skill:** Setting boundaries that enable safe autonomy

### Exercise 6.1 — Write Permission Guardrails (Guided)

**The Problem:** Open the `module-6-constraints-safety/exercise-6.1-sandbox-setup/` folder. You'll find `project-description.md` — a project with sensitive files (`.env` with API keys, `database/production.sql` with real data, `deploy/` with production deployment scripts). You want Claude to help with development but need to ensure it never reads, modifies, or deletes anything sensitive.

**Your Task:** Write a complete set of permission constraints: which files/directories Claude can freely access, which require confirmation, and which are completely off-limits. Then write a CLAUDE.md section that encodes these constraints, and test by asking Claude to do something that should be blocked.

**What You'll Learn:**

-   How to design permission boundaries that are specific enough to be useful but broad enough to not block work
-   The three permission tiers (auto-approve, confirm, deny) and when each is appropriate
-   That well-designed constraints actually speed up work by eliminating the "is this safe?" hesitation

**Starter Prompt:**

> "Help me develop this project. Here's the codebase. I'll tell you what to do."

**Better Prompt (Build Toward This):** "Help me develop this project. CONSTRAINTS: Never read or modify files in `.env`, `database/`, or `deploy/`. Auto-approve reads in `src/` and `tests/`. Require my confirmation for any file writes. If you need information from a restricted file, ask me and I'll provide the specific value."

**Reflection Questions:**

1.  Were your constraints too restrictive (blocked legitimate work) or too permissive (allowed risky access)?
2.  How did Claude behave when it hit a constraint boundary? Did it ask for help or try to work around it?
3.  Would these constraints work for a teammate using the same project? Are they clear enough?

* * *

### Exercise 6.2 — The Unconstrained Agent (Discovery)

**The Problem:** Open the `module-6-constraints-safety/exercise-6.2-runaway-agent/` folder. You'll find `incident-report.md` — a post-mortem of an incident where an AI agent was given broad permissions on a project and caused damage: it deleted a cache directory that turned out to contain unversioned work, modified a config file that broke the CI pipeline, and made an API call to a production service during testing.

**Your Task:** Read the incident report. For each damaging action, write the specific constraint that would have prevented it. Then design a complete permission model for this project that balances productivity with safety. Your model should cover: file access, command execution, external service access, and destructive operations.

**What You'll Learn:**

-   That unconstrained agents will eventually do something destructive, even with good intentions
-   How to design layered permission models (read/write/execute/network)
-   The principle that constraints enable autonomy: a well-constrained agent can be trusted with more independence

**Reflection Questions:**

1.  Which of the three incidents was most preventable? Which would have been hardest to anticipate?
2.  Does your permission model allow Claude to do productive work, or did safety concerns make it too restrictive?
3.  How would you explain to a skeptic that constraints make agents MORE useful, not less?

* * *

## Module 7: Observability

> **Core Skill:** Making Claude's work visible and debuggable

### Exercise 7.1 — Add Progress Reporting (Guided)

**The Problem:** Open the `module-7-observability/exercise-7.1-progress-tracker/` folder. You'll find `multi-step-task.md` — a task that requires Claude to perform 6 sequential steps (read files, analyze data, generate report, create charts, compile output, run verification). Without progress reporting, you'd see nothing until Claude declares "Done!" after several minutes.

**Your Task:** Rewrite the task prompt to require explicit progress reporting: Claude must announce each step before starting it, report what it found/produced, and summarize what's next. Execute the task with and without progress reporting and compare the experience.

**What You'll Learn:**

-   How progress reporting transforms "black box" AI work into transparent collaboration
-   The specific prompt patterns that produce useful progress reports (not just "Step 3 done")
-   That observability isn't overhead — it's how you catch problems before they compound

**Starter Prompt:**

> "Analyze the data in this folder, generate a report, and create visualizations."

**Better Prompt (Build Toward This):** "Analyze the data in this folder. For each step: (1) state what you're about to do, (2) do it, (3) report what you found or produced, (4) state what's next. Steps: read all CSVs, identify data quality issues, compute summary statistics, generate the report, create 3 charts, run a consistency check on the final output. If any step produces unexpected results, stop and tell me before continuing."

**Reflection Questions:**

1.  Did progress reporting help you catch any issues mid-task that you would have missed in the final output?
2.  How much longer did the observable version take compared to the black-box version? Was the tradeoff worth it?
3.  What's the right level of reporting detail — every line, every step, or every phase?

* * *

### Exercise 7.2 — The Opaque Session (Discovery)

**The Problem:** Open the `module-7-observability/exercise-7.2-black-box-debug/` folder. You'll find `activity-log.md` — an activity log from a Claude session where something went wrong. The developer asked Claude to "set up the testing framework," and 10 minutes later the project was in a broken state. The log shows file reads, writes, and command executions, but no explanation of reasoning or progress updates.

**Your Task:** Reconstruct what happened from the activity log alone. Identify the exact point where things went wrong. Then write the observability rules (progress reporting format, checkpoint requirements) that would have made the failure obvious in real time instead of requiring forensic analysis after the fact.

**What You'll Learn:**

-   How to read activity logs forensically and trace failures back to root causes
-   The difference between logging (what happened) and observability (why it happened)
-   That adding reasoning to progress reports ("I'm doing X because Y") makes debugging 10x faster

**Reflection Questions:**

1.  At what point in the activity log did things go wrong? How long did it take you to find it?
2.  What information was missing from the log that would have made the failure immediately obvious?
3.  How would you structure progress reporting rules to make future sessions debuggable?

* * *

## Module 8: Integration Capstones

> **Choose one (or more). These combine multiple principles — no starter prompts provided.**

Capstones are different from the exercises above. There are no guided prompts — you design the entire approach yourself. Each project requires applying 3 or more principles together to solve a realistic problem.

### Capstone A — Project Rescue

Open the `module-8-integration/capstone-A-project-rescue/` folder. You'll find a broken project: tests are failing, the build is broken, the CLAUDE.md is out of date, there's no verification step in the workflow, and the last 3 commits are tangled messes. Your job is to rescue it.

Diagnose which principles were violated (there are at least 4). Fix the project by systematically applying the right principle to each problem: verify state with bash, decompose the fix into atomic steps, update CLAUDE.md with what you learn, add constraints to prevent recurrence, and document what you did.

**What You'll Learn:**

-   How to diagnose multiple principle violations in a real project
-   That rescue operations require a specific order: verify state first, then fix, then prevent
-   How the principles reinforce each other — fixing one often reveals violations of another

* * *

### Capstone B — Workflow Design

You've been hired to set up a new project for a small team. Open the `module-8-integration/capstone-B-workflow-design/` folder for the project brief. Your job is to design a complete AI-assisted development workflow from scratch.

Create a CLAUDE.md that encodes all 7 principles as project rules. Design a permission model. Write a verification checklist. Define commit conventions. Create a template for progress reporting. The deliverable is a complete "project starter kit" that a new team member could follow on day one.

**What You'll Learn:**

-   How to translate abstract principles into concrete project rules and artifacts
-   That designing a workflow requires thinking about all 7 principles simultaneously
-   The difference between principles you understand and principles you can operationalize

* * *

### Capstone C — Your Own Project

Pick a real project you're working on — personal, professional, or educational. Open the `module-8-integration/capstone-C-your-scenario/` folder for a self-assessment template.

Audit your current workflow against all 7 principles. For each principle: rate yourself (1-4 using the rubric above), identify the biggest gap, and write one concrete change you'll make. Then implement the top 3 changes and run a real task using your improved workflow.

**What Makes This Special:** Unlike Capstones A and B, this one has real stakes. The changes you make apply to YOUR actual work. The 7-principles assessment often reveals that you've mastered some principles intuitively but completely neglect others.

**What You'll Learn:**

-   Which principles you've naturally adopted and which you've been ignoring
-   That principles have different ROI depending on your work context
-   How to build a personal improvement plan based on principle gaps

* * *

## What's Next

You've practiced the three core skills — **principle recognition**, **principle application**, and **workflow diagnosis** — across 17 exercises. These skills compound: every exercise builds intuition for recognizing when a principle applies and what happens when it's ignored. The Seven Principles aren't just concepts to remember for a quiz — they're habits that make every AI session more productive, predictable, and debuggable. Next in **Lesson 10: Chapter Quiz**, you'll test your conceptual understanding of all seven principles and their interactions. The quiz focuses on scenario-based reasoning — exactly the kind of diagnosis you practiced in the discovery exercises.

Checking access...

---

-   [](/)
-   [Part 1: General Agents: Foundations](/docs/General-Agents-Foundations)
-   [Chapter 6: The Seven Principles of General Agent Problem Solving](/docs/General-Agents-Foundations/seven-principles)
-   Chapter 6: The Seven Principles Quiz

Updated Feb 12, 2026

[Version history](https://github.com/panaversity/ai-native-software-development/commits/main/apps/learn-app/docs/01-General-Agents-Foundations/06-seven-principles/10-chapter-quiz.md)

# Chapter 6: The Seven Principles of General Agent Problem Solving Quiz

Test your understanding of the seven principles that make agentic AI workflows effective: bash as universal interface, code as universal interface, verification as core step, small reversible decomposition, persisting state in files, constraints and safety, and observability.

Checking access...

## Answer Key

Question

Correct Answer

Principle Tested

1

B

Principle 1: Bash is the Key

2

B

Principle 1: Bash is the Key

3

D

Principle 1: Bash is the Key

4

B

Principle 2: Code as Universal Interface

5

B

Principle 2: Code as Universal Interface

6

C

Principle 2: Code as Universal Interface

7

B

Principle 3: Verification as Core Step

8

B

Principle 3: Verification as Core Step

9

B

Principle 3: Verification as Core Step

10

B

Principle 4: Small, Reversible Decomposition

11

B

Principle 4: Small, Reversible Decomposition

12

B

Principle 4: Small, Reversible Decomposition

13

B

Principle 5: Persisting State in Files

14

C

Principle 5: Persisting State in Files

15

B

Principle 5: Persisting State in Files

16

B

Principle 6: Constraints and Safety

17

B

Principle 6: Constraints and Safety

18

C

Principle 6: Constraints and Safety

19

C

Principle 7: Observability

20

B

Principle 7: Observability

21

C

Principle 8: Putting It All Together

22

B

Principle 8: Putting It All Together

23

B

Principle 8: Putting It All Together

24

B

Principles 3 & 5: Verification + State Persistence

25

B

Principle 4: Small, Reversible Decomposition

26

B

Principle 5: Persisting State in Files

27

C

Principles 6 & 7: Constraints/Safety + Observability

28

B

Principle 2: Code as Universal Interface

29

B

Principle 6: Constraints and Safety

30

B

Principle 5 + Context Engineering

## Scoring Guide

Score

Proficiency Level

Interpretation

27-30

B2 (Advanced)

Strong understanding of all seven principles and how they integrate

22-26

B1 (Intermediate)

Good understanding with some gaps in integration

17-21

A2 (Elementary)

Basic understanding of principles but needs more practice

0-16

A1 (Beginner)

Review the lessons and try the "Try With AI" exercises

## Next Steps

Based on your performance, focus on:

-   **Principles 1-3 (Foundation)**: If you missed questions 1-9, review the fundamental lessons on bash access, code as interface, and verification
-   **Principles 4-5 (Workflow)**: If you missed questions 10-15 or 24-26, focus on decomposition and state persistence patterns
-   **Principles 6-7 (Safety & Observability)**: If you missed questions 16-20, 27, or 29, study safety models and observability practices
-   **Integration & Tradeoffs**: If you missed questions 21-23 or 24-30, practice applying multiple principles together and reasoning about principle interactions

Remember: The principles are most powerful when applied together. The scenario-based questions (24-30) test your ability to diagnose which principles apply to real-world situations—this judgment is what separates practitioners from beginners.

---

Source: https://agentfactory.panaversity.org/docs/01-General-Agents-Foundations/06-seven-principles
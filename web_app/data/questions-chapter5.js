/* ============================================
   CHAPTER 5: SPEC-DRIVEN DEVELOPMENT
   Questions Database
   ============================================ */

window.QUIZ_DATA_CHAPTER5 = {
  "version": "1.0",
  "title": "Chapter 5: Spec-Driven Development",
  "chapterId": "chapter5",
  "source": "Agent Factory Book - General Agents Foundations",
  "totalQuestions": 86,
  "questions": [
    {
      "id": 1,
      "question": "What is vibe coding according to the chapter?",
      "options": [
        "Writing code for music",
        "Refining work through conversation with AI without explicit specifications",
        "Professional coding",
        "Structured development"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Vibe Coding",
      "pageReference": "121",
      "explanation": "Vibe coding follows the pattern: Prompt → Output → 'No, I meant...' → Output → 'Actually...' → Output → Repeat. Each iteration seems like progress but corrosive problems accumulate.",
      "explanationUrdu": ""
    },
    {
      "id": 2,
      "question": "What is the fundamental problem with vibe coding?",
      "options": [
        "It's too fast",
        "The workflow is corrosive - each new request shifts focus, causing previous requirements to fade from attention",
        "It's too slow",
        "No problems exist"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Vibe Coding Problems",
      "pageReference": "122",
      "explanation": "The failure is structural: each new request shifts focus, and previous nuances fade. Not because information is forgotten, but because newer information gets more weight.",
      "explanationUrdu": ""
    },
    {
      "id": 3,
      "question": "What is context loss in vibe coding?",
      "options": [
        "Information is deleted",
        "Previous decisions become background noise; each turn loses earlier discoveries",
        "All context is kept",
        "No context loss occurs"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Failure Modes",
      "pageReference": "123",
      "explanation": "Context loss occurs when each new request shifts focus. The nuances from earlier turns - specific tools, technical depth, structure - fade from attention even though they're technically still present.",
      "explanationUrdu": ""
    },
    {
      "id": 4,
      "question": "What is assumption drift in vibe coding?",
      "options": [
        "AI assumptions are always correct",
        "Reasonable default assumptions compound over turns, diverging from actual intent",
        "No assumptions are made",
        "All assumptions are bad"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Failure Modes",
      "pageReference": "123",
      "explanation": "Without explicit constraints, AI fills gaps with reasonable defaults. By Turn 10, you're editing a document written for an audience you don't have.",
      "explanationUrdu": ""
    },
    {
      "id": 5,
      "question": "What is Spec-Driven Development according to the chapter?",
      "options": [
        "Writing code manually",
        "Development guided by explicit, written specifications that precede implementation",
        "Random development",
        "Development without planning"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Spec-Driven Development",
      "pageReference": "125",
      "explanation": "Spec-Driven Development uses explicit specifications as the foundation. You write what you want, then AI builds it from specification rather than iteratively refining.",
      "explanationUrdu": ""
    },
    {
      "id": 6,
      "question": "What are the Three Levels of Spec-Driven Development?",
      "options": [
        "Beginner, intermediate, advanced",
        "Low, medium, high",
        "System specs, component specs, implementation specs",
        "Alpha, beta, release"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "SDD Levels",
      "pageReference": "125",
      "explanation": "The three levels are: system specifications (what the system does), component specifications (how it's structured), and implementation specifications (how each piece works).",
      "explanationUrdu": ""
    },
    {
      "id": 7,
      "question": "What is the first phase of the Four-Phase Workflow?",
      "options": [
        "Implementation",
        "Testing",
        "Parallel Research with Subagents",
        "Deployment"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "SDD Workflow",
      "pageReference": "126",
      "explanation": "Phase 1 is parallel research - gathering information to inform the specification before any code is written.",
      "explanationUrdu": ""
    },
    {
      "id": 8,
      "question": "What is the second phase of the Four-Phase Workflow?",
      "options": [
        "Testing",
        "Deployment",
        "Writing Effective Specifications",
        "Implementation"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "SDD Workflow",
      "pageReference": "126",
      "explanation": "Phase 2 is writing clear, specific specifications that define what will be built - before asking AI to build it.",
      "explanationUrdu": ""
    },
    {
      "id": 9,
      "question": "What is the third phase of the Four-Phase Workflow?",
      "options": [
        "Testing",
        "Refinement via Interview - clarifying and improving specifications through dialogue",
        "Deployment",
        "Research"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "SDD Workflow",
      "pageReference": "126",
      "explanation": "Phase 3 is refinement through interview - having AI ask clarifying questions and iterating the specification before implementation.",
      "explanationUrdu": ""
    },
    {
      "id": 10,
      "question": "What is the fourth phase of the Four-Phase Workflow?",
      "options": [
        "Research",
        "Writing specs",
        "Task-Based Implementation - building from agreed specification",
        "Deployment"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "SDD Workflow",
      "pageReference": "126",
      "explanation": "Phase 4 is task-based implementation - AI executes the specification step by step, implementing exactly what was specified.",
      "explanationUrdu": ""
    },
    {
      "id": 11,
      "question": "Why is specification writing more effective than vibe coding?",
      "options": [
        "It's the same",
        "Specs provide clear direction, preventing context loss and assumption drift",
        "Vibe coding is better",
        "Specs are unnecessary"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "SDD Benefits",
      "pageReference": "125",
      "explanation": "Specs establish explicit constraints upfront, preventing AI from filling gaps with assumptions. This eliminates the iterative refinement trap of vibe coding.",
      "explanationUrdu": ""
    },
    {
      "id": 12,
      "question": "What does parallel research in Phase 1 accomplish?",
      "options": [
        "Wasting time",
        "Gathering information that informs comprehensive specification before any implementation",
        "Delaying work",
        "Research is unnecessary"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Parallel Research",
      "pageReference": "127",
      "explanation": "Parallel research gathers context, best practices, and decision factors that inform the specification - preventing later discoveries that would require rework.",
      "explanationUrdu": ""
    },
    {
      "id": 13,
      "question": "What is the cost of unnecessary planning according to the chapter?",
      "options": [
        "Very expensive",
        "A few minutes",
        "Always wasteful",
        "Cannot be quantified"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Planning Value",
      "pageReference": "130",
      "explanation": "The cost of unnecessary planning is a few minutes. The cost of improvising a complex change is often an hour of cleanup or rework.",
      "explanationUrdu": ""
    },
    {
      "id": 14,
      "question": "What should specifications include according to the chapter?",
      "options": [
        "Only high-level goals",
        "Only implementation details",
        "Clear constraints, requirements, expected behavior, and context - everything needed to guide implementation",
        "Nothing specific"
      ],
      "correct": 2,
      "difficulty": "medium",
      "topic": "Specification Content",
      "pageReference": "128",
      "explanation": "Effective specifications define what success looks like, what constraints exist, what decisions have been made, and what remains open.",
      "explanationUrdu": ""
    },
    {
      "id": 15,
      "question": "How does refinement via interview improve specifications?",
      "options": [
        "It doesn't help",
        "AI asks clarifying questions, revealing gaps and ambiguities before implementation begins",
        "Interviews are unnecessary",
        "Questions confuse everything"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Refinement Process",
      "pageReference": "129",
      "explanation": "Phase 3 is when AI interviews you about the spec - asking clarifying questions that reveal gaps, contradictions, and ambiguities before implementation.",
      "explanationUrdu": ""
    },
    {
      "id": 16,
      "question": "What is a major advantage of course correction during planning?",
      "options": [
        "Course correction is expensive",
        "Course correction is cheap during planning, expensive during implementation",
        "No cost difference",
        "Cannot be corrected"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Planning Value",
      "pageReference": "127",
      "explanation": "Course correction during planning - before any code is written - costs almost nothing. After implementation starts, changes become exponentially more expensive.",
      "explanationUrdu": ""
    },
    {
      "id": 17,
      "question": "What does task-based implementation mean?",
      "options": [
        "Implementing multiple projects at once",
        "Breaking specifications into small, verifiable tasks that AI completes step-by-step",
        "Tasks are unnecessary",
        "One large task only"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Task-Based Implementation",
      "pageReference": "130",
      "explanation": "Task-based implementation breaks the specification into small, concrete tasks that AI completes one at a time, allowing verification and course-correction.",
      "explanationUrdu": ""
    },
    {
      "id": 18,
      "question": "When should you skip the planning phase?",
      "options": [
        "Always",
        "Never",
        "For simple tasks where the path is obvious and scope is tiny",
        "When in a hurry"
      ],
      "correct": 2,
      "difficulty": "medium",
      "topic": "Planning Rules",
      "pageReference": "131",
      "explanation": "Simple tasks (fix typo, add log statement, change config value) can skip planning. But if you're unsure whether to plan, you should plan.",
      "explanationUrdu": ""
    },
    {
      "id": 19,
      "question": "What is the relationship between vibe coding and context rot?",
      "options": [
        "No relationship",
        "Vibe coding creates context rot through accumulated turns and shifting focus",
        "Vibe coding prevents rot",
        "Context rot doesn't exist"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Root Cause Analysis",
      "pageReference": "122",
      "explanation": "Vibe coding systematically creates context rot: each turn shifts focus, previous requirements fade, errors accumulate, and quality degrades predictably.",
      "explanationUrdu": ""
    },
    {
      "id": 20,
      "question": "How does specification-driven approach solve the assumption drift problem?",
      "options": [
        "It doesn't solve it",
        "Explicit specifications eliminate gaps - AI can't fill gaps with assumptions when everything is specified",
        "Assumptions are inevitable",
        "Problems cannot be solved"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Problem Solving",
      "pageReference": "125",
      "explanation": "Assumptions only happen in gaps. Comprehensive specifications leave no gaps, so AI cannot diverge from intent through reasonable-but-wrong assumptions.",
      "explanationUrdu": ""
    },
    {
      "id": 21,
      "question": "What is the strategic value of clear specifications?",
      "options": [
        "No value",
        "Clear specifications are executable - they can guide AI implementation AND human understanding",
        "Value is limited",
        "Specs have no function"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Specification Value",
      "pageReference": "128",
      "explanation": "Specifications serve dual purpose: they guide AI implementation AND establish mutual understanding with humans about what will be built.",
      "explanationUrdu": ""
    },
    {
      "id": 22,
      "question": "How should specifications be structured for clarity?",
      "options": [
        "No structure needed",
        "Prose only",
        "Markdown hierarchy: sections, lists, examples, code blocks - making structure explicit",
        "No format matters"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Specification Structure",
      "pageReference": "128",
      "explanation": "Use Markdown structure to make specifications machine-readable and human-clear - sections for different concerns, lists for requirements, code blocks for examples.",
      "explanationUrdu": ""
    },
    {
      "id": 23,
      "question": "What does the chapter imply about the relationship between specification quality and implementation quality?",
      "options": [
        "No relationship",
        "Implementation quality directly correlates with specification quality",
        "Implementation always struggles",
        "Specs don't affect output"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Quality Correlation",
      "pageReference": "121",
      "explanation": "Clear specifications determine implementation quality. Vague specs produce mediocre results. Precise specs enable accurate implementation.",
      "explanationUrdu": ""
    },
    {
      "id": 24,
      "question": "How should developers think about specifications for AI?",
      "options": [
        "Specs are unnecessary for AI",
        "Specs are optional",
        "Specifications are executable instructions - they guide AI implementation as precisely as code",
        "Specs are only for humans"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Spec as Code",
      "pageReference": "128",
      "explanation": "Think of specifications as executable instructions for AI. Just as source code is executable for compilers, specifications are executable for AI agents.",
      "explanationUrdu": ""
    },
    {
      "id": 25,
      "question": "What is the relationship between SDD and reducing iteration cycles?",
      "options": [
        "No relationship",
        "SDD clarifies requirements upfront, reducing iteration cycles from 20+ turns to 1-2",
        "Iteration is always necessary",
        "SDD increases iterations"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Efficiency Gains",
      "pageReference": "122",
      "explanation": "Vibe coding example took 20+ turns to produce conflicting results. SDD approach: write spec → refine → build → done. Massive efficiency gain.",
      "explanationUrdu": ""
    },
    {
      "id": 26,
      "question": "How does Phase 1 (parallel research) prevent late-stage discoveries?",
      "options": [
        "It doesn't",
        "Research phase gathers context that would otherwise emerge mid-implementation as problems",
        "Discoveries are unavoidable",
        "Research wastes time"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Research Phase Value",
      "pageReference": "127",
      "explanation": "Parallel research uncovers constraints, best practices, and decision factors early - preventing the situation where mid-implementation discoveries require rework.",
      "explanationUrdu": ""
    },
    {
      "id": 27,
      "question": "What should Phase 3 (refinement) accomplish?",
      "options": [
        "Nothing important",
        "Catch specification gaps before implementation starts, when correction is cheap",
        "Refining is unnecessary",
        "Implementation should proceed without refinement"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Refinement Phase",
      "pageReference": "129",
      "explanation": "Phase 3 refinement catches gaps through AI interview questions. This is the last-line defense before implementation - when corrections are still cheap.",
      "explanationUrdu": ""
    },
    {
      "id": 28,
      "question": "How should task-based implementation handle verification?",
      "options": [
        "No verification needed",
        "Each task includes verification - testing, correctness checks, progress validation",
        "Verification only at end",
        "Verification is optional"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Implementation Verification",
      "pageReference": "130",
      "explanation": "Task-based implementation includes verification for each task. This allows catching and correcting issues immediately, preventing error accumulation.",
      "explanationUrdu": ""
    },
    {
      "id": 29,
      "question": "What is the psychological impact of committing to specifications early?",
      "options": [
        "No impact",
        "Committing to spec creates accountability and forces clarity of thinking",
        "Specs create pressure",
        "No psychological effects"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Psychological Factors",
      "pageReference": "128",
      "explanation": "Writing specifications forces clarity - you must articulate what you want. This thinking process often reveals gaps or conflicts you wouldn't have noticed otherwise.",
      "explanationUrdu": ""
    },
    {
      "id": 30,
      "question": "According to the chapter, what is the fundamental shift SDD enables?",
      "options": [
        "No shift",
        "From conversational refinement to specification-guided implementation",
        "Shift away from structure",
        "No change in workflow"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Paradigm Shift",
      "pageReference": "121",
      "explanation": "SDD represents a paradigm shift: from 'describe and refine' to 'specify and execute'. This fundamentally changes the developer's relationship with AI.",
      "explanationUrdu": ""
    }
  ]
};

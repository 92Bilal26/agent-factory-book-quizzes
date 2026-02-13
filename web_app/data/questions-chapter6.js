/* ============================================
   CHAPTER 6: SEVEN PRINCIPLES OF GENERAL AGENT PROBLEM SOLVING
   Questions Database
   ============================================ */

window.QUIZ_DATA_CHAPTER6 = {
  "version": "1.0",
  "title": "Chapter 6: Seven Principles of General Agent Problem Solving",
  "chapterId": "chapter6",
  "source": "Agent Factory Book - General Agents Foundations",
  "totalQuestions": 86,
  "questions": [
    {
      "id": 1,
      "question": "What is the purpose of operational best practices according to the chapter?",
      "options": [
        "Making work harder",
        "Preventing frustration before it starts by following structured patterns",
        "Best practices are unnecessary",
        "Spontaneity is better"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Operational Excellence",
      "pageReference": "151",
      "explanation": "The most productive Claude Code users follow specific operational patterns that prevent frustration. This chapter introduces those patterns before explaining why they work.",
      "explanationUrdu": ""
    },
    {
      "id": 2,
      "question": "What does the Four-Phase Workflow accomplish?",
      "options": [
        "Wastes time",
        "Transforms messy exploration into systematic progress through explore, plan, implement, commit",
        "Makes tasks harder",
        "No benefit"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Four-Phase Workflow",
      "pageReference": "152",
      "explanation": "The four-phase workflow structures every non-trivial task into: Explore (understand), Plan (strategize), Implement (execute), Commit (finalize).",
      "explanationUrdu": ""
    },
    {
      "id": 3,
      "question": "What is Phase 1: Explore in the workflow?",
      "options": [
        "Making changes immediately",
        "Claude reads files and gathers context in read-only mode - no edits",
        "Skipping reading files",
        "Making random changes"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Explore Phase",
      "pageReference": "152",
      "explanation": "Phase 1 enforces read-only mode where Claude explores, reads files, and gathers context without making any changes. It's reconnaissance.",
      "explanationUrdu": ""
    },
    {
      "id": 4,
      "question": "What is Phase 2: Plan in the workflow?",
      "options": [
        "Start implementing",
        "Create structured plan: list files to change and what each change does",
        "Skip planning",
        "Make decisions without planning"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Plan Phase",
      "pageReference": "153",
      "explanation": "Phase 2 produces a structured plan reviewable before implementation. Course correction is cheap during planning, expensive during implementation.",
      "explanationUrdu": ""
    },
    {
      "id": 5,
      "question": "What is Phase 3: Implement in the workflow?",
      "options": [
        "Continue planning",
        "Execute agreed plan step-by-step while verifying each change",
        "Skip verification",
        "Make random changes"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Implement Phase",
      "pageReference": "153",
      "explanation": "Phase 3 executes the plan systematically. Claude makes changes, verifies results - did it work? Do tests pass? Is behavior correct?",
      "explanationUrdu": ""
    },
    {
      "id": 6,
      "question": "What is Phase 4: Commit in the workflow?",
      "options": [
        "Delete all changes",
        "Safely capture work in version control with descriptive message",
        "Changes are lost",
        "No need for version control"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Commit Phase",
      "pageReference": "154",
      "explanation": "Phase 4 finalizes work: stage relevant files, create commit with descriptive message, save to version control for sharing or reverting.",
      "explanationUrdu": ""
    },
    {
      "id": 7,
      "question": "What is Principle 1: Bash is the Key?",
      "options": [
        "Avoid using bash",
        "Bash provides direct terminal access - the universal interface for system interaction",
        "Bash is outdated",
        "Terminal access is unnecessary"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 1",
      "pageReference": "155",
      "explanation": "Bash provides direct, unmediated access to the system. It's the universal language that works everywhere - from local to remote to cloud.",
      "explanationUrdu": ""
    },
    {
      "id": 8,
      "question": "What is Principle 2: Code as the Universal Interface?",
      "options": [
        "Avoid using code",
        "Code (not natural language) is most precise way to specify actions",
        "Natural language is better",
        "Interfaces should be avoided"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 2",
      "pageReference": "156",
      "explanation": "Code provides unambiguous specification of what should happen. Unlike prose, code cannot be misinterpreted - it either runs or it doesn't.",
      "explanationUrdu": ""
    },
    {
      "id": 9,
      "question": "What is Principle 3: Verification as Core Step?",
      "options": [
        "Skip verification",
        "After every significant action, verify it worked - tests, output checks, behavior validation",
        "Trust without verifying",
        "Verification is unnecessary"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 3",
      "pageReference": "157",
      "explanation": "Verification is core to the workflow: did the change work? Do tests pass? Is behavior correct? Catching errors immediately prevents error accumulation.",
      "explanationUrdu": ""
    },
    {
      "id": 10,
      "question": "What is Principle 4: Small, Reversible Decomposition?",
      "options": [
        "Make one giant change",
        "Break work into small steps that can be reversed individually",
        "Avoid decomposition",
        "Large changes are better"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 4",
      "pageReference": "158",
      "explanation": "Small, reversible steps mean you can undo any single step without losing all progress. Large changes limit recovery options.",
      "explanationUrdu": ""
    },
    {
      "id": 11,
      "question": "What is Principle 5: Persisting State in Files?",
      "options": [
        "Keep state only in memory",
        "Persist important state to files for recovery and session continuation",
        "Files are unnecessary",
        "State should be volatile"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 5",
      "pageReference": "159",
      "explanation": "File persistence enables recovery, session continuation, and auditing. You can always recreate context from saved files.",
      "explanationUrdu": ""
    },
    {
      "id": 12,
      "question": "What is Principle 6: Constraints and Safety?",
      "options": [
        "Constraints limit capabilities",
        "Constraints (like read-only mode) create safe boundaries where you can explore without risk",
        "Safety is limiting",
        "No constraints needed"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 6",
      "pageReference": "160",
      "explanation": "Strategic constraints like read-only mode during exploration provide safety while enabling confidence. Constraints aren't limiting - they're liberating.",
      "explanationUrdu": ""
    },
    {
      "id": 13,
      "question": "What is Principle 7: Observability?",
      "options": [
        "Hide what's happening",
        "Make everything visible - logs, output, progress tracking so you understand what's happening",
        "Observability is unnecessary",
        "Hide errors"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Principle 7",
      "pageReference": "161",
      "explanation": "Observability means making work transparent - you see logs, output, progress. This visibility enables course-correction and debugging.",
      "explanationUrdu": ""
    },
    {
      "id": 14,
      "question": "Why does Plan Mode enforce discipline according to the chapter?",
      "options": [
        "It restricts capabilities unnecessarily",
        "Read-only mode (Principle 6) ensures you understand the landscape before making changes",
        "Plan Mode wastes time",
        "No discipline needed"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Plan Mode Benefits",
      "pageReference": "152",
      "explanation": "Plan Mode's read-only constraint forces discipline: you must explore and understand before proposing changes. This prevents careless mistakes.",
      "explanationUrdu": ""
    },
    {
      "id": 15,
      "question": "How do course corrections work in the four-phase workflow?",
      "options": [
        "Corrections are impossible",
        "Review plan before implementation (Phase 2) - corrections are cheap here. After implementation starts (Phase 3+) - corrections are expensive",
        "All corrections are equally costly",
        "No corrections needed"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Course Correction",
      "pageReference": "153",
      "explanation": "The workflow positions course-correction strategically: Phase 2 catches misunderstandings before implementation. After Phase 3, changes cost more.",
      "explanationUrdu": ""
    },
    {
      "id": 16,
      "question": "What does code as universal interface accomplish?",
      "options": [
        "Nothing special",
        "Specification becomes executable - code removes ambiguity compared to prose",
        "Code limits options",
        "Prose is clearer"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Code as Interface",
      "pageReference": "156",
      "explanation": "Code can't be misunderstood - it either runs correctly or produces an error. This eliminates the ambiguity of natural language specifications.",
      "explanationUrdu": ""
    },
    {
      "id": 17,
      "question": "How does small, reversible decomposition reduce risk?",
      "options": [
        "It doesn't reduce risk",
        "If a step fails, you only lose that step's work - previous steps remain intact",
        "Reversibility increases risk",
        "Risk is unavoidable"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Decomposition Strategy",
      "pageReference": "158",
      "explanation": "Small steps mean you can revert any single step via git. Large changes might require reverting the entire work. Decomposition creates recovery granularity.",
      "explanationUrdu": ""
    },
    {
      "id": 18,
      "question": "What is the relationship between verification and error accumulation?",
      "options": [
        "No relationship",
        "Immediate verification catches errors before they compound - preventing error accumulation",
        "Verification doesn't help",
        "Errors always accumulate"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Verification Impact",
      "pageReference": "157",
      "explanation": "Each unverified step might build on faulty assumptions. Verification catches this immediately, preventing cascading errors.",
      "explanationUrdu": ""
    },
    {
      "id": 19,
      "question": "How should you integrate the Seven Principles into your workflow?",
      "options": [
        "Principles are optional",
        "Use them systematically - they reinforce each other to create disciplined, reliable workflows",
        "Pick and choose principles",
        "Principles are decorative"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Principle Integration",
      "pageReference": "163",
      "explanation": "The principles work together: Bash provides interface, code specifies actions, verification ensures correctness, decomposition enables recovery, persistence enables continuation.",
      "explanationUrdu": ""
    },
    {
      "id": 20,
      "question": "What does observability enable in long-horizon work?",
      "options": [
        "Nothing useful",
        "Visibility into progress allows detecting and correcting issues mid-work before they compound",
        "Observability is irrelevant",
        "Hide progress"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Observability Value",
      "pageReference": "161",
      "explanation": "Long work sessions can accumulate errors invisibly. Observability (logs, output, visible state) reveals problems early for mid-course correction.",
      "explanationUrdu": ""
    },
    {
      "id": 21,
      "question": "What makes Plan Mode different from traditional planning?",
      "options": [
        "It's identical to traditional planning",
        "Plan Mode enforces read-only constraints - you can't accidentally modify files while exploring",
        "Plan Mode allows any action",
        "Constraints don't matter"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Plan Mode Innovation",
      "pageReference": "152",
      "explanation": "The innovation is using UI constraints (read-only mode) to enforce discipline. You explore thoroughly because you can't accidentally make changes.",
      "explanationUrdu": ""
    },
    {
      "id": 22,
      "question": "How do the Seven Principles address the 'vibe coding' problem?",
      "options": [
        "They don't address vibe coding",
        "Principles enforce structure (planning, verification, decomposition) that prevents vibe coding's iteration spiral",
        "Principles enable vibe coding",
        "No connection exists"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Problem Resolution",
      "pageReference": "151",
      "explanation": "Principles provide systematic structure that prevents the iterative refinement trap - by planning thoroughly before implementation.",
      "explanationUrdu": ""
    },
    {
      "id": 23,
      "question": "What is the relationship between constraints and productivity?",
      "options": [
        "Constraints reduce productivity",
        "Well-chosen constraints (like read-only mode) increase productivity by preventing mistakes",
        "No relationship exists",
        "Constraints are irrelevant"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Constraint Benefits",
      "pageReference": "160",
      "explanation": "Counterintuitively, strategic constraints can increase productivity by preventing mistakes that require later cleanup.",
      "explanationUrdu": ""
    },
    {
      "id": 24,
      "question": "How should you think about verification in the context of rapid iteration?",
      "options": [
        "Verification slows iteration",
        "Verification enables safe iteration - you know each step works before building on it",
        "Rapid means skip verification",
        "Speed and safety are opposed"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Verification Speed",
      "pageReference": "157",
      "explanation": "Verification during rapid iteration prevents the slowdown of later debugging. It's faster to verify each step than to debug accumulated errors.",
      "explanationUrdu": ""
    },
    {
      "id": 25,
      "question": "What does persisting state enable for session continuity?",
      "options": [
        "Nothing useful",
        "You can continue from saved state, context reset without losing progress, or share work with others",
        "Persistence is unnecessary",
        "Files don't help"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "State Persistence",
      "pageReference": "159",
      "explanation": "Saved state enables: resuming interrupted work, context resets during long sessions, asynchronous collaboration, and complete work auditing.",
      "explanationUrdu": ""
    },
    {
      "id": 26,
      "question": "How do Bash and code principles complement each other?",
      "options": [
        "They're competing approaches",
        "Bash provides universal access; code provides unambiguous specification - together they enable reliable automation",
        "No relationship",
        "They conflict"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Principle Synergy",
      "pageReference": "155",
      "explanation": "Bash works everywhere (universality). Code specifies precisely (clarity). Together they create the most reliable interface for AI to work.",
      "explanationUrdu": ""
    },
    {
      "id": 27,
      "question": "What is the strategic value of the four-phase workflow?",
      "options": [
        "No strategic value",
        "It reduces error rates, improves communication, enables collaboration, and creates work artifacts",
        "Workflow doesn't matter",
        "No benefits"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Workflow Value",
      "pageReference": "154",
      "explanation": "The workflow creates: discoverable decisions (plans can be reviewed), error prevention (verification), reversibility (decomposition), and continuity (commits).",
      "explanationUrdu": ""
    },
    {
      "id": 28,
      "question": "How should observability be implemented according to the chapter?",
      "options": [
        "Hide all output",
        "Make work transparent through logs, progress tracking, command output - everything visible for understanding",
        "Observability is unnecessary",
        "Less visibility is better"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Observability Implementation",
      "pageReference": "161",
      "explanation": "Observability means making everything visible - you see exactly what's happening, what failed, what succeeded. This transparency enables confidence and debugging.",
      "explanationUrdu": ""
    },
    {
      "id": 29,
      "question": "What does the chapter suggest about mixing these principles with other methodologies?",
      "options": [
        "Principles must be used exclusively",
        "Principles reinforce each other and align with best practices across disciplines",
        "Mixing is always problematic",
        "No compatibility"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Principle Universality",
      "pageReference": "165",
      "explanation": "These principles aren't Claude-specific - they align with best practices in software engineering, scientific method, and operational discipline across domains.",
      "explanationUrdu": ""
    },
    {
      "id": 30,
      "question": "How should you approach learning and applying these principles?",
      "options": [
        "Learn all at once",
        "Start with operational best practices, then understand why principles work through practice",
        "Principles don't need to be learned",
        "Theory before practice"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Learning Path",
      "pageReference": "151",
      "explanation": "The chapter emphasizes practical competence first - learn the workflow patterns that work, then study the principles explaining why they work.",
      "explanationUrdu": ""
    }
  ]
};

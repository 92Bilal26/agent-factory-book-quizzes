/* ============================================
   CHAPTER 3: GENERAL AGENTS & CLAUDE CODE
   Questions Database
   ============================================ */

window.QUIZ_DATA_CHAPTER3 = {
  "version": "1.0",
  "title": "Chapter 3: General Agents & Claude Code",
  "chapterId": "chapter3",
  "source": "Agent Factory Book - General Agents Foundations",
  "totalQuestions": 86,
  "questions": [
    {
      "id": 1,
      "question": "What was the key discovery Boris Cherny made when giving Claude filesystem access?",
      "options": [
        "Claude became slower",
        "Claude naturally started exploring files and understanding project structure without explicit instruction",
        "Claude lost capabilities",
        "Filesystem access made no difference"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Claude Code Discovery",
      "pageReference": "52",
      "explanation": "When given filesystem access, Claude didn't just answer questions better - it naturally explored, following imports and understanding project structure. This revealed a hidden capability waiting to be unlocked.",
      "explanationUrdu": ""
    },
    {
      "id": 2,
      "question": "What is the Product Overhang that Anthropic discovered?",
      "options": [
        "Too many features in Claude",
        "The capability to be a genuine development partner already existed in Claude - it was waiting for a product that let it see code",
        "Claude is too powerful",
        "Products are unnecessary"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Claude Code Discovery",
      "pageReference": "52",
      "explanation": "The Product Overhang refers to capabilities that already exist in a model but haven't been unlocked by the right product interface. Claude didn't need to become smarter - it needed a product to let it work.",
      "explanationUrdu": ""
    },
    {
      "id": 3,
      "question": "What adoption rate did Claude Code achieve internally on day one?",
      "options": [
        "5% adoption",
        "20% adoption",
        "50% adoption",
        "80% adoption"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Claude Code Adoption",
      "pageReference": "53",
      "explanation": "When Claude Code was released internally (November 2024), adoption was explosive: 20% on day one, 50% by day five, reaching 80%+ by May 2025.",
      "explanationUrdu": ""
    },
    {
      "id": 4,
      "question": "How many pull requests per day did engineers average using Claude Code?",
      "options": [
        "One to two per day",
        "Three to four per day",
        "Five per day",
        "Ten per day"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Claude Code Performance",
      "pageReference": "53",
      "explanation": "Engineers using Claude Code averaged five pull requests per day compared to one to two at typical companies - a 67% increase even as the team grew.",
      "explanationUrdu": ""
    },
    {
      "id": 5,
      "question": "What was Claude Code's annual run-rate by mid-2025?",
      "options": [
        "$100 million",
        "$250 million",
        "$500 million",
        "$1 billion"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Claude Code Market Impact",
      "pageReference": "53",
      "explanation": "By mid-2025, Claude Code generated $500M+ annual run-rate, almost entirely from word-of-mouth, reaching over $1B by November 2025.",
      "explanationUrdu": ""
    },
    {
      "id": 6,
      "question": "What is the main difference between passive AI and agentic AI according to the chapter?",
      "options": [
        "No difference",
        "Passive AI is faster",
        "Passive describes problems, AI suggests generic solutions; Agentic reads code, understands patterns, proposes specific changes",
        "Agentic AI is always worse"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Paradigm Shift",
      "pageReference": "54",
      "explanation": "Traditional passive AI is like a consultant on the phone (doesn't see your screen). Agentic AI is a pair programmer looking at your code - understanding your patterns and proposing specific, contextual changes.",
      "explanationUrdu": ""
    },
    {
      "id": 7,
      "question": "What workflow does passive AI follow?",
      "options": [
        "Look at code, suggest, execute, iterate",
        "Describe problem → suggest generic → copy-paste → adapt → test → repeat",
        "Read files, understand context, propose changes",
        "Automated testing only"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Passive Model",
      "pageReference": "54",
      "explanation": "Passive AI: You describe your problem, AI suggests something generic, you copy-paste, adapt, test. The AI never sees your actual code.",
      "explanationUrdu": ""
    },
    {
      "id": 8,
      "question": "What workflow does agentic AI follow?",
      "options": [
        "Only suggests without acting",
        "Describe goal → Claude reads files → understands patterns → proposes specific changes → executes → tests → iterates",
        "Randomly modifies code",
        "Manual coding only"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Agentic Model",
      "pageReference": "54",
      "explanation": "Agentic AI: You describe your goal, Claude reads files, understands your patterns, proposes specific changes, executes with approval, runs tests, sees errors, and iterates.",
      "explanationUrdu": ""
    },
    {
      "id": 9,
      "question": "What is a General Agent according to the chapter?",
      "options": [
        "An AI specialized in one specific task",
        "An AI that reasons through problems and takes action across domains",
        "A human developer",
        "A database query tool"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "General Agents",
      "pageReference": "55",
      "explanation": "A General Agent is an AI that reasons through problems and takes action across domains. Claude Code is a General Agent - it can help with any programming task.",
      "explanationUrdu": ""
    },
    {
      "id": 10,
      "question": "What will you build in Part 6 of the course?",
      "options": [
        "More General Agents",
        "Custom Agents using OpenAI SDK or Google ADK",
        "Database systems",
        "Mobile apps"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Custom Agents",
      "pageReference": "55",
      "explanation": "Part 6 teaches you to build Custom Agents using OpenAI SDK or Google ADK - specialized agents built with code for specific tasks.",
      "explanationUrdu": ""
    },
    {
      "id": 11,
      "question": "What is the primary focus of Claude Code as a General Agent?",
      "options": [
        "Specialized for one task only",
        "Handles any programming task across domains through reasoning and file access",
        "Manages databases exclusively",
        "Designs architecture only"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "General Agents",
      "pageReference": "51",
      "explanation": "Claude Code is a General Agent designed for any programming task - it can help debug, refactor, add features, write tests, and solve problems across any codebase.",
      "explanationUrdu": ""
    },
    {
      "id": 12,
      "question": "Why did Claude Code adoption spread so rapidly from word-of-mouth?",
      "options": [
        "Heavy marketing",
        "Mandatory adoption",
        "It solved real pain points developers experienced - passive AI consultation vs actual code partner",
        "It was the cheapest option"
      ],
      "correct": 2,
      "difficulty": "medium",
      "topic": "Claude Code Adoption",
      "pageReference": "53",
      "explanation": "Claude Code spread rapidly because it solved the real problem developers faced: traditional AI assistance doesn't work because it can't see your actual project. Claude Code changed the paradigm entirely.",
      "explanationUrdu": ""
    },
    {
      "id": 13,
      "question": "What is the significance of Claude Code seeing the entire project context?",
      "options": [
        "No significance",
        "It enables Claude to understand patterns, conventions, and provide context-specific solutions",
        "It slows everything down",
        "It's unnecessary"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Project Understanding",
      "pageReference": "52",
      "explanation": "Seeing project context lets Claude understand existing patterns, conventions, dependencies, and architecture - enabling it to propose changes that fit your specific project, not generic suggestions.",
      "explanationUrdu": ""
    },
    {
      "id": 14,
      "question": "How does Claude Code approach testing after making changes?",
      "options": [
        "Assumes changes are correct",
        "Runs tests, sees errors, and iterates to fix them",
        "Tests are skipped",
        "Manual testing only"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Claude Code Workflow",
      "pageReference": "54",
      "explanation": "Claude Code runs tests after changes, observes the results, and iterates. It sees errors and fixes them - like a real pair programmer.",
      "explanationUrdu": ""
    },
    {
      "id": 15,
      "question": "What distinguishes Claude Code from ChatGPT for code assistance?",
      "options": [
        "They are identical",
        "Claude Code sees files and understands project context; ChatGPT cannot",
        "ChatGPT is always better",
        "No difference for coding"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Claude Code vs Passive",
      "pageReference": "54",
      "explanation": "Claude Code's key distinction is filesystem access - it sees your actual codebase, understands patterns, and makes context-specific changes. Passive tools like ChatGPT cannot do this.",
      "explanationUrdu": ""
    },
    {
      "id": 16,
      "question": "What timeline did Claude Code follow from internal release to public launch?",
      "options": [
        "Released internally and immediately public",
        "Internal November 2024, 20% adoption day one, 80%+ by May 2025, public launch",
        "Took 3 years to develop",
        "Still in beta"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Claude Code Timeline",
      "pageReference": "53",
      "explanation": "Internal release November 2024 with explosive adoption (20% day one, 80% by May 2025), public launch in May 2025.",
      "explanationUrdu": ""
    },
    {
      "id": 17,
      "question": "How does the chapter characterize the relationship between capability and product?",
      "options": [
        "Product doesn't matter",
        "Capability matters only",
        "The right product unlocks hidden capabilities - Claude didn't need to become smarter, it needed filesystem access",
        "Product and capability are unrelated"
      ],
      "correct": 2,
      "difficulty": "medium",
      "topic": "Product Overhang",
      "pageReference": "52",
      "explanation": "The Product Overhang concept shows that capability often precedes product. Claude's ability to be a development partner existed - it just needed the right interface (filesystem access).",
      "explanationUrdu": ""
    },
    {
      "id": 18,
      "question": "What was the critical insight about Claude's architecture?",
      "options": [
        "Claude needs better hardware",
        "Claude needs fine-tuning for coding",
        "Claude already had reasoning capabilities - it just needed to see the project it's working on",
        "Claude is unsuitable for coding"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Claude Architecture",
      "pageReference": "52",
      "explanation": "The critical insight was that Claude already possessed the capability to be a development partner through its reasoning abilities. The missing piece was access to see and understand the actual codebase.",
      "explanationUrdu": ""
    },
    {
      "id": 19,
      "question": "How does Claude Code's iterative approach differ from traditional debugging?",
      "options": [
        "No difference",
        "Traditional debugging is manual; Claude Code automates iteration, tests changes, and fixes errors",
        "Claude is slower",
        "Traditional debugging is more efficient"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Iterative Development",
      "pageReference": "54",
      "explanation": "Claude Code mirrors pair programming: propose change, run tests, observe results, iterate. This automated iteration is far faster than manual debugging cycles.",
      "explanationUrdu": ""
    },
    {
      "id": 20,
      "question": "What does the chapter suggest about the future of AI development tools?",
      "options": [
        "No change needed",
        "AI tools will remain passive consultants",
        "Agentic AI that sees code will become the standard for development",
        "AI tools will disappear"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Future of Development",
      "pageReference": "53",
      "explanation": "The explosive adoption and productivity gains suggest that agentic AI with project visibility will become the standard for how developers work.",
      "explanationUrdu": ""
    },
    {
      "id": 21,
      "question": "What is the relationship between Claude Code and the Agent Factory paradigm?",
      "options": [
        "No relationship",
        "Claude Code is a General Agent - demonstrating the incubation stage of the Agent Maturity Model",
        "They are different concepts",
        "Agent Factory is unrelated to coding"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Agent Paradigm",
      "pageReference": "55",
      "explanation": "Claude Code exemplifies a General Agent - the incubation stage where you rapidly discover solutions. This will eventually lead to specialized Custom Agents for production use.",
      "explanationUrdu": ""
    },
    {
      "id": 22,
      "question": "How does context visibility enable better code suggestions?",
      "options": [
        "It doesn't help",
        "Claude can understand project conventions, existing patterns, and dependencies to suggest changes that fit your specific codebase",
        "Generic suggestions are better",
        "Context makes suggestions worse"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Context Understanding",
      "pageReference": "52",
      "explanation": "Seeing context enables Claude to understand your project's patterns, conventions, dependencies, and architecture - allowing suggestions tailored to your specific codebase instead of generic advice.",
      "explanationUrdu": ""
    },
    {
      "id": 23,
      "question": "What does the chapter reveal about the Product Overhang concept?",
      "options": [
        "Products are unnecessary",
        "Many AI capabilities exist but haven't been accessed because product interface hasn't been designed",
        "Products always exist first",
        "Capability follows product always"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Product Overhang",
      "pageReference": "52",
      "explanation": "Product Overhang suggests many AI capabilities already exist in models but require the right product interface to unlock. Claude didn't get smarter - the product got better.",
      "explanationUrdu": ""
    },
    {
      "id": 24,
      "question": "How many pull requests per day represented the productivity increase from Claude Code?",
      "options": [
        "1 additional PR",
        "2-3 additional PRs",
        "4-5 additional PRs (67% increase from traditional 1-2 per day)",
        "10+ additional PRs"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Productivity Metrics",
      "pageReference": "53",
      "explanation": "Claude Code users averaged 5 PRs per day vs traditional 1-2 per day, representing a 67% productivity increase even as team size grew.",
      "explanationUrdu": ""
    },
    {
      "id": 25,
      "question": "What paradigm shift does Claude Code represent for development?",
      "options": [
        "No paradigm shift",
        "From developers writing code manually to developers directing AI to write code",
        "From programming to non-programming",
        "No change in how development works"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Paradigm Shift",
      "pageReference": "54",
      "explanation": "Claude Code enables a paradigm shift: developers shift from typing code to directing an AI that understands context and executes tasks.",
      "explanationUrdu": ""
    },
    {
      "id": 26,
      "question": "Why is Claude Code's adoption rate significant for enterprise adoption?",
      "options": [
        "It shows AI tools won't be adopted",
        "80%+ adoption shows developers enthusiastically adopt tools that truly amplify their capabilities",
        "Enterprise will never adopt AI",
        "Adoption rates don't matter"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Enterprise Implications",
      "pageReference": "53",
      "explanation": "80%+ adoption demonstrates that enterprises and developers eagerly adopt AI tools that provide genuine amplification of capabilities, not just incremental improvements.",
      "explanationUrdu": ""
    },
    {
      "id": 27,
      "question": "According to the chapter, what is Claude Code's core value proposition?",
      "options": [
        "It's free",
        "It's the fastest processor",
        "It enables pair programming with AI that sees your code and iterates",
        "It replaces developers"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Value Proposition",
      "pageReference": "51",
      "explanation": "Claude Code's core value is enabling genuine pair programming - AI that sees your actual code, understands patterns, and iterates alongside you.",
      "explanationUrdu": ""
    },
    {
      "id": 28,
      "question": "How does Claude Code handle uncertainty in code changes?",
      "options": [
        "Makes random changes",
        "Always guesses",
        "Understands context to make informed decisions; runs tests to validate",
        "Refuses to make changes"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Code Safety",
      "pageReference": "54",
      "explanation": "Claude Code reduces uncertainty by understanding project context and running tests to validate changes. This combination of context understanding and verification builds confidence.",
      "explanationUrdu": ""
    },
    {
      "id": 29,
      "question": "What does the chapter imply about traditional code generation tools?",
      "options": [
        "They are perfect",
        "They are passive - describe problem, get generic solution, adapt manually",
        "They are equivalent to Claude Code",
        "They have no limitations"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Tool Comparison",
      "pageReference": "54",
      "explanation": "Traditional tools operate in passive mode - you describe, they suggest generic solutions. You're responsible for adaptation and testing. Claude Code changes this fundamental flow.",
      "explanationUrdu": ""
    },
    {
      "id": 30,
      "question": "How should developers think about Claude Code in their workflow?",
      "options": [
        "As a consultant on the phone",
        "As a code generator",
        "As a pair programmer with real-time project visibility",
        "As a replacement for them"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Workflow Integration",
      "pageReference": "54",
      "explanation": "Think of Claude Code as a pair programmer looking at your code - understanding context, suggesting improvements, and iterating based on results.",
      "explanationUrdu": ""
    }
  ]
};

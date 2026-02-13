/* ============================================
   CHAPTER 3: GENERAL AGENTS & CLAUDE CODE
   Questions Database
   ============================================ */

window.QUIZ_DATA_CHAPTER3 = {
  "version": "1.0",
  "title": "Chapter 3: General Agents & Claude Code",
  "chapterId": "chapter3",
  "source": "Agent Factory Book - General Agents Foundations",
  "totalQuestions": 80,
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
        "As a pair programmer with real-time project visibility",
        "As a consultant on the phone",
        "As a code generator only",
        "As a replacement for developers"
      ],
      "correct": 0,
      "difficulty": "advanced",
      "topic": "Workflow Integration",
      "pageReference": "54",
      "explanation": "Think of Claude Code as a pair programmer looking at your code - understanding context, suggesting improvements, and iterating based on results.",
      "explanationUrdu": ""
    },
    {
      "id": 31,
      "question": "What is the main prerequisite for running Claude Code on Windows?",
      "options": [
        "Visual Studio Community edition must be installed first",
        "A bash-compatible shell environment like WSL or Git Bash",
        "Docker Desktop is mandatory",
        "Only PowerShell built into Windows"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Installation",
      "pageReference": "65",
      "explanation": "Claude Code requires a bash-compatible shell to run on Windows. You need either WSL (Windows Subsystem for Linux) or Git for Windows installed."
    },
    {
      "id": 32,
      "question": "Which installation method is RECOMMENDED for Claude Code on Windows?",
      "options": [
        "Docker containers only",
        "Native Windows without WSL",
        "WSL (Windows Subsystem for Linux)",
        "Git Bash with PowerShell"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Installation",
      "pageReference": "65",
      "explanation": "WSL is recommended for Windows because it provides a full Linux environment with best compatibility and is endorsed by Anthropic."
    },
    {
      "id": 33,
      "question": "What is a 'Skill' in Claude Code context?",
      "options": [
        "Encoded expertise as a SKILL.md document that teaches Claude precise procedures and domain knowledge",
        "Only for advanced users to understand",
        "A programming language feature",
        "A version control technique"
      ],
      "correct": 0,
      "difficulty": "easy",
      "topic": "Skills Concept",
      "pageReference": "58",
      "explanation": "A Skill is encoded expertise - a SKILL.md document that teaches Claude precise procedures, reasoning patterns, or domain knowledge. It's intellectual property you can create and sell."
    },
    {
      "id": 34,
      "question": "What makes Skills valuable beyond personal use?",
      "options": [
        "Skills can be monetized as products encoding valuable domain expertise",
        "Skills are local-only tools",
        "Skills have no commercial value whatsoever",
        "Technical knowledge is not marketable"
      ],
      "correct": 0,
      "difficulty": "medium",
      "topic": "Skills Value",
      "pageReference": "58",
      "explanation": "Skills that automate specialized tasks (financial audits, legal review, sales outreach) encode valuable domain expertise that becomes intellectual property - something you can sell as a product."
    },
    {
      "id": 35,
      "question": "What percentage of Claude Code was written by Claude Code itself?",
      "options": [
        "Approximately 30-50%",
        "Approximately 70-80%",
        "Approximately 90%",
        "Less than 20%"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Claude Code Capability",
      "pageReference": "56",
      "explanation": "Approximately 90% of Claude Code was written by Claude Code itself, demonstrating the agentic model's effectiveness when given filesystem access and iteration capability."
    },
    {
      "id": 36,
      "question": "What is Cowork and how does it differ from Claude Code?",
      "options": [
        "Cowork is an older version of Claude Code",
        "Desktop app with GUI for knowledge workers vs terminal CLI for developers; both use same Claude Agent SDK",
        "They are completely identical products",
        "No meaningful difference between them"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Cowork vs Claude Code",
      "pageReference": "60",
      "explanation": "Cowork is the desktop app version targeting knowledge workers with familiar GUI. Claude Code is terminal CLI for developers. Both use the same Claude Agent SDK and filesystem access paradigm."
    },
    {
      "id": 37,
      "question": "What was the 'Second Product Overhang' that Anthropic discovered?",
      "options": [
        "The terminal was a barrier for non-developers to use filesystem-powered agents",
        "Claude Code had too many features",
        "No additional capabilities were discovered",
        "Products needed more marketing"
      ],
      "correct": 0,
      "difficulty": "medium",
      "topic": "Product Strategy",
      "pageReference": "60",
      "explanation": "The Second Product Overhang: Claude Code proved filesystem access was powerful. But the terminal was a barrier for non-developers. Cowork delivers the same agentic filesystem access through a familiar desktop interface for knowledge workers."
    },
    {
      "id": 38,
      "question": "What operating system support does Claude Code require at minimum?",
      "options": [
        "macOS 13 (Ventura) or later, Windows 10 or later, Linux Ubuntu 20.04+ or Debian 10+",
        "Only Windows 11 Pro Edition",
        "macOS only with version 14 or higher",
        "Linux systems exclusively"
      ],
      "correct": 0,
      "difficulty": "easy",
      "topic": "System Requirements",
      "pageReference": "63",
      "explanation": "Claude Code minimum requirements: macOS 13 (Ventura) or later, Windows 10 or later, or Linux (Ubuntu 20.04+/Debian 10+). RAM minimum: 8GB."
    },
    {
      "id": 39,
      "question": "What does running 'claude --version' verify after installation?",
      "options": [
        "Operating system version only",
        "Installation integrity and Claude Code version number",
        "Network connection status",
        "Database connectivity verification"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Installation Verification",
      "pageReference": "67",
      "explanation": "Running 'claude --version' shows the installed Claude Code version (e.g., X.X.XX), confirming successful installation. Claude Code auto-updates frequently."
    },
    {
      "id": 40,
      "question": "What is the purpose of running 'claude doctor' command?",
      "options": [
        "To receive medical advice from the AI",
        "To diagnose system configuration including installation, authentication, compatibility, and network connectivity",
        "Only for troubleshooting when something is broken",
        "To check if you need to update your operating system"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "System Diagnostics",
      "pageReference": "72",
      "explanation": "The 'claude doctor' command runs system diagnostics checking: installation integrity, authentication status, system compatibility, and network connectivity to Claude API."
    },
    {
      "id": 41,
      "question": "What authentication options are available for Claude Code?",
      "options": [
        "Only Gmail login credentials",
        "Claude.ai subscription (Pro/Max/Enterprise) or Claude Console with API credits",
        "Microsoft account authentication only",
        "GitHub OAuth exclusively"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Authentication",
      "pageReference": "63",
      "explanation": "Two authentication paths: Claude.ai subscription (Pro $20/month, Max $200/month, Enterprise) OR Claude Console account with API credits."
    },
    {
      "id": 42,
      "question": "What does DISABLE_AUTOUPDATER environment variable accomplish?",
      "options": [
        "Speeds up automatic updates to Claude Code",
        "Disables automatic Claude Code updates - useful for version control in corporate environments",
        "Enables all experimental features",
        "Disables automatic model improvements"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Auto-Update Configuration",
      "pageReference": "71",
      "explanation": "Setting DISABLE_AUTOUPDATER=1 turns off auto-updates. Useful for corporate environments needing version control or when you want manual update control."
    },
    {
      "id": 43,
      "question": "Why is terminal comfort important in AI-native development according to the chapter?",
      "options": [
        "Terminals are quickly becoming obsolete technology",
        "Terminal comfort multiplies productivity by removing friction between intent and AI execution",
        "Only professional developers need to use terminals",
        "Terminal skills don't affect AI development productivity"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Terminal Skills",
      "pageReference": "72",
      "explanation": "Terminal comfort multiplies productivity. Learning basic commands in 5 minutes unlocks 10x productivity with AI. You're removing friction between intent and AI execution."
    },
    {
      "id": 44,
      "question": "What does 'npm install -g @anthropic-ai/claude-code' accomplish?",
      "options": [
        "Installs Node.js runtime environment only",
        "Installs Claude Code globally via npm package manager",
        "Installs only the documentation files",
        "Creates a new development project"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "npm Installation",
      "pageReference": "70",
      "explanation": "This npm command installs Claude Code globally, making it available from any terminal. Requires Node.js 18+. (Note: npm installation is deprecated - use platform-specific installers when possible)"
    },
    {
      "id": 45,
      "question": "What is the relationship between Claude Code and the Claude Agent SDK?",
      "options": [
        "They are completely unrelated technologies",
        "Both Claude Code and Cowork are built on Claude Agent SDK as their foundation",
        "Claude Agent SDK is exclusive to Cowork only",
        "They use different underlying architectures"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Claude Code Architecture",
      "pageReference": "60",
      "explanation": "Both Claude Code (terminal) and Cowork (desktop) are built on the Claude Agent SDK - same agentic architecture, filesystem access, and capabilities with different interfaces."
    },
    {
      "id": 46,
      "question": "What is the core value of CLAUDE.md context files?",
      "options": [
        "They are deprecated technology files",
        "CLAUDE.md files provide persistent context about your working style, preferences, and project standards",
        "They exist solely for documentation purposes",
        "CLAUDE.md files have no practical development purpose"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "CLAUDE.md Files",
      "pageReference": "75",
      "explanation": "CLAUDE.md files provide persistent context teaching Claude Code about your working style, coding preferences, and project-specific standards - enabling more personalized assistance."
    },
    {
      "id": 47,
      "question": "How does terminal integration enable the agentic model?",
      "options": [
        "Terminals make development slower",
        "Terminal access allows Claude Code to read files directly, run tests, see failures, and iterate in real-time",
        "Terminals are only for system administration",
        "Terminal integration is irrelevant to agent capabilities"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Terminal Integration",
      "pageReference": "58",
      "explanation": "Terminal integration is crucial: Claude Code reads files directly (no copy-paste), runs tests, sees failures, and adjusts in real-time. Changes go through Git for review before execution."
    },
    {
      "id": 48,
      "question": "What does the chapter say distinguishes General from Custom Agents?",
      "options": [
        "Both types are functionally identical",
        "General agents (Claude Code) solve novel problems flexibly; Custom agents (SDK-built) optimize for specific workflows",
        "Custom agents are always superior",
        "General agents are only for educational purposes"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Agent Types",
      "pageReference": "55",
      "explanation": "General Agents (Claude Code): solve novel problems, flexible, instant setup. Custom Agents (SDK-built): optimized for specific tasks, production-grade, weeks to build. General Agents build Custom Agents - this is the Agent Factory model."
    },
    {
      "id": 49,
      "question": "What is the OODA Loop in agentic AI context?",
      "options": [
        "A data storage system used in databases",
        "Observe → Orient → Decide → Act (repeats until goal achieved) - how agentic AI reasons through problems",
        "A database query optimization language",
        "Only relevant to passive AI systems"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "OODA Loop",
      "pageReference": "57",
      "explanation": "OODA Loop: Observe (read error), Orient (identify root cause), Decide (where to look), Act (execute), Correct (adjust if needed). This cycle repeats until problem solved - unlike passive AI that responds once."
    },
    {
      "id": 50,
      "question": "What is the minimum macOS version requirement for Claude Code?",
      "options": [
        "macOS 14 (Sonoma) or later",
        "macOS 13 (Ventura) or later",
        "macOS 12 (Monterey) or later",
        "macOS 11 (Big Sur) or later"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "macOS Requirements",
      "pageReference": "63",
      "explanation": "Minimum macOS version: 13 (Ventura) or later. This ensures compatibility with Claude Code's agent capabilities and required system libraries."
    },
    {
      "id": 51,
      "question": "Which installation method is recommended for macOS?",
      "options": [
        "Manual compilation from source code",
        "Native curl/bash installer (recommended) or Homebrew",
        "npm package manager exclusively",
        "Docker containers only"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "macOS Installation",
      "pageReference": "68",
      "explanation": "Recommended macOS installation: curl native installer (simplest) or Homebrew (if you prefer package management). Both work equally well; curl is the official recommended path."
    },
    {
      "id": 52,
      "question": "What happens with Homebrew installation on macOS?",
      "options": [
        "Downloads source code only",
        "Uses Homebrew cask system to install Claude Code, integrated with your Homebrew workflow",
        "Requires manual configuration afterwards",
        "Installs to system-wide restricted directories"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Homebrew Installation",
      "pageReference": "68",
      "explanation": "Homebrew installation: 'brew install --cask claude-code' uses cask system for GUI/binary applications. Good if you manage other tools via Homebrew."
    },
    {
      "id": 53,
      "question": "What is the curl-based installer command for Linux/WSL?",
      "options": [
        "curl https://install.sh | bash",
        "curl -fsSL https://claude.ai/install.sh | bash",
        "bash install.sh",
        "curl -O install.tar.gz && tar xz"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Linux Installation",
      "pageReference": "69",
      "explanation": "Linux/WSL installation: curl -fsSL https://claude.ai/install.sh | bash. This downloads and executes the official installer, automatically detecting your distribution."
    },
    {
      "id": 54,
      "question": "What special configuration is needed for Alpine Linux?",
      "options": [
        "Standard installation works fine on Alpine",
        "Install libgcc, libstdc++, ripgrep and set USE_BUILTIN_RIPGREP=0",
        "Alpine cannot run Claude Code",
        "Only Docker support available"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Alpine Linux Support",
      "pageReference": "69",
      "explanation": "Alpine Linux requires: 'apk add libgcc libstdc++ ripgrep' and 'export USE_BUILTIN_RIPGREP=0'. These provide required C++ libraries."
    },
    {
      "id": 55,
      "question": "What Linux distributions are officially supported?",
      "options": [
        "Ubuntu 20.04+, Debian 10+, WSL2 with Ubuntu/Debian",
        "Only Ubuntu distributions",
        "Only Fedora and CentOS",
        "All distributions equally supported"
      ],
      "correct": 0,
      "difficulty": "easy",
      "topic": "Linux Support",
      "pageReference": "69",
      "explanation": "Supported Linux distributions: Ubuntu 20.04/22.04/24.04, Debian 10/11/12, and WSL2 with Ubuntu or Debian. Alpine requires special configuration."
    },
    {
      "id": 56,
      "question": "When should you use npm installation instead of platform installers?",
      "options": [
        "Always use npm as the default method",
        "When you already have Node.js 18+, need version control via package.json, or your platform isn't officially supported",
        "Never - always use platform-specific installers",
        "npm is always deprecated"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "npm Installation",
      "pageReference": "70",
      "explanation": "Use npm when: already have Node.js 18+, need npm-based version management, platform not officially supported. Note: npm installation is deprecated - use platform installers when possible."
    },
    {
      "id": 57,
      "question": "What is the minimum Node.js version for Claude Code npm installation?",
      "options": [
        "Node.js 14 LTS",
        "Node.js 16 LTS",
        "Node.js 18 or later",
        "Node.js 20 or later"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "npm Requirements",
      "pageReference": "70",
      "explanation": "npm installation requires Node.js 18 or later. Check version with: 'node --version'. Must show v18.0.0 or higher."
    },
    {
      "id": 58,
      "question": "How do you check your Node.js version before npm installation?",
      "options": [
        "npm check version",
        "node --version",
        "npm version",
        "curl node.org"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Prerequisite Checking",
      "pageReference": "70",
      "explanation": "Command to check Node.js version: 'node --version'. Should return v18.0.0 or higher to proceed with npm installation."
    },
    {
      "id": 59,
      "question": "What does auto-update configuration control in Claude Code?",
      "options": [
        "Only security patches automatically",
        "Whether Claude Code automatically checks for and installs new versions",
        "Only major version updates",
        "Auto-updates cannot be disabled"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Auto-Update Configuration",
      "pageReference": "71",
      "explanation": "Auto-update configuration controls whether Claude Code automatically checks for and prompts about new versions. Can be disabled with DISABLE_AUTOUPDATER=1 environment variable."
    },
    {
      "id": 60,
      "question": "How do you manually check for Claude Code updates?",
      "options": [
        "Check website manually",
        "Run 'claude update' command",
        "Reinstall from scratch",
        "Updates are always automatic only"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Manual Updates",
      "pageReference": "71",
      "explanation": "Run 'claude update' command to manually check for and install updates. Also works if DISABLE_AUTOUPDATER=1 is set."
    },
    {
      "id": 61,
      "question": "What does the uninstall command 'rm -f ~/.local/bin/claude' do?",
      "options": [
        "Removes all configuration files",
        "Removes the Claude Code executable file",
        "Only removes shortcuts",
        "Completely uninstalls everything"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Uninstallation",
      "pageReference": "74",
      "explanation": "This command removes the Claude Code executable. Complete uninstallation also requires: 'rm -rf ~/.claude-code' and 'rm ~/.claude.json'."
    },
    {
      "id": 62,
      "question": "What does Claude Code's 80%+ adoption rate indicate about enterprise readiness?",
      "options": [
        "Adoption is irrelevant to business decisions",
        "Enterprises readily adopt AI tools that provide genuine capability amplification",
        "Adoption indicates problems with the technology",
        "Adoption only matters for startups"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Enterprise Adoption",
      "pageReference": "53",
      "explanation": "80%+ adoption shows that enterprises and developers enthusiastically adopt AI tools providing genuine amplification. This signals enterprise readiness for agentic AI systems."
    },
    {
      "id": 63,
      "question": "What can you do with Skills you create?",
      "options": [
        "Skills can only be used personally on your machine",
        "Create, use personally, share with others, and monetize as products",
        "Skills cannot be shared with anyone",
        "Skills are only for educational demonstrations"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Skills Potential",
      "pageReference": "58",
      "explanation": "Skills encode expertise you can create, use yourself, share with others, and monetize as products. This is how individual expertise becomes intellectual property."
    },
    {
      "id": 64,
      "question": "How does Claude Code compare to human pair programming?",
      "options": [
        "Identical to human pair programming",
        "Similar to pair programming but AI sees code, understands patterns, runs tests, doesn't tire",
        "Completely different concept",
        "Worse than human pair programming"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Pair Programming Model",
      "pageReference": "54",
      "explanation": "Claude Code acts as an ideal pair programmer: sees your code directly, understands your patterns, can iterate continuously without fatigue, and focuses on contextual solutions."
    },
    {
      "id": 65,
      "question": "What does 'Product Overhang' mean in business?",
      "options": [
        "Too many products in a market",
        "Latent capabilities in technology waiting for the right product interface to unlock them",
        "Products that are oversold",
        "Marketing overflow"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Business Strategy",
      "pageReference": "52",
      "explanation": "Product Overhang: capabilities that already exist but haven't been unlocked by the right interface/product. Claude had exploration ability inside - just needed filesystem access to unlock it."
    },
    {
      "id": 66,
      "question": "Why did Claude Code adoption spread so rapidly according to the chapter?",
      "options": [
        "Aggressive marketing campaigns",
        "It genuinely amplified developer capabilities by providing pair programming with actual project context",
        "It was available for free",
        "Only developers with special skills adopted it"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Adoption Drivers",
      "pageReference": "53",
      "explanation": "Claude Code spread fast via word-of-mouth because it genuinely solved a real problem - giving AI actual project context. This enabled true pair programming, not just generic suggestions."
    },
    {
      "id": 67,
      "question": "What is the significance of '90% of Claude Code written by Claude Code'?",
      "options": [
        "Claude Code is fully automated without human input",
        "It demonstrates that agentic AI with filesystem access can handle complex work effectively",
        "It shows AI needs no human input whatsoever",
        "It's purely a marketing claim"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Capability Validation",
      "pageReference": "56",
      "explanation": "90% of Claude Code was written by Claude Code itself - demonstrating that agentic access to files, test results, and iteration capability unlocks extraordinary productivity."
    },
    {
      "id": 68,
      "question": "What audience is Claude Code primarily designed for?",
      "options": [
        "Only AI researchers and academics",
        "Developers and technical professionals building software",
        "Non-technical users only",
        "Business executives"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Claude Code Target",
      "pageReference": "54",
      "explanation": "Claude Code is designed for developers - it runs in the terminal where developers work. The terminal is home for developers but a barrier for everyone else."
    },
    {
      "id": 69,
      "question": "What audience is Cowork primarily designed for?",
      "options": [
        "Only professional software developers",
        "Knowledge workers and non-technical professionals",
        "Data scientists exclusively",
        "Children and educational settings"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Cowork Target",
      "pageReference": "60",
      "explanation": "Cowork targets knowledge workers - professionals who are non-technical but need AI assistance with documents, data, organization. Desktop GUI removes the terminal barrier."
    },
    {
      "id": 70,
      "question": "Why is Claude Code NOT a replacement for developers?",
      "options": [
        "It actually is a replacement",
        "Claude Code amplifies capabilities - requires human judgment for goals, architecture, validation",
        "Developers are unaffected by AI",
        "The chapter doesn't address this"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Developer Role",
      "pageReference": "54",
      "explanation": "Claude Code is pair programming, not replacement. Developers still make architecture decisions, set goals, validate quality. Claude Code handles the implementation details - humans provide judgment."
    },
    {
      "id": 71,
      "question": "What is the practical benefit of Git integration in Claude Code?",
      "options": [
        "Only for version control history",
        "All changes go through Git - reviewable before execution, maintaining transparency and control",
        "Git integration is optional",
        "Git prevents changes from being executed"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Git Integration",
      "pageReference": "58",
      "explanation": "Git integration ensures all Claude Code changes are reviewable (like a pull request) before being executed. This maintains transparency and gives you final approval control."
    },
    {
      "id": 72,
      "question": "What does Claude Code's ability to run tests and see failures enable?",
      "options": [
        "Only for debugging errors",
        "Autonomous iteration - Claude Code detects failures and adjusts without human intervention",
        "Testing must be manual only",
        "Tests cannot show failures"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Autonomous Iteration",
      "pageReference": "57",
      "explanation": "Test execution enables autonomous iteration: Claude Code runs tests, sees failures, understands root cause, and adjusts the solution. The OODA Loop repeats until the problem is solved."
    },
    {
      "id": 73,
      "question": "What differentiates passive AI code suggestions from Claude Code implementation?",
      "options": [
        "They are functionally identical",
        "Passive AI suggests generic code you adapt; Claude Code understands your project and implements contextual solutions",
        "Both follow the same process",
        "Claude Code is just passive AI renamed"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Implementation Difference",
      "pageReference": "54",
      "explanation": "Passive AI: describe problem → get generic suggestion → you adapt → you test. Claude Code: describe goal → reads your files → understands your patterns → implements specific solution → runs tests → iterates."
    },
    {
      "id": 74,
      "question": "What does Product Overhang suggest about finding business opportunities?",
      "options": [
        "Look for more features to add",
        "Look for latent capabilities in existing technology waiting for the right interface",
        "Product overhang has no business value",
        "Only large companies can exploit it"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Opportunity Recognition",
      "pageReference": "52",
      "explanation": "Product Overhang pattern: examine existing technology to find capabilities locked inside waiting for the right product interface. Both Claude Code and Cowork exploited this pattern."
    },
    {
      "id": 75,
      "question": "What does 50% adoption by day 5 indicate about Claude Code?",
      "options": [
        "It shows slow adoption rate",
        "Explosive adoption indicates the solution addresses a genuine developer problem",
        "Adoption speed is irrelevant to success",
        "50% is normal adoption rate"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Market Dynamics",
      "pageReference": "53",
      "explanation": "50% adoption by day 5 (from 20% day 1) shows explosive growth. This indicates Claude Code solved a real friction point in development workflows."
    },
    {
      "id": 76,
      "question": "How does the terminal facilitate the agentic paradigm in Claude Code?",
      "options": [
        "Terminals are outdated technology",
        "Terminal provides direct file access, command execution, test output visibility enabling AI iteration without friction",
        "Terminals slow down AI development",
        "Terminal is only for system administration"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Terminal Architecture",
      "pageReference": "58",
      "explanation": "Terminal is crucial to agenticism: direct file access (no copy-paste), run commands, see output/errors in real-time. Claude Code cycles through OODA Loop using terminal feedback."
    },
    {
      "id": 77,
      "question": "How is Claude Code different from ChatGPT for programming?",
      "options": [
        "ChatGPT is better for programming tasks",
        "Claude Code sees your actual project, understands your specific patterns, and iterates on real test results",
        "No difference whatsoever",
        "Both have identical capabilities"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Fundamental Shift",
      "pageReference": "54",
      "explanation": "ChatGPT: no project context, generic suggestions. Claude Code: reads files, understands your patterns (imports, style, architecture), proposes specific solutions, tests them, iterates on real results."
    },
    {
      "id": 78,
      "question": "What workflow paradigm shift does Claude Code enable?",
      "options": [
        "Developers will type more code",
        "Development shifts from 'what I must type' to 'what I must direct' - orchestration replaces typing",
        "Workflows will never change",
        "AI has no impact on development workflows"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Future Trends",
      "pageReference": "54",
      "explanation": "Paradigm shift: developers evolve from Typists (typing code) to Orchestrators (directing AI). The workflow changes from manual implementation to specifying goals and reviewing AI execution."
    },
    {
      "id": 79,
      "question": "Why did Anthropic create Cowork after Claude Code succeeded?",
      "options": [
        "Claude Code had operational problems",
        "Claude Code proved agentic + filesystem works, but terminal excluded non-developers. Cowork brings same capability to knowledge workers via GUI",
        "Simply to compete with other products",
        "To replace Claude Code entirely"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Product Evolution",
      "pageReference": "60",
      "explanation": "Cowork Strategy: Claude Code proved the concept (agentic + filesystem = powerful). But terminal excluded non-technical users. Cowork (desktop GUI) brings identical capabilities to knowledge workers - exploiting the Second Product Overhang."
    },
    {
      "id": 80,
      "question": "What does the chapter reveal about the future relationship between human developers and AI?",
      "options": [
        "AI will completely replace developers",
        "Developers will evolve into orchestrators directing AI, shifting from implementation focus to judgment and validation focus",
        "AI and developers will remain completely separate",
        "No fundamental change in developer roles expected"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Future Developer Role",
      "pageReference": "54",
      "explanation": "The paradigm shift reveals that developers will evolve from implementing code themselves to orchestrating AI that implements code. This fundamentally changes what developers do, focusing on judgment and direction rather than typing."
    }
  ]
};

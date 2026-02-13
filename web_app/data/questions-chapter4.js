/* ============================================
   CHAPTER 4: CONTEXT ENGINEERING
   Questions Database
   ============================================ */

window.QUIZ_DATA_CHAPTER4 = {
  "version": "1.0",
  "title": "Chapter 4: Context Engineering",
  "chapterId": "chapter4",
  "source": "Agent Factory Book - General Agents Foundations",
  "totalQuestions": 86,
  "questions": [
    {
      "id": 1,
      "question": "What is context engineering according to Anthropic?",
      "options": [
        "Building software systems",
        "The art and science of curating what goes into the limited context window from possible information",
        "Creating databases",
        "Writing documentation"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Context Engineering Definition",
      "pageReference": "91",
      "explanation": "Context engineering is the discipline of curating what goes into the limited context window, finding the smallest set of high-signal tokens that maximize likelihood of desired outcome.",
      "explanationUrdu": ""
    },
    {
      "id": 2,
      "question": "What is the guiding principle of context engineering?",
      "options": [
        "Use as much context as possible",
        "Use the smallest set of high-signal tokens that maximize desired outcome",
        "Context doesn't matter",
        "Use random context"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Guiding Principle",
      "pageReference": "91",
      "explanation": "The guiding principle is to find the smallest set of high-signal tokens that maximize the likelihood of some desired outcome - quality over quantity.",
      "explanationUrdu": ""
    },
    {
      "id": 3,
      "question": "According to the chapter, what is the fundamental problem with using the same AI model as competitors?",
      "options": [
        "Competitors will steal your model",
        "Your competitors also have access to Claude, GPT, and Gemini - the model isn't your moat",
        "Models are too expensive",
        "Models always perform the same"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Competitive Advantage",
      "pageReference": "91",
      "explanation": "The uncomfortable truth: the same frontier models are available to everyone. Your competitors have access to Claude too. The model isn't your moat. Context engineering is.",
      "explanationUrdu": ""
    },
    {
      "id": 4,
      "question": "What is context rot?",
      "options": [
        "When files become corrupted",
        "When accumulated conversation degrades output quality through error accumulation",
        "When storage fails",
        "When servers crash"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Context Quality Issues",
      "pageReference": "92",
      "explanation": "Context rot occurs when accumulated conversation degrades output quality. Old errors and abandoned approaches compete with current instructions, reducing quality over time.",
      "explanationUrdu": ""
    },
    {
      "id": 5,
      "question": "What is a token in AI models?",
      "options": [
        "A password or security credential",
        "The unit AI models use to measure text (roughly 3/4 of a word)",
        "A cryptocurrency",
        "A database record"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Context Concepts",
      "pageReference": "92",
      "explanation": "A token is the unit AI models use to measure text. 'Context engineering' = 2 tokens. This matters because models have limited context windows.",
      "explanationUrdu": ""
    },
    {
      "id": 6,
      "question": "What is the context window?",
      "options": [
        "A browser window",
        "Maximum tokens the model can see at once",
        "A programming variable",
        "A time period"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Context Concepts",
      "pageReference": "92",
      "explanation": "The context window is the maximum number of tokens a model can process at once. Claude's context window is 200,000 tokens.",
      "explanationUrdu": ""
    },
    {
      "id": 7,
      "question": "What is Claude's context window size?",
      "options": [
        "50,000 tokens",
        "100,000 tokens",
        "200,000 tokens",
        "500,000 tokens"
      ],
      "correct": 2,
      "difficulty": "easy",
      "topic": "Context Capacity",
      "pageReference": "92",
      "explanation": "Claude has a 200,000 token context window, allowing substantial context to be included in requests.",
      "explanationUrdu": ""
    },
    {
      "id": 8,
      "question": "What does the chapter mean by 'signal vs noise' in context?",
      "options": [
        "Audio quality",
        "Relevant, actionable information (signal) vs irrelevant background information (noise)",
        "Electrical signals",
        "Communication systems"
      ],
      "correct": 1,
      "difficulty": "easy",
      "topic": "Signal vs Noise",
      "pageReference": "93",
      "explanation": "Signal is relevant, high-quality information that improves AI output. Noise is irrelevant or low-quality information that wastes tokens and confuses the AI.",
      "explanationUrdu": ""
    },
    {
      "id": 9,
      "question": "What separates a $2,000/month Digital FTE from one that can't be given away?",
      "options": [
        "The AI model used",
        "Context quality - same model, different context engineering",
        "Infrastructure",
        "Marketing"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Quality Differentiation",
      "pageReference": "91",
      "explanation": "Two contract review agents using the same model: one is $2,000/month, the other worthless. The difference is context quality. This demonstrates context engineering's value.",
      "explanationUrdu": ""
    },
    {
      "id": 10,
      "question": "Why does prompt engineering have a ceiling?",
      "options": [
        "Prompts are unlimited",
        "Prompts have tiny token budget (50-200 tokens) vs context's 200,000 tokens",
        "Prompts work perfectly",
        "No ceiling exists"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Prompt vs Context",
      "pageReference": "93",
      "explanation": "Prompt engineering hits a ceiling because prompts are limited to 50-200 tokens. Context engineering accesses 200,000+ tokens - vastly more control.",
      "explanationUrdu": ""
    },
    {
      "id": 11,
      "question": "What is the difference between 'prompt' and 'context'?",
      "options": [
        "They are identical",
        "Prompt is what you type now; context is everything the AI already knows before you type",
        "Context is more important than prompt",
        "No meaningful difference"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Prompt vs Context",
      "pageReference": "91",
      "explanation": "Prompt is what you say. Context is everything the AI already knows when you say it. Context engineering controls the 'already knows' part.",
      "explanationUrdu": ""
    },
    {
      "id": 12,
      "question": "What makes context engineering the moat for Digital FTEs?",
      "options": [
        "The model is secret",
        "High-quality context is hard to replicate and specific to your domain",
        "Infrastructure is proprietary",
        "Legal protection"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Competitive Moat",
      "pageReference": "91",
      "explanation": "Context is your moat because curating high-quality context is domain-specific and difficult to replicate. It's what separates valuable from worthless AI agents.",
      "explanationUrdu": ""
    },
    {
      "id": 13,
      "question": "According to the chapter, what causes AI output inconsistency in continuous conversations?",
      "options": [
        "The AI gets tired",
        "Accumulated context corrupts priorities - old errors compete with current instructions",
        "No reason",
        "Random chance"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Consistency Issues",
      "pageReference": "91",
      "explanation": "AI follows instructions brilliantly for 20 minutes, then starts ignoring conventions and repeating corrected mistakes. This happens because context corruption degrades quality.",
      "explanationUrdu": ""
    },
    {
      "id": 14,
      "question": "What is the token budget comparison between prompts and full context?",
      "options": [
        "Prompts 50-200 tokens, context 50-200 tokens",
        "Prompts 50-200 tokens, context 200,000+ tokens",
        "Prompts unlimited, context limited",
        "No difference"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Token Budgets",
      "pageReference": "93",
      "explanation": "Prompts are limited to 50-200 tokens. Full context can use 200,000+ tokens. This massive difference enables vastly more control.",
      "explanationUrdu": ""
    },
    {
      "id": 15,
      "question": "What is context architecture?",
      "options": [
        "Building physical servers",
        "The structure of what information goes into context window, its organization, and lifecycle",
        "Computer hardware design",
        "Network topology"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Context Architecture",
      "pageReference": "95",
      "explanation": "Context architecture is the design of what goes into the context window, where it's positioned, and when it loads - similar to software architecture but for AI context.",
      "explanationUrdu": ""
    },
    {
      "id": 16,
      "question": "What is the Tasks system in context management?",
      "options": [
        "TODO lists",
        "Persistent state for context management that tracks AI progress and decisions",
        "Job scheduling",
        "Database queries"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Tasks System",
      "pageReference": "96",
      "explanation": "The Tasks system is persistent state for context management - it allows tracking what the AI is working on, what's been decided, and what remains.",
      "explanationUrdu": ""
    },
    {
      "id": 17,
      "question": "What is the context lifecycle?",
      "options": [
        "How long context lasts",
        "Knowing when to reset vs compress context as work progresses",
        "Deleting all context",
        "Starting fresh always"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Context Lifecycle",
      "pageReference": "97",
      "explanation": "Context lifecycle management decides when to reset context (start fresh) versus compress it (summarize) - knowing which is crucial for long-horizon work.",
      "explanationUrdu": ""
    },
    {
      "id": 18,
      "question": "What are progress files used for?",
      "options": [
        "Storing passwords",
        "Persisting state and enabling session architecture for long-horizon work",
        "Tracking bugs",
        "Logging errors"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Progress Files",
      "pageReference": "97",
      "explanation": "Progress files persist state across sessions, enabling long-horizon work by allowing context resets while maintaining accumulated progress.",
      "explanationUrdu": ""
    },
    {
      "id": 19,
      "question": "What is context isolation according to the chapter?",
      "options": [
        "Hiding context from users",
        "Clean slates beat dirty states - isolated context sessions are more reliable than accumulated context",
        "Separating computers",
        "Database isolation"
      ],
      "correct": 1,
      "difficulty": "medium",
      "topic": "Context Isolation",
      "pageReference": "98",
      "explanation": "Context isolation means starting with a clean slate instead of accumulating conversation. Clean isolated context produces better results than dirty accumulated context.",
      "explanationUrdu": ""
    },
    {
      "id": 20,
      "question": "What does 'mid-stream memory' mean in context engineering?",
      "options": [
        "Forgetting information mid-task",
        "Injecting context at execution time to refresh or redirect the AI mid-task",
        "Memory leaks",
        "Cache clearing"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Mid-Stream Memory",
      "pageReference": "97",
      "explanation": "Mid-stream memory is injecting fresh context during task execution - redirecting or correcting the AI without restarting completely.",
      "explanationUrdu": ""
    },
    {
      "id": 21,
      "question": "How does context engineering relate to preventing costly mistakes in production?",
      "options": [
        "No relationship",
        "High-quality context prevents errors, avoiding expensive production failures",
        "Mistakes are inevitable",
        "Production doesn't need context engineering"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Production Reliability",
      "pageReference": "91",
      "explanation": "Context quality directly impacts AI reliability. Poor context leads to inconsistent behavior and costly mistakes. High-quality context is essential for production systems.",
      "explanationUrdu": ""
    },
    {
      "id": 22,
      "question": "What is the strategic value of mastering context engineering?",
      "options": [
        "No particular value",
        "It's the discipline that separates sellable Digital FTEs from expensive toys",
        "Only technical interest",
        "Not economically significant"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Strategic Value",
      "pageReference": "91",
      "explanation": "Mastering context engineering is the quality control discipline that separates sellable, reliable Digital FTEs from expensive failed experiments.",
      "explanationUrdu": ""
    },
    {
      "id": 23,
      "question": "How should context quality decisions be made according to the chapter?",
      "options": [
        "Use maximum context always",
        "Use minimum context",
        "Use decision frameworks - find minimum high-signal tokens that maximize outcomes",
        "Context quality doesn't matter"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Decision Frameworks",
      "pageReference": "99",
      "explanation": "Context engineering requires decision frameworks: evaluate what information is needed, whether it's high-signal, where to position it, and when to load it.",
      "explanationUrdu": ""
    },
    {
      "id": 24,
      "question": "What does the chapter imply about context reset vs compression?",
      "options": [
        "Always reset",
        "Always compress",
        "Choose based on whether you need accumulated progress or fresh start",
        "No difference"
      ],
      "correct": 2,
      "difficulty": "advanced",
      "topic": "Context Lifecycle Strategy",
      "pageReference": "97",
      "explanation": "Reset creates clean slate but loses progress. Compress preserves learning but risks context rot. The choice depends on task requirements.",
      "explanationUrdu": ""
    },
    {
      "id": 25,
      "question": "How does tacit knowledge affect context engineering?",
      "options": [
        "Tacit knowledge is irrelevant",
        "Tacit knowledge (unwritten understanding) must be explicitly encoded into context to work",
        "Only explicit knowledge matters",
        "Knowledge doesn't affect context"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Tacit Knowledge",
      "pageReference": "96",
      "explanation": "The two-way problem: getting tacit knowledge in (encoding unwritten understanding) and out (extracting what AI learned) is crucial for context engineering.",
      "explanationUrdu": ""
    },
    {
      "id": 26,
      "question": "What distinguishes high-signal context from low-signal context?",
      "options": [
        "Signal strength in communications",
        "High-signal is directly relevant to outcomes; low-signal is background noise that wastes tokens",
        "No distinction exists",
        "All context has equal signal"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Signal Quality",
      "pageReference": "93",
      "explanation": "Signal vs noise audit identifies which information directly affects AI output (signal) vs distracts (noise). Quality context maximizes signal, minimizes noise.",
      "explanationUrdu": ""
    },
    {
      "id": 27,
      "question": "How should contract review agents handle context for multiple clients?",
      "options": [
        "Mix all clients' data in one context",
        "Use high-quality, client-specific context for each agent",
        "No context needed",
        "Context doesn't matter for contracts"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Real-World Application",
      "pageReference": "91",
      "explanation": "The $2,000/month contract agent succeeds through domain-specific context engineering - crafted context for contract review rather than generic setup.",
      "explanationUrdu": ""
    },
    {
      "id": 28,
      "question": "What is the relationship between context engineering and AI agent quality?",
      "options": [
        "No relationship",
        "Context quality is the primary determinant of agent reliability and value delivery",
        "Agent quality is determined by model only",
        "Quality and context are unrelated"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Quality Determinants",
      "pageReference": "91",
      "explanation": "Context is the primary differentiator - same model with different context produces vastly different results. This is why context engineering is your competitive moat.",
      "explanationUrdu": ""
    },
    {
      "id": 29,
      "question": "How does session architecture enable long-horizon work?",
      "options": [
        "It doesn't help",
        "Session architecture with progress files allows resetting context while preserving accumulated work",
        "Sessions are unnecessary",
        "All work must be in one session"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Long-Horizon Work",
      "pageReference": "97",
      "explanation": "Long-horizon work requires sessions - the ability to save progress, reset context for clarity, then resume from saved state without losing accumulated work.",
      "explanationUrdu": ""
    },
    {
      "id": 30,
      "question": "According to the chapter, what is the ultimate goal of context engineering?",
      "options": [
        "Use as much context as possible",
        "Achieve consistent, reliable AI behavior that solves the right problem with minimal token waste",
        "Maximum context always",
        "Minimize all context"
      ],
      "correct": 1,
      "difficulty": "advanced",
      "topic": "Context Engineering Goal",
      "pageReference": "91",
      "explanation": "The goal is finding the minimal set of high-signal context that maximizes desired outcomes - balancing sufficiency and efficiency.",
      "explanationUrdu": ""
    }
  ]
};

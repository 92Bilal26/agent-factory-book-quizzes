# Quiz Creation & Management Guide

**Last Updated**: February 12, 2026
**Purpose**: Complete reference for creating, managing, and deploying quizzes
**Status**: Ready for new book chapter quizzes

---

## 📚 Table of Contents

1. [Current FTE Quiz Structure](#current-fte-quiz-structure)
2. [How FTE Quiz Was Created](#how-fte-quiz-was-created)
3. [Web App Architecture](#web-app-architecture)
4. [Question Data Model](#question-data-model)
5. [GitHub Pages Deployment](#github-pages-deployment)
6. [Creating New Book Chapter Quizzes](#creating-new-book-chapter-quizzes)
7. [Modifying App for Multiple Quiz Sets](#modifying-app-for-multiple-quiz-sets)
8. [Step-by-Step Implementation Plan](#step-by-step-implementation-plan)

---

## 🎯 Current FTE Quiz Structure

### Overview
- **Source**: Agent Factory: Building Digital Full-Time Equivalents (FTEs) PDF
- **Total Questions**: 493 (originally 250, expanded to 493)
- **Difficulty Levels**: Easy, Medium, Advanced
- **Topics**: 14 major topics
- **Current Deployment**: GitHub Pages (quiz.github.io)

### Key Metrics
```
Easy Questions:     100
Medium Questions:   100
Advanced Questions: 293
Total:             493 questions
```

### Main Features
- ✅ Dark mode toggle
- ✅ Progress tracking (LocalStorage)
- ✅ Filter by difficulty and topic
- ✅ Search functionality
- ✅ Immediate feedback with explanations
- ✅ Bilingual support (English + Urdu)
- ✅ Results analytics and download
- ✅ Mobile responsive design

---

## 🔧 How FTE Quiz Was Created

### Step 1: Content Extraction
1. PDF "Agent Factory_ Building Digital Full-Time Equivalents (FTEs).pdf" was analyzed
2. Key concepts extracted by slides (14+ slides)
3. Questions generated covering each concept

### Step 2: Question Generation
- **Method**: AI-assisted generation with manual review
- **Sources**: Multiple files containing:
  - `original_250_questions.js` - First batch
  - `additional_questions.js` - Extended batch
  - `clean_250_questions.js` - Cleaned version
  - `github_250_questions.js` - Final version for deployment

### Step 3: Data Processing
1. Questions converted to JSON format
2. Slide references added (mapping to presentation slides)
3. Explanations written in English
4. Urdu translations added for explanations
5. Difficulty levels assigned: easy, medium, advanced

### Step 4: Quality Assurance
- Slide reference mapping verified
- Option length balanced
- Format consistency checked
- Urdu translations reviewed

### Step 5: Integration
- Questions combined into single `questions.js` file
- Deployed to `web_app/data/questions.js`
- Web app configured to load all 493 questions

### Step 6: Deployment
- Pushed to GitHub repository
- Enabled GitHub Pages in Settings
- Application live at GitHub Pages URL

---

## 🏗️ Web App Architecture

### Directory Structure
```
web_app/
├── index.html                    # Main HTML (all screens)
├── css/
│   ├── style.css                # Main styles (CSS variables, animations)
│   └── responsive.css            # Mobile responsive breakpoints
├── js/
│   ├── app.js                   # Main application logic (QuizApp class)
│   ├── quiz.js                  # Utility functions (formatting, colors)
│   ├── storage.js               # LocalStorage management (data persistence)
│   └── slide-viewer.js          # Optional slide display functionality
├── data/
│   ├── questions.js             # Quiz questions database (PRIMARY)
│   └── slide_mapping.json       # Slide reference mapping
└── slides/
    └── index.json               # Slide metadata (optional)
```

### File Sizes (Reference)
- `index.html` ~8KB
- `app.js` ~15KB
- `style.css` ~12KB
- `questions.js` ~250KB (all 493 questions)
- **Total**: ~300KB (very lightweight!)

---

## 📋 Question Data Model

### Complete Question Structure
```javascript
{
  "id": 1,
  "question": "What is an AI Agent?",
  "options": [
    "A software that only generates text",
    "A piece of software that can pursue a goal",
    "A chatbot that answers questions",
    "A tool that only predicts outcomes"
  ],
  "correct": 1,                    // Index of correct answer (0-3)
  "difficulty": "easy",            // easy | medium | advanced
  "topic": "AI Fundamentals",      // Topic name for filtering
  "slideReference": "14",          // CURRENT: Slide number reference
  "explanation": "An AI agent is software capable of...",
  "explanationUrdu": "ایک AI ایجنٹ وہ سافٹ ویئر ہے جو...",
  "part": 1                        // Optional: question grouping
}
```

### Data Requirements
- **question**: Clear, unambiguous question text
- **options**: Exactly 4 multiple choice options
- **correct**: Number 0-3 (index of correct answer)
- **difficulty**: One of "easy", "medium", or "advanced"
- **topic**: Category for filtering (should be consistent)
- **slideReference**: For FTE quiz = slide number; **FOR BOOKS = PAGE NUMBER**
- **explanation**: Clear explanation of correct answer in English
- **explanationUrdu**: Urdu translation of explanation (can be empty for now)

### Topic Consistency
Current FTE topics:
```
- AI Fundamentals
- AI Evolution
- Predictive AI Fundamentals
- General vs Custom Agents
- MCP & Agent Skills
- Enterprise Architecture
- Agent Factory Workflow
- Spec-Driven Development
- Agent Evals & Testing
- Digital FTE Economics
- Monetization Models
- Spec Blueprint
- Security & Compliance
- Nine Pillars Framework
```

---

## 🌐 GitHub Pages Deployment

### Current Setup
1. **Repository**: github.com/92Bilal26/fte-agent-factory-quiz
2. **Branch**: main
3. **Deployment Folder**: /root (web_app folder contents)
4. **Live URL**: https://92Bilal26.github.io/fte-agent-factory-quiz

### Deployment Steps
1. Update `web_app/data/questions.js` with new questions
2. Commit changes:
   ```bash
   git add web_app/
   git commit -m "Update: New quiz content"
   git push origin main
   ```
3. GitHub Pages automatically deploys (1-2 minutes)
4. Access at: https://92Bilal26.github.io/fte-agent-factory-quiz

### Important Files for Deployment
- ✅ `web_app/index.html` - Main HTML
- ✅ `web_app/css/` - All CSS files
- ✅ `web_app/js/` - All JavaScript files
- ✅ `web_app/data/questions.js` - Questions database
- ❌ DO NOT deploy root-level files (only web_app/)
- ❌ DO NOT deploy .env, credentials, or private files

---

## 📖 Creating New Book Chapter Quizzes

### Overview
Plan to create 6 new quiz sets from book chapters (with page references instead of slide references)

### Supported Structure for Multiple Quiz Sets

#### Approach 1: Single App, Multiple Question Sets (RECOMMENDED)
```javascript
const QUIZ_SETS = {
  "fte": {
    title: "FTE Agent Factory",
    description: "Original Agent Factory Quiz",
    totalQuestions: 493,
    dataFile: "data/questions-fte.js",
    source: "PDF: Agent Factory FTEs"
  },
  "chapter1": {
    title: "Chapter 1: Agent Foundations",
    description: "Learn the basics of AI agents",
    totalQuestions: 75,
    dataFile: "data/questions-ch1.js",
    source: "Book: Agent Factory"
  },
  "chapter2": {
    title: "Chapter 2: Building Agents",
    description: "Creating custom agents",
    totalQuestions: 80,
    dataFile: "data/questions-ch2.js",
    source: "Book: Agent Factory"
  },
  // ... chapter3-6
};
```

#### Welcome Screen Modification
```
┌─────────────────────────────────────┐
│  Welcome to Agent Factory Quizzes   │
├─────────────────────────────────────┤
│ 📚 Select Quiz Set:                 │
│  ┌─────────────────────────────┐   │
│  │ ▼ FTE Agent Factory (493 Q) │   │
│  └─────────────────────────────┘   │
│                                     │
│ 📊 Study Mode:                      │
│  [All] [Easy] [Medium] [Advanced]   │
│                                     │
│ 🔍 Filter by Topic:                 │
│  [Topic 1] [Topic 2] ...           │
└─────────────────────────────────────┘
```

---

## 🔄 Modifying App for Multiple Quiz Sets

### Changes Required in app.js

#### 1. Add Quiz Set Management
```javascript
constructor() {
    // ... existing code ...
    this.currentQuizSet = 'fte';      // Active quiz set
    this.quizSets = {};               // All available quiz sets
    this.initializeQuizSets();        // Load all quiz sets
}

initializeQuizSets() {
    // Load QUIZ_SETS configuration
    // Load appropriate questions.js based on selected set
    // Update UI with quiz set title/description
}
```

#### 2. Modify Question Loading
```javascript
loadQuestionsData() {
    // Current: const allQuestions = QUESTIONS_DATA.questions;
    // New: Load from current quiz set
    this.allQuestions = window[`QUESTIONS_${this.currentQuizSet}`].questions;
}
```

#### 3. Add Quiz Set Selector
```javascript
attachEventListeners() {
    // New event listener
    document.getElementById('quizSetSelector').addEventListener('change',
        (e) => this.switchQuizSet(e.target.value));
}

switchQuizSet(setId) {
    this.currentQuizSet = setId;
    this.loadQuestionsData();
    this.populateTopics();
    this.showWelcome();
}
```

#### 4. Update LocalStorage Keys
```javascript
// Current: 'fte_current_quiz', 'fte_quiz_progress'
// New: 'quiz_${setId}_current', 'quiz_${setId}_progress'
// This allows saving progress separately for each quiz set
```

### Changes Required in index.html

#### 1. Add Quiz Set Selector to Welcome Screen
```html
<div class="option-group">
  <h3>📚 Choose Quiz Set</h3>
  <select id="quizSetSelector" class="quiz-set-selector">
    <option value="fte">FTE Agent Factory (493 Questions)</option>
    <option value="chapter1">Chapter 1: Agent Foundations (75 Q)</option>
    <option value="chapter2">Chapter 2: Building Agents (80 Q)</option>
    <!-- ... chapter3-6 ... -->
  </select>
</div>
```

#### 2. Update Stats Display
```html
<div class="stat-card">
  <div class="stat-number" id="totalQuestionsCount">493</div>
  <div class="stat-label">Total Questions</div>
</div>
```

### Changes in CSS

```css
/* Add quiz set selector styling */
.quiz-set-selector {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
}

.quiz-set-selector:hover {
  border-color: var(--secondary-color);
  box-shadow: 0 0 8px rgba(16, 185, 129, 0.2);
}
```

---

## 📝 Step-by-Step Implementation Plan

### Phase 1: Preparation (This Document)
- ✅ Document current structure
- ✅ Create implementation guide
- ✅ Plan new quiz set structure

### Phase 2: Chapter Downloads
1. Download all 6 chapters from agentfactory repo
2. Store in `chapters/` folder:
   ```
   chapters/
   ├── chapter1-agent-foundations.md
   ├── chapter2-building-agents.md
   ├── chapter3-mcp-skills.md
   ├── chapter4-enterprise-architecture.md
   ├── chapter5-spec-driven-development.md
   └── chapter6-deployment-scaling.md
   ```
3. Review and understand each chapter
4. Identify key concepts for each chapter

### Phase 3: Question Generation (Per Chapter)

#### For Each Chapter:
1. **Analyze Content**: Read chapter, identify key topics
2. **Define Topics**: List 3-5 main topics per chapter
3. **Generate Questions**:
   - Create 25-35 easy questions per chapter
   - Create 25-35 medium questions per chapter
   - Create 25-35 advanced questions per chapter
   - Total: 75-105 questions per chapter
4. **Add Page References**: Use format `page: 15` (not slide reference)
5. **Write Explanations**: Clear English explanation
6. **Add Urdu Translations**: Optional but recommended
7. **Format as JSON**: Follow question data model exactly
8. **Save as**: `chapters/questions-chapter-X.js`

### Phase 4: Data Files Creation

#### Create Questions Files
```
web_app/data/
├── questions-fte.js          # Existing 493 questions (rename from questions.js)
├── questions-chapter1.js     # Chapter 1 questions
├── questions-chapter2.js     # Chapter 2 questions
├── questions-chapter3.js     # Chapter 3 questions
├── questions-chapter4.js     # Chapter 4 questions
├── questions-chapter5.js     # Chapter 5 questions
└── questions-chapter6.js     # Chapter 6 questions
```

#### File Format
```javascript
// questions-chapter1.js
const QUESTIONS_CHAPTER1 = {
  "version": "1.0",
  "title": "Chapter 1: Agent Foundations",
  "source": "Book: Agent Factory",
  "totalQuestions": 80,
  "lastUpdated": "2026-02-12",
  "questions": [
    {
      "id": 1,
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "difficulty": "easy",
      "topic": "Chapter 1 Topic",
      "pageReference": "15",      // IMPORTANT: Use page number instead of slide
      "explanation": "Explanation here...",
      "explanationUrdu": "اردو میں تشریح..."
    },
    // ... more questions ...
  ]
};
```

### Phase 5: App Modifications

#### Step 1: Update app.js
1. Add `QUIZ_SETS` constant
2. Modify constructor for multi-set support
3. Update `loadQuestionsData()` to load from current set
4. Add `switchQuizSet()` method
5. Update LocalStorage keys for per-set persistence

#### Step 2: Update index.html
1. Add quiz set selector dropdown
2. Update stats display (dynamic question counts)
3. Update welcome screen layout for selector

#### Step 3: Update CSS
1. Add styles for quiz set selector
2. Update responsive design for new element

#### Step 4: Update storage.js (Optional)
1. Modify storage keys to include quiz set ID
2. Ensure progress is saved per quiz set

### Phase 6: Testing

#### Local Testing
1. Open `index.html` in browser
2. Test FTE quiz set (existing functionality)
3. Test Chapter 1 quiz set
4. Verify:
   - Questions load correctly
   - Difficulty filters work
   - Topic filters work
   - Progress saves per quiz set
   - Mobile responsive works
   - Dark mode works
   - Results calculation correct

#### Cross-Browser Testing
- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

### Phase 7: Deployment

#### GitHub Pages Deployment
```bash
cd web_app/
git add data/questions-*.js
git add js/app.js
git add index.html
git add css/
git commit -m "Add: Book chapter quizzes (6 chapters with page references)"
git push origin main
```

#### Verification
1. Wait 1-2 minutes for GitHub Pages build
2. Visit: https://92Bilal26.github.io/fte-agent-factory-quiz
3. Verify quiz set selector appears
4. Test switching between quiz sets
5. Verify each quiz set loads correct questions

---

## 📊 Question Distribution Plan

### Suggested Questions Per Chapter
```
Chapter 1 (Foundations):         75 questions (25 each difficulty)
Chapter 2 (Building):            80 questions (25-25-30)
Chapter 3 (MCP & Skills):        85 questions (25-25-35)
Chapter 4 (Enterprise):          80 questions (25-25-30)
Chapter 5 (Spec-Driven):         80 questions (25-25-30)
Chapter 6 (Deployment):          75 questions (25-25-25)

TOTAL NEW QUESTIONS:            475 questions
TOTAL WITH FTE:                 968 questions
```

---

## 🔑 Key Points to Remember

### Data Model Consistency
- ✅ Always use 4 options per question
- ✅ Correct answer index must be 0-3
- ✅ Difficulty must be: "easy", "medium", or "advanced"
- ✅ Topic must be consistent within chapter
- ✅ Page references must be actual page numbers from book
- ✅ Use `pageReference` key for book chapters (not `slideReference`)

### Naming Conventions
- Questions file: `questions-chapter1.js` (lowercase)
- Constant name: `QUESTIONS_CHAPTER1` (uppercase)
- Quiz set ID: `chapter1` (lowercase, no spaces)
- Variable names: camelCase
- CSS classes: kebab-case

### Quality Standards
- Each question should be clear and unambiguous
- Options should be plausible but distinct
- Explanations should be educational
- Urdu translations should be accurate
- Page references should be verifiable

### Performance Optimization
- Keep each questions file under 500KB
- Use minified JSON if file size becomes issue
- Lazy load quiz sets if needed (later optimization)

### Storage & Persistence
- Progress saved per quiz set
- Theme preference global (shared)
- Results history per quiz set
- Clear browser data to reset (warn users)

---

## 🚀 Quick Reference Checklist

### For Each New Chapter:
- [ ] Download chapter content
- [ ] Read and understand chapter
- [ ] Identify 3-5 main topics
- [ ] Generate 25-35 questions per difficulty
- [ ] Add accurate page references
- [ ] Write clear English explanations
- [ ] Add Urdu translations (optional)
- [ ] Format as JSON following model
- [ ] Save as `questions-chapterX.js`
- [ ] Add to `QUIZ_SETS` config
- [ ] Test locally
- [ ] Deploy to GitHub Pages
- [ ] Verify on live site

### Before Deployment:
- [ ] All question files validated as JSON
- [ ] No syntax errors in app.js
- [ ] Quiz selector visible on welcome screen
- [ ] All quiz sets load correctly
- [ ] Filters work per quiz set
- [ ] Progress saves per quiz set
- [ ] Mobile responsive works
- [ ] Dark mode works
- [ ] GitHub Pages configured correctly

---

## 📞 Troubleshooting

### Questions Not Loading
- Check `questions-chapterX.js` for JSON syntax errors
- Verify constant name matches QUIZ_SETS config
- Check browser console for errors
- Ensure file is loaded in HTML

### Quiz Selector Not Appearing
- Verify HTML has `<select id="quizSetSelector">`
- Check app.js has event listener attached
- Ensure CSS classes are styled

### Progress Not Saving
- Check localStorage not disabled
- Verify storage keys use quiz set ID
- Clear browser cache and retry

### Difficulty/Topic Filters Not Working
- Verify questions have correct difficulty value
- Ensure topic names are consistent within chapter
- Check filtering logic in app.js

---

## 📚 Resources

- **Agent Factory Repository**: https://github.com/panaversity/agentfactory
- **Learn App Docs**: apps/learn-app/docs/01-General-Agents-Foundations
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **JavaScript LocalStorage**: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

---

## ✅ Document Status

**Created**: February 12, 2026
**Last Updated**: February 12, 2026
**Version**: 1.0
**Status**: Ready for Implementation

**Next Steps**:
1. Delete old FTE quiz files (keeping only web_app/ and this guide)
2. Download 6 book chapters
3. Generate questions chapter by chapter
4. Implement multiple quiz set support
5. Deploy to GitHub Pages

**Questions or Issues?**: Refer to troubleshooting section above

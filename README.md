# Agent Factory Book Quizzes - Interactive Learning Platform

![Book Quizzes](https://img.shields.io/badge/Chapters-6-blue) ![Difficulty-3%20Levels-green) ![License-MIT-green)

A comprehensive interactive web-based quiz platform for **Agent Factory: Building AI-Native Software Development** with **516 questions** across 6 book chapters and 3 difficulty levels.

## 🎯 Features

### Core Features
- **516 Interactive Questions** with 4 multiple choice options each
- **6 Book Chapters** with comprehensive coverage
- **3 Difficulty Levels**: Easy, Medium, Advanced
- **Multiple Topics** per chapter
- **Immediate Feedback**: See explanations with page references
- **Progress Tracking**: Automatic save and resume functionality
- **Real-time Scoring**: Live score calculation
- **Detailed Results**: Performance analytics and statistics

### Study Features
- Filter by chapter selection
- Filter by difficulty level
- Filter by topic
- Search questions by keyword
- Skip questions and return later
- Review answers after completion
- Download results as CSV
- Performance breakdown by difficulty and topic

### User Experience
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Mode**: Eye-friendly dark theme toggle
- **Smooth Animations**: Professional UI transitions
- **Accessibility**: Keyboard navigation support
- **Progress Recovery**: Resume interrupted quizzes
- **Local Storage**: All data saved locally in browser

## 📖 Chapters Included

1. **Chapter 1: Agent Factory Paradigm** (86 questions)
   - Pages 1-30 | Topics: Inflection Point, Agent Maturity Model, Developer Economy

2. **Chapter 2: Markdown Writing Instructions** (85 questions)
   - Pages 31-50 | Topics: Markdown syntax, CommonMark, Communication standards

3. **Chapter 3: General Agents & Claude Code** (86 questions)
   - Pages 51-90 | Topics: Claude Code, General vs Custom Agents, Agentic AI paradigm

4. **Chapter 4: Context Engineering** (86 questions)
   - Pages 91-120 | Topics: Context quality, Signal vs noise, Competitive moat

5. **Chapter 5: Spec-Driven Development** (86 questions)
   - Pages 121-150 | Topics: Specs vs vibe coding, Four-phase workflow, SDD methodology

6. **Chapter 6: Seven Principles** (86 questions)
   - Pages 151-180 | Topics: Operational excellence, Four-phase workflow, Seven principles

**Total: 516 Questions**

## 🚀 Quick Start

### Play Online
Visit your deployed GitHub Pages URL: `https://your-username.github.io/quiz-repository-name`

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Start taking the quiz!

**No installation or build process required** - pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
web_app/
├── index.html                    # Main quiz application
├── README.md                     # This file
├── .gitignore                    # Git ignore rules
│
├── css/
│   ├── style.css                # Main styling (2000+ lines)
│   └── responsive.css            # Mobile-responsive styles
│
├── js/
│   ├── app.js                   # Main application logic (1400+ lines)
│   ├── quiz.js                  # Quiz utility functions
│   └── storage.js               # Local storage management
│
└── data/
    ├── questions-chapter1.js    # Chapter 1 questions (86 Q)
    ├── questions-chapter2.js    # Chapter 2 questions (85 Q)
    ├── questions-chapter3.js    # Chapter 3 questions (86 Q)
    ├── questions-chapter4.js    # Chapter 4 questions (86 Q)
    ├── questions-chapter5.js    # Chapter 5 questions (86 Q)
    └── questions-chapter6.js    # Chapter 6 questions (86 Q)
```

## 🎓 How to Use

### Starting a Quiz
1. Select chapter from dropdown
2. Choose study mode (All Questions, Easy, Medium, or Advanced)
3. Or filter by topic
4. Click start button

### During the Quiz
1. Read the question carefully
2. Select your answer from 4 options
3. Get immediate feedback:
   - ✓ Correct answer highlighted
   - ✗ Wrong answer shown with correct answer
   - Explanation with page reference
4. Navigate with Previous/Next buttons or Skip

### After the Quiz
- View detailed score breakdown
- See performance by difficulty
- See performance by topic
- Review all answered questions
- Download results as CSV
- Retake the quiz

## 💾 Data Persistence

All progress is automatically saved to browser's LocalStorage:
- Current quiz state
- Answers provided
- Progress tracking
- Theme preference
- Results history

**Note**: Data is stored locally in your browser. Clearing browser data will erase saved progress.

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Media Queries, CSS Variables
- **JavaScript**: Vanilla JS (no frameworks)
- **Storage**: LocalStorage API
- **Compatibility**: All modern browsers

### Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## 📊 Question Data Model

Each question includes:
```javascript
{
  "id": 1,
  "question": "Question text?",
  "options": [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  "correct": 1,            // Index 0-3 (index of correct answer)
  "difficulty": "easy",    // easy, medium, advanced
  "topic": "Topic Name",
  "pageReference": "15",   // Page number from book
  "explanation": "Why this answer is correct...",
  "explanationUrdu": ""    // Optional Urdu translation
}
```

## 🚀 Deployment to GitHub Pages

### Step 1: Create Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name: `agent-factory-book-quizzes`
4. Make it **PUBLIC**
5. Click "Create Repository"

### Step 2: Initial Setup
```bash
cd web_app
git init
git add .
git commit -m "Initial commit: Agent Factory Book Quizzes"
git branch -M main
git remote add origin https://github.com/your-username/agent-factory-book-quizzes.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "Deploy from a branch"
4. Branch: `main`, Folder: `/root`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Quiz
Visit: `https://your-username.github.io/agent-factory-book-quizzes`

## 📈 Analytics & Tracking

The app tracks:
- Questions answered
- Correct/incorrect counts
- Score percentage
- Time spent
- Performance by difficulty
- Performance by topic
- Quiz history

All data stored locally - no external tracking.

## ♿ Accessibility

- Keyboard navigation support
- Color contrast compliance
- Screen reader compatible
- Mobile touch-friendly (44px+ targets)
- Respects `prefers-reduced-motion`

## 📝 License

MIT License - Feel free to use and modify for educational purposes.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues or suggestions:
1. Open an issue on GitHub
2. Provide detailed description
3. Include browser/OS information

## 🎓 Learning Outcomes

After completing these quizzes, you'll understand:
- ✅ The Agent Factory paradigm and AI maturity model
- ✅ How to communicate clearly with AI using Markdown
- ✅ General Agents and Claude Code workflows
- ✅ Context engineering principles
- ✅ Spec-driven development methodology
- ✅ Seven principles of agent problem-solving
- ✅ How to build reliable AI-native software

## 📚 Resources

- **Agent Factory Book**: https://agentfactory.panaversity.org
- **Panaversity**: https://www.panaversity.org
- **GitHub Pages Guide**: https://docs.github.com/en/pages

## 🏆 Best Practices

### For Students
1. Start with Easy questions
2. Progress to Medium level
3. Challenge yourself with Advanced
4. Review incorrect answers
5. Study page references
6. Retake to improve score

### For Educators
1. Use as supplementary material
2. Assign by chapter or difficulty
3. Track student progress
4. Review performance analytics
5. Customize with your own questions

## 🔐 Data Privacy

- **All data stored locally** in browser
- No data sent to external servers
- No cookies or tracking
- No user registration required
- Completely anonymous usage
- Clear all data anytime

## 📦 Version History

### v1.0 (Current)
- 516 comprehensive questions
- 6 book chapters
- 3 difficulty levels
- Responsive design
- Dark mode support
- Results analytics
- Local storage persistence

## 🎯 Success Metrics

**Aim for these benchmarks:**
- Easy Level: 85%+
- Medium Level: 75%+
- Advanced Level: 70%+
- Overall: 75%+ for mastery

## 🚀 Future Enhancements

Planned features:
- Quiz timer mode
- Leaderboard
- User accounts
- Mobile app
- PDF export
- Video explanations
- Discussion forum
- AI-generated questions per topic

## ⭐ Star & Share

If you find this helpful:
- ⭐ Star the repository
- 🔗 Share with friends
- 📢 Spread the word about Agent Factory

---

**Created**: February 2026
**Version**: 1.0
**Total Questions**: 516
**Chapters**: 6
**Difficulty Levels**: 3
**Status**: Ready for Production

**Happy Learning! 🚀**

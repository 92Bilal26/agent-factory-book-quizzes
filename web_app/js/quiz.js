/* ============================================
   QUIZ.JS - QUIZ UTILITY FUNCTIONS
   ============================================ */

const QuizUtils = {
    // Format time
    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    },

    // Get difficulty color
    getDifficultyColor(difficulty) {
        const colors = {
            easy: '#10b981',      // Green
            medium: '#f59e0b',    // Yellow
            advanced: '#ef4444',  // Red
        };
        return colors[difficulty] || '#2563eb';
    },

    // Get difficulty emoji
    getDifficultyEmoji(difficulty) {
        const emojis = {
            easy: '✅',
            medium: '⚡',
            advanced: '🚀',
        };
        return emojis[difficulty] || '📝';
    },

    // Shuffle array
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },

    // Get unique topics
    getUniqueTopics(questions) {
        const topics = new Set(questions.map(q => q.topic));
        return Array.from(topics).sort();
    },

    // Calculate statistics
    calculateStats(userAnswers, questions) {
        let correct = 0;
        let incorrect = 0;
        let skipped = 0;

        questions.forEach(question => {
            const userAnswer = userAnswers[question.id];

            if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
                skipped++;
            } else if (userAnswer === question.correct) {
                correct++;
            } else {
                incorrect++;
            }
        });

        const total = questions.length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        return {
            correct,
            incorrect,
            skipped,
            total,
            percentage
        };
    },

    // Get statistics by difficulty
    getStatsByDifficulty(userAnswers, questions) {
        const difficulties = ['easy', 'medium', 'advanced'];
        const stats = {};

        difficulties.forEach(difficulty => {
            const difficultyQuestions = questions.filter(q => q.difficulty === difficulty);
            stats[difficulty] = this.calculateStats(userAnswers, difficultyQuestions);
        });

        return stats;
    },

    // Get statistics by topic
    getStatsByTopic(userAnswers, questions) {
        const topics = this.getUniqueTopics(questions);
        const stats = {};

        topics.forEach(topic => {
            const topicQuestions = questions.filter(q => q.topic === topic);
            stats[topic] = this.calculateStats(userAnswers, topicQuestions);
        });

        return stats;
    },

    // Download CSV results
    downloadCSV(quizName, stats, userAnswers, questions) {
        const timestamp = new Date().toLocaleString();
        let csv = 'Question Quiz Results Report\n';
        csv += `Quiz: ${quizName}\n`;
        csv += `Date: ${timestamp}\n`;
        csv += `Overall Score: ${stats.percentage}%\n\n`;
        csv += `Question ID,Question,Your Answer,Correct Answer,Result\n`;

        questions.forEach(question => {
            const userAnswer = userAnswers[question.id];
            const userOption = userAnswer !== undefined ? question.options[userAnswer] : 'Skipped';
            const correctOption = question.options[question.correct];
            const result = userAnswer === question.correct ? 'Correct' : userAnswer === undefined ? 'Skipped' : 'Incorrect';

            const questionText = `"${question.question.replace(/"/g, '""')}"`;
            const userOptionText = `"${userOption.replace(/"/g, '""')}"`;
            const correctOptionText = `"${correctOption.replace(/"/g, '""')}"`;

            csv += `${question.id},${questionText},${userOptionText},${correctOptionText},${result}\n`;
        });

        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
        element.setAttribute('download', `quiz-results-${Date.now()}.csv`);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    },

    // Validate question format
    validateQuestion(question) {
        const required = ['id', 'question', 'options', 'correct', 'difficulty', 'topic', 'pageReference', 'explanation'];
        const errors = [];

        for (let field of required) {
            if (!(field in question)) {
                errors.push(`Missing field: ${field}`);
            }
        }

        if (!Array.isArray(question.options) || question.options.length !== 4) {
            errors.push('Options must be an array of exactly 4 items');
        }

        if (typeof question.correct !== 'number' || question.correct < 0 || question.correct > 3) {
            errors.push('Correct must be a number between 0-3');
        }

        if (!['easy', 'medium', 'advanced'].includes(question.difficulty)) {
            errors.push('Difficulty must be easy, medium, or advanced');
        }

        return errors;
    },

    // Format page reference for display
    formatPageReference(pageRef) {
        return `Page ${pageRef}`;
    },

    // Get chapter title from ID
    getChapterTitle(chapterId) {
        const titles = {
            'chapter1': 'Agent Factory Paradigm',
            'chapter2': 'Markdown Writing Instructions',
            'chapter3': 'General Agents & Claude Code',
            'chapter4': 'Context Engineering',
            'chapter5': 'Spec-Driven Development',
            'chapter6': 'Seven Principles of Agent Problem Solving'
        };
        return titles[chapterId] || 'Unknown Chapter';
    },

    // Get chapter description
    getChapterDescription(chapterId) {
        const descriptions = {
            'chapter1': 'Learn the Agent Factory paradigm, the evolution from General to Custom Agents, and the foundation of AI-native development.',
            'chapter2': 'Master Markdown as the communication standard between humans and AI agents.',
            'chapter3': 'Explore Claude Code as a general agent tool and how to use it effectively in your workflow.',
            'chapter4': 'Understand context engineering - the discipline that separates quality Digital FTEs from expensive toys.',
            'chapter5': 'Learn Spec-Driven Development - the methodology for building AI products that work.',
            'chapter6': 'Master the seven principles of operational excellence in agent problem-solving.'
        };
        return descriptions[chapterId] || 'Learn from this chapter';
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuizUtils;
}

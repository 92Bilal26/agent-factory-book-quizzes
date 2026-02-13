/* ============================================================
   APP.JS  —  Agent Factory Quizzes
   Main application logic — QuizApp class
   ============================================================
   LOAD ORDER (as declared in index.html):
     1. quiz.js      → QuizUtils  (helpers, CSV, validation)
     2. storage.js   → Storage    (localStorage CRUD)
     3. app.js       ← YOU ARE HERE
     4-9. data/questions-chapter{1-6}.js
          Each file must expose a global:
            window.QUIZ_DATA_CHAPTER1 … QUIZ_DATA_CHAPTER6
          Each global is an object: { questions: [...] }
   ============================================================ */

'use strict';

/* ============================================================
   QUIZ SET CONFIGURATION
   ============================================================ */
const QUIZ_SETS = {
    chapter1: {
        id:          'chapter1',
        label:       'Chapter 1 — Agent Factory Paradigm',
        dataKey:     'QUIZ_DATA_CHAPTER1',
        title:       'Agent Factory Paradigm',
        description: 'Learn the Agent Factory paradigm, the evolution from General to Custom Agents, and the foundation of AI-native development.',
        icon:        '🏭',
        color:       '#2563eb',
    },
    chapter2: {
        id:          'chapter2',
        label:       'Chapter 2 — Markdown Writing Instructions',
        dataKey:     'QUIZ_DATA_CHAPTER2',
        title:       'Markdown Writing Instructions',
        description: 'Master Markdown as the communication standard between humans and AI agents.',
        icon:        '📝',
        color:       '#7c3aed',
    },
    chapter3: {
        id:          'chapter3',
        label:       'Chapter 3 — General Agents & Claude Code',
        dataKey:     'QUIZ_DATA_CHAPTER3',
        title:       'General Agents & Claude Code',
        description: 'Explore Claude Code as a general agent tool and how to use it effectively in your workflow.',
        icon:        '🤖',
        color:       '#0891b2',
    },
    chapter4: {
        id:          'chapter4',
        label:       'Chapter 4 — Context Engineering',
        dataKey:     'QUIZ_DATA_CHAPTER4',
        title:       'Context Engineering',
        description: 'Understand context engineering — the discipline that separates quality Digital FTEs from expensive toys.',
        icon:        '🔧',
        color:       '#059669',
    },
    chapter5: {
        id:          'chapter5',
        label:       'Chapter 5 — Spec-Driven Development',
        dataKey:     'QUIZ_DATA_CHAPTER5',
        title:       'Spec-Driven Development',
        description: 'Learn Spec-Driven Development — the methodology for building AI products that work.',
        icon:        '📋',
        color:       '#d97706',
    },
    chapter6: {
        id:          'chapter6',
        label:       'Chapter 6 — Seven Principles',
        dataKey:     'QUIZ_DATA_CHAPTER6',
        title:       'Seven Principles of Agent Problem Solving',
        description: 'Master the seven principles of operational excellence in agent problem-solving.',
        icon:        '⭐',
        color:       '#dc2626',
    },
};

/* ============================================================
   QUIZAPP CLASS
   ============================================================ */
class QuizApp {
    constructor() {
        /* ---- quiz set state ---- */
        this.currentQuizSetId  = 'chapter1';
        this.allQuestions      = [];       // raw questions from data file

        /* ---- active quiz state ---- */
        this.activeQuestions   = [];       // filtered/subset used in this run
        this.currentIndex      = 0;
        this.userAnswers       = {};       // { [questionId]: answerIndex | 'skipped' }
        this.answeredFlags     = {};       // { [questionId]: true } questions already answered
        this.quizStartTime     = null;
        this.quizEndTime       = null;
        this.isQuizActive      = false;

        /* ---- filter state for welcome screen ---- */
        this.selectedDifficulty = '';
        this.selectedTopic      = '';

        /* ---- search/filter state inside quiz ---- */
        this.quizDifficultyFilter = '';
        this.quizTopicFilter      = '';
        this.quizSearchQuery      = '';
        this._searchDebounceTimer = null;

        /* ---- review state ---- */
        this.reviewFilterValue = '';

        /* ---- theme ---- */
        this.isDarkMode = false;

        /* ---- session restore flag ---- */
        this._sessionRestored = false;

        /* ---- bind methods that need 'this' in event handlers ---- */
        this._onSelectAnswer     = this._onSelectAnswer.bind(this);
        this._onSearchInput      = this._onSearchInput.bind(this);
        this._onKeyboardNav      = this._onKeyboardNav.bind(this);
    }

    /* ============================================================
       BOOT
       ============================================================ */

    /** Entry point — called once DOM is ready */
    init() {
        try {
            Storage.init();
            this._applyStoredTheme();
            this._populateQuizSetSelector();
            this._restoreSelectedQuizSet();
            this.loadQuestionsData();
            this._attachEventListeners();
            this._updateWelcomeStats();
            this.showScreen('welcome');
            this._tryRestoreSession();
            console.info('[QuizApp] Initialised successfully.');
        } catch (err) {
            console.error('[QuizApp] Initialisation error:', err);
        }
    }

    /* ============================================================
       QUIZ SET MANAGEMENT
       ============================================================ */

    /**
     * Load the questions array for the currently selected quiz set.
     * Returns the count of valid questions loaded (0 on failure).
     */
    loadQuestionsData() {
        const cfg = QUIZ_SETS[this.currentQuizSetId];
        if (!cfg) {
            console.error(`[QuizApp] Unknown quiz set id: ${this.currentQuizSetId}`);
            this.allQuestions = [];
            return 0;
        }

        const raw = window[cfg.dataKey];
        if (!raw) {
            // Data file not loaded yet — the <script> tags come after app.js;
            // populateTopics / stats will just be empty until the file loads.
            console.warn(`[QuizApp] Data not yet available for ${cfg.dataKey}`);
            this.allQuestions = [];
            return 0;
        }

        const questions = Array.isArray(raw) ? raw : (raw && Array.isArray(raw.questions) ? raw.questions : []);

        // Validate every question; skip malformed ones
        const valid = [];
        questions.forEach((q, idx) => {
            const errors = QuizUtils.validateQuestion(q);
            if (errors.length === 0) {
                valid.push(q);
            } else {
                console.warn(`[QuizApp] Skipping question at index ${idx} in ${cfg.dataKey}:`, errors);
            }
        });

        this.allQuestions = valid;
        console.info(`[QuizApp] Loaded ${valid.length} valid questions from ${cfg.dataKey}`);
        return valid.length;
    }

    /**
     * Switch to a different quiz set. Saves preference to storage.
     * @param {string} quizSetId
     */
    switchQuizSet(quizSetId) {
        if (!QUIZ_SETS[quizSetId]) {
            console.error(`[QuizApp] switchQuizSet: unknown id "${quizSetId}"`);
            return;
        }
        this.currentQuizSetId   = quizSetId;
        this.selectedDifficulty = '';
        this.selectedTopic      = '';

        Storage.saveSelectedQuizSet(quizSetId);
        this.loadQuestionsData();
        this.populateTopics();
        this._updateWelcomeStats();
        this._syncQuizSetSelector();
    }

    /* ============================================================
       TOPIC MANAGEMENT
       ============================================================ */

    /**
     * Populate the topic filter buttons on the welcome screen and the
     * in-quiz topic dropdown from the current quiz set's questions.
     */
    populateTopics() {
        const topics = QuizUtils.getUniqueTopics(this.allQuestions);

        /* --- welcome screen topic buttons --- */
        const container = document.getElementById('topicFilter');
        if (container) {
            container.innerHTML = '';

            // "All Topics" button
            const allBtn = this._createTopicButton('All Topics', '', this.selectedTopic === '');
            container.appendChild(allBtn);

            topics.forEach(topic => {
                const btn = this._createTopicButton(topic, topic, this.selectedTopic === topic);
                container.appendChild(btn);
            });
        }

        /* --- in-quiz topic dropdown --- */
        const select = document.getElementById('topicFilter2');
        if (select) {
            const current = select.value;
            select.innerHTML = '<option value="">All Topics</option>';
            topics.forEach(topic => {
                const opt = document.createElement('option');
                opt.value   = topic;
                opt.textContent = topic;
                if (topic === current) opt.selected = true;
                select.appendChild(opt);
            });
        }
    }

    /** @private Helper: create a topic filter button */
    _createTopicButton(label, value, isActive) {
        const btn = document.createElement('button');
        btn.className   = 'topic-btn' + (isActive ? ' active' : '');
        btn.textContent = label;
        btn.dataset.topic = value;
        btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => this._onTopicButtonClick(value, btn));
        return btn;
    }

    /* ============================================================
       QUIZ LIFECYCLE
       ============================================================ */

    /**
     * Start a new quiz run.
     * @param {string} [difficulty='']  - '' | 'easy' | 'medium' | 'advanced'
     * @param {string} [topic='']       - '' or specific topic string
     */
    startQuiz(difficulty = '', topic = '') {
        // Reload data in case data files loaded after init()
        if (this.allQuestions.length === 0) {
            this.loadQuestionsData();
        }

        if (this.allQuestions.length === 0) {
            this._showError('No questions available for this chapter. Please make sure the data file is loaded.');
            return;
        }

        // Filter questions
        let filtered = [...this.allQuestions];

        if (difficulty) {
            filtered = filtered.filter(q => q.difficulty === difficulty);
        }
        if (topic) {
            filtered = filtered.filter(q => q.topic === topic);
        }

        if (filtered.length === 0) {
            this._showError(`No questions found for the selected filters (difficulty: "${difficulty || 'all'}", topic: "${topic || 'all'}").`);
            return;
        }

        // Clear previous state
        Storage.clearQuizState(this.currentQuizSetId);
        Storage.clearAnswers(this.currentQuizSetId);

        this.activeQuestions   = filtered;
        this.currentIndex      = 0;
        this.userAnswers       = {};
        this.answeredFlags     = {};
        this.isQuizActive      = true;
        this.quizStartTime     = Date.now();
        this.quizEndTime       = null;

        // Reset in-quiz filters to match the start filters
        this.quizDifficultyFilter = difficulty;
        this.quizTopicFilter      = topic;
        this.quizSearchQuery      = '';

        // Sync toolbar UI
        const diffEl = document.getElementById('difficultyFilter');
        if (diffEl) diffEl.value = difficulty;
        const topicEl = document.getElementById('topicFilter2');
        if (topicEl) topicEl.value = topic;
        const searchEl = document.getElementById('searchInput');
        if (searchEl) searchEl.value = '';

        this._saveCurrentSession();
        this.showScreen('quiz');
        this.displayQuestion();
    }

    /**
     * Handle user selecting an answer option.
     * @param {number} optionIndex  - 0-3
     */
    selectAnswer(optionIndex) {
        if (!this.isQuizActive) return;
        const question = this.activeQuestions[this.currentIndex];
        if (!question) return;

        // Prevent re-answering an already answered question
        if (this.answeredFlags[question.id]) return;

        this.userAnswers[question.id]  = optionIndex;
        this.answeredFlags[question.id] = true;

        const isCorrect = optionIndex === question.correct;
        this._applyAnswerFeedback(optionIndex, question.correct, isCorrect, question);
        this._saveCurrentSession();
        this.updateProgress();
    }

    /** Navigate to the next question */
    nextQuestion() {
        if (!this.isQuizActive) return;

        if (this.currentIndex < this.activeQuestions.length - 1) {
            this.currentIndex++;
            this.displayQuestion();
        } else {
            // Reached the end — trigger results
            this._finishQuiz();
        }
    }

    /** Navigate to the previous question */
    previousQuestion() {
        if (!this.isQuizActive) return;
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.displayQuestion();
        }
    }

    /** Skip the current question (records as skipped) */
    skipQuestion() {
        if (!this.isQuizActive) return;
        const question = this.activeQuestions[this.currentIndex];
        if (!question) return;

        if (!this.answeredFlags[question.id]) {
            // Mark as skipped only if not yet answered
            this.userAnswers[question.id]  = undefined;   // undefined = skipped
            this.answeredFlags[question.id] = true;
        }

        this.nextQuestion();
    }

    /* ============================================================
       DISPLAY METHODS
       ============================================================ */

    /**
     * Render the current question to the quiz screen.
     */
    displayQuestion() {
        const question = this.activeQuestions[this.currentIndex];
        if (!question) {
            console.warn('[QuizApp] displayQuestion: no question at index', this.currentIndex);
            return;
        }

        /* --- Question text --- */
        this._setTextContent('questionText', question.question);

        /* --- Meta badges --- */
        this._applyDifficultyBadge('difficultyBadge', question.difficulty);
        this._setTextContent('topicBadge', question.topic || '—');
        this._setTextContent('pageRefBadge', QuizUtils.formatPageReference(question.pageReference));

        /* --- Options --- */
        const letters = ['A', 'B', 'C', 'D'];
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, i) => {
            const textEl = btn.querySelector('.option-text') || document.getElementById(`option${i}`);
            if (textEl) textEl.textContent = question.options[i] || '';

            const letterEl = btn.querySelector('.option-letter');
            if (letterEl) letterEl.textContent = letters[i];

            // Reset state classes
            btn.classList.remove('correct', 'incorrect', 'selected');
            btn.disabled = false;

            // If already answered — re-apply visual state without feedback
            if (this.answeredFlags[question.id]) {
                const userAns = this.userAnswers[question.id];
                btn.disabled = true;
                if (i === question.correct) {
                    btn.classList.add('correct');
                } else if (userAns !== undefined && i === userAns && userAns !== question.correct) {
                    btn.classList.add('incorrect');
                }
            }
        });

        /* --- Feedback section --- */
        const feedbackSection = document.getElementById('feedbackSection');
        if (feedbackSection) {
            if (this.answeredFlags[question.id]) {
                const userAns   = this.userAnswers[question.id];
                const isCorrect = userAns === question.correct;
                const isSkipped = userAns === undefined;
                this._renderFeedback(question, isCorrect, isSkipped);
                feedbackSection.style.display = 'block';
            } else {
                feedbackSection.style.display = 'none';
            }
        }

        /* --- Navigation button states --- */
        this._updateNavButtons();

        /* --- Progress --- */
        this.updateProgress();
    }

    /**
     * Render the results screen with score, stats, charts.
     */
    displayResults() {
        const stats = QuizUtils.calculateStats(this.userAnswers, this.activeQuestions);

        /* --- Score circle --- */
        const scoreEl = document.getElementById('finalScore');
        if (scoreEl) scoreEl.textContent = `${stats.percentage}%`;

        // Drive conic-gradient via CSS custom property
        const scoreCircle = document.querySelector('.score-circle');
        if (scoreCircle) {
            scoreCircle.style.setProperty('--score-pct', stats.percentage);
        }

        /* --- Stats grid --- */
        this._setTextContent('correctCount',   stats.correct);
        this._setTextContent('incorrectCount',  stats.incorrect);
        this._setTextContent('skippedCount',    stats.skipped);

        const elapsed = this.quizEndTime && this.quizStartTime
            ? Math.round((this.quizEndTime - this.quizStartTime) / 1000)
            : 0;
        this._setTextContent('timeSpent', QuizUtils.formatTime(elapsed));

        /* --- Breakdown charts --- */
        this._renderDifficultyBreakdown();
        this._renderTopicBreakdown();

        /* --- Headline copy based on score --- */
        const headEl = document.querySelector('#resultsScreen h2');
        if (headEl) {
            if (stats.percentage >= 90)       headEl.textContent = 'Outstanding! 🏆';
            else if (stats.percentage >= 75)  headEl.textContent = 'Great Work! 🎉';
            else if (stats.percentage >= 60)  headEl.textContent = 'Good Effort! 👍';
            else if (stats.percentage >= 40)  headEl.textContent = 'Keep Practising! 📚';
            else                              headEl.textContent = 'Room to Grow! 💪';
        }
    }

    /**
     * Render the full answer review screen.
     */
    displayReview() {
        const container = document.getElementById('reviewList');
        if (!container) return;

        container.innerHTML = '';

        let questions = [...this.activeQuestions];

        // Apply review filter
        if (this.reviewFilterValue === 'correct') {
            questions = questions.filter(q => this.userAnswers[q.id] === q.correct);
        } else if (this.reviewFilterValue === 'incorrect') {
            questions = questions.filter(q => {
                const ans = this.userAnswers[q.id];
                return ans !== undefined && ans !== q.correct;
            });
        } else if (this.reviewFilterValue === 'skipped') {
            questions = questions.filter(q => this.userAnswers[q.id] === undefined);
        }

        if (questions.length === 0) {
            container.innerHTML = '<p style="text-align:center;padding:2rem;color:var(--text-muted);">No questions match the selected filter.</p>';
            return;
        }

        questions.forEach((q, localIdx) => {
            const globalIdx  = this.activeQuestions.indexOf(q);
            const userAns    = this.userAnswers[q.id];
            const isSkipped  = userAns === undefined || userAns === null || userAns === '';
            const isCorrect  = !isSkipped && userAns === q.correct;

            const statusClass  = isSkipped ? 'review-skipped' : isCorrect ? 'review-correct' : 'review-incorrect';
            const statusBadge  = isSkipped ? 'Skipped' : isCorrect ? 'Correct' : 'Incorrect';
            const badgeClass   = isSkipped ? 'badge-skipped' : isCorrect ? 'badge-correct' : 'badge-incorrect';

            /* Build option rows */
            const letters = ['A', 'B', 'C', 'D'];
            let optionsHTML = '';
            q.options.forEach((opt, i) => {
                let cls = 'review-option';
                if (i === q.correct) {
                    cls += ' review-option-correct';
                } else if (!isSkipped && i === userAns) {
                    cls += ' review-option-user-wrong';
                }
                optionsHTML += `
                    <div class="${cls}">
                        <span class="review-option-letter">${letters[i]}</span>
                        <span>${this._escapeHTML(opt)}</span>
                    </div>`;
            });

            const item = document.createElement('div');
            item.className = `review-item ${statusClass}`;
            item.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Q${globalIdx + 1}</span>
                    <span class="review-question-text">${this._escapeHTML(q.question)}</span>
                    <span class="badge ${badgeClass}">${statusBadge}</span>
                </div>
                <div class="question-meta" style="margin-bottom:1rem;">
                    <span class="badge ${this._difficultyBadgeClass(q.difficulty)}">${this._capFirst(q.difficulty)}</span>
                    <span class="badge topic-badge">${this._escapeHTML(q.topic || '')}</span>
                    <span class="badge topic-badge">${QuizUtils.formatPageReference(q.pageReference)}</span>
                </div>
                <div class="review-options">${optionsHTML}</div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${this._escapeHTML(q.explanation)}
                </div>`;

            container.appendChild(item);
        });
    }

    /**
     * Update the progress bar and text indicator.
     */
    updateProgress() {
        const total    = this.activeQuestions.length;
        const answered = Object.keys(this.answeredFlags).length;
        const current  = this.currentIndex + 1;
        const pct      = total > 0 ? Math.round((answered / total) * 100) : 0;

        this._setTextContent('progressText', `Question ${current}/${total}`);

        const fill = document.getElementById('progressFill');
        if (fill) fill.style.width = `${pct}%`;

        /* Live score (answered only, no skipped penalty) */
        const correctSoFar = this.activeQuestions
            .filter(q => this.answeredFlags[q.id] && this.userAnswers[q.id] === q.correct)
            .length;
        const scorePct = answered > 0 ? Math.round((correctSoFar / answered) * 100) : 0;
        this._setTextContent('scoreDisplay', `Score: ${scorePct}%`);
    }

    /* ============================================================
       RESULTS CALCULATION
       ============================================================ */

    /**
     * Compute and store final results, then show the results screen.
     */
    calculateResults() {
        this.quizEndTime  = Date.now();
        this.isQuizActive = false;

        const elapsed     = Math.round((this.quizEndTime - this.quizStartTime) / 1000);
        const stats       = QuizUtils.calculateStats(this.userAnswers, this.activeQuestions);
        const byDiff      = QuizUtils.getStatsByDifficulty(this.userAnswers, this.activeQuestions);
        const byTopic     = QuizUtils.getStatsByTopic(this.userAnswers, this.activeQuestions);

        const results = {
            quizSetId:   this.currentQuizSetId,
            quizSetTitle: QUIZ_SETS[this.currentQuizSetId]?.title || this.currentQuizSetId,
            totalQuestions: stats.total,
            correct:     stats.correct,
            incorrect:   stats.incorrect,
            skipped:     stats.skipped,
            percentage:  stats.percentage,
            timeSeconds: elapsed,
            byDifficulty: byDiff,
            byTopic:      byTopic,
            timestamp:    new Date().toISOString(),
        };

        /* Persist */
        Storage.saveResults(results, this.currentQuizSetId);
        Storage.addToResultsHistory(results, this.currentQuizSetId);
        Storage.clearQuizState(this.currentQuizSetId);

        return results;
    }

    /* ============================================================
       SCREEN MANAGEMENT
       ============================================================ */

    /**
     * Show one screen and hide all others.
     * @param {'welcome'|'quiz'|'results'|'review'} screenName
     */
    showScreen(screenName) {
        const screens = {
            welcome: 'welcomeScreen',
            quiz:    'quizScreen',
            results: 'resultsScreen',
            review:  'reviewScreen',
        };

        Object.entries(screens).forEach(([name, id]) => {
            const el = document.getElementById(id);
            if (!el) return;
            if (name === screenName) {
                el.classList.add('active');
                el.removeAttribute('aria-hidden');
            } else {
                el.classList.remove('active');
                el.setAttribute('aria-hidden', 'true');
            }
        });

        // Scroll to top on screen change
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ============================================================
       THEME TOGGLE
       ============================================================ */

    /** Toggle between light and dark mode */
    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        this._applyTheme();
        Storage.saveTheme(this.isDarkMode);
    }

    /* ============================================================
       PRIVATE HELPERS — EVENT HANDLERS
       ============================================================ */

    /** @private Attach all DOM event listeners */
    _attachEventListeners() {
        /* --- Quiz set selector --- */
        this._on('quizSetSelector', 'change', e => this.switchQuizSet(e.target.value));

        /* --- Welcome screen mode buttons --- */
        this._on('startAllBtn',      'click', () => this.startQuiz('', this.selectedTopic));
        this._on('startEasyBtn',     'click', () => this.startQuiz('easy', this.selectedTopic));
        this._on('startMediumBtn',   'click', () => this.startQuiz('medium', this.selectedTopic));
        this._on('startAdvancedBtn', 'click', () => this.startQuiz('advanced', this.selectedTopic));

        /* --- In-quiz toolbar filters --- */
        this._on('difficultyFilter', 'change', e => {
            this.quizDifficultyFilter = e.target.value;
            this._applyInQuizFilter();
        });
        this._on('topicFilter2', 'change', e => {
            this.quizTopicFilter = e.target.value;
            this._applyInQuizFilter();
        });
        this._on('searchInput', 'input', this._onSearchInput);

        /* --- Answer option buttons (delegated) --- */
        const optionsContainer = document.querySelector('.options-container');
        if (optionsContainer) {
            optionsContainer.addEventListener('click', this._onSelectAnswer);
        }

        /* --- Quiz navigation --- */
        this._on('prevBtn',  'click', () => this.previousQuestion());
        this._on('nextBtn',  'click', () => this.nextQuestion());
        this._on('skipBtn',  'click', () => this.skipQuestion());
        this._on('quitBtn',  'click', () => this._confirmQuit());

        /* --- Results screen buttons --- */
        this._on('reviewBtn',   'click', () => this._goToReview());
        this._on('downloadBtn', 'click', () => this._downloadResults());
        this._on('retakeBtn',   'click', () => this._retakeQuiz());
        this._on('homeBtn',     'click', () => this._goHome());

        /* --- Review screen --- */
        this._on('reviewFilter',     'change', e => {
            this.reviewFilterValue = e.target.value;
            this.displayReview();
        });
        this._on('backToResultsBtn', 'click', () => this.showScreen('results'));
        this._on('homeBtn2',         'click', () => this._goHome());

        /* --- Nav bar --- */
        this._on('themeToggle',  'click', () => this.toggleTheme());
        this._on('progressBtn',  'click', () => this._openProgressModal());
        this._on('aboutBtn',     'click', () => this._openModal('aboutModal'));

        /* --- Modal close buttons (all .modal-close spans) --- */
        document.querySelectorAll('.modal-close').forEach(el => {
            el.addEventListener('click', () => this._closeAllModals());
        });

        /* --- Modal backdrop click to close --- */
        document.querySelectorAll('.modal').forEach(el => {
            el.addEventListener('click', e => {
                if (e.target === el) this._closeAllModals();
            });
        });

        /* --- Keyboard navigation --- */
        document.addEventListener('keydown', this._onKeyboardNav);
    }

    /** @private Delegated click handler for answer options */
    _onSelectAnswer(e) {
        const btn = e.target.closest('.option-btn');
        if (!btn || btn.disabled) return;
        const optionIndex = parseInt(btn.dataset.option, 10);
        if (!isNaN(optionIndex)) {
            this.selectAnswer(optionIndex);
        }
    }

    /** @private Debounced handler for search input */
    _onSearchInput(e) {
        clearTimeout(this._searchDebounceTimer);
        this._searchDebounceTimer = setTimeout(() => {
            this.quizSearchQuery = e.target.value.trim().toLowerCase();
            this._applyInQuizFilter();
        }, 300);
    }

    /** @private Keyboard shortcuts */
    _onKeyboardNav(e) {
        // Only act when quiz screen is active and no modals are open
        const quizScreen = document.getElementById('quizScreen');
        if (!quizScreen || !quizScreen.classList.contains('active')) return;
        if (document.querySelector('.modal.open')) return;

        // Ignore when user is typing in an input/select
        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;

        switch (e.key) {
            case 'ArrowRight':
            case 'n':
            case 'N':
                e.preventDefault();
                this.nextQuestion();
                break;
            case 'ArrowLeft':
            case 'p':
            case 'P':
                e.preventDefault();
                this.previousQuestion();
                break;
            case 's':
            case 'S':
                e.preventDefault();
                this.skipQuestion();
                break;
            case '1': this._triggerOptionKey(0); break;
            case '2': this._triggerOptionKey(1); break;
            case '3': this._triggerOptionKey(2); break;
            case '4': this._triggerOptionKey(3); break;
        }
    }

    /** @private Select an answer by keyboard digit */
    _triggerOptionKey(index) {
        const question = this.activeQuestions[this.currentIndex];
        if (!question || this.answeredFlags[question.id]) return;
        this.selectAnswer(index);
    }

    /** @private Topic button click (welcome screen) */
    _onTopicButtonClick(topicValue, clickedBtn) {
        this.selectedTopic = topicValue;

        // Update active state on all topic buttons
        const container = document.getElementById('topicFilter');
        if (container) {
            container.querySelectorAll('.topic-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.topic === topicValue);
            });
        }

        this._updateWelcomeStats();
    }

    /* ============================================================
       PRIVATE HELPERS — IN-QUIZ FILTER
       ============================================================ */

    /**
     * Re-apply difficulty/topic/search filters within an active quiz session.
     * Builds a new subset from allQuestions and repositions the index.
     */
    _applyInQuizFilter() {
        if (!this.isQuizActive) return;

        let base = [...this.allQuestions];

        if (this.quizDifficultyFilter) {
            base = base.filter(q => q.difficulty === this.quizDifficultyFilter);
        }
        if (this.quizTopicFilter) {
            base = base.filter(q => q.topic === this.quizTopicFilter);
        }
        if (this.quizSearchQuery) {
            base = base.filter(q =>
                q.question.toLowerCase().includes(this.quizSearchQuery) ||
                (q.topic || '').toLowerCase().includes(this.quizSearchQuery)
            );
        }

        if (base.length === 0) {
            // Notify but keep existing questions to avoid empty state
            console.info('[QuizApp] Filter produced 0 questions — filter ignored.');
            return;
        }

        // Attempt to keep the currently displayed question in view
        const currentQId  = this.activeQuestions[this.currentIndex]?.id;
        this.activeQuestions = base;
        const newIdx = base.findIndex(q => q.id === currentQId);
        this.currentIndex = newIdx >= 0 ? newIdx : 0;

        this.displayQuestion();
        this.updateProgress();
    }

    /* ============================================================
       PRIVATE HELPERS — DISPLAY / RENDER
       ============================================================ */

    /** @private Apply visual answer feedback after an answer is selected */
    _applyAnswerFeedback(selectedIndex, correctIndex, isCorrect, question) {
        const optionBtns = document.querySelectorAll('.option-btn');
        optionBtns.forEach((btn, i) => {
            btn.disabled = true;
            if (i === correctIndex) {
                btn.classList.add('correct');
            } else if (i === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        this._renderFeedback(question, isCorrect, false);

        const feedbackSection = document.getElementById('feedbackSection');
        if (feedbackSection) {
            feedbackSection.style.display = 'block';
            // Scroll feedback into view smoothly
            feedbackSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    /** @private Render the feedback/explanation block */
    _renderFeedback(question, isCorrect, isSkipped) {
        const container = document.getElementById('feedbackContainer');
        if (!container) return;

        if (isSkipped) {
            container.className = 'feedback-container skipped';
            container.innerHTML = `
                <div class="feedback-title">Question Skipped</div>
                <div class="feedback-explanation">
                    The correct answer was: <strong>${this._escapeHTML(question.options[question.correct])}</strong><br>
                    ${this._escapeHTML(question.explanation)}
                </div>`;
            return;
        }

        container.className = `feedback-container${isCorrect ? '' : ' incorrect'}`;
        const title = isCorrect ? 'Correct!' : 'Incorrect';
        const correctText = isCorrect ? '' : `The correct answer was: <strong>${this._escapeHTML(question.options[question.correct])}</strong><br>`;

        container.innerHTML = `
            <div class="feedback-title">${title}</div>
            <div class="feedback-explanation">
                ${correctText}${this._escapeHTML(question.explanation)}
            </div>`;
    }

    /** @private Render difficulty breakdown bars in results */
    _renderDifficultyBreakdown() {
        const container = document.getElementById('difficultyBreakdown');
        if (!container) return;

        const byDiff = QuizUtils.getStatsByDifficulty(this.userAnswers, this.activeQuestions);
        container.innerHTML = '';

        ['easy', 'medium', 'advanced'].forEach(diff => {
            const s = byDiff[diff];
            if (!s || s.total === 0) return;

            const emoji = QuizUtils.getDifficultyEmoji(diff);
            const pct   = s.percentage;

            container.insertAdjacentHTML('beforeend', `
                <div class="breakdown-item">
                    <div class="breakdown-label">
                        <span>${emoji} ${this._capFirst(diff)}</span>
                        <span>${s.correct}/${s.total} (${pct}%)</span>
                    </div>
                    <div class="breakdown-bar-track">
                        <div class="breakdown-bar-fill" style="width:0%;" data-target="${pct}"></div>
                    </div>
                </div>`);
        });

        this._animateBreakdownBars(container);
    }

    /** @private Render topic breakdown bars in results */
    _renderTopicBreakdown() {
        const container = document.getElementById('topicBreakdown');
        if (!container) return;

        const byTopic = QuizUtils.getStatsByTopic(this.userAnswers, this.activeQuestions);
        container.innerHTML = '';

        Object.entries(byTopic).forEach(([topic, s]) => {
            if (!s || s.total === 0) return;
            const pct = s.percentage;

            container.insertAdjacentHTML('beforeend', `
                <div class="breakdown-item">
                    <div class="breakdown-label">
                        <span>${this._escapeHTML(topic)}</span>
                        <span>${s.correct}/${s.total} (${pct}%)</span>
                    </div>
                    <div class="breakdown-bar-track">
                        <div class="breakdown-bar-fill" style="width:0%;" data-target="${pct}"></div>
                    </div>
                </div>`);
        });

        this._animateBreakdownBars(container);
    }

    /** @private Animate all breakdown bars in a container after a short delay */
    _animateBreakdownBars(container) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                container.querySelectorAll('.breakdown-bar-fill').forEach(bar => {
                    bar.style.width = `${bar.dataset.target}%`;
                });
            }, 100);
        });
    }

    /** @private Update the prev/next/skip button states */
    _updateNavButtons() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const skipBtn = document.getElementById('skipBtn');
        const total   = this.activeQuestions.length;
        const isLast  = this.currentIndex >= total - 1;
        const q       = this.activeQuestions[this.currentIndex];
        const answered = q && this.answeredFlags[q.id];

        if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
        if (nextBtn) nextBtn.textContent = isLast ? 'Finish' : 'Next →';
        if (skipBtn) skipBtn.disabled = !!answered;
    }

    /* ============================================================
       PRIVATE HELPERS — WELCOME SCREEN STATS
       ============================================================ */

    /** @private Update question counts on the welcome screen */
    _updateWelcomeStats() {
        // If data files haven't loaded yet, try re-loading
        if (this.allQuestions.length === 0) {
            this.loadQuestionsData();
        }

        const all = this._filterByTopic(this.allQuestions, this.selectedTopic);

        const byDiff = {
            easy:     all.filter(q => q.difficulty === 'easy').length,
            medium:   all.filter(q => q.difficulty === 'medium').length,
            advanced: all.filter(q => q.difficulty === 'advanced').length,
        };

        this._setTextContent('totalQuestionsCount', this.allQuestions.length);
        this._setTextContent('allQuestionsSmall',   `${all.length} question${all.length !== 1 ? 's' : ''}`);
        this._setTextContent('easyQuestionsSmall',   `${byDiff.easy} question${byDiff.easy !== 1 ? 's' : ''}`);
        this._setTextContent('mediumQuestionsSmall',  `${byDiff.medium} question${byDiff.medium !== 1 ? 's' : ''}`);
        this._setTextContent('advancedQuestionsSmall',`${byDiff.advanced} question${byDiff.advanced !== 1 ? 's' : ''}`);

        // Repopulate topics whenever stats update
        this.populateTopics();
    }

    /** @private Filter questions by topic ('' = all) */
    _filterByTopic(questions, topic) {
        if (!topic) return questions;
        return questions.filter(q => q.topic === topic);
    }

    /* ============================================================
       PRIVATE HELPERS — QUIZ SET SELECTOR
       ============================================================ */

    /** @private Populate the chapter selector dropdown */
    _populateQuizSetSelector() {
        const select = document.getElementById('quizSetSelector');
        if (!select) return;

        select.innerHTML = '';
        Object.values(QUIZ_SETS).forEach(cfg => {
            const opt = document.createElement('option');
            opt.value       = cfg.id;
            opt.textContent = cfg.label;
            select.appendChild(opt);
        });
    }

    /** @private Restore the last-used quiz set from storage */
    _restoreSelectedQuizSet() {
        const saved = Storage.loadSelectedQuizSet();
        if (saved && QUIZ_SETS[saved]) {
            this.currentQuizSetId = saved;
        }
        this._syncQuizSetSelector();
    }

    /** @private Keep the selector dropdown in sync with currentQuizSetId */
    _syncQuizSetSelector() {
        const select = document.getElementById('quizSetSelector');
        if (select) select.value = this.currentQuizSetId;
    }

    /* ============================================================
       PRIVATE HELPERS — SESSION SAVE/RESTORE
       ============================================================ */

    /** @private Save current quiz state to localStorage */
    _saveCurrentSession() {
        if (!this.isQuizActive) return;

        const state = {
            quizSetId:        this.currentQuizSetId,
            currentIndex:     this.currentIndex,
            userAnswers:      this.userAnswers,
            answeredFlags:    this.answeredFlags,
            activeQuestionIds: this.activeQuestions.map(q => q.id),
            quizStartTime:    this.quizStartTime,
            quizDifficultyFilter: this.quizDifficultyFilter,
            quizTopicFilter:  this.quizTopicFilter,
        };
        Storage.saveQuizState(state, this.currentQuizSetId);
        Storage.saveAnswers(this.userAnswers, this.currentQuizSetId);
    }

    /**
     * @private Try to restore an in-progress quiz from localStorage.
     * If a valid session is found, offer to resume it (simple auto-resume here).
     */
    _tryRestoreSession() {
        const savedSetId = Storage.loadSelectedQuizSet();
        const state      = Storage.loadQuizState(savedSetId);

        if (!state || !state.activeQuestionIds || state.activeQuestionIds.length === 0) return;

        // Make sure the data is loaded for this quiz set
        if (savedSetId !== this.currentQuizSetId) {
            this.switchQuizSet(savedSetId);
        } else {
            this.loadQuestionsData();
        }

        // Rebuild activeQuestions list by IDs
        const idMap = {};
        this.allQuestions.forEach(q => { idMap[q.id] = q; });
        const restored = state.activeQuestionIds.map(id => idMap[id]).filter(Boolean);

        if (restored.length === 0) return;

        // Auto-resume
        this.activeQuestions      = restored;
        this.currentIndex         = Math.min(state.currentIndex || 0, restored.length - 1);
        this.userAnswers          = state.userAnswers      || {};
        this.answeredFlags        = state.answeredFlags    || {};
        this.quizStartTime        = state.quizStartTime    || Date.now();
        this.quizDifficultyFilter = state.quizDifficultyFilter || '';
        this.quizTopicFilter      = state.quizTopicFilter      || '';
        this.isQuizActive         = true;
        this._sessionRestored     = true;

        console.info('[QuizApp] Session restored — resuming quiz.');
        this.showScreen('quiz');
        this.displayQuestion();
    }

    /* ============================================================
       PRIVATE HELPERS — FINISH QUIZ
       ============================================================ */

    /** @private Called when the user reaches the end of the question list */
    _finishQuiz() {
        // Mark any un-answered questions as skipped
        this.activeQuestions.forEach(q => {
            if (!this.answeredFlags[q.id]) {
                this.userAnswers[q.id]  = undefined;
                this.answeredFlags[q.id] = true;
            }
        });

        this.calculateResults();
        this.displayResults();
        this.showScreen('results');
    }

    /* ============================================================
       PRIVATE HELPERS — BUTTON ACTIONS
       ============================================================ */

    _goToReview() {
        this.reviewFilterValue = '';
        const reviewFilter = document.getElementById('reviewFilter');
        if (reviewFilter) reviewFilter.value = '';
        this.displayReview();
        this.showScreen('review');
    }

    _downloadResults() {
        const stats = QuizUtils.calculateStats(this.userAnswers, this.activeQuestions);
        const cfg   = QUIZ_SETS[this.currentQuizSetId];
        QuizUtils.downloadCSV(
            cfg ? cfg.title : this.currentQuizSetId,
            stats,
            this.userAnswers,
            this.activeQuestions
        );
    }

    _retakeQuiz() {
        this.startQuiz(this.quizDifficultyFilter, this.quizTopicFilter);
    }

    _goHome() {
        this.isQuizActive = false;
        Storage.clearQuizState(this.currentQuizSetId);
        this._updateWelcomeStats();
        this.showScreen('welcome');
    }

    _confirmQuit() {
        // Simple confirm dialog — replace with custom modal if desired
        if (window.confirm('Are you sure you want to quit the quiz? Your progress will be saved.')) {
            this._saveCurrentSession();
            this.isQuizActive = false;
            this.showScreen('welcome');
        }
    }

    /* ============================================================
       PRIVATE HELPERS — MODALS
       ============================================================ */

    _openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.add('open');
    }

    _closeAllModals() {
        document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
    }

    _openProgressModal() {
        this._renderProgressModal();
        this._openModal('progressModal');
    }

    /** @private Build and render the progress modal content */
    _renderProgressModal() {
        const container = document.getElementById('progressDetails');
        if (!container) return;

        const allProgress = Storage.getAllProgress();
        container.innerHTML = '';

        let hasData = false;

        Object.values(QUIZ_SETS).forEach(cfg => {
            const history = Storage.getResultsHistory(cfg.id, 5);
            const progress = allProgress[cfg.id];

            if (!history.length && !progress) return;
            hasData = true;

            const bestScore = history.length
                ? Math.max(...history.map(r => r.percentage || 0))
                : 0;
            const lastScore = history.length ? history[history.length - 1].percentage || 0 : 0;
            const attempts  = history.length;

            const section = document.createElement('div');
            section.className = 'progress-chapter';
            section.innerHTML = `
                <div class="progress-chapter-name">${cfg.icon} ${cfg.title}</div>
                <div class="progress-chapter-bar">
                    <div class="progress-chapter-fill" style="width:${bestScore}%"></div>
                </div>
                <div class="progress-chapter-stats">
                    Best: ${bestScore}% &nbsp;|&nbsp; Last: ${lastScore}% &nbsp;|&nbsp; Attempts: ${attempts}
                </div>`;

            container.appendChild(section);
        });

        const storInfo = Storage.getStorageInfo();

        if (!hasData) {
            container.innerHTML = `<p style="text-align:center;color:var(--text-muted);">No quiz history yet. Complete a quiz to see your progress here.</p>`;
        }

        container.insertAdjacentHTML('beforeend', `
            <hr style="margin:1rem 0;">
            <div style="font-size:0.75rem;color:var(--text-muted);text-align:right;">
                Storage used: ${storInfo.sizeInKB} KB
            </div>`);
    }

    /* ============================================================
       PRIVATE HELPERS — THEME
       ============================================================ */

    _applyStoredTheme() {
        this.isDarkMode = Storage.loadTheme();
        this._applyTheme();
    }

    _applyTheme() {
        if (this.isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        const btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = this.isDarkMode ? '☀️' : '🌙';
    }

    /* ============================================================
       PRIVATE HELPERS — ERROR DISPLAY
       ============================================================ */

    /** @private Show a temporary error banner at the top of the current screen */
    _showError(message) {
        // Remove any existing error banner
        const existing = document.getElementById('_appErrorBanner');
        if (existing) existing.remove();

        const banner = document.createElement('div');
        banner.id = '_appErrorBanner';
        banner.setAttribute('role', 'alert');
        banner.style.cssText = `
            position:fixed;top:70px;left:50%;transform:translateX(-50%);
            background:var(--color-danger);color:#fff;
            padding:0.75rem 1.5rem;border-radius:0.5rem;
            z-index:9999;font-size:0.9rem;font-weight:600;
            box-shadow:0 4px 12px rgba(0,0,0,0.3);
            max-width:90vw;text-align:center;`;
        banner.textContent = message;
        document.body.appendChild(banner);

        setTimeout(() => banner.remove(), 5000);
    }

    /* ============================================================
       PRIVATE HELPERS — DIFFICULTY BADGE
       ============================================================ */

    /** @private Apply appropriate badge class to the difficulty badge element */
    _applyDifficultyBadge(elementId, difficulty) {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.textContent = this._capFirst(difficulty);
        el.className   = `badge ${this._difficultyBadgeClass(difficulty)}`;
    }

    /** @private Map difficulty to CSS class */
    _difficultyBadgeClass(difficulty) {
        const map = { easy: 'badge-easy', medium: 'badge-medium', advanced: 'badge-advanced' };
        return map[difficulty] || 'badge-easy';
    }

    /* ============================================================
       PRIVATE HELPERS — UTILITY
       ============================================================ */

    /**
     * @private Safely set textContent on a DOM element by ID.
     * @param {string} id
     * @param {string|number} text
     */
    _setTextContent(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = String(text);
    }

    /**
     * @private Add an event listener to a DOM element by ID.
     * @param {string} id
     * @param {string} event
     * @param {Function} handler
     */
    _on(id, event, handler) {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event, handler);
    }

    /**
     * @private Escape HTML special characters to prevent XSS.
     * @param {string} str
     * @returns {string}
     */
    _escapeHTML(str) {
        if (typeof str !== 'string') return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    /**
     * @private Capitalise the first letter of a string.
     * @param {string} str
     * @returns {string}
     */
    _capFirst(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

/* ============================================================
   BOOT — Instantiate and initialise after DOM is ready.

   NOTE: The data <script> tags in index.html are placed AFTER
   this file, so when DOMContentLoaded fires the question data
   variables are not yet available.  We defer the full data
   load until "load" (all scripts parsed) and also use a
   MutationObserver / re-try in loadQuestionsData() so the app
   gracefully handles whichever fires first.
   ============================================================ */

(function bootstrap() {
    const app = new QuizApp();

    // Expose globally for debugging and potential extension
    window.QuizApp = app;

    // Initialise on DOMContentLoaded (structure is ready, some data may not be)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => app.init());
    } else {
        // Document already parsed (e.g., script placed at end of body)
        app.init();
    }

    // After ALL scripts (including data files) have loaded, refresh data
    window.addEventListener('load', () => {
        if (app.allQuestions.length === 0) {
            // Data files were not ready during init — load now
            app.loadQuestionsData();
            app.populateTopics();
            app._updateWelcomeStats();
            console.info('[QuizApp] Data loaded on window.load — stats refreshed.');
        }
    });
}());

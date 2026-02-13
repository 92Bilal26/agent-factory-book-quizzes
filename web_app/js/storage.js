/* ============================================
   STORAGE.JS - LOCAL STORAGE MANAGEMENT
   ============================================ */

const Storage = {
    // Storage key prefix
    PREFIX: 'quiz_',

    // Get full key with quiz set
    getKey(base, quizSetId = null) {
        if (quizSetId) {
            return `${this.PREFIX}${quizSetId}_${base}`;
        }
        return `${this.PREFIX}${base}`;
    },

    // Initialize storage
    init() {
        console.log('Storage initialized');
    },

    // ============ CURRENT QUIZ STATE ============

    // Save current quiz state
    saveQuizState(state, quizSetId) {
        try {
            const key = this.getKey('current_quiz', quizSetId);
            localStorage.setItem(key, JSON.stringify(state));
            return true;
        } catch (error) {
            console.error('Error saving quiz state:', error);
            return false;
        }
    },

    // Load current quiz state
    loadQuizState(quizSetId) {
        try {
            const key = this.getKey('current_quiz', quizSetId);
            const state = localStorage.getItem(key);
            return state ? JSON.parse(state) : null;
        } catch (error) {
            console.error('Error loading quiz state:', error);
            return null;
        }
    },

    // Clear quiz state
    clearQuizState(quizSetId) {
        try {
            const key = this.getKey('current_quiz', quizSetId);
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error clearing quiz state:', error);
            return false;
        }
    },

    // ============ QUIZ PROGRESS ============

    // Save quiz progress
    saveProgress(progress, quizSetId) {
        try {
            const key = this.getKey('progress', quizSetId);
            localStorage.setItem(key, JSON.stringify(progress));
            return true;
        } catch (error) {
            console.error('Error saving progress:', error);
            return false;
        }
    },

    // Load quiz progress
    loadProgress(quizSetId) {
        try {
            const key = this.getKey('progress', quizSetId);
            const progress = localStorage.getItem(key);
            return progress ? JSON.parse(progress) : null;
        } catch (error) {
            console.error('Error loading progress:', error);
            return null;
        }
    },

    // Get all progress for all quiz sets
    getAllProgress() {
        try {
            const progress = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.includes('progress')) {
                    const quizSetId = key.replace(`${this.PREFIX}`, '').replace('_progress', '');
                    progress[quizSetId] = JSON.parse(localStorage.getItem(key));
                }
            }
            return progress;
        } catch (error) {
            console.error('Error loading all progress:', error);
            return {};
        }
    },

    // ============ USER ANSWERS ============

    // Save user answers
    saveAnswers(answers, quizSetId) {
        try {
            const key = this.getKey('answers', quizSetId);
            localStorage.setItem(key, JSON.stringify(answers));
            return true;
        } catch (error) {
            console.error('Error saving answers:', error);
            return false;
        }
    },

    // Load user answers
    loadAnswers(quizSetId) {
        try {
            const key = this.getKey('answers', quizSetId);
            const answers = localStorage.getItem(key);
            return answers ? JSON.parse(answers) : {};
        } catch (error) {
            console.error('Error loading answers:', error);
            return {};
        }
    },

    // Clear answers
    clearAnswers(quizSetId) {
        try {
            const key = this.getKey('answers', quizSetId);
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error clearing answers:', error);
            return false;
        }
    },

    // ============ QUIZ RESULTS ============

    // Save quiz results
    saveResults(results, quizSetId) {
        try {
            const key = this.getKey('results', quizSetId);
            localStorage.setItem(key, JSON.stringify(results));
            return true;
        } catch (error) {
            console.error('Error saving results:', error);
            return false;
        }
    },

    // Load quiz results
    loadResults(quizSetId) {
        try {
            const key = this.getKey('results', quizSetId);
            const results = localStorage.getItem(key);
            return results ? JSON.parse(results) : null;
        } catch (error) {
            console.error('Error loading results:', error);
            return null;
        }
    },

    // Get results history
    getResultsHistory(quizSetId, limit = 10) {
        try {
            const key = this.getKey('results_history', quizSetId);
            const history = localStorage.getItem(key);
            let results = history ? JSON.parse(history) : [];
            return results.slice(-limit);
        } catch (error) {
            console.error('Error loading results history:', error);
            return [];
        }
    },

    // Add to results history
    addToResultsHistory(results, quizSetId) {
        try {
            const key = this.getKey('results_history', quizSetId);
            let history = localStorage.getItem(key);
            history = history ? JSON.parse(history) : [];
            history.push({
                ...results,
                timestamp: new Date().toISOString()
            });
            // Keep only last 50 results
            if (history.length > 50) {
                history = history.slice(-50);
            }
            localStorage.setItem(key, JSON.stringify(history));
            return true;
        } catch (error) {
            console.error('Error adding to results history:', error);
            return false;
        }
    },

    // ============ THEME ============

    // Save theme preference (global, not per quiz set)
    saveTheme(isDarkMode) {
        try {
            localStorage.setItem(`${this.PREFIX}theme_mode`, isDarkMode ? 'dark' : 'light');
            return true;
        } catch (error) {
            console.error('Error saving theme:', error);
            return false;
        }
    },

    // Load theme preference
    loadTheme() {
        try {
            const theme = localStorage.getItem(`${this.PREFIX}theme_mode`);
            // Default to light mode, but check system preference if not set
            if (theme === null) {
                return window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            return theme === 'dark';
        } catch (error) {
            console.error('Error loading theme:', error);
            return false;
        }
    },

    // ============ QUIZ SET PREFERENCE ============

    // Save selected quiz set
    saveSelectedQuizSet(quizSetId) {
        try {
            localStorage.setItem(`${this.PREFIX}selected_quiz_set`, quizSetId);
            return true;
        } catch (error) {
            console.error('Error saving selected quiz set:', error);
            return false;
        }
    },

    // Load selected quiz set
    loadSelectedQuizSet() {
        try {
            const quizSetId = localStorage.getItem(`${this.PREFIX}selected_quiz_set`);
            return quizSetId || 'chapter1'; // Default to chapter1
        } catch (error) {
            console.error('Error loading selected quiz set:', error);
            return 'chapter1';
        }
    },

    // ============ UTILITY FUNCTIONS ============

    // Clear all data for specific quiz set
    clearQuizSetData(quizSetId) {
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.includes(`${this.PREFIX}${quizSetId}`)) {
                    keysToRemove.push(key);
                }
            }
            keysToRemove.forEach(key => localStorage.removeItem(key));
            return true;
        } catch (error) {
            console.error('Error clearing quiz set data:', error);
            return false;
        }
    },

    // Clear all quiz data (keep theme preference)
    clearAllQuizData() {
        try {
            const theme = this.loadTheme();
            const selectedSet = this.loadSelectedQuizSet();
            localStorage.clear();
            // Restore theme and selected set
            this.saveTheme(theme);
            this.saveSelectedQuizSet(selectedSet);
            return true;
        } catch (error) {
            console.error('Error clearing all quiz data:', error);
            return false;
        }
    },

    // Get storage size info
    getStorageInfo() {
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key) && key.startsWith(this.PREFIX)) {
                totalSize += localStorage[key].length + key.length;
            }
        }
        return {
            sizeInBytes: totalSize,
            sizeInKB: (totalSize / 1024).toFixed(2)
        };
    },

    // Export storage data as JSON
    exportData() {
        try {
            const data = {};
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith(this.PREFIX)) {
                    data[key] = localStorage.getItem(key);
                }
            }
            return JSON.stringify(data, null, 2);
        } catch (error) {
            console.error('Error exporting data:', error);
            return null;
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Storage;
}

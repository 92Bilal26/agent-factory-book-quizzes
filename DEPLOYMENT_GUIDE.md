# GitHub Pages Deployment Guide

## Project Summary
- **Project**: Agent Factory Book Quizzes
- **Total Questions**: 516 (6 chapters × 86 questions average)
- **Chapters**: 6 book chapters with comprehensive Q&A
- **Technology**: Pure HTML/CSS/JavaScript (no build process needed)
- **Hosting**: GitHub Pages (free)

## Quick Deployment Steps

### Step 1: Initialize Git Repository
```bash
cd F:\ai_projects\quiz-ai-agen-fanctory\web_app
git init
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

### Step 2: Add All Files
```bash
git add .
git commit -m "Initial commit: Agent Factory Book Quizzes with 516 questions"
```

### Step 3: Create GitHub Repository
1. Go to https://github.com/new
2. **Repository name**: `agent-factory-book-quizzes`
3. **Description**: Interactive quiz platform for Agent Factory book - 516 questions across 6 chapters
4. **Visibility**: PUBLIC
5. Click "Create repository"

### Step 4: Push to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/agent-factory-book-quizzes.git
git push -u origin main
```

### Step 5: Enable GitHub Pages
1. Go to https://github.com/YOUR_USERNAME/agent-factory-book-quizzes
2. Click **Settings** (gear icon)
3. Scroll left sidebar to **Pages**
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
5. Click **Save**

### Step 6: Wait for Deployment
- GitHub will deploy automatically (usually 1-2 minutes)
- You'll see a notification when live

### Step 7: Access Your Quiz
Your quiz will be live at:
```
https://YOUR_USERNAME.github.io/agent-factory-book-quizzes
```

## File Structure

The web_app folder contains everything needed:
```
web_app/
├── index.html                    # Main application
├── README.md                     # Project documentation
├── .gitignore                    # Git ignore rules
├── css/
│   ├── style.css                # Main styles (2000+ lines)
│   └── responsive.css            # Mobile responsive
├── js/
│   ├── app.js                   # Main logic (1400+ lines)
│   ├── quiz.js                  # Utilities
│   └── storage.js               # LocalStorage management
└── data/
    ├── questions-chapter1.js    # Chapter 1 (86 questions)
    ├── questions-chapter2.js    # Chapter 2 (85 questions)
    ├── questions-chapter3.js    # Chapter 3 (86 questions)
    ├── questions-chapter4.js    # Chapter 4 (86 questions)
    ├── questions-chapter5.js    # Chapter 5 (86 questions)
    └── questions-chapter6.js    # Chapter 6 (86 questions)
```

## Important Notes

### What Gets Deployed
✅ Everything in `web_app/` folder is deployed to GitHub Pages
✅ All 6 chapter question files are included
✅ All CSS, JavaScript, and HTML files are included

### What Should NOT Be Deployed
❌ Don't push files from root directory (only web_app/)
❌ Don't include `.env` or credentials (already in .gitignore)
❌ Don't include old FTE quiz files (already removed)
❌ Don't include Python scripts or temporary files

### Custom Domain (Optional)
If you want to use a custom domain:
1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. In repository Settings → Pages
3. Under "Custom domain": Enter your domain
4. Update DNS settings at your registrar to point to GitHub Pages

### HTTPS
GitHub Pages automatically provides free HTTPS - no setup needed!

## Troubleshooting

### Quiz not loading
- Check browser console (F12) for errors
- Verify all 6 question files are loading
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Questions appear empty
- Check that `questions-chapterX.js` files are in `data/` folder
- Verify file names match exactly in index.html
- Check browser console for loading errors

### Styles not applying
- Verify `css/style.css` and `css/responsive.css` exist
- Check that CSS files are linked in index.html
- Clear browser cache

### Dark mode not working
- Check localStorage is enabled in browser
- Try clearing browser data and refreshing
- Check browser console for errors

## Maintenance

### Adding New Questions
1. Edit the corresponding `questions-chapterX.js` file
2. Follow the existing question format
3. Test locally by opening index.html in browser
4. Commit and push changes:
```bash
git add data/questions-chapterX.js
git commit -m "Update: Added new questions to Chapter X"
git push origin main
```
GitHub will automatically redeploy within 1-2 minutes.

### Updating Styles
1. Edit `css/style.css` or `css/responsive.css`
2. Clear browser cache to see changes
3. Commit and push:
```bash
git add css/
git commit -m "Update: Improved styling"
git push origin main
```

### Fixing Bugs
1. Fix the issue in the appropriate file
2. Test in browser
3. Commit and push:
```bash
git add .
git commit -m "Fix: [specific issue]"
git push origin main
```

## Monitoring Deployment

### GitHub Actions Status
1. Go to your repository
2. Click **Actions** tab
3. Scroll to "pages build and deployment"
4. Green checkmark = successfully deployed
5. Red X = deployment failed (check logs)

### View Deployment Logs
1. Click the failed workflow
2. Click "pages-build-deployment" job
3. Scroll to see what went wrong

## Custom Configuration

### Change App Title
Edit `index.html` line ~9:
```html
<title>Agent Factory Quizzes - Book Chapter Learning Platform</title>
```

### Change Logo/Favicon
Edit `index.html` line ~12:
```html
<link rel="icon" type="image/x-icon" href="data:image/svg+xml,...">
```

### Change Color Scheme
Edit `css/style.css` top section - CSS variables:
```css
--color-primary: #2563eb;       /* Change primary blue */
--color-secondary: #10b981;     /* Change secondary green */
--color-danger: #ef4444;        /* Change danger red */
```

## Security Notes

✅ **Safe**: All data stored locally in browser (no server needed)
✅ **Safe**: No authentication required (educational tool)
✅ **Safe**: No external API calls or third-party services
✅ **Safe**: No tracking or analytics

## Getting Help

### Common Issues Resolution
1. **Questions aren't showing**: Check browser console (F12) → Console tab
2. **Styles look wrong**: Clear cache (Ctrl+Shift+Delete) and refresh
3. **Storage errors**: Try incognito/private mode
4. **Mobile issues**: Test on actual mobile device, not just browser zoom

### Support Resources
- GitHub Pages Docs: https://docs.github.com/en/pages
- GitHub Help: https://help.github.com
- Browser Console Debugging: Open F12 → Console tab

## After Deployment Checklist

- [ ] Visit deployed URL and verify it's live
- [ ] Test quiz functionality:
  - [ ] Select chapter
  - [ ] Choose difficulty
  - [ ] Answer questions
  - [ ] View results
- [ ] Test dark mode toggle
- [ ] Test mobile responsive design (resize browser)
- [ ] Test keyboard navigation (Tab, Enter, Arrows)
- [ ] Verify progress saves (refresh page)
- [ ] Test download CSV feature
- [ ] Share URL with others
- [ ] Document URL in project README

## Performance Tips

- Quiz loads fast (no database queries)
- ~500KB total size (CSS, JS, HTML combined)
- Instant response to user interactions
- All processing happens in browser (no server latency)

## Next Steps

1. **Deploy to GitHub**: Follow steps 1-7 above
2. **Share URL**: Tell others about your quiz
3. **Track Progress**: Monitor GitHub Actions for any issues
4. **Add Quizzes**: As you create new chapters, add corresponding question files
5. **Gather Feedback**: Ask users for suggestions

---

**Questions?** Check the troubleshooting section or GitHub documentation.

**Happy Deploying! 🚀**

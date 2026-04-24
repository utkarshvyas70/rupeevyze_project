# FinWise – Finance Landing Page
 
A clean, mobile-friendly landing page built for a finance product. Made as part of an internship assignment.
 
---
 
## Pages
 
| File | What it is |
|---|---|
| `index.html` | Main landing page with hero, features, and CTA |
| `apply.html` | Sign up form with validation and success screen |
| `howitworks.html` | How it works steps + FAQ accordion |
| `style.css` | All the styling for every page |
| `script.js` | Form validation, FAQ toggle, toast, bar animation |
 
---
 
## How to run it
 
No install needed. No npm. No build step.
 
1. Download or clone the folder
2. Open the folder in VS Code
3. Right click `index.html` → **Open with Live Server**
4. Done
> If you don't have Live Server, install it from the VS Code extensions tab (`Ctrl + Shift + X` → search Live Server)
 
---
 
## Folder structure
 
```
finance-landing/
├── index.html
├── apply.html
├── howitworks.html
├── style.css
└── script.js
```
 
---
 
## What's inside
 
**index.html**
- Sticky navbar with working links
- Hero section with heading, subheading, and two CTA buttons
- Fake dashboard card with animated progress bars
- Trust strip (users, amount tracked, rating)
- Features section with 4 cards
- Bottom CTA band
- Footer with nav links
**apply.html**
- Clean sign up form
- Fields — name, email, phone, financial goal
- Basic validation (empty fields, email format check)
- On success hides the form and shows a confirmation screen
**howitworks.html**
- 3 step cards explaining the product
- FAQ section with open/close accordion
- Bottom CTA linking back to apply page
---
 
## Tech used
 
- HTML5
- CSS3 (grid, variables, animations, media queries)
- Vanilla JavaScript (no frameworks, no libraries)
- Google Fonts — Playfair Display + DM Sans
---
 
## Features
 
- Fully mobile responsive
- All buttons and links work and navigate between pages
- Form validates before submitting
- FAQ accordion opens and closes
- Progress bars animate on scroll into view
- Toast notification on button clicks
- No external dependencies
---
 
## Assignment brief answers
 
**Why structured this way**
Heading first, proof second, action third. user needs to understand what the product does before being asked to do anything. dashboard card on the right shows the product visually instead of just describing it.
 
**What was prioritized first**
Clarity of the value proposition. if someone lands and cant figure out what it does in 3 seconds they leave. mobile layout was handled right after with a single CSS grid column swap, no JS needed.
 
---
 
## Author
 
Built for RupeeVyze frontend internship task — Execution Task 02.
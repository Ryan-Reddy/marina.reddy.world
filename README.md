# Marina Reddy World - Book Landing Page

A beautiful landing page for "Returning to the Heart: Living Coherence in a Fast World" by Marina Avram.

## Project Structure

```
marina.reddy.world/
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
├── public/              # Static assets
│   └── book-cover.jpg   # Book cover image
├── src/
│   ├── components/      # UI components
│   │   └── BookCard.js  # Book card component
│   ├── styles/          # CSS files
│   │   └── main.css     # Main stylesheet
│   └── main.js          # Application entry point
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── firebase.json        # Firebase config
├── dev.sh              # Development script
└── package.json         # Dependencies
```

## Features

- 🌤️ Beautiful sky-blue gradient background
- ✨ Soft, sleek frosted glass overlay container in portrait shape
- 📖 Book information and details
- 🎨 Elegant typography with Google Fonts
- 📱 Fully responsive design
- 🔗 Direct link to Amazon

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your book cover image**: 
   - Save your book cover image as `book-cover.jpg` in the `public/` directory
   - The image will be automatically served at `/book-cover.jpg`

3. **Run development server**:
   ```bash
   ./dev.sh
   ```
   Or directly: `npm run dev`
   
   This will start Vite dev server at http://localhost:3000

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Deploy to Firebase**:
   - **Automatic (GitHub Actions)**: Push to `main` branch
   - **Manual**: `npm run deploy`
   
   See deployment section below for setup details.

## Customize

- Edit text content in `index.html`
- Adjust colors and styling in `styles.css`
- Update the Amazon link with your actual book URL

## Design Inspiration

- Sky gradient background inspired by natural blue-white sky
- Soft overlay container with frosted glass effect
- "Right now." tagline inspired by your Instagram post aesthetic
- Clean, modern typography for readability

## Technologies Used

- Vite - Fast development server and build tool
- HTML5
- CSS3 (with gradients, backdrop-filter, animations)
- Google Fonts (Cormorant Garamond & Montserrat)
- Firebase Hosting - For deployment
- GitHub Actions - CI/CD

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)

The site automatically deploys to Firebase when you push to the `main` branch.

**Setup**:
1. Create a Firebase project at https://console.firebase.google.com
2. Install Firebase CLI and login:
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
3. Generate a service account key:
   - Go to Firebase Console → Project Settings → Service Accounts
   - Click "Generate New Private Key"
   - Save the JSON file securely

4. Add GitHub secret:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `FIREBASE_SERVICE_ACCOUNT`
   - Value: Paste the entire JSON content from step 3

**What happens automatically**:
- ✅ Push to `main` → Deploy to production
- ✅ Open PR → Deploy preview channel with comment link
- ✅ Automatic build and testing on every push

### Manual Deployment

```bash
firebase login
firebase init hosting
npm run deploy
```

Enjoy your beautiful book landing page! 📚✨

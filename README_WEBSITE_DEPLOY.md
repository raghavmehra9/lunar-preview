# Put Application-Lunar online as a website (no coding)

This codebase is an **Expo (React Native) app**. Expo supports **Web**, so the app can be published as a website.

## The simplest path: Deploy on Vercel (mostly clicks)

### Step 1 — Upload the code to GitHub
1. Create a free GitHub account.
2. Click **New repository**.
3. Name it something like `lunar-web`.
4. Click **Create repository**.
5. On the repo page, click **Add file → Upload files**.
6. Upload the project contents (all folders/files like `app`, `components`, `package.json`, etc.).
7. Click **Commit changes**.

### Step 2 — Deploy with Vercel
1. Create a free Vercel account.
2. Click **Add New → Project**.
3. Import the GitHub repo you just created.
4. In "Build & Output Settings":
   - **Install Command**: `npm install --legacy-peer-deps`
   - **Build Command**: `npm run build:web`
   - **Output Directory**: `dist`

### Step 3 — Add environment variables (copy/paste)
In Vercel Project Settings → **Environment Variables**, add the following keys:
- `EXPO_PUBLIC_BASE_URL`
- `EXPO_PUBLIC_API_VERSION`
- `EXPO_PUBLIC_WEB_CLIENT_ID`
- `EXPO_PUBLIC_FACEBOOK_APP_ID`
- `EXPO_PUBLIC_GOOGLE_PLACES_API`
- `EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `EXPO_PUBLIC_REDIRECT_CALENDLY`

Important:
- Any variable starting with `EXPO_PUBLIC_` is **public** on the website.
- Do **not** put private secrets in `EXPO_PUBLIC_` variables.

### Step 4 — Click Deploy
Vercel will build and give you a website link.

## Common issue (if login/API calls fail)
If the backend blocks web traffic (CORS), the website may load but API calls fail. The backend needs to allow requests from your website domain.


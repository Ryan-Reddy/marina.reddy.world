# Firebase Custom Domain Setup

## Configuration
- **Site ID**: `heart`
- **Custom Domain**: `heart.reddy.world`

## Setup Steps

### 1. Create Firebase Hosting Site
```bash
firebase hosting:sites:create heart
```

### 2. Add GitHub Secrets
Go to: https://github.com/Ryan-Reddy/marina.reddy.world/settings/secrets/actions

Add these secrets:
- `FIREBASE_SERVICE_ACCOUNT` - Your Firebase service account JSON
- `FIREBASE_PROJECT_ID` - Your Firebase project ID (e.g., `marina-reddy-world`)

### 3. Connect Custom Domain in Firebase Console

1. Go to Firebase Console → Hosting
2. Select the `heart` site
3. Click "Add custom domain"
4. Enter: `heart.reddy.world`
5. Firebase will provide DNS records to add

### 4. Add DNS Records to reddy.world

Add these records to your `reddy.world` DNS (CloudFlare/Route53/etc):

**For subdomain** (`heart.reddy.world`):
```
Type: CNAME
Name: heart
Value: [provided by Firebase]
```

Or if Firebase provides A records:
```
Type: A
Name: marina-avram
Value: [IP from Firebase]
```

### 5. Test Deployment

```bash
npm run build
firebase deploy --only hosting:heart
```

### 6. Verify GitHub Actions

Once secrets are added, push to main:
```bash
git push origin main
```

GitHub Actions will automatically deploy to your custom domain!

## Local Testing

```bash
./dev.sh
```

Visit: http://localhost:3000

## Manual Deploy

```bash
npm run build
firebase deploy --only hosting:heart
```

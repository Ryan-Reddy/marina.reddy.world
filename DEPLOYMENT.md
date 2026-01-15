# Firebase Custom Domain Setup

## Configuration
- **Site ID**: `marina-avram`
- **Custom Domain**: `marina-avram.reddy.world` (or choose your own)

## Setup Steps

### 1. Create Firebase Hosting Site
```bash
firebase hosting:sites:create marina-avram
```

### 2. Add GitHub Secrets
Go to: https://github.com/Ryan-Reddy/marina.reddy.world/settings/secrets/actions

Add these secrets:
- `FIREBASE_SERVICE_ACCOUNT` - Your Firebase service account JSON
- `FIREBASE_PROJECT_ID` - Your Firebase project ID (e.g., `marina-reddy-world`)

### 3. Connect Custom Domain in Firebase Console

1. Go to Firebase Console → Hosting
2. Select the `marina-avram` site
3. Click "Add custom domain"
4. Enter: `marina-avram.reddy.world` (or your chosen subdomain)
5. Firebase will provide DNS records to add

### 4. Add DNS Records to reddy.world

Add these records to your `reddy.world` DNS (CloudFlare/Route53/etc):

**For subdomain** (`marina-avram.reddy.world`):
```
Type: CNAME
Name: marina-avram
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
firebase deploy --only hosting:marina-avram
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
firebase deploy --only hosting:marina-avram
```

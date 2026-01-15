# Setting up heart.reddy.world on Hostinger

## ✅ STATUS: LIVE AT https://heart.reddy.world

---

## Setup Completed Successfully!

1. Go to: https://console.firebase.google.com/project/getreddyworld/hosting
2. Find the **marina-avram** site
3. Click "Add custom domain"
4. Enter: `heart.reddy.world`
5. Firebase will show you the DNS records to add

## Step 2: Add DNS Records in Hostinger

### Firebase will provide ONE of these options:

**Option A - If Firebase gives you A records:**
```
Type: A
Name: heart
Value: [IP address from Firebase, likely 151.101.1.195 or similar]
TTL: 3600
```

**Option B - If Firebase gives you CNAME:**
```
Type: CNAME
Name: heart
Value: [domain from Firebase, e.g., ghs.googlehosted.com]
TTL: 3600
```

**Option C - If Firebase requires verification first:**
```
Type: TXT
Name: heart
Value: [verification token from Firebase]
TTL: 3600
```

After verification, add the A or CNAME records Firebase provides.

## Step 3: In Hostinger

1. Log into Hostinger
2. Go to Domains → Manage → DNS / Name Servers
3. Find reddy.world
4. Click "DNS Zone Editor" or "DNS Records"
5. Click "Add Record"
6. Add the records Firebase provided (see above)
7. Save

## Step 4: Verify in Firebase

1. Back in Firebase Console
2. Click "Verify" or wait for auto-verification (can take 5-60 minutes)
3. Firebase will then auto-provision SSL certificate
4. Site will be live at https://heart.reddy.world within 24 hours (usually much faster!)

## Troubleshooting

**DNS not propagating?**
- Wait 5-60 minutes for DNS propagation
- Check with: `nslookup heart.reddy.world`
- Or use: https://dnschecker.org

**SSL pending?**
- SSL provisioning can take up to 24 hours
- Firebase auto-handles this once DNS is verified

## Current Status

- ✅ Site built and deployed
- ✅ Live at: https://marina-avram.web.app
- ⏳ Waiting for: heart.reddy.world DNS setup

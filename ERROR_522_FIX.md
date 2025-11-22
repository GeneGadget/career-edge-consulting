# Fix Cloudflare Error 522 - Connection Timed Out

## Error: 522 Connection Timed Out

This means Cloudflare DNS is trying to connect to your Pages site but can't reach it. Usually caused by:
1. Incorrect CNAME target (wrong Pages URL)
2. Domain not properly connected in Cloudflare Pages
3. DNS conflict between Cloudflare DNS and Cloudflare Pages

---

## Quick Fix Steps

### Step 1: Verify Your Cloudflare Pages URL

1. Go to **Cloudflare Pages** → Your project (`career-edge-consulting`)
2. Click on any **deployment** (in Deployments tab)
3. Look at the URL at the top - this is your Pages URL
4. It should look like: `career-edge-consulting.pages.dev` or similar
5. **Copy this exact URL** (case-sensitive!)

### Step 2: Verify Domain is Added in Cloudflare Pages

1. Go to **Cloudflare Pages** → Your project → **Settings** → **Custom domains**
2. You should see: `careeredgeconsulting.ca`
3. Check its status:
   - ✅ **Active** (green) = Good
   - ⏳ **Pending** = Wait for SSL
   - ❌ **Failed** = Need to fix

### Step 3: Get Correct DNS Configuration from Cloudflare Pages

1. **In Cloudflare Pages:**
   - Go to **Settings** → **Custom domains**
   - Click on `careeredgeconsulting.ca`
   - Cloudflare Pages should show you **DNS instructions**
   - It might say:
     - Use CNAME to: `[specific-url].pages.dev`
     - Or use A record to: `[specific-ip]`
   - **Follow these exact instructions!**

### Step 4: Fix DNS Records in Cloudflare DNS

**Option A: If Cloudflare Pages shows a specific CNAME target**

1. **In Cloudflare DNS** (where you manage DNS):
2. **Find your root domain CNAME** (or A record)
3. **Click "Edit"**
4. **Make sure it matches exactly** what Cloudflare Pages tells you:
   - **Type**: `CNAME`
   - **Name**: `careeredgeconsulting.ca` or `@`
   - **Target**: The EXACT URL from Cloudflare Pages instructions
   - **Proxy status**: **Proxied** (orange cloud) ✅
   - **TTL**: Auto
5. **Click "Save"**

**Option B: If Cloudflare Pages shows an A record IP**

1. **In Cloudflare DNS:**
2. **Change CNAME to A record**:
   - **Type**: `A`
   - **Name**: `careeredgeconsulting.ca` or `@`
   - **IPv4 address**: The IP from Cloudflare Pages instructions
   - **Proxy status**: **Proxied** (orange cloud) ✅
   - **TTL**: Auto
3. **Click "Save"**

### Step 5: Remove and Re-add Domain in Cloudflare Pages

If the above doesn't work, try resetting the connection:

1. **In Cloudflare Pages:**
   - Go to **Settings** → **Custom domains**
   - Find `careeredgeconsulting.ca`
   - Click **"Remove"** or delete it
   - Wait 2-3 minutes

2. **Re-add the domain:**
   - Click **"Set up a custom domain"**
   - Enter: `careeredgeconsulting.ca`
   - Click **"Continue"**
   - Cloudflare Pages will show you **exact DNS configuration needed**
   - **Follow those instructions exactly!**

3. **Update your Cloudflare DNS** to match what Cloudflare Pages tells you

---

## Most Common Issue: Wrong CNAME Target

The CNAME must point to your **exact Cloudflare Pages URL**, not a generic one.

**Wrong:**
```
CNAME careeredgeconsulting.ca → pages.dev
CNAME careeredgeconsulting.ca → cloudflarepages.com
```

**Correct:**
```
CNAME careeredgeconsulting.ca → career-edge-consulting.pages.dev
```
(Your actual Pages URL!)

---

## Step 6: Verify DNS Propagation

1. Wait 1-5 minutes after making changes
2. Check DNS propagation:
   - Go to [whatsmydns.net](https://www.whatsmydns.net)
   - Enter `careeredgeconsulting.ca`
   - Select "CNAME" type
   - Check if it shows your Pages URL

---

## If Still Getting 522 Error

### Check These:

1. **Is the Pages URL correct?**
   - Go to Cloudflare Pages → Deployments
   - Click on a deployment
   - Copy the exact URL shown
   - Make sure your DNS CNAME matches this EXACTLY

2. **Is the domain properly connected in Cloudflare Pages?**
   - Settings → Custom domains
   - Should show green checkmark ✅
   - SSL should be "Active" or "Provisioning"

3. **Try temporarily disabling proxy:**
   - In Cloudflare DNS, for the root domain record
   - Change **Proxy status** from **Proxied** (orange cloud) to **DNS only** (gray cloud)
   - Wait 5 minutes
   - Test if site loads
   - If it works, enable proxy again

4. **Check Cloudflare Pages deployment:**
   - Go to Deployments tab
   - Latest deployment should be **"Success"** ✅
   - If it's "Failed", fix the build issue first

---

## Quick Checklist

- [ ] Verified exact Pages URL in Cloudflare Pages → Deployments
- [ ] Domain shows in Cloudflare Pages → Settings → Custom domains
- [ ] CNAME target matches EXACT Pages URL
- [ ] Proxy status is ON (orange cloud) for root domain
- [ ] Waited 1-5 minutes after DNS changes
- [ ] Latest deployment is Success
- [ ] SSL certificate status is Active or Provisioning

---

## Need Help?

**Please share:**
1. Your exact Cloudflare Pages URL (from Deployments tab)
2. What your current DNS CNAME target is pointing to
3. Domain status in Cloudflare Pages (Settings → Custom domains)

This will help identify the mismatch! 🔍


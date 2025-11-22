# Cloudflare Pages Domain Troubleshooting

## Error: "The content of the page cannot be displayed"

This usually happens when:
1. Domain isn't properly connected in Cloudflare Pages
2. DNS hasn't fully propagated yet
3. SSL certificate hasn't been provisioned
4. Build failed or site isn't deployed correctly

---

## Quick Fixes (Try These First)

### 1. Check Domain Status in Cloudflare Pages

1. Go to **Cloudflare Pages** → Your project → **Settings** → **Custom domains**
2. You should see both:
   - ✅ `careeredgeconsulting.ca` 
   - ✅ `www.careeredgeconsulting.ca`
3. **Both should show green checkmarks** ✅
4. If you see red X or "Pending", click "Retry SSL" or remove and re-add the domain

### 2. Verify DNS Configuration

**In Namecheap:**
- Root domain (`careeredgeconsulting.ca`): Should use **Cloudflare nameservers** OR have a **CNAME** pointing to your Pages URL
- WWW (`www.careeredgeconsulting.ca`): Should have a **CNAME** pointing to your Pages URL

**Recommended: Use Cloudflare Nameservers (Easiest)**

### 3. Check Latest Deployment

1. Go to **Cloudflare Pages** → **Deployments** tab
2. Latest deployment should show **"Success"** ✅
3. If it shows "Failed":
   - Click on the deployment
   - Check build logs for errors
   - Common issue: Missing environment variables or build errors

### 4. Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** (usually 1-4 hours)
- Check status at: [whatsmydns.net](https://www.whatsmydns.net)
- Enter `careeredgeconsulting.ca` and check if it's propagated globally

### 5. Test Direct Pages URL

Try accessing your Cloudflare Pages URL directly:
- Example: `https://career-edge-consulting.pages.dev`
- If this works → It's a DNS/domain issue
- If this doesn't work → It's a build/deployment issue

---

## Step-by-Step Domain Setup (If Not Done)

### Option 1: Use Cloudflare Nameservers (Recommended)

1. **In Cloudflare Pages:**
   - Go to **Settings** → **Custom domains**
   - Click **"Set up a custom domain"**
   - Enter: `careeredgeconsulting.ca`
   - Click **Continue**
   - Cloudflare will show you **nameservers** (e.g., `adam.ns.cloudflare.com`, `carol.ns.cloudflare.com`)
   - **Copy these**

2. **In Namecheap:**
   - Go to **Domain List** → **Manage** → **Nameservers** tab
   - Select **"Custom DNS"**
   - Paste Cloudflare's nameservers:
     - Nameserver 1: (from Cloudflare)
     - Nameserver 2: (from Cloudflare)
   - Click **Save**
   
3. **Back in Cloudflare Pages:**
   - Click **"Add another domain"**
   - Enter: `www.careeredgeconsulting.ca`
   - Click **Continue**
   
4. **Wait 10-30 minutes** for:
   - DNS propagation
   - SSL certificate provisioning (automatic)

### Option 2: Use Namecheap Nameservers (Keep Existing DNS)

1. **In Cloudflare Pages:**
   - Add custom domains: `careeredgeconsulting.ca` and `www.careeredgeconsulting.ca`
   - Cloudflare will show you DNS records needed

2. **In Namecheap:**
   - Go to **Advanced DNS** tab
   
   **For Root Domain (careeredgeconsulting.ca):**
   - **Type**: `CNAME Record`
   - **Host**: `@`
   - **Value**: Your Cloudflare Pages URL (e.g., `career-edge-consulting.pages.dev`)
   - **TTL**: Automatic
   
   **For WWW (www.careeredgeconsulting.ca):**
   - **Type**: `CNAME Record`
   - **Host**: `www`
   - **Value**: Your Cloudflare Pages URL (e.g., `career-edge-consulting.pages.dev`)
   - **TTL**: Automatic

3. **Wait 10-30 minutes** for DNS and SSL

---

## Common Issues

### Issue: "The content of the page cannot be displayed"

**Possible causes:**
- Domain not added in Cloudflare Pages ✅ **Check: Settings → Custom domains**
- DNS not propagated yet ✅ **Check: whatsmydns.net**
- SSL not provisioned ✅ **Check: SSL status in Cloudflare Pages (wait 10-30 min)**
- Build failed ✅ **Check: Deployments tab**

### Issue: SSL Certificate Status Shows "Pending"

- **Wait 10-15 minutes** for automatic provisioning
- If still pending after 30 minutes:
  - Try removing and re-adding the domain
  - Check DNS is properly configured

### Issue: Domain Shows but Site Doesn't Load

- Check build status → Should be "Success" ✅
- Check browser console (F12) for JavaScript errors
- Clear browser cache and try incognito mode

---

## Verify Everything is Working

### Checklist:

- [ ] Both domains added in Cloudflare Pages (Settings → Custom domains)
- [ ] Both show green checkmarks ✅
- [ ] SSL certificate status shows "Active"
- [ ] Latest deployment shows "Success"
- [ ] DNS propagated (checked via whatsmydns.net)
- [ ] Tested direct Pages URL (to confirm build works)

---

## Test Your Domain

1. **Wait 30 minutes** after configuring
2. **Clear browser cache** (Ctrl+Shift+Delete)
3. **Try accessing:**
   - `https://careeredgeconsulting.ca`
   - `https://www.careeredgeconsulting.ca`
4. **Both should work** and show your site

---

## Still Not Working?

**Please check and share:**
1. What you see in Cloudflare Pages → Settings → Custom domains (screenshot if possible)
2. Latest deployment status (Success or Failed?)
3. DNS check results from [whatsmydns.net](https://www.whatsmydns.net) for `careeredgeconsulting.ca`
4. Does the direct Pages URL work? (e.g., `career-edge-consulting.pages.dev`)
5. Browser console errors (F12 → Console tab)

This will help identify the exact issue! 🚀


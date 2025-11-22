# Cloudflare Pages Domain Configuration Troubleshooting

## Issue: "The content of the page cannot be displayed"

If you're seeing this error after configuring your domain, follow these steps:

---

## Step 1: Verify Domain Configuration in Cloudflare Pages

1. **Go to Cloudflare Pages Dashboard**
   - Log into [dash.cloudflare.com](https://dash.cloudflare.com)
   - Go to **Pages** → Your project (`career-edge-consulting`)

2. **Check Custom Domains**
   - Go to **Settings** → **Custom domains**
   - You should see:
     - `careeredgeconsulting.ca` (root domain)
     - `www.careeredgeconsulting.ca` (www subdomain)
   - Both should show a ✅ green checkmark if configured correctly

3. **If domains are not listed:**
   - Click **"Set up a custom domain"**
   - Add both:
     - `careeredgeconsulting.ca`
     - `www.careeredgeconsulting.ca`
   - Cloudflare will show you the DNS records needed

---

## Step 2: Verify DNS Configuration in Namecheap

### Option A: Using Cloudflare Nameservers (Recommended - Easier)

1. **In Cloudflare Pages:**
   - Go to **Settings** → **Custom domains**
   - When you add a domain, Cloudflare will show you nameservers
   - They look like:
     - `adam.ns.cloudflare.com`
     - `carol.ns.cloudflare.com`
   - **Copy these nameservers**

2. **In Namecheap:**
   - Go to [namecheap.com](https://www.namecheap.com) → **Domain List**
   - Click **"Manage"** next to `careeredgeconsulting.ca`
   - Go to **"Nameservers"** tab
   - Select **"Custom DNS"**
   - Replace the nameservers with Cloudflare's:
     - Nameserver 1: `adam.ns.cloudflare.com` (or whatever Cloudflare shows)
     - Nameserver 2: `carol.ns.cloudflare.com` (or whatever Cloudflare shows)
   - Click **"Save"**
   - **Wait 5-30 minutes for DNS propagation**

### Option B: Using Namecheap Nameservers (More Complex)

If you want to keep Namecheap nameservers, you need to add CNAME records:

1. **In Namecheap:**
   - Go to **Domain List** → **Manage** → **Advanced DNS** tab
   
2. **For Root Domain (careeredgeconsulting.ca):**
   - **Type**: `A Record`
   - **Host**: `@`
   - **Value**: Get this from Cloudflare Pages (they'll provide an IP or CNAME target)
   - **TTL**: Automatic
   
   OR if Cloudflare gives you a CNAME:
   - **Type**: `CNAME Record`
   - **Host**: `@`
   - **Value**: Your Cloudflare Pages URL (e.g., `career-edge-consulting.pages.dev`)
   - **TTL**: Automatic

3. **For WWW (www.careeredgeconsulting.ca):**
   - **Type**: `CNAME Record`
   - **Host**: `www`
   - **Value**: Your Cloudflare Pages URL (e.g., `career-edge-consulting.pages.dev`)
   - **TTL**: Automatic

---

## Step 3: Check SSL Certificate Status

1. **In Cloudflare Pages:**
   - Go to **Settings** → **Custom domains**
   - Look for SSL certificate status
   - Should show: **"Active"** or **"Provisioning"**
   
2. **If SSL is not active:**
   - Wait 5-10 minutes after adding the domain
   - SSL certificates are automatically provisioned by Cloudflare
   - If it's stuck, try removing and re-adding the domain

---

## Step 4: Verify Build Status

1. **Check Latest Deployment:**
   - Go to **Deployments** tab in Cloudflare Pages
   - Check the latest deployment status
   - Should show: **"Success"** ✅
   
2. **If deployment failed:**
   - Click on the failed deployment
   - Check the build logs for errors
   - Common issues:
     - Missing environment variables
     - Build command errors
     - Missing dependencies

---

## Step 5: Check Browser Console for Errors

1. **Open your website** in a browser
2. **Press F12** (or right-click → Inspect)
3. **Go to Console tab**
4. **Look for errors:**
   - Network errors (404, 500, etc.)
   - JavaScript errors
   - CORS errors

---

## Step 6: Verify Domain is Active in Cloudflare

1. **Check DNS Propagation:**
   - Use [whatsmydns.net](https://www.whatsmydns.net)
   - Enter `careeredgeconsulting.ca`
   - Check if DNS is propagated globally
   - Can take up to 48 hours (usually 1-4 hours)

2. **Test Direct Access:**
   - Try accessing your Cloudflare Pages URL directly:
     - `https://career-edge-consulting.pages.dev` (or your Pages URL)
   - If this works, it's a DNS/domain configuration issue
   - If this doesn't work, it's a build/deployment issue

---

## Common Issues and Solutions

### Issue 1: "The content of the page cannot be displayed"

**Possible causes:**
- DNS not fully propagated (wait longer)
- Domain not added in Cloudflare Pages
- SSL certificate not provisioned yet
- Build failed

**Solution:**
- Verify domain is added in Cloudflare Pages
- Wait 10-30 minutes for SSL provisioning
- Check build status
- Verify DNS is propagated

### Issue 2: Domain works but shows default Cloudflare page

**Solution:**
- Make sure domain is linked to your Pages project
- Check Custom domains settings
- Verify it's pointing to the correct project

### Issue 3: HTTPS not working

**Solution:**
- Wait for SSL certificate to provision (5-10 minutes)
- Check SSL status in Cloudflare Pages
- Make sure "Always Use HTTPS" is enabled in Cloudflare dashboard

### Issue 4: WWW doesn't work but root domain does (or vice versa)

**Solution:**
- Make sure both `careeredgeconsulting.ca` and `www.careeredgeconsulting.ca` are added in Cloudflare Pages
- Check DNS records for both
- Wait for DNS propagation

---

## Recommended Configuration

**Best Setup:**
1. ✅ Use Cloudflare nameservers (easiest)
2. ✅ Add both root and www domains in Cloudflare Pages
3. ✅ Wait for DNS and SSL provisioning (10-30 minutes)
4. ✅ Enable "Always Use HTTPS" in Cloudflare dashboard

---

## Quick Checklist

- [ ] Domain added in Cloudflare Pages (Settings → Custom domains)
- [ ] Both `careeredgeconsulting.ca` and `www.careeredgeconsulting.ca` added
- [ ] Nameservers updated in Namecheap (if using Cloudflare nameservers)
- [ ] DNS records correct (if using Namecheap nameservers)
- [ ] SSL certificate shows "Active" in Cloudflare Pages
- [ ] Latest deployment shows "Success" status
- [ ] DNS propagated (checked via whatsmydns.net)
- [ ] Tested direct Pages URL (to isolate DNS vs build issues)

---

## Need Help?

1. **Check Cloudflare Status**: [status.cloudflare.com](https://status.cloudflare.com)
2. **Cloudflare Community**: [community.cloudflare.com](https://community.cloudflare.com)
3. **Cloudflare Pages Docs**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

---

## Next Steps

After following these steps, if still not working:

1. **Share these details:**
   - What do you see when accessing the domain? (exact error message)
   - Status in Cloudflare Pages (domain, SSL, deployment)
   - DNS check results from whatsmydns.net
   - Browser console errors (F12 → Console)

2. **Try these:**
   - Clear browser cache
   - Try incognito/private browsing
   - Try different browser
   - Check if Pages URL works directly

Good luck! 🚀


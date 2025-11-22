# Cloudflare Pages Deployment Guide - Career Edge Consulting

Complete step-by-step guide to deploy your website to Cloudflare Pages (FREE) and connect your Namecheap domain `careeredgeconsulting.ca`.

---

## Prerequisites

- ✅ GitHub account (free)
- ✅ Cloudflare account (free)
- ✅ Namecheap domain: `careeredgeconsulting.ca`
- ✅ Your code ready to push

---

## Part 1: Push to GitHub

### Step 1: Initialize Git (if not already done)

```powershell
cd career-edge-boost-main
git init
```

### Step 2: Check Git Status

```powershell
git status
```

### Step 3: Add All Files

```powershell
git add .
```

### Step 4: Create Initial Commit

```powershell
git commit -m "Initial commit: Career Edge Consulting website"
```

### Step 5: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. **Repository name**: `career-edge-consulting` (or any name you prefer)
4. **Description**: "Career Edge Consulting - Resume Review & Job Search Coaching Website"
5. **Visibility**: Choose **Public** (required for free Cloudflare Pages) or **Private** (requires Cloudflare Pro)
6. **DO NOT** check "Initialize with README" (you already have files)
7. Click **"Create repository"**

### Step 6: Connect to GitHub and Push

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/career-edge-consulting.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you need to authenticate:**
- GitHub may ask for username and password
- Use a **Personal Access Token** instead of password (see below)

### Step 7: Create GitHub Personal Access Token (if needed)

1. Go to GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Cloudflare Deployment"
4. **Expiration**: Choose 90 days or No expiration
5. **Select scopes**: Check `repo` (all checkboxes under it)
6. Click **"Generate token"**
7. **Copy the token** (you won't see it again!)
8. Use this token as your password when pushing

---

## Part 2: Deploy to Cloudflare Pages

### Step 1: Sign Up for Cloudflare

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click **"Sign up"** (or **"Log in"** if you have an account)
3. Sign up with email or GitHub (GitHub is easier!)

### Step 2: Create New Project

1. Once logged in, click **"Create a project"** or **"Connect to Git"**
2. Click **"Connect to Git"**
3. **Authorize Cloudflare Pages** to access your GitHub account
   - Select your GitHub account
   - Click **"Authorize Cloudflare Pages"**
   - You may need to approve specific repositories

### Step 3: Select Repository

1. You'll see a list of your GitHub repositories
2. Find and select: **`career-edge-consulting`** (or your repository name)
3. Click **"Begin setup"**

### Step 4: Configure Build Settings

Cloudflare should auto-detect your project, but verify these settings:

- **Project name**: `career-edge-consulting` (or your preference)
- **Production branch**: `main`
- **Framework preset**: **Vite** (should auto-detect)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave as default)

**Advanced Settings** (click "Show advanced" if needed):
- **Node.js version**: `18` or `20` (latest LTS)
- **Environment variables**: Leave empty for now (add later if needed)

### Step 5: Deploy!

1. Review your settings
2. Click **"Save and Deploy"**
3. Wait 2-3 minutes for the build to complete
4. You'll get a URL like: `career-edge-consulting.pages.dev`

✅ **Your site is now live!**

---

## Part 3: Connect Your Custom Domain (careeredgeconsulting.ca)

### Step 1: Add Domain in Cloudflare Pages

1. Go to your project in Cloudflare Pages
2. Click **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter: `careeredgeconsulting.ca`
5. Click **"Continue"**
6. Cloudflare will show you DNS records to add

### Step 2: Configure DNS in Namecheap

**Option A: Use Cloudflare Nameservers (Recommended - Easier)**

1. **In Cloudflare Pages:**
   - It will show you Cloudflare nameservers (e.g., `adam.ns.cloudflare.com`, `carol.ns.cloudflare.com`)
   - Copy both nameservers

2. **In Namecheap:**
   - Go to [namecheap.com](https://www.namecheap.com) → **Domain List**
   - Click **"Manage"** next to `careeredgeconsulting.ca`
   - Go to **"Nameservers"** tab
   - Select **"Custom DNS"**
   - Replace the nameservers with Cloudflare's:
     - Nameserver 1: `adam.ns.cloudflare.com` (or whatever Cloudflare gives you)
     - Nameserver 2: `carol.ns.cloudflare.com` (or whatever Cloudflare gives you)
   - Click **"Save"**

3. **Back in Cloudflare:**
   - After updating nameservers, go back to Cloudflare Pages
   - It should automatically detect and configure the domain
   - Wait a few minutes for DNS propagation

**Option B: Keep Namecheap Nameservers (More Complex)**

If you want to keep Namecheap nameservers, you'll need to add CNAME records:

1. **In Namecheap:**
   - Go to **"Advanced DNS"** tab
   - Add a **CNAME Record**:
     - **Host**: `@` or `careeredgeconsulting.ca`
     - **Value**: `career-edge-consulting.pages.dev` (or your Cloudflare Pages URL)
     - **TTL**: Automatic

   - Add another **CNAME Record** for www:
     - **Host**: `www`
     - **Value**: `career-edge-consulting.pages.dev`
     - **TTL**: Automatic

2. **In Cloudflare Pages:**
   - Add both `careeredgeconsulting.ca` and `www.careeredgeconsulting.ca`
   - Wait for DNS propagation (24-48 hours)

### Step 3: Verify Domain Connection

1. Wait 5-30 minutes for DNS to propagate
2. Check domain status in Cloudflare Pages
3. You should see a green checkmark ✅
4. Your site should be accessible at:
   - `https://careeredgeconsulting.ca`
   - `https://www.careeredgeconsulting.ca`

**SSL Certificate:**
- Cloudflare automatically provides FREE SSL certificates
- HTTPS will be enabled automatically
- Wait a few minutes for SSL to activate

---

## Part 4: Test Your Deployment

### Checklist

- [ ] Site loads at `careeredgeconsulting.ca`
- [ ] HTTPS works (green lock icon)
- [ ] All pages work (Home, Services, About, Contact, Booking)
- [ ] Language switching works (EN/FR)
- [ ] Calendly widget loads on Booking page
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Contact form works (or shows development message)

### Common Issues

**Site shows 404 or blank page:**
- Check that `dist` folder is set as build output directory
- Verify build completed successfully in Cloudflare

**SSL not working:**
- Wait 5-10 minutes for SSL certificate to provision
- Check domain DNS settings

**Domain not connecting:**
- Wait up to 48 hours for DNS propagation
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS status
- Verify nameservers or CNAME records are correct

---

## Part 5: Future Updates

### Update Your Site

Every time you push to GitHub, Cloudflare automatically rebuilds and deploys:

```powershell
# Make your changes locally
git add .
git commit -m "Your update message"
git push origin main
```

That's it! Cloudflare will automatically:
1. Detect the push
2. Build your site
3. Deploy the new version
4. Usually takes 2-3 minutes

You can see deployment status in Cloudflare Pages dashboard.

---

## Part 6: Environment Variables (If Needed Later)

If you need to add environment variables (like Calendly URL):

1. Go to Cloudflare Pages → Your Project → **Settings** → **Environment variables**
2. Add variable:
   - **Name**: `VITE_CALENDLY_URL`
   - **Value**: `https://calendly.com/careeredgeconsulting/`
3. Click **"Save"**
4. Redeploy (or it will use on next push)

---

## Part 7: Preview Deployments (For Testing)

Cloudflare creates preview deployments for pull requests:

1. Create a new branch in GitHub
2. Make changes
3. Create a Pull Request
4. Cloudflare automatically creates a preview URL
5. Test on preview URL before merging

---

## Troubleshooting

### Build Fails

1. Check build logs in Cloudflare Pages dashboard
2. Common issues:
   - Missing dependencies in `package.json`
   - Build command incorrect
   - Node version mismatch

### DNS Not Propagating

- Use [whatsmydns.net](https://www.whatsmydns.net) to check globally
- Wait up to 48 hours
- Clear browser cache
- Try incognito/private browsing

### SSL Certificate Issues

- Wait 10-15 minutes after domain connection
- Verify domain is properly connected in Cloudflare
- Check DNS settings are correct

---

## Support Resources

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Cloudflare Community**: https://community.cloudflare.com/
- **Namecheap DNS Guide**: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/

---

## Summary

1. ✅ Push code to GitHub
2. ✅ Connect Cloudflare Pages to GitHub
3. ✅ Configure build settings (auto-detected)
4. ✅ Deploy!
5. ✅ Add custom domain in Cloudflare Pages
6. ✅ Update DNS in Namecheap
7. ✅ Wait for propagation
8. ✅ Site is live! 🚀

**Your site will be:**
- ✅ Fast (Cloudflare's global CDN)
- ✅ Free SSL/HTTPS
- ✅ Automatic deployments on git push
- ✅ Custom domain: `careeredgeconsulting.ca`
- ✅ 100% FREE!

Good luck! 🎉


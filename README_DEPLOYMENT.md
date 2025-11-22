# 🚀 Quick Start: Deploy to Cloudflare Pages

## Step 1: Push to GitHub (5 minutes)

**Follow the commands in order:**

```powershell
# 1. Go to project folder
cd career-edge-boost-main

# 2. Initialize Git
git init

# 3. Add all files
git add .

# 4. Create first commit
git commit -m "Initial commit: Career Edge Consulting website"

# 5. Rename branch to main
git branch -M main

# 6. Create GitHub repo at github.com, then add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/career-edge-consulting.git

# 7. Push to GitHub
git push -u origin main
```

**Need help?** See `GITHUB_PUSH.md` for detailed instructions.

---

## Step 2: Deploy to Cloudflare Pages (10 minutes)

1. **Go to**: [pages.cloudflare.com](https://pages.cloudflare.com)
2. **Sign up** (use GitHub for easy connection)
3. **Click**: "Create a project" → "Connect to Git"
4. **Authorize**: Cloudflare Pages access to GitHub
5. **Select**: Your `career-edge-consulting` repository
6. **Build Settings** (should auto-detect):
   - Framework: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
7. **Click**: "Save and Deploy"
8. **Wait 2-3 minutes** → Your site is live! 🎉

**Detailed guide?** See `CLOUDFLARE_DEPLOYMENT.md`

---

## Step 3: Connect Domain (15 minutes)

### In Cloudflare Pages:
1. Go to your project → **"Custom domains"** tab
2. Click **"Set up a custom domain"**
3. Enter: `careeredgeconsulting.ca`
4. Copy the nameservers Cloudflare gives you

### In Namecheap:
1. Go to Domain List → **Manage** → **Nameservers** tab
2. Select **"Custom DNS"**
3. Paste Cloudflare's nameservers
4. Save

### Wait:
- DNS propagation: 5-30 minutes (can take up to 48 hours)
- SSL certificate: Automatic (5-10 minutes)

**Done!** Your site will be live at `https://careeredgeconsulting.ca`

---

## 📝 Future Updates

Just push to GitHub:
```powershell
git add .
git commit -m "Update message"
git push origin main
```

Cloudflare automatically rebuilds and deploys! ✨

---

## 📚 Full Guides

- **`GITHUB_PUSH.md`** - Detailed GitHub setup
- **`CLOUDFLARE_DEPLOYMENT.md`** - Complete Cloudflare guide

---

## ✅ Build Settings (Already Configured)

- ✅ Framework: Vite (auto-detected)
- ✅ Build: `npm run build`
- ✅ Output: `dist`
- ✅ SPA Routing: `public/_redirects` file added

Everything is ready to deploy! 🚀


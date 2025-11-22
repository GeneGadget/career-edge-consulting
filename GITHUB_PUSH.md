# Quick Guide: Push to GitHub

## Step-by-Step Commands (Run these in order)

### 1. Navigate to Project Directory
```powershell
cd career-edge-boost-main
```

### 2. Initialize Git (if not already done)
```powershell
git init
```

### 3. Check Status
```powershell
git status
```

### 4. Add All Files
```powershell
git add .
```

### 5. Create First Commit
```powershell
git commit -m "Initial commit: Career Edge Consulting website"
```

### 6. Rename Branch to Main
```powershell
git branch -M main
```

### 7. Create Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click **"+"** (top right) → **"New repository"**
3. Name: `career-edge-consulting` (or your choice)
4. **DO NOT** initialize with README
5. Click **"Create repository"**

### 8. Add GitHub Remote
Replace `YOUR_USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/career-edge-consulting.git
```

### 9. Push to GitHub
```powershell
git push -u origin main
```

**If prompted for credentials:**
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (NOT your GitHub password)

---

## Create GitHub Personal Access Token

If you need a token:

1. Go to: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note**: "Cloudflare Deployment"
4. **Expiration**: 90 days (or No expiration)
5. **Select scopes**: Check `repo` (all)
6. Click **"Generate token"**
7. **Copy the token** and use it as password when pushing

---

## After Pushing

Once code is on GitHub, follow the **CLOUDFLARE_DEPLOYMENT.md** guide to deploy!

---

## Future Updates

To update your site:

```powershell
git add .
git commit -m "Your update message"
git push origin main
```

Cloudflare will automatically rebuild and deploy! 🚀


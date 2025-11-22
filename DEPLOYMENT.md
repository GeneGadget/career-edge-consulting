# Deployment Guide for Career Edge Consulting

This guide will help you deploy your website to Vercel (recommended) and connect your Namecheap domain `careeredgeconsulting.ca`.

## Option 1: Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Prepare Your Code

1. Make sure your code is committed to Git:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

2. Push to GitHub/GitLab/Bitbucket:
   ```bash
   git push origin main
   ```

### Step 2: Deploy to Vercel

1. **Sign up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Import Your Project**
   - Click "Add New" → "Project"
   - Import your Git repository
   - Vercel will auto-detect it's a Vite project

3. **Configure Build Settings** (usually auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `your-project.vercel.app`

### Step 3: Connect Your Namecheap Domain

#### In Vercel:

1. Go to your project → **Settings** → **Domains**
2. Enter your domain: `careeredgeconsulting.ca`
3. Also add `www.careeredgeconsulting.ca` (Vercel will suggest this)
4. Vercel will show you DNS records to configure

#### In Namecheap:

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → Click **Manage** next to `careeredgeconsulting.ca`
3. Go to **Advanced DNS** tab
4. Add/Update these DNS records:

   **For Root Domain (careeredgeconsulting.ca):**
   - **Type**: `A Record`
   - **Host**: `@`
   - **Value**: `76.76.21.21` (Vercel's IP - check Vercel's domain settings for current IP)
   - **TTL**: Automatic

   **For WWW (www.careeredgeconsulting.ca):**
   - **Type**: `CNAME Record`
   - **Host**: `www`
   - **Value**: `cname.vercel-dns.com.`
   - **TTL**: Automatic

   **OR use Vercel's Nameservers** (easier):
   - In Namecheap, go to **Nameservers** tab
   - Select "Custom DNS"
   - Add these nameservers (Vercel will provide them in the domain settings):
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

5. **Save changes**

#### Wait for DNS Propagation
- DNS changes can take 24-48 hours (usually 1-2 hours)
- Check status in Vercel's domain settings

### Step 4: SSL Certificate (Automatic!)
- Vercel automatically provides free SSL certificates
- Your site will be available at `https://careeredgeconsulting.ca`

---

## Option 2: Deploy to Netlify (Alternative)

### Step 1: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Step 2: Connect Domain

1. In Netlify: **Site settings** → **Domain management** → **Add custom domain**
2. Enter `careeredgeconsulting.ca`
3. In Namecheap **Advanced DNS**, add:
   - **Type**: `A Record`, **Host**: `@`, **Value**: Netlify's IP (check Netlify docs)
   - **Type**: `CNAME`, **Host**: `www`, **Value**: `your-site.netlify.app`

---

## Option 3: Deploy to Cloudflare Pages (Free CDN)

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your Git repository
3. Build settings: `npm run build`, output: `dist`
4. Add domain in Cloudflare (if your domain uses Cloudflare DNS)

---

## After Deployment Checklist

- [ ] Website is accessible at your domain
- [ ] HTTPS is working (SSL certificate active)
- [ ] Both `careeredgeconsulting.ca` and `www.careeredgeconsulting.ca` work
- [ ] Test all pages (Home, Services, About, Contact, Booking)
- [ ] Test language switching (EN/FR)
- [ ] Check mobile responsiveness
- [ ] Verify contact form is working
- [ ] Update Calendly URL in Booking page if needed

---

## Environment Variables (If Needed Later)

If you add environment variables (like EmailJS, API keys), add them in:
- **Vercel**: Project → Settings → Environment Variables
- **Netlify**: Site settings → Build & deploy → Environment

---

## Updating Your Site

1. Make changes locally
2. Commit and push to Git
3. Vercel/Netlify automatically rebuilds and deploys (usually in 2-3 minutes)

---

## Troubleshooting

**DNS not working?**
- Use [whatsmydns.net](https://www.whatsmydns.net) to check DNS propagation
- Wait up to 48 hours for full propagation

**Build fails?**
- Check build logs in Vercel/Netlify dashboard
- Ensure `package.json` has all dependencies
- Make sure Node version is compatible (Vercel auto-detects)

**404 errors on routes?**
- For React Router (SPA), you need a redirect rule
- Vercel: Add `vercel.json` with redirects (see below)
- Netlify: Add `_redirects` file (see below)

### Add SPA Redirect Configuration

**For Vercel** - Create `vercel.json` in project root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**For Netlify** - Create `public/_redirects` file:
```
/*    /index.html   200
```

---

## Recommended: Vercel Configuration File

Create `vercel.json` in your project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

This ensures:
- All routes work correctly (SPA routing)
- Basic security headers are set

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Namecheap DNS Guide**: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-to-change-dns-for-a-domain/
- **Vercel Domain Setup**: https://vercel.com/docs/concepts/projects/domains

Good luck with your deployment! 🚀


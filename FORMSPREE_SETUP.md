# Formspree Setup Guide

## Step 1: Get Your Formspree Form ID

1. **Log into Formspree**: Go to [formspree.io](https://formspree.io) and sign in
2. **Create a New Form** (if you haven't already):
   - Click **"New Form"** or **"+ Create Form"**
   - Form name: "Career Edge Consulting Contact Form"
   - Email to receive submissions: `info@careeredgeconsulting.ca`
   - Click **"Create Form"**
3. **Get Your Form ID**:
   - After creating the form, you'll see your form endpoint
   - It will look like: `https://formspree.io/f/xxxxxxxxxx`
   - Or just the ID: `xxxxxxxxxx` (the part after `/f/`)
   - **Copy this ID** - you'll need it!

## Step 2: Add Form ID to Environment Variables

### Option A: Cloudflare Pages Environment Variables (Recommended)

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Environment variables**
3. Add a new variable:
   - **Variable name**: `VITE_FORMSPREE_ID`
   - **Value**: Your Formspree form ID (just the ID, e.g., `abc123xyz`)
   - **Environment**: Production (and Preview if you want)
4. Click **"Save"**
5. **Redeploy** your site (or it will use on next git push)

### Option B: Local Development (.env file)

Create a `.env` file in your project root:

```env
VITE_FORMSPREE_ID=your_formspree_id_here
```

**Note**: Add `.env` to `.gitignore` (already done) to keep your ID private.

## Step 3: Test Your Form

1. Visit your contact page
2. Fill out the form
3. Submit it
4. Check your email at `info@careeredgeconsulting.ca`
5. You should receive the form submission!

## How It Works

The form will automatically:
- Send submissions to `info@careeredgeconsulting.ca`
- Include all form fields (name, email, contact method, message)
- Work without requiring the user's email client
- Send you notifications via Formspree

## Formspree Free Tier

- **50 submissions/month** (perfect for starting out)
- Email notifications
- Spam protection
- No credit card required

## Troubleshooting

**Not receiving emails?**
- Check spam folder
- Verify your Formspree form email is set to `info@careeredgeconsulting.ca`
- Check Formspree dashboard for submissions

**Form not submitting?**
- Verify `VITE_FORMSPREE_ID` environment variable is set
- Check browser console for errors
- Make sure you're using the form ID (not the full URL)

**Need more submissions?**
- Upgrade to Formspree paid plan for unlimited submissions

---

Once you've added the `VITE_FORMSPREE_ID` environment variable in Cloudflare, the form will work automatically! 🎉


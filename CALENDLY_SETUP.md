# Calendly Setup Guide

## Where to Change Your Calendly Account

### Location
**File:** `src/pages/Booking.tsx`  
**Line:** 23

### Current Code
```typescript
window.Calendly.initInlineWidget({
  url: "https://calendly.com/your-username",  // ← CHANGE THIS LINE
  parentElement: calendlyRef.current,
  prefill: {},
  utm: {},
});
```

### How to Update

1. **Get your Calendly URL:**
   - Log into your Calendly account
   - Go to your event type settings
   - Copy your Calendly URL (e.g., `https://calendly.com/amy-careeredge/30min`)

2. **Replace the URL:**
   - Open `src/pages/Booking.tsx`
   - Find line 23
   - Replace `"https://calendly.com/your-username"` with your actual Calendly URL
   - Save the file

### Example
```typescript
// Before
url: "https://calendly.com/your-username",

// After (example)
url: "https://calendly.com/amy-careeredge/30min",
```

### Additional Calendly Configuration

You can also customize the Calendly widget by modifying the `prefill` and `utm` objects:

```typescript
window.Calendly.initInlineWidget({
  url: "https://calendly.com/your-username",
  parentElement: calendlyRef.current,
  prefill: {
    name: "Client Name",  // Pre-fill name (optional)
    email: "client@example.com",  // Pre-fill email (optional)
  },
  utm: {
    utmCampaign: "website",  // UTM tracking (optional)
    utmSource: "careeredge",
    utmMedium: "website",
  },
});
```

### Important Notes

- Make sure your Calendly event type has **file upload enabled** if you want clients to upload resumes during booking
- The Calendly widget will automatically appear on the booking page once the URL is updated
- The widget is already styled to match your site's design


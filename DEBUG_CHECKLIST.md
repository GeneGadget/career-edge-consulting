# Debug Checklist

If the website is not loading, check the following:

## 1. Server Status
- Server should be running on `http://localhost:8080`
- Check terminal for any error messages
- Verify port 8080 is not blocked by firewall

## 2. Browser Console
Open browser DevTools (F12) and check:
- **Console tab**: Look for JavaScript errors
- **Network tab**: Check if files are loading (look for 404 errors)
- **Application tab**: Check if there are any service worker issues

## 3. Common Issues Fixed
✅ File extension: `useAnalytics.ts` → `useAnalytics.tsx` (JSX requires .tsx)
✅ Router context: `BrowserRouter` now wraps all providers
✅ ErrorBoundary: Simplified to not require context providers

## 4. Quick Fixes to Try

### Clear Browser Cache
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or clear browser cache completely

### Check Terminal Output
Look for:
- Build errors
- Module not found errors
- TypeScript errors
- Port already in use errors

### Verify Files Exist
- `src/hooks/useAnalytics.tsx` should exist (not .ts)
- All page files should exist in `src/pages/`
- All component files should exist in `src/components/`

## 5. Manual Server Restart
If needed, stop and restart:
```powershell
# Stop all node processes
Get-Process node | Stop-Process -Force

# Restart server
cd career-edge-boost-main
npm run dev
```

## 6. Check Browser URL
Make sure you're accessing:
- `http://localhost:8080` (not 5173)
- `http://127.0.0.1:8080` (alternative)

## 7. If Still Not Working
Check the browser console for specific error messages and share them.


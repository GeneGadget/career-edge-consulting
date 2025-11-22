# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9e7cb8cb-d68c-40ae-b3de-77c0e2ae6257

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9e7cb8cb-d68c-40ae-b3de-77c0e2ae6257) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Calendly (for booking appointments)

## Calendly Setup

The booking page is integrated with Calendly for scheduling appointments. To complete the setup:

1. Create a Calendly account at https://calendly.com
2. Set up your event types and availability in Calendly
3. **Enable file upload in your Calendly event settings** - This allows clients to upload their resume during booking
4. Get your Calendly URL (e.g., `https://calendly.com/your-username`)
5. Update the URL in `src/pages/Booking.tsx` line 20, replacing `"https://calendly.com/your-username"` with your actual Calendly URL
6. The Calendly widget will automatically appear on your booking page

The Calendly script and CSS have already been added to `index.html` and the booking page has been configured to display your scheduling calendar. A "Before You Book" section has been added to guide clients on uploading their resume during the booking process.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9e7cb8cb-d68c-40ae-b3de-77c0e2ae6257) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

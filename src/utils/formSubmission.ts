// Form submission utility
// This can be integrated with EmailJS (install: npm install @emailjs/browser), Resend, Formspree, or your own backend
// Currently uses development mode fallback - form data is logged to console

export interface FormData {
  name: string;
  email: string;
  contactMethod?: string;
  message: string;
}

export const submitContactForm = async (data: FormData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Option 1: Formspree (Primary method)
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (formspreeId) {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          contactMethod: data.contactMethod || "Not specified",
          message: data.message,
          _subject: `Contact Form from ${data.name}`,
          _replyto: data.email,
        }),
      });

      if (response.ok) {
        // Formspree succeeded - return immediately, don't fall through to mailto
        return { success: true };
      } else {
        // Try to get error message from Formspree
        try {
          const errorData = await response.json();
          return { 
            success: false, 
            error: errorData.error || "Failed to send message. Please try again." 
          };
        } catch {
          return { 
            success: false, 
            error: "Failed to send message. Please try again." 
          };
        }
      }
    }

    // Option 2: Direct API endpoint (fallback)
    if (import.meta.env.VITE_API_ENDPOINT) {
      const response = await fetch(import.meta.env.VITE_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true };
      } else {
        const errorData = await response.json();
        return { success: false, error: errorData.message || "Failed to send message" };
      }
    }

    // Fallback: Use mailto link to send email directly
    // This works by opening the user's email client with pre-filled form data
    const subject = encodeURIComponent(`Contact Form from ${data.name}`);
    const emailBody = 
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Preferred Contact Method: ${data.contactMethod || "Not specified"}\n\n` +
      `Message:\n${data.message}`;
    const body = encodeURIComponent(emailBody);
    
    // Create and trigger mailto link
    const mailtoLink = `mailto:info@careeredgeconsulting.ca?subject=${subject}&body=${body}`;
    const mailtoAnchor = document.createElement('a');
    mailtoAnchor.href = mailtoLink;
    mailtoAnchor.style.display = 'none';
    document.body.appendChild(mailtoAnchor);
    mailtoAnchor.click();
    document.body.removeChild(mailtoAnchor);
    
    // Return success - the email client should open
    return { success: true };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};


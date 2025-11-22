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
    // Option 1: Direct API endpoint
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

    // Option 3: Formspree or similar service
    if (import.meta.env.VITE_FORMSPREE_ID) {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true };
      }
    }

    // Fallback: Log to console (for development)
    if (import.meta.env.DEV || import.meta.env.MODE === "development") {
      console.log("Form submission (development mode):", data);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return { success: true };
    }

    return { success: false, error: "No form submission service configured" };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "An unexpected error occurred",
    };
  }
};


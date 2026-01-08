"use server";

/**
 * Contact Form Server Action
 *
 * Handles form submission with server-side validation.
 * Currently a placeholder that validates and returns success.
 * Email capture integration point deferred for future implementation.
 */

/** Form field validation errors */
export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  form?: string;
}

/** Form submission result */
export interface FormResult {
  success: boolean;
  errors?: FormErrors;
  message?: string;
}

/** Valid subject options */
const VALID_SUBJECTS = [
  "General Inquiry",
  "Enrollment Information",
  "Partnership Inquiry",
  "Scholarship Application",
  "Media/Press",
] as const;

/**
 * Email validation regex
 * Matches standard email format: local@domain.tld
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sanitize string input to prevent XSS
 * Removes HTML tags and trims whitespace
 */
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .trim();
}

/**
 * Validate form data server-side
 * Returns errors object if validation fails, null if valid
 */
function validateFormData(formData: FormData): FormErrors | null {
  const errors: FormErrors = {};

  // Validate name
  const name = formData.get("name") as string | null;
  if (!name || name.trim() === "") {
    errors.name = "Name is required";
  } else if (name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 100) {
    errors.name = "Name must be less than 100 characters";
  }

  // Validate email
  const email = formData.get("email") as string | null;
  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Validate subject
  const subject = formData.get("subject") as string | null;
  if (!subject || subject.trim() === "") {
    errors.subject = "Please select a subject";
  } else if (!VALID_SUBJECTS.includes(subject as typeof VALID_SUBJECTS[number])) {
    errors.subject = "Please select a valid subject";
  }

  // Validate message
  const message = formData.get("message") as string | null;
  if (!message || message.trim() === "") {
    errors.message = "Message is required";
  } else if (message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 5000) {
    errors.message = "Message must be less than 5000 characters";
  }

  // Check honeypot - if filled, this is likely spam
  const honeypot = formData.get("website") as string | null;
  if (honeypot && honeypot.trim() !== "") {
    // Don't reveal that we detected spam, just return generic error
    errors.form = "Unable to process your request. Please try again later.";
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Submit contact form
 *
 * Server action that handles form submission with validation.
 * Returns success/error state with appropriate messages.
 *
 * @param formData - Form data from contact form
 * @returns FormResult with success status and any errors
 */
export async function submitContactForm(formData: FormData): Promise<FormResult> {
  // Validate form data
  const errors = validateFormData(formData);

  if (errors) {
    return {
      success: false,
      errors,
    };
  }

  // Extract and sanitize form data
  const name = sanitizeInput(formData.get("name") as string);
  const email = (formData.get("email") as string).trim().toLowerCase();
  const subject = formData.get("subject") as string;
  const message = sanitizeInput(formData.get("message") as string);

  try {
    // TODO: Integration point for email capture service
    // This is where you would integrate with:
    // - Email service (SendGrid, Resend, etc.)
    // - CRM system
    // - Database storage
    // - Notification service

    // For now, log the submission (remove in production)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message: "Thank you for your message! We'll be in touch soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      errors: {
        form: "An error occurred while sending your message. Please try again or email us directly at diallo@tesa4space.org",
      },
    };
  }
}

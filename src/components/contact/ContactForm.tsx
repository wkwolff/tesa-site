"use client";

import { useState, useCallback, useTransition, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { submitContactForm, type FormErrors } from "@/app/contact/actions";

/**
 * Subject options for the contact form
 */
const SUBJECT_OPTIONS = [
  { value: "", label: "Select a subject..." },
  { value: "General Inquiry", label: "General Inquiry" },
  { value: "Enrollment Information", label: "Enrollment Information" },
  { value: "Partnership Inquiry", label: "Partnership Inquiry" },
  { value: "Scholarship Application", label: "Scholarship Application" },
  { value: "Media/Press", label: "Media/Press" },
] as const;

/**
 * Form data state interface
 */
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string; // Honeypot field
}

/**
 * Touched fields tracking
 */
interface TouchedFields {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate a single field
 */
function validateField(name: keyof FormData, value: string): string | undefined {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required";
      if (value.trim().length < 2) return "Name must be at least 2 characters";
      if (value.length > 100) return "Name must be less than 100 characters";
      return undefined;

    case "email":
      if (!value.trim()) return "Email is required";
      if (!EMAIL_REGEX.test(value.trim())) return "Please enter a valid email address";
      return undefined;

    case "subject":
      if (!value.trim()) return "Please select a subject";
      return undefined;

    case "message":
      if (!value.trim()) return "Message is required";
      if (value.trim().length < 10) return "Message must be at least 10 characters";
      if (value.length > 5000) return "Message must be less than 5000 characters";
      return undefined;

    default:
      return undefined;
  }
}

/**
 * ContactForm Component
 *
 * Accessible contact form with client-side validation and server action submission.
 * Features:
 * - Real-time validation on blur
 * - ARIA attributes for accessibility
 * - Honeypot spam protection
 * - Loading states during submission
 * - Success/error feedback
 */
export default function ContactForm() {
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // Honeypot
  });

  // Track which fields have been touched (for validation on blur)
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  // Client-side validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Server response state
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Pre-fill subject from URL query parameter
  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      // Find matching subject option
      const matchingOption = SUBJECT_OPTIONS.find(
        (opt) => opt.value.toLowerCase() === subjectParam.toLowerCase()
      );
      if (matchingOption && matchingOption.value) {
        setFormData((prev) => ({ ...prev, subject: matchingOption.value }));
      }
    }
  }, [searchParams]);

  /**
   * Handle input change
   */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error for this field if it was touched and now valid
      if (touched[name as keyof TouchedFields]) {
        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched]
  );

  /**
   * Handle field blur - trigger validation
   */
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      // Mark field as touched
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Validate field
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    []
  );

  /**
   * Validate all fields
   */
  const validateAllFields = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (["name", "email", "subject", "message"] as const).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });

    return isValid;
  }, [formData]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Clear previous submit status
      setSubmitStatus({ type: null, message: "" });

      // Validate all fields
      if (!validateAllFields()) {
        // Focus first error field
        const firstErrorField = Object.keys(errors)[0];
        if (firstErrorField) {
          document.getElementById(firstErrorField)?.focus();
        }
        return;
      }

      // Submit form
      startTransition(async () => {
        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("subject", formData.subject);
        formDataObj.append("message", formData.message);
        formDataObj.append("website", formData.website); // Honeypot

        const result = await submitContactForm(formDataObj);

        if (result.success) {
          setSubmitStatus({
            type: "success",
            message: result.message || "Thank you for your message! We'll be in touch soon.",
          });
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            website: "",
          });
          setTouched({ name: false, email: false, subject: false, message: false });
          setErrors({});
        } else {
          setSubmitStatus({
            type: "error",
            message:
              result.errors?.form ||
              "An error occurred. Please try again or email us directly.",
          });
          if (result.errors) {
            setErrors(result.errors);
          }
        }
      });
    },
    [formData, validateAllFields, errors]
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Form-level status messages */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {submitStatus.message}
      </div>

      {/* Visible status message */}
      {submitStatus.type && (
        <div
          role="alert"
          className={`p-4 rounded-lg ${
            submitStatus.type === "success"
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-start gap-3">
            {submitStatus.type === "success" ? (
              <svg
                className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            )}
            <p>{submitStatus.message}</p>
          </div>
        </div>
      )}

      {/* Form fields wrapped in fieldset */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </legend>

        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name <span className="text-highlight">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus-visible-ring ${
              errors.name
                ? "border-highlight bg-red-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-highlight" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email <span className="text-highlight">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus-visible-ring ${
              errors.email
                ? "border-highlight bg-red-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-highlight" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject dropdown */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Subject <span className="text-highlight">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            className={`w-full px-4 py-3 pr-10 rounded-lg border transition-colors focus-visible-ring appearance-none bg-white bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[right_12px_center] bg-no-repeat cursor-pointer ${
              errors.subject
                ? "border-highlight bg-red-50"
                : "border-gray-300 hover:border-gray-400"
            } ${!formData.subject ? "text-gray-500" : "text-gray-900"}`}
          >
            {SUBJECT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" className="mt-1 text-sm text-highlight" role="alert">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message <span className="text-highlight">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus-visible-ring resize-y ${
              errors.message
                ? "border-highlight bg-red-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
            placeholder="How can we help you?"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-highlight" role="alert">
              {errors.message}
            </p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            {formData.message.length}/5000 characters
          </p>
        </div>

        {/* Honeypot field - hidden from users */}
        <div
          data-testid="honeypot-field"
          className="sr-only absolute left-[-9999px]"
          aria-hidden="true"
        >
          <label htmlFor="website">
            Website (leave empty)
          </label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </fieldset>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={isPending}
          className={`w-full sm:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-lg shadow-md transition-all min-h-touch ${
            isPending
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-accent-dark hover:shadow-lg focus-visible-ring"
          }`}
        >
          {isPending ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </div>

      {/* Required fields note */}
      <p className="text-sm text-gray-500">
        <span className="text-highlight">*</span> Required fields
      </p>
    </form>
  );
}

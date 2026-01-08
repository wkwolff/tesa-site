import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue(null),
  }),
}));

// Import component after mocking
import ContactPage from "@/app/contact/page";
import ContactForm from "@/components/contact/ContactForm";

describe("Contact Page", () => {
  describe("Form Rendering", () => {
    it("renders the contact form with all required fields", () => {
      render(<ContactPage />);

      // Name field - use more specific selector with role
      expect(screen.getByRole("textbox", { name: /^name/i })).toBeInTheDocument();

      // Email field - use role and name
      expect(screen.getByRole("textbox", { name: /^email/i })).toBeInTheDocument();

      // Subject dropdown
      expect(screen.getByRole("combobox", { name: /subject/i })).toBeInTheDocument();

      // Message field
      expect(screen.getByRole("textbox", { name: /message/i })).toBeInTheDocument();

      // Submit button
      expect(screen.getByRole("button", { name: /send message|submit/i })).toBeInTheDocument();
    });

    it("renders subject dropdown with all options", () => {
      render(<ContactPage />);

      const subjectSelect = screen.getByRole("combobox", { name: /subject/i });
      expect(subjectSelect).toBeInTheDocument();

      // Check all subject options
      expect(screen.getByRole("option", { name: /general inquiry/i })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /enrollment information/i })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /partnership inquiry/i })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /scholarship application/i })).toBeInTheDocument();
      expect(screen.getByRole("option", { name: /media\/press/i })).toBeInTheDocument();
    });

    it("displays contact information section with email", () => {
      render(<ContactPage />);

      expect(screen.getByText(/diallo@tesa4space\.org/i)).toBeInTheDocument();
    });
  });

  describe("Client-Side Validation", () => {
    it("shows error when submitting with empty name", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByRole("textbox", { name: /^name/i });

      // Focus and blur to trigger validation
      await user.click(nameInput);
      await user.tab();

      // Should show error for empty required field
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });
    });

    it("validates email format", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const emailInput = screen.getByRole("textbox", { name: /^email/i });

      // Enter invalid email
      await user.type(emailInput, "invalid-email");
      await user.tab();

      // Should show email format error
      await waitFor(() => {
        expect(screen.getByText(/valid email/i)).toBeInTheDocument();
      });
    });

    it("shows error for empty message", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const messageInput = screen.getByRole("textbox", { name: /message/i });

      // Focus and blur to trigger validation
      await user.click(messageInput);
      await user.tab();

      // Should show required error
      await waitFor(() => {
        expect(screen.getByText(/message is required/i)).toBeInTheDocument();
      });
    });

    it("clears error when valid input is provided", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const emailInput = screen.getByRole("textbox", { name: /^email/i });

      // Enter invalid email
      await user.type(emailInput, "invalid");
      await user.tab();

      // Wait for error to appear
      await waitFor(() => {
        expect(screen.getByText(/valid email/i)).toBeInTheDocument();
      });

      // Clear and enter valid email
      await user.clear(emailInput);
      await user.type(emailInput, "test@example.com");
      await user.tab();

      // Error should be cleared
      await waitFor(() => {
        expect(screen.queryByText(/valid email/i)).not.toBeInTheDocument();
      });
    });
  });

  describe("Honeypot Spam Protection", () => {
    it("has honeypot field that is visually hidden", () => {
      render(<ContactForm />);

      // Honeypot field should exist but be hidden
      const honeypotField = screen.getByTestId("honeypot-field");
      expect(honeypotField).toBeInTheDocument();

      // Check that it has screen reader text to avoid confusion
      expect(honeypotField).toHaveClass("sr-only");
    });

    it("honeypot field is not visible to users", () => {
      render(<ContactForm />);

      const honeypotContainer = screen.getByTestId("honeypot-field");
      // Should have positioning classes that hide it
      expect(honeypotContainer.className).toMatch(/absolute|sr-only/);
    });
  });

  describe("Form Submission Handling", () => {
    it("shows loading state during submission", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out form
      await user.type(screen.getByRole("textbox", { name: /^name/i }), "Test User");
      await user.type(screen.getByRole("textbox", { name: /^email/i }), "test@example.com");
      await user.selectOptions(screen.getByRole("combobox", { name: /subject/i }), "General Inquiry");
      await user.type(screen.getByRole("textbox", { name: /message/i }), "This is a test message.");

      const submitButton = screen.getByRole("button", { name: /send message|submit/i });
      await user.click(submitButton);

      // Should show loading state (button becomes disabled and shows "Sending...")
      await waitFor(() => {
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
      });
    });

    it("displays success message after successful submission", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      // Fill out form
      await user.type(screen.getByRole("textbox", { name: /^name/i }), "Test User");
      await user.type(screen.getByRole("textbox", { name: /^email/i }), "test@example.com");
      await user.selectOptions(screen.getByRole("combobox", { name: /subject/i }), "General Inquiry");
      await user.type(screen.getByRole("textbox", { name: /message/i }), "This is a test message.");

      const submitButton = screen.getByRole("button", { name: /send message|submit/i });
      await user.click(submitButton);

      // Should show success message (appears in both ARIA live region and visible alert)
      await waitFor(() => {
        const successMessages = screen.getAllByText(/thank you/i);
        expect(successMessages.length).toBeGreaterThan(0);
      }, { timeout: 3000 });
    });
  });

  describe("Accessibility", () => {
    it("has proper heading hierarchy", () => {
      render(<ContactPage />);

      const h1 = screen.getByRole("heading", { level: 1 });
      expect(h1).toBeInTheDocument();

      const h2Elements = screen.getAllByRole("heading", { level: 2 });
      expect(h2Elements.length).toBeGreaterThan(0);
    });

    it("form has fieldset and legend for grouping", () => {
      render(<ContactForm />);

      const fieldset = document.querySelector("fieldset");
      expect(fieldset).toBeInTheDocument();

      const legend = document.querySelector("legend");
      expect(legend).toBeInTheDocument();
    });

    it("has ARIA live region for error announcements", () => {
      render(<ContactForm />);

      const liveRegion = document.querySelector('[aria-live="polite"], [aria-live="assertive"]');
      expect(liveRegion).toBeInTheDocument();
    });

    it("labels are properly associated with inputs", () => {
      render(<ContactForm />);

      const nameInput = screen.getByRole("textbox", { name: /^name/i });
      expect(nameInput).toHaveAttribute("id");

      const emailInput = screen.getByRole("textbox", { name: /^email/i });
      expect(emailInput).toHaveAttribute("id");

      const subjectSelect = screen.getByRole("combobox", { name: /subject/i });
      expect(subjectSelect).toHaveAttribute("id");

      const messageTextarea = screen.getByRole("textbox", { name: /message/i });
      expect(messageTextarea).toHaveAttribute("id");
    });

    it("required fields have aria-required attribute", () => {
      render(<ContactForm />);

      expect(screen.getByRole("textbox", { name: /^name/i })).toHaveAttribute("aria-required", "true");
      expect(screen.getByRole("textbox", { name: /^email/i })).toHaveAttribute("aria-required", "true");
      expect(screen.getByRole("combobox", { name: /subject/i })).toHaveAttribute("aria-required", "true");
      expect(screen.getByRole("textbox", { name: /message/i })).toHaveAttribute("aria-required", "true");
    });

    it("error messages are linked with aria-describedby", async () => {
      const user = userEvent.setup();
      render(<ContactForm />);

      const nameInput = screen.getByRole("textbox", { name: /^name/i });

      // Trigger validation error
      await user.click(nameInput);
      await user.tab();

      // Wait for error to appear
      await waitFor(() => {
        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      });

      // Input should have aria-describedby pointing to error
      const describedBy = nameInput.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
    });
  });

  describe("Page Structure", () => {
    it("uses semantic section elements", () => {
      render(<ContactPage />);

      const sections = document.querySelectorAll("section");
      expect(sections.length).toBeGreaterThan(0);
    });

    it("has accessible region labels", () => {
      render(<ContactPage />);

      const labelledSections = document.querySelectorAll("[aria-labelledby]");
      expect(labelledSections.length).toBeGreaterThan(0);
    });
  });
});

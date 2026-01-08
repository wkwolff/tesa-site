/**
 * Skip Navigation Link Component
 *
 * Provides keyboard users a way to skip directly to main content.
 * First focusable element on the page for accessibility compliance.
 * Visually hidden until focused.
 */
export default function SkipNavLink() {
  return (
    <a
      href="#main-content"
      className="skip-nav-link"
    >
      Skip to main content
    </a>
  );
}

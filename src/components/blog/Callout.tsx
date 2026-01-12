/**
 * Callout Component
 *
 * Styled callout boxes for blog content with different variants:
 * - info: Blue, general information
 * - warning: Amber, caution or important notes
 * - tip: Green, helpful tips and best practices
 * - success: Green, success messages
 */

interface CalloutProps {
  type?: "info" | "warning" | "tip" | "success";
  title?: string;
  children: React.ReactNode;
}

const calloutStyles = {
  info: {
    container: "bg-blue-50 border-blue-200 border-l-blue-500",
    icon: "text-blue-600",
    title: "text-blue-900",
    content: "text-blue-800",
  },
  warning: {
    container: "bg-amber-50 border-amber-200 border-l-amber-500",
    icon: "text-amber-600",
    title: "text-amber-900",
    content: "text-amber-800",
  },
  tip: {
    container: "bg-green-50 border-green-200 border-l-green-500",
    icon: "text-green-600",
    title: "text-green-900",
    content: "text-green-800",
  },
  success: {
    container: "bg-emerald-50 border-emerald-200 border-l-emerald-500",
    icon: "text-emerald-600",
    title: "text-emerald-900",
    content: "text-emerald-800",
  },
};

const icons = {
  info: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  warning: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),
  tip: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  ),
  success: (
    <svg
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};

const defaultTitles = {
  info: "Note",
  warning: "Warning",
  tip: "Tip",
  success: "Success",
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const styles = calloutStyles[type];
  const displayTitle = title || defaultTitles[type];

  return (
    <div
      className={`my-6 rounded-lg border border-l-4 p-4 ${styles.container}`}
      role="note"
    >
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 mt-0.5 ${styles.icon}`}>
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          {displayTitle && (
            <p className={`font-semibold mb-1 ${styles.title}`}>
              {displayTitle}
            </p>
          )}
          <div className={`text-sm ${styles.content}`}>{children}</div>
        </div>
      </div>
    </div>
  );
}

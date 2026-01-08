/**
 * PartnerCard Props
 */
interface PartnerCardProps {
  /** Partner name */
  name: string;
  /** Partner description */
  description: string;
  /** Partner type badge */
  type: "Certification" | "Community" | "Education" | "Funder";
  /** Whether this is a "Coming Soon" placeholder */
  comingSoon?: boolean;
}

/**
 * PartnerCard Component
 *
 * Displays a partner/funder card with:
 * - Logo placeholder
 * - Partner name and description
 * - Type badge
 * - Coming Soon treatment for potential funders
 *
 * Mobile-first design with consistent card sizing.
 */
export default function PartnerCard({
  name,
  description,
  type,
  comingSoon = false,
}: PartnerCardProps) {
  const typeColorMap = {
    Certification: "bg-primary/10 text-primary border-primary/20",
    Community: "bg-secondary/10 text-secondary border-secondary/20",
    Education: "bg-accent/10 text-accent-dark border-accent/20",
    Funder: "bg-highlight/10 text-highlight border-highlight/20",
  };

  const typeColorClass = typeColorMap[type];

  return (
    <div
      className={`group flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-xl border ${
        comingSoon
          ? "border-dashed border-gray-300 bg-gray-50/50"
          : "border-gray-100 hover:border-primary/20 hover:shadow-md"
      } transition-all h-full`}
    >
      {/* Coming Soon badge */}
      {comingSoon && (
        <span className="mb-3 inline-flex items-center px-3 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-full">
          Coming Soon
        </span>
      )}

      {/* Logo placeholder - grayscale with hover color effect */}
      <div
        className={`h-16 w-full sm:h-20 flex items-center justify-center ${
          comingSoon ? "opacity-50" : "grayscale group-hover:grayscale-0"
        } transition-all`}
      >
        {/* Placeholder SVG representing a logo */}
        <div
          className={`h-12 w-24 sm:h-14 sm:w-28 ${
            comingSoon ? "bg-gray-200" : "bg-gray-200"
          } rounded-lg flex items-center justify-center`}
        >
          <span
            className={`text-xs sm:text-sm font-medium ${
              comingSoon ? "text-gray-400" : "text-gray-500"
            } text-center px-2`}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Partner name */}
      <p
        className={`mt-4 font-semibold ${
          comingSoon ? "text-gray-500" : "text-surface-dark"
        } text-center`}
      >
        {name}
      </p>

      {/* Partner description */}
      <p
        className={`mt-1 text-xs sm:text-sm ${
          comingSoon ? "text-gray-400" : "text-gray-500"
        } text-center`}
      >
        {description}
      </p>

      {/* Type badge */}
      {!comingSoon && (
        <span
          className={`mt-3 inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${typeColorClass}`}
        >
          {type} Partner
        </span>
      )}
    </div>
  );
}

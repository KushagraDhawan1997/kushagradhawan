import { type Approach } from "./team-leadership-section-data";
import { TeamIllustration } from "./illustrations/TeamIllustration";
import { AIIllustration } from "./illustrations/AIIllustration";
import { ShippedListIllustration } from "./illustrations/ShippedListIllustration";
import { StandardSectionCard, IllustrationSize } from "@/components/generic/section";

type TeamLeadershipSectionCardProps = {
  approach: Approach;
  onClick: (approach: Approach) => void;
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function TeamLeadershipSectionCard({ approach, onClick, isMobile = false, illustrationSize }: TeamLeadershipSectionCardProps) {
  // Function to render illustration based on approach type
  const renderIllustration = () => {
    // Custom illustrations for specific approaches
    if (approach.approach === "Building High-Performance Teams") {
      return <TeamIllustration isMobile={isMobile} illustrationSize={illustrationSize || "medium"} />;
    }

    // Custom illustration for AI-powered execution
    if (approach.approach === "AI-Powered Execution") {
      return <AIIllustration isMobile={isMobile} illustrationSize={illustrationSize || "medium"} />;
    }

    // Custom illustration for Startup-Speed Decision Making
    if (approach.approach === "Startup-Speed Decision Making") {
      return <ShippedListIllustration isMobile={isMobile} illustrationSize={illustrationSize || "medium"} />;
    }

    // Placeholder for other illustrations
    if (approach.illustrationPlaceholder) {
      return (
        <div className="w-full rounded-md bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary/40 text-sm border border-dashed border-primary/20 h-full">
          {illustrationSize === "large" ? "Space for larger illustration" : "Space for illustration"}
        </div>
      );
    }
    return null;
  };

  // Use the illustration size from props or from the approach data
  const sizeToUse = illustrationSize || approach.illustrationSize || "medium";

  return (
    <StandardSectionCard
      title={approach.approach}
      description={approach.description}
      illustration={approach.illustrationPlaceholder ? renderIllustration() : undefined}
      illustrationSize={sizeToUse}
      item={approach}
      onClick={onClick}
      isMobile={isMobile}
    />
  );
}

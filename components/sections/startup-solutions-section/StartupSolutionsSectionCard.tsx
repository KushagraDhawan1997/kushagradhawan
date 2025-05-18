"use client";

import { type Solution } from "./startup-solutions-section-data";
import { EngineeringProductThinking } from "./illustrations/EngineeringProductThinking";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { CrossFunctionalTeamIllustration } from "./illustrations/CrossFunctionalTeamIllustration";
import { StandardSectionCard, IllustrationSize } from "@/components/generic/section";

type StartupSolutionsSectionCardProps = {
  solution: Solution;
  onClick: (solution: Solution) => void;
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function StartupSolutionsSectionCard({ solution, onClick, isMobile = false, illustrationSize }: StartupSolutionsSectionCardProps) {
  // Function to render illustration based on solution type
  const renderIllustration = () => {
    // Custom illustrations for specific solutions
    if (solution.problem === "Engineering-First Product Thinking") {
      // return <EngineeringProductThinking isMobile={isMobile} illustrationSize={illustrationSize || "medium"} />;
      return <></>;
    }

    // Cross-Functional Team Environment
    if (solution.problem === "Cross-Functional Team Environment") {
      // Commented out the CrossFunctionalTeamIllustration as requested
      // return <CrossFunctionalTeamIllustration isMobile={isMobile} illustrationSize={illustrationSize || "medium"} />;
      return <></>;
    }

    // Placeholder for other illustrations
    if (solution.illustrationPlaceholder) {
      return (
        <div className="w-full rounded-md bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary/40 text-sm border border-dashed border-primary/20 h-full">
          {illustrationSize === "large" ? "Space for larger illustration" : "Space for illustration"}
        </div>
      );
    }

    return null;
  };

  // AI solution with gradient background
  const isAISolution = solution.problem === "AI & Advanced Tech Integration";

  // Create background component for AI solution with fixed container class to contain it
  const backgroundComponent = isAISolution ? <BackgroundGradientAnimation containerClassName="absolute inset-0 overflow-hidden rounded-xl w-full h-full" interactive={false} size="100%" /> : undefined;

  // Use the illustration size from props or from the solution data
  const sizeToUse = illustrationSize || solution.illustrationSize || "medium";

  return (
    <StandardSectionCard
      title={solution.problem}
      description={solution.description}
      illustration={solution.illustrationPlaceholder ? renderIllustration() : undefined}
      illustrationSize={sizeToUse}
      item={solution}
      onClick={onClick}
      isMobile={isMobile}
      useSpecialBackground={solution.useSpecialBackground}
      backgroundComponent={backgroundComponent}
    />
  );
}

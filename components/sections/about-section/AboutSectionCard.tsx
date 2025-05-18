import { type Capability } from "./about-section-data";
import { TechIconsGrid } from "./illustrations/TechIconsGrid";
import { TeamLeadershipBeam } from "./illustrations/TeamLeadershipBeam";
import { GlobeIllustration } from "./illustrations/GlobeIllustration";
import { StandardSectionCard, IllustrationSize } from "@/components/generic/section";

type AboutSectionCardProps = {
  capability: Capability;
  onClick: (capability: Capability) => void;
  isMobile?: boolean;
  illustrationSize?: IllustrationSize;
};

export function AboutSectionCard({ capability, onClick, isMobile = false, illustrationSize }: AboutSectionCardProps) {
  // Function to render illustration based on capability
  const renderIllustration = () => {
    if (capability.title === "Engineering & Design") {
      return <TechIconsGrid />;
    } else if (capability.title === "Team Leadership") {
      return <TeamLeadershipBeam />;
    } else if (capability.title === "Scaling Products") {
      return <GlobeIllustration />;
    } else if (capability.illustrationPlaceholder) {
      return (
        <div className="w-full rounded-md bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary/40 text-sm border border-dashed border-primary/20 h-full">
          {illustrationSize === "large" ? "Space for larger illustration" : "Space for illustration"}
        </div>
      );
    }
    return null;
  };

  // Use the illustration size from props or from the capability data
  const sizeToUse = illustrationSize || capability.illustrationSize || "medium";

  return (
    <StandardSectionCard
      title={capability.title}
      description={capability.description}
      illustration={capability.illustrationPlaceholder ? renderIllustration() : undefined}
      illustrationSize={sizeToUse}
      item={capability}
      onClick={onClick}
      isMobile={isMobile}
    />
  );
}

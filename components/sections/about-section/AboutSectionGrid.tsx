import { capabilities, type Capability } from "./about-section-data";
import { AboutSectionCard } from "./AboutSectionCard";

type AboutSectionGridProps = {
  onOpenCapability: (capability: Capability) => void;
  isMobile?: boolean;
};

export function AboutSectionGrid({ onOpenCapability, isMobile = false }: AboutSectionGridProps) {
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {capabilities.map((capability) => (
          <AboutSectionCard key={capability.title} capability={capability} onClick={onOpenCapability} isMobile={true} illustrationSize={capability.illustrationPlaceholder ? capability.illustrationSize || "medium" : undefined} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="hidden md:grid gap-2"
      style={{
        gridTemplateColumns: "1fr 1fr 1fr",
        gridTemplateRows: "auto auto",
        gridTemplateAreas: `
          "c1 c2 c3"
          "c1 c4 c3"
        `,
      }}
    >
      {capabilities.map((capability) => (
        <div key={capability.title} className="h-full" style={{ gridArea: capability.gridArea }}>
          <AboutSectionCard capability={capability} onClick={onOpenCapability} illustrationSize={capability.illustrationPlaceholder ? capability.illustrationSize : undefined} />
        </div>
      ))}
    </div>
  );
}

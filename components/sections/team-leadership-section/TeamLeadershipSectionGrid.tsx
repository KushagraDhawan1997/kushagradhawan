import { approaches, type Approach } from "./team-leadership-section-data";
import { TeamLeadershipSectionCard } from "./TeamLeadershipSectionCard";
import { TeamLeadershipTabletGrid } from "./TeamLeadershipTabletGrid";

type TeamLeadershipSectionGridProps = {
  onOpenApproach: (approach: Approach) => void;
  isMobile?: boolean;
};

export function TeamLeadershipSectionGrid({ onOpenApproach, isMobile = false }: TeamLeadershipSectionGridProps) {
  // Mobile view (single column)
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 sm:hidden gap-2">
        {approaches.map((approach) => (
          <TeamLeadershipSectionCard key={approach.approach} approach={approach} onClick={onOpenApproach} isMobile={true} illustrationSize={approach.illustrationSize} />
        ))}
      </div>
    );
  }

  // Desktop view (three columns)
  return (
    <>
      {/* Tablet grid (two columns) */}
      <TeamLeadershipTabletGrid onOpenApproach={onOpenApproach} />

      {/* Desktop grid (three columns) */}
      <div
        className="hidden lg:grid gap-2"
        style={{
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
          gridTemplateRows: "auto auto",
          gridTemplateAreas: `
            "a5 a4 a2"
            "a1 a4 a3"
          `,
        }}
      >
        {approaches.map((approach) => (
          <div key={approach.approach} className="h-full" style={{ gridArea: approach.gridArea }}>
            <TeamLeadershipSectionCard approach={approach} onClick={onOpenApproach} illustrationSize={approach.illustrationSize} />
          </div>
        ))}
      </div>
    </>
  );
}

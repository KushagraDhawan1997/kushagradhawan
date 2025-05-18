import { approaches, type Approach } from "./team-leadership-section-data";
import { TeamLeadershipSectionCard } from "./TeamLeadershipSectionCard";

type TeamLeadershipSectionGridProps = {
  onOpenApproach: (approach: Approach) => void;
  isMobile?: boolean;
};

export function TeamLeadershipSectionGrid({ onOpenApproach, isMobile = false }: TeamLeadershipSectionGridProps) {
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {approaches.map((approach) => (
          <TeamLeadershipSectionCard key={approach.approach} approach={approach} onClick={onOpenApproach} isMobile={true} illustrationSize={approach.illustrationSize} />
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
  );
}

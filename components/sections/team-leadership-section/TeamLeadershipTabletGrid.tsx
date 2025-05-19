import { approaches, type Approach } from "./team-leadership-section-data";
import { TeamLeadershipSectionCard } from "./TeamLeadershipSectionCard";

type TeamLeadershipTabletGridProps = {
  onOpenApproach: (approach: Approach) => void;
};

export function TeamLeadershipTabletGrid({ onOpenApproach }: TeamLeadershipTabletGridProps) {
  return (
    <div
      className="hidden sm:grid md:grid lg:hidden gap-2"
      style={{
        gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
        gridTemplateRows: "auto auto auto",
        gridTemplateAreas: `
          "a1 a2"
          "a1 a5"
          "a3 a4"
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

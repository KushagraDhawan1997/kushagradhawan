import { solutions, type Solution } from "./startup-solutions-section-data";
import { StartupSolutionsSectionCard } from "./StartupSolutionsSectionCard";

type StartupSolutionsSectionGridProps = {
  onOpenSolution: (solution: Solution) => void;
  isMobile?: boolean;
};

export function StartupSolutionsSectionGrid({ onOpenSolution, isMobile = false }: StartupSolutionsSectionGridProps) {
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-2 md:hidden">
        {solutions.map((solution) => (
          <StartupSolutionsSectionCard key={solution.problem} solution={solution} onClick={onOpenSolution} isMobile={true} illustrationSize={solution.illustrationSize} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="hidden md:grid gap-2"
      style={{
        gridTemplateColumns: "1fr 2fr",
        gridTemplateRows: "auto auto auto",
        gridTemplateAreas: `
          "s2 s3"
          "s4 s3"
          "s1 s3"
        `,
      }}
    >
      {solutions.map((solution) => (
        <div key={solution.problem} className="h-full" style={{ gridArea: solution.gridArea }}>
          <StartupSolutionsSectionCard solution={solution} onClick={onOpenSolution} illustrationSize={solution.illustrationSize} />
        </div>
      ))}
    </div>
  );
}

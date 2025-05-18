import { type Solution } from "./startup-solutions-section-data";
import { StandardSectionDialog } from "@/components/generic/section";

type StartupSolutionsSectionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedSolution: Solution | null;
};

export function StartupSolutionsSectionDialog({ open, onOpenChange, selectedSolution }: StartupSolutionsSectionDialogProps) {
  return <StandardSectionDialog open={open} onOpenChange={onOpenChange} selectedItem={selectedSolution} getTitleFromItem={(solution) => solution.problem} getContentFromItem={(solution) => solution.expandedContent} />;
}

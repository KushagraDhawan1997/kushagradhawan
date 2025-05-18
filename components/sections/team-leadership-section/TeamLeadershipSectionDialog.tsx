import { type Approach } from "./team-leadership-section-data";
import { StandardSectionDialog } from "@/components/generic/section";

type TeamLeadershipSectionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedApproach: Approach | null;
};

export function TeamLeadershipSectionDialog({ open, onOpenChange, selectedApproach }: TeamLeadershipSectionDialogProps) {
  return <StandardSectionDialog open={open} onOpenChange={onOpenChange} selectedItem={selectedApproach} getTitleFromItem={(approach) => approach.approach} getContentFromItem={(approach) => approach.expandedContent} />;
}

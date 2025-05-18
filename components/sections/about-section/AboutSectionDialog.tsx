import { type Capability } from "./about-section-data";
import { StandardSectionDialog } from "@/components/generic/section";

type AboutSectionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedCapability: Capability | null;
};

export function AboutSectionDialog({ open, onOpenChange, selectedCapability }: AboutSectionDialogProps) {
  return <StandardSectionDialog open={open} onOpenChange={onOpenChange} selectedItem={selectedCapability} getTitleFromItem={(capability) => capability.title} getContentFromItem={(capability) => capability.expandedContent} />;
}

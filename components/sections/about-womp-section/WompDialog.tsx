import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type WompDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  content?: string;
};

export function WompDialog({ open, onOpenChange, title, content }: WompDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {title && content && (
        <DialogContent className="sm:max-w-xl backdrop-blur-sm bg-gradient-to-br from-card to-muted/80">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-primary">{title}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-foreground/80 text-base whitespace-pre-line">{content}</p>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

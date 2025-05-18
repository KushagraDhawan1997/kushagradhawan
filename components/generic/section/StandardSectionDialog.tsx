"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export interface StandardSectionDialogProps<T = any> {
  /** Whether the dialog is open */
  open: boolean;

  /** Function to handle dialog open state changes */
  onOpenChange: (open: boolean) => void;

  /** Item to display in the dialog (null when closed) */
  selectedItem: T | null;

  /** Function to extract title from the selected item */
  getTitleFromItem: (item: T) => string;

  /** Function to extract content from the selected item */
  getContentFromItem: (item: T) => string;

  /** Custom class name for dialog content */
  contentClassName?: string;

  /** Custom header content (optional) */
  customHeader?: React.ReactNode;

  /** Additional content to render below the main content (optional) */
  additionalContent?: React.ReactNode;
}

export function StandardSectionDialog<T>({ open, onOpenChange, selectedItem, getTitleFromItem, getContentFromItem, contentClassName, customHeader, additionalContent }: StandardSectionDialogProps<T>) {
  if (!selectedItem) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl backdrop-blur-sm bg-gradient-to-br from-card to-muted/80">
        {customHeader || (
          <DialogHeader className="flex flex-row items-center gap-2 mb-4">
            <div>
              <DialogTitle className="text-left font-bold text-xl text-primary">{getTitleFromItem(selectedItem)}</DialogTitle>
            </div>
          </DialogHeader>
        )}

        <p className="text-foreground/80 text-base whitespace-pre-line">{getContentFromItem(selectedItem)}</p>

        {additionalContent}
      </DialogContent>
    </Dialog>
  );
}

"use client";
import React from "react";
import { DropdownMenuCheckboxItem } from "../ui/dropdown-menu";

interface ItemMultiSelectProps {
  label: string;
  value: string;
  isChecked: boolean;
  toggleSelection: (value: string) => void;
}

export default function ItemMultiSelect({
  label,
  value,
  isChecked,
  toggleSelection,
}: ItemMultiSelectProps) {
  return (
    <DropdownMenuCheckboxItem
      checked={isChecked}
      onCheckedChange={() => toggleSelection(value)}
      onSelect={(e) => e.preventDefault()}
    >
      {label}
    </DropdownMenuCheckboxItem>
  );
}

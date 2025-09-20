"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectContextProps {
  value?: string;
  onValueChange?: (v: string) => void;
  open: boolean;
  setOpen: (o: boolean) => void;
}

const SelectContext = React.createContext<SelectContextProps | null>(null);

interface SelectProps {
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative inline-block w-48">{children}</div>
    </SelectContext.Provider>
  );
}

// Trigger button
export function SelectTrigger({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("SelectTrigger must be used within Select");

  return (
    <button
      type="button"
      onClick={() => ctx.setOpen(!ctx.open)}
      className="w-full border rounded-md px-3 py-2 text-left bg-white flex justify-between items-center"
    >
      {children}
      <span className="ml-2">▼</span>
    </button>
  );
}

// Value display
export function SelectValue({
  placeholder,
}: {
  placeholder: string;
}) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("SelectValue must be used within Select");

  return (
    <span className={ctx.value ? "text-black" : "text-gray-500"}>
      {ctx.value ?? placeholder}
    </span>
  );
}

// Dropdown container
export function SelectContent({ children }: { children: React.ReactNode }) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("SelectContent must be used within Select");

  if (!ctx.open) return null; // only render if open

  return (
    <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-md">
      {children}
    </div>
  );
}

// Item
interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export function SelectItem({ value, children }: SelectItemProps) {
  const ctx = React.useContext(SelectContext);
  if (!ctx) throw new Error("SelectItem must be used within Select");

  const handleClick = () => {
    ctx.onValueChange?.(value);
    ctx.setOpen(false); // close dropdown after selection
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "px-3 py-2 cursor-pointer hover:bg-gray-100",
        ctx.value === value && "bg-gray-200 font-semibold"
      )}
    >
      {children}
    </div>
  );
}

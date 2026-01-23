import type { ReactNode } from "react";
import clsx from "clsx";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={clsx(
        "px-2 py-0.5 text-xs font-medium rounded-full",
        className,
      )}
    >
      {children}
    </span>
  );
};

import { type HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "accent" | "success" | "warning" | "destructive";
}

export function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const variantClasses = {
    default: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    accent: "bg-accent text-white",
    success: "bg-success text-white",
    warning: "bg-warning text-white",
    destructive: "bg-destructive text-white",
  };

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`} {...props} />
  );
}

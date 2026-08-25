import React, { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { CONTENT_MAX_WIDTHS, type ContentMaxWidth } from "@/constants/spacing";

export interface MaxWidthProps<T extends ElementType = "div"> {
  as?: T;
  size?: ContentMaxWidth;
  center?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function MaxWidth<T extends ElementType = "div">({
  as,
  size = "content",
  center = true,
  className,
  children,
  ...props
}: MaxWidthProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MaxWidthProps<T>>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "w-full",
        CONTENT_MAX_WIDTHS[size],
        center && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

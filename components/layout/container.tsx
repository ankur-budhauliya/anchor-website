import React, { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { CONTAINER_MAX_WIDTHS, CONTAINER_PADDING, type ContainerSize } from "@/constants/spacing";

export interface ContainerProps<T extends ElementType = "div"> {
  as?: T;
  size?: ContainerSize;
  noPadding?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends ElementType = "div">({
  as,
  size = "2xl",
  noPadding = false,
  className,
  children,
  ...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || "div";

  return (
    <Component
      className={cn(
        "w-full mx-auto",
        CONTAINER_MAX_WIDTHS[size],
        !noPadding && CONTAINER_PADDING,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

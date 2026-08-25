import React, { ElementType, ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { SECTION_SPACING, type SectionSpacing, type ContainerSize } from "@/constants/spacing";
import { Container } from "./container";

export interface SectionProps<T extends ElementType = "section"> {
  as?: T;
  id?: string;
  spacing?: SectionSpacing;
  containerSize?: ContainerSize | false;
  containerClassName?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section<T extends ElementType = "section">({
  as,
  id,
  spacing = "default",
  containerSize = "2xl",
  containerClassName,
  className,
  children,
  ...props
}: SectionProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || "section";

  const content = containerSize ? (
    <Container size={containerSize} className={containerClassName}>
      {children}
    </Container>
  ) : (
    children
  );

  return (
    <Component
      id={id}
      data-section={id}
      className={cn(
        "relative w-full overflow-hidden",
        SECTION_SPACING[spacing],
        className
      )}
      {...props}
    >
      {content}
    </Component>
  );
}

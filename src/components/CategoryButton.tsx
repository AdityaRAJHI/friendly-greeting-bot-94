import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface CategoryButtonProps {
  children: ReactNode;
  color?: string;
  icon?: ReactNode;
}

export const CategoryButton = ({ children, color = "gray-500", icon }: CategoryButtonProps) => {
  return (
    <Button
      variant="outline"
      className={`flex-shrink-0 bg-${color}/10 hover:bg-${color}/20 border-${color}/20`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};
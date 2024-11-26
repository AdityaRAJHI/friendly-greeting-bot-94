import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonProps {
  children: ReactNode;
  color?: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export const CategoryButton = ({ children, color = "gray-500", icon, onClick }: CategoryButtonProps) => {
  const colorClasses = {
    "rose-500": "bg-rose-100 hover:bg-rose-200 text-rose-700",
    "green-500": "bg-green-100 hover:bg-green-200 text-green-700",
    "yellow-500": "bg-yellow-100 hover:bg-yellow-200 text-yellow-700",
    "pink-500": "bg-pink-100 hover:bg-pink-200 text-pink-700",
    "gray-500": "bg-gray-100 hover:bg-gray-200 text-gray-700",
  }[color] || "bg-gray-100 hover:bg-gray-200 text-gray-700";

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 whitespace-nowrap",
        colorClasses
      )}
    >
      {icon && <span>{icon}</span>}
      {children}
    </Button>
  );
};
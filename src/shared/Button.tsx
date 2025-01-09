import React from "react";
import { Text, Pressable, PressableProps } from "react-native";
import { cn } from "@/src/lib/utils";

interface ButtonProps extends PressableProps {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  textClassName?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  textClassName,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-lg active:opacity-80 min-w-40 overflow-hidden";
  const variantStyles = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    outline: "border border-blue-500",
  };

  const baseTextStyles = "text-center font-medium";
  const variantTextStyles = {
    primary: "text-white",
    secondary: "text-white",
    outline: "text-blue-500",
  };

  return (
    <Pressable
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {typeof children === "function" ? (
        children
      ) : (
        <Text
          className={cn(
            baseTextStyles,
            variantTextStyles[variant],
            textClassName
          )}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

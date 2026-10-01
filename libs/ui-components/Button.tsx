import clsx from "clsx";
import { ReactNode } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "neutral";
  size?: "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  otherClass?: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "secondary",
  size = "lg",
  disabled = false,
  loading = false,
  onClick,
  otherClass,
  icon,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "whitespace-nowrap rounded-3xl text-[18px] font-medium cursor-pointer disabled:cursor-not-allowed flex items-center gap-2 flex justify-center items-center";

  const variantStyles = {
    primary: "bg-primary-500 text-neutral-900",
    secondary: "bg-secondary-500 text-neutral-900",
    neutral: "bg-neutral-100 text-neutral-900",
  };
  const sizeStyles = {
    lg: "px-6 py-3 text-[18px]",
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    disabled && "opacity-50 cursor-not-allowed",
  );

  return (
    <button
      id={children ? children.toString() : "Button"}
      onClick={onClick}
      className={`${classes} ${otherClass}`}
      disabled={disabled || loading}
      type={type}
    >
      <p className="flex justify-center items-center gap-2">
        {children} {icon && icon}
      </p>
    </button>
  );
};

export default Button;

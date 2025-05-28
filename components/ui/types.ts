export interface IShinyText {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export interface IButton {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: {
    from: string;
    to: string;
  };
  text?: string;
  hoverTextColor?: string;
  className?: string;
}

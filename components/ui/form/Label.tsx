import { ILabel } from "./types";

export const Label = ({ children, htmlFor }: ILabel) => {
  return (
    <label htmlFor={htmlFor} className="text-xs text-secondary">
      {children}
    </label>
  );
};

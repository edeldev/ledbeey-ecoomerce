import { IContainer } from "./types";

export const Container = ({ children, className }: IContainer) => {
  return <main className={`px-5 sm:px-16 ${className}`}>{children}</main>;
};

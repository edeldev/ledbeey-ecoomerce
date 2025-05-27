import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ILabel {
  children: ReactNode;
  htmlFor: string;
}

export interface IInput {
  register: UseFormRegisterReturn;
  type: string;
  id: string;
  placeholder: string;
  errors?: FieldError;
  message?: string;
}

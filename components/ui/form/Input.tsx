import { Fragment } from "react";
import { IInput } from "./types";

export const Input = ({
  register,
  type,
  id,
  placeholder,
  errors,
  message,
}: IInput) => {
  return (
    <Fragment>
      <input
        {...register}
        type={type}
        id={id}
        placeholder={placeholder}
        className="py-2 px-3 rounded-full shadow-sm text-sm"
      />
      {errors && <p className="text-[10px] text-red-500">{message}</p>}
    </Fragment>
  );
};

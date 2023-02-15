import React from "react";

type Props = {
  type?: React.HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Props> = ({
  type = "text",
  placeholder,
  value,
  onChange
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="mb-6 w-[20rem] rounded-md border-b-[0.12rem] border-black pl-1 pt-1 transition-colors duration-100 disabled:bg-white disabled:text-black/50 lg:w-[30rem] focus:ring-0 focus:ring-offset-0"
  />
);

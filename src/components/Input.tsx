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
    className="rounded-md border-b-[0.12rem] border-black px-3 py-2 transition-colors duration-100 disabled:bg-white disabled:text-black/50 focus:ring-0 focus:ring-offset-0"
  />
);

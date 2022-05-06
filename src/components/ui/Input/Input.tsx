import React, { FC } from "react";
import { InputStyled } from "./style";

type Props = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value?: any;
  placeholder: string;
  checked?: boolean;
  className?: string;
};

export const Input: FC<Props> = ({
  name,
  onChange,
  type,
  value,
  placeholder,
  checked,
  className,
}) => {
  return (
    <InputStyled
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
      checked={checked}
    />
  );
};

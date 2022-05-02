import React, { FC } from "react";
import { IStyledTypes, StyledButton } from "./style";

interface Props extends IStyledTypes {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  loading?: boolean;
  type?: string | any;
  children: React.ReactChild;
  disabled?: boolean;
}

export const Button: FC<Props> = ({
  styleType,
  type,
  fullWidth,
  onClick,
  loading,
  children,
  disabled,
}) => {
  return (
    <StyledButton
      type={type}
      styleType={styleType}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "loading..." : children}
    </StyledButton>
  );
};

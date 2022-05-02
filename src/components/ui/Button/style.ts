import { theme } from "./../../../constants/theme";
import styled from "styled-components";

export type IStyledTypes = {
  styleType: string;
  fullWidth?: boolean;
};

export const StyledButton = styled.button<IStyledTypes>`
  background-color: ${(props) =>
    props.styleType === "primary"
      ? theme.colors.blue.normal
      : theme.colors.gray.light};
  color: white;
  padding: 20px 50px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  display: block;
  width: 100%;
  margin-top: 20px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
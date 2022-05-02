import { theme } from "./../../../constants/theme";
import styled from "styled-components";

export const InputStyled = styled.input<{ color?: string }>`
  padding: 10px;
  font-size: 0.9em;
  font-family: inherit;
  font-weight: 400;
  color: ${theme.colors.gray.light};
  border: 1px solid ${theme.colors.gray.light};
  border-radius: 4px;
  margin-top: 20px;
  outline: none;
  transition: all 0.3s;
  display: block;
  width: 100%;
  &:focus {
    border: 1px solid ${(props) => props.color || theme.colors.blue.normal};
  }
`;

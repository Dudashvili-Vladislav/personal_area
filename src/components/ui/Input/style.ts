import { theme } from "./../../../constants/theme";
import styled from "styled-components";

export const InputStyled = styled.input<{ color?: string }>`
  text-indent: 0.4em;
  opacity: 0.5;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 4px;
  background: inherit;
  padding: 10px;
  font-size: 0.9em;
  font-family: inherit;
  font-weight: 300;
  color: ${theme.colors.white.white};
  cursor: pointer;
  margin-top: 20px;
  outline: none;
  transition: all 0.3s;
  display: block;
  width: 100%;
  &:focus {
    border: 1px solid ${(props) => props.color || theme.colors.blue.normal};
  }
  &:hover {
    box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
      1px 1px 5px rgba(255, 255, 255, 1);
  }
`;

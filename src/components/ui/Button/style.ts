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
  font-size: 17px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Gotham Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 102.2%;
  letter-spacing: 0.05em;
  background: radial-gradient(
        66.58% 146.41% at -2.19% 16.98%,
        #14bdff 0%,
        rgba(3, 57, 89, 0) 74.36%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        80.2% 129.9% at 96.3% 0%,
        #c51bff 0%,
        rgba(3, 57, 89, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        72.79% 65.22% at 80.51% 92.28%,
        rgba(68, 220, 255, 0.71) 0%,
        rgba(120, 199, 217, 0) 84.87%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #3042ff;

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

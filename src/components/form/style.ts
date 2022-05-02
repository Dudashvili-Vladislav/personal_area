import styled from "styled-components";

export const StyledForm = styled.form<{ width?: number; height?: number }>`
  padding: 20px;
  width: ${props => props.width ? "100%": "unset"};
  height: ${props => props.height ? "100%": "unset"};
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
  box-shadow: 5px 5px 20px rgba(188, 188, 188, 0.25);
  h3{
    text-align: center;
    font-size: 22px;
    font-weight: 600
  }
`;

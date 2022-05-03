import styled from "styled-components";

export const StyledForm = styled.form<{ width?: number; height?: number }>`
  font-family: "Gotham Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 102.2%;
  height: 31px;
  padding: 20px;

  width: ${(props) => (props.width ? "100%" : "unset")};
  height: ${(props) => (props.height ? "100%" : "unset")};
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;

  h3 {
    font-family: "Gotham Pro";
    font-style: normal;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    font-weight: 300;
  }
`;

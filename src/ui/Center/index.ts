import styled from "styled-components";

export default styled.div<{
    vertical?: boolean;
    horizontal?: boolean;
    fullHeight?: boolean;
}>`
  display: flex;
  align-items: ${(props) => (props.vertical ? "center" : "unset")};
  justify-content: ${(props) => (props.horizontal ? "center" : "unset")};
  height: ${(props) => (props.fullHeight ? "100vh" : "unset")};
`;

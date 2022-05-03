import styled from "styled-components";

export const StyledUser = styled.div`
.user {
  max-width: 100%;
  &__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    grid-auto-rows: minmax(60px, auto);
    align-items: center;
    justify-content: center;
  }
  &__info {
    cursor: pointer;
    font-size: 17px;
    font-weight: 500;
    margin: 8px;
    padding: 7px;
    border-bottom: 1px solid rgba(183, 154, 219, 0.548);
    color: rgba(255, 240, 240, 0.692);
  }
}
`;

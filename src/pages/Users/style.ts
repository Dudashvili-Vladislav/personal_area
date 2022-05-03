import styled from "styled-components";

export const StyledUsers = styled.div`
  max-width: 100%;

  
  .users__menu_wrap {
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    grid-auto-rows: 60px;
    justify-content: center;
    height: 60px;
    align-items: center;
  }
  .users {
    margin-top: 40px;
  }

  .users__container {
    padding-top: 50px;
  }
`;

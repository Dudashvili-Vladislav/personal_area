import styled from "styled-components";

export const StyledUsers = styled.div`
  max-width: 100%;
  .users {
    margin-top: 40px;
    width: 100%;
  }

  .users__menu_wraper {
    display: flex;
    align-items: center;
  }

  .users__form {
    margin-left: 100px;
  }

  .users__menu_wrap {
    width: 500px;
    justify-content: space-between;
    padding-top: 10px;
    text-align: center;
    display: flex;
    margin-left: 10px;
    height: 60px;
    align-items: center;
  }

  .users__menu {
    margin-left: 20px;
  }

  .users__container {
    padding-top: 50px;
  }

  .button__wrap {
    width: 300px;
  }
  .users__button {
    padding: 20px 60px;

    border: none;
    border-radius: 10px;
    color: white;
    font-size: 22px;
    background-color: rgb(4, 107, 4);
    margin-top: 40px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: rgba(4, 107, 4, 0.8);
    }
  }
`;

import styled from "styled-components";

export const StyleCreateUser = styled.div`
  .form {
    &__input {
      font-size: 18px;
      padding: 20px 10px;
      color: black;
      width: 100%;
      border: 1px solid rgb(212, 211, 211);
      outline: none;
      margin: 20px 0px;
      border-radius: 10px;
      &::placeholder {
        color: rgb(212, 211, 211);
      }
    }
    &__title {
      text-align: center;
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 50px;
    }
    &__button {
      display: block;
      width: 100%;
      padding: 20px;
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
  }
`;

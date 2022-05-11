import styled from "styled-components";

export const StyledUser = styled.div`
  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 15px;
    border-bottom: 1px solid #a9a9a9;

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      opacity: 0.4;

      &_item {
        margin: 0px 12.5px;
      }
    }
    &__title {
      transition: all 0.3s;
      &:hover {
        color: violet;
        cursor: pointer;
      }
    }
    &__buttons {
      display: flex;
      align-items: center;
      &_item {
        margin: 0 10px;
        cursor: pointer;
        transition: all 0.3s;
        opacity: 0.4;
        &:hover {
          transform: scale(1.08);
          opacity: 1;
        }
        & img {
          width: 30px;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
  justify-content: space-between;
  & div {
    transition: all 0.3s;

    margin: 10px;
    &:first-child {
      margin-left: 0;
    }
  }

  .user__profile {
    display: flex;
    align-items: center;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
    box-shadow: 5px 5px 20px rgba(188, 188, 188, 0.25);
    margin-top: 30px;
    padding: 20px;
    .user__created {
      display: none;
    }

    .user__profile {
      flex-wrap: wrap;
    }
  }
`;

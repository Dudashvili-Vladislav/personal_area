import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 500;
  position: fixed;
  top: 0;
  left: 0;

  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
  }
  .modal-wrapper {
    animation: openModal 0.3s forwards;
    z-index: 500;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    background-color: white;
    padding: 20px;
    z-index: 700;
    border-radius: 4px;
    position: relative;
    max-width: 95%;
  }
  .close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    cursor: pointer;
  }
  @keyframes openModal {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

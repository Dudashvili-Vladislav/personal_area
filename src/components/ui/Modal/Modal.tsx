import React, { FC } from "react";
import ReactDOM from "react-dom";
import { ModalStyled } from "./style";
import cross from "../../../images/icons/cross.svg";

interface IClose {
  width?: number;
  height?: number;
  closeModal: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

export const Modal: FC<IClose> = ({ width, height, closeModal, children }) => {
  return ReactDOM.createPortal(
    <ModalStyled>
      <div className="modal-wrapper">
        <div className="modal" style={{ minWidth: width, minHeight: height }}>
          <img src={cross} alt="close" onClick={closeModal} className="close" />
          <div> {children} </div>
        </div>
      </div>
      <div className="overlay"></div>
    </ModalStyled>,
    document.getElementById("modal")!
  );
};

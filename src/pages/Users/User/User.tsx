import React, { FC, useState } from "react";
import { IUser } from "../../../types/user";
import { StyledUser } from "./style";
import { parseDate } from "../../../utils/parseDate";
import Modal from "../../../components/ui/Modal";
import pen from "../../../images/icons/pen.svg";
import remove from "../../../images/icons/remove.svg";

interface UserItemProps {
  user: IUser;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export const User: FC<UserItemProps> = ({ user, onEdit, onDelete }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const openModalCallback = () => setOpenModal(true);
  const closeModalCallback = () => setOpenModal(false);

  return (
    <>
      <StyledUser>
        <div className="user">
          <div className="user__info">
            <div className="user__info_item ">
              {user.name ? user.name.substring(0, 10) + ".." : "no name"}
            </div>

            <div className="user__info_item">
              {user.comment
                ? user.comment.substring(0, 10) + ".."
                : "no commented"}
            </div>

            <div className="user__info_item">
              {user.login ? user.login.substring(0, 10) + ".." : "no login"}
            </div>

            <div className="user__info_item">
              {user.created_at
                ? parseDate(user.created_at)
                : "no creation date"}
            </div>

            <div className="user__info_item">
              {user.updated_at ? parseDate(user.updated_at) : "no update"}
            </div>
          </div>

          <div className="user__buttons">
            <div
              className="user__buttons_item"
              onClick={() => onDelete(user.id)}
            >
              <img src={remove} alt="remove" />
            </div>
            <div className="user__buttons_item" onClick={() => onEdit(user.id)}>
              <img src={pen} alt="edit" />
            </div>
          </div>
        </div>
      </StyledUser>
      {openModal && <Modal closeModal={closeModalCallback}>grger</Modal>}
    </>
  );
};

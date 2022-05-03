import React, { FC } from "react";
import { IUser } from "../../../types/user";
import { StyledUser } from "./style";
import { parseDate } from "../../../utils/parseDate";

interface UserItemProps {
  user: IUser;
}

export const User: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <StyledUser>
        <div className="user">
          <div className="user__container">
            <div className="user__info">
              {user.name ? user.name.substring(0, 10) + ".." : "no name"}
            </div>

            <div className="user__info">
              {user.comment
                ? user.comment.substring(0, 10) + ".."
                : "no commented"}
            </div>

            <div className="user__info">
              {user.login ? user.login.substring(0, 10) + ".." : "no login"}
            </div>

            <div className="user__info">
              {user.created_at
                ? parseDate(user.created_at)
                : "no creation date"}
            </div>

            <div className="user__info">
              {user.updated_at ? parseDate(user.updated_at) : "no update"}
            </div>
          </div>
        </div>
      </StyledUser>
    </>
  );
};

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
        <div className="user__profile">
          <div className="user__name info">
            <div>{user.name ? user.name : "no name"}</div>
          </div>

          <div>{user.comment ? user.comment : "no comment info"}</div>

          <div className="user__created">
            {user.created_at ? parseDate(user.created_at) : "no creation date"}
          </div>
        </div>
      </StyledUser>
    </>
  );
};

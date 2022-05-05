import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../redux/action-creators/user";
import { useActions } from "../../hooks/useActions";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import Loader from "../../components/Loader";
import Center from "../../components/ui/Center";
import { User } from "./User/User";
import { StyledUsers } from "./style";
import { IUser } from "../../types/user";
import { useDispatch } from "react-redux";
import { fetchDeleteUser } from "../../redux/action-creators/user";

export const Users: FC = () => {
  const dispatch = useDispatch();

  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Center horizontal vertical fullHeight>
        <Loader />
      </Center>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const onDelete = (id) => {
    dispatch(fetchDeleteUser(id));
  };

  const onEdit = (id: IUser) => {};

  return (
    <Container>
      <Center horizontal>
        <Title>Users</Title>
      </Center>

      <StyledUsers>
        <div className="users">
          <div className="users__menu_wrap">
            <div className="users__menu">Name</div>
            <div className="users__menu">Comment</div>
            <div className="users__menu">Login</div>
            <div className="users__menu">Created</div>
            <div className="users__menu">Updated</div>
          </div>
          <div className="users__container">
            {users.length > 0
              ? users.map((user) => (
                  <User
                    key={user.id}
                    user={user}
                    onDelete={onDelete}
                    onEdit={onEdit}
                  />
                ))
              : "no users"}
          </div>
        </div>
      </StyledUsers>
    </Container>
  );
};

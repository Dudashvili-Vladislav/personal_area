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

export const Users: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Center horizontal>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Container>
      <Title>Пользователи</Title>
      <StyledUsers>
        <div className="users">
          <div className="users__menu_wrap">
            <div className="users__menu">Name</div>
            <div className="users__menu">Comment</div>
            <div className="users__menu">Updated</div>
          </div>
          <div className="users__container">
            {users.length > 0
              ? users.map((user) => <User key={user.id} user={user} />)
              : "no users"}
          </div>
        </div>
      </StyledUsers>
    </Container>
  );
};

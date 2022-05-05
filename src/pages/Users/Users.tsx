import React, { FC, useEffect, useState } from "react";
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
import Modal from "../../components/ui/Modal";
import EditUser from "./EditUser";
import CreateUser from "./CreateUser";
import Button from "../../components/ui/Button";

export const Users: FC = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = useActions();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isOpenEditModal, setOpenEditModal] = useState<boolean>(false);
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const [currentUser, serCurrentUser] = useState<any[]>(users);

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

  const onOpen = () => setOpenModal(true);
  const onClose = () => setOpenModal(false);

  const onOpenEdit = () => setOpenEditModal(true);
  const onCloseEdit = () => setOpenEditModal(false);

  const onDelete = (id: number) => {
    dispatch(fetchDeleteUser(id));
  };

  const onEdit = (id: number) => {
    onOpenEdit();
    serCurrentUser(users.filter((el) => el.id === id)[0]);
  };
  console.log("currentUser", currentUser);

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
            {isOpenModal && (
              <Modal closeModal={onClose}>
                <CreateUser
                  closeModal={onClose}
                  name={""}
                  comment={""}
                  login={""}
                  password={""}
                />
              </Modal>
            )}

            {isOpenEditModal && (
              <Modal closeModal={onCloseEdit}>
                <EditUser
                  user={currentUser}
                  closeModal={onCloseEdit}
                  name={""}
                  comment={""}
                  login={""}
                  password={""}
                />
              </Modal>
            )}
            <div className="button__wrap">
              <Button
                className="users__button"
                type="submit"
                onClick={onOpen}
                styleType="primary"
              >
                <span>Create user</span>
              </Button>
            </div>
          </div>
        </div>
      </StyledUsers>
    </Container>
  );
};

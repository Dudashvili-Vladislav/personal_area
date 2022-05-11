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
import Input from "../../components/ui/Input";

export const Users: FC = () => {
  const dispatch = useDispatch();
  const { fetchUsers } = useActions();

  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [isOpenEditModal, setOpenEditModal] = useState<boolean>(false);
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const [currentUser, serCurrentUser] = useState<any[]>(users);
  const [value, setValue] = useState<string>("");
  console.log("users", users);

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

  const filtredUsers = users.filter((el) => {
    console.log("name", el.name);
    return el.name.toLowerCase().includes(value.toLowerCase());
  });

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

  return (
    <Container>
      <Center horizontal>
        <Title>Users</Title>
      </Center>

      <StyledUsers>
        <div className="users">
          <div className="users__menu_wraper">
            <div className="users__menu_wrap">
              <div className="users__menu">Name</div>
              <div className="users__menu">Comment</div>
              <div className="users__menu">Login</div>
              <div className="users__menu">Created</div>
              <div className="users__menu">Updated</div>
            </div>
            <div className="users__form">
              <form className="users__search_form">
                <Input
                  name="search"
                  type="text"
                  placeholder="Search users.."
                  className="users__search_input"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                />
              </form>
            </div>
          </div>

          <div className="users__container">
            {filtredUsers.length > 0
              ? filtredUsers.map((user) => (
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
                <CreateUser closeModal={onClose} />
              </Modal>
            )}

            {isOpenEditModal && (
              <Modal closeModal={onCloseEdit}>
                <EditUser user={currentUser} closeModal={onCloseEdit} />
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

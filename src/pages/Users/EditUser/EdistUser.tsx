import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUpdateUser } from "../../../redux/action-creators/user";
import { StyleEditUser } from "./style";

export interface IForm {
  name: string;
  comment: string;
  login: string;
  password: string;
}

export interface IProps extends IForm {
  closeModal: () => void;
  user: any;
}

export const EditUser: FC<IProps> = ({ user, closeModal }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<IForm>({
    name: user.name,
    comment: user.comment,
    login: user.login,
    password: user.password,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchUpdateUser({ ...form, id: user.id }));
    closeModal();
  };

  return (
    <StyleEditUser>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__title">Edit data - {user.name}</div>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={onChange}
          value={form.name}
          className="form__input"
        />
        <input
          placeholder="comment"
          name="comment"
          type="text"
          onChange={onChange}
          value={form.comment}
          className="form__input"
        />
        <input
          placeholder="login"
          name="login"
          type="text"
          onChange={onChange}
          value={form.login}
          className="form__input"
        />
        <input
          placeholder="password"
          name="password"
          type="text"
          onChange={onChange}
          value={form.password}
          className="form__input"
        />
        <button type="submit" className="form__button">
          Edit
        </button>
      </form>
    </StyleEditUser>
  );
};

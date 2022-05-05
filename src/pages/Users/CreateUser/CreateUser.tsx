import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateUser } from "../../../redux/action-creators/user";
import Button from "../../../components/ui/Button";
import { StyleCreateUser } from "./style";

export interface IForm {
  name: string;
  comment: string;
  login: string;
  password: string;
}

export interface IProps extends IForm {
  closeModal: () => void;
}

export const CreateUser: FC<IProps> = ({ closeModal }: IProps) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState<IForm>({
    name: "",
    comment: "",
    login: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchCreateUser(form));
    closeModal();
  };

  return (
    <StyleCreateUser>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__title">Create user</div>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={onChange}
          className="form__input"
          value={form.name}
        />
        <input
          placeholder="comment"
          name="comment"
          type="text"
          onChange={onChange}
          className="form__input"
          value={form.comment}
        />
        <input
          placeholder="login"
          name="login"
          type="text"
          onChange={onChange}
          className="form__input"
          value={form.login}
        />
        <input
          placeholder="password"
          name="password"
          type="text"
          onChange={onChange}
          className="form__input"
          value={form.password}
        />
        <button type="submit" className="form__button">
          Create
        </button>
      </form>
    </StyleCreateUser>
  );
};

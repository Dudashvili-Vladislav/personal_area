import React, { FC, useCallback } from "react";
import { useState } from "react";
import User from "../../services/User";
import { useDispatch } from "react-redux";
import { fetchAuth } from "../../redux/action-creators/user";
import { toast } from "materialize-css";
import Container from "../../components/ui/Container";
import Center from "../../components/ui/Center";
import Form from "../../components/form";
import Input from "../../components/ui/Input";
import { RegistrationStyle } from "./style";
import { publicRoutesEnum } from "../../constants/routes";
import { NavLink } from "react-router-dom";
import Button from "../../components/ui/Button";

export interface IAuth {
  login: string;
  password: string;
}

export const Authorization: FC = () => {
  const [form, setForm] = useState<IAuth>({
    login: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = useCallback(async (form: IAuth) => {
    try {
      const token = await User.login(form);
      console.log("token", token);
      localStorage.setItem("token", token.data.user_jwt);
      localStorage.setItem("login", form.login);
      localStorage.setItem("password", form.password);
      dispatch(fetchAuth(true));
      toast({ html: "succes", classes: "succes" });
    } catch (e) {
      toast({ html: "Authorization error", classes: "error" });
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.login && form.password) {
      login(form);
    } else {
      toast({ html: "Fill in all the fields", classes: "error" });
    }
  };

  return (
    <Container>
      <Center fullHeight horizontal vertical>
        <Form title="Authorization" width={500} onSubmit={onSubmit}>
          <>
            <Input
              onChange={onChange}
              name="login"
              type="text"
              placeholder="Login"
              value={form.login}
            />
            <Input
              onChange={onChange}
              name="password"
              type="text"
              placeholder="Password"
              value={form.password}
            />

            <Button onClick={onSubmit} type="submit" styleType="primary">
              Login
            </Button>
            <RegistrationStyle>
              To registration -{" "}
              <NavLink to={publicRoutesEnum.registration}>register</NavLink>
            </RegistrationStyle>
          </>
        </Form>
      </Center>
    </Container>
  );
};

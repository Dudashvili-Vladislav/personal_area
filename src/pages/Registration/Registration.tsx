import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { publicRoutesEnum } from "../../constants/routes";
import User from "../../services/User";
import { toast } from "materialize-css";
import Container from "../../components/ui/Container";
import { CheckboxStyled } from "./style";
import Center from "../../components/ui/Center";
import Form from "../../components/form";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export interface IAuth {
  name: string;
  comment: string;
  login: string;
  password: string;
  isAgree: boolean;
}

export const Registration: FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<IAuth>({
    name: "",
    comment: "",
    login: "",
    password: "",
    isAgree: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const registration = useCallback(async (form: IAuth) => {
    try {
      await User.registration(form);
      navigate(publicRoutesEnum.authorization);
      toast({ html: "users is create", classes: "succes" });
    } catch (e) {
      toast({ html: "registration error ", classes: "error" });
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registration(form);
  };

  return (
    <Container>
      <Center fullHeight horizontal vertical>
        <Form title="Registration" width={500} onSubmit={onSubmit}>
          <>
            <Input
              onChange={onChange}
              name="name"
              type="text"
              value={form.name}
              placeholder="Your name"
            />

            <Input
              onChange={onChange}
              name="comment"
              type="text"
              value={form.comment}
              placeholder="Сomment"
            />

            <Input
              onChange={onChange}
              name="login"
              type="text"
              value={form.login}
              placeholder="Login"
            />

            <Input
              onChange={onChange}
              name="password"
              type="text"
              value={form.password}
              placeholder="Password"
            />

            <CheckboxStyled>
              <Input
                type="checkbox"
                name="isAgree"
                onChange={onChange}
                checked={form.isAgree}
                placeholder="allow"
              />
              <div>I accept the terms of the user agreement</div>
            </CheckboxStyled>

            <Button
              type="submit"
              disabled={!form.isAgree}
              onClick={onSubmit}
              styleType="primary"
            >
              <span>Register</span>
            </Button>
          </>
        </Form>
      </Center>
    </Container>
  );
};

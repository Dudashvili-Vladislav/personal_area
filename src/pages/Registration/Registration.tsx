import React, {FC, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {publicRoutesEnum} from '../../constants/routes';
import User from "../../services/User";
import {toast} from 'materialize-css';
import Container from '../../ui/Container';
import {CheckboxStyled} from './style'
import Center from '../../ui/Center'

export interface IAuth {
    name: string;
    comment: string;
    login: string;
    password: string;
    isAgree: boolean;
}

export const Registration: FC = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState<IAuth>({
        name: '',
        comment: '',
        login: '',
        password: '',
        isAgree: false
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value})
    }

    const registration = useCallback(async (form: IAuth) => {
        try {
            await User.registration(form);
            navigate(publicRoutesEnum.authorization)
            toast({html: "users is create", classes: "succes"});
        } catch (e) {
            toast({html: "registration error ", classes: "error"});
        }
    }, [])

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        registration(form)
    }


    return (
        <Container>
            <Center fullHeight horizontal vertical>

            </Center>
        </Container>


    );
};



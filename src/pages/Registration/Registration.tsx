import React, {FC, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { publicRoutesEnum } from '../../constants/routes';
import User from "../../services/User";
import {toast} from 'materialize-css'



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

    const registration = useCallback(async(form:IAuth) => {
        try {
            await User.registration(form);
            navigate(publicRoutesEnum.authorization)
        } catch (e) {
            toast({ html: "registration error ", classes: "error" });
        }

    }, [])


    return (
        <div>
            Registration
        </div>
    );
};



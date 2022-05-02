import {FC} from 'react';
import Users from "../pages/Users";
import Authorization from '../pages/Authorization'
import Registration from '../pages/Registration'


interface IRoute {
    path:string;
    exact: boolean;
    component: FC;
}

export enum privateRoutesEnum {
    users = '/users'
}

export enum publicRoutesEnum {
    authorization ='/auth/login',
    registration = '/auth/registration'
}


export const privateRoutes: IRoute[] = [
    {
        path: privateRoutesEnum.users,
        exact: true,
        component: Users
    }
]

export const  publicRoutes: IRoute[] = [
    {
        path: publicRoutesEnum.authorization,
        exact: true,
        component: Authorization
    },
    {
        path: publicRoutesEnum.registration,
        exact: true,
        component: Registration
    }
]
import {AxiosResponse} from 'axios'
import $api from "../api";
import {IRegistration} from "../types/user";


class User {
    static async registration(user:IRegistration):Promise<void> {
        console.log(user);
        return await $api.post("/users", user)
    }
}

export default User
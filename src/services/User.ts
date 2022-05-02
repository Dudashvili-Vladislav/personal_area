import {AxiosResponse} from 'axios'
import $api from "../api";
import {IRegistration, IAuthorization} from "../types/user";


class User {
    static async login(
        user: IAuthorization
      ): Promise<AxiosResponse<{user_jwt: string }>> {
        return await $api.post("/users/auth", user);
      }

    static async registration(user:IRegistration):Promise<void> {
        console.log(user);
        return await $api.post("/users", user)
    }
}

export default User
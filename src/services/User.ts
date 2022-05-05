import { AxiosResponse } from "axios";
import $api from "../api";
import { IRegistration, IAuthorization } from "../types/user";
import { IUser } from "../types/user";
import { IUpdate } from "../types/user";
import { ICreate } from "../types/user";

class User {
  static async login(
    user: IAuthorization
  ): Promise<AxiosResponse<{ user_jwt: string }>> {
    return await $api.post("/users/auth", user);
  }

  static async registration(user: IRegistration): Promise<void> {
    console.log(user);
    return await $api.post("/users", user);
  }

  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>("/users");
  }

  static async fetchUpdateUser({
    id,
    name,
    comment,
    login,
    password,
  }: IUpdate): Promise<AxiosResponse<IUser>> {
    return $api.patch<IUser>(`/users/${id}`, {
      name,
      comment,
      login,
      password,
    });
  }

  static async fetchCreateUser({
    name,
    comment,
    login,
    password,
  }: ICreate): Promise<AxiosResponse<IUser>> {
    return $api.post<IUser>("/users", {
      name,
      comment,
      login,
      password,
    });
  }

  static async fetchDeleteUser(id: number): Promise<AxiosResponse<IUser>> {
    return $api.delete<IUser>(`/users/${id}`);
  }
}

export default User;

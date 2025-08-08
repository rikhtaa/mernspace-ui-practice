import { api } from "./client";
export type Credentials ={
    email: string
    password: string
}
export const login = (credentails: Credentials) => api.post('/auth/login', credentails)
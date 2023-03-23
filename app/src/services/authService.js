import { requestCommands } from "./requests";

const baseUrl = `http://localhost:3030/users`;

export const authServiceUser = (token) => {
    const request = requestCommands(token);
    
    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};

import { requestCommands } from "./requests";

const baseUrl = 'http://localhost:3030/users/me'

export const ProfileService = (token) => {
 const request = requestCommands(token)

 const getOne = async (personId) => {
    const result = await request.get(`${baseUrl}/${personId}`);

    return result
   
   
    
};
return {getOne}
  
} 
import { requestCommands } from "./requests";

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestCommands();

export const getAll = async (productId) => {
    const searchQuery = encodeURIComponent(`productId="${productId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (productId, comment) => {
    const result = await request.post(baseUrl, { productId, comment });

    return result;
};
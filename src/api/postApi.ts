import type { Post } from "../types/post.types";
import api from "./axios"

export const getAllPostByUserId = async (id: string): Promise<Post[]> => {
    console.log("User id "+id);
    const response = await api.get<Post[]>(`post/api/posts/user/${id}`);
    console.log("Respose Post data ",response.data);
    return response.data;
}
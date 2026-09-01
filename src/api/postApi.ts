import type { Post } from "../types/post.types";
import api from "./axios"

export const getAllPostByUserId = async (id: string): Promise<Post[]> => {
    const response = await api.get<Post[]>(`post/api/posts/user/${id}`);
    return response.data;
}


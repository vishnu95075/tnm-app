import type { Post } from "../types/post.types";
import api from "./axios"

export const getAllPostByUserId = async (id: string): Promise<Post[]> => {
    const response = await api.get<Post[]>(`post/api/posts/user/${id}`);
    return response.data;
}

export const createPost = async (
    id: string,
    caption: string,
    filesData: FormData
): Promise<string> => {
    const postFormData = new FormData();

    const postDto = { userId: id, content: caption, tags: ["festival", "hi", "enjoy", "clodany"] };
    const postDtoBlob = new Blob([JSON.stringify(postDto)], {
        type: "application/json", // Use "application/json" if backend accepts JSON parts
    });

    postFormData.append("postDto", postDtoBlob);
    const files = filesData.getAll("files");
    files.forEach((file) => {
        postFormData.append("files", file);
    });

    const response = await api.post<string>("post/api/posts", postFormData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            timeout: 60000,
        }
    );

    return response.data;
};
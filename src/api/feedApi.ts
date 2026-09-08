import type { Feed } from "../types/feed.types";
import api from "./axios";

 const getAllfeed = async ():Promise<Feed[]>=>{
    const response= await api.get<Feed[]>("feed/api/feed");
    return response.data;
}

export default getAllfeed
import {instance, ResponseType} from "./blogsAPI";
import {PostType} from "../reducers/postsReducer";
import axios from "axios";

// export const postsAPI = {
//     getPosts() {
//         return instance.get<PostType[]>('/posts')
//     }
// }

export const postsAPI = {
    getPosts() {
        return axios.get<ResponseType<PostType[]>>('https://back-samurai.vercel.app/api/posts')
    }
}
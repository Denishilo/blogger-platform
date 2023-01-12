import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://back-samurai.vercel.app/api',
    withCredentials: true,
    // headers: {
    //     'Authorization': 'Basic YWRtaW46cXdlcnR5',
    // }
})

export const blogsAPI = {
    getBlogs() {
        return instance.get<ResponseType<BlogType[]>>('/blogs')
    },
    createBlog(newBlog: BlogType) {
        return instance.post('/blogs', newBlog)
    }
}


export type BlogType = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string,
    createdAt: string
}

export type ResponseType<T> = {
    pagesCount: number,
    page: number,
    pageSize: number,
    totalCount: number,
    items: T,
}

export enum ResponseStatus {
    OK = 200
}
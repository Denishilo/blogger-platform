import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://back-samurai.vercel.app',
    // withCredentials: true,
    // headers: {
    //     'Authorization': 'Basic YWRtaW46cXdlcnR5',
    // }
})

export const blogsAPI = {
    getBlogs() {
        return instance.get<BlogsResponseType>('/blogs')
    },
    createBlog(newBlog:BlogType){
        return instance.post<BlogType>('/blogs', newBlog)
    }
}


export type BlogType = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string,
    createdAt: string
}

export type BlogsResponseType =  {
    pagesCount: number,
    page: number,
    pageSize: number,
    totalCount: number,
    items: BlogType[],
}

export enum ResponseStatus {
    OK=200
}
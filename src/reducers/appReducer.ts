import {BlogType} from "../api/blogsAPI";
import {PostType} from "./postsReducer";

const initialState = {
    isPageBlogsActive: true,
    isBlogOpen: false,
    isPostOpen: false,
    currentBlogId: '',
    currentBlog: {
        id: '',
        name: '',
        description: '',
        websiteUrl: '',
        createdAt: ''
    },
    currentPost: {
        id: '',
        title: '',
        shortDescription: '',
        content: '',
        blogId: '',
        blogName: '',
        createdAt: '',
        parentId: '',
        extendedLikesInfo: {
            dislikesCount: 0,
            likesCount: 0,
            myStatus: '',
            newestLikes: [{
                addedAt: '',
                userId: '',
                login: '',
            }],
        }
    },
}
export const appReducer = (state: InitialType = initialState, action: AllAppActionType): InitialType => {
    switch (action.type) {
        case AppActions.ToggleMainPage:
            return {...state, isPageBlogsActive: !state.isPageBlogsActive}
        case AppActions.ToggleBlog:
            return {...state, isBlogOpen: !state.isBlogOpen}
        case AppActions.SetCurrentBlog:
            return {...state, currentBlog: action.payload.currentBlog}
        case AppActions.ClearCurrentBlog:
            return {...state, currentBlog: action.payload}
        case AppActions.TogglePost:
            return {...state, isPostOpen: !state.isPostOpen}
        case AppActions.SetCurrentPost:
            return {...state, currentPost: action.payload.currentPost}
        case AppActions.ClearCurrentPost:
            return {
                ...state,
                currentPost: {
                    ...action.payload,
                    extendedLikesInfo: {
                        ...action.payload.extendedLikesInfo,
                        newestLikes: [...action.payload.extendedLikesInfo.newestLikes]
                    }
                },
            }
        default:
            return state
    }
}

////ACTION CREATORS
/// App
export const toggleMainPageAC = () => ({type: AppActions.ToggleMainPage} as const)

///Blogs
export const toggleBlogAC = () => ({type: AppActions.ToggleBlog} as const)
export const setCurrentBlogAC = (currentBlog: BlogType) => {
    return {
        type: AppActions.SetCurrentBlog,
        payload: {
            currentBlog
        }
    } as const
}
export const clearCurrentBlogAC = () => {
    return {
        type: AppActions.ClearCurrentBlog,
        payload: {
            id: '',
            name: '',
            description: '',
            websiteUrl: '',
            createdAt: ''
        }
    } as const
}

///Posts
export const togglePostAC = () => ({type: AppActions.TogglePost} as const)
export const setCurrentPostAC = (currentPost: PostType) => {
    return {
        type: AppActions.SetCurrentPost,
        payload: {currentPost}
    } as const
}
export const clearCurrentPostAC = () => {
    return {
        type: AppActions.ClearCurrentPost,
        payload: {
            id: '',
            title: '',
            shortDescription: '',
            content: '',
            blogId: '',
            blogName: '',
            createdAt: '',
            parentId: '',
            extendedLikesInfo: {
                likesCount: 0,
                dislikesCount: 0,
                myStatus: '',
                newestLikes: [{
                    addedAt: '',
                    userId: '',
                    login: '',
                }],
            }
        }
    } as const
}

//// types
export type InitialType = {
    isPageBlogsActive: boolean,
    isBlogOpen: boolean,
    isPostOpen: boolean,
    currentBlogId: string
    currentBlog: BlogType,
    currentPost: PostType,
}

export enum AppActions {
    ToggleMainPage = 'TOGGLE-MAIN-PAGE',
    ToggleBlog = 'TOGGLE-BLOCK',
    SetCurrentBlog = 'SET-CURRENT-BLOG-ID',
    ClearCurrentBlog = 'CLEAR-CURRENT-BLOG',
    TogglePost = 'TOGGLE-POST',
    SetCurrentPost = 'SET-CURRENT-POST',
    ClearCurrentPost = 'CLEAR-CURRENT-POST'
}

export type AllAppActionType =
    ToggleMainPageACType
    | ToggleBlogACType
    | SetCurrentBlogACType
    | ClearCurrentBlogACType
    | TogglePostACType
    | SetCurrentPostACType
    | ClearCurrentPostACType

type ToggleMainPageACType = ReturnType<typeof toggleMainPageAC>
type ToggleBlogACType = ReturnType<typeof toggleBlogAC>
type SetCurrentBlogACType = ReturnType<typeof setCurrentBlogAC>
type ClearCurrentBlogACType = ReturnType<typeof clearCurrentBlogAC>
type TogglePostACType = ReturnType<typeof togglePostAC>
type SetCurrentPostACType = ReturnType<typeof setCurrentPostAC>
type ClearCurrentPostACType = ReturnType<typeof clearCurrentPostAC>


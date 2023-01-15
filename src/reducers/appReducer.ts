import {blogsAPI, BlogType} from "../api/blogsAPI";
import {PostType} from "./postsReducer";
import {AppThunkDispatch} from "../redux/store";
import {postsAPI} from "../api/postsAPI";

const initialState = {
    isShowBlogs: true,
    isShowPosts: false,
    currentBlogId: '',
    currentPostId: '',
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
        case AppActions.GoBlogsPage:
            return {...state, isShowBlogs: action.payload.value}
        case AppActions.GoPostsPage:
            return {...state, isShowPosts: action.payload.value}
        case AppActions.SetCurrentBlog:
            return {...state, currentBlog: action.payload.currentBlog}
        case AppActions.ClearCurrentBlog:
            return {...state, currentBlog: action.payload}
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
        case AppActions.SetCurrentBlogId:
            return {...state, currentBlogId: action.payload.currentId}
        case AppActions.SetCurrentPostId:
            return {...state, currentPostId: action.payload.currentId}
        default:
            return state
    }
}
////Thunk CREATORS
export const openBlogTC = (id: string) => async (dispatch: AppThunkDispatch) => {
    console.log('open blog')
    try {
        let res = await blogsAPI.getBlogById(id)
        dispatch(setCurrentBlogAC(res.data))
        //dispatch(setCurrentBlogIdAC(res.data.id))
    } catch (e) {

    }
}
export const openPostTC = (id: string) => async (dispatch: AppThunkDispatch) => {
    console.log('openTC id', id)
    try {
        let res = await postsAPI.getPostById(id)
        console.log(res)
        dispatch(setCurrentPostAC(res.data))
    } catch (e) {

    }

}

////ACTION CREATORS
/// App
export const goBlogsPageAC = (value:boolean) => ({type: AppActions.GoBlogsPage, payload:{value}} as const)
export const goPostsPageAC = (value:boolean) => ({type: AppActions.GoPostsPage,payload:{value}} as const)

///Blogs

export const setCurrentBlogAC = (currentBlog: BlogType) => {
    return {
        type: AppActions.SetCurrentBlog,
        payload: {
            currentBlog
        }
    } as const
}
export const setCurrentBlogIdAC = (currentId: string) => {
    return {
        type: AppActions.SetCurrentBlogId,
        payload: {
            currentId
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

export const setCurrentPostAC = (currentPost: PostType) => {
    return {
        type: AppActions.SetCurrentPost,
        payload: {currentPost}
    } as const
}
export const setCurrentPostIdAC = (currentId: string) => {
    return {
        type: AppActions.SetCurrentPostId,
        payload: {
            currentId
        }
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
    isShowBlogs: boolean,
    isShowPosts: boolean,
    currentBlogId: string,
    currentPostId: string,
    currentBlog: BlogType,
    currentPost: PostType,
}

export enum AppActions {
    GoBlogsPage = 'GO-BLOGS-PAGE',
    GoPostsPage = 'GO-POSTS-PAGE',
    SetCurrentBlog = 'SET-CURRENT-BLOG',
    SetCurrentBlogId = 'SET-CURRENT-BLOG-ID',
    ClearCurrentBlog = 'CLEAR-CURRENT-BLOG',
    SetCurrentPost = 'SET-CURRENT-POST',
    ClearCurrentPost = 'CLEAR-CURRENT-POST',
    SetCurrentPostId = 'SET-CURRENT-POST-ID',
}

export type AllAppActionType =
    GoBlogsPageACType
    | GoPostsPageACType
    | SetCurrentBlogACType
    | ClearCurrentBlogACType
    | SetCurrentPostACType
    | ClearCurrentPostACType
    | SetCurrentBlogIdACType
    | SetCurrentPostIdACType

type GoBlogsPageACType = ReturnType<typeof goBlogsPageAC>
type GoPostsPageACType = ReturnType<typeof goPostsPageAC>
type SetCurrentBlogACType = ReturnType<typeof setCurrentBlogAC>
type SetCurrentBlogIdACType = ReturnType<typeof setCurrentBlogIdAC>
type ClearCurrentBlogACType = ReturnType<typeof clearCurrentBlogAC>
type SetCurrentPostACType = ReturnType<typeof setCurrentPostAC>
type SetCurrentPostIdACType = ReturnType<typeof setCurrentPostIdAC>
type ClearCurrentPostACType = ReturnType<typeof clearCurrentPostAC>



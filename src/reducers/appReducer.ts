import {BlogType} from "../api/blogsAPI";

const initialState = {
    isPageBlogsActive: true,
    isBlogOpen: false,
    isPostOpen: false,
    currentBlogId: '',
    currentBlog:{
        id: '',
        name: '',
        description: '',
        websiteUrl: '',
        createdAt: ''
    }
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
            return {...state, currentBlog:action.payload}
        default:
            return state
    }
}

////ACTION CREATORS

export const toggleMainPageAC = () => ({type: AppActions.ToggleMainPage} as const)
export const toggleBlogAC = () => ({
    type: AppActions.ToggleBlog,
} as const)
export const clearCurrentBlogAC = () =>{
    return{
        type: AppActions.ClearCurrentBlog,
        payload:{
            id: '',
            name: '',
            description: '',
            websiteUrl: '',
            createdAt: ''
        }
    } as const
}

export const setCurrentBlogAC = (currentBlog: BlogType) => {
    return {
        type: AppActions.SetCurrentBlog,
        payload: {
            currentBlog
        }
    } as const
}
//// types
export type AllAppActionType = ToggleMainPageACType | ToggleBlogACType | SetCurrentBlogACType |ClearCurrentBlogACType
export type InitialType = {
    isPageBlogsActive: boolean,
    isBlogOpen: boolean,
    isPostOpen: boolean,
    currentBlogId: string
    currentBlog:BlogType,
}
export type ToggleMainPageACType = ReturnType<typeof toggleMainPageAC>
export type ToggleBlogACType = ReturnType<typeof toggleBlogAC>
export type SetCurrentBlogACType = ReturnType<typeof setCurrentBlogAC>
export type ClearCurrentBlogACType = ReturnType<typeof clearCurrentBlogAC>

export enum AppActions {
    ToggleMainPage = 'TOGGLE-MAIN-PAGE',
    ToggleBlog = 'TOGGLE-BLOCK',
    SetCurrentBlog = 'SET-CURRENT-BLOG-ID',
    ClearCurrentBlog= 'CLEAR-CURRENT-BLOG',
}
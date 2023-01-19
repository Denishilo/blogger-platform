import {AppThunkDispatch} from "../redux/store";
import {postsAPI} from "../api/postsAPI";
import {ResponseStatus} from "../api/blogsAPI";

export const initialState = []

export const postsReducer = (state: InitialStateType = initialState, action: AllPostsActionsType): InitialStateType => {
    switch (action.type) {
        case PostActions.GetPosts:
            return [...state, ...action.payload.posts]
        case PostActions.DeletePosts:
            return []
        default:
            return state
    }

}

/////////////////////////////// Thunk CREATORS /////////////////////////////////
export const getPostsTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        let res = await postsAPI.getPosts()
        if (res.status === ResponseStatus.OK) {
            console.log(res)
            dispatch(getPostsAC(res.data.items))
        }
    } catch (e) {

    }
}

/////////////////////////////// ACTIONS CREATORS /////////////////////////////////
export const getPostsAC = (posts: PostType[]) => {
    return {
        type: PostActions.GetPosts,
        payload: {
            posts
        }
    } as const
}
export const deletePostsAC = () => ({type: PostActions.DeletePosts} as const)

/////////////////////////////// types ////////////////////////////////////////////
type GetPostsACType = ReturnType<typeof getPostsAC>
type DeletePostsACType = ReturnType<typeof deletePostsAC>
export type AllPostsActionsType = GetPostsACType | DeletePostsACType

export type PostType = {
    id: string,
    title: string,
    shortDescription: string,
    content: string,
    blogId: string,
    blogName: string,
    createdAt: string,
    parentId:string,
    extendedLikesInfo: ExtendedLikesInfoType
}

type ExtendedLikesInfoType = {
    likesCount: number,
    dislikesCount:number,
    myStatus:string,
    newestLikes: NewestLikes[],
}

type NewestLikes = {
    addedAt: string,
    userId: string,
    login: string,
}
export type InitialStateType = PostType[]

export enum PostActions {
    GetPosts = 'GET-POSTS',
    DeletePosts = 'DELETE-POSTS'
}




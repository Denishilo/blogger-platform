import {blogsAPI, BlogType, ResponseStatus} from "../api/blogsAPI";
import {AppThunkDispatch} from "../redux/store";

export const initialState: BlogType[] = []
export const blogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case BlogsActions.GetBlogs:
            return [...state, ...action.payload.blogs]
        case BlogsActions.DeleteBlogs:
            return []
        default:
            return state
    }
}
/////////////////////////////// ACTIONS CREATORS /////////////////////////////////
export const getBlogsAC = (blogs: BlogType[]) => {
    return {
        type: BlogsActions.GetBlogs,
        payload: {
            blogs
        }
    } as const
}
export const deleteBlogsAC = () => ({type: BlogsActions.DeleteBlogs} as const)

/////////////////////////////// Thunk CREATORS /////////////////////////////////
export const getBlogsTC = () => async (dispatch: AppThunkDispatch) => {
    try {
        const res = await blogsAPI.getBlogs()
        if (res.status === ResponseStatus.OK) {
            dispatch(getBlogsAC(res.data.items))
        } else {
        }
    } catch (e) {
    }
}

///////////////////////////// types ///////////////////////////////////////////
export type ActionTypes = GetBlogsType | DeleteBlogsType
type GetBlogsType = ReturnType<typeof getBlogsAC>
type DeleteBlogsType = ReturnType<typeof deleteBlogsAC>

export enum BlogsActions {
    GetBlogs = 'GET-BLOGS',
    DeleteBlogs = 'DELETE-BLOGS',
}
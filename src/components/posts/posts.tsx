import s from './Posts.module.css'
import {SelectField} from "./select/selectField";
import {CompressedPost} from "./compressedPost/compressedPost";
import {BasicButton} from "../button/button";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deletePostsAC, getPostsTC, PostType} from "../../reducers/postsReducer";
import {Post} from "./post/post";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const isPostOpen = useAppSelector<boolean>(state => state.app.isPostOpen)
    const posts = useAppSelector<PostType[]>(state => state.posts)
    const currentPost = useAppSelector<PostType>(state => state.app.currentPost)

    useEffect(() => {
        dispatch(getPostsTC())
        return () => {
            dispatch(deletePostsAC())
        }
    }, [])
    const postsList = posts.map(post => {
        return <CompressedPost key={post.id} post={post}/>
    })

    return (
        <div className={s.postsWrapper}>
            {isPostOpen ? <Post currentPost={currentPost}/> : <div>
                <h2 className={s.blogsTitle}>Posts</h2>
                <div className={s.selectWrapper}>
                    <SelectField/>
                </div>
                <div className={s.postsContainer}>
                    {postsList}
                </div>
                <div className={s.buttonWrapper}>
                    <BasicButton/>
                </div>
            </div>}

        </div>
    )
}
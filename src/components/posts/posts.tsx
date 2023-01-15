import s from './Posts.module.css'
import {SelectField} from "./select/selectField";
import {CompressedPost} from "./compressedPost/compressedPost";
import {BasicButton} from "../button/button";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {deletePostsAC, getPostsTC, PostType} from "../../reducers/postsReducer";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const posts = useAppSelector<PostType[]>(state => state.posts)

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
            <div>
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
            </div>
        </div>
    )
}
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

    return (
        <div className={s.postsWrapper}>
            <h2  className={s.blogsTitle}>Posts</h2>
            <div className={s.selectWrapper}>
                <SelectField/>
            </div>
            <div className={s.postsContainer}>
                {posts.map(p => {
                    return <CompressedPost key={p.id} title={p.title} shortDescription={p.shortDescription}
                                           createdDate={p.createdAt}/>
                })
                }
            </div>
            <div className={s.buttonWrapper}>
                <BasicButton/>
            </div>
            {/*<Post/>*/}
        </div>
    )
}
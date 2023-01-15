import s from './Blogs.module.css'
import {SearchField} from "../searchField/searchField";
import {SelectSort} from "../selectSort/selectSort";
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {BasicButton} from "../button/button";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {memo, useEffect} from "react";
import {deleteBlogsAC, getBlogsTC} from "../../reducers/blogsReducer";

export const Blogs = memo(() => {
    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs)

    useEffect(() => {
        dispatch(getBlogsTC())
        return () => {
            dispatch(deleteBlogsAC())
        }
    }, [])

    const blogsList = blogs.map(blog => {
        return <CompressedBlog key={blog.id} blog={blog}/>
    })

    return (
        <div className={s.blogsWrapper}>
            <div>
                <h2 className={s.blogsTitle}>Blogs</h2>
                <div className={s.blogsFields}>
                    <SearchField/>
                    <SelectSort/>
                </div>
                <div className={s.blogsList}>
                    <div className={s.blogItem}>
                        {blogsList}
                    </div>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <BasicButton/>
            </div>
        </div>
    )
})
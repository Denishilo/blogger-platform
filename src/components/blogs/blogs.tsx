import s from './Blogs.module.css'
import {SearchField} from "../searchField/searchField";
import {SelectSort} from "../selectSort/selectSort";
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {BasicButton} from "../button/button";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {memo, useEffect} from "react";
import {deleteBlogsAC, getBlogsTC} from "../../reducers/blogsReducer";
import {ItemTitle} from "../itemTitle/itemTitle";

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
            <ItemTitle name={'Blogs'}/>
            <div className={s.blogsFields}>
                <SearchField/>
                <SelectSort/>
            </div>
            <div className={s.blogsList}>
                {blogsList}
            </div>
            <BasicButton/>
        </div>
    )
})
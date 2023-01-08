import s from './Blogs.module.css'
import {SearchField} from "../searchField/searchField";
import {SelectSort} from "../selectSort/selectSort";
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {BasicButton} from "../button/button";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import {getBlogsTC} from "../../reducers/blogsReducer";

export const Blogs = ()=> {
    const blogs = useAppSelector(state => state.blogs)
    const dispatch = useAppDispatch()
    console.log('blogs')

    useEffect(() => {
        console.log('useeffect')
        dispatch(getBlogsTC())
    }, [])

    return (
        <div className={s.blogsWrapper}>
            <h2 className={s.blogsTitle}>Blogs</h2>
            <div className={s.blogsFields}>
                <SearchField/>
                <SelectSort/>
            </div>
            <div className={s.blogsList}>
                <div className={s.blogItem}>
                    {blogs.map(blog => {
                        return <CompressedBlog key={blog.id} blog={blog}/>
                    })}
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <BasicButton/>
            </div>
        </div>
    )
}
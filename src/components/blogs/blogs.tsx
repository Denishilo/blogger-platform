import s from './Blogs.module.css'
import {SearchField} from "../searchField/searchField";
import {SelectSort} from "../selectSort/selectSort";
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {BasicButton} from "../button/button";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {memo, useEffect, useState} from "react";
import {deleteBlogsAC, getBlogsTC} from "../../reducers/blogsReducer";
import {Blog} from "../blog/blog";

export const Blogs = memo(() => {
    const blogs = useAppSelector(state => state.blogs)
    const dispatch = useAppDispatch()
    console.log('blogs')
    const [isShowBlog, setIsShowBlog] = useState<boolean>(true)

    useEffect(() => {
        dispatch(getBlogsTC())
        return ()=>{
            dispatch(deleteBlogsAC())
        }
    }, [])

    return (
        <div className={s.blogsWrapper}>

            {isShowBlog? <Blog/> : <div>
                    <h2 className={s.blogsTitle}>Blogs</h2>
                    <div className={s.blogsFields}>
                        <SearchField/>
                        <SelectSort/>
                    </div>
                    <div className={s.blogsList}>
                        <div className={s.blogItem}>
                            {blogs.map(blog => {
                                return <CompressedBlog key={blog.id} blog={blog} isShowBlog={isShowBlog}/>
                            })}
                        </div>
                    </div>
                </div>
                }
            <div className={s.buttonWrapper}>
                <BasicButton/>
            </div>

        </div>
    )
})
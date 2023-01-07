import s from './Blogs.module.css'
import {SearchField} from "../searchField/searchField";
import {SelectSort} from "../selectSort/selectSort";
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {BasicButton} from "../button/button";

export const Blogs = () => {
    return (
        <div className={s.blogsWrapper}>
            <h2 className={s.blogsTitle}>Blogs</h2>
            <div className={s.blogsFields}>
                <SearchField/>
                <SelectSort/>
            </div>
            <div className={s.blogsList}>
                    <div className={s.blogItem}>
                        <CompressedBlog/>
                    </div>
            </div>
            <div className={s.buttonWrapper}>
                <BasicButton/>
            </div>

        </div>
    )
}
import s from './CompressedBlog.module.css'
import imgBlogs from '../../img/imgBlogs.svg'
import {memo} from "react";
import {BlogType} from "../../api/blogsAPI";
import {NavLink} from "react-router-dom";

export const CompressedBlog = memo((props: CompressedBlogPropsType) => {
    const {name, description, createdAt, websiteUrl} = props.blog
    const {isShowBlog} = props
    console.log('compressing blog')

    return (
        <div className={s.wrapper}>
            <div className={!isShowBlog ? s.imgWrapper : `${s.imgWrapper} ${s.imgShow}`}>
                <img className={s.img} src={imgBlogs} alt="picture"/>
            </div>
            <div className={s.container}>
                <h3 className={s.title}>{name}</h3>
                <p className={s.linkWrapper}>
                    Website: <NavLink to={websiteUrl}>{websiteUrl}</NavLink>
                </p>
                <p className={s.description}>
                    {description}
                </p>
            </div>
        </div>
    )
})

export type CompressedBlogPropsType = {
    blog: BlogType,
    isShowBlog: boolean
}
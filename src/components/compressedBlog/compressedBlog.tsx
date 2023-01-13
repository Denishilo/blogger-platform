import s from './CompressedBlog.module.css'
import imgBlogs from '../../img/imgBlogs.svg'
import {memo} from "react";
import {BlogType} from "../../api/blogsAPI";
import {setCurrentBlogAC, toggleBlogAC} from "../../reducers/appReducer";
import {useAppDispatch} from "../../redux/store";
import {NavLink} from "react-router-dom";

export const CompressedBlog = memo((props: CompressedBlogPropsType) => {
    const dispatch = useAppDispatch()
    const {blog} = props
    const {name, description, createdAt, websiteUrl, id} = props.blog

    const openBlog = () => {
        dispatch(toggleBlogAC())
        dispatch(setCurrentBlogAC(blog))
    }

    return (
        <div className={s.wrapper}>
            <div onClick={openBlog} className={s.imgWrapper}>
                <img className={s.img} src={imgBlogs} alt="picture"/>
            </div>
            <div className={s.container}>
                <h3 onClick={openBlog} className={s.title}>{name}</h3>
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

//// types

export type CompressedBlogPropsType = {
    blog: BlogType
}
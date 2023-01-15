import s from './CompressedBlog.module.css'
import imgBlogs from '../../img/imgBlogs.svg'
import {memo} from "react";
import {BlogType} from "../../api/blogsAPI";
import {setCurrentBlogIdAC} from "../../reducers/appReducer";
import {useAppDispatch} from "../../redux/store";
import {NavLink, useNavigate} from "react-router-dom";

export const CompressedBlog = memo((props: CompressedBlogPropsType) => {
    const dispatch = useAppDispatch()
    const {name, description, websiteUrl, id} = props.blog
    const navigate = useNavigate()

    const openBlog = () => {
        dispatch(setCurrentBlogIdAC(id))
        navigate(`/blog/${id}`)
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
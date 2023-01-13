import s from './Blog.module.css'
import arrowRight from '../../img/arrow_right.svg'
import arrowBack from '../../img/arrowBack.svg'
import bigAva from '../../img/photoBigAvatar.svg'
import {memo} from "react";
import {useAppDispatch} from "../../redux/store";
import {clearCurrentBlogAC,toggleBlogAC} from "../../reducers/appReducer";
import {BlogType} from "../../api/blogsAPI";
import {NavLink} from "react-router-dom";
import imgBlogs from "../../img/imgBlogs.svg";

export const Blog = memo((props: BlogPropsType) => {
    const dispatch = useAppDispatch()
    const {name, websiteUrl, description, createdAt} = props.blogObj
    const date = new Date(createdAt).toLocaleDateString('ru')

    const goBackToBlogs = () => {
        dispatch(toggleBlogAC())
        dispatch(clearCurrentBlogAC())
    }

    return (
        <div className={s.blogWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Blogs</h3>
                <img src={arrowRight} alt="arrow"/>
                <p>{name}</p>
            </div>
            <div onClick={goBackToBlogs} className={s.navigateBack}>
                <img src={arrowBack} alt="back"/>
                <span className={s.text}>Back to blogs</span>
            </div>
            <div className={s.content}>
                <div className={s.blogAvatar}>
                    <img className={s.imgBig} src={bigAva} alt="blogImg"/>
                </div>
                <div className={s.container}>
                    <div className={s.imgWrapper}>
                        <img className={s.img} src={imgBlogs} alt="picture"/>
                    </div>
                    <div>
                        <h3 className={s.title}>{name}</h3>
                        <p className={s.createDate}>Blog creation date: {date}</p>
                        <p className={s.linkWrapper}>
                            Website: <NavLink to={websiteUrl}>{websiteUrl}</NavLink>
                        </p>
                        <p className={s.description}>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div>POSTS</div>
        </div>
    )
})

export type BlogPropsType = {
    blogObj: BlogType
}
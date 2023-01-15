import s from './Blog.module.css'
import arrowRight from '../../img/arrow_right.svg'
import arrowBack from '../../img/arrowBack.svg'
import bigAva from '../../img/photoBigAvatar.svg'
import {memo, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearCurrentBlogAC, openBlogTC, setCurrentBlogIdAC} from "../../reducers/appReducer";
import {NavLink, useNavigate} from "react-router-dom";
import imgBlogs from "../../img/imgBlogs.svg";

export const Blog = memo(() => {
    const dispatch = useAppDispatch()
    const blogId = useAppSelector<string>(state => state.app.currentBlogId)
    const nameBlog = useAppSelector<string>(state => state.app.currentBlog.name)
    const description = useAppSelector<string>(state => state.app.currentBlog.description)
    const createdAt = useAppSelector<string>(state => state.app.currentBlog.createdAt)
    const websiteUrl = useAppSelector<string>(state => state.app.currentBlog.websiteUrl)
    const date = new Date(createdAt).toLocaleDateString('ru')
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(openBlogTC(blogId))
    }, [])

    const goBackToBlogs = () => {
        dispatch(setCurrentBlogIdAC(''))
        dispatch(clearCurrentBlogAC())
        navigate('/blogs')
    }

    return (
        <div className={s.blogWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Blogs</h3>
                <img src={arrowRight} alt="arrow"/>
                <p>{nameBlog}</p>
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
                        <h3 className={s.title}>{nameBlog}</h3>
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

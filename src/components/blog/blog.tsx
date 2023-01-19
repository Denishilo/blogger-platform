import s from './Blog.module.css'
import bigAva from '../../img/photoBigAvatar.svg'
import {memo, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {clearCurrentBlogAC, openBlogTC, setCurrentBlogIdAC} from "../../reducers/appReducer";
import {useNavigate} from "react-router-dom";
import imgBlogs from "../../img/imgBlogs.svg";
import {ItemTitle} from "../itemTitle/itemTitle";
import {GoBackSection} from "../goBackSection/goBackSection";
import {BlogInfo} from "../blogInfo/blogInfo";

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
            <ItemTitle showItem={true} nameBlog={nameBlog} name={'Blogs'}/>
            <GoBackSection title={'blogs'} callback={goBackToBlogs}/>
            <div className={s.blogAvatar}>
                <img className={s.imgBig} src={bigAva} alt="blogImg"/>
            </div>
            <div className={s.container}>
                <div className={s.imgWrapper}>
                    <img className={s.img} src={imgBlogs} alt="picture"/>
                </div>
                <BlogInfo name={nameBlog} isShowMoreInfo={true} date={date} description={description} websiteUrl={websiteUrl}/>
            </div>
            <div>POSTS</div>
        </div>
    )
})

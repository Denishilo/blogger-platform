import s from './Post.module.css'
import arrowRight from '../../../img/arrow_right.svg'
import arrowBack from '../../../img/arrowBack.svg'
import imgPost from '../../../img/photoBigAvatar.svg'
import imgBlog from '../../../img/imgBlogs.svg'
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {clearCurrentPostAC, openPostTC, setCurrentPostIdAC} from "../../../reducers/appReducer";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const Post = () => {

    useEffect(() => {
        dispatch(openPostTC(currentPostId))
    }, [])

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const currentPostId = useAppSelector<string>(state => state.app.currentPostId)
    const blogName = useAppSelector<string>(state => state.app.currentPost.blogName)
    const createdAt = useAppSelector<string>(state => state.app.currentPost.createdAt)
    const content = useAppSelector<string>(state => state.app.currentPost.content)
    const title = useAppSelector<string>(state => state.app.currentPost.title)
    const createdDate = new Date(createdAt).toLocaleDateString('ru')
    const createdTime = new Date(createdAt).toLocaleTimeString()

    const backToPosts = () => {
        dispatch(clearCurrentPostAC())
        dispatch(setCurrentPostIdAC(''))
        navigate('/posts')
    }

    return (
        <div className={s.postWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Posts</h3>
                <img src={arrowRight} alt="arrow"/>
                <span>{blogName}</span>
            </div>
            <div className={s.blogInfo}>
                <div className={s.blogInfoImgWrapper}>
                    <img className={s.blogInfoImg} src={imgBlog} alt=""/>
                </div>
                <p>{blogName}</p>
            </div>
            <div onClick={backToPosts} className={s.navBlock}>
                <img className={s.imgNavBlock} src={arrowBack} alt="arrowBack"/>
                <span>Back to posts</span>
            </div>
            <div className={s.postContent}>
                <h2 className={s.postTitle}>{title}</h2>
                <p className={s.date}>{`${createdDate} at ${createdTime}`}</p>
                <div className={s.postPicture}>
                    <img className={s.imgPost} src={imgPost} alt="picture"/>
                </div>
                <p className={s.postText}>{content}</p>
            </div>
        </div>
    )
}


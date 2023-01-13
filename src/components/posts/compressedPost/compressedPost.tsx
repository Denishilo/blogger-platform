import s from './CompressedPost.module.css'
import mainImg from '../../../img/mainImgPost.svg'
import {useAppDispatch} from "../../../redux/store";
import {setCurrentPostAC, togglePostAC} from "../../../reducers/appReducer";
import {PostType} from "../../../reducers/postsReducer";


export const CompressedPost = (props: CompressedPostPropsType) => {
    const dispatch = useAppDispatch()
    const {title, createdAt, blogName} = props.post
    const {post} = props
    const formatCreatedDate = new Date(createdAt).toLocaleDateString('ru')

    const openPost = () => {
        dispatch(togglePostAC())
        dispatch(setCurrentPostAC(post))
    }
    return (
        <div className={s.wrapper}>
            <div onClick={openPost} className={s.imgContainer}>
                <img className={s.mainImg} src={mainImg} alt="avatar"/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.imgDescription}>
                    <img className={s.img} src={mainImg} alt="avatar"/>
                </div>
                <div className={s.content}>
                    <h3 onClick={openPost} className={s.title}>{title}</h3>
                    <p className={s.description}>{blogName}</p>
                    <p className={s.date}>{formatCreatedDate}</p>
                </div>
            </div>
        </div>
    )
}

////// types

export type CompressedPostPropsType = {
    post: PostType
}
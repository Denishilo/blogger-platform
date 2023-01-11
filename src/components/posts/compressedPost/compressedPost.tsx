import s from './CompressedPost.module.css'
import mainImg from '../../../img/mainImgPost.svg'


export const CompressedPost = (props: CompressedPostPropsType) => {
    const {title, shortDescription, createdDate} = props
    const formatCreatedDate = new Date(createdDate).toLocaleDateString('ru')

    return (
        <div className={s.wrapper}>
            <div className={s.imgContainer}>
                <img className={s.mainImg} src={mainImg} alt="avatar"/>
            </div>
            <div className={s.infoContainer}>
                <div className={s.imgDescription}>
                    <img className={s.img} src={mainImg} alt="avatar"/>
                </div>
                <div className={s.content}>
                    <h3 className={s.title}>{title}</h3>
                    <p className={s.description}>{shortDescription}</p>
                    <p className={s.date}>{formatCreatedDate}</p>
                </div>
            </div>
        </div>
    )
}

////// types

export type CompressedPostPropsType = {
    title: string,
    shortDescription: string,
    createdDate: string,
}
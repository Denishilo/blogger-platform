import s from './CompressedBlog.module.css'
import imgBlogs from '../../img/imgBlogs.svg'
import {memo} from "react";
import {BlogType} from "../../api/blogsAPI";
import {setCurrentBlogIdAC} from "../../reducers/appReducer";
import {useAppDispatch} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import {BlogInfo} from "../blogInfo/blogInfo";

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
            <BlogInfo callback={openBlog} name={name} isShowMoreInfo={false}
                      websiteUrl={websiteUrl} description={description}/>
        </div>
    )
})

/////////////////// types ////////////////////

export type CompressedBlogPropsType = {
    blog: BlogType
}
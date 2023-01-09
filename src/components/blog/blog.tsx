import s from './Blog.module.css'
import arrowRight from '../../img/arrow_right.svg'
import arrowBack from '../../img/arrowBack.svg'
import bigAva from '../../img/photoBigAvatar.svg'
import {CompressedBlog} from "../compressedBlog/compressedBlog";
import {memo} from "react";

export const Blog = memo(() => {
    return (
        <div className={s.blogWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Blogs</h3>
                <img src={arrowRight} alt="arrow"/>
                <p>The best blog in our village</p>
            </div>
            <div className={s.navigateBack}>
                <img src={arrowBack} alt="back"/>
                <span className={s.text}>Back to blogs</span>
            </div>
            <div className={s.content}>
                <div className={s.blogAvatar}>
                    <img className={s.img} src={bigAva} alt="blogImg"/>
                </div>
                <CompressedBlog
                    blog={{id: 'ss', description: 'sss', createdAt: 'sss', name: 'ttitle', websiteUrl: 'ss'}}
                    isShowBlog={true}/>
                <div>POSTS</div>
            </div>
        </div>
    )
})
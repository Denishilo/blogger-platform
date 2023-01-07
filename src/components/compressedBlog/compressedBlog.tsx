import s from './CompressedBlog.module.css'
import imgBlogs from '../../img/imgBlogs.svg'
export const CompressedBlog = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.imgWrapper}>
                <img className={s.img} src={imgBlogs} alt="picture"/>
            </div>
            <div className={s.container}>
                <h3 className={s.title}>The best blog in our village</h3>
                <p className={s.linkWrapper}>
                    Website: <a href="https://www.youtube.com/"> https://www.youtube.com/</a>
                </p>
                <p className={s.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor
                </p>
            </div>
        </div>
    )
}
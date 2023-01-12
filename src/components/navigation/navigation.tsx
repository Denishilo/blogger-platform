import s from './Navigation.module.css'
import blogsActive from '../../img/blogsActive.svg'
import noActiveBlogs from '../../img/noActiveBlogs.svg'
import postsNoActive from '../../img/postsNoActive.svg'
import activePosts from '../../img/activePosts.svg'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {toggleMainPageAC} from "../../reducers/appReducer";

export const Navigation = () => {
    const dispatch = useAppDispatch()
    const isPageBlogsActive = useAppSelector<boolean>(state => state.app.isPageBlogsActive)
    const onChangePage = () => {
        dispatch(toggleMainPageAC())
    }
    return (
        <div className={s.navWrapper}>
            <div className={s.navList}>
                <NavLink onClick={onChangePage} to={'/blogs'} className={s.navItem}>
                    <div className={s.navImg}><img className={s.img}  src={isPageBlogsActive ? blogsActive : noActiveBlogs} alt="icon"/>
                    </div>
                    <p  className={s.navItemTitle}>Blogs</p>
                </NavLink>
                <NavLink onClick={onChangePage} to={'/posts'} className={s.navItem}>
                    <div className={s.navImg}><img className={s.img} src={isPageBlogsActive ? postsNoActive : activePosts} alt="icon"/>
                    </div>
                    <p  className={s.navItemTitle}>Posts</p>
                </NavLink>
            </div>
        </div>
    )
}
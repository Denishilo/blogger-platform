import s from './Navigation.module.css'
import blogsActive from '../../img/blogsActive.svg'
import noActiveBlogs from '../../img/noActiveBlogs.svg'
import postsNoActive from '../../img/postsNoActive.svg'
import activePosts from '../../img/activePosts.svg'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {goBlogsPageAC, goPostsPageAC} from "../../reducers/appReducer";

export const Navigation = () => {
    const dispatch = useAppDispatch()
    const isShowBlogs = useAppSelector<boolean>(state => state.app.isShowBlogs)
    const isShowPosts = useAppSelector<boolean>(state => state.app.isShowPosts)

    const goBlogsPage = () => {
        if (!isShowBlogs) {
            dispatch(goBlogsPageAC(true))
            dispatch(goPostsPageAC(false))
        }

    }
    const goPostsPage = () => {
        if (!isShowPosts) {
            dispatch(goPostsPageAC(true))
            dispatch(goBlogsPageAC(false))
        }

    }
    return (
        <div className={s.navWrapper}>
            <div className={s.navList}>
                <NavLink onClick={goBlogsPage} to={'/blogs'} className={s.navItem}>
                    <div className={s.navImg}><img className={s.img} src={isShowBlogs ? blogsActive : noActiveBlogs}
                                                   alt="icon"/>
                    </div>
                    <p className={s.navItemTitle}>Blogs</p>
                </NavLink>
                <NavLink onClick={goPostsPage} to={'/posts'} className={s.navItem}>
                    <div className={s.navImg}><img className={s.img} src={isShowPosts ? activePosts : postsNoActive}
                                                   alt="icon"/>
                    </div>
                    <p className={s.navItemTitle}>Posts</p>
                </NavLink>
            </div>
        </div>
    )
}
import s from './Navigation.module.css'
import blogsActive from '../../img/blogsActive.svg'
import noActiveBlogs from '../../img/noActiveBlogs.svg'
import postsNoActive from '../../img/postsNoActive.svg'
import activePosts from '../../img/activePosts.svg'
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {goBlogsPageAC, goPostsPageAC} from "../../reducers/appReducer";
import {NavItem} from "../navItem/navItem";

export const Navigation = () => {
    const dispatch = useAppDispatch()
    const isShowBlogs = useAppSelector<boolean>(state => state.app.isShowBlogs)
    const isShowPosts = useAppSelector<boolean>(state => state.app.isShowPosts)
    const srcBlogs = isShowBlogs ? blogsActive : noActiveBlogs
    const srcPosts = isShowPosts ? activePosts : postsNoActive

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
                <NavItem callback={goBlogsPage} navName={'Blogs'} imgSrc={srcBlogs}/>
                <NavItem callback={goPostsPage} navName={'Posts'} imgSrc={srcPosts}/>
            </div>
        </div>
    )
}
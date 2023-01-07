import s from './Navigation.module.css'
import blogsActive from '../../img/blogsActive.svg'
import postsNoActive from '../../img/postsNoActive.svg'
import {NavLink} from "react-router-dom";
export const Navigation = () => {
    return (
        <div className={s.navWrapper}>
           <div className={s.navList}>
               <NavLink to={'/blogs'} className={s.navItem}>
                   <div className={s.navImg}><img src={blogsActive} alt="icon"/></div>
                   <p className={s.navItemTitle}>Blogs</p>
               </NavLink>
               <NavLink to={'/posts'} className={s.navItem}>
                   <div className={s.navImg}><img src={postsNoActive} alt="icon"/></div>
                   <p className={s.navItemTitle}>Posts</p>
               </NavLink>
           </div>
        </div>
    )
}
import s from './Header.module.css'

export const Header = () => {
    return (
        <div className={s.headerWrapper}>
            <h1 className={s.headerTitle}>Blogger Platform</h1>
        </div>
    )
}
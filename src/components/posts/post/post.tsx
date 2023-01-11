import s from './Post.module.css'
import arrowRight from '../../../img/arrow_right.svg'
import arrowBack from '../../../img/arrowBack.svg'
import imgPost from '../../../img/photoBigAvatar.svg'

export const Post = () => {
    return (
        <div className={s.postWrapper}>
            <div className={s.titleWrapper}>
                <h3 className={s.title}>Posts</h3>
                <img src={arrowRight} alt="arrow"/>
                <span>title blog</span>
            </div>
            <div className={s.navBlock}>
                <img className={s.imgNavBlock} src={arrowBack} alt="arrowBack"/>
                <span>Back to posts</span>
            </div>
            <div className={s.postContent}>
                <h2 className={s.postTitle}>Title Post</h2>
                <p className={s.date}>12/12/2022</p>
                <div className={s.postPicture}>
                    <img className={s.imgPost} src={imgPost} alt="picture"/>
                </div>
                <p className={s.postText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci
                    blanditiis culpa cumque dicta eos est ex exercitationem facere fuga id illum iusto libero maxime
                    nesciunt numquam obcaecati placeat possimus praesentium, quas quo saepe sit voluptates? Amet
                    delectus ducimus, id illo labore laboriosam molestias nesciunt odio placeat quae quis quisquam quo
                    saepe sapiente velit. Accusamus ad alias aliquid commodi consequuntur cupiditate debitis deserunt
                    dignissimos, distinctio ea, esse hic iure laborum laudantium minima nobis odio odit officia pariatur
                    porro, quod sequi vero voluptatum! A autem debitis deleniti dignissimos ea enim, est, eveniet
                    exercitationem facere illum impedit incidunt inventore libero magnam maiores molestias mollitia,
                    necessitatibus obcaecati odit omnis optio quae quas quidem recusandae repellat sapiente suscipit
                    vero! Accusamus distinctio eius eos error, eveniet natus nobis non odit optio pariatur perferendis
                    possimus quasi voluptatum. Animi assumenda at, atque consectetur, cupiditate debitis eos fugit
                    maiores mollitia optio quam repellendus rerum sapiente, tenetur totam veniam voluptates? Aspernatur
                    beatae commodi debitis, delectus dolor dolorem ea eius eligendi fuga labore laborum laudantium
                    molestiae nisi perspiciatis porro quos rem saepe sed sint suscipit ullam unde vero vitae voluptatem
                    voluptatum. Accusamus alias atque consectetur, debitis dicta, doloribus est ex facere fuga ipsa
                    labore laborum, libero mollitia obcaecati odio odit omnis perferendis possimus recusandae unde.
                    Alias amet animi asperiores cupiditate debitis delectus deserunt, distinctio dolorem doloremque
                    doloribus eligendi ex expedita fuga fugit id impedit in iure libero magnam non quam quasi quibusdam
                    repudiandae similique suscipit unde veritatis? Ab aliquid amet animi aperiam aspernatur culpa
                    dolorem, doloremque et eveniet fugiat illo, in inventore ipsa laboriosam, nisi nulla praesentium
                    quasi rem repellat saepe! Distinctio dolorum eum fuga incidunt ipsum unde vero? Hic, minima,
                    voluptatibus. Beatae facilis inventore odio provident, quasi vitae. Accusamus architecto fugit nisi
                    praesentium ratione, sequi tempora velit. Aperiam architecto dolor, itaque iure maiores optio
                    pariatur provident quae sint velit?</p>
            </div>
        </div>
    )
}
import React from "react"
import PostAuthor from "../components/PostAuthor"
import { Link } from "react-router-dom"
import Thumbnail from "../images/blog1.jpg"

const PostDetail = () => {
    return (
        <section className="post-detail">
            <div className="container post-detail__container">
                <div className="post-detail__header">
                    <PostAuthor />
                    <div className="post-detail__buttons">
                        <Link
                            to={`/posts/erwew/edit`}
                            className="btn sm primary"
                        >
                            Edit
                        </Link>
                        <Link
                            to={`/posts/erwew/delete`}
                            className="btn sm danger"
                        >
                            Delete
                        </Link>
                    </div>
                </div>

                <h1>This is the post title!</h1>
                <div className="post-detail__thumbnail">
                    <img src={Thumbnail} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                    debitis pariatur perferendis alias eos. A perferendis
                    provident tempore nemo corporis fuga, inventore nam,
                    voluptas magni omnis ex hic impedit quibusdam. Id nihil rem,
                    dignissimos est adipisci quas? Illum, quas aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam enim eligendi error odio eos dignissimos
                    cupiditate, nesciunt ut aperiam consectetur incidunt impedit
                    eius nam cum maxime assumenda explicabo quaerat commodi,
                    tempore, minus quibusdam distinctio quam ipsa! Natus totam
                    eligendi molestiae quia rerum, provident non laudantium quos
                    quaerat ex, porro eum aperiam vitae, itaque amet temporibus?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio natus sint veritatis, a voluptatibus laudantium
                    expedita nam similique voluptas, velit dicta odio, quasi
                    dolores aut odit? Quo, neque? Iusto, pariatur magni dolor
                    vel voluptas qui, ut tenetur eos saepe, dolores a recusandae
                    quod delectus itaque laborum suscipit cum temporibus
                    necessitatibus rem deleniti vitae. Incidunt id provident non
                    laboriosam! Ipsam iure doloremque magni, recusandae aperiam
                    excepturi hic porro debitis dolores nobis molestiae
                    voluptatibus, quae velit magnam beatae laborum ipsa quisquam
                    architecto libero! Quisquam inventore autem saepe, eligendi
                    iusto magnam rem error aperiam molestias eos dignissimos
                    blanditiis praesentium molestiae magni temporibus nam
                    tempore quas perferendis odio excepturi quo odit!
                    Exercitationem dolorem molestiae provident.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Expedita ratione minima dolor autem quaerat nihil obcaecati,
                    qui repudiandae! Odit, minima!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod qui doloribus consectetur itaque at! Necessitatibus, ut
                    quas consectetur nesciunt ipsam iste exercitationem ratione
                    reprehenderit, enim voluptas illo at maiores libero.
                    Quisquam a dolores, quaerat minus odio, qui corrupti
                    deserunt aperiam provident, vitae dolore corporis expedita.
                    Fuga fugit fugiat corrupti, sit quaerat porro iusto
                    architecto nobis. Cumque aliquam deserunt necessitatibus
                    consequatur repudiandae temporibus voluptatibus ipsa
                    nostrum. Incidunt est laboriosam aperiam debitis optio
                    mollitia, saepe reiciendis libero odit omnis deserunt.
                    Nostrum voluptates molestias iure amet quas molestiae eum
                    animi perspiciatis perferendis, provident saepe inventore
                    repudiandae. Atque ex magnam, voluptates tempore nostrum
                    consequuntur et facere quod, ad, veniam odit quidem soluta.
                    Adipisci odio quas nostrum. Et error dolorum eos quis eius,
                    blanditiis deleniti quas rerum nobis delectus dolore non
                    provident consectetur hic aliquam, tempore cum architecto?
                    Cumque dolores ut impedit nihil, nobis alias sed dolor porro
                    dolorum unde, nemo laudantium? Exercitationem obcaecati quam
                    doloremque quas numquam, possimus labore deleniti voluptate
                    libero laudantium dolorum tenetur error enim eos deserunt
                    ratione. Fugiat dolor id impedit reiciendis nisi, veniam
                    temporibus, laborum aspernatur fugit molestiae similique
                    blanditiis at quia facilis enim, eaque magnam commodi eos
                    asperiores suscipit fuga aut doloribus quis error. Aut
                    voluptatem quis officia laudantium!
                </p>
            </div>
        </section>
    )
}

export default PostDetail

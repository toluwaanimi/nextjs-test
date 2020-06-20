import {useRouter} from "next/router";
import posts from '../post.json';


export default () => {
    const router = useRouter();
    const post = posts[router.query.id]
    if (!post) return <p>Hey</p>
    return (
        <>
            <h1>Blog</h1>
            <p></p>
        </>
    )
}

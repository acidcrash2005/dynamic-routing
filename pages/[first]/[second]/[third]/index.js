import { useRouter } from 'next/router'
import Header from '../../../../components/header'

const Post = () => {
    const router = useRouter()
    const { first, second,  third } = router.query

    return (
        <>
            <Header />
            <h1>Post: {first} {second} {third}</h1>

        </>
    )
}

export default Post

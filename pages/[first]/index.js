import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/header'

const Post = () => {
    const router = useRouter()
    const { first } = router.query

    return (
        <>
            <Header />
            <h1>First: {first}</h1>

        </>
    )
}

export default Post

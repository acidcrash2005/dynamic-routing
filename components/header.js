import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/one">
          <a>one</a>
        </Link>
      </li>
      <li>
        <Link href="/one/two">
          <a>two</a>
        </Link>
      </li>
      <li>
        <Link href="/one/two/three">
          <a>three</a>
        </Link>
      </li>
      <li>
        <Link href="/post/12">
          <a>Post 12</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header

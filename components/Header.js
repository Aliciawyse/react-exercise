// This is the Link API. It will prefecth the page and navigation without a page refresh. This action takes place in the browser without making a request to the server.
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  const homeLinkImg = '/img/home-link.png'
  const searchLinkImg = '/img/search-link.png'

  return (
    <nav>
      <ul className='flex justify-center items-center py-3'>
        <li className='p-3'>
          <Link to="/">
            <img className="shadow-2xl" src={homeLinkImg} alt="home-link-img" />
          </Link>
        </li>
        <li className='p-3'>
          <Link to="/search">
            <img src={searchLinkImg} alt="search-link-img" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
import { useState } from 'react';

const Header = () => {
  const [brandName, setBrandName] = useState('Keshav Kumar');
  const [MenuLinks, setMenuLinks] = useState([
    {
      title: 'Home',
      link: '/Home',
      id: 1,
    },
    {
      title: 'About',
      link: '/About',
      id: 2,
    },
    {
      title: 'Skills',
      link: '/Skills',
      id: 3,
    },
    {
      title: 'Porfolio',
      link: '/Portfolio',
      id: 4,
    },
    {
      title: 'Contact',
      link: '/Contact',
      id: 5,
    },
  ]);
    const [actionButton,SetActionButton] = useState(
        {
            title:"Hire Me",
            link: "/hire-me",
        }
    )
  return (
    <>
      <div className='h-20 border main flex justify-between items-center px-16 bg-gray-100'>
        <div>
          {/*Brand name*/}
          <h1 className='text-1xl '>{brandName}</h1>
        </div>
        <div className='space-x-5'>
          {/*Menu*/}

            {MenuLinks.map((link) => (
            <a  key={link.id} href={link.link} className='hover:text-orange-600'>
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/*Button*/}
          <button href={actionButton.link} className='px-4 py-2 hover:bg-orange-600 bg-orange-300 rounded-full text-1xl'>
            {actionButton.title}
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;

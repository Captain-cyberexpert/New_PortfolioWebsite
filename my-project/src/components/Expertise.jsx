import bannerBackground from '../assets/banner_wallpaper.svg';
const Expertise = () => {
  return (
    <>
      <div className=''>
        <h1 className='my-8 text-4xl font-bold underline text-center'>
          My Expertise
        </h1>
        {/*box Section*/}
        <div
          style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: 'cover',
          }}
          className='box-container  flex py-16'>
          <div className='w-1/2 text-center text-white space-y-4'>
            {/*text-section*/}
            <h1 className='text-4xl text-white font-semibold'>
              I love these technologies
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum non
              illum nihil repellendus voluptate ipsam nesciunt error. Facilis,
            </p>
            <button className='mt-4 py-2 px-4 bg-orange-500 rounded-full shadow-lg text-1xl'>
              Hire Me
            </button>
          </div>
          {/*skills-section*/}
          <div className='flex justify-center h-full space-x-2 space-y-3 ml-5'>
            <div className='flex m-2 p-3 space-x-4 flex-wrap mt-2 w-2/3'>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>CSS</p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>HTML</p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>
                Javascript
              </p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>
                Tailwind Framwork
              </p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>
                Reactjs
              </p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>SQL</p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>Nextjs</p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>
                State Managment
              </p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>Linux</p>
              <p className='bg-gray-300 w-fit px-3 py-3 mt-1 rounded-full'>
                Google-cloud
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Expertise;

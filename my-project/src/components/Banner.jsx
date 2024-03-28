import bannerImage from '../assets/image.jpg';
import bannerBackground from '../assets/banner_wallpaper.svg';
const Banner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bannerBackground})`,
          backgroundSize: 'cover',
        }}
        className='main-container flex items-center'>
        {/*First dabba*/}
        <div className='h-fit w-fit items-center flex justify-center text-white'>
          {/*text*/}
          <div className='w-2/3 space-y-2  ms-10'>
            <h3 className='text-3xl font-semibold'>Hi, I am</h3>
            <h1 className='text-5xl font-bold'>Keshav Kumar</h1>
            <p className='w-1/2'>
              I am a frontend developer passionate about creating visually
              appealing and user-friendly interfaces. With a keen eye for design
              and a deep understanding of web technologies such as HTML, CSS,
              and JavaScript, I strive to build responsive and interactive
              websites that captivate users and drive engagement
            </p>
            <button className='bg-orange-300 hover:bg-orange-600 rounded-full p-2 ' ><a href="www.linkedin.com/in/keshav-k-069994131/"a target="_blank">
              Contact Me
              </a>
            </button>
          </div>
          {/*Second dabba*/}
          <div className=' flex justify-center px-1 py-5'>
            {/*image*/}
            <img
              className='rounded-full shadow-lg h-fit w-1/2 px-5'
              src={bannerImage}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;

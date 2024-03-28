import { useState } from 'react';
import bannerImage from '/new_portfolio/my-project/src/assets/output.jpg';
const About = () => {
  const[data, setData]= useState({
    image:bannerImage,
    title:"Java developer and node developer",
    dsc1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus omnis magni quis ut quod harum ipsum facilis dolorem sunt amet?",
    dsc2:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium accusamus, qui laudantium non vero, animi quasi
    voluptate sed molestias sint magni excepturi illum deleniti! Sed
    quidem iure deserunt corrupti eos!`,
    actionButton:{
      title:`Read More..`,
      link:`/remote`,
    }
  });
  return (
    <>
      <div className='bg-gray-50 main-container border py-16'>
        <h1 className='text-center pb-16 text-4xl underline font-bold'>
          About Me
        </h1>
        <div className='flex py-5 px-5 ms-4 items-center  justify-center '>
          {/*Image conatiner*/}
          <div className='w-1/4 h-fit flex mr-10  ms-3 pl-10'>
            <img className='rounded-full' src={data.image} alt='' />
          </div>
          <div className='space-y-5 justify-end ml-10  w-1/2 m-6'>
            {/*text conatiner*/}
            <div className='w- ms-auto'>
              <h1 className='text-3xl font-semibold'>
                {data.title}
              </h1>
              <p>
                {data.dsc1}
              </p>
              <p>
                {data.dsc2}
              </p>
              <button className='bg-orange-500 px-3 py-2 text-1xl mt-4 rounded-full shadow-lg'>
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;

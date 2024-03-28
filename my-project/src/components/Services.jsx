const Services = () => {
  return (
    <>
      <div className='main-container py-12 '>
        <h1 className='text-3xl font-bold text-center underline'>
          My Services
        </h1>
        <div className='service-conatiner space-x-3 px-10 flex mt-12 '>
          <div className='justify-center bg-slate-200 p-5 text-center shadow-lg rounded-xl service1  space-y-4'>
          <i class="fa-solid fa-code text-2xl pr-2"></i>
            <h1 className='text-4xl'>Front-End Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              corrupti quia nulla quasi necessitatibus suscipit officiis
              repellat officia quas distinctio.
            </p>
            <button className='px-3 bg-orange-500 rounded-full shadow-lg'>
              Check
            </button>
          </div>
          <div className='justify-center space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl'>
          <i class="fa-solid fa-terminal text-2xl"></i>
            <h1 className='text-4xl'>Networking</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              corrupti quia nulla quasi necessitatibus suscipit officiis
              repellat officia quas distinctio.
            </p>
            <button className='px-3 bg-orange-500 rounded-full shadow-lg'>
              Check
            </button>
          </div>
          <div className=' justify-center space-y-3 bg-slate-200 p-5 text-center shadow-lg rounded-xl'>
          <i class="fa-solid fa-server text-2xl"></i>
            <h1 className='text-4xl'>Back-End Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              corrupti quia nulla quasi necessitatibus suscipit officiis
              repellat officia quas distinctio.
            </p>
            <button className='px-3 bg-orange-500 rounded-full shadow-lg'>
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;

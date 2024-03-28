const Fotter = () => {
  return (
    <>
      <div className='py-5 bg-gray-100 flex justify-between px-40'>
        <div className=''>
          <p>
            @2023 Keshav Kumar <span>All Rights Reserved</span>
          </p>
        </div>
        <div className='flex justify-between space-x-5'>
          <a href='/about hover'className="hover:underline">About</a>
          <a href='/Privacy hover'className="hover:underline">Privacy</a>
          <a href='/Policy hover'className="hover:underline">Policy</a>
          <a href='/Licensing hover'className="hover:underline">Licensing</a>
          <a href='/Contact hover'className="hover:underline">Contact</a>
        </div>
      </div>
    </>
  );
};
export default Fotter;

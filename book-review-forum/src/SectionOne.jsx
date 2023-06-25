export default function SectionOne() {
    return (
      <>
        <div className='flex md:pl-96 md:pb-56 sm:pl-40 sm:pb-32 pt-16 bg-type-of-red'>
          <div className="text-justify">
            <h1 className="md:text-8xl font-serif text-gray-50 sm:text-6xl">12 New <br /> Books To <br /> Watch For</h1>
          </div>
          <div className="grid mx-auto md:pt-14 sm:pt-10 text-center">
            <ul>
              <li className="md:text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 md:pb-10 sm:pb-4">
                New
              </li>
  
              <li className="md:text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 md:pb-10 sm:pb-4">
                Genre
              </li>
  
              <li className="md:text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 md:pb-10 sm:pb-4">
                Discover
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
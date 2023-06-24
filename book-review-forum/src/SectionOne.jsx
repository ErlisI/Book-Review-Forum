export default function SectionOne() {
    return (
      <>
        <div className='flex pl-96 pt-16 pb-60 bg-type-of-red'>
          <div className="text-justify">
            <h1 className="text-8xl font-serif text-gray-50">12 New <br /> Books To <br /> Watch For</h1>
          </div>
          <div className="grid mx-auto pt-14 text-center">
            <ul>
              <li className="text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 pb-10">
                New
              </li>
  
              <li className="text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 pb-10">
                Genre
              </li>
  
              <li className="text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 pb-10">
                Discover
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
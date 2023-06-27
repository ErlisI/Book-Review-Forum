export default function SectionOne() {
  return (
    <>
      <div className='flex md:pl-96 md:pb-56 sm:pl-40 sm:pb-32 pt-16 bg-type-of-red'>
        <div className="text-justify">
          <h1 className="md:text-8xl font-serif text-gray-50 sm:text-6xl">12 New <br /> Books To <br /> Watch For</h1>
        </div>
        <div className="grid mx-auto md:pt-14 sm:pt-10 text-center">
          <ul>
            <div className="flex flex-wrap">
              <div className="md:h-8 sm:h-6 w-1 bg-gray-50 invisible"></div>
              <li className="md:text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 md:pb-10 sm:pb-4 md:ml-5 sm:ml-3">
                New
              </li>
            </div>

            <div className="flex flex-wrap">
              <div className="md:h-8 sm:h-6 w-1 bg-gray-50 invisible"></div>
              <li className="md:text-2xl text-slate-300 hover:text-gray-50 hover:-translate-y-1 hover:scale-110 duration-300 md:pb-10 sm:pb-4 md:ml-5 sm:ml-3">
                Genre
              </li>
            </div>

            <div className="flex flex-wrap" aria-current="topic">
              <div className="md:h-8 sm:h-6 w-1 bg-gray-50"></div>
              <li className="md:text-2xl text-gray-50 scale-110 duration-300 md:pb-10 sm:pb-4 md:ml-5 sm:ml-3">
                Discover
              </li>
            </div>

          </ul>
        </div>
      </div>
    </>
  );
}
export default function NavBar() {
  return (
    <>
      <nav className="bg-type-of-red p-2">
        <div className="flex flex-wrap items-center p-4">

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-50 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only"></span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>

          <div className="flex flex-wrap justify-left items-center p-4">
            <a href="index.html" className="flex items-center">
              <img src="/src/assets/icons8-logo-50.png" className="h-8 mr-3" alt="Flowbite Logo" />
            </a>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Read</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-slate-300 hover:text-gray-50">Review</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-slate-300 hover:text-gray-50">Saved</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ml-auto w-1/4">
              <div className="flex">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-gray-50 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-50 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-50 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none"
                  aria-label="Search"
                  aria-describedby="button-addon3" />

                <button
                  className="text-gray-50 relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  type="button"
                  id="button-addon3"
                  data-te-ripple-init>
                  Search
                </button>
              </div>
          </div>

          <div className="ml-auto flex flex-wrap justify-end items-center p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-twitter"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}
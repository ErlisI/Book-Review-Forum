export default function NavBar() {
  return (
    <>
      <nav className="bg-type-of-red p-2">
        <div className="flex flex-wrap items-center p-4">

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="flex flex-wrap justify-left items-center p-4">
            <a href="https://www.google.com" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Search</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Read</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Review</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Saved</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="ml-auto flex flex-wrap justify-end items-center p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-github"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-twitch"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="">
                    <ion-icon size="large" name="logo-youtube"></ion-icon>
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
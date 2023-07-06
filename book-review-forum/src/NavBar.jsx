import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import books from './books';

export default function NavBar() {

  return (
    <>
      <nav className="bg-type-of-red p-2">
        <div className="flex flex-wrap items-center p-4">

          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-50 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only"></span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>

          <div className="flex flex-wrap justify-left items-center p-4">
            <Link to={`/`} className="flex items-center">
              <img src="/src/assets/icons8-logo-50.png" className="h-8 mr-3" alt="Logo" />
            </Link>

            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <Link to={`/`} className="block py-2 pl-3 pr-4 text-gray-50" aria-current="page">Home</Link>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-slate-300 hover:text-gray-50">Reviews</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 text-slate-300 hover:text-gray-50">Saved</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Search Bar */}
          <SearchBar data={books} />

          {/* Icons */}
          <div className="ml-auto flex flex-wrap justify-end items-center p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <ion-icon size="large" name="logo-instagram"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <ion-icon size="large" name="logo-facebook"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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
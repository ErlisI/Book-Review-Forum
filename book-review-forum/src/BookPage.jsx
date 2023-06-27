import NavBar from "./NavBar";
import Footer from "./Footer";

export default function BookPage() {

  // const handleReview

  return (
    <>
      <NavBar />
      <div className="bg-type-of-purple pt-32 pb-20">
        <div className="flex mb-40">
          <div className="flex row">

            <div className="p-14 text-center">
              <h2 className='text-2xl text-slate-400'>Genre</h2>
              <p className="text-gray-50 text-sm">Random</p>
              <p className="text-gray-50 text-sm">Random</p>
            </div>

            <div className="p-14 text-center">
              <h2 className='text-2xl text-slate-400 mt-20'>Publisher</h2>
              <p className="text-gray-50 text-sm">Random</p>
              <p className="text-gray-50 text-sm">Random</p>
            </div>
          </div>
          <img className='h-full mx-auto' src="https://m.media-amazon.com/images/I/51gJpbOQpHL.jpg" alt="Atomic Habits - Book" /> {/* Access image properties */}
        </div>

        <div className="flex flex-row">
          <div className="text-center pl-5">
            <h2 className='text-3xl text-gray-50'>James Clear</h2> {/* Access Author */}
            <h1 className='text-6xl text-type-of-red'>Atomic Habits</h1> {/* Access title */}

            <button className="mt-4 bg-transparent text-gray-50 font-semibold py-2 px-4 border hover:bg-gray-50 hover:text-type-of-red border-gray-50 rounded">
              Write A Review
            </button>
          </div>

          <div className='w-4/12 mx-auto text-justify text-gray-50'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, quam fuga amet non dignissimos natus dolor in corporis sed distinctio tenetur reprehenderit,
              sapiente alias rem eum est corrupti necessitatibus beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, quam fuga amet non dignissimos natus dolor in corporis sed distinctio tenetur reprehenderit,
              sapiente alias rem eum est corrupti necessitatibus beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, quam fuga amet non dignissimos natus dolor in corporis sed distinctio tenetur reprehenderit,
              sapiente alias rem eum est corrupti necessitatibus beatae.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ab, quam fuga amet non dignissimos natus dolor in corporis sed distinctio tenetur reprehenderit,
              sapiente alias rem eum est corrupti necessitatibus beatae.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:px-6 pt-5">
        <section className="text-center">
          <div className="mx-auto max-w-[700px] md:px-3">
            <h2 className="mb-3 text-3xl font-bold">Review The Book</h2>

            <div className="flex justify-center mb-8">
              <svg aria-hidden="true" className="w-5 h-5 text-black-50 peer peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-black-50 peer peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-black-50 peer peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-black-50 peer peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg aria-hidden="true" className="w-5 h-5 text-black-50 peer peer-hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>


            <form>
              <div className="relative mb-6 border border-gray-700 rounded-lg" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90"
                  placeholder="Name" />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-500"
                  htmlFor="exampleInput90"
                >Full Name
                </label>
              </div>
              <div className="relative mb-6 border border-gray-700 rounded-lg" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91"
                  placeholder="Email address" />
                <label
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                  htmlFor="exampleInput91"
                >Email address
                </label>
              </div>
              <div className="relative mb-6 border border-gray-700 rounded-lg" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"></textarea>
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500"
                >Message</label
                >
              </div>
              <button
                type="button"
                data-te-ripple-init
                className="mb-6 inline-block w-1/5 border border-gray-700 rounded-lg px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                Send
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />

    </>
  );
}
import { useState } from "react";
import PropTypes from 'prop-types';
import BookPage from "./BookPage";

export default function SearchBar({ data }) {

    const [bookInfo, setBookInfo] = useState([]);
    const [isTrue, setTrue] = useState(false);

    const handleBookPage = () => {
        setBookInfo(data);
        setTrue(true);
    }

    const [filtrData, setFltrData] = useState([]);
    const [wordInput, setWordInput] = useState("");

    //filters the data so it only shows what we are searching for on the search bar
    const handleFilter = (event) => {
        const searchBook = event.target.value;
        setWordInput(searchBook);

        const titleFiltr = data.filter((book) => {
            const searchWords = searchBook.toLowerCase().split(' ');
            return searchWords.every((word) => book.title.toLowerCase().includes(word));
        });

        const authFiltr = data.filter((book) => {
            const searchWords = searchBook.toLowerCase().split(' ');
            return searchWords.every((word) => book.author.toLowerCase().includes(word));
        });

        const genFiltr = data.filter((book) => {
            const searchWords = searchBook.toLowerCase().split(' ');
            return searchWords.every((word) => book.genre.toLowerCase().includes(word));
        });

        if (searchBook === "") {
            setFltrData([]);
        } else {
            const filteredData = [...titleFiltr, ...authFiltr, ...genFiltr];
            setFltrData(filteredData);
        }
    }

    //clears the input on the search bar
    const clearData = () => {
        setFltrData([]);
        setWordInput("");
    }

    return (
        <>
            <div className="ml-auto w-1/4 relative">
                <div className="relative flex pb-0.5">
                    <input
                        type="text"
                        className="-mr-0.5 block w-[1px] min-w-0 flex-auto rounded-lg border border-solid border-gray-50 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-gray-50 outline-none transition duration-300 ease-in-out focus:z-[3] focus:border-primary focus:text-gray-50 focus:outline-none"
                        aria-label="Search"
                        value={wordInput}
                        onChange={handleFilter}
                        aria-describedby="button-addon3"
                    />

                    {filtrData.length === 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#FEF9EF"
                            className="absolute top-0 right-0 mt-1 w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#FEF9EF"
                            className="absolute z-10 top-0 right-0 mt-1 w-6 h-6 cursor-pointer hover:cursor-pointer"
                            onClick={clearData}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    )}
                </div>

                {filtrData.length !== 0 && (
                    <div className="dataResult text-justify grid rounded-lg overflow-hidden overflow-y-scroll absolute left-0 right-0  text-gray-800 bg-[#FEF9EF]">
                        {filtrData.slice(0.15).map((book, i) => {
                            return (
                                <a className="dataItem text-lg hover:bg-gray-300 p-1" onClick={handleBookPage} key={i}>
                                    <p>{book.title}</p>
                                    <p className="text-xs">{book.author} - {book.genre}</p>
                                </a>
                            );
                        })}
                    </div>
                )}

                {
                    isTrue ? (
                        <BookPage book={bookInfo} />
                    ) : (
                        null
                    )
                }
            </div>
        </>
    );
}

SearchBar.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};
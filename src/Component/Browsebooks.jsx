import { useEffect, useState } from "react";
import Filterbook from "./Filterbook";
import Nav2 from "./Nav2";
import Nav3 from "./Nav3";

// This show as Browse Book Section

function Browserbooks() {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);
  const [updatecategory, setUpdatecategory] = useState("fiction");
  const [bookName, setBookName] = useState("");

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${updatecategory}&maxResults=20&key=AIzaSyAMS-SrJjZMY1hDLBO9NRorQHBlmYjxuUQ`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("this is data output", data);
        setBooks(data.items);
        setAllBooks(data.items);
      });
  }, [updatecategory]);

  // This function change the value in fetch data
  function valueimport(name) {
    setUpdatecategory(name);
    console.log("THis is from books", name);
  }

  function Textenter(e) {
    setBookName(e.target.value);
    // console.log("this is book name", bookName);
  }

  function Clicked() {
    const filtered = allBooks.filter(
      (book) =>
        book.volumeInfo.title?.toLowerCase().includes(bookName.toLowerCase()) ||
        book.volumeInfo.authors?.[0]
          .toLowerCase()
          .includes(bookName.toLowerCase())
    );
    setBooks(filtered);
    // console.log(books);
  }
  return (
    <>
      <Nav2 details={valueimport} />
      {/* Search Input */}
      <div>
        <div className="flex justify-center mt-10">
          <input
            type="text"
            placeholder=" Search..."
            className="p-3 pl-5 border border-blue-200 w-full max-w-md  rounded-l-full"
            onChange={Textenter}
          ></input>
          <button
            className="bg-amber-200 w-15 rounded-r-full pl-3 hover:bg-amber-400 hover:cursor-pointer "
            onClick={Clicked}
          >
            <img
              src="Images\magnifying-glass-solid.svg"
              className="h-8 w-8 "
            ></img>
          </button>
        </div>
      </div>
      {/* Search Input End*/}
      <div className="flex flex-wrap justify-center mx-auto m-10">
        {books.length === 0 ? (
          <p className="text-center text-red-600 text-xl">📕 No books found!</p>
        ) : (
          books.map((book) => <Filterbook key={book.id} details={book} />)
        )}
      </div>
    </>
  );
}
export default Browserbooks;

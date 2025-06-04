import { Link } from "react-router-dom";

// This is to show books in Popular book

function PopularBooks(props) {
  console.log("id found ", props.details.id);
  return (
    <>
      <h1 className="text-4xl font-bold">Popular Books</h1>
      <div className="flex flex-wrap w-3/4 mx-auto m-10 space-x-2">
        {props.details
          .filter((_, index) => index !== 1)
          .map((book, index) => (
            <div
              key={index}
              className=" space-x-2 size-95 m-2 border border-black/10 rounded-3xl bg-blue-50 h-130"
            >
              <img
                src={book.volumeInfo.imageLinks?.smallThumbnail}
                className="w-50 h-60 ml-20 mt-3 mb-5"
              ></img>
              <div className="pl-10 pt-4 text-xl space-y-2">
                <h2>
                  <strong>Title:</strong> {book.volumeInfo.title.slice(0, 20)}
                </h2>
                <h3>
                  <strong>Author:</strong> {book.volumeInfo.authors?.[0]}
                </h3>
                <p className="pt-2">
                  <strong> Description:</strong>

                  {book.volumeInfo.description.slice(0, 65) + "..."}
                </p>
                <Link to={`/viewdetail/${book.id}`}>
                  <h2 className="text-blue-800  font-medium mt-8 hover:cursor-pointer hover:text-red-600">
                    View Deails...
                  </h2>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default PopularBooks;

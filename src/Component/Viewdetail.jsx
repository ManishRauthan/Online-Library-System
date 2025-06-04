import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// This is used to display Deatil section of book

function Viewdetail() {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
        console.log(data);
      });
  }, [id]);

  if (!book) {
    return <div>Loading book details...</div>;
  }

  const info = book.volumeInfo;

  return (
    <>
      {/* <Link to="/browsebook">
        <button className=" absolute bg-amber-200 m-10 w-20 h-12 text-xl font-medium border rounded-xl  hover:bg-blue-500 hover:text-white  ">
          BACK
        </button>
      </Link> */}

      <div className="p-10 max-w-3xl mx-auto m-10 border rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{info.title}</h1>
        <div className="flex justify-self-auto">
          <div>
            <img
              src={info.imageLinks?.thumbnail}
              className="mb-4 h-50 w-auto"
            />
          </div>

          <div className="mt-12 mx-10">
            <h2>
              <strong> Rating: </strong>
              {book.volumeInfo.averageRating
                ? book.volumeInfo.averageRating
                : "Not available"}
            </h2>
            <p>
              <strong>Author:</strong> {info.authors?.join(", ")}
            </p>
            <p className="mt-2">
              <strong>Publisher:</strong> {info.publisher}
            </p>
            <p className="mt-2">
              <strong>Published Date:</strong> {info.publishedDate}
            </p>
          </div>
        </div>
        <p className="mt-2">
          <strong>Description:</strong>
          {info.description
            ? info.description.replace(/<[^>]+>/g, "")
            : "No description available."}
        </p>
      </div>
    </>
  );
}

export default Viewdetail;

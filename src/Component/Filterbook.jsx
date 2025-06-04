import { Link } from "react-router-dom";

// This to show books in Browse Books

function Filterbook(props) {
  return (
    <>
      <div className=" m-5 rounded-xl bg-blue-200 hover:bg-blue-600 transform hover:scale-110 transition duration-300 ease-in-out ">
        <div className=" space-x-2 size-95 m-2 border border-black/10 rounded-3xl bg-blue-50 h-120">
          <img
            src={props.details.volumeInfo.imageLinks?.smallThumbnail}
            className="w-50 h-60 ml-20 mt-3 mb-5 "
          ></img>
          <div className="pl-10 pt-2 text-xl space-y-2 ">
            <h1>
              <strong>Title:</strong>
              {props.details.volumeInfo.title.slice(0, 25)}
            </h1>
            <strong>Author:</strong>
            {props.details.volumeInfo.authors
              ? props.details.volumeInfo.authors?.[0]
              : "No Details"}
            <p>
              <strong>Description:</strong>
              {props.details.volumeInfo.description
                ? props.details.volumeInfo.description.slice(0, 65) + "..."
                : "No Description"}
            </p>
            <Link to={`/viewdetail/${props.details.id}`}>
              <h2 className="text-blue-800  font-medium mt-5 hover:cursor-pointer hover:text-red-600">
                View Deails...
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Filterbook;

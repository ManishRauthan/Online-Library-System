import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="flex justify-between text-xl font-medium border border-black/40 h-25">
        <div>
          <img
            src="Images\c9615b066d9baa5342ea4cc5312b4af7.png"
            className="w-40 h-28"
          ></img>
        </div>
        <ul className="flex m-10 space-x-15 cursor-pointer ">
          <Link to="/" className="hover:text-blue-800  hover:scale-115">
            <li>Home</li>
          </Link>
          <Link
            to="/browsebook"
            className="hover:text-blue-800  hover:scale-115"
          >
            <li>Browse Books</li>
          </Link>
          <li className="hover:text-blue-800  hover:scale-115">Add Books</li>
        </ul>
        <div className=" m-10">
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}

export default Nav;

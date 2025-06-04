import { useEffect, useState } from "react";
import PopularBooks from "./PopularBooks";
import Banner from "./Banner";

function Body() {
  const [popularbooks, setPopularbooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=web development&key=AIzaSyAMS-SrJjZMY1hDLBO9NRorQHBlmYjxuUQ"
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularbooks(data.items);
        console.log(data);
      });
  }, []);

  return (
    <>
      <Banner />
      <div className="mt-20 ml-10">
        <PopularBooks details={popularbooks} />
      </div>
    </>
  );
}
export default Body;

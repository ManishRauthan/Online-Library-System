import { useState } from "react";

function Nav2(props) {
  const categoryList = [
    "TECHNOLOGY",
    "ROMANCE",
    "FICTION",
    "SCIENCE",
    "HISTORY",
    "BUSINESS",
  ];

  const [updatecolor,setUpdatecolor] = useState()
  
  // this function updates the value in BrowseBooks
  function categoryhandle(category) {
    const updater = category.toLowerCase();
    console.log(category.toLowerCase());
    props.details(updater);
  }

  return (
    <>
      <div className="flex justify-between p-8 border border-black/30">
        <div className="font-medium text-xl">
          <h2>ALL CATEGORIES</h2>
        </div>
        <div>
          {/* Looping the LI items */}
          <ul className="flex space-x-10  text-l font-medium">
            {categoryList.map((category) => (
              <li
                onClick={() => categoryhandle(category)}
                className="cursor-pointer hover:text-blue-500"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex space-x-15">
          <img src="Images\heart-regular.svg" className="h-7 w-7 "></img>
          <img src="Images\cart-shopping-solid.svg" className="h-7 w-7"></img>
        </div>
      </div>
    </>
  );
}
export default Nav2;

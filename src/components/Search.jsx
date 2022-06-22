import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/poi")
      .then((res) => setSearchResults(res.data));
    console.log(searchItems);
  }, [searchItems]);
  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    // const searchKeyWord = e.target.search.value;
    // setSearchResults(searchKeyWord);
  };

  return (
    <div className="mt-10">
      <form onSubmit={searchHandler}>
        <div className="w-full flex justify-center items-center">
          <input
            type="text"
            placeholder="Search Location"
            name="search"
            className="input input-bordered input-info lg:w-96 md:w-96 w-72"
            value={searchItems}
            onChange={(e) => {
              setSearchItems(e.target.value);
              // console.log(searchItems);
            }}
          />

          <input
            type="submit"
            className="btn btn-secondary mx-2"
            value="Search"
            onChange={searchHandler}
          />
        </div>
        {searchItems.length !== 0 && (
          <div className="w-96 mx-auto">
            {searchResults
              .filter((value) => {
                if (searchItems === "") {
                  return value;
                } else if (
                  value.name
                    .toLowerCase()
                    .includes(searchItems.toLocaleLowerCase())
                ) {
                  return value.name;
                }
              })
              .map((searchResult) => {
                return (
                  <div key={searchResult.poi_id}>
                    <p
                      className="hover:bg-secondary hover:text-base-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setSearchItems(searchResult.name);
                        setSelected(true);
                      }}
                    >
                      {!selected && searchResult.name}
                    </p>
                  </div>
                );
              })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;

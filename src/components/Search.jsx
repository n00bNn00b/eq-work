import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/poi")
      .then((res) => setSearchResults(res.data));
  }, []);
  const searchHandler = (e) => {
    e.preventDefault();
    const searchKeyWord = e.target.search.value;
  };
  return (
    <div className="mt-10">
      <form
        onSubmit={searchHandler}
        className="w-full flex justify-center items-center"
      >
        <input
          type="text"
          placeholder="Search Location"
          name="search"
          className="input input-bordered input-info lg:w-96 md:w-96 w-72"
        />

        <input
          type="submit"
          className="btn btn-secondary mx-2"
          value="Search"
        />
      </form>
      {searchResults.map((searchedValue) => {
        return (
          <div key={searchedValue.poi_id}>
            <p className="flex justify-center items-center p-2">
              {searchedValue.name}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;

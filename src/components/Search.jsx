import React from "react";

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
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
    </div>
  );
};

export default Search;

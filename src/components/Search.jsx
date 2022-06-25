import axios from "axios";
import React, { useEffect, useState } from "react";
import GeoMap from "./GeoMap";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [selected, setSelected] = useState(false);
  const [map, setMap] = useState(false);
  const [place, setPlace] = useState("");

  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/poi")
      .then((res) => setSearchResults(res.data));
    // console.log(searchItems);
  }, [searchItems]);

  let [position, setPostion] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    console.log(searchValue);
    searchResults.map((val) => {
      console.log(val);

      if (searchValue === val.name) {
        // console.log("lon:", val.lon, "lat:", val.lat);
        let pos = [];

        if (pos === null) {
          console.log("map error!");
        } else {
          pos.push(val.lat, val.lon);
          setPostion(pos);
          setPlace(val.name);
          setMap(true);
        }
      } else if (searchValue === "" || searchValue === null) {
        console.log("error");
      }
      e.target.reset();
    });
  };
  // console.log("place:", place);
  // console.log("position:", position);
  return (
    <div>
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
            <div className="w-full mx-auto">
              {searchResults
                .filter((value) => {
                  if (searchItems === "") {
                    return value;
                  } else if (
                    value.name
                      .toLowerCase()
                      .includes(searchItems.toLocaleLowerCase())
                  ) {
                    return value;
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
      <div className="mt-20">
        {map && <GeoMap place={place} position={position} />}
      </div>
    </div>
  );
};

export default Search;

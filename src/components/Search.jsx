import axios from "axios";
import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import GeoMap from "./GeoMap";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchItems, setSearchItems] = useState("");
  const [selected, setSelected] = useState(false);
  const [map, setMap] = useState(false);
  const [place, setPlace] = useState("");
  let [position, setPostion] = useState([]);

  useEffect(() => {
    axios
      .get("https://eq-works-task.glitch.me/poi")
      .then((res) => setSearchResults(res.data));
    // console.log(searchItems);
  }, [searchItems]);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    // console.log(searchValue);
    searchResults.map((val) => {
      console.log(val);
      let pos = [];

      if (searchValue === val.name) {
        // console.log("lon:", val.lon, "lat:", val.lat);
        pos.push(val.lat, val.lon);
        setPostion(pos);
        setPlace(val.name);
        setMap(true);
      } else if (searchValue === "" || searchValue === null) {
        // console.log("error");
        setMap(false);
      }
      e.target.reset();
      return position;
    });
  };

  return (
    <div className="mt-20">
      <div className="mt-10">
        <form onSubmit={searchHandler}>
          <div className="flex justify-center">
            <div>
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

              {searchItems.length !== 0 &&
                searchResults
                  .filter((value) => {
                    // if (searchItems === value.name) {
                    //   console.log("value:", value);
                    //   return value.name;
                    // } else if (
                    //   value.name
                    //     .toLowerCase()
                    //     .includes(searchItems.toLowerCase())
                    // ) {
                    //   console.log("match", value);
                    //   return value;
                    // } else {
                    //   // console.log("else:", value);
                    // }
                    // return map;
                    // console.log("test:", value);
                    const name = value.name;
                    // console.log("name", name);
                    // console.log("search:", searchItems);
                    if (
                      name.toLowerCase().includes(searchItems.toLowerCase())
                    ) {
                      console.log("matched:", value);
                      return value;
                    } else if (searchItems === "") {
                      return 0;
                    }
                    return 0;
                  })
                  .map((searchResult) => {
                    return (
                      <div key={searchResult.poi_id}>
                        {!selected && (
                          <p
                            className="p-2 m-1 hover:bg-secondary hover:text-base-100"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSearchItems(searchResult.name);
                              setSelected(true);
                            }}
                          >
                            {!selected && searchResult.name}
                          </p>
                        )}
                      </div>
                    );
                  })}
            </div>

            <input
              type="submit"
              className="btn btn-secondary mx-2"
              value="Search"
              onChange={searchHandler}
            />
          </div>
        </form>
      </div>
      <div className="mt-20">
        {map && <GeoMap place={place} position={position} />}
      </div>
    </div>
  );
};

export default Search;

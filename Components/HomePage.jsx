import React, { useEffect, useState } from "react";
import "./HomePaage.css";
import Recepie from "./Recepie";

const HomePage = () => {
  const APP_ID = "79810771";
  const APP_KEY = "f6dcf8238aed335936ada301c8f3b370";

  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getrecepies = async () => {
        const response = await fetch(
          `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecepies(data.hits);
      };
    getrecepies();
  }, [query]);



  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };


  if(recepies.length <= 0 ) {
    return   <h2 className="loading">Loading ....</h2>
}
 
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recepies">
        {recepies.map((recepie) => (
          <Recepie
            key={recepie.recipe.label}
            title={recepie.recipe.label}
            calories={recepie.recipe.calories}
            image={recepie.recipe.image}
            ingredients={recepie.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;

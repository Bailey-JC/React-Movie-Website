import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./Landing.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Landing() {
  let navigate = useNavigate();
  const { value } = useParams();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState();
  const [searchValue, setSearchValue] = useState([]);

  function onSearch() {
    getPrograms(searchValue);
    console.log(searchValue);
  }

  async function getPrograms(searchValue) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=d25f08a2&s=${searchValue}`
    );
    setPrograms(data.Search);
  }

  function onSearchKeyPress(key) {
    if (key === "Enter") {
      onSearch();
    }
  }

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <div className="header__description">
            <h1 className="header__info--main">
              Australia's leading online streaming service platform
            </h1>
            <h2 className="header__info--secondary">
              Explore our wide range of movies & series now
            </h2>
          </div>
          <div className="search-bar__container">
            <input
              className="search-bar"
              type="text"
              placeholder="Movies & TV Shows"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onKeyPress={(event) => onSearchKeyPress(event.key)}
            />
            <button className="search-bar__btn">
              <FontAwesomeIcon
                className="search-bar__icon"
                icon="fa-solid fa-magnifying-glass"
                onKeyPress={(event) => onSearchKeyPress(event.key)}
                onClick={(() => onSearch(), () => navigate("/programs"))}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;

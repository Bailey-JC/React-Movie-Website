import React, { useState, useEffect } from "react";
import "./Programs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProgramsCard from "../../components/Ui/ProgramsCard/ProgramsCard";
import NoImg from "../../assets/no_img.png";

function Programs() {
  const { value } = useParams();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState();
  const [searchValue, setSearchValue] = useState([]);

  function onSearch() {
    getPrograms(searchValue);
  }

  async function getPrograms(searchValue) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=d25f08a2&s=${searchValue}`
    );
    setPrograms(data.Search);
    setLoading(false);
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
    <div id="programs__body">
      <div className="container">
        <div className="row">
          <div className="programs__search--container">
            <div className="search-bar__container">
              <input
                className="search-bar"
                type="text"
                onChange={(event) => setSearchValue(event.target.value)}
                onKeyPress={(event) => onSearchKeyPress(event.key)}
                placeholder="Movies & TV Shows"
              />
              <button className="search-bar__btn" onClick={() => onSearch()}>
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  className="search-bar__icon"
                />
              </button>
            </div>
          </div>
          <div className="programs__header">
            <div className="programs__search-result">
              Showing results for <span className="blue">"{searchValue}"</span>
            </div>
            <div className="programs__filter">
              <select id="filter" defaultValue="DEFAULT">
                <option value="DEFAULT" disabled>
                  Sort
                </option>
                <option value="RATING">Rating</option>
                <option value="NEWEST">Newest</option>
                <option value="OLDEST">Oldest</option>
              </select>
            </div>
          </div>
          <div className="programs">
            {loading
              ? new Array(6).fill(0).map((_, program) => (
                  <div className="programsCard__container">
                    <div className="programsCard__poster">
                      <div className="programsCard__poster--skeleton"></div>
                    </div>
                    <div className="programsCard__info">
                      <div className="programsCard__title">
                        <div className="programsCard__title--skeleton"></div>
                      </div>
                      <div className="programsCard__year">
                        <div className="programsCard__year--skeleton"></div>
                      </div>
                    </div>
                  </div>
                ))
              : programs.slice(0, 6).map((program) => (
                  <div className="programsCard__container" key={program.imdbID}>
                    <Link to={`/programs/${program.imdbID}`}>
                      <img
                        className="programsCard__poster"
                        src={program.Poster}
                        alt=""
                      />
                    </Link>
                    <div className="programsCard__info">
                      <Link>
                        <div className="programsCard__title">
                          {program.Title}
                        </div>
                        <div className="programsCard__year">{program.Year}</div>
                      </Link>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProgramInfo.css";

function ProgramInfo() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function getPrograms() {
      const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=d25f08a2&i=tt11252248`
      );
      setPrograms(data);
      console.log(data);
    }
    getPrograms();
  }, []);

  return (
    <div id="program__info">
        <div className="container">
          <div className="row">
            <div className="program__selected--top">
              <Link to="/programs" className="program__link">
                <FontAwesomeIcon
                  icon="fa-solid fa-angle-left"
                  className="return__btn"
                />
              </Link>
            </div>
            <div className="program__selected" key={programs.imdbID}>
              <figure className="program__selected--figure">
                <img
                  src={programs.Poster}
                  alt=""
                />
              </figure>
              <div className="program__selected--description">
                <h2 className="program__selected--title">{programs.Title}</h2>
                <div className="program__details--top">
                  <div className="program__detail">
                    <FontAwesomeIcon
                      className="program__detail--icon"
                      icon="fa-solid fa-calendar"
                    />
                    {programs.Year}
                  </div>
                  <span className="program__detail--spacer">|</span>
                  <div className="program__detail">
                    <FontAwesomeIcon
                      className="program__detail--icon"
                      icon="fa-solid fa-clock"
                    />
                    {programs.Runtime}
                  </div>
                  <span className="program__detail--spacer">|</span>
                  <div className="program__detail">{programs.Rated}</div>
                </div>
                <div className="program__overview">
                  <h3 className="program__overview--title">Overview</h3>
                  <p className="program__overview--para">
                  {programs.Plot}
                  </p>
                </div>
                <div className="program__genre">
                  <h3 className="program__genre--title">Genre</h3>
                  <p className="program__genre--para">
                  {programs.Genre}
                  </p>
                </div>
                <div className="program__details--bottom">
                  <div className="program__detail--bottom">
                    <h3>Director</h3>
                    <p>{programs.Director}</p>
                  </div>
                  <div className="program__detail--bottom">
                    <h3>Rating</h3>
                    <p>10/10</p>
                    {/* Fix here */}
                  </div>
                </div>
                <button className="btn">
                  <FontAwesomeIcon
                    className="programInfo__btn--plus"
                    icon="fa-solid fa-plus"
                  />{" "}
                  <span className="programInfo__btn--text"> My List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProgramInfo;

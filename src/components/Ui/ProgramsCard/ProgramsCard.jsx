import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsCard.css";

function ProgramsCard() {
  return (
    <div className="programsCard__container">
      <Link to={`/programs/:imdbID`}>
        <img
          className="programsCard__poster"
          src="https://m.media-amazon.com/images/M/MV5BYjE0ZDZmYmUtOWQyMy00NmNkLWExOTgtOWRmOTkxNjc0NTEzXkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_SX300.jpg"
          alt=""
        />
        <div className="programsCard__info">
          <div className="programsCard__title">{Search.Title}</div>
          <div className="programsCard__year">{Search.Year}</div>
        </div>
      </Link>
    </div>
  );
}

export default ProgramsCard;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./MyList.css";
function MyList() {
  return (
    <div id="myList">
      <div className="container">
        <div className="row">
          <h2 className="myList__title">My List</h2>
          <div className="myList__empty">
            <p className="myList__empty--para">Your My List is empty.</p>
            <p className="myList__empty--para">
              To add Movies and TV Shows to your My List please click{" "}
              <span>
                {" "}
                <FontAwesomeIcon
                  className="myList__add--icon"
                  icon="fa-solid fa-plus"
                />
              </span>{" "}
              My List
            </p>
          </div>
          <div className="btn__wrapper">
            <Link to={"/Programs"}>
            <button className="btn myList__btn">Browse Programs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyList;

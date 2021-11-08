import React from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();
  const onBtnClick = (e) => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div className="ui secondary pointing menu">
      <button component={Link} to="/" onClick={(e) => onBtnClick(e)} className="item">
        <Link to="/">Sign out</Link>
      </button>
    </div>
  );
};

export default Header;

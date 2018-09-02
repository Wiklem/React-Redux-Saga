import React from "react";
import NavLink from "react-router-dom/es/NavLink";
import routes from "../../router/index";

export default () => {
  return (
    <div>
      {routes.map((props, key) => {
        return (
          <NavLink key={key} exact to={props.path}>
            <button> {props.path} </button>
          </NavLink>
        );
      })}
    </div>
  );
};

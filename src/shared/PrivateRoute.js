import React from "react";
import { Route, Navigate } from "react-router-dom";


function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/user/login" />
        )
      }
    />
  );
}

export default PrivateRoute;

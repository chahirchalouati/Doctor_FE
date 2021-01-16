import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
  let ComponentToRender = component;
  const isAuthenticated = useSelector(
    ({ RX_AUTH: { isAuthenticated } }) => isAuthenticated
  );

  if (isAuthenticated) {
    return (
      <Route {...rest} render={(props) => <ComponentToRender {...props} />} />
    );
  } else {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )}
      />
    );
  }
};

export default withRouter(PrivateRoute);

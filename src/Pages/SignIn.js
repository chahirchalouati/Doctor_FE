import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { authentication } from "../Services/RequestService";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { RX_AUTH } = useSelector((state) => state);

  const [Request, setRequest] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    dispatch(authentication.singIn(Request));
  };

  useEffect(() => {
    RX_AUTH.isAuthenticated && history.push("/");
  }, [RX_AUTH.isAuthenticated, history]);

  return (
    <form>
      <label htmlFor="email">UserName</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setRequest({ ...Request, email: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <input
        autoComplete={""}
        type="password"
        id="password"
        onChange={(e) => setRequest({ ...Request, password: e.target.value })}
      />

      <button type="button" onClick={(e) => onSubmit()}>
        Sign-In
      </button>
      <Link to="/signup">create new Account </Link>
    </form>
  );
}

export default SignIn;

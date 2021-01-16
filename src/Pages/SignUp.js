import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authentication } from "../Services/RequestService";

function SignUp() {
  const [request, setRequest] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(authentication.signUp(request));
  };

  return (
    <form>
      <label htmlFor="firstName">firstName</label>

      <input
        type="text"
        id="firstName"
        onChange={(e) => setRequest({ ...request, firstName: e.target.value })}
      />

      <label htmlFor="lastName">lastName</label>
      <input
        type="text"
        id="lastName"
        onChange={(e) => setRequest({ ...request, lastName: e.target.value })}
      />

      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setRequest({ ...request, email: e.target.value })}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        autoComplete=""
        onChange={(e) => setRequest({ ...request, password: e.target.value })}
      />

      <div className="radio_box">
        <input
          type="radio"
          name="role"
          value="USER"
          onChange={(e) => setRequest({ ...request, role: e.target.value })}
        />
        <label htmlFor="role">USER</label>
      </div>
      <div className="radio_box">
        <input
          type="radio"
          name="role"
          value="DOCTOR"
          onChange={(e) => setRequest({ ...request, role: e.target.value })}
        />
        <label htmlFor="role">DOCTOR</label>
      </div>

      <button type="button" onClick={(e) => onSubmit()}>
        Sign-In
      </button>
    </form>
  );
}

export default SignUp;

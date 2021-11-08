import React, { useState } from "react";
import { onLogIn } from "../Api/Confirm";
import "./login.css";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  let history = useHistory();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    // console.log(form.email, form.password);
    await onLogIn(form)
      .then((res) => {
        console.log(res);
        if (res.success) {
          localStorage.setItem("token", JSON.stringify(res.data.user.token));
          history.push("/dashBoard");
        }
      })
      .catch((err) => console.log(err));
    // .then((status) => {
    //   if (status <= 300 || status >= 200) alert("success");
    //   else alert("fail");
    // })
    // .catch((err) => alert("error"));
  };

  return (
    <div className="container">
      <h2 className="header">SignIn</h2>
      <form onSubmit={(e) => onFormSubmit(e)} className="login">
        <label className="label-1">Email</label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          required
        />
        <label className="label-2">password</label>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          required
        />
        <button className="button">sign in</button>
      </form>
      <div>
        <p>
          already have account?
          <Link className="link" to="/register">
            create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

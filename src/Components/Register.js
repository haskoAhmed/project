import React, { useState } from "react";
import { onRegisterSubmit } from "../Api/Signup";
import "./register.css";
import { Image, Transformation } from "cloudinary-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    userName: "",
    password: "",
    // age: "",
    // male: true,
    // female: false,
    // saudi: 1,
    // all: 2,
    roleId: 2,
  });
  const onFormSubmit = async (e) => {
    e.preventDefault();

    await onRegisterSubmit(form);
  };

  return (
    <div className="container-1">
      <h2 className="header">signUp</h2>

      <Image
        className="img"
        cloudName="demo"
        upload_preset="my_unsigned_preset"
        publicId="sample_woman.png"
      />
      <Transformation width="50" height="50" gravity="face" crop="thumb" />
      <Transformation radius="20" />

      <form onSubmit={(e) => onFormSubmit(e)} className="register">
        <label className="label-f">full name</label>
        <input
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          type="text"
          placeholder="full name"
          required
        />
        <label className="label-n">phone number</label>
        <input
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
          type="number"
          required
        />
        <label className="label-e">email</label>
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          type="email"
          required
        />
        <label className="label-u">user name</label>
        <input
          value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })}
          type="text"
          required
        />
        <label className="label-p">Password</label>
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          required
        />
        <label className="label-a">age</label>
        <input
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
          type="number"
          required
        />
        <div className="gender">
          <label className="label-g">gender</label>
          <label className="male">male</label>
          <input
            className="radio-1"
            type="radio"
            value={form.male}
            onChange={(e) => setForm({ ...form, male: e.target.value })}
            name="gender"
          />
          <label className="female">female</label>
          <input
            className="radio-2"
            type="radio"
            value={form.female}
            onChange={(e) => setForm({ ...form, female: e.target.value })}
            name="gender"
          />
        </div>
        <div className=" national">
          <label className="label-t"> nationality :</label>
          <select className="drop">
            <option
              value={form.saudi}
              onChange={(e) => setForm({ ...form, saudi: e.target.value })}
            >
              saudi
            </option>
            <option
              value={form.all}
              onChange={(e) => setForm({ ...form, all: e.target.value })}
            >
              all
            </option>
          </select>
        </div>
        <button className="button">signUp</button>
      </form>
      <div>
        <p>
          already have account?
          <Link className="link" to="/">
            signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

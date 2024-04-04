import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Oauth from "./Oauth.jsx";

const Form = ({ type }) => {
  const [formData, setFormData] = useState({
    userName: "",
    passWord: "",
    email: "",
  });
  console.log(formData);
  const navigate = useNavigate();

  const handleClick = async (path) => {
    navigate(`/${path}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/Auth/signUp", {
        userName: formData.userName,
        passWord: formData.passWord,
        email: formData.email,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    console.log(res);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/Auth/login", {
        userName: formData.userName,
        passWord: formData.passWord,
      });
      if (res.status === 201) navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    console.log(res);
  };
  return (
    <main className="flex h-[100vh]">
      <div className="w-1/2 h-full flex flex-col justify-center items-center max-sm:hidden p-2 text-5xl">
        <div>
          <span className="text-center p-2 rounded-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 text-5xl max-md:text-3xl text-white  font-sans align-bottom">
            Karan's
          </span>

          <span className="text-5xl max-md:text-3xl font-bold font-sans p-3">
            Blog
          </span>
        </div>

        <div className="pt-6 max-w-2xl">
          <h3 className="text-3xl font-semibold text-center max-md:text-2xl text-neutral-500">
            This is a demo project you can sign up with your email or google !
          </h3>
        </div>
      </div>
      <div className="flex justify-center max-w-6xl m-auto h-fit">
        <div>
          <form className="flex flex-col gap-3 w-96 justify-center p-2">
            <h1 className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-3xl font-bold text-white flex justify-center max-w-[200px] m-auto rounded-md p-2 sm:hidden my-3">
              Karan's Blog
            </h1>

            <input
              type="text"
              placeholder="Username"
              className="border rounded-md p-3 outline-none max-sm:p-2"
              value={formData.userName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  userName: e.target.value,
                })
              }
            />
            {type === "Signup" && (
              <input
                type="email"
                placeholder="Email"
                className="border rounded-md p-3 outline-none max-sm:p-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            )}

            <input
              type="password"
              placeholder="Password"
              className="border rounded-md p-3 outline-none max-sm:p-2"
              value={formData.passWord}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  passWord: e.target.value,
                })
              }
            />
            {type === "Signup" ? (
              <button
                onClick={handleSubmit}
                className="text-white font-bold rounded-md border-none bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-2"
              >
                SIGNUP
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="text-white font-bold rounded-md border-none bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 p-2"
              >
                LOGIN
              </button>
            )}

            <Oauth />
          </form>

          <div className="flex justify-between p-2">
            {type === "Signup" ? (
              <h2>Already Have An Account ? </h2>
            ) : (
              <h2>Don't Have an Account ? </h2>
            )}

            <button
              className="text-blue-400"
              onClick={(e) => {
                e.preventDefault();
                handleClick(e.target.value);
              }}
              value={type === "Login" ? "Signup" : "Login"}
            >
              {type === "Signup" ? "Login" : "Signup"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Form;

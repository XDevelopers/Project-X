import React from "react";
import { useNavigate } from "react-router-dom";
import { userData } from "../ApiFetch/User";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });
  const GotoSignUp = () => {
    navigate("/signup");
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await userData.LoginUser(loginData);
      console.log(loginData);
      localStorage.setItem("accessToken", loginData.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handeleChange = (e) => {
    const {name, value} = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="NavLogin w-full h-full flex justify-center items-center ">
      <div className="main flex gap-10 flex-col  p-8 h-full rounded-2xl  bg-gray-900 ">
        <form
          className=" flex flex-col  gap-8 p-2 h-[60%] rounded-2xl "
          onSubmit={onSubmit}
        >
          <h1 className="text-center text-2xl ">Login</h1>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handeleChange}
            className="text-white p-2 border-2 border-black rounded-2xl"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="text-white p-2 border-2 border-black rounded-2xl"
            onChange={handeleChange}
          />
          <button
            type="submit"
            className="bg-white py-1 px-2 text-black font-medium rounded-2xl"
          >
            Login
          </button>
        </form>
        <div className="newUser flex gap-4 items-center">
          <p>Don't have an account?</p>{" "}
          <button
            className="bg-white font-semibold text-black py-1.5 px-3 rounded-2xl border-none"
            onClick={GotoSignUp}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

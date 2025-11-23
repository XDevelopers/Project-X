import React from "react";
import { data, useNavigate } from "react-router-dom";
import { userData } from "../ApiFetch/User";
const Signup = () => {
  const navigate = useNavigate();

  const GOtoLogin = () => {
    navigate("/login");
  };
  const [signuop, setSignup] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChangesignup = (e) => {
    const { name, value } = e.target; // ✅ correct destructuring
    setSignup((prev) => ({
      ...prev,
      [name]: value, // ✅ correct property update
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault(); // ✅ correct spelling
let token=localStorage.setItem("accessToken", signuop.token);
    console.log(token);

    try {
    const response=  await userData.signupUser(signuop); // ✅ correct variable name
      console.log(response.token);
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <div className="NavLogin  w-full  h-full flex justify-center items-center ">
      <div className="mianuser rounded-3xl flex flex-col gap-4 p-8 h-full bg-gray-900">
      <form
        className=" flex flex-col gap-6 p-2 h-[60%] rounded-2xl  "
        onClick={handleSignup}
      >
        <h1 className="text-center text-2xl">signup</h1>
        <input
          type="text"
          placeholder="Name"
          name="username"
          onChange={handleChangesignup}
          className="text-white p-2 border-2 border-black rounded-2xl"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChangesignup}
          className="text-white p-2 border-2 border-black rounded-2xl"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChangesignup}
          className="text-white p-2 border-2 border-black rounded-2xl"
        />
        <button type="submit" className="bg-white text-black px-2 py-1 rounded-3xl">sign up</button>
        <div className="newUser flex gap-4">
        
     
        </div>
      </form>
      <div className="main flex gap-4 items-center" >
        <p>Alrady have an account?</p>
           <button
            className="bg-white font-semibold text-black py-1.5 px-3 rounded-2xl border-none"
            onClick={GOtoLogin}
          >
            Login
          </button> </div>
      </div>
    </div>
  );
};

export default Signup;

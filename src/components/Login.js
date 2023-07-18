import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "./service/ApiService";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { login, logout } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !password) {
      setFormError("Please fill in all required fields.");
      return;
    }

    setFormError("");
    setIsError(false);
    setIsLoading(true);

    const loginRequestData = { email, password };

    try {
      const response = await ApiService.login(loginRequestData);
      if (response.status === 200) {
        console.log(`response from server ${response.data}`);
        const { jwtToken } = response.data;

        //Clear this console on production

        localStorage.setItem("jwtToken", jwtToken);

        navigate("/dashboard");

        login(response.data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.log("Authentication failed " + error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex  justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Enter Email"
              id="email"
              type="text"
              className="mt-1 p-4 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Enter Password"
              id="password"
              type="password"
              className="mt-1 p-4 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {formError && <p className="text-red-500">{formError}</p>}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4">
          Click to Register?{" "}
          <a
            href="/registration"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign Up
          </a>
        </p>
        <p className="text-center text-sm mt-2">
          <a
            href="/forgotpassword"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Forgot Password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
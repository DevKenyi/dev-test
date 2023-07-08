import React, { useContext, useState } from "react";
import { Form, Button, Dimmer, Loader, Message } from "semantic-ui-react";
import { HttpStatusCode } from "axios";
import { useNavigate } from "react-router-dom";
import ApiService from "./service/ApiService";
import { AuthContext } from "./AuthProvider";

const Login = ({ serverResponse }) => {
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
        const {
          JSESSIONID,
          userName,
          userRole,
          patientFirstname,
          patientLastname,
        } = response.data;
        console.log(
          JSESSIONID,
          userName,
          userRole,
          patientFirstname,
          patientLastname
        );
        navigate("/dashboard");

        login(response.data);
        // localStorage.setItem("sessionToken", sessionToken);
        //specify the function of clearing session

        // Cookies.set("JSESSIONID", response.data.JSESSIONID);
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

  const handleSessionTimout = () => {
    let timoutId;
  };
  const resetTimout = () => {
    logout();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-center text-2xl font-bold mb-8">Sign Up</h2>
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

          <div>{isError && <p className="text-red-500">{isError}</p>}</div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Sign in
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
      </div>
    </div>
  );
};

export default Login;

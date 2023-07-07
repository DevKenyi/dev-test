import React, { useState } from "react";

export default function Registration() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      firstname.trim() === "" ||
      lastname.trim() === "" ||
      phoneNumber.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!terms) {
      setError("Please agree to the Terms and Conditions.");
      return;
    }

    // Form submission logic
    // ...

    // Reset form fields and error
    setFirstname("");
    setLastname("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTerms(false);
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-center text-2xl font-bold mb-8">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="mt-1 h-8 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="mt-1 h-8  block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="mt-1 block w-full h-8  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="mt-1 block w-full h-8  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full h-8  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm h-8  font-medium"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              className="mt-1 block w-full h-8  rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="terms" className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="form-checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <span className="ml-2">I agree to the Terms and Conditions</span>
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

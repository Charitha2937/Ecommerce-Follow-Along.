import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Get stored user data
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      console.log("Login successful!");
      navigate("/"); // Redirect to home page
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-600 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-white">
          Login to Your Account
        </h1>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-lg rounded-xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-600 text-center">{error}</p>}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
              Login
            </button>

            <div className="text-center">
              Don’t have an account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
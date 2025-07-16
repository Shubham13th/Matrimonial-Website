import { useState } from "react";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-8">
          <h2 className="text-3xl font-dancing text-amber-900 mb-6 text-center">Forgot Password</h2>
          {submitted ? (
            <div className="text-green-700 text-center font-semibold py-8">
              If an account with that email exists, a password reset link has been sent.<br/>(This is a frontend-only demo.)
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-amber-900 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="w-full bg-amber-700 hover:bg-amber-900 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200 mt-2">Send Reset Link</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword; 
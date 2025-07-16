import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = "Valid email is required";
    if (!form.password || form.password.length < 6) newErrors.password = "Password (min 6 chars) is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md mt-8">
          <h2 className="text-3xl font-dancing text-amber-900 mb-6 text-center">Login</h2>
          {submitted ? (
            <div className="text-green-700 text-center font-semibold py-8">
              Login successful! (Frontend only demo)
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium text-amber-900 mb-1">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.email ? 'border-red-500' : 'border-amber-300'}`} />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block font-medium text-amber-900 mb-1">Password</label>
                <input type="password" name="password" value={form.password} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.password ? 'border-red-500' : 'border-amber-300'}`} />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <div className="flex justify-between items-center mt-2">
                <Link to="/forgot-password" className="text-amber-700 hover:underline text-sm">Forgot Password?</Link>
                <Link to="/register" className="text-amber-700 hover:underline text-sm">Register Now</Link>
              </div>
              <button type="submit" className="w-full bg-amber-700 hover:bg-amber-900 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200 mt-2">Login</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login; 
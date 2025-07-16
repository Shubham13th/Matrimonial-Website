import { useState, useRef } from "react";
import Navbar from "../components/Navbar";

const dummyUser = {
  fullName: "Amit Sharma",
  gender: "Male",
  age: 28,
  email: "amit.sharma@email.com",
  phone: "1234567890",
  religion: "Hindu",
  caste: "Brahmin",
  language: "Hindi",
  occupation: "Software Engineer",
  location: "Delhi, India",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
};

const initialState = { ...dummyUser, password: "", confirmPassword: "" };

const EditProfile = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(form.image);
  const fileInputRef = useRef();

  const validate = () => {
    const newErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!form.gender) newErrors.gender = "Gender is required";
    if (!form.age || isNaN(form.age) || form.age < 18) newErrors.age = "Valid age (18+) is required";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) newErrors.email = "Valid email is required";
    if (!form.phone.match(/^\d{10}$/)) newErrors.phone = "Valid 10-digit phone is required";
    if (!form.religion.trim()) newErrors.religion = "Religion is required";
    if (!form.language.trim()) newErrors.language = "Language is required";
    if (!form.occupation.trim()) newErrors.occupation = "Occupation is required";
    if (!form.location.trim()) newErrors.location = "Location is required";
    if (form.password && form.password.length < 6) newErrors.password = "Password (min 6 chars) is required";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000); // Hide toast after 3s
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg mt-8">
          <h2 className="text-3xl font-dancing text-amber-900 mb-6 text-center">Edit Profile</h2>
          {submitted && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">Profile updated successfully!</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col items-center mb-4">
              <img src={imagePreview} alt="Profile Preview" className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-amber-300" />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
              />
              <button type="button" onClick={() => fileInputRef.current.click()} className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-1 px-4 rounded-lg text-sm transition duration-200">Change Photo</button>
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.fullName ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Gender</label>
              <select name="gender" value={form.gender} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.gender ? 'border-red-500' : 'border-amber-300'}`} >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Age</label>
              <input type="number" name="age" value={form.age} onChange={handleChange} min="18" className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.age ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.email ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} maxLength={10} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.phone ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Religion</label>
              <input type="text" name="religion" value={form.religion} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.religion ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.religion && <p className="text-red-500 text-sm mt-1">{errors.religion}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Caste <span className="text-amber-500 text-xs">(optional)</span></label>
              <input type="text" name="caste" value={form.caste} onChange={handleChange} className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Language</label>
              <input type="text" name="language" value={form.language} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.language ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.language && <p className="text-red-500 text-sm mt-1">{errors.language}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Occupation</label>
              <input type="text" name="occupation" value={form.occupation} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.occupation ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.occupation && <p className="text-red-500 text-sm mt-1">{errors.occupation}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Location</label>
              <input type="text" name="location" value={form.location} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.location ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Password <span className="text-amber-500 text-xs">(leave blank to keep unchanged)</span></label>
              <input type="password" name="password" value={form.password} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.password ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <div>
              <label className="block font-medium text-amber-900 mb-1">Confirm Password</label>
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 ${errors.confirmPassword ? 'border-red-500' : 'border-amber-300'}`} />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="w-full bg-amber-700 hover:bg-amber-900 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-200 mt-2">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile; 
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

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
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-dancing text-amber-900 mb-2">Welcome, {dummyUser.fullName.split(' ')[0]}!</h2>
        <p className="text-amber-800 mb-6">Glad to see you back on Shubh Vivah.</p>
        <div className="flex gap-4 mb-8">
          <a href="/matches" className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">View Matches</a>
          <Link to="/profile/edit" className="bg-white border border-amber-700 text-amber-900 hover:bg-amber-100 font-semibold py-2 px-6 rounded-lg transition duration-200">Edit Profile</Link>
        </div>
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">Your Profile (Demo)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><span className="font-medium text-amber-800">Full Name:</span> {dummyUser.fullName}</div>
            <div><span className="font-medium text-amber-800">Gender:</span> {dummyUser.gender}</div>
            <div><span className="font-medium text-amber-800">Age:</span> {dummyUser.age}</div>
            <div><span className="font-medium text-amber-800">Email:</span> {dummyUser.email}</div>
            <div><span className="font-medium text-amber-800">Phone:</span> {dummyUser.phone}</div>
            <div><span className="font-medium text-amber-800">Religion:</span> {dummyUser.religion}</div>
            <div><span className="font-medium text-amber-800">Caste:</span> {dummyUser.caste}</div>
            <div><span className="font-medium text-amber-800">Language:</span> {dummyUser.language}</div>
            <div><span className="font-medium text-amber-800">Occupation:</span> {dummyUser.occupation}</div>
            <div><span className="font-medium text-amber-800">Location:</span> {dummyUser.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
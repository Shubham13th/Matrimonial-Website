import { useState } from "react";
import Navbar from "../components/Navbar";

const profile = {
  name: "Priya Singh",
  age: 26,
  gender: "Female",
  location: "Mumbai, India",
  language: "Hindi",
  image: "https://randomuser.me/api/portraits/women/68.jpg",
  about: "I am a cheerful and family-oriented person who loves music and travel. Looking for a caring and understanding partner.",
  education: "M.Sc. in Computer Science, Mumbai University",
  occupation: "Software Developer at Infosys",
  family: {
    father: "Businessman",
    mother: "Homemaker",
    siblings: "1 younger brother",
  },
  preferences: {
    age: "27-32",
    religion: "Hindu",
    language: "Hindi, English",
    location: "India",
    occupation: "Any professional",
  },
};

const tabs = ["About", "Education", "Family", "Preferences"];

const ProfileDetail = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [interestSent, setInterestSent] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
          <img src={profile.image} alt={profile.name} className="w-32 h-32 rounded-full object-cover border-4 border-amber-300 mb-4 md:mb-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-dancing text-amber-900 mb-1">{profile.name}</h2>
            <p className="text-amber-800 mb-1">Age: {profile.age} | Gender: {profile.gender}</p>
            <p className="text-amber-800 mb-1">Location: {profile.location}</p>
            <p className="text-amber-800 mb-4">Language: {profile.language}</p>
            <button
              className={`bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 mb-4 ${interestSent ? 'opacity-60 cursor-not-allowed' : ''}`}
              onClick={() => setInterestSent(true)}
              disabled={interestSent}
            >
              {interestSent ? "Interest Sent" : "Send Interest"}
            </button>
            <div className="border-t pt-4">
              <div className="flex gap-4 mb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 rounded-t-lg font-medium transition duration-200 ${activeTab === tab ? 'bg-amber-200 text-amber-900' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="bg-amber-50 rounded-b-lg p-4 min-h-[100px]">
                {activeTab === "About" && (
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">About</h3>
                    <p className="text-amber-800">{profile.about}</p>
                  </div>
                )}
                {activeTab === "Education" && (
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Education & Occupation</h3>
                    <p className="text-amber-800 mb-1">Education: {profile.education}</p>
                    <p className="text-amber-800">Occupation: {profile.occupation}</p>
                  </div>
                )}
                {activeTab === "Family" && (
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Family Details</h3>
                    <p className="text-amber-800 mb-1">Father: {profile.family.father}</p>
                    <p className="text-amber-800 mb-1">Mother: {profile.family.mother}</p>
                    <p className="text-amber-800">Siblings: {profile.family.siblings}</p>
                  </div>
                )}
                {activeTab === "Preferences" && (
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Partner Preferences</h3>
                    <p className="text-amber-800 mb-1">Age: {profile.preferences.age}</p>
                    <p className="text-amber-800 mb-1">Religion: {profile.preferences.religion}</p>
                    <p className="text-amber-800 mb-1">Language: {profile.preferences.language}</p>
                    <p className="text-amber-800 mb-1">Location: {profile.preferences.location}</p>
                    <p className="text-amber-800">Occupation: {profile.preferences.occupation}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail; 
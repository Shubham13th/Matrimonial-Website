import { useState } from "react";
import Navbar from "../components/Navbar";

const profiles = [
  {
    id: 1,
    name: "Priya Singh",
    age: 26,
    location: "Mumbai, India",
    language: "Hindi",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    age: 29,
    location: "Delhi, India",
    language: "Hindi, English",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sneha Patel",
    age: 25,
    location: "Ahmedabad, India",
    language: "Gujarati, Hindi",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Vikram Rao",
    age: 30,
    location: "Bangalore, India",
    language: "Kannada, English",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "Anjali Mehta",
    age: 27,
    location: "Pune, India",
    language: "Marathi, Hindi",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 6,
    name: "Riya Sharma",
    age: 23,
    location: "Jamshedpur, Jharkhand",
    language: "Hindi, English",
    religion: "Hindu",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  },
];

const unique = (arr) => [...new Set(arr)];

const Search = () => {
  const [search, setSearch] = useState("");
  const [ageRange, setAgeRange] = useState([18, 35]);
  const [religion, setReligion] = useState("");
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");

  // Get unique values for filters
  const religions = unique(profiles.map((p) => p.religion));
  const locations = unique(profiles.map((p) => p.location));
  const languages = unique(profiles.flatMap((p) => p.language.split(", ").map((l) => l.trim())));

  // Filtering logic
  const filtered = profiles.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase()) ||
      p.language.toLowerCase().includes(search.toLowerCase());
    const matchesAge = p.age >= ageRange[0] && p.age <= ageRange[1];
    const matchesReligion = !religion || p.religion === religion;
    const matchesLocation = !location || p.location === location;
    const matchesLanguage = !language || p.language.split(", ").map((l) => l.trim()).includes(language);
    return matchesSearch && matchesAge && matchesReligion && matchesLocation && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 bg-white rounded-xl shadow-lg p-6 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-amber-900 mb-4">Filters</h3>
          <div className="mb-4">
            <label className="block font-medium text-amber-900 mb-1">Age Range</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={18}
                max={ageRange[1]}
                value={ageRange[0]}
                onChange={(e) => setAgeRange([+e.target.value, ageRange[1]])}
                className="w-16 px-2 py-1 border border-amber-300 rounded focus:outline-none"
              />
              <span>-</span>
              <input
                type="number"
                min={ageRange[0]}
                max={60}
                value={ageRange[1]}
                onChange={(e) => setAgeRange([ageRange[0], +e.target.value])}
                className="w-16 px-2 py-1 border border-amber-300 rounded focus:outline-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-amber-900 mb-1">Religion</label>
            <select value={religion} onChange={(e) => setReligion(e.target.value)} className="w-full px-3 py-2 border border-amber-300 rounded focus:outline-none">
              <option value="">All</option>
              {religions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium text-amber-900 mb-1">Location</label>
            <select value={location} onChange={(e) => setLocation(e.target.value)} className="w-full px-3 py-2 border border-amber-300 rounded focus:outline-none">
              <option value="">All</option>
              {locations.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium text-amber-900 mb-1">Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full px-3 py-2 border border-amber-300 rounded focus:outline-none">
              <option value="">All</option>
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <h2 className="text-3xl font-dancing text-amber-900">Search Profiles</h2>
            <input
              type="text"
              placeholder="Search by name, location, language..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-80 px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center text-amber-700 font-semibold">No profiles found.</div>
            ) : (
              filtered.map((profile) => (
                <div key={profile.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
                  <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-amber-300" />
                  <h3 className="text-xl font-semibold text-amber-900 mb-1">{profile.name}</h3>
                  <div className="w-full flex flex-col items-center text-amber-800 text-sm mb-4">
                    <div className="flex gap-2"><span className="font-medium">Age:</span> {profile.age}</div>
                    <div className="flex gap-2"><span className="font-medium">Location:</span> {profile.location}</div>
                    <div className="flex gap-2"><span className="font-medium">Language:</span> {profile.language}</div>
                  </div>
                  <a href={`/profile/${profile.id}`} className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 mt-2">View Profile</a>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Search; 
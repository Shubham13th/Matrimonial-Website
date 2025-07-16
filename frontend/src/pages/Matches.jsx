import Navbar from "../components/Navbar";

const profiles = [
  {
    id: 1,
    name: "Priya Singh",
    age: 26,
    location: "Mumbai, India",
    language: "Hindi",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    age: 29,
    location: "Delhi, India",
    language: "Hindi, English",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sneha Patel",
    age: 25,
    location: "Ahmedabad, India",
    language: "Gujarati, Hindi",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Vikram Rao",
    age: 30,
    location: "Bangalore, India",
    language: "Kannada, English",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "Anjali Mehta",
    age: 27,
    location: "Pune, India",
    language: "Marathi, Hindi",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Matches = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-dancing text-amber-900 mb-8 text-center">Your Matches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={profile.image} alt={profile.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-amber-300" />
              <h3 className="text-xl font-semibold text-amber-900 mb-1">{profile.name}</h3>
              <p className="text-amber-800 mb-1">Age: {profile.age}</p>
              <p className="text-amber-800 mb-1">Location: {profile.location}</p>
              <p className="text-amber-800 mb-4">Language: {profile.language}</p>
              <a href={`/profile/${profile.id}`} className="bg-amber-700 hover:bg-amber-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">View Profile</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matches; 
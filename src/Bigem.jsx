import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfilePic from "./assets/logo.jpg"; // <-- put your image here

export default function Bigem({ darkMode, setDarkMode }) {
  const [image, setImage] = useState(ProfilePic); // default image
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const handleShare = () => {
    const shareData = {
      title: "Bigem Profile",
      text: "Check out my profile on Bigem!",
      url: window.location.href,
    };
    if (navigator.share)
      navigator.share(shareData).catch(() => alert("Link copied!"));
    else {
      navigator.clipboard.writeText(shareData.url);
      alert("Link copied to clipboard!");
    }
  };

  const openWebsite = () => navigate("/website"); // route to website

  const contact = () => (window.location.href = "mailto:example@email.com");

  return (
    <div
      className="relative overflow-hidden min-h-screen"
      style={{ backgroundColor: darkMode ? "#2c2c2c" : "#eaf0ce" }}
    >
      {/* Background circles */}
      <div
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] rounded-full opacity-40"
        style={{ backgroundColor: darkMode ? "#444" : "#c0c5c1" }}
      />
      <div
        className="absolute bottom-[-140px] right-[-140px] w-[360px] h-[360px] rounded-full opacity-30"
        style={{ backgroundColor: darkMode ? "#444" : "#c0c5c1" }}
      />

      {/* Top actions */}
      <div className="absolute top-6 right-6 flex gap-3 z-20">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full bg-white shadow-md text-sm font-medium hover:shadow-lg transition"
        >
          {darkMode ? "Light" : "Dark"} Theme
        </button>
        <button
          onClick={handleShare}
          className="px-4 py-2 rounded-full bg-white shadow-md text-sm font-medium hover:shadow-lg transition"
        >
          Share
        </button>
      </div>

      {/* Bottom info bar */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6 text-sm z-20"
        style={{ color: darkMode ? "#f5f5dc" : "#4b5563" }}
      >
        <span>© 2026 Bigem</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>

      {/* Centered card */}
      <div className="min-h-screen flex justify-center items-center relative z-10">
        <div
          className="w-[480px] rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: darkMode ? "#3a3a3a" : "#ffffff",
            boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
            color: darkMode ? "#f5f5dc" : "#1f2937",
          }}
        >
          <h1 className="text-3xl font-bold text-center mb-8">Bigem</h1>

          {/* Profile Image */}
          <div className="flex flex-col items-center mb-6">
            <label className="cursor-pointer">
              <div className="w-32 h-32 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center text-gray-600">
                {image ? (
                  <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  "Upload"
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
            <span
              className="text-sm mt-2"
              style={{ color: darkMode ? "#f5f5dc" : "#6b7280" }}
            >
              Click to change profile image
            </span>
          </div>

          {/* About */}
          <h2 className="text-xl font-semibold text-center mb-3">About</h2>
          <p
            className="text-base text-center mb-8"
            style={{ color: darkMode ? "#f5f5dc" : "#4b5563" }}
          >
            Hi, I'm Bigem, a student who loves coding and sharing to the public;
            hope this message reaches you!
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={openWebsite}
              className="px-6 py-2 rounded-xl text-white font-medium transition"
              style={{ backgroundColor: "#c0c5c1" }}
            >
              Website
            </button>
            <button
              onClick={contact}
              className="px-6 py-2 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition"
              style={{ color: darkMode ? "#f5f5dc" : "#374151" }}
            >
              Contact
            </button>
          </div>

          {/* Details */}
          <h2 className="text-xl font-semibold text-center mb-3">Details</h2>
          <ul
            className="text-base space-y-3 text-center"
            style={{ color: darkMode ? "#f5f5dc" : "#374151" }}
          >
            <li>Student</li>
            <li>Loves Gaming</li>
            <li>Streams Music</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

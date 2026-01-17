import { useNavigate } from "react-router-dom";

export default function WebsitePage({ darkMode }) {
  const navigate = useNavigate();

  return (
    <div
      className={`relative min-h-screen ${
        darkMode ? "bg-[#2c2c2c]" : "bg-white"
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => navigate("/")}
        className={`absolute top-4 right-4 text-2xl font-bold p-2 rounded-full transition
          ${darkMode ? "text-[#FFFFFF] hover:bg-gray-700" : "text-gray-900 hover:bg-gray-200"}
        `}
        aria-label="Close"
      >
        ✕
      </button>

      {/* Website iframe */}
      <iframe
        src="https://lemoxyy.github.io/Bigem-Shrestha/"
        title="me"
        className="w-full h-full min-h-screen"
        style={{ border: "none" }}
      />
    </div>
  );
}

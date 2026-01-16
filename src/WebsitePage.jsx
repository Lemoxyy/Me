import { useNavigate } from "react-router-dom";

export default function WebsitePage({ darkMode }) {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: darkMode ? "#2c2c2c" : "#ffffff" }}
    >
      {/* Cross button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 text-2xl font-bold p-2 rounded-full hover:bg-gray-200 transition"
        style={{ color: darkMode ? "#f5f5dc" : "#111" }}
      >
        ✕
      </button>

      {/* Website iframe */}
      <iframe
        src="https://lemoxyy.github.io/Bigem-Shrestha/"
        title="Me"
        className="flex-1 w-full"
        style={{
          border: "none",
          minHeight: "100vh",
          backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
        }}
      />
    </div>
  );
}

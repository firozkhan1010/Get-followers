import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./WhatsAppShare.css";
import {Link} from "react-router-dom";

function WhatsAppShare() {
  const [selectedPeople, setSelectedPeople] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username || "";

  const handleSelect = () => {
    setSelectedPeople(5);
  };

  const handleShare = () => {
    if (selectedPeople !== 5) return;

    const link = "https://get-instagram-followers-five.vercel.app";

    const message = `Hi! Join using this link: ${link}`;

    const whatsappURL =
      `https://wa.me/?text=${encodeURIComponent(message)}`;

    const whatsappWindow = window.open(whatsappURL, "_blank");

    // Agar browser ne WhatsApp window open karne di
    if (whatsappWindow) {
      navigate("/component");
    } else {
      alert("Please allow popups for this website.");
    }
  };

  return (
    <div className="whatsapp-page">
      <div className="whatsapp-box">

        <h1>Invite Your Friends</h1>

        <p>Invite friends using WhatsApp</p>

        {username && (
          <p className="username">
            Username: <strong>{username}</strong>
          </p>
        )}

        <button
          className={`people-option ${
            selectedPeople === 5 ? "people-selected" : ""
          }`}
          onClick={handleSelect}
        >
          <span className="circle">
            {selectedPeople === 5 && "✓"}
          </span>

          <span>Invite 5 friends</span>
        </button>

      
        <button
          className={`share-button ${
            selectedPeople === 5 ? "share-active" : ""
          }`}
          onClick={handleShare}
          disabled={selectedPeople !== 5}
        >
          Share
        </button>

      </div>
    </div>
  );
}

export default WhatsAppShare;
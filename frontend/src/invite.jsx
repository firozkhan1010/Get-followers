// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./invite.css";

// function Invite() {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();

//   const handleInvite = () => {
//     if (!username.trim()) return;

//     navigate("/whatsapp-share", {
//       state: {
//         username: username,
//       },
//     });
//   };

//   return (
//     <div className="invite-page">
//       <div className="invite-box">

//         <h1>Enter Username and Invite Friend</h1>

//         <input
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <button
//           className={username.trim() ? "invite-active" : ""}
//           onClick={handleInvite}
//           disabled={!username.trim()}
//         >
//           Invite
//         </button>

//       </div>
//     </div>
//   );
// }

// export default Invite;
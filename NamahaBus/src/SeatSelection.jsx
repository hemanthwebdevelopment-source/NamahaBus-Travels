// import { useState } from "react";

// export default function SeatSelection() {

//   const totalSeats = 40;

//   const bookedSeats = [3, 7, 12, 18, 25];

//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const handleSeatClick = (seatNumber) => {

//     if (bookedSeats.includes(seatNumber)) {
//       return;
//     }

//     if (selectedSeats.includes(seatNumber)) {

//       setSelectedSeats(
//         selectedSeats.filter(
//           (seat) => seat !== seatNumber
//         )
//       );

//     } else {

//       setSelectedSeats([
//         ...selectedSeats,
//         seatNumber
//       ]);
//     }
//   };

//   return (
//     <div
//       style={{
//         padding: "30px",
//         fontFamily: "Arial"
//       }}
//     >

//       <h1>Bus Seat Selection</h1>

//       {/* Legend */}

//       <div
//         style={{
//           display: "flex",
//           gap: "20px",
//           marginBottom: "20px"
//         }}
//       >

//         <div>
//           🟩 Available
//         </div>

//         <div>
//           🟥 Booked
//         </div>

//         <div>
//           🟦 Selected
//         </div>

//       </div>

//       {/* Seats */}

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 70px)",
//           gap: "15px",
//           width: "320px"
//         }}
//       >

//         {
//           Array.from(
//             { length: totalSeats },
//             (_, index) => {

//               const seatNumber = index + 1;

//               const isBooked =
//                 bookedSeats.includes(seatNumber);

//               const isSelected =
//                 selectedSeats.includes(seatNumber);

//               return (

//                 <button
//                   key={seatNumber}
//                   onClick={() =>
//                     handleSeatClick(seatNumber)
//                   }

//                   disabled={isBooked}

//                   style={{
//                     height: "50px",
//                     border: "none",
//                     borderRadius: "10px",
//                     cursor: isBooked
//                       ? "not-allowed"
//                       : "pointer",

//                     backgroundColor: isBooked
//                       ? "red"
//                       : isSelected
//                       ? "blue"
//                       : "green",

//                     color: "white",
//                     fontWeight: "bold"
//                   }}
//                 >

//                   {seatNumber}

//                 </button>
//               );
//             }
//           )
//         }

//       </div>

//       {/* Selected Seats */}

//       <div style={{ marginTop: "30px" }}>

//         <h2>
//           Selected Seats:
//         </h2>

//         <p>
//           {
//             selectedSeats.length > 0
//               ? selectedSeats.join(", ")
//               : "No seats selected"
//           }
//         </p>

//       </div>

//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function SeatSelection() {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const seats = Array.from({ length: 40 }, (_, index) => ({
//     id: index + 1,
//     booked: [3, 7, 12, 18, 25].includes(index + 1),
//   }));

//   const handleSeatClick = (seat) => {
//     if (seat.booked) return;

//     if (selectedSeats.includes(seat.id)) {
//       setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
//     } else {
//       setSelectedSeats([...selectedSeats, seat.id]);
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Bus Seat Selection</h2>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 70px)",
//           gap: "15px",
//           width: "max-content",
//           marginTop: "20px",
//         }}
//       >
//         {seats.map((seat, index) => {
//           const isSelected = selectedSeats.includes(seat.id);

//           return (
//             <button
//               key={seat.id}
//               onClick={() => handleSeatClick(seat)}
//               disabled={seat.booked}
//               style={{
//                 width: "60px",
//                 height: "60px",
//                 borderRadius: "10px",
//                 border: "none",
//                 cursor: seat.booked ? "not-allowed" : "pointer",
//                 backgroundColor: seat.booked
//                   ? "gray"
//                   : isSelected
//                   ? "green"
//                   : "white",
//                 color: seat.booked ? "white" : "black",
//                 boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
//                 fontWeight: "bold",
//               }}
//             >
//               {seat.id}
//             </button>
//           );
//         })}
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <h3>Selected Seats:</h3>
//         {selectedSeats.length > 0
//           ? selectedSeats.join(", ")
//           : "No seats selected"}
//       </div>

//       <div style={{ marginTop: "20px" }}>
//         <p>
//           <span
//             style={{
//               display: "inline-block",
//               width: "20px",
//               height: "20px",
//               backgroundColor: "white",
//               border: "1px solid black",
//               marginRight: "10px",
//             }}
//           ></span>
//           Available
//         </p>

//         <p>
//           <span
//             style={{
//               display: "inline-block",
//               width: "20px",
//               height: "20px",
//               backgroundColor: "green",
//               marginRight: "10px",
//             }}
//           ></span>
//           Selected
//         </p>

//         <p>
//           <span
//             style={{
//               display: "inline-block",
//               width: "20px",
//               height: "20px",
//               backgroundColor: "gray",
//               marginRight: "10px",
//             }}
//           ></span>
//           Booked
//         </p>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function SeatSelection() {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const seats = Array.from({ length: 40 }, (_, index) => ({
//     id: index + 1,
//     booked: [4, 8, 15, 22, 31].includes(index + 1),
//   }));

//   const handleSeatClick = (seat) => {
//     if (seat.booked) return;

//     if (selectedSeats.includes(seat.id)) {
//       setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
//     } else {
//       setSelectedSeats([...selectedSeats, seat.id]);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "linear-gradient(to right, #141e30, #243b55)",
//         padding: "30px",
//       }}
//     >
//       <div
//         style={{
//           background: "rgba(255,255,255,0.08)",
//           padding: "30px",
//           borderRadius: "25px",
//           backdropFilter: "blur(10px)",
//           boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
//           color: "white",
//         }}
//       >
//         <h1 style={{ textAlign: "center", marginBottom: "25px" }}>
//           3D Bus Seat Selection
//         </h1>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 80px)",
//             gap: "18px",
//             perspective: "1000px",
//           }}
//         >
//           {seats.map((seat) => {
//             const isSelected = selectedSeats.includes(seat.id);

//             return (
//               <button
//                 key={seat.id}
//                 onClick={() => handleSeatClick(seat)}
//                 disabled={seat.booked}
//                 style={{
//                   width: "70px",
//                   height: "70px",
//                   border: "none",
//                   borderRadius: "15px",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   cursor: seat.booked ? "not-allowed" : "pointer",
//                   transform: isSelected
//                     ? "rotateX(20deg) translateY(-5px)"
//                     : "rotateX(20deg)",
//                   transition: "0.3s ease",
//                   background: seat.booked
//                     ? "linear-gradient(145deg, #555, #333)"
//                     : isSelected
//                     ? "linear-gradient(145deg, #00c853, #009624)"
//                     : "linear-gradient(145deg, #ffffff, #d6d6d6)",
//                   color: seat.booked ? "white" : "black",
//                   boxShadow: seat.booked
//                     ? "inset 4px 4px 10px rgba(0,0,0,0.5)"
//                     : isSelected
//                     ? "0 10px 20px rgba(0,200,83,0.5)"
//                     : "8px 8px 15px rgba(0,0,0,0.4), -4px -4px 10px rgba(255,255,255,0.1)",
//                 }}
//               >
//                 {seat.id}
//               </button>
//             );
//           })}
//         </div>

//         <div style={{ marginTop: "30px" }}>
//           <h3>Selected Seats:</h3>
//           <p>
//             {selectedSeats.length > 0
//               ? selectedSeats.join(", ")
//               : "No seats selected"}
//           </p>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             gap: "20px",
//             marginTop: "25px",
//             flexWrap: "wrap",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <div
//               style={{
//                 width: "25px",
//                 height: "25px",
//                 borderRadius: "6px",
//                 background: "linear-gradient(145deg, #ffffff, #d6d6d6)",
//               }}
//             ></div>
//             <span>Available</span>
//           </div>

//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <div
//               style={{
//                 width: "25px",
//                 height: "25px",
//                 borderRadius: "6px",
//                 background: "linear-gradient(145deg, #00c853, #009624)",
//               }}
//             ></div>
//             <span>Selected</span>
//           </div>

//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <div
//               style={{
//                 width: "25px",
//                 height: "25px",
//                 borderRadius: "6px",
//                 background: "linear-gradient(145deg, #555, #333)",
//               }}
//             ></div>
//             <span>Booked</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef } from "react";

// const ROWS = 10;

// const initialSeats = (() => {
//   const booked = new Set(["1A","1B","3C","4D","5A","5B","6C","7A","8D","9B","10C"]);
//   const ladies = new Set(["1C","1D","2C","2D"]);
//   const seats = {};
//   for (let r = 1; r <= ROWS; r++) {
//     ["A","B","C","D"].forEach(col => {
//       const id = `${r}${col}`;
//       seats[id] = booked.has(id) ? "booked" : ladies.has(id) ? "ladies" : "available";
//     });
//   }
//   return seats;
// })();

// const COLORS = {
//   available: { base: "#1e6fa8", top: "#3db5ff", side: "#0d4a73", text: "#e0f4ff", border: "#5ecfff" },
//   selected:  { base: "#0a7c5c", top: "#00e6a0", side: "#054d39", text: "#ccfff0", border: "#00e6a0" },
//   booked:    { base: "#3a3a4a", top: "#5a5a6e", side: "#222230", text: "#888", border: "#4a4a5e" },
//   ladies:    { base: "#8a2357", top: "#f472b6", side: "#5b1239", text: "#ffe0f0", border: "#f472b6" },
// };

// function Seat3D({ id, status, isSelected, onClick }) {
//   const [hovered, setHovered] = useState(false);
//   const effectiveStatus = isSelected ? "selected" : status;
//   const c = COLORS[effectiveStatus];
//   const canClick = status !== "booked";

//   const lift = isSelected ? -6 : hovered && canClick ? -4 : 0;
//   const shadowBlur = isSelected ? 24 : hovered ? 16 : 8;
//   const shadowColor = isSelected ? "rgba(0,230,160,0.45)" : hovered && canClick ? "rgba(61,181,255,0.35)" : "rgba(0,0,0,0.5)";

//   const W = 52, H = 44, DEPTH = 10, R = 8;

//   return (
//     <div
//       onClick={canClick ? onClick : undefined}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         cursor: canClick ? "pointer" : "not-allowed",
//         transform: `translateY(${lift}px)`,
//         transition: "transform 0.18s ease, filter 0.18s ease",
//         filter: `drop-shadow(0 ${shadowBlur}px ${shadowBlur * 1.5}px ${shadowColor})`,
//         userSelect: "none",
//       }}
//       title={`Seat ${id} — ${effectiveStatus}`}
//     >
//       <svg width={W} height={H + DEPTH} viewBox={`0 0 ${W} ${H + DEPTH}`} style={{ display: "block" }}>
//         {/* Left side face */}
//         <path d={`M0,${R} Q0,0 ${R},0 L${R},${H} L0,${H+DEPTH} Z`} fill={c.side} />
//         {/* Bottom face */}
//         <path d={`M0,${H+DEPTH} L${R},${H} L${W-R},${H} L${W},${H+DEPTH} Z`} fill={c.base} />
//         {/* Right side face */}
//         <path d={`M${W-R},0 Q${W},0 ${W},${R} L${W},${H+DEPTH} L${W-R},${H} Z`} fill={c.side} />
//         {/* Top face */}
//         <rect x={0} y={0} width={W} height={H} rx={R} fill={c.top} />
//         {/* Seat cushion lines */}
//         <rect x={6} y={6} width={W-12} height={H*0.52} rx={4} fill={c.base} opacity="0.45" />
//         <rect x={6} y={H*0.62} width={W-12} height={H*0.25} rx={3} fill={c.base} opacity="0.35" />
//         {/* Border highlight */}
//         <rect x={1} y={1} width={W-2} height={H-2} rx={R-1} fill="none" stroke={c.border} strokeWidth={isSelected ? 2 : 1} opacity={isSelected ? 1 : 0.6} />
//         {/* Label */}
//         <text
//           x={W / 2} y={H / 2 + 1}
//           textAnchor="middle" dominantBaseline="middle"
//           fontSize={11} fontWeight="700"
//           fill={c.text}
//           fontFamily="'Courier New', monospace"
//           letterSpacing="0.5"
//         >{id}</text>
//         {/* Selected checkmark */}
//         {isSelected && (
//           <text x={W-10} y={10} fontSize={10} fill="#00e6a0" fontWeight="900" fontFamily="sans-serif">✓</text>
//         )}
//         {/* Ladies icon */}
//         {status === "ladies" && !isSelected && (
//           <text x={W-10} y={10} fontSize={9} fill="#f472b6" fontFamily="sans-serif">♀</text>
//         )}
//       </svg>
//     </div>
//   );
// }

// function DriverSeat() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
//       <svg width={52} height={54} viewBox="0 0 52 54" style={{ display: "block" }}>
//         <rect x={0} y={0} width={52} height={44} rx={8} fill="#2a2a3a" />
//         <rect x={1} y={1} width={50} height={42} rx={7} fill="none" stroke="#4a4a5e" strokeWidth={1} />
//         <text x={26} y={26} textAnchor="middle" dominantBaseline="middle" fontSize={22} fill="#5a5a6e">⊙</text>
//         <path d="M0,44 L8,34 L44,34 L52,44 Z" fill="#1a1a2a" />
//       </svg>
//       <span style={{ fontSize: 9, color: "#555", fontFamily: "monospace", letterSpacing: 1 }}>DRIVER</span>
//     </div>
//   );
// }

// export default function SeatSelection() {
//   const [seats, setSeats] = useState(initialSeats);
//   const [selected, setSelected] = useState(new Set());
//   const [toast, setToast] = useState("");
//   const toastTimer = useRef(null);

//   const showToast = (msg) => {
//     setToast(msg);
//     clearTimeout(toastTimer.current);
//     toastTimer.current = setTimeout(() => setToast(""), 2400);
//   };

//   const toggleSeat = (id) => {
//     setSelected(prev => {
//       const next = new Set(prev);
//       if (next.has(id)) { next.delete(id); }
//       else {
//         if (next.size >= 5) { showToast("Max 5 seats per booking"); return prev; }
//         next.add(id);
//         showToast(`Seat ${id} selected`);
//       }
//       return next;
//     });
//   };

//   const totalSelected = selected.size;
//   const fare = totalSelected * 250;

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#0a0a12",
//       backgroundImage: "radial-gradient(ellipse at 20% 10%, #0d1a2e 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, #0d1a1a 0%, transparent 60%)",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "32px 16px",
//       fontFamily: "'Courier New', monospace",
//     }}>
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: 32 }}>
//         <div style={{ fontSize: 11, letterSpacing: 6, color: "#3db5ff", marginBottom: 8, textTransform: "uppercase" }}>
//           ◈ Chennai Express ◈
//         </div>
//         <h1 style={{
//           fontSize: 28, fontWeight: 900, margin: 0, letterSpacing: 2,
//           background: "linear-gradient(135deg, #3db5ff, #00e6a0)",
//           WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//           textTransform: "uppercase",
//         }}>
//           Seat Selection
//         </h1>
//         <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginTop: 6 }}>
//           ROUTE: MAS → SBC · COACH B2
//         </div>
//       </div>

//       {/* Legend */}
//       <div style={{ display: "flex", gap: 20, marginBottom: 28, flexWrap: "wrap", justifyContent: "center" }}>
//         {[
//           { label: "Available", color: "#3db5ff" },
//           { label: "Selected", color: "#00e6a0" },
//           { label: "Booked", color: "#5a5a6e" },
//           { label: "Ladies", color: "#f472b6" },
//         ].map(l => (
//           <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
//             <div style={{ width: 14, height: 14, borderRadius: 3, background: l.color, boxShadow: `0 0 8px ${l.color}80` }} />
//             <span style={{ fontSize: 11, color: "#888", letterSpacing: 1 }}>{l.label.toUpperCase()}</span>
//           </div>
//         ))}
//       </div>

//       {/* Bus body */}
//       <div style={{
//         background: "linear-gradient(180deg, #12121e 0%, #0e0e1a 100%)",
//         border: "1px solid #1e2a3a",
//         borderRadius: 24,
//         padding: "24px 28px",
//         boxShadow: "0 0 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(61,181,255,0.08)",
//         width: "100%",
//         maxWidth: 440,
//         position: "relative",
//       }}>
//         {/* Bus top chrome strip */}
//         <div style={{
//           position: "absolute", top: 0, left: "10%", right: "10%", height: 2,
//           background: "linear-gradient(90deg, transparent, #3db5ff55, #00e6a055, transparent)",
//           borderRadius: 1,
//         }} />

//         {/* Driver row */}
//         <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20, paddingBottom: 16, borderBottom: "1px dashed #1e2a3a" }}>
//           <DriverSeat />
//         </div>

//         {/* Column headers */}
//         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, paddingLeft: 24 }}>
//           {["A","B","","C","D"].map((h, i) => (
//             <div key={i} style={{ width: h ? 52 : 20, textAlign: "center", fontSize: 10, color: "#2a4a6a", letterSpacing: 2, fontWeight: 700 }}>{h}</div>
//           ))}
//         </div>

//         {/* Seat rows */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//           {Array.from({ length: ROWS }, (_, i) => i + 1).map(row => (
//             <div key={row} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <div style={{ width: 16, fontSize: 10, color: "#2a4a6a", fontWeight: 700, textAlign: "center", flexShrink: 0 }}>{row}</div>
//               {["A","B",null,"C","D"].map((col, ci) => col === null ? (
//                 <div key={ci} style={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, transparent, #1e2a3a, transparent)" }} />
//                 </div>
//               ) : (
//                 <Seat3D
//                   key={col}
//                   id={`${row}${col}`}
//                   status={seats[`${row}${col}`]}
//                   isSelected={selected.has(`${row}${col}`)}
//                   onClick={() => toggleSeat(`${row}${col}`)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Bottom chrome */}
//         <div style={{
//           position: "absolute", bottom: 0, left: "10%", right: "10%", height: 2,
//           background: "linear-gradient(90deg, transparent, #3db5ff33, transparent)",
//           borderRadius: 1,
//         }} />
//       </div>

//       {/* Summary card */}
//       <div style={{
//         width: "100%", maxWidth: 440, marginTop: 20,
//         background: "#0e0e1a",
//         border: "1px solid #1e2a3a",
//         borderRadius: 16,
//         padding: "16px 24px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: 16,
//         flexWrap: "wrap",
//       }}>
//         <div>
//           <div style={{ fontSize: 10, color: "#3db5ff", letterSpacing: 3, marginBottom: 4 }}>SELECTED</div>
//           <div style={{ fontSize: 14, color: "#e0f4ff", letterSpacing: 1, minHeight: 20 }}>
//             {totalSelected === 0 ? <span style={{ color: "#333" }}>— none —</span> : [...selected].sort().join("  ·  ")}
//           </div>
//         </div>
//         <div style={{ textAlign: "right" }}>
//           <div style={{ fontSize: 10, color: "#00e6a0", letterSpacing: 3, marginBottom: 4 }}>FARE</div>
//           <div style={{ fontSize: 20, fontWeight: 900, color: totalSelected > 0 ? "#00e6a0" : "#333" }}>
//             ₹{fare.toLocaleString()}
//           </div>
//         </div>
//       </div>

//       {/* Confirm button */}
//       <button
//         disabled={totalSelected === 0}
//         style={{
//           marginTop: 16,
//           width: "100%", maxWidth: 440,
//           padding: "14px 0",
//           borderRadius: 12,
//           border: "none",
//           background: totalSelected > 0
//             ? "linear-gradient(135deg, #0a7c5c, #00e6a0)"
//             : "#1a1a2a",
//           color: totalSelected > 0 ? "#001a10" : "#333",
//           fontSize: 13,
//           fontWeight: 900,
//           letterSpacing: 4,
//           cursor: totalSelected > 0 ? "pointer" : "not-allowed",
//           textTransform: "uppercase",
//           transition: "all 0.2s",
//           boxShadow: totalSelected > 0 ? "0 0 32px rgba(0,230,160,0.3)" : "none",
//           fontFamily: "'Courier New', monospace",
//         }}
//       >
//         {totalSelected > 0 ? `Confirm ${totalSelected} Seat${totalSelected > 1 ? "s" : ""} →` : "Select a Seat"}
//       </button>

//       {/* Toast */}
//       <div style={{
//         marginTop: 14,
//         fontSize: 12,
//         letterSpacing: 2,
//         color: "#00e6a0",
//         minHeight: 20,
//         transition: "opacity 0.3s",
//         opacity: toast ? 1 : 0,
//         textTransform: "uppercase",
//       }}>
//         ◆ {toast}
//       </div>
//     </div>
//   );
// }

//chat gpt
// import React, { useState } from "react";
// // import { Armchair, SteeringWheel } from "lucide-react";
// import { Armchair, Bus } from "lucide-react";
// export default function SeatSelection() {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const seats = Array.from({ length: 40 }, (_, index) => ({
//     id: index + 1,
//     booked: [2, 5, 9, 14, 18, 27, 33].includes(index + 1),
//   }));

//   // const handleSeatClick = (seat) => {
//   //   if (seat.booked) return;

//   //   if (selectedSeats.includes(seat.id)) {
//   //     setSelectedSeats(selectedSeats.filter((id) => id !== seat.id));
//   //   } else {
//   //     setSelectedSeats([...selectedSeats, seat.id]);
//   //   }
//   // };
//   const handleSeatClick = (seat) => {
//   if (seat.booked) return;

//   setSelectedSeats((prev) => {
//     if (prev.includes(seat.id)) {
//       return prev.filter((id) => id !== seat.id);
//     } else {
//       return [...prev, seat.id];
//     }
//   });
// };

//   return (
//     <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden">
//       {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,black)]"></div> */}
//     <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-xl"></div>
//       <div className="relative w-full max-w-5xl rounded-[40px] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl p-8">
//         <div className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-4xl font-bold text-white">
//               Luxury Bus Seats
//             </h1>
//             <p className="text-gray-300 mt-2">
//               Select your comfortable seats
//             </p>
//           </div>

//           <div className="bg-white/10 p-5 rounded-2xl border border-white/10 shadow-xl">
//         <Bus size={40} className="text-white" />
//         </div>
//         </div>

//         <div className="grid grid-cols-5 gap-y-7 gap-x-5 justify-items-center">
//           {/* {seats.map((seat, index) => {
//             const isSelected = selectedSeats.includes(seat.id);

//             return (
//               <div
//                 key={seat.id}
//                 className={`
//                   relative group transition-all duration-300
//                   ${index % 5 === 2 ? "ml-10" : ""}
//                 `}
//               >
//                 <button
//                   onClick={() => handleSeatClick(seat)}
//                   disabled={seat.booked}
//                   className={`
//                     w-20 h-24 rounded-3xl flex flex-col items-center justify-center
//                     transition-all duration-300 transform
//                     hover:scale-110 hover:-translate-y-2
//                     active:scale-95
//                     border
//                     ${
//                       seat.booked
//                         ? "bg-gray-700 border-gray-600 cursor-not-allowed"
//                         : isSelected
//                         ? "bg-gradient-to-br from-green-400 to-emerald-700 border-green-300 shadow-[0_15px_30px_rgba(34,197,94,0.5)]"
//                         : "bg-gradient-to-br from-slate-200 to-slate-400 border-white/30 shadow-[0_12px_25px_rgba(255,255,255,0.15)]"
//                     }
//                   `}
//                   // style={{
//                   //   transform: isSelected
//                   //     ? "perspective(1000px) rotateX(18deg)"
//                   //     : "perspective(1000px) rotateX(18deg)",
//                   // }}
//                 >
//                   <Armchair
//                     size={34}
//                     className={`
//                       ${seat.booked ? "text-gray-400" : "text-black"}
//                     `}
//                   />

//                   <span
//                     className={`
//                       text-sm font-bold mt-1
//                       ${seat.booked ? "text-gray-300" : "text-black"}
//                     `}
//                   >
//                     {seat.id}
//                   </span>
//                 </button>

//                 {!seat.booked && (
//                   <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10 blur-xl"></div>
//                 )}
//               </div>
//             );
//           })} */}
//           {seats.map((seat) => {
//   const isSelected = selectedSeats.includes(seat.id);

//   return (
//     <button
//       key={seat.id}
//       onClick={() => handleSeatClick(seat)}
//       disabled={seat.booked}
//       className={`
//         w-20 h-24 rounded-3xl m-2
//         flex flex-col items-center justify-center
//         text-lg font-bold transition-all duration-300

//         ${
//           seat.booked
//             ? "bg-gray-600 text-white cursor-not-allowed"
//             : isSelected
//             ? "bg-green-500 text-white scale-110"
//             : "bg-white text-black hover:bg-blue-200"
//         }
//       `}
//     >
//       <span>{seat.id}</span>
//     </button>
//   );
// })}
//         </div>

//         <div className="mt-12 grid md:grid-cols-2 gap-8">
//           <div className="bg-white/10 border border-white/10 rounded-3xl p-6">
//             <h2 className="text-2xl font-semibold text-white mb-4">
//               Seat Status
//             </h2>

//             <div className="space-y-4 text-white">
//               <div className="flex items-center gap-4">
//                 <div className="w-6 h-6 rounded-lg bg-slate-300"></div>
//                 <span>Available</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-6 h-6 rounded-lg bg-green-500"></div>
//                 <span>Selected</span>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="w-6 h-6 rounded-lg bg-gray-600"></div>
//                 <span>Booked</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/10 border border-white/10 rounded-3xl p-6 text-white">
//             <h2 className="text-2xl font-semibold mb-4">
//               Booking Summary
//             </h2>

//             <div className="space-y-3 text-lg">
//               <p>
//                 Seats: 
//                 <span className="font-bold text-green-400 ml-2">
//                   {selectedSeats.length > 0
//                     ? selectedSeats.join(", ")
//                     : "None"}
//                 </span>
//               </p>

//               <p>
//                 Total Seats:
//                 <span className="font-bold ml-2">
//                   {selectedSeats.length}
//                 </span>
//               </p>

//               <p>
//                 Total Price:
//                 <span className="font-bold text-yellow-400 ml-2">
//                   ₹{selectedSeats.length * 799}
//                 </span>
//               </p>
//             </div>

//             <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-600 text-black font-bold text-lg hover:scale-[1.02] transition duration-300 shadow-2xl">
//               Continue Booking
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef } from "react";

// const ROWS = 10;

// const initialSeats = (() => {
//   const booked = new Set(["1A","1B","3C","4D","5A","5B","6C","7A","8D","9B","10C"]);
//   const ladies = new Set(["1C","1D","2C","2D"]);
//   const seats = {};
//   for (let r = 1; r <= ROWS; r++) {
//     ["A","B","C","D"].forEach(col => {
//       const id = `${r}${col}`;
//       seats[id] = booked.has(id) ? "booked" : ladies.has(id) ? "ladies" : "available";
//     });
//   }
//   return seats;
// })();

// const COLORS = {
//   available: { base: "#1e6fa8", top: "#3db5ff", side: "#0d4a73", text: "#e0f4ff", border: "#5ecfff" },
//   selected:  { base: "#0a7c5c", top: "#00e6a0", side: "#054d39", text: "#ccfff0", border: "#00e6a0" },
//   booked:    { base: "#3a3a4a", top: "#5a5a6e", side: "#222230", text: "#888", border: "#4a4a5e" },
//   ladies:    { base: "#8a2357", top: "#f472b6", side: "#5b1239", text: "#ffe0f0", border: "#f472b6" },
// };

// function Seat3D({ id, status, isSelected, onClick }) {
//   const [hovered, setHovered] = useState(false);
//   const effectiveStatus = isSelected ? "selected" : status;
//   const c = COLORS[effectiveStatus];
//   const canClick = status !== "booked";

//   const lift = isSelected ? -6 : hovered && canClick ? -4 : 0;
//   const shadowBlur = isSelected ? 24 : hovered ? 16 : 8;
//   const shadowColor = isSelected ? "rgba(0,230,160,0.45)" : hovered && canClick ? "rgba(61,181,255,0.35)" : "rgba(0,0,0,0.5)";

//   const W = 52, H = 44, DEPTH = 10, R = 8;

//   return (
//     <div
//       onClick={canClick ? onClick : undefined}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         cursor: canClick ? "pointer" : "not-allowed",
//         transform: `translateY(${lift}px)`,
//         transition: "transform 0.18s ease, filter 0.18s ease",
//         filter: `drop-shadow(0 ${shadowBlur}px ${shadowBlur * 1.5}px ${shadowColor})`,
//         userSelect: "none",
//       }}
//       title={`Seat ${id} — ${effectiveStatus}`}
//     >
//       <svg width={W} height={H + DEPTH} viewBox={`0 0 ${W} ${H + DEPTH}`} style={{ display: "block" }}>
//         {/* Left side face */}
//         <path d={`M0,${R} Q0,0 ${R},0 L${R},${H} L0,${H+DEPTH} Z`} fill={c.side} />
//         {/* Bottom face */}
//         <path d={`M0,${H+DEPTH} L${R},${H} L${W-R},${H} L${W},${H+DEPTH} Z`} fill={c.base} />
//         {/* Right side face */}
//         <path d={`M${W-R},0 Q${W},0 ${W},${R} L${W},${H+DEPTH} L${W-R},${H} Z`} fill={c.side} />
//         {/* Top face */}
//         <rect x={0} y={0} width={W} height={H} rx={R} fill={c.top} />
//         {/* Seat cushion lines */}
//         <rect x={6} y={6} width={W-12} height={H*0.52} rx={4} fill={c.base} opacity="0.45" />
//         <rect x={6} y={H*0.62} width={W-12} height={H*0.25} rx={3} fill={c.base} opacity="0.35" />
//         {/* Border highlight */}
//         <rect x={1} y={1} width={W-2} height={H-2} rx={R-1} fill="none" stroke={c.border} strokeWidth={isSelected ? 2 : 1} opacity={isSelected ? 1 : 0.6} />
//         {/* Label */}
//         <text
//           x={W / 2} y={H / 2 + 1}
//           textAnchor="middle" dominantBaseline="middle"
//           fontSize={11} fontWeight="700"
//           fill={c.text}
//           fontFamily="'Courier New', monospace"
//           letterSpacing="0.5"
//         >{id}</text>
//         {/* Selected checkmark */}
//         {isSelected && (
//           <text x={W-10} y={10} fontSize={10} fill="#00e6a0" fontWeight="900" fontFamily="sans-serif">✓</text>
//         )}
//         {/* Ladies icon */}
//         {status === "ladies" && !isSelected && (
//           <text x={W-10} y={10} fontSize={9} fill="#f472b6" fontFamily="sans-serif">♀</text>
//         )}
//       </svg>
//     </div>
//   );
// }

// function DriverSeat() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
//       <svg width={52} height={54} viewBox="0 0 52 54" style={{ display: "block" }}>
//         <rect x={0} y={0} width={52} height={44} rx={8} fill="#2a2a3a" />
//         <rect x={1} y={1} width={50} height={42} rx={7} fill="none" stroke="#4a4a5e" strokeWidth={1} />
//         <text x={26} y={26} textAnchor="middle" dominantBaseline="middle" fontSize={22} fill="#5a5a6e">⊙</text>
//         <path d="M0,44 L8,34 L44,34 L52,44 Z" fill="#1a1a2a" />
//       </svg>
//       <span style={{ fontSize: 9, color: "#555", fontFamily: "monospace", letterSpacing: 1 }}>DRIVER</span>
//     </div>
//   );
// }

// export default function BusSeatSelector3D() {
//   const [seats, setSeats] = useState(initialSeats);
//   const [selected, setSelected] = useState(new Set());
//   const [toast, setToast] = useState("");
//   const toastTimer = useRef(null);

//   const showToast = (msg) => {
//     setToast(msg);
//     clearTimeout(toastTimer.current);
//     toastTimer.current = setTimeout(() => setToast(""), 2400);
//   };

//   const toggleSeat = (id) => {
//     setSelected(prev => {
//       const next = new Set(prev);
//       if (next.has(id)) { next.delete(id); }
//       else {
//         if (next.size >= 5) { showToast("Max 5 seats per booking"); return prev; }
//         next.add(id);
//         showToast(`Seat ${id} selected`);
//       }
//       return next;
//     });
//   };

//   const totalSelected = selected.size;
//   const fare = totalSelected * 250;

//   return (
//     <div style={{
//       minHeight: "100vh",
//       background: "#0a0a12",
//       backgroundImage: "radial-gradient(ellipse at 20% 10%, #0d1a2e 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, #0d1a1a 0%, transparent 60%)",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       padding: "32px 16px",
//       fontFamily: "'Courier New', monospace",
//     }}>
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: 32 }}>
//         <div style={{ fontSize: 11, letterSpacing: 6, color: "#3db5ff", marginBottom: 8, textTransform: "uppercase" }}>
//           ◈ Chennai Express ◈
//         </div>
//         <h1 style={{
//           fontSize: 28, fontWeight: 900, margin: 0, letterSpacing: 2,
//           background: "linear-gradient(135deg, #3db5ff, #00e6a0)",
//           WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
//           textTransform: "uppercase",
//         }}>
//           Seat Selection
//         </h1>
//         <div style={{ fontSize: 11, color: "#444", letterSpacing: 3, marginTop: 6 }}>
//           ROUTE: MAS → SBC · COACH B2
//         </div>
//       </div>

//       {/* Legend */}
//       <div style={{ display: "flex", gap: 20, marginBottom: 28, flexWrap: "wrap", justifyContent: "center" }}>
//         {[
//           { label: "Available", color: "#3db5ff" },
//           { label: "Selected", color: "#00e6a0" },
//           { label: "Booked", color: "#5a5a6e" },
//           { label: "Ladies", color: "#f472b6" },
//         ].map(l => (
//           <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
//             <div style={{ width: 14, height: 14, borderRadius: 3, background: l.color, boxShadow: `0 0 8px ${l.color}80` }} />
//             <span style={{ fontSize: 11, color: "#888", letterSpacing: 1 }}>{l.label.toUpperCase()}</span>
//           </div>
//         ))}
//       </div>

//       {/* Bus body */}
//       <div style={{
//         background: "linear-gradient(180deg, #12121e 0%, #0e0e1a 100%)",
//         border: "1px solid #1e2a3a",
//         borderRadius: 24,
//         padding: "24px 28px",
//         boxShadow: "0 0 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(61,181,255,0.08)",
//         width: "100%",
//         maxWidth: 440,
//         position: "relative",
//       }}>
//         {/* Bus top chrome strip */}
//         <div style={{
//           position: "absolute", top: 0, left: "10%", right: "10%", height: 2,
//           background: "linear-gradient(90deg, transparent, #3db5ff55, #00e6a055, transparent)",
//           borderRadius: 1,
//         }} />

//         {/* Driver row */}
//         <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20, paddingBottom: 16, borderBottom: "1px dashed #1e2a3a" }}>
//           <DriverSeat />
//         </div>

//         {/* Column headers */}
//         <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, paddingLeft: 24 }}>
//           {["A","B","","C","D"].map((h, i) => (
//             <div key={i} style={{ width: h ? 52 : 20, textAlign: "center", fontSize: 10, color: "#2a4a6a", letterSpacing: 2, fontWeight: 700 }}>{h}</div>
//           ))}
//         </div>

//         {/* Seat rows */}
//         <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//           {Array.from({ length: ROWS }, (_, i) => i + 1).map(row => (
//             <div key={row} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//               <div style={{ width: 16, fontSize: 10, color: "#2a4a6a", fontWeight: 700, textAlign: "center", flexShrink: 0 }}>{row}</div>
//               {["A","B",null,"C","D"].map((col, ci) => col === null ? (
//                 <div key={ci} style={{ width: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
//                   <div style={{ width: 1, height: 36, background: "linear-gradient(180deg, transparent, #1e2a3a, transparent)" }} />
//                 </div>
//               ) : (
//                 <Seat3D
//                   key={col}
//                   id={`${row}${col}`}
//                   status={seats[`${row}${col}`]}
//                   isSelected={selected.has(`${row}${col}`)}
//                   onClick={() => toggleSeat(`${row}${col}`)}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         {/* Bottom chrome */}
//         <div style={{
//           position: "absolute", bottom: 0, left: "10%", right: "10%", height: 2,
//           background: "linear-gradient(90deg, transparent, #3db5ff33, transparent)",
//           borderRadius: 1,
//         }} />
//       </div>

//       {/* Summary card */}
//       <div style={{
//         width: "100%", maxWidth: 440, marginTop: 20,
//         background: "#0e0e1a",
//         border: "1px solid #1e2a3a",
//         borderRadius: 16,
//         padding: "16px 24px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: 16,
//         flexWrap: "wrap",
//       }}>
//         <div>
//           <div style={{ fontSize: 10, color: "#3db5ff", letterSpacing: 3, marginBottom: 4 }}>SELECTED</div>
//           <div style={{ fontSize: 14, color: "#e0f4ff", letterSpacing: 1, minHeight: 20 }}>
//             {totalSelected === 0 ? <span style={{ color: "#333" }}>— none —</span> : [...selected].sort().join("  ·  ")}
//           </div>
//         </div>
//         <div style={{ textAlign: "right" }}>
//           <div style={{ fontSize: 10, color: "#00e6a0", letterSpacing: 3, marginBottom: 4 }}>FARE</div>
//           <div style={{ fontSize: 20, fontWeight: 900, color: totalSelected > 0 ? "#00e6a0" : "#333" }}>
//             ₹{fare.toLocaleString()}
//           </div>
//         </div>
//       </div>

//       {/* Confirm button */}
//       <button
//         disabled={totalSelected === 0}
//         style={{
//           marginTop: 16,
//           width: "100%", maxWidth: 440,
//           padding: "14px 0",
//           borderRadius: 12,
//           border: "none",
//           background: totalSelected > 0
//             ? "linear-gradient(135deg, #0a7c5c, #00e6a0)"
//             : "#1a1a2a",
//           color: totalSelected > 0 ? "#001a10" : "#333",
//           fontSize: 13,
//           fontWeight: 900,
//           letterSpacing: 4,
//           cursor: totalSelected > 0 ? "pointer" : "not-allowed",
//           textTransform: "uppercase",
//           transition: "all 0.2s",
//           boxShadow: totalSelected > 0 ? "0 0 32px rgba(0,230,160,0.3)" : "none",
//           fontFamily: "'Courier New', monospace",
//         }}
//       >
//         {totalSelected > 0 ? `Confirm ${totalSelected} Seat${totalSelected > 1 ? "s" : ""} →` : "Select a Seat"}
//       </button>

//       {/* Toast */}
//       <div style={{
//         marginTop: 14,
//         fontSize: 12,
//         letterSpacing: 2,
//         color: "#00e6a0",
//         minHeight: 20,
//         transition: "opacity 0.3s",
//         opacity: toast ? 1 : 0,
//         textTransform: "uppercase",
//       }}>
//         ◆ {toast}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const seatsData = [
//   ["1A", "1B", "1C", "1D"],
//   ["2A", "2B", "2C", "2D"],
//   ["3A", "3B", "3C", "3D"],
//   ["4A", "4B", "4C", "4D"],
//   ["5A", "5B", "5C", "5D"],
//   ["6A", "6B", "6C", "6D"],
//   ["7A", "7B", "7C", "7D"],
//   ["8A", "8B", "8C", "8D"],
//   ["9A", "9B", "9C", "9D"],
//   ["10A", "10B", "10C", "10D"],
//   ["11A", "11B", "11C", "11D"],
// ];

// const bookedSeats = ["3C", "3D", "5A", "7A"];
// const ladiesSeats = ["1C", "1D", "9B"];

// export default function SeatSelection() {
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (seat) => {
//     if (bookedSeats.includes(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter((s) => s !== seat)
//       );
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const getSeatColor = (seat) => {
//     if (bookedSeats.includes(seat)) {
//       return "#222";
//     }

//     if (selectedSeats.includes(seat)) {
//       return "#00ff88";
//     }

//     if (ladiesSeats.includes(seat)) {
//       return "#ff4fd8";
//     }

//     return "#1976ff";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "radial-gradient(circle at top,#091428,#02040b)",
//         color: "white",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: 30,
//         fontFamily: "sans-serif",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: 1200,
//           display: "grid",
//           gridTemplateColumns: "250px 1fr 320px",
//           gap: 30,
//         }}
//       >
//         {/* LEFT PANEL */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.04)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: 25,
//             padding: 25,
//             backdropFilter: "blur(20px)",
//           }}
//         >
//           <h2
//             style={{
//               marginBottom: 25,
//               color: "#4db8ff",
//             }}
//           >
//             Legend
//           </h2>

//           {[
//             ["Available", "#1976ff"],
//             ["Selected", "#00ff88"],
//             ["Booked", "#222"],
//             ["Ladies", "#ff4fd8"],
//           ].map(([name, color]) => (
//             <div
//               key={name}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginBottom: 20,
//                 gap: 12,
//               }}
//             >
//               <div
//                 style={{
//                   width: 22,
//                   height: 22,
//                   borderRadius: 6,
//                   background: color,
//                   boxShadow: `0 0 15px ${color}`,
//                 }}
//               />

//               <span>{name}</span>
//             </div>
//           ))}
//         </div>

//         {/* CENTER BUS */}
//         <div
//           style={{
//             background:
//               "linear-gradient(to bottom,#10192f,#060b16)",
//             borderRadius: 60,
//             padding: 35,
//             position: "relative",
//             overflow: "hidden",
//             border: "2px solid rgba(255,255,255,0.05)",
//             boxShadow:
//               "0 0 80px rgba(0,0,0,0.7)",
//           }}
//         >
//           {/* SIDE LIGHTS */}
//           <div
//             style={{
//               position: "absolute",
//               left: 10,
//               top: 0,
//               bottom: 0,
//               width: 5,
//               background:
//                 "linear-gradient(to bottom,#00bfff,#0044ff)",
//               boxShadow:
//                 "0 0 30px #00bfff",
//             }}
//           />

//           <div
//             style={{
//               position: "absolute",
//               right: 10,
//               top: 0,
//               bottom: 0,
//               width: 5,
//               background:
//                 "linear-gradient(to bottom,#00bfff,#0044ff)",
//               boxShadow:
//                 "0 0 30px #00bfff",
//             }}
//           />

//           {/* DRIVER */}
//           <div
//             style={{
//               textAlign: "center",
//               marginBottom: 30,
//               color: "#4db8ff",
//               fontWeight: "bold",
//               letterSpacing: 5,
//             }}
//           >
//             COCKPIT
//           </div>

//           {/* SEATS */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 18,
//             }}
//           >
//             {seatsData.map((row, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns:
//                     "70px 70px 60px 70px 70px",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   gap: 10,
//                 }}
//               >
//                 {/* LEFT */}
//                 {row.slice(0, 2).map((seat) => (
//                   <Seat
//                     key={seat}
//                     seat={seat}
//                     color={getSeatColor(seat)}
//                     selected={selectedSeats.includes(seat)}
//                     booked={bookedSeats.includes(seat)}
//                     onClick={() => toggleSeat(seat)}
//                   />
//                 ))}

//                 {/* AISLE */}
//                 <div
//                   style={{
//                     height: 80,
//                     borderRadius: 20,
//                     background:
//                       "linear-gradient(to bottom,#0f172a,#020617)",
//                     border:
//                       "1px solid rgba(255,255,255,0.04)",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     color: "#4db8ff",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {index + 1}
//                 </div>

//                 {/* RIGHT */}
//                 {row.slice(2).map((seat) => (
//                   <Seat
//                     key={seat}
//                     seat={seat}
//                     color={getSeatColor(seat)}
//                     selected={selectedSeats.includes(seat)}
//                     booked={bookedSeats.includes(seat)}
//                     onClick={() => toggleSeat(seat)}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.04)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: 25,
//             padding: 25,
//             backdropFilter: "blur(20px)",
//           }}
//         >
//           <h2
//             style={{
//               color: "#00ff88",
//               marginBottom: 30,
//             }}
//           >
//             Your Booking
//           </h2>

//           <div
//             style={{
//               marginBottom: 20,
//             }}
//           >
//             <div
//               style={{
//                 color: "#777",
//                 marginBottom: 10,
//               }}
//             >
//               Selected Seats
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 gap: 10,
//                 flexWrap: "wrap",
//               }}
//             >
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   style={{
//                     background: "#00ff88",
//                     color: "black",
//                     padding: "10px 16px",
//                     borderRadius: 10,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             style={{
//               marginTop: 40,
//             }}
//           >
//             <div
//               style={{
//                 color: "#777",
//                 marginBottom: 8,
//               }}
//             >
//               Total Amount
//             </div>

//             <div
//               style={{
//                 fontSize: 40,
//                 fontWeight: "bold",
//                 color: "#00ff88",
//               }}
//             >
//               ₹{selectedSeats.length * 450}
//             </div>
//           </div>

//           <button
//             style={{
//               width: "100%",
//               marginTop: 40,
//               padding: 18,
//               border: "none",
//               borderRadius: 18,
//               background:
//                 "linear-gradient(to right,#00ff88,#00bfff)",
//               color: "black",
//               fontWeight: "bold",
//               fontSize: 18,
//               cursor: "pointer",
//               boxShadow:
//                 "0 0 30px rgba(0,255,136,0.4)",
//             }}
//           >
//             Proceed To Pay →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         width: 70,
//         height: 80,
//         borderRadius: 20,
//         background: color,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         fontWeight: "bold",
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",
//         transition: "0.3s",
//         transform: selected
//           ? "translateY(-6px) scale(1.05)"
//           : "translateY(0px)",
//         boxShadow: `0 0 25px ${color}`,
//         border: "2px solid rgba(255,255,255,0.08)",
//         position: "relative",
//       }}
//     >
//       {/* HEADREST */}
//       <div
//         style={{
//           position: "absolute",
//           top: 8,
//           width: 40,
//           height: 10,
//           borderRadius: 10,
//           background: "rgba(255,255,255,0.15)",
//         }}
//       />

//       {/* ARM RESTS */}
//       <div
//         style={{
//           position: "absolute",
//           left: -4,
//           top: 20,
//           width: 6,
//           height: 35,
//           borderRadius: 10,
//           background: "rgba(255,255,255,0.12)",
//         }}
//       />

//       <div
//         style={{
//           position: "absolute",
//           right: -4,
//           top: 20,
//           width: 6,
//           height: 35,
//           borderRadius: 10,
//           background: "rgba(255,255,255,0.12)",
//         }}
//       />

//       {seat}
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {useLocation} from "react-router-dom";

// const rows = 12;

// const bookedSeats = ["2C", "3D", "5A", "8B"];
// const ladiesSeats = ["1A", "1B", "6D"];
// export default function SeatSelection() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   let {from,to,departure,type} = location.state.bus;
//   let price = location.state.bus.price;
//   console.log(price)
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeat = (seat) => {
//     if (bookedSeats.includes(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter((s) => s !== seat)
//       );
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//     }
//   };

//   const seatColor = (seat) => {
//     if (bookedSeats.includes(seat)) return "#2b2b35";

//     if (selectedSeats.includes(seat))
//       return "#00ffb3";

//     if (ladiesSeats.includes(seat))
//       return "#ff4fd8";

//     return "#1da1ff";
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "radial-gradient(circle at top,#0f172a,#020617 70%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         overflow: "hidden",
//         padding: 30,
//         fontFamily: "sans-serif",
//         position: "relative",
//       }}
//     >
//       {/* BACKGROUND GLOW */}
//       <div
//         style={{
//           position: "absolute",
//           width: 600,
//           height: 600,
//           borderRadius: "50%",
//           background: "rgba(0,255,179,0.08)",
//           filter: "blur(120px)",
//           top: -200,
//           left: -200,
//         }}
//       />

//       <div
//         style={{
//           width: "100%",
//           maxWidth: 1200,
//           display: "grid",
//           gridTemplateColumns: "260px 1fr 300px",
//           gap: 25,
//           zIndex: 2,
//         }}
//       >
//         {/* LEFT INFO */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             borderRadius: 30,
//             padding: 25,
//             backdropFilter: "blur(25px)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             boxShadow:
//               "0 0 40px rgba(0,0,0,0.5)",
//           }}
//         >
//           <h2
//             style={{
//               color: "#38bdf8",
//               marginBottom: 25,
//             }}
//           >
//             Flight Details
//           </h2>

//           <div style={{ color: "#aaa", lineHeight: 2 }}>
//             <span>✈ {from} → {to}</span>
//             {/* <div>🚌 Chennai → Bangalore</div> */}
//             {/* <div>🛫 </div> */}
//             <div>🕒 {departure}</div>
//             <div>💺 {type}</div>
//           </div>

//           <div
//             style={{
//               marginTop: 40,
//             }}
//           >
//             {[
//               ["Available", "#1da1ff"],
//               ["Selected", "#00ffb3"],
//               ["Booked", "#2b2b35"],
//               ["Ladies", "#ff4fd8"],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: 10,
//                   marginBottom: 18,
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 20,
//                     height: 20,
//                     borderRadius: 6,
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span style={{ color: "#ddd" }}>
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* AIRCRAFT */}
//         <div
//           style={{
//             background:
//               "linear-gradient(180deg,#111827,#020617)",

//             borderRadius: "90px",

//             padding: "50px 45px",

//             position: "relative",

//             overflow: "hidden",

//             boxShadow:
//               "0 0 120px rgba(0,0,0,0.85)",

//             border:
//               "1px solid rgba(255,255,255,0.08)",
//           }}
//         >
//           {/* AIRCRAFT WINDOWS */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: 35,
//             }}
//           >
//             {Array.from({ length: 9 }).map((_, i) => (
//               <div
//                 key={i}
//                 style={{
//                   width: 34,
//                   height: 14,
//                   borderRadius: 20,
//                   background:
//                     "linear-gradient(to bottom,#38bdf8,#0ea5e9)",

//                   boxShadow:
//                     "0 0 20px rgba(56,189,248,0.55)",
//                 }}
//               />
//             ))}
//           </div>

         
// <div
//   style={{
//     display: "flex",
//     justifyContent: "right",
//     marginBottom: 40,
//   }}
// >
//   <div
//     style={{
//       width: 100,
//       height: 130,
//       position: "relative",

//       transform:
//         "perspective(1000px) rotateX(10deg)",

//       filter:
//         "drop-shadow(0 25px 30px rgba(0,0,0,0.6))",
//     }}
//   >
//     {/* Seat Main */}
//     <div
//       style={{
//         position: "absolute",
//         inset: 0,

//         borderRadius: 30,

//         background:
//           "linear-gradient(145deg,#f59e0b,#78350f)",

//         border:
//           "1px solid rgba(255,255,255,0.15)",

//         overflow: "hidden",

//         boxShadow:
//           "0 0 30px rgba(245,158,11,0.35)",
//       }}
//     >
//       {/* Gloss */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,

//           background:
//             "linear-gradient(120deg,rgba(255,255,255,0.25),transparent 35%,transparent 70%,rgba(255,255,255,0.08))",
//         }}
//       />

//       {/* Upper Cushion */}
//       <div
//         style={{
//           position: "absolute",
//           top: 18,
//           left: 12,
//           right: 12,
//           height: 50,

//           borderRadius: 20,

//           background:
//             "linear-gradient(to bottom,rgba(255,255,255,0.25),rgba(0,0,0,0.3))",
//         }}
//       />

//       {/* Lower Cushion */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 14,
//           left: 12,
//           right: 12,
//           height: 30,

//           borderRadius: 16,

//           background:
//             "linear-gradient(to bottom,rgba(255,255,255,0.2),rgba(0,0,0,0.35))",
//         }}
//       />

//       {/* Left Arm */}
//       <div
//         style={{
//           position: "absolute",
//           left: -6,
//           top: 38,
//           width: 10,
//           height: 46,

//           borderRadius: 20,

//           background:
//             "rgba(255,255,255,0.2)",
//         }}
//       />

//       {/* Right Arm */}
//       <div
//         style={{
//           position: "absolute",
//           right: -6,
//           top: 38,
//           width: 10,
//           height: 46,

//           borderRadius: 20,

//           background:
//             "rgba(255,255,255,0.2)",
//         }}
//       />

//       {/* Headrest */}
//       <div
//         style={{
//           position: "absolute",
//           top: 6,
//           left: "50%",
//           transform: "translateX(-50%)",

//           width: 50,
//           height: 14,

//           borderRadius: 20,

//           background:
//             "rgba(255,255,255,0.25)",
//         }}
//       />

//       {/* Glow */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,

//           borderRadius: 30,

//           boxShadow:
//             "inset 0 0 20px rgba(255,255,255,0.08),0 0 25px rgba(245,158,11,0.45)",
//         }}
//       />

//       {/* DRIVER LABEL */}
//       <div
//         style={{
//           position: "absolute",
//           bottom: 8,
//           width: "100%",

//           textAlign: "center",

//           color: "white",

//           fontWeight: "bold",

//           fontSize: 12,

//           letterSpacing: 2,
//         }}
//       >
//         DRIVER
//       </div>
//     </div>
//   </div>
// </div>

//           {/* SEATS */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: 20,
//             }}
//           >
//             {Array.from({ length: rows }).map(
//               (_, rowIndex) => (
//                 <div
//                   key={rowIndex}
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns:
//                       "80px 80px 70px 80px 80px",
//                     justifyContent: "center",
//                     gap: 15,
//                   }}
//                 >
//                   {["A", "B"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={bookedSeats.includes(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}

//                   {/* AISLE */}
//                   <div
//                     style={{
//                       height: 100,
//                       borderRadius: 30,

//                       background:
//                         "linear-gradient(to bottom,rgba(0,191,255,0.15),rgba(0,255,136,0.08))",

//                       boxShadow:
//                         "0 0 20px rgba(0,191,255,0.2)",

//                       display: "flex",
//                       justifyContent: "center",
//                       alignItems: "center",

//                       color: "#38bdf8",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {rowIndex + 1}
//                   </div>

//                   {["C", "D"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={bookedSeats.includes(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             borderRadius: 30,
//             padding: 25,
//             backdropFilter: "blur(25px)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             boxShadow:
//               "0 0 40px rgba(0,0,0,0.5)",
//           }}
//         >
//           <h2
//             style={{
//               color: "#00ffb3",
//               marginBottom: 25,
//             }}
//           >
//             Booking Summary
//           </h2>

//           <div
//             style={{
//               marginBottom: 30,
//             }}
//           >
//             <div
//               style={{
//                 color: "#777",
//                 marginBottom: 12,
//               }}
//             >
//               Selected Seats
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 10,
//               }}
//             >
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   style={{
//                     background:
//                       "linear-gradient(to right,#00ffb3,#38bdf8)",
//                     color: "#000",
//                     padding: "10px 16px",
//                     borderRadius: 12,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div
//             style={{
//               color: "#777",
//               marginBottom: 10,
//             }}
//           >
//             Total Amount
//           </div>

//           <div
//             style={{
//               fontSize: 42,
//               fontWeight: "bold",
//               color: "#00ffb3",
//             }}
//           >
//             ₹{selectedSeats.length*price}
//           </div>

//           <button
//             style={{
//               width: "100%",
//               marginTop: 40,
//               padding: 18,
//               border: "none",
//               borderRadius: 18,
//               background:
//                 "linear-gradient(to right,#00ffb3,#38bdf8)",
//               color: "#000",
//               fontWeight: "bold",
//               fontSize: 18,
//               cursor: "pointer",
//               boxShadow:
//                 "0 0 30px rgba(0,255,179,0.4)",
//             }}
//             onClick={() => navigate("/BookingPage")}
           
//           >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         width: 80,
//         height: 100,
//         position: "relative",
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         transition: "0.35s",

//         transform: selected
//           ? "translateY(-10px) scale(1.08)"
//           : "perspective(1000px) rotateX(8deg)",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       {/* BODY */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           borderRadius: 26,

//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,

//           overflow: "hidden",

//           border:
//             "1px solid rgba(255,255,255,0.12)",
//         }}
//       >
//         {/* SHINE */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,

//             background: `
//               linear-gradient(
//                 120deg,
//                 rgba(255,255,255,0.25),
//                 transparent 30%,
//                 transparent 70%,
//                 rgba(255,255,255,0.08)
//               )
//             `,
//           }}
//         />

//         {/* TOP CUSHION */}
//         <div
//           style={{
//             position: "absolute",
//             top: 16,
//             left: 10,
//             right: 10,
//             height: 40,
//             borderRadius: 18,

//             background:
//               "linear-gradient(to bottom,rgba(255,255,255,0.25),rgba(0,0,0,0.25))",
//           }}
//         />

//         {/* LOWER CUSHION */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 14,
//             left: 10,
//             right: 10,
//             height: 24,
//             borderRadius: 14,

//             background:
//               "linear-gradient(to bottom,rgba(255,255,255,0.18),rgba(0,0,0,0.35))",
//           }}
//         />

//         {/* ARM RESTS */}
//         <div
//           style={{
//             position: "absolute",
//             left: -5,
//             top: 28,
//             width: 8,
//             height: 42,
//             borderRadius: 20,
//             background:
//               "rgba(255,255,255,0.18)",
//           }}
//         />

//         <div
//           style={{
//             position: "absolute",
//             right: -5,
//             top: 28,
//             width: 8,
//             height: 42,
//             borderRadius: 20,
//             background:
//               "rgba(255,255,255,0.18)",
//           }}
//         />

//         {/* GLOW */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             borderRadius: 26,

//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         />

//         {/* LABEL */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 6,
//             width: "100%",
//             textAlign: "center",
//             color: "white",
//             fontWeight: "bold",
//             fontSize: 13,
//             letterSpacing: 1,
//           }}
//         >
//           {seat}
//         </div>

//         {/* SELECTED DOT */}
//         {selected && (
//           <div
//             style={{
//               position: "absolute",
//               top: 8,
//               right: 8,
//               width: 14,
//               height: 14,
//               borderRadius: "50%",
//               background: "#00ffb3",
//               boxShadow:
//                 "0 0 15px #00ffb3",
//             }}
//           />
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./SeatSelection.css";

// const rows = 12;
 
// // const bookedSeats = ["2C", "3D", "5A", "8B"];

// export default function SeatSelection() {
//   const [bookedSeats,setbookedSeats]= useState(["2C", "3D", "5A", "8B"]);
//   console.log(bookedSeats);
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   let { from, to, departure, type } = location.state.bus;
  
//   let price = location.state.bus.price;
//   const ladiesSeats = ["1A", "1B", "6D"];
// let bus = location.state.bus;
// console.log(bus);
//   const [selectedSeats, setSelectedSeats] =
//     useState([]);

//   const toggleSeat = (seat) => {
//     if (bookedSeats.includes(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter((s) => s !== seat)
//         );
     
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//      }
//   };

//   //Booking function 
//   const BookedSeat = ()=>{
//     setbookedSeats([...bookedSeats,...selectedSeats]);
//     navigate("/BookingPage",{state:{bus}})
//   }


//   const seatColor = (seat) => {
//     if (bookedSeats.includes(seat))
//       return "#2b2b35";

//     if (selectedSeats.includes(seat))
//       return "#00ffb3";

//     if (ladiesSeats.includes(seat))
//       return "#ff4fd8";

//     return "#1da1ff";
//   };

//   return (
//     <div className="seat-selection-container">
//       {/* BACKGROUND GLOW */}
//       <div className="background-glow"></div>

//       <div className="main-wrapper">
//         {/* LEFT INFO */}
//         <div className="info-panel">
//           <h2 className="blue-heading">
//             Flight Details
//           </h2>

//           <div className="flight-info">
//             <span>
//               ✈ {from} → {to}
//             </span>

//             <div>🕒 {departure}</div>

//             <div>💺 {type}</div>
//           </div>

//           <div className="legend-wrapper">
//             {[
//               ["Available", "#1da1ff"],
//               ["Selected", "#00ffb3"],
//               ["Booked", "#2b2b35"],
//               ["Ladies", "#ff4fd8"],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 className="legend-item"
//               >
//                 <div
//                   className="legend-color"
//                   style={{
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span className="legend-text">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* AIRCRAFT */}
//         <div className="aircraft-container">
//           {/* WINDOWS */}
//           <div className="windows-row">
//             {Array.from({ length: 9 }).map(
//               (_, i) => (
//                 <div
//                   key={i}
//                   className="window"
//                 />
//               )
//             )}
//           </div>

//           {/* DRIVER */}
//           <div className="driver-wrapper">
//             <div className="driver-seat">
//               <div className="driver-gloss"></div>

//               <div className="driver-upper"></div>

//               <div className="driver-lower"></div>

//               <div className="driver-arm-left"></div>

//               <div className="driver-arm-right"></div>

//               <div className="driver-headrest"></div>

//               <div className="driver-glow"></div>

//               <div className="driver-label">
//                 DRIVER
//               </div>
//             </div>
//           </div>

//           {/* SEATS */}
//           <div className="seat-layout">
//             {Array.from({ length: rows }).map(
//               (_, rowIndex) => (
//                 <div
//                   key={rowIndex}
//                   className="seat-row"
//                 >
//                   {["A", "B"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={bookedSeats.includes(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}

//                   {/* AISLE */}
//                   <div className="aisle">
//                     {rowIndex + 1}
//                   </div>

//                   {["C", "D"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={bookedSeats.includes(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div className="booking-panel">
//           <h2 className="green-heading">
//             Booking Summary
//           </h2>

//           <div className="selected-section">
//             <div className="selected-title">
//               Selected Seats
//             </div>

//             <div className="selected-seats">
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   className="selected-seat"
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="amount-title">
//             Total Amount
//           </div>

//           <div className="amount">
//             ₹{selectedSeats.length * price}
//           </div>

//           <button
//             className="booking-btn"
//            onClick={BookedSeat} >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`seat ${
//         selected ? "seat-selected" : ""
//       }`}
//       style={{
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       <div
//         className="seat-body"
//         style={{
//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,
//         }}
//       >
//         <div className="seat-shine"></div>

//         <div className="seat-top"></div>

//         <div className="seat-bottom"></div>

//         <div className="seat-arm-left"></div>

//         <div className="seat-arm-right"></div>

//         <div
//           className="seat-glow"
//           style={{
//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         ></div>

//         <div className="seat-label">
//           {seat}
//         </div>

//         {selected && (
//           <div className="selected-dot"></div>
//         )}
//       </div>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./SeatSelection.css";

// const rows = 12;

// export default function SeatSelection() {
//   // booked seats with gender
//   const [bookedSeats, setBookedSeats] = useState([
//     { seat: "2C", gender: "male" },
//     { seat: "3D", gender: "female" },
//     { seat: "5A", gender: "male" },
//     { seat: "8B", gender: "female" },
//   ]);

//   const navigate = useNavigate();
//   const location = useLocation();

//   let { from, to, departure, type } =
//     location.state.bus;

//   let price = location.state.bus.price;

//   const ladiesSeats = ["1A", "1B", "6D"];

//   let bus = location.state.bus;

//   const [selectedSeats, setSelectedSeats] =
//     useState([]);

//   // gender selection
//   const [gender, setGender] = useState("male");

//   // check booked
//   const isBooked = (seat) => {
//     return bookedSeats.some(
//       (item) => item.seat === seat
//     );
//   };

//   const toggleSeat = (seat) => {
//     if (isBooked(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter((s) => s !== seat)
//       );
//     } else {
//       setSelectedSeats([
//         ...selectedSeats,
//         seat,
//       ]);
//     }
//   };

//   // booking function
//   const BookedSeat = () => {
//     const newBookedSeats = selectedSeats.map(
//       (seat) => ({
//         seat,
//         gender,
//       })
//     );

//     setBookedSeats([
//       ...bookedSeats,
//       ...newBookedSeats,
//     ]);

//     setSelectedSeats([]);

//     navigate("/BookingPage", {
//       state: { bus },
//     });
//   };

//   // seat colors
//   const seatColor = (seat) => {
//     const bookedSeat = bookedSeats.find(
//       (item) => item.seat === seat
//     );

//     // male booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "male"
//     ) {
//       return "#1e90ff";
//     }

//     // female booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "female"
//     ) {
//       return "#ff4fd8";
//     }

//     // selected
//     if (selectedSeats.includes(seat))
//       return "#00ffb3";

//     // ladies reserved
//     if (ladiesSeats.includes(seat))
//       return "#ff99e6";

//     // available
//     return "#1da1ff";
//   };

//   return (
//     <div className="seat-selection-container">
//       <div className="background-glow"></div>

//       <div className="main-wrapper">
//         {/* LEFT INFO */}
//         <div className="info-panel">
//           <h2 className="blue-heading">
//             Flight Details
//           </h2>

//           <div className="flight-info">
//             <span>
//               ✈ {from} → {to}
//             </span>

//             <div>🕒 {departure}</div>

//             <div>💺 {type}</div>
//           </div>

//           {/* Gender Select */}
//           <div
//             style={{
//               marginTop: "20px",
//             }}
//           >
//             <h3
//               style={{
//                 color: "white",
//                 marginBottom: "10px",
//               }}
//             >
//               Select Gender
//             </h3>

//             <select
//               value={gender}
//               onChange={(e) =>
//                 setGender(e.target.value)
//               }
//               style={{
//                 padding: "10px",
//                 borderRadius: "10px",
//                 width: "100%",
//               }}
//             >
//               <option value="male">
//                 Male
//               </option>

//               <option value="female">
//                 Female
//               </option>
//             </select>
//           </div>

//           {/* LEGEND */}
//           <div className="legend-wrapper">
//             {[
//               ["Available", "#1da1ff"],
//               ["Selected", "#00ffb3"],
//               ["Male Booked", "#1e90ff"],
//               ["Female Booked", "#ff4fd8"],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 className="legend-item"
//               >
//                 <div
//                   className="legend-color"
//                   style={{
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span className="legend-text">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* AIRCRAFT */}
//         <div className="aircraft-container">
//           <div className="windows-row">
//             {Array.from({ length: 9 }).map(
//               (_, i) => (
//                 <div
//                   key={i}
//                   className="window"
//                 />
//               )
//             )}
//           </div>

//           {/* DRIVER */}
//           <div className="driver-wrapper">
//             <div className="driver-seat">
//               <div className="driver-gloss"></div>

//               <div className="driver-upper"></div>

//               <div className="driver-lower"></div>

//               <div className="driver-arm-left"></div>

//               <div className="driver-arm-right"></div>

//               <div className="driver-headrest"></div>

//               <div className="driver-glow"></div>

//               <div className="driver-label">
//                 DRIVER
//               </div>
//             </div>
//           </div>

//           {/* SEATS */}
//           <div className="seat-layout">
//             {Array.from({ length: rows }).map(
//               (_, rowIndex) => (
//                 <div
//                   key={rowIndex}
//                   className="seat-row"
//                 >
//                   {["A", "B"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(
//                           seat
//                         )}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}

//                   <div className="aisle">
//                     {rowIndex + 1}
//                   </div>

//                   {["C", "D"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(
//                           seat
//                         )}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div className="booking-panel">
//           <h2 className="green-heading">
//             Booking Summary
//           </h2>

//           <div className="selected-section">
//             <div className="selected-title">
//               Selected Seats
//             </div>

//             <div className="selected-seats">
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   className="selected-seat"
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="amount-title">
//             Total Amount
//           </div>

//           <div className="amount">
//             ₹
//             {selectedSeats.length *
//               price}
//           </div>

//           <button
//             className="booking-btn"
//             onClick={BookedSeat}
//           >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`seat ${
//         selected ? "seat-selected" : ""
//       }`}
//       style={{
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       <div
//         className="seat-body"
//         style={{
//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,
//         }}
//       >
//         <div className="seat-shine"></div>

//         <div className="seat-top"></div>

//         <div className="seat-bottom"></div>

//         <div className="seat-arm-left"></div>

//         <div className="seat-arm-right"></div>

//         <div
//           className="seat-glow"
//           style={{
//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         ></div>

//         <div className="seat-label">
//           {seat}
//         </div>

//         {selected && (
//           <div className="selected-dot"></div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./SeatSelection.css";

// const rows = 12;

// export default function SeatSelection() {
//   // BOOKED SEATS WITH GENDER
//   const [bookedSeats, setBookedSeats] =
//     useState([
//       { seat: "2C", gender: "male" },
//       { seat: "3D", gender: "female" },
//       { seat: "5A", gender: "male" },
//       { seat: "8B", gender: "female" },
//     ]);

//   const navigate = useNavigate();
//   const location = useLocation();

//   let { from, to, departure, type } =
//     location.state.bus;

//   let price = location.state.bus.price;

//   let bus = location.state.bus;

//   const [selectedSeats, setSelectedSeats] =
//     useState([]);

//   // USER GENDER
//   const [gender, setGender] =
//     useState("male");

//   // CHECK BOOKED
//   const isBooked = (seat) => {
//     return bookedSeats.some(
//       (item) => item.seat === seat
//     );
//   };

//   // SELECT SEAT
//   const toggleSeat = (seat) => {
//     if (isBooked(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter(
//           (s) => s !== seat
//         )
//       );
//     } else {
//       setSelectedSeats([
//         ...selectedSeats,
//         seat,
//       ]);
//     }
//   };

//   // BOOK SEAT
//   const BookedSeat = () => {
//     const newBookedSeats =
//       selectedSeats.map((seat) => ({
//         seat,
//         gender,
//       }));

//     setBookedSeats([
//       ...bookedSeats,
//       ...newBookedSeats,
//     ]);

//     setSelectedSeats([]);

//     navigate("/BookingPage", {
//       state: { bus },
//     });
//   };

//   // SEAT COLORS
//   const seatColor = (seat) => {
//     const bookedSeat =
//       bookedSeats.find(
//         (item) => item.seat === seat
//       );

//     // MALE BOOKED
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "male"
//     ) {
//       return "#1e90ff";
//     }

//     // FEMALE BOOKED
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "female"
//     ) {
//       return "#ff4fd8";
//     }

//     // SELECTED
//     if (
//       selectedSeats.includes(seat)
//     ) {
//       return "#00ffb3";
//     }

//     // AVAILABLE
//     return "#7cfc00";
//   };

//   return (
//     <div className="seat-selection-container">
//       {/* BACKGROUND */}
//       <div className="background-glow"></div>

//       <div className="main-wrapper">
//         {/* LEFT PANEL */}
//         <div className="info-panel">
//           <h2 className="blue-heading">
//             Flight Details
//           </h2>

//           <div className="flight-info">
//             <span>
//               ✈ {from} → {to}
//             </span>

//             <div>
//               🕒 {departure}
//             </div>

//             <div>💺 {type}</div>
//           </div>

//           {/* GENDER SELECT */}
//           <div
//             style={{
//               marginTop: "20px",
//             }}
//           >
//             <h3
//               style={{
//                 color: "white",
//                 marginBottom: "10px",
//               }}
//             >
//               Select Gender
//             </h3>

//             <select
//               value={gender}
//               onChange={(e) =>
//                 setGender(
//                   e.target.value
//                 )
//               }
//               style={{
//                 padding: "10px",
//                 borderRadius: "10px",
//                 width: "100%",
//               }}
//             >
//               <option value="male">
//                 Male
//               </option>

//               <option value="female">
//                 Female
//               </option>
//             </select>
//           </div>

//           {/* LEGEND */}
//           <div className="legend-wrapper">
//             {[
//               [
//                 "Available",
//                 "#7cfc00",
//               ],
//               [
//                 "Selected",
//                 "#00ffb3",
//               ],
//               [
//                 "Male Booked",
//                 "#1e90ff",
//               ],
//               [
//                 "Female Booked",
//                 "#ff4fd8",
//               ],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 className="legend-item"
//               >
//                 <div
//                   className="legend-color"
//                   style={{
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span className="legend-text">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BUS */}
//         <div className="aircraft-container">
//           {/* WINDOWS */}
//           <div className="windows-row">
//             {Array.from({
//               length: 9,
//             }).map((_, i) => (
//               <div
//                 key={i}
//                 className="window"
//               />
//             ))}
//           </div>

//           {/* DRIVER */}
//           <div className="driver-wrapper">
//             <div className="driver-seat">
//               <div className="driver-gloss"></div>

//               <div className="driver-upper"></div>

//               <div className="driver-lower"></div>

//               <div className="driver-arm-left"></div>

//               <div className="driver-arm-right"></div>

//               <div className="driver-headrest"></div>

//               <div className="driver-glow"></div>

//               <div className="driver-label">
//                 DRIVER
//               </div>
//             </div>
//           </div>

//           {/* SEATS */}
//           <div className="seat-layout">
//             {Array.from({
//               length: rows,
//             }).map((_, rowIndex) => (
//               <div
//                 key={rowIndex}
//                 className="seat-row"
//               >
//                 {["A", "B"].map(
//                   (col) => {
//                     const seat = `${
//                       rowIndex + 1
//                     }${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(
//                           seat
//                         )}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(
//                             seat
//                           )
//                         }
//                       />
//                     );
//                   }
//                 )}

//                 {/* AISLE */}
//                 <div className="aisle">
//                   {rowIndex + 1}
//                 </div>

//                 {["C", "D"].map(
//                   (col) => {
//                     const seat = `${
//                       rowIndex + 1
//                     }${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(
//                           seat
//                         )}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(
//                           seat
//                         )}
//                         onClick={() =>
//                           toggleSeat(
//                             seat
//                           )
//                         }
//                       />
//                     );
//                   }
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div className="booking-panel">
//           <h2 className="green-heading">
//             Booking Summary
//           </h2>

//           <div className="selected-section">
//             <div className="selected-title">
//               Selected Seats
//             </div>

//             <div className="selected-seats">
//               {selectedSeats.map(
//                 (seat) => (
//                   <div
//                     key={seat}
//                     className="selected-seat"
//                   >
//                     {seat}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           <div className="amount-title">
//             Total Amount
//           </div>

//           <div className="amount">
//             ₹
//             {selectedSeats.length *
//               price}
//           </div>

//           <button
//             className="booking-btn"
//             onClick={BookedSeat}
//           >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`seat ${
//         selected
//           ? "seat-selected"
//           : ""
//       }`}
//       style={{
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       <div
//         className="seat-body"
//         style={{
//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,
//         }}
//       >
//         <div className="seat-shine"></div>

//         <div className="seat-top"></div>

//         <div className="seat-bottom"></div>

//         <div className="seat-arm-left"></div>

//         <div className="seat-arm-right"></div>

//         <div
//           className="seat-glow"
//           style={{
//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         ></div>

//         <div className="seat-label">
//           {seat}
//         </div>

//         {selected && (
//           <div className="selected-dot"></div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./SeatSelection.css";

// const rows = 12;

// export default function SeatSelection() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   let { from, to, departure, type } =
//     location.state.bus;

//   let price = location.state.bus.price;

//   let bus = location.state.bus;

//   // booked seats with gender
//   const [bookedSeats, setBookedSeats] =
//     useState([
//       { seat: "2C", gender: "male" },
//       { seat: "3D", gender: "female" },
//       { seat: "5A", gender: "male" },
//       { seat: "8B", gender: "female" },
//     ]);

//   const [selectedSeats, setSelectedSeats] =
//     useState([]);

//   const [gender, setGender] =
//     useState("male");

//   // check booked
//   const isBooked = (seat) => {
//     return bookedSeats.some(
//       (s) => s.seat === seat
//     );
//   };

//   // toggle seat
//   const toggleSeat = (seat) => {
//     if (isBooked(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter(
//           (s) => s !== seat
//         )
//       );
//     } else {
//       setSelectedSeats([
//         ...selectedSeats,
//         seat,
//       ]);
//     }
//   };

//   // booking function
//   const BookedSeat = () => {
//     const newBookedSeats =
//       selectedSeats.map((seat) => ({
//         seat,
//         gender,
//       }));

//     setBookedSeats([
//       ...bookedSeats,
//       ...newBookedSeats,
//     ]);

//     navigate("/BookingPage", {
//       state: { bus },
//     });
//   };

//   // seat color
//   const seatColor = (seat) => {
//     const bookedSeat =
//       bookedSeats.find(
//         (s) => s.seat === seat
//       );

//     // male booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "male"
//     ) {
//       return "#1e6fff";
//     }

//     // female booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "female"
//     ) {
//       return "#ff4fd8";
//     }

//     // selected
//     if (selectedSeats.includes(seat)) {
//       return "#00ffb3";
//     }

//     // available seat
//     return "#5b8cff";
//   };

//   return (
//     <div className="seat-selection-container">
//       <div className="background-glow"></div>

//       <div className="main-wrapper">
//         {/* LEFT INFO */}
//         <div className="info-panel">
//           <h2 className="blue-heading">
//             Bus Details
//           </h2>

//           <div className="flight-info">
//             <span>
//               🚌 {from} → {to}
//             </span>

//             <div>🕒 {departure}</div>

//             <div>💺 {type}</div>
//           </div>

//           {/* gender select */}
//           <div
//             style={{ marginTop: "25px" }}
//           >
//             <label
//               style={{
//                 color: "white",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 display: "block",
//                 marginBottom: "10px",
//               }}
//             >
//               Select Gender
//             </label>

//             <select
//               value={gender}
//               onChange={(e) =>
//                 setGender(e.target.value)
//               }
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "12px",
//                 border:
//                   "2px solid rgba(255,255,255,0.2)",
//                 background:
//                   "rgba(20,20,35,0.95)",
//                 color: "white",
//                 fontSize: "15px",
//                 outline: "none",
//                 boxShadow:
//                   "0 0 15px rgba(91,140,255,0.35)",
//                 backdropFilter: "blur(8px)",
//               }}
//             >
//               <option value="male">
//                 Male
//               </option>

//               <option value="female">
//                 Female
//               </option>
//             </select>
//           </div>

//           {/* legend */}
//           <div className="legend-wrapper">
//             {[
//               ["Available", "#5b8cff"],
//               ["Selected", "#00ffb3"],
//               ["Male Booked", "#1e6fff"],
//               ["Female Booked", "#ff4fd8"],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 className="legend-item"
//               >
//                 <div
//                   className="legend-color"
//                   style={{
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span className="legend-text">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BUS */}
//         <div className="aircraft-container">
//           {/* WINDOWS */}
//           <div className="windows-row">
//             {Array.from({ length: 9 }).map(
//               (_, i) => (
//                 <div
//                   key={i}
//                   className="window"
//                 />
//               )
//             )}
//           </div>

//           {/* DRIVER */}
//           <div className="driver-wrapper">
//             <div className="driver-seat">
//               <div className="driver-gloss"></div>

//               <div className="driver-upper"></div>

//               <div className="driver-lower"></div>

//               <div className="driver-arm-left"></div>

//               <div className="driver-arm-right"></div>

//               <div className="driver-headrest"></div>

//               <div className="driver-glow"></div>

//               <div className="driver-label">
//                 DRIVER
//               </div>
//             </div>
//           </div>

//           {/* SEATS */}
//           <div className="seat-layout">
//             {Array.from({ length: rows }).map(
//               (_, rowIndex) => (
//                 <div
//                   key={rowIndex}
//                   className="seat-row"
//                 >
//                   {["A", "B"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(seat)}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}

//                   {/* aisle */}
//                   <div className="aisle">
//                     {rowIndex + 1}
//                   </div>

//                   {["C", "D"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(seat)}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div className="booking-panel">
//           <h2 className="green-heading">
//             Booking Summary
//           </h2>

//           {/* seat count */}
//           <div
//             style={{
//               color: "#ffffff",
//               fontSize: "18px",
//               marginBottom: "15px",
//               fontWeight: "600",
//             }}
//           >
//             Seats Selected :
//             <span
//               style={{
//                 color: "#00ffb3",
//                 marginLeft: "8px",
//               }}
//             >
//               {selectedSeats.length}
//             </span>
//           </div>

//           <div className="selected-section">
//             <div className="selected-title">
//               Selected Seats
//             </div>

//             <div className="selected-seats">
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   className="selected-seat"
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="amount-title">
//             Total Amount
//           </div>

//           <div className="amount">
//             ₹
//             {selectedSeats.length * price}
//           </div>

//           <button
//             className="booking-btn"
//             onClick={BookedSeat}
//           >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`seat ${
//         selected ? "seat-selected" : ""
//       }`}
//       style={{
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       <div
//         className="seat-body"
//         style={{
//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,
//         }}
//       >
//         <div className="seat-shine"></div>

//         <div className="seat-top"></div>

//         <div className="seat-bottom"></div>

//         <div className="seat-arm-left"></div>

//         <div className="seat-arm-right"></div>

//         <div
//           className="seat-glow"
//           style={{
//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         ></div>

//         <div className="seat-label">
//           {seat}
//         </div>

//         {selected && (
//           <div className="selected-dot"></div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import "./SeatSelection.css";

// const rows = 12;

// export default function SeatSelection() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   let { from, to, departure, type } =
//     location.state.bus;

//   let price = location.state.bus.price;

//   let bus = location.state.bus;

//   // booked seats with gender
//   const [bookedSeats, setBookedSeats] =
//     useState([
//       { seat: "2C", gender: "male" },
//       { seat: "3D", gender: "female" },
//       { seat: "5A", gender: "male" },
//       { seat: "8B", gender: "female" },
//     ]);

//   const [selectedSeats, setSelectedSeats] =
//     useState([]);

//   const [gender, setGender] =
//     useState("male");

//   // check booked
//   const isBooked = (seat) => {
//     return bookedSeats.some(
//       (s) => s.seat === seat
//     );
//   };

//   // toggle seat
//   const toggleSeat = (seat) => {
//     if (isBooked(seat)) return;

//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(
//         selectedSeats.filter(
//           (s) => s !== seat
//         )
//       );
//     } else {
//       setSelectedSeats([
//         ...selectedSeats,
//         seat,
//       ]);
//     }
//   };

//   // booking function
//   const BookedSeat = () => {
//     const newBookedSeats =
//       selectedSeats.map((seat) => ({
//         seat,
//         gender,
//       }));

//     setBookedSeats([
//       ...bookedSeats,
//       ...newBookedSeats,
//     ]);

//     navigate("/BookingPage", {
//       state: { bus },
//     });
//   };

//   // seat color
//   const seatColor = (seat) => {
//     const bookedSeat =
//       bookedSeats.find(
//         (s) => s.seat === seat
//       );

//     // male booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "male"
//     ) {
//       return "#1e6fff";
//     }

//     // female booked
//     if (
//       bookedSeat &&
//       bookedSeat.gender === "female"
//     ) {
//       return "#ff4fd8";
//     }

//     // selected
//     if (selectedSeats.includes(seat)) {
//       return "#00ffb3";
//     }

//     // available seat
//     return "#7cffa1";
//   };

//   return (
//     <div className="seat-selection-container">
//       <div className="background-glow"></div>

//       <div className="main-wrapper">
//         {/* LEFT INFO */}
//         <div className="info-panel">
//           <h2 className="blue-heading">
//             Bus Details
//           </h2>

//           <div className="flight-info">
//             <span>
//               🚌 {from} → {to}
//             </span>

//             <div>🕒 {departure}</div>

//             <div>💺 {type}</div>
//           </div>

//           {/* gender select */}
//           <div
//             style={{ marginTop: "25px" }}
//           >
//             <label
//               style={{
//                 color: "white",
//                 fontSize: "15px",
//                 fontWeight: "600",
//                 display: "block",
//                 marginBottom: "10px",
//               }}
//             >
//               Select Gender
//             </label>

//             <select
//               value={gender}
//               onChange={(e) =>
//                 setGender(e.target.value)
//               }
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "12px",
//                 border:
//                   "2px solid rgba(255,255,255,0.2)",
//                 background:
//                   "rgba(20,20,35,0.95)",
//                 color: "white",
//                 fontSize: "15px",
//                 outline: "none",
//                 boxShadow:
//                   "0 0 15px rgba(124,255,161,0.35)",
//                 backdropFilter: "blur(8px)",
//               }}
//             >
//               <option value="male">
//                 Male
//               </option>

//               <option value="female">
//                 Female
//               </option>
//             </select>
//           </div>

//           {/* legend */}
//           <div className="legend-wrapper">
//             {[
//               ["Available", "#7cffa1"],
//               ["Selected", "#00ffb3"],
//               ["Male Booked", "#1e6fff"],
//               ["Female Booked", "#ff4fd8"],
//             ].map(([name, color]) => (
//               <div
//                 key={name}
//                 className="legend-item"
//               >
//                 <div
//                   className="legend-color"
//                   style={{
//                     background: color,
//                     boxShadow: `0 0 15px ${color}`,
//                   }}
//                 />

//                 <span className="legend-text">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BUS */}
//         <div className="aircraft-container">
//           {/* WINDOWS */}
//           <div className="windows-row">
//             {Array.from({ length: 9 }).map(
//               (_, i) => (
//                 <div
//                   key={i}
//                   className="window"
//                 />
//               )
//             )}
//           </div>

//           {/* DRIVER */}
//           <div className="driver-wrapper">
//             <div className="driver-seat">
//               <div className="driver-gloss"></div>

//               <div className="driver-upper"></div>

//               <div className="driver-lower"></div>

//               <div className="driver-arm-left"></div>

//               <div className="driver-arm-right"></div>

//               <div className="driver-headrest"></div>

//               <div className="driver-glow"></div>

//               <div className="driver-label">
//                 DRIVER
//               </div>
//             </div>
//           </div>

//           {/* SEATS */}
//           <div className="seat-layout">
//             {Array.from({ length: rows }).map(
//               (_, rowIndex) => (
//                 <div
//                   key={rowIndex}
//                   className="seat-row"
//                 >
//                   {["A", "B"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(seat)}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}

//                   {/* aisle */}
//                   <div className="aisle">
//                     {rowIndex + 1}
//                   </div>

//                   {["C", "D"].map((col) => {
//                     const seat = `${rowIndex + 1}${col}`;

//                     return (
//                       <Seat
//                         key={seat}
//                         seat={seat}
//                         color={seatColor(seat)}
//                         selected={selectedSeats.includes(
//                           seat
//                         )}
//                         booked={isBooked(seat)}
//                         onClick={() =>
//                           toggleSeat(seat)
//                         }
//                       />
//                     );
//                   })}
//                 </div>
//               )
//             )}
//           </div>
//         </div>

//         {/* BOOKING PANEL */}
//         <div className="booking-panel">
//           <h2 className="green-heading">
//             Booking Summary
//           </h2>

//           {/* seat count */}
//           <div
//             style={{
//               color: "#ffffff",
//               fontSize: "18px",
//               marginBottom: "15px",
//               fontWeight: "600",
//             }}
//           >
//             Seats Selected :
//             <span
//               style={{
//                 color: "#00ffb3",
//                 marginLeft: "8px",
//               }}
//             >
//               {selectedSeats.length}
//             </span>
//           </div>

//           <div className="selected-section">
//             <div className="selected-title">
//               Selected Seats
//             </div>

//             <div className="selected-seats">
//               {selectedSeats.map((seat) => (
//                 <div
//                   key={seat}
//                   className="selected-seat"
//                 >
//                   {seat}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="amount-title">
//             Total Amount
//           </div>

//           <div className="amount">
//             ₹
//             {selectedSeats.length * price}
//           </div>

//           <button
//             className="booking-btn"
//             onClick={BookedSeat}
//           >
//             Continue Booking →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Seat({
//   seat,
//   color,
//   selected,
//   booked,
//   onClick,
// }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`seat ${
//         selected ? "seat-selected" : ""
//       }`}
//       style={{
//         cursor: booked
//           ? "not-allowed"
//           : "pointer",

//         filter: `
//           drop-shadow(0 18px 20px rgba(0,0,0,0.55))
//           drop-shadow(0 0 20px ${color})
//         `,
//       }}
//     >
//       <div
//         className="seat-body"
//         style={{
//           background: `
//             linear-gradient(
//               145deg,
//               ${color},
//               #081018
//             )
//           `,
//         }}
//       >
//         <div className="seat-shine"></div>

//         <div className="seat-top"></div>

//         <div className="seat-bottom"></div>

//         <div className="seat-arm-left"></div>

//         <div className="seat-arm-right"></div>

//         <div
//           className="seat-glow"
//           style={{
//             boxShadow: `
//               inset 0 0 18px rgba(255,255,255,0.08),
//               0 0 20px ${color}
//             `,
//           }}
//         ></div>

//         <div className="seat-label">
//           {seat}
//         </div>

//         {selected && (
//           <div className="selected-dot"></div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./SeatSelection.css";
import api from "./api";
const rows = 12;

export default function SeatSelection() {

  const navigate = useNavigate();
  const location = useLocation();

  let { from, to, departure, type } =
    location.state.bus;

  let price = location.state.bus.price;

  let bus = location.state.bus;
console.log(bus);
  // booked seats with gender
  const [bookedSeats, setBookedSeats] =
    useState([
      // { seat: "2C", gender: "male" },
      // { seat: "3D", gender: "female" },
      // { seat: "5A", gender: "male" },
      // { seat: "8B", gender: "female" },
    ]);
    const [selectedSeats, setSelectedSeats] =useState([]);
   const [gender, setGender] =
    useState("male");

  // check booked
  const isBooked = (seat) => {
    return bookedSeats.some(
      (s) => s.seat === seat
    );
  };

  // toggle seat
  const toggleSeat = (seat) => {
  if (isBooked(seat)) return;

  setSelectedSeats((prev) => {
    // check whether seat already selected
    const alreadySelected = prev.some(
      (item) => item.seat === seat
    );

    // deselect
    if (alreadySelected) {
      return prev.filter(
        (item) => item.seat !== seat
      );
    }

    // select
    return [
      ...prev,
      {
        seat,
        gender,
      },
    ];
  });
};
  const handleSeatClick = (seatNo) => {
  setSelectedSeats((prev) => {
    if (prev.includes(seatNo)) {
      return prev.filter((seat) => seat !== seatNo);
    }

    return [...prev, seatNo];
  });
}

  // useEffect(() => {
  //       axios.post("http://localhost:3000/SeatSelection",{selectedSeats})
  //         .then((res) => {
  //           setBookedSeats(res.data);
  //         })
  //         .catch((err)=>{
  //           console.log(err);
  //         })
    
  //     }, []); 

  // booking function
  // const BookedSeat = () => {
  //   const newBookedSeats =
  //     selectedSeats.map((seat) => ({
  //       seat,
  //       gender,
  //     }));

  //   setBookedSeats([
  //     ...bookedSeats,
  //     ...newBookedSeats,
  //   ]);

  //   navigate("/BookingPage", {
  //     state: { bus },
  //   });
  // };
 let totalprice=selectedSeats.length * price;
// console.log(totalprice);
// try{
const BookedSeat = async () => {
  const newBookedSeats =
    selectedSeats.map((s) => ({
      seat:s.seat,
      gender:s.gender,
      busId: bus._id,
      journeyDate:bus.journeyDate,
    }));
    if(newBookedSeats.length>=1){
    navigate("/BookingPage", {
      state: {
        bus,
        newBookedSeats,
        totalprice,
      },
    });
    }
    else{
      alert("please seat the seat");
    }

};
// }catch{
        // res.send("Error you select the seat");

// }
//   try {
//     // send to backend
//     const res = await axios.post(
//       "http://localhost:3000/SeatSelection",
//       {
//         bookedSeats: newBookedSeats,
//       }
//     );

//     // update frontend state
//     setBookedSeats([
//       ...bookedSeats,
//       ...newBookedSeats,
//     ]);
//         setSelectedSeats([]);
//     navigate("/BookingPage", {
//       state: { bus,newBookedSeats,totalprice},
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
useEffect(() => {
  // axios.get(`http://localhost:3000/SeatSelection/${bus._id}`,
     api.get(`SeatSelection/${bus._id}`,
      {params: {
    journeyDate: bus.journeyDate,
  },})
    .then((res) => {
       console.log("Booked seats:", res.data)
      setBookedSeats(res.data);
    })
    .catch((err) => {
       console.log(err);
      // res.send(err);
    });
}, []);
    console.log(gender)
  // seat color
  const seatColor = (seat) => {
    const bookedSeat =
      bookedSeats.find(
        (s) => s.seat === seat
      );

    // male booked
    if (
      bookedSeat &&
      bookedSeat.gender === "male"
    ) {
      return "#1e6fff";
    }

    // female booked
    if (
      bookedSeat &&
      bookedSeat.gender === "female"
    ) {
      return "#ff4fd8";
    }
  //   if (bookedSeat) {
  //   return bookedSeat.gender === "male"
  //     ? "#1e6fff"
  //     : "#ff4fd8";
  // }


    // selected
    if (  selectedSeats.some(
      (s) => s.seat === seat
    )) {
      return "#00ffb3";
    }

    // available seat
    return "#ffb84d";
  };
 


  return (
    <div className="seat-selection-container">
      <div className="background-glow"></div>

      <div className="main-wrapper">
        {/* LEFT INFO */}
        <div className="info-panel">
          <h2 className="blue-heading">
            Bus Details
          </h2>

          {/* <div className="flight-info"> */}
            {/* <span>
              🚌 {from} → {to}
            </span> */}
            <div className="flight-info"> <span> ✈ {from} → {to} </span>

            <div>🕒 {departure}</div>

            <div>💺 {type}</div>
          </div>

          {/* gender select */}
          <div
            style={{ marginTop: "25px" }}
          >
            <label
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "600",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Select Gender
            </label>

            <select
              value={gender}
              onChange={(e) =>
                setGender(e.target.value)
              }
              style={{
                width: "100%",
                maxWidth:"270px",
                padding: "12px",
                borderRadius: "12px",
                border:
                  "2px solid rgba(255,255,255,0.2)",
                background:
                  "rgba(20,20,35,0.95)",
                color: "white",
                fontSize: "15px",
                outline: "none",
                boxShadow:
                  "0 0 15px rgba(255,184,77,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              <option value="male">
                Male
              </option>

              <option value="female">
                Female
              </option>
            </select>
          </div>

          {/* legend */}
          <div className="legend-wrapper">
            {[
              ["Available", "#ffb84d"],
              ["Selected", "#00ffb3"],
              ["Male Booked", "#1e6fff"],
              ["Female Booked", "#ff4fd8"],
            ].map(([name, color]) => (
              <div
                key={name}
                className="legend-item"
              >
                <div
                  className="legend-color"
                  style={{
                    background: color,
                    boxShadow: `0 0 15px ${color}`,
                  }}
                />

                <span className="legend-text">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* BUS */}
        <div className="aircraft-container">
          {/* WINDOWS */}
          <div className="windows-row">
            {Array.from({ length: 9 }).map(
              (_, i) => (
                <div
                  key={i}
                  className="window"
                />
              )
            )}
          </div>

          {/* DRIVER */}
          <div className="driver-wrapper">
            <div className="driver-seat">
              <div className="driver-gloss"></div>

              <div className="driver-upper"></div>

              <div className="driver-lower"></div>

              <div className="driver-arm-left"></div>

              <div className="driver-arm-right"></div>

              <div className="driver-headrest"></div>

              <div className="driver-glow"></div>

              <div className="driver-label">
                DRIVER
              </div>
            </div>
          </div>

          {/* SEATS */}
          <div className="seat-layout">
            {Array.from({ length: rows }).map(
              (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="seat-row"
                >
                  {["A", "B"].map((col) => {
                    const seat = `${rowIndex + 1}${col}`;
                     return (
                      <Seat
                        key={seat}
                        seat={seat}
                        color={seatColor(seat)}
                         selected={selectedSeats.some(
                       (item) => item.seat === seat
                          )}
                        booked={isBooked(seat)}
                        onClick={() =>
                          toggleSeat(seat)
                        }
                      />
                    );
                  })}

                  {/* aisle */}
                  <div className="aisle">
                    {rowIndex + 1}
                  </div>

                  {["C", "D"].map((col) => {
                    const seat = `${rowIndex + 1}${col}`;

                    return (
                      <Seat
                        key={seat}
                        seat={seat}
                        color={seatColor(seat)}
                       selected={selectedSeats.some(
                       (item) => item.seat === seat
                          )}    
                        booked={isBooked(seat)}
                        onClick={() =>
                          toggleSeat(seat)
                        }
                      />
                    );
                  })}
                </div>
              )
            )}
          </div>
        </div>

        {/* BOOKING PANEL */}
        <div className="booking-panel">
          <h2 className="green-heading">
            Booking Summary
          </h2>

          {/* seat count */}
          <div
            style={{
              color: "#ffffff",
              fontSize: "18px",
              marginBottom: "15px",
              fontWeight: "600",
            }}
          >
            Seats Selected :
            <span
              style={{
                color: "#00ffb3",
                marginLeft: "8px",
              }}
            >
              {selectedSeats.length}
            </span>
          </div>

          <div className="selected-section">
            <div className="selected-title">
              Selected Seats
            </div>

            <div className="selected-seats">
              {selectedSeats.map((item) => (
                // <div
                //   key={seat}
                //   className="selected-seat"
                // >
                //   {seat}
                // </div>
                  <div
    key={item.seat}
    className="selected-seat"
  >
    {item.seat}
  </div>
              ))}
            </div>
          </div>

          <div className="amount-title">
            Total Amount
          </div>

          <div className="amount">
            ₹
           { totalprice}
            
            {/* {selectedSeats.length * price} */}
          </div>

          <button
            className="booking-btn"
            onClick={BookedSeat}
          >
            Continue Booking →
          </button>
        </div>
      </div>
    </div>
  );
}

function Seat({
  seat,
  color,
  selected,
  booked,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`seat ${
        selected ? "seat-selected" : ""
      }`}
      style={{
        cursor: booked
          ? "not-allowed"
          : "pointer",

        filter: `
          drop-shadow(0 18px 20px rgba(0,0,0,0.55))
          drop-shadow(0 0 20px ${color})
        `,
      }}
    >
      <div
        className="seat-body"
        style={{
          background: `
            linear-gradient(
              145deg,
              ${color},
              #081018
            )
          `,
        }}
      >
        <div className="seat-shine"></div>

        <div className="seat-top"></div>

        <div className="seat-bottom"></div>

        <div className="seat-arm-left"></div>

        <div className="seat-arm-right"></div>

        <div
          className="seat-glow"
          style={{
            boxShadow: `
              inset 0 0 18px rgba(255,255,255,0.08),
              0 0 20px ${color}
            `,
          }}
        ></div>

        <div className="seat-label">
          {seat}
        </div>

        {selected && (
          <div className="selected-dot"></div>
        )}
      </div>
    </div>
  );
}


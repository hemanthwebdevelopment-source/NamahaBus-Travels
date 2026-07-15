import "./Offers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faShieldHalved,
  faClock,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

export default function Offers() {
  const offers = [
    {
      icon: faTags,
      title: "Special Discounts",
      text: "Get exciting discounts on your first booking and festive offers.",
      color: "#0d6efd",
    },
    {
      icon: faShieldHalved,
      title: "Safe & Secure",
      text: "Secure online payments with verified bus operators across India.",
      color: "#28a745",
    },
    {
      icon: faClock,
      title: "Instant Booking",
      text: "Book your ticket in seconds with real-time seat availability.",
      color: "#ff9800",
    },
    {
      icon: faMoneyBillWave,
      title: "Best Price",
      text: "Lowest fares guaranteed with zero hidden charges.",
      color: "#dc3545",
    },
  ];

  return (
    <section className="offers-section">

        <div className="section-title">

          <h2>Why Book With Us?</h2>

          <p>
            Fast booking, secure payments, trusted operators and the best travel
            experience.
          </p>

        </div>

        <div className="offers-grid">

          {offers.map((offer, index) => (
            <div className="offer-card" key={index}>

              <div
                className="offer-icon"
                style={{ background: offer.color }}
              >
                <FontAwesomeIcon icon={offer.icon} />
              </div>

              <h4>{offer.title}</h4>

              <p>{offer.text}</p>

            </div>
          ))}

        </div>

    </section>
  );
}
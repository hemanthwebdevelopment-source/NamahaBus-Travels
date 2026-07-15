import "./AppDownload.css";
import {
  FaGooglePlay,
  FaApple,
  FaQrcode,
  FaMobileAlt,
} from "react-icons/fa";

import phone from "./assets/phone.png"; // Mobile app mockup

export default function AppDownload() {
  return (
    <section className="app-section">

      <div className="app-container">

        <div className="app-left">

          <span className="app-tag">
            Mobile Application
          </span>

          <h2>
            Book Bus Tickets <br />
            Anytime, Anywhere
          </h2>

          <p>
            Download our mobile application for faster booking,
            live bus tracking, exclusive offers and instant ticket
            confirmation.
          </p>

          <div className="app-features">

            <div>✓ Easy Booking</div>

            <div>✓ Live Tracking</div>

            <div>✓ Exclusive Offers</div>

            <div>✓ Secure Payments</div>

          </div>

          <div className="store-buttons">

            <button className="play-btn">
              <FaGooglePlay />
              <div>
                <small>GET IT ON</small>
                <span>Google Play</span>
              </div>
            </button>

            <button className="apple-btn">
              <FaApple />
              <div>
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </button>

          </div>

        </div>

        <div className="app-right">

          <img src={phone} alt="Mobile App" />

          <div className="qr-card">

            <FaQrcode className="qr-icon" />

            <p>Scan to Download</p>

          </div>

        </div>

      </div>
    </section>
  );
}
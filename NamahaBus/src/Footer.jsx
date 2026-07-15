import "./Footer.css";
import {
  FaBus,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-column">

          <div className="footer-logo">
            <FaBus />
            <h2>Namaha Bus</h2>
          </div>

          <p>
            Your trusted partner for comfortable, safe and affordable bus
            travel. Book tickets online in just a few clicks.
          </p>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaTwitter /></a>

            <a href="#"><FaLinkedinIn /></a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>

            <li><a href="/">Search Buses</a></li>

            <li><a href="/">Offers</a></li>

            <li><a href="/">My Bookings</a></li>

          </ul>

        </div>

        {/* Company */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>

            <li><a href="/">About Us</a></li>

            <li><a href="/">Privacy Policy</a></li>

            <li><a href="/">Terms & Conditions</a></li>

            <li><a href="/">Refund Policy</a></li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>Contact Us</h3>

          <div className="contact">

            <p>
              <FaPhoneAlt />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope />
              support@namahabus.com
            </p>

            <p>
              <FaMapMarkerAlt />
              Hyderabad, Telangana
            </p>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © {new Date().getFullYear()} Namaha Bus. All Rights Reserved.

      </div>

    </footer>
  );
}
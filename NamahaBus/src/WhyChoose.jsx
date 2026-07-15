import "./WhyChoose.css";
import {
  FaBus,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaMapMarkedAlt,
  FaCreditCard,
} from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaBus />,
      title: "500+ Buses",
      desc: "Choose from a wide range of buses including AC, Sleeper, Luxury and Express services.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Journey",
      desc: "Travel with trusted operators that prioritize passenger safety and comfort.",
    },
    {
      icon: <FaClock />,
      title: "On-Time Service",
      desc: "Reliable departures and arrivals with real-time schedule updates.",
    },
    {
      icon: <FaHeadset />,
      title: "24×7 Support",
      desc: "Our support team is available around the clock to assist your travel needs.",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Live Tracking",
      desc: "Track your bus in real-time and know exactly when it will arrive.",
    },
    {
      icon: <FaCreditCard />,
      title: "Secure Payments",
      desc: "Fast and secure online payments using trusted payment gateways.",
    },
  ];

  return (
    <section className="why-section">
      {/* <div className="container"> */}

        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Travel Smarter With Us</h2>
          <p>
            We provide a reliable, secure and comfortable travel experience for
            every passenger.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      {/* </div> */}
    </section>
  );
}
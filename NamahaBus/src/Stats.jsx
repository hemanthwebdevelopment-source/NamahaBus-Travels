import "./Stats.css";
import {
  FaBus,
  FaUsers,
  FaMapMarkedAlt,
  FaSmile,
} from "react-icons/fa";

export default function Stats() {
  const stats = [
    {
      icon: <FaBus />,
      number: "500+",
      title: "Buses",
    },
    {
      icon: <FaUsers />,
      number: "50K+",
      title: "Happy Customers",
    },
    {
      icon: <FaMapMarkedAlt />,
      number: "200+",
      title: "Routes Covered",
    },
    {
      icon: <FaSmile />,
      number: "99%",
      title: "Customer Satisfaction",
    },
  ];

  return (
    <section className="stats-section">

        <div className="stats-heading">

          <h2>Our Journey in Numbers</h2>

          <p>
            Trusted by thousands of travelers across India every day.
          </p>

        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>

            </div>
          ))}

        </div>

    </section>
  );
}
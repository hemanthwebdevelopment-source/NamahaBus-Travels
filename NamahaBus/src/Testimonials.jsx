import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Hyderabad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "The booking process was smooth and the bus was clean and comfortable. Highly recommended!",
  },
  {
    name: "Priya Reddy",
    city: "Vijayawada",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Affordable fares and on-time departures. Customer support was very helpful throughout my journey.",
  },
  {
    name: "Arjun Kumar",
    city: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "One of the best online bus booking experiences. I will definitely book again.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonial-section">

        <div className="section-title">

          <h2>What Our Customers Say</h2>

          <p>
            Thousands of travelers trust Namaha Bus for safe and comfortable
            journeys.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="customer">

                <img src={item.image} alt={item.name} />

                <div>

                  <h5>{item.name}</h5>

                  <span>{item.city}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

    </section>
  );
}
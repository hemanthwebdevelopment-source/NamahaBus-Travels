import "./PopularRoutes.css";
import {
  FaArrowRight,
  FaBus,
  FaMapMarkerAlt,
} from "react-icons/fa";

const routes = [
  {
    from: "Hyderabad",
    to: "Bangalore",
    price: "₹599",
    buses: "120+ Buses",
    image:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=800",
  },
  {
    from: "Hyderabad",
    to: "Vijayawada",
    price: "₹399",
    buses: "80+ Buses",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
  },
  {
    from: "Chennai",
    to: "Coimbatore",
    price: "₹449",
    buses: "95+ Buses",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800",
  },
  {
    from: "Delhi",
    to: "Agra",
    price: "₹699",
    buses: "60+ Buses",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
  },
];

export default function PopularRoutes() {
  return (
    <section className="routes-section">

      <div className="container">

        <div className="section-title">

          <h2>Popular Routes</h2>

          <p>
            Book tickets for the most travelled routes at the best prices.
          </p>

        </div>

        <div className="routes-grid">

          {routes.map((route, index) => (
            <div className="route-card" key={index}>

              <img src={route.image} alt={route.from} />

              <div className="route-body">

                <h4>
                  {route.from}
                  <FaArrowRight className="arrow" />
                  {route.to}
                </h4>

                <div className="route-info">

                  <span>
                    <FaMapMarkerAlt /> {route.buses}
                  </span>

                  <span className="price">
                    From {route.price}
                  </span>

                </div>

                <button>
                  <FaBus />
                  Book Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
// import "./Image.css";
// export default function Image(){
//     return(
//         <div className="bg-header">
//         <div className="bg-container">
//             <h1 className="heading">Namaha Bus Travels</h1>
//             <h2 className="paragraph">Namaha Bus is an official air bus travels booking patner</h2>
//             {/* <img className="image.css" src="https://static.abhibus.com/images/herosection/operators/seo-mobile-default.webp"/> */}
//         </div>
//         </div>
//     )
// }
import "./Image.css";
import bus from "./assets/bus.png";
export default function Image() {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        {/* Left Side */}

        <div className="hero-text">

          <div className="hero-badge">
            🛡 Trusted. Comfortable. Safe.
          </div>

          <h1>
            Namaha Bus
            <br />
            Travels with
            <span> Comfort</span>
          </h1>

          <p>
            Your journey, our responsibility.
            <br />
            Book your bus tickets easily and enjoy a
            <br />
            safe & comfortable ride with Namaha Bus.
          </p>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <img
            src={bus}
            alt="Namaha Bus" loading="lazy"
          />

        </div>

      </div>

    </section>
  );
}

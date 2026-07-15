// import Image from './Image'
// import Search from './Search'
// export default function Home(){
//     return(
//         <>
//           <Image />
//             <Search />
//         </>
//     )
// }

import Image from "./Image";
import Search from "./Search";
import WhyChoose from "./WhyChoose";
import Stats from "./Stats";
import Offers from "./Offers";
import PopularRoutes from "./PopularRoutes";
// import Operators from "./Operators";
import Testimonials from "./Testimonials";
import AppDownload from "./AppDownload";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
    <div className="home">
      
      <Image />
      <Search />

      <Offers />
  
  {/* <WhyChoose /> */}

      <Stats />

      {/* <PopularRoutes /> */}

      {/* <Operators /> */}

      <Testimonials />

      {/* <AppDownload /> */}

      <Footer />
      </div>
    </>
  );
}
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.png';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img6 from '../../../assets/home/06.png';
import Container from "../../../Container";

const images =[img4, img1, img3, img2, img6]

const Banner =()=> {
  return (
    <div className="mt-4">
      <Carousel useKeyboardArrows={true} className="text-center">
          {images.map((URL, index) => (
          <div className="slide h-full md:h-[800px] ">
            <img className="h-full rounded-lg" alt="banner_image" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Banner;

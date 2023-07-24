import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';

const Banner =()=> {
  return (
    <div className="">
      <Carousel useKeyboardArrows={true} className="text-center">
       
          <div className="slide h-full md:h-[800px]">
            <img className="h-full" alt="sample_file" src={img1} />
          </div>
          <div className="slide h-full md:h-[800px]">
            <img className="h-full" alt="sample_file" src={img2} />
          </div>
          <div className="slide h-full md:h-[800px]">
            <img className="h-full" alt="sample_file" src={img3} />
          </div>
          <div className="slide h-full md:h-[800px]">
            <img className="h-full" alt="sample_file" src={img4} />
          </div> 
      </Carousel>
    </div>
  );
}
export default Banner;

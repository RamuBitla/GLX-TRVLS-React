import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import img4 from "../../../Assets/img4.jpg";
import img5 from "../../../Assets/img5.jpg";

const services = () => {
  const images = [img1, img2, img3, img4, img5];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="services">
        <h1 className="heading">Services</h1>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <>
              <div key={image}>
                <img src={image} />
              </div>
            </>
          );
        })}
        
      </Slider>
    </div>
  );
};

export default services;

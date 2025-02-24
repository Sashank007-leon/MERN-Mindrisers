import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import gojo from "../assets/gojo.jpeg";
import gojo1 from "../assets/Gojo_Satoru.jpg";

const Testimonials = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [img1, img2, gojo, gojo1];

  return (
    <div className="w-full max-w-7xl mx-auto py-10">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="md:h-[600px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

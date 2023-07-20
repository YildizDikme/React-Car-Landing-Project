import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "./Wrapper";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi"; // react-icons'tan FiArrowRight ve FiArrowLeft ikonlarını dahil ediyoruz
import ProductCard from "./ProductCard";

export default class CustomArrows extends Component {
  componentDidMount() {
    // Stil değişikliğini baskılamak için .slick-prev:before ve .slick-next:before stillerini değiştiriyoruz
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      .slick-prev:before, .slick-next:before {
        content: none !important;
      }
    `;
    document.head.appendChild(styleTag);
  }

  render() {
    const SampleNextArrow = ({ className, style, onClick }) => (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#400E03",
          borderRadius: "2px",
          width: "38px",
          height: "38px",
        }}
        onClick={onClick}
      >
        <FiArrowRight style={{ color: "white", fontSize: "15px" }} />
      </div>
    );

    const SamplePrevArrow = ({ className, style, onClick }) => (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#400E03",
          borderRadius: "2px",
          width: "38px",
          height: "38px"
        }}
        onClick={onClick}
      >
        <FiArrowLeft style={{ color: "white", fontSize: "15px" }} />
      </div>
    );

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768, // Telefon boyutu (örn: iPhone 6/7/8)
          settings: {
            slidesToShow: 1,
            nextArrow: false, // Arrow sağ düğmesini gizle
            prevArrow: false, // Arrow sol düğmesini gizle
          },
        },
      ],
    };

    return (
      <div>
        <Wrapper>
          <h2 className="text-3xl font-semibold text-center my-10">
            Featured Products
          </h2>
          <Slider {...settings}>
            <ProductCard
              href="/"
              productName="ICEWAYS"
              explanation="City life is changing. So are the habits of urban citizens. 4X4
              cars that were previously used only on challenging lands are now
              preferred for urban use."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
            <ProductCard
              href="/"
              productName="Driveways Sport"
              explanation="Driveways is a ‘’Comfort tyre’’ developed for a considerably wide vehicle pool ranging from middle class sedans to upper class comfort automobiles."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
            <ProductCard
              href="/"
              productName="Driveways COMPETUS H/P"
              explanation="City life is changing. So are the habits of urban citizens. 4X4
              cars that were previously used only on challenging lands are now
              preferred for urban use."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
            <ProductCard
              href="/"
              productName="Driveways COMPETUS H/P"
              explanation="City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
            <ProductCard
              href="/"
              productName="ICEWAYS"
              explanation="City life is changing. So are the habits of urban citizens. 4X4
              cars that were previously used only on challenging lands are now
              preferred for urban use."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
            <ProductCard
              href="/"
              productName="ICEWAYS"
              explanation="City life is changing. So are the habits of urban citizens. 4X4
              cars that were previously used only on challenging lands are now
              preferred for urban use."
              btnLearn="Learn More"
              btnFind="Find a Dealer"
            />
          </Slider>
        </Wrapper>
      </div>
    );
  }
}

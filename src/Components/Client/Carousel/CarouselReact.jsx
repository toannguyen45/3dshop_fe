import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './CarouselReact.scss'
import { Link } from 'react-router-dom'

const CarouselReact = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      stopOnHover
      showThumbs={false}
      emulateTouch={true}
      showArrows={false}
      showStatus={false}
    >
      <div>
        <div className="carousel-img-wrapper">
          <img
            loading="eager"
            src="/images/client/slide-one-new.jpg"
            className="carousel-img"
            alt="slide-one"
            width={1536}
            height={650}
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">In 3D sản xuất hàng loạt</p>
          <p className="text-line-two">Nhanh - Đẹp - Giá tốt</p>
          <Link to="/dich-vu" className="slider-button">
            Xem thêm
          </Link>
        </div>
      </div>
      <div>
        <div className="carousel-img-wrapper">
          <img
            loading="eager"
            src="/images/client/slide-two-new.jpg"
            className="carousel-img"
            alt="slide-one"
            width={1536}
            height={650}
          />
        </div>

        <div className="slider-content">
          <p className="text-line-one">Máy quét 3D laser</p>
          <p className="text-line-two">Chính xác - Nhanh chóng</p>
          <Link to="/dich-vu" className="slider-button">
            Xem thêm
          </Link>
        </div>
      </div>
    </Carousel>
  )
}

export default CarouselReact

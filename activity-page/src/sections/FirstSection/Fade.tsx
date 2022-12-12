import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '../../assets/baner1.avif';
import Banner2 from '../../assets/baner2.jpeg';
import Banner3 from '../../assets/baner3.webp';
import Banner4 from '../../assets/baner4.png';

const BannerArr = [Banner1, Banner2, Banner3, Banner4]


export default function Fade() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div>
      <Slider {...settings}>
        {BannerArr.map((banner) => {
          return (
            <div>
              <img src={banner} />
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
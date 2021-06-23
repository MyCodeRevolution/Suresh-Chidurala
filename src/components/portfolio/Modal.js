import React from 'react';
import ReactDom from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_3000x1200._CB661592357_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/unrec1499/Under1499_Gw_3000x1200._CB661592357_.jpg',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/Note10Pro/GW/May/D21342631_WLD_Mi_Redmi_Note10Pro_tallhero_3000x1200._CB667000819_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Redmi_EVOSeries/Note10Pro/GW/May/D21342631_WLD_Mi_Redmi_Note10Pro_tallhero_3000x1200._CB667000819_.jpg',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_2ND-JUN-pc2x._CB667157313_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_2ND-JUN-pc2x._CB667157313_.jpg',
  },
  {
    url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_3000x1200_SVA._CB667240774_.jpg" height="600px" width="1500px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_3000x1200_SVA._CB667240774_.jpg',
  },
];

// const MODAL_STYLES = {
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   backgroundColor: '#FFc',
//   padding: '50px',
//   zIndex: 1000,
// };

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({open, children, onClose}) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    className: 'slides',
  };

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div className="modal_container">
        <div className="slider__container">
          <Slider {...settings}>
            {images.map((image) => {
              return (
                <div key={image.url}>
                  <img
                    className="slider__image"
                    width="100%"
                    src={image.url}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
          <button onClick={onClose}>Close Modal</button>
        </div>
        <div className="right__container">
          <h1>right slider</h1>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

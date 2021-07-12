import React from 'react';
import ReactDom from 'react-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

export default function Modal({open, children, onClose, modalData}) {
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
  console.log(modalData);
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div className="modal_container">
        <div className="header_container">
          <h3>{modalData.project_name}</h3>
        </div>
        <div className="slider__container">
          <Slider {...settings}>
            {modalData.sliderImages.map((image) => {
              return (
                <div key={image.url}>
                  <img
                    className="slider__image"
                    width="100%"
                    src={image}
                    alt=""
                  />
                </div>
              );
            })}
          </Slider>
          <button onClick={onClose} className="close__button">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="right__container">
          <div className="container">
            <h5>Project info</h5>
            <div className="github_link">
              <i className="fab fa-github"></i>
              <a href={`${modalData.github}`} target="_blank" rel="noreferrer">
                &nbsp; &nbsp;{modalData.github}
              </a>
            </div>
            <div className="live_site_link">
              <i className="fas fa-link"></i>
              <a
                href={`${modalData.liveSite}`}
                target="_blank"
                rel="noreferrer"
              >
                &nbsp; &nbsp;{modalData.liveSite}
              </a>
            </div>
            <div className="description">
              {modalData.description.map((description) => (
                <li>{description}</li>
              ))}
            </div>
            <div className="technology">
              <h5>Technology</h5>
              <div className="technology_used">
                {modalData.technologies.map((technologies) => (
                  <span>{technologies}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
}

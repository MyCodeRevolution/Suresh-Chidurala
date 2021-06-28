import React, {useState} from 'react';
import portfolioData from '../../data/data.json';
import Modal from './Modal';

const portfolio_data = portfolioData[5].portfolio;

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModelData] = useState({
    project_name: '',
    github: '',
    liveSite: '',
    technologies: '',
    description: '',
    sliderImages: '',
  });
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          modalData={modalData}
        >
          Fancy Modal
        </Modal>
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>
        {/* <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active rounded-pill">
                All
              </li>
              <li data-filter=".filter-react" className="rounded-pill">
                React.js
              </li>
              <li data-filter=".filter-html" className="rounded-pill">
                HTML
              </li>
            </ul>
          </div>
        </div> */}

        <div className="row portfolio-container">
          {portfolio_data.map((data) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-react`}
              key={data.title}
            >
              <div className="portfolio-wrap">
                <img src={data.img} className="img-fluid" alt={data.img} />
                <div className="portfolio-info">
                  <h4>{data.project_name}</h4>
                  <p>{data.technology}</p>
                  <div className="portfolio-links">
                    <a
                      href={data.img}
                      data-gall="portfolioGallery"
                      className="venobox"
                      title={data.title}
                    >
                      <i className="bx bx-plus"></i>
                    </a>
                    <button
                      className="open_model"
                      onClick={() => {
                        setIsOpen(true);
                        setModelData({
                          project_name: data.project_name,
                          github: data.github,
                          liveSite: data.liveSite,
                          technologies: data.technologies,
                          description: data.description,
                          sliderImages: data.sliderImages,
                        });
                      }}
                      title={data.title}
                    >
                      <i className="bx bx-link"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

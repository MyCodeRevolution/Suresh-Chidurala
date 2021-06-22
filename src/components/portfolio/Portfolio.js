import React, {useState} from 'react';
import portfolioData from '../../data/data.json';
import Modal from './Modal';

const portfolio_data = portfolioData[5].portfolio;

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
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
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
        <div className="row portfolio-container">
          {portfolio_data.map((data) => (
            <div
              className={`col-lg-4 col-md-6 portfolio-item filter-${data.filter}`}
            >
              <div className="portfolio-wrap">
                <img src={data.img} className="img-fluid" alt="" />
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
                    <a onClick={() => setIsOpen(true)} title={data.title}>
                      <i className="bx bx-link"></i>
                    </a>
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
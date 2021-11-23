import React from "react";
import skillsData from "../../data/data.json";
const skills_data = skillsData[0].skills;
const interests_data = skillsData[1].interests;
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
          <p>See more about me</p>
        </div>
        <div className="row">
          <div className="col-lg-3" data-aos="fade-right">
            <img src="assets/img/surya.png" className="img-fluid" alt="Surya" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web &amp; App Developer</h3>
            <p className="font-italic">
              Inquisitive, energetic Computer Science student skilled in
              programming, with a strong foundation in Full-stack web
              development using React.js, Node.js, Express.js, PHP, Material UI,
              HTML, SCSS, Bootstrap.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Birthday:</strong> &nbsp; 02 March 1998
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Phone:</strong>&nbsp; (+91)8639193040
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>City:</strong>&nbsp; Palakurthy,Jangoan
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Age:</strong>&nbsp; 22
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Degree:</strong>&nbsp;Bachelor of Technology
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>Email:</strong>&nbsp;
                    suresh.chidurala17511@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="row skills-content">
          {skills_data.map((skill) => (
            <div className="col-lg-4" key={skill}>
              <div className="progress">
                <span className="skill txt">{skill}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="interests container">
          <div className="section-title">
            <h2>Interests</h2>
          </div>
          <div className="row">
            {interests_data.map((interests) => (
              <div
                className="col-lg-3 col-md-4"
                style={{ marginBottom: 25 }}
                key={interests.name}
              >
                <div className="icon-box">
                  <i
                    className={`${interests.icon}`}
                    style={{ color: `${interests.color}` }}
                  ></i>
                  <h3>{interests.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

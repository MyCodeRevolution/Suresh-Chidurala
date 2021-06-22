import React from 'react';
import resumeData from '../../data/data.json';
const education_data = resumeData[2].education;
const pro_exp = resumeData[3].pro_exp;
const Resume = () => {
  return (
    <div id="resume" className="resume">
      <div className="container" style={{marginTop: 20}}>
        <div className="section-title">
          <h2>Resume</h2>{' '}
        </div>
        <div className="row " style={{marginBottom: '40px'}}>
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Suresh Chidurala</h4>
              <p>
                <em>
                  Inquisitive, energetic Computer Science student skilled in
                  programming, with a strong foundation in web designing using
                  Reactjs , Nodejs ,Angular , PHP ,HTML,CSS,Bootstrap.
                </em>
              </p>
              <ul>
                <li>Palakurthy , Jangoan</li>
                <li>(+91)8639193040</li>
                <li>suresh.chidurala17511@gmail.com</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            {education_data.map((edu) => (
              <div className="resume-item" key={edu.institution}>
                <h4>{edu.level}</h4>
                <h5>{edu.year}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p>{edu.branch}</p>
                <p>{edu.Grade}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            {pro_exp.map((pro_exp) => (
              <div className="resume-item" key={pro_exp.name}>
                <h4>{pro_exp.name}</h4>

                <ul>
                  {pro_exp.points.map((points) => (
                    <li key={points}>{points}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from 'react';
import "jquery/dist/jquery";
import "bootstrap/dist/css//bootstrap.min.css";
import '../css/resume.css';
import '../css/resume.min.css';

const experience = (props) => {

    return (


        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <h3 className="mb-0">{props.job}</h3>
                <div className="subheading mb-3">{props.company}</div>
                <p>{props.jdesc}</p>
            </div>
            <div className="resume-date text-md-right">
                <span className="text-primary">{props.duration}</span>
            </div>


        </div>


    )
}

export default experience;



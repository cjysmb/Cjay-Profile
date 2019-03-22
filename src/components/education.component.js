import React from 'react';
import "bootstrap/dist/css//bootstrap.min.css";
import '../css/resume.css';
import '../css/resume.min.css';

const education = (props) => {

    return (
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
                <h3 class="mb-0">{props.school}</h3>
                <div class="subheading mb-3">{props.course}</div>
                <div>{props.major}</div>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-primary">{props.duration}</span>
            </div>
        </div>
    )
}

export default education;
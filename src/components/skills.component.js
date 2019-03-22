import React, { Component } from 'react';
import "jquery/dist/jquery";
import "bootstrap/dist/css//bootstrap.min.css";
import '../css/resume.css';
import '../css/resume.min.css';

export default class Skill extends Component {

    render() {

        return (
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                    <div className="w-100">
                        <h2 className="mb-5">Skills</h2>

                        <div class="subheading mb-3">Programming Languages &amp; Tools</div>
                        <ul class="list-inline dev-icons">
                            <li class="list-inline-item">
                                <i class="fab fa-html5"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-css3-alt"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-react"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-node-js"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-git"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-npm"></i>
                            </li>
                            <li class="list-inline-item">
                                <i class="fab fa-hyperledger"></i>
                            </li>

                        </ul>
                        <div class="subheading mb-3">Workflow</div>
                        <ul class="fa-ul mb-0">
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Mobile-First, Responsive Design</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Cross Browser Testing &amp; Debugging</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Cross Functional Teams</li>
                            <li>
                                <i class="fa-li fa fa-check"></i>
                                Agile Development &amp; Scrum</li>
                        </ul>
                    </div>
                </section>
            </div>

        );
    }
}
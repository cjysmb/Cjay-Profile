import React, { Component } from 'react';

import "jquery/dist/jquery";
import "bootstrap/dist/css//bootstrap.min.css";
import '../css/resume.css';
import '../css/resume.min.css';

class About extends Component {

    render() {

        return (
            <div className="container-fluid p-0">
                <section className="resume-section p-3 p-lg-5 align-items-center" id="about">
                    <div className="w-100">
                        <h1 className="mb-0">Christian Jaede
                                <span className="text-primary"> Samboa</span>
                        </h1>

                    </div>
                    <div className="subheading mb-3">Brgy. Bagong Nayon I Antipolo City · Manila, Philippines · (63)905-587-4086 ·
                            <a href="cjsamboa@gmail.com">cjsamboa@gmail.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level
                        overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall
                        value proposition.
                    </p>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/christian-jaede-samboa-3a8a67181/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/cjysmb">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://twitter.com/badoongski">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="">
                            <i class="fab fa-instagram"></i>
                        </a>

                        <a href="https://www.facebook.com/Badoongs">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>


                </section>

                <hr className="m-0"></hr>
            </div>
        );

    }
}

export default About;
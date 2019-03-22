import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';

import '../css/resume.css';
import '../css/resume.min.css';
// import '../vendor/jquery/jquery'
// import '../js/resume.min';

import dp from '../img/SAMBOA, CHRISTIAN JAEDE.jpg';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState(state => ({

            collapse: !state.collapse
        }));
    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Christian Jaede Samboa</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={dp} alt="" />
                        </span>
                    </a>
                    <Button className="navbar-toggler" type="button" data-toggle="collapse" onClick={this.toggle} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <Collapse className="collapse navbar-collapse" isOpen={this.state.collapse} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">Interest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">Seminars and Training Attended</a>
                            </li>
                        </ul>
                    </Collapse>
                </nav>
            </div>
        );
    }
}

export default NavBar;
import React from 'react';
import {Link} from "react-router-dom";

export class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar" role="navigation">
                <div className="navbar-brand" id="navbar-logo">
                        Amélie Thomas
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start align-content-between">
                        <a className="navbar-item">
                            <Link to="/">Accueil</Link>
                        </a>
                        <a className="navbar-item">
                            <Link to="/gallery">Galerie</Link>
                        </a>
                        <a className="navbar-item">
                            <Link to="/about">A propos</Link>
                        </a>
                        <a className="navbar-item">
                            <Link to="/contact">Contact</Link>
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button" onClick={console.log("Ez")}>
                                Téléchargez mon CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

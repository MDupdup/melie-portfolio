import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import saveAs from 'file-saver';



export class Navbar extends React.Component {
    downloadCV() {
        axios.request({
            url: 'http://localhost:5000/api/downloadCV',
            method: 'GET',
            responseType: 'blob',
            headers: {
                'Accept': 'application/pdf',
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(res => {
                console.log(res);
                const blob = new Blob([res.data], {
                    type: 'application/pdf',
                });

                saveAs(blob, 'AmélieTHOMAS_CV.pdf');
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            <button className="button" onClick={this.downloadCV()}>
                                Téléchargez mon CV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

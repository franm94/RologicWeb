import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.png'
import pic03 from '../assets/images/pic03.png'
import pic04 from '../assets/images/pic04.png'

import { FaBeer } from 'react-icons/fa';

class Homepage extends React.Component {
    render() {
        const siteTitle = "Rologic";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper" >
                        <div className="col-6">
                            <header className="major">
                                <h2>Lleva a cabo tus proyectos</h2>
                            </header>
                            <p align="justify">Con la ayuda de Rologic pordrá llevar a cabo sus proyectos, ya sean personales o como empresa.
                            Tenemos experiencia en el desarrollo de proyectos de IoT (internet of things).
                            Hemos realizado proyectos satisfactoriamente tanto con particulares como con empresas que avalan nuestro esfuerzo.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="header">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Servicios</h2>
                            </header>
                            <p></p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Programación</h3>
                            <p></p>
                            <p></p><p></p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>Diseño e impresión 3D</h3>
                            <p></p>
                            <p></p><p></p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Electrónica</h3>
                            <p></p>
                            <p></p><p></p>
                        </div>

                    </div>
                </section>
                <section id="three" className="main style1 special">

                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">


                                <li><span className="icon style3 major fa-code"></span></li>
                                <li><span className="icon style4 major fa-microchip"></span></li>

                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Conócenos</h2>
                            </header>
                            <p align="justify">Somos dos estudiantes de ingeniería en telecomunicaciones con una pasión por el avance tecnológico y con muchas ganas de aplicar lo que estudiamos. Rologic nace de la idea de ofrecer un servicio tecnológico al alcance de cualquiera, ya sean particulares o empresas.
                            Cubriendo necesidades que dificultaban la realizacion de sus proyectos</p>
                            <p align="justify"></p>
                            <p align="justify"></p>
                            </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default Homepage;

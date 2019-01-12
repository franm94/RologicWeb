import React from 'react'

import logo from '../assets/images/logo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">

                  <span className="icon major fa-cloud"></span>
                  <span className="image fit">  <h1>ROLOGIC</h1></span>
                    <p>Dale vida a tus ideas</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">descubre más</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header

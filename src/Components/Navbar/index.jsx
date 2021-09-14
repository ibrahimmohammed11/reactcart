import React, { Component, Fragment } from 'react'
import Styles from "./style.module.css";

export default class Navbar extends Component {

    render() {
        let { totalQty, totalPrice } = this.props;
        return (
            <Fragment>
                <nav className={`${Styles.navColor} navbar navbar-expand-lg`}>
                    <div className="container-fluid">
                        <a className={`${Styles.colorSt} navbar-brand`} href="#g">AppStore</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item d-flex">
                                    <span className={`${Styles.colorSt} nav-link`}>${totalPrice.toFixed(2)}</span>
                                    <span className={`${Styles.colorSt} nav-link`}>Cart</span>
                                    <span className={`${Styles.colorSt} nav-link`}><i className="fas fa-shopping-cart"></i><sup className={Styles.cartCount}>{totalQty}</sup></span>

                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

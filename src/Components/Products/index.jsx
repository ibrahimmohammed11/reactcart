import React, { Component, Fragment } from 'react';
import ProductsData from "../store.js";

import Styles from "./style.module.css";

export default class Products extends Component {
    render() {
        let { getProductData } = this.props;
        return (
            <Fragment>
                <div className="row">
                    {ProductsData?.map((product, key) => {
                        return <div key={key} className="col-md-4 mb-4">
                            <div className={`${Styles.cardSt} card text-center `}>
                                <img src={product.image} alt=".." className={Styles.imgStyle} />
                                <div className="card-body">
                                    <h5 className={Styles.titleStyle}>{product.title}</h5>
                                    <h2>${product.price}</h2>
                                    <strong className="card-text d-block mb-3 mainColor">{product.category}</strong>
                                    <button onClick={() => getProductData(product)} className={`${Styles.btnStyle} btn btn-block`}><i className="fas fa-shopping-cart"></i> Add To Cart</button>
                                </div>

                            </div>
                        </div>
                    })}
                </div>


            </Fragment>
        )
    }
}

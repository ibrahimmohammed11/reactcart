import React, { Component, Fragment } from 'react'

import Styles from "./style.module.css";

export default class Cart extends Component {

    render() {
        let { items, getProductData, decrementItem, deleteItem } = this.props;
        return (
            <Fragment>
                <h2 className="mainColor">Cart items</h2>
                <div>
                    {items.length > 0 ? items?.map((item, key) => {
                        return <div key={key}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <img src={item.image} alt="." className={Styles.imgStyle} />
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <h6>{item.title}</h6>
                                        <strong className="card-text d-block mb-3 mainColor">${item.price}</strong>
                                        <div className="d-flex align-items-center">
                                            <button onClick={() => getProductData(item)} className={`${Styles.addBtn} btn`}>+</button>
                                            <span className={`${Styles.numSt} mx-2`}>{item.qty}</span>
                                            <button onClick={() => decrementItem(item)} className={`${Styles.minBtn} btn mr-2`}>-</button>
                                            <button onClick={() => deleteItem(item)} className={`${Styles.delBtn} btn`}><i className="fas fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    }) : <div className="text-center"><p className={Styles.emptyCart}>Cart is empty</p></div>}

                </div>
            </Fragment>
        )
    }
}

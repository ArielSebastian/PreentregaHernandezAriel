import React from 'react';
import './CartWidget.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget({ itemCount }) {
    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

export default CartWidget;
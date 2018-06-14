import React from 'react';
import Aux from '../../../hoc/_Aux';

const orderSummary = ({ ingredients }) => {

    const ingredientSummary = Object.keys(ingredients)
        .map(igkey => {
            return (
                <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:
                        <span>{ingredients[igkey]}</span>
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    );
}

export default orderSummary;
import React from 'react';

import classes from './Burger.css';
import BugerIngrediant from './BurgerIngrediant/BurgerIngrediant';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BugerIngrediant key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingrediants!</p>
    }

    return (
        <div className={classes.Burger}>
            <BugerIngrediant type="bread-top" />
            {transformedIngredients}
            <BugerIngrediant type="bread-bottom" />
        </div>
    );
};

export default burger;
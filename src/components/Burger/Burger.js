import React from 'react';

import classes from './Burger.css';
import BugerIngrediant from './BurgerIngrediant/BurgerIngrediant';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BugerIngrediant type="bread-top"/>
            <BugerIngrediant type="cheese"/>
            <BugerIngrediant type="meat"/>
            <BugerIngrediant type="bread-bottom"/>
        </div>
    );
};

export default burger;
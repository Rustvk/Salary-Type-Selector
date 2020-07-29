import React from 'react';
import classes from './style.module.scss';
import { Field } from 'redux-form';

export default ({isActive}: {isActive?: boolean}) => {
    return (
        <label className={classes.switchContainer}>
            <span className={isActive ? '' : classes.activeLabel }>Указать с НДФЛ</span>
            <div className={classes.switch}>
                <Field
                    name="TaxSwitcher"
                    component="input"
                    type="checkbox"
                />
                <span className={classes.slider}/>
            </div>
            <span className={isActive ? classes.activeLabel : ''}>Без НДФЛ</span>
        </label>
    );
};
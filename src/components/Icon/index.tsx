import React from 'react';
import classes from './style.module.scss';

export default (props: {
    isActive: boolean;
    onHover: Function;
    onClose: Function;
}) => {
    const classNames = [
        classes.icon
    ];
    if (props.isActive) {
        classNames.push(classes.closeIcon);
    }
    return (
        <div
            className={classNames.join(' ')}
            onMouseOver={() => props.onHover()}
            onClick={() => props.isActive ? props.onClose() : null}>
        </div>
    );
};
import classes from './style.module.scss';
import React from 'react';
import Icon from '../Icon';

export default (props: {
    isShown: boolean;
    value?: string;
    onHintIconHovered: Function;
    onHintIconClose: Function;
}) => {
    return (
        <div>
            {
                props.value ?
                    <div className={classes.hintContainer}>
                        <Icon
                            isActive={props.isShown}
                            onClose={props.onHintIconClose}
                            onHover={props.onHintIconHovered}
                        />
                        {
                            props.isShown ?
                                <div className={classes.hint}>
                                    {
                                        props.value
                                    }
                                </div> :
                                ''
                        }
                    </div>:
                    ''
            }
        </div>
    );
};
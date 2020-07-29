import React from 'react';
import { Field } from 'redux-form';
import classes from './style.module.scss';
import {salaryType, formProps} from '../../interfaces/salary';
import Hint from '../../components/Hint';
import Switcher from '../../components/Switcher';

let currentType: salaryType;

export default (props: formProps) => {
    const types = props.salary.list;
    let handAmount;
    let taxAmount;
    let monthAmount;
    if (props.salaryValue) {
        if (props.isSwitcherActive) {
            handAmount = Math.round(+props.salaryValue);
            taxAmount = Math.round((handAmount / 100) * 13);
            monthAmount = Math.round(handAmount + taxAmount);
        } else {
            monthAmount = Math.round(+props.salaryValue);
            taxAmount = Math.round((monthAmount / 100) * 13);
            handAmount = Math.round(monthAmount - taxAmount);
        }
    }
    return (
        <form className={classes.form}>
            <div>
                {
                    types.map((item) => {
                        if (props.selectedType === item.key) {
                            currentType = item;
                        }
                        return (
                            <div key={item.key} className={classes.itemContainer}>
                                <label>
                                    <Field
                                        className={classes.radioButton}
                                        name="salaryList"
                                        component="input"
                                        type="radio"
                                        value={item.key}
                                        checked={props.selectedType === item.key}
                                    />
                                    <strong>{item.title}</strong>
                                </label>
                                <Hint
                                    value={item.typeHint}
                                    isShown={props.salary.hoveredHintType === item.key}
                                    onHintIconHovered={props.onHintChanged.bind(null, item.key)}
                                    onHintIconClose={props.onHintChanged}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div>
                {
                    currentType.showTaxHint ? <Switcher isActive={props.isSwitcherActive}/> : ''
                }
                {
                    currentType.showInput ?
                        <div>
                            <Field
                                className={classes.salaryInput}
                                name="salaryValue"
                                value={currentType.key}
                                component="input"
                                type="number"
                            />
                            <strong>
                                {
                                    currentType.inputHint ?
                                        <span>₽ {currentType.inputHint}</span> :
                                        '₽'
                                }
                            </strong>
                        </div> :
                        ''
                }
                {
                    currentType.showTaxHint && props.salaryValue ?
                        <div className={classes.taxHint}>
                            <div className={classes.taxHintItem}><strong>{handAmount}</strong> ₽ сотрудник будет получать на руки</div>
                            <div className={classes.taxHintItem}><strong>{taxAmount}</strong> НДФЛ, 13% от оклада</div>
                            <div className={classes.taxHintItem}><strong>{monthAmount}</strong> за сотрудника в месяц</div>
                        </div> :
                        ''
                }
            </div>
        </form>
    );
};

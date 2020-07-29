import React, { Component } from 'react';
import {formValueSelector, InjectedFormProps, reduxForm} from 'redux-form';
import {changeHint} from '../../store/actions/salary';
import Form from '../../components/Form';
import { connect } from 'react-redux';
import { formProps } from '../../interfaces/salary';
import classes from './style.module.scss';

class MyForm extends Component<formProps & InjectedFormProps<{}, formProps>> {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.sumTitle}>Сумма</div>
                <Form {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state: formProps) => {
    const selector = formValueSelector('myForm');
    return {
        salary: state.salary,
        salaryValue: + selector(state, 'salaryValue') || 0,
        isSwitcherActive: selector(state, 'TaxSwitcher'),
        selectedType: selector(state, 'salaryList') || 'MONTH'
    }
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onHintChanged: (type?: string) => dispatch(changeHint(type))
    }
}

const newForm = reduxForm<{}, formProps>({
    form: 'myForm'
})(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(newForm);
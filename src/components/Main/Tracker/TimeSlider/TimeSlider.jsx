import React, {useState} from "react";
import s from './TimeSlider.module.css'
import accept from '../../../../img/accept.svg'
import decline from '../../../../img/decline.svg'
import {Slider} from "@material-ui/core";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {Field, reduxForm} from "redux-form";
import {Input2} from "../../../../common/Forms/FormsControl";
import {required} from "../../../../utilities/validators/validators";

const useStyles = makeStyles({
    root: {
        width: 543,
    }
})

function valueLabelFormat(value) {
    let a = Math.trunc(value / 60);
    let b = value % 60;
    if (value < 600) {
        a = '0' + a;
    }
    if (b === 0) {
        b = '0' + b;
    }
    return `${a} : ${b}`;
}

const RangeSlider = withStyles({
    root: {
        color: '#FFCC40',
    },
    track: {
        height: 10,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 10,
        borderRadius: 4
    },
    thumb: {
        height: 16,
        width: 16,
        backgroundColor: '#FFCC40',
        marginTop: -3,
        border: '6px solid #fff'
    },
    valueLabel: {
        left: -20,
        top: 25,
        '& *': {
            background: "transparent",
            color: "#000",
            width: 50,
            height: 50,
            fontSize: 16
        },
    }
})(Slider);

const TimeSlider = (props) => {


    const handleChange = (event, newValue) => {
        props.setSliderValue(newValue);
    };

    const classes = useStyles();

    return (
        <div className={s.wrapperWorklog}>
            <div className={s.worklogWindow}>
                <div className={s.header}><p>New worklog</p></div>
                <div className={s.container}>
                  <div className={s.rangeSlider}>
                    <div className={classes.root}>
                        <RangeSlider
                            value={props.sliderValue}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            aria-labelledby="range-slider"
                            getAriaValueText={valueLabelFormat}
                            valueLabelFormat={valueLabelFormat}
                            min={420}
                            max={1140}
                            step={30}
                        />
                    </div>
                  </div>
                    <IssueForm onSubmit={props.onSubmit}/>
                </div>
            </div>
        </div>
    )
}

let IssueForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Worklog name</label>
                <Field name={'label'} component={Input2} placeholder={'Enter the worklog name'} validate={[required]}/>
                <label>Issue</label>
                <Field name={'issue'} component={Input2} placeholder={'Enter the issue name'} validate={[required]}/>
                <div className={s.worklogButtons}>
                    <button className={s.acceptButton}>
                        <img className={s.accept} src={accept} alt='accept'/>
                    </button>
                    <button className={s.declineButton}>
                        <img className={s.decline} src={decline} alt='decline'/>
                    </button>
                </div>
            </form>
        </div>
    )
};

IssueForm = reduxForm(
    {
        form: 'issueForm'
    }
)(IssueForm);

export default TimeSlider;

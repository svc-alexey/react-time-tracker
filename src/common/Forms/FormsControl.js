import React from "react";
import classes from "./FormsControl.module.css";


export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl}>
            <input {...input} {...props} className={classes.inputStyle}/>
        </div>
    )
}

export const Input2 = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl}>
            <input {...input} {...props} className={classes.inputStyle2}/>
            <div>{hasError ? <span className={classes.error}>{meta.error}</span> : null}</div>
        </div>
    )
}
// since this is a custom component, we cant use the ref inside because we need to
// use another built-in function in side react called forwardRef()
// forwardRef() is a technique used for passing ref automatically
import React from "react";
import classes from "./input.module.css";
export const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} ref={ref} />
        </div>
    );
});

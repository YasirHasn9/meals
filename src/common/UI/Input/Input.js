import classes from "./input.module.css";
export const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
        </div>
    );
};

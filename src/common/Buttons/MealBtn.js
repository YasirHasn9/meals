import classes from "./mealForm.module.css";
export const ButtonMeal = (props) => {
    return <button className={classes.btn_meal_form}>{props.children}</button>;
};

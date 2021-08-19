import { useRef, useState } from "react";
import classes from "./MealForm.module.css";
import { ButtonMeal } from "../../../../common/Buttons/MealBtn";
import { Input } from "../../../../common/UI/Input/Input";
export const MealForm = (props) => {
    // console.log("this ios from the mealForm to check the props ", props.name);
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        let enteredAmount = amountRef.current.value;
        let enteredNumber = +enteredAmount;
        if (
            enteredAmount.trim().length === 0 ||
            enteredNumber < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredNumber);
    };
    return (
        <form className={classes.meal_Form} onSubmit={handleSubmit}>
            <Input
                ref={amountRef}
                label="Amount"
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <ButtonMeal>+ add</ButtonMeal>
            {!amountIsValid ? <p>Please enter a valid amount (1-5).</p> : null}
        </form>
    );
};

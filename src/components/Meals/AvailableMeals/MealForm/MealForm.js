import classes from "./MealForm.module.css";
import { ButtonMeal } from "../../../../common/Buttons/MealBtn";
import { Input } from "../../../../common/UI/Input/Input";
export const MealForm = (props) => {
    return (
        <form className={classes.meal_Form}>
            <Input
                label="Amount"
                input={{
                    id: "amount",
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <ButtonMeal>+ add</ButtonMeal>
        </form>
    );
};

import classes from "./singleMeal.module.css";
import { MealForm } from "./MealForm/MealForm";
export const SingleMeal = ({ meal }) => {
    const price = `$${meal.price.toFixed(2)}`;
    return (
        <li className={classes.single_meal}>
            <div>
                <h3>{meal.name}</h3>
                <i>{meal.description}</i>
                <p className={classes.price_meal}>{price}</p>
            </div>
            <MealForm />
        </li>
    );
};

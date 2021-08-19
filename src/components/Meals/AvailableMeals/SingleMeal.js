// import { useContext } from "react";
import classes from "./singleMeal.module.css";
import { MealForm } from "./MealForm/MealForm";
// store
import { useMealStore } from "../../../Containers/Context/MealsContext";
export const SingleMeal = ({ meal }) => {
    const store = useMealStore();
    const price = `$${meal.price.toFixed(2)}`;
    const onAddToCart = (amount) => {
        store.addMeal({
            id: meal.id,
            name: meal.name,
            amount: amount,
            price: meal.price,
        });
    };
    return (
        <li className={classes.single_meal}>
            <div>
                <h3>{meal.name}</h3>
                <i>{meal.description}</i>
                <p className={classes.price_meal}>{price}</p>
            </div>
            <MealForm id={meal.id} onAddToCart={onAddToCart} name={meal.name} />
        </li>
    );
};

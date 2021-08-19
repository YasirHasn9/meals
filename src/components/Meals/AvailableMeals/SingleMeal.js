// import { useContext } from "react";
import classes from "./singleMeal.module.css";
import { MealForm } from "./MealForm/MealForm";
// store
// import { useCartMeals } from "../../../Store/CartContext";
// import { CartContext } from "../../../Store/CartContext";
import { useMealStore } from "../../../Containers/Context/MealsContext";
export const SingleMeal = ({ meal }) => {
    // let store = useContext(CartContext);
    const price = `$${meal.price.toFixed(2)}`;
    const store = useMealStore();
    // console.log("this is from the singel meal ", store);

    // const onAddToCart = (amount) => {
    //     store.addItem({
    //         id: meal.id,
    //         name: meal.name,
    //         amount: amount,
    //         price: meal.price,
    //     });
    // };
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

// import { useContext } from "react";

import { CartIcon } from "../Icons/index";
import classes from "./cartButton.module.css";
import { useModal } from "../../Store/modalContext";
import { useMealStore } from "../../Containers/Context/MealsContext";
// import { CartContext } from "../../Store/CartContext";
// import { useMealStore } from "../../Containers/Context/MealsContext";
export const CartButton = () => {
    // let { meals } = useContext(CartContext);
    // let { meals } = useMealStore();
    // let numberOfMeals = meals.reduce((acc, curMeal) => {
    //     return acc + curMeal.amount;
    // }, 0);
    const { meals } = useMealStore();
    const numberOfMeals =
        meals.reduce((acc, curMeal) => acc + curMeal.amount, 0) || 0;
    const { dispatchModalAction } = useModal();
    return (
        <button
            className={classes.btn}
            onClick={() => dispatchModalAction({ type: "open" })}
        >
            <span className={classes.icon_cart_button}>
                <CartIcon />
            </span>
            <span className={classes.my_cart}>Your cart</span>
            <span className={classes.number_cart_button}>{numberOfMeals}</span>
        </button>
    );
};

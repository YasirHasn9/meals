import classes from "./cartItem.module.css";
// import { useMealStore } from "../../Containers/Context/MealsContext";d
export const CartItem = ({ meal, onAdd, onRemove }) => {
    console.log("This is cart item", onRemove);
    return (
        <li className={classes.cart_item}>
            <div className={classes.cart_item_info}>
                <h3 className={classes.title}>{meal.name}</h3>
                <p>
                    <span className={classes.cart_item_price}>
                        {meal.price}
                    </span>{" "}
                    <span className={classes.cart_item_number}>
                        {meal.amount}
                    </span>
                </p>
            </div>
            <div className={classes.cart_item_btns}>
                <button onClick={onRemove} className={classes.cart_item_remove}>
                    &#8211;
                </button>
                <button onClick={onAdd} className={classes.cart_item_add}>
                    +
                </button>
            </div>
        </li>
    );
};

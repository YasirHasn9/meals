import classes from "./cartItem.module.css";
export const CartItem = ({ meal }) => {
    console.log(meal);
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
                <button className={classes.cart_item_remove}>&#8211;</button>
                <button className={classes.cart_item_add}>+</button>
            </div>
        </li>
    );
};

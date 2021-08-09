import { CartIcon } from "../Icons/index";
import classes from "./CartButton.module.css";
// import classes from "./Header.module.css";
export const CartButton = (props) => {
    return (
        <button className={classes.btn}>
            <span className={classes.icon_cart_button}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.number_cart_button}>3</span>
        </button>
    );
};

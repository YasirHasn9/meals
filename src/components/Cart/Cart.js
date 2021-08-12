import { Modal } from "../../common/UI/Modal/Modal";
import classes from "./cart.module.css";
import { useModal } from "../../Containers/Context/ModalContext";
export const Cart = () => {
    const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.5 }].map(
        (meal) => <li key={meal.id}>{meal.name}</li>
    );
    const { dispatch } = useModal();
    return (
        <Modal>
            <ul>{cartItems}</ul>
            <div className={classes.meal_price}>
                <span className={classes.total_amount}>Total Amount</span>
                <span>$35.55</span>
            </div>
            <div className={classes.cart_items_btns}>
                <button
                    onClick={() => dispatch({ type: "close" })}
                    className={classes.btn_close}
                >
                    Close
                </button>
                <button className={classes.btn_order}>Order</button>
            </div>
        </Modal>
    );
};

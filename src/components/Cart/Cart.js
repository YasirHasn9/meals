import { CartItem } from "./CartItem";
import { Modal } from "../../common/UI/Modal/Modal";
import classes from "./cart.module.css";
import { useMealStore } from "../../Containers/Context/MealsContext";
import { useModal } from "../../Store/modalContext";
export const Cart = () => {
    const { dispatchModalAction } = useModal();
    const store = useMealStore();
    const { meals } = store;
    const cartRemoveItem = (id) => {
        store.removeMeal(id);
    };
    const cartItemAdd = (item) => {
        store.addMeal({
            ...item,
            amount: 1,
        });
    };
    // console.log("this is from the carty com", store.meals);
    return (
        <Modal>
            <ul className={classes.cart_list}>
                {meals.length > 0
                    ? meals.map((meal) => {
                          return meal.amount > 0 ? (
                              <CartItem
                                  key={meal.id}
                                  meal={meal}
                                  onRemove={cartRemoveItem.bind(null, meal.id)}
                                  onAdd={cartItemAdd.bind(null, meal)}
                              />
                          ) : null;
                      })
                    : null}
            </ul>
            <div className={classes.meal_price}>
                <span className={classes.total_amount}>Total Amount</span>
                <span>${store.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.cart_items_btns}>
                <button
                    onClick={() => dispatchModalAction({ type: "close" })}
                    className={classes.btn_close}
                >
                    Close
                </button>
                {store.totalAmount > 0 ? (
                    <button className={classes.btn_order}>Order</button>
                ) : null}
            </div>
        </Modal>
    );
};

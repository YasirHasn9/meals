import { useReducer, useContext, createContext } from "react";

const ContextCart = createContext();

const initialMealsState = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
        amount: 0,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
        amount: 0,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
        amount: 0,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
        amount: 0,
    },
];

const defaultState = {
    meals: initialMealsState,
    totalAmount: 0,
};

const mealsReducer = (state, action) => {
    console.log("88888888888888888", state);
    switch (action.type) {
        case "ADD":
            let newMeals;
            if (state.meals[action.payload.name]) {
                return action.payload.amount + 1;
            } else {
                newMeals = [...state.meals, action.payload];
            }
            let newAmount =
                state.totalAmount +
                action.payload.price * action.payload.amount;
            console.log(
                "this is from the add function dispatcher",
                action.payload.name
            );
            return {
                meals: newMeals,
                totalAmount: newAmount,
            };
        default:
            return state;
    }
};

export const MealsCartProvider = ({ children }) => {
    const [mealsState, mealsDispatcher] = useReducer(
        mealsReducer,
        defaultState
    );

    const addNewMeal = (meal) => {
        mealsDispatcher({ type: "ADD", payload: meal });
    };
    const removeMeal = (id) => {
        mealsDispatcher({ type: "REMOVE", id: id });
    };
    const store = {
        meals: mealsState.meals,
        totalAmount: mealsState.totalAmount,
        addMeal: addNewMeal,
        removeMea: removeMeal,
    };

    return (
        <ContextCart.Provider value={store}>{children}</ContextCart.Provider>
    );
};

export const useMealStore = () => {
    let context = useContext(ContextCart);
    if (context === undefined) {
        throw new Error("Use meal store should inside the MealsCartProvider");
    }
    return context;
};

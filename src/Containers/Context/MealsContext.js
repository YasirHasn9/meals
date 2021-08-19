import { useReducer, useContext, createContext } from "react";
const ContextCart = createContext({
    meals: [],
    totalAmount: 0,
    addMeal: (meal) => {},
    removeMeal: (id) => {},
});

const defaultState = {
    meals: [],
    totalAmount: 0,
};

const mealsReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedAmount =
            state.totalAmount + action.payload.price * action.payload.amount;

        const index = state.meals.findIndex(
            (meal) => meal.id === action.payload.id
        );
        const existedMeal = state.meals[index];
        let newMeals;
        if (existedMeal) {
            const newMeal = {
                ...existedMeal,
                amount: existedMeal.amount + action.payload.amount,
            };
            newMeals = [...state.meals];
            newMeals[index] = newMeal;
        } else {
            newMeals = state.meals.concat(action.payload);
        }
        return {
            meals: newMeals,
            totalAmount: updatedAmount,
        };
    }
    if (action.type === "REMOVE") {
        const index = state.meals.findIndex((meal) => meal.id === action.id);
        const existedMeal = state.meals[index];
        const updatedAmount = state.totalAmount - existedMeal.price;
        let newMeals;
        if (existedMeal.amount === 1) {
            newMeals = state.meals.filter((meal) => meal.id !== action.id);
        } else {
            const newMeal = {
                ...existedMeal,
                amount: existedMeal.amount - 1,
            };
            newMeals = [...state.meals];
            newMeals[index] = newMeal;
        }

        return {
            meals: newMeals,
            totalAmount: updatedAmount,
        };
    }

    return defaultState;
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
        removeMeal: removeMeal,
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

export const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: "m2",
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: "m3",
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: "m4",
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

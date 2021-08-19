// // import { useReducer, createContext, useContext } from "react";
// // export const CartContext = createContext();

// // const defaultState = {
// //     items: [],
// //     totalAmount: 0,
// // };
// // const cartReducer = (state, action) => {
// //     switch (action.type) {
// //         case "ADD":
// //             let newItems = [...state.items, action.payload]
// //             let newPrice = state.totalAmount + action.payload.price * action.payload.amount
// //             return newItems
// //             // return {
// //             //     ...state,
// //             //     items: [...state.items, action.payload],
// //             //     totalAmount:
// //             //         state.totalAmount +
// //             //         action.payload.price * action.payload.amount,
// //             // };
// //         case "REMOVE":
// //             let updatedItems = [
// //                 ...state.items.filter(
// //                     (items) => items.id === action.payload.id
// //                 ),
// //             ];
// //             let updatedTotalAmount = state.totalAmount - action.payload.price;
// //             return {
// //                 items: updatedItems,
// //                 totalAmount: updatedTotalAmount,
// //             };
// //         // return {
// //         //     ...state,
// //         //     items: [
// //         //         ...state.items.filter(
// //         //             (item) => item.id === action.payload.id
// //         //         ),
// //         //     ],
// //         // };
// //         default:
// //             return state;
// //     }
// // };

// // export const CartProvider = ({ children }) => {
// //     const [cartState, dispatchActionCart] = useReducer(
// //         cartReducer,
// //         defaultState
// //     );
// //     const addItemHandle = (item) => {
// //         dispatchActionCart({ type: "ADD", item });
// //     };
// //     const removeItemHandle = (id) => {
// //         dispatchActionCart({ type: "REMOVE", id: id });
// //     };
// //     const cartContext = {
// //         items: cartState.items,
// //         totalAmount: cartState.totalAmount,
// //         addItem: addItemHandle,
// //         removeItem: removeItemHandle,
// //     };
// //     return (
// //         <CartContext.Provider value={cartContext}>
// //             {children}
// //         </CartContext.Provider>
// //     );
// // };

// // export const useCartMeals = () => {
// //     const mealsCart = useContext(CartContext);
// //     if (mealsCart === undefined) {
// //         throw new Error("useCartMeals should be used inside the CartProvider");
// //     }
// //     return mealsCart;
// // };

// import { createContext, useReducer } from "react";
// export const CartContext = createContext();
// // these go inside the createContext but i just want  to see what would happen if i deleted them form the context
// //     {
// //     items: [],
// //     totalAmount: 0,
// //     addItem: (item) => {},
// //     removeItem: (id) => {},
// // }

// let initialMealsState = [
//     {
//         id: "m1",
//         name: "Sushi",
//         description: "Finest fish and veggies",
//         price: 22.99,
//         amount: 0,
//     },
//     {
//         id: "m2",
//         name: "Schnitzel",
//         description: "A german specialty!",
//         price: 16.5,
//         amount: 0,
//     },
//     {
//         id: "m3",
//         name: "Barbecue Burger",
//         description: "American, raw, meaty",
//         price: 12.99,
//         amount: 0,
//     },
//     {
//         id: "m4",
//         name: "Green Bowl",
//         description: "Healthy...and green...",
//         price: 18.99,
//         amount: 0,
//     },
// ];
// const defaultState = {
//     meals: initialMealsState,
//     totalAmount: 0,
// };
// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_MEAL":
//             // we don't wanna updated the original state, this is why im using the ...state.meals to return a new state
//             // or we can use the concat because it returns a new item
//             let newMeals = [...state.meals, action.payload];
//             let newPrice =
//                 state.price + action.payload.price * action.payload.amount;
//             return {
//                 meals: newMeals,
//                 totalAmount: newPrice,
//             };
//         case "REMOVE_MEAL":
//             let newMeals = [
//                 ...state.meals.filter((meal) => meal.id === action.payload.id),
//             ];
//             let newPrice =
//                 state.price - action.payload.price * action.payload.amounts;
//             return {
//                 meals: newMeals,
//                 totalAmount: newPrice,
//             };
//         default:
//             return state;
//     }
// };

// export const CartProvider = (props) => {
//     const [mealsState, dispatchMealsState] = useReducer(
//         cartReducer,
//         defaultState
//     );
//     const addItemHandler = (item) => {
//         dispatchMealsState({ type: "ADD_MEAL", payload: item });
//     };
//     const removeItemHandler = (id) => {
//         dispatchMealsState({ type: "REMOVE_MEAL", payload: id });
//     };
//     const cartContext = {
//         meals: mealsState.meals,
//         totalAmount: mealsState.totalAmount,
//         addItem: addItemHandler,
//         removeItem: removeItemHandler,
//     };
//     return (
//         <CartContext.Provider value={cartContext}>
//             {props.children}
//         </CartContext.Provider>
//     );
// };

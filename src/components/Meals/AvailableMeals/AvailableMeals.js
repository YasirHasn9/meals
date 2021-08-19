import { Card } from "../../../common/UI/Card/Card";
import classes from "./availableMeals.module.css";
import { SingleMeal } from "./SingleMeal";
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
export const AvailableMeals = () => {
    const meals = DUMMY_MEALS.map((meal) => (
        <SingleMeal meal={meal} key={meal.id} />
    ));
    return (
        <section className={classes.available_meals}>
            <Card>
                <ul>{meals}</ul>
            </Card>
        </section>
    );
};

import classes from "./mealsSummary.module.css";
export const MealsSummary = () => {
    return (
        <section className={classes.meals_summary}>
            <h2>Delicious food, delivered for you</h2>
            <p>
                Choose your favorite food from our broad selection of available
                meals and enjoy a delicious Breakfast, Dinner and lunch at home
            </p>
            <p>
                Our meals are cooked with high-quality ingredients, just-in-time
                and of course experienced chefs{" "}
            </p>
        </section>
    );
};

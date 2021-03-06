import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
// store
import { ModalProvider } from "./Store/modalContext";
import { MealsCartProvider } from "./Containers/Context/MealsContext";
function App() {
    return (
        <MealsCartProvider>
            <ModalProvider>
                <Cart />
                <Header />
            </ModalProvider>
            <main>
                <Meals />
            </main>
        </MealsCartProvider>
    );
}

export default App;

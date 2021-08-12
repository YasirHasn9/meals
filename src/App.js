import { Fragment, useState } from "react";
import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import { ModalProvider, useModal } from "./Containers/Context/ModalContext";
function App() {
    return (
        <Fragment>
            <ModalProvider>
                <Cart />
                <Header />
            </ModalProvider>

            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;

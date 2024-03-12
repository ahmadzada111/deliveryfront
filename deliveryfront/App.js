import {NavigationContainer} from "@react-navigation/native"
import BaseStackNavigation from "./src/navigation/BaseStackNavigation";
import {AuthProvider} from "./src/context/AuthContext";
import {CommonProvider} from "./src/context/CommonContext";
import {BasketProvider} from "./src/context/BasketContext"
import {FavouritesProvider} from "./src/context/FavouriteContext";

export default function App() {
    return (
        <AuthProvider>
            <CommonProvider>
                <FavouritesProvider>
                    <BasketProvider>
                        <NavigationContainer>
                            <BaseStackNavigation/>
                        </NavigationContainer>
                    </BasketProvider>
                </FavouritesProvider>
            </CommonProvider>
        </AuthProvider>
    );
}

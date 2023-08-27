import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import restaurantData from "./assets/restaurant_data.json";
import { RestaurantCardData } from "./entities/RestaurantCardData";

function App() {
    const restaurantCards = restaurantData.map(
        (restaurantCard: RestaurantCardData, index: number) => {
            return <RestaurantCard key={index} {...restaurantCard} />;
        }
    );

    return (
        <div>
            <Navbar />
            <section className="card-container">{restaurantCards}</section>
        </div>
    );
}

export default App;

import { useState } from "react";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import restaurantData from "./assets/restaurant_data.json";
import { RestaurantCardData } from "./entities/RestaurantCardData";

function App() {
    const itemsPerPage = 20;
    const [currPage, setCurrPage] = useState(1);
    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const totalPages = Math.ceil(restaurantData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currPage < totalPages) {
            setCurrPage(currPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currPage > 1) {
            setCurrPage(currPage - 1);
        }
    };

    const restaurantCards = restaurantData
        .slice(startIndex, endIndex)
        .map((restaurantCard: RestaurantCardData, index: number) => {
            return <RestaurantCard key={index} {...restaurantCard} />;
        });

    return (
        <div className="app">
            <Navbar />
            <section className="card-container">{restaurantCards}</section>
            <div className="footer">
                {currPage !== 1 && (
                    <button onClick={handlePrevPage} className="page-button">
                        Previous
                    </button>
                )}
                <span className="page-number">
                    {currPage}/{totalPages}
                </span>
                {currPage !== totalPages && (
                    <button onClick={handleNextPage} className="page-button">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;

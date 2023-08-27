import { RestaurantCardData } from "../entities/RestaurantCardData";

function RestaurantCard(props: RestaurantCardData) {
    const yelpRedirect = () => {
        window.open(props.url, "_blank");
    };

    return (
        <div className="card">
            <div className="card-stats">
                <span className="card-title">{props.name}</span>
                <img className="card-star" src="/images/star.png" />
                <span>{props.avg_rating}</span>
                <span className="gray">({props.review_count})</span>
            </div>
            <img
                className="card-img"
                src={props.image_url}
                onClick={yelpRedirect}
            />
        </div>
    );
}

export default RestaurantCard;

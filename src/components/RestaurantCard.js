import { RESTAURANT_LOGO_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resObj } = props;
    const { name, costForTwo, deliveryTime, avgRating, cuisines, cloudinaryImageId} = resObj.info;
    return (
        <div className="res-card">
            <img className="res-logo"  src={RESTAURANT_LOGO_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;
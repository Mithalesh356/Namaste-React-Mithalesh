import RestaurantCard from "./RestaurantCard";
import {useState} from 'react';
import resList from '../utils/mockData';


const Body = () => {
    
    const [listOfRestaurant,setListOfRestaurant] = useState(resList);    // Hooks
    return (
        <div className="body">
            <div className="filter">
                
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredList);
                }} >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((resObj) => (
                    <RestaurantCard key={resObj.info.id}  resObj={resObj} />
                ))};
            </div>
        </div>
    )
}

export default Body;
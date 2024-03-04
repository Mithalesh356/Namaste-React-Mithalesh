import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useState,useEffect} from 'react';
import resList from '../utils/mockData';


const Body = () => {
    // const arr = useState(resList);
    // const listOfRestaurant = arr[0];
    // const setListOfRestaurant = arr[1];

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (listOfRestaurant.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <input value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={() => {
                    const filteredData = listOfRestaurant.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    });
                    setFilteredListOfRestaurant(filteredData)
                }}>Search</button>


                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5);
                    setListOfRestaurant(filteredList);
                }} >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurant.map((resObj) => (
                    <RestaurantCard key={resObj.info.id}  resObj={resObj} />
                ))};
            </div>
        </div>
    )
}

export default Body;
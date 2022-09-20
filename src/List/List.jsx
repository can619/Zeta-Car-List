import { useState, useEffect } from 'react';
import Car from '../Car/Car';
import './List.css';

function List(){
    const [records, setRecords] = useState([]);
    const [city, setCity] = useState("Miami");
    const [state, setState] = useState("FL")


    useEffect(()=>{

        async function fetchCars(){
            try{
                let url = `https://www.autolist.com/search?page=1&location=${city}%2C+FL&make=Jeep&ads=web`
                const response = await fetch(url)
                const data = await response.json()
                setRecords(data.records);
            }catch (error){
                console.error(error)
            }
        }
        fetchCars()
    },[])

    const cars = records.map(car =>{
       return (
            <Car key={car.id} year={car.year} make={car.make} model={car.model} price={car.price} city={car.city} state={car.state} milage={car.milage} photo={car.primary_photo_url} color={car.display_color}/>            
       )
       })
    // title year price make model milage location/city/state  carThumbnailPic
    return (
        <div className='list'>
            {cars}
        </div>
    )
}
export default List;
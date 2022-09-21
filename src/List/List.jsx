import { useState, useEffect } from 'react';
import Car from '../Car/Car';
import Page from '../Page/Page';
import './List.css';

function List(){
    const [records, setRecords] = useState([]);
    const [page, setPage] = useState(1)


    useEffect(()=>{

        async function fetchCars(){
            try{
                let url = `https://www.autolist.com/search?page=${page}&location=Miami%2C+FL&make=Jeep`
                const response = await fetch(url)
                const data = await response.json()
                setRecords(data.records);
            }catch (error){
                console.error(error)
            }
        }
        fetchCars()
    },[page])

 
    
    function decrementPage(){
        setPage(page -1)
    }

    function incrementPage(){
        setPage(page + 1)
    }

    const cars = records.map(car =>{
       return (
            <Car key={car.id} year={car.year} make={car.make} model={car.model} price={car.price} city={car.city} state={car.state} mileage={car.mileage} photo={car.primary_photo_url} color={car.display_color}/>            
       )
       })
    // title year price make model milage location/city/state  carThumbnailPic
    return (
        <div className='list'>
            {cars}
            <Page page={page} decrementPage={decrementPage} incrementPage={incrementPage} />
        </div>
    )
}
export default List;
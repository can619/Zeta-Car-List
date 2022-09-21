import './Car.css';
import { AiOutlineHeart } from 'react-icons/ai';

function Car({ year, make, model, price, city, state, mileage, photo, color }){
    return (
        <div className="car">
            <div className='car-heart-img'>
                <AiOutlineHeart className='car-heart'/>
                <img src={`${photo}`} alt={`${color} ${make} ${model}`}/>                 
            </div>
 
            <div className='car-details'>
                    <div className="car-year-make-model">{year} {make} {model}</div>
                    <div className="car-price">{price}</div>
             
                    <div className='car-estimate'>Estimate</div>
                <div className='car-milage'>{mileage}</div>
                    <div className='car-city-state'>{`${city},${state}`}</div>
                    <button className='car-track-price'>Track Price</button>
                    <button className='car-availability'>Check Availability</button>               
            </div>
        </div>
    )
}
export default Car;

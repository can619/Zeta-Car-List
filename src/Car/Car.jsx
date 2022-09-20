import './Car.css';

function Car({ year, make, model, price, city, state, mileage, photo, color }){
    return (
        <div className="car">
            <img className='car-photo' src={`${photo}`} alt={`${color} ${make} ${model}`}/>
            <div className='car-title-price'>
                <div className="car-year-make-model">{year} {make} {model}</div>
                <div className="car-price">{price}</div>
            </div>
            <div className='car-milage'>{mileage}</div>
            <div className='car-city-inventory'>
                <div className='car-city-state'>{`${city},${state}`}</div>
                <button className='car-track-price'>Track Price</button>
                <button className='car-availability'>Check Availability</button>
            </div>
        </div>
    )
}
export default Car;

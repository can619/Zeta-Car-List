import './Car.css';

function Car({ year, make, model, price, city, state, milage, photo, color }){
    return (
        <div className="car">
            <img className='car-photo' src={`${photo}`} alt={`${color} ${make} ${model}`}/>
            <div className='car-title-price'>
                <div className="car-year-make-model">{year} {make} {model}</div>
                <div className="car-price">{price}</div>
            </div>
            <div className='car-milage'>{milage}</div>
            <div className='car-city-inventory'>
                <div className='car-city-state'>{`${city},${state}`}</div>
                <div className='car-inventory'>Track Price</div>
                <div className='car-inventory'>Check Availability</div>
            </div>
        </div>
    )
}
export default Car;

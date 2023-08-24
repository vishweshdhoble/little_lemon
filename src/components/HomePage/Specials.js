import React from 'react';

const Special = (props) => {
    const {item, image, price, description} = props;
    const orderOnline = "Order Online ->"
    return ( <article>
        <div className='special-container'>
            <img className="special-img" src={image}></img>
            <div className="special-details">
                <div className="price-line">
                    <h5>{item}</h5>
                    <span style={{color: 'orange'}}>${price}</span>
                </div>
                <div className='order-online-special'>
                    <span>{description}</span>
                    <span className='order-online-span'>{orderOnline}</span>
                    </div>
                </div>
        </div>
    </article>)
}

export default Special;
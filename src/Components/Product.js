import React from 'react'
import { NavLink } from 'react-router-dom';

const Product = (currElem) => {

    const { id, name, image, price, category } = currElem;

    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className='card'>
                <figure>
                    <img src={img} alt={name} />
                    <figcaption className='caption'>{cap}</figcaption>
                </figure>
            </div>
        </NavLink>
    )
}

export default Product
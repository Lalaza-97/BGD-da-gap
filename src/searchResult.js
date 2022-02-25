import React from 'react'
import './searchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined'
import StarIcon from '@material-ui/icons/Star';

function searchResult({
    img, location, title, description, star, price
    , total,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt='image' />
            <FavoriteBorderIcon 
            className='searchResult_heart' />
            <div className='search_info'>
                <div className='searchResult_infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className='searchResult_infoBottom'>
                    <div className='searchResult_stars'>
                        <StarIcon className='searchResult_stars' />
                        <p>
                        <strong>{star}</strong>
                        </p>
                    </div>

                    <div className='searchResult_price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default searchResult

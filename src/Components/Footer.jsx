import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <div className='footer'>
        <p>
            @2022, Made with
            <FavoriteIcon className='icon' />
            by 
            <span>MC</span> 
            for a better web!
        </p>
        <div className='right'>
            <h3>Marketplace</h3>
            <h3>Blog</h3>
            <h3>License</h3>
        </div>
    </div>
  )
}

export default Footer
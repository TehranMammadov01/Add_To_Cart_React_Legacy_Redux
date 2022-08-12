import React from 'react';
import Badge from '@mui/material/Badge';

const ShoppingBadge = ({ getData, setAnchorEl, open }) => {
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    return (
        <Badge 
            badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <i className='fa-solid fa-cart-shopping text-light' style={{ fontSize: 25, cursor: "pointer" }}></i>
        </Badge>
    )
}

export default ShoppingBadge
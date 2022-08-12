import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import Table from 'react-bootstrap/Table';
import cartGift from '../assets/cart.gif';
import { NavLink } from 'react-router-dom';

const CardMenu = ({ getData, anchorEl, setAnchorEl, deleteProduct, open }) => {
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClose = () => {
        setAnchorEl(null);
    }

    const total = () => {
        let price = 0;
        getData.map(ele => {
            price = ele.price * ele.qnty + price;
        })
        setTotalPrice(price);
    }

    useEffect(() => {
        total();
    }, [total])

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{'aria-labelledby': 'basic-button'}}
        >
            { getData.length 
            ? <div className='card_details' style={{width: '24rem', padding: 10}}>
                <Table>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Restaurant Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getData.map((eachItem) => {
                            return (
                                <>
                                    <tr>
                                        <td>
                                            <NavLink to={`/cart/${eachItem.id}`} onClick={handleClose}>
                                                <img src={eachItem.imgdata} alt="" style={{width: "5rem", height: "5rem"}} />
                                            </NavLink>
                                        </td>  
                                        <td>
                                            <p>{eachItem.rname}</p>
                                            <p>Price: ${eachItem.price}</p>
                                            <p>Quantity: {eachItem.qnty}</p>
                                            <p style={{color: "red", fontSize: 20, cursor: "pointer"}} onClick={() => deleteProduct(eachItem.id)}>
                                                <i className='fas fa-trash smalltrash'></i>
                                            </p>
                                        </td> 
                                        <td className="mt-5" style={{color: "red", fontSize: 20, cursor: "pointer"}} onClick={() => deleteProduct(eachItem.id)}>
                                            <i className='fas fa-trash largetrash'></i>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                        <p className="text-center">Total: ${totalPrice}</p>
                    </tbody>
                </Table>
            </div> 
            : <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                <i 
                    className="fas fa-close smallclose" 
                    style={{position: "absolute", top: 2, right: 20, fontSize: 23, cursor: "pointer"}}
                    onClick={handleClose}
                ></i>
                <p style={{fontSize: 22}}>Your carts is empty</p>
                <img src={cartGift} alt="" className="emptycart_img" style={{width: "5rem", padding:10}} />
            </div> }
        </Menu>
    )
}

export default CardMenu
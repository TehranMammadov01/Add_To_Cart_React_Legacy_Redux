import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';
import cartGift from '../assets/cart.gif';
import { useSelector } from 'react-redux';

const Header = () => {
    const getData = useSelector(state => state.cartreducer.carts);
    console.log(getData); 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Navbar bg="dark" variant="dark" className="navbar-container">
            <Container>
                <NavLink to='/' className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to='/' className="text-decoration-none text-light">Home</NavLink>
                </Nav>
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
            </Container>
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
                                                <p style={{color: "red", fontSize: 20, cursor: "pointer"}}>
                                                    <i className='fas fa-trash smalltrash'></i>
                                                </p>
                                            </td> 
                                            <td className="mt-5" style={{color: "red", fontSize: 20, cursor: "pointer"}}>
                                                <i className='fas fa-trash'></i>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                            <p className="text-center">Total: $300</p>
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
        </Navbar>
    )
}

export default Header; 
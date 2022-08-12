import React, { useState } from 'react';
import CardMenu from './CardMenu';
import ShoppingBadge from './ShoppingBadge';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions';

const Header = () => {
    const getData = useSelector(state => state.cartreducer.carts); 
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch()

    const deleteProduct = (id) => {
        dispatch(DLT(id))
    }

    return (
        <Navbar bg="dark" variant="dark" className="navbar-container">
            <Container>
                <NavLink to='/' className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                <Nav className="me-auto">
                    <NavLink to='/' className="text-decoration-none text-light">Home</NavLink>
                </Nav>
                <ShoppingBadge
                    getData={getData}
                    setAnchorEl={setAnchorEl}
                    open={open}
                />
            </Container>
            <CardMenu 
                getData={getData} 
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                deleteProduct={deleteProduct}
                open={open}
            />
        </Navbar>
    )
}

export default Header; 
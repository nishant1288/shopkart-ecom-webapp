import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

import "./header.css";

import Search from './search/Search';
import Signin from './signin/Signin';
import { DataContext } from '../../Context/DataProvider';
import Profile from './profile/Profile';
import { useSelector } from 'react-redux';

const Header = () => {
    const { account } = useContext(DataContext)
    const {cart} = useSelector(state => state.cart)
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand className='logo-line'><Link className='head-line' to={'/'}>ShopKart</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='m-auto search-box'>
                        <Search />
                    </Nav>
                    <Nav className="ms-auto d-flex align-items-center">
                        {
                            account ?
                                <Nav.Link>
                                    <Profile />
                                </Nav.Link>
                                :
                                <Nav.Link><Signin /></Nav.Link>
                        }
                        <Nav.Link><i className="fa-solid fa-store"></i> Become a Seller</Nav.Link>
                        <Nav.Link><Link className='cart-line' to={'/cart'}><i className="fa-solid fa-cart-shopping"></i> Cart <Badge bg="secondary">{cart.length}</Badge></Link></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
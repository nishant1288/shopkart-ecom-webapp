import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import { fetchProducts } from '../../../Redux/reducer/productReducer/productReducer';

import "./search.css"
const Search = () => {

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(true)
    const toggleValue = () => {
        setOpen(!open);
        console.log(open)
    }

    const onValueChange = (e) => {
        setSearch(e.target.value);
    }


    const { products } = useSelector(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch, search])

    return (
        <>
            <InputGroup className="m-auto">
                <InputGroup.Text id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                <Form.Control
                    placeholder="Search for Products"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={(e) => onValueChange(e)}
                    onClick={() => setOpen(true)}
                    value={search}
                />
            </InputGroup>
            {
                search && open ? <ListGroup className='position-absolute search-list'>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(search.toLowerCase()))
                            .map((product) => {
                                return (
                                    <Link className='link-list' to={`/product/${product.id}`}>
                                        <ListGroup.Item onClick={() => {toggleValue(); setSearch('')}}>{product.title.longTitle}</ListGroup.Item>
                                    </Link>
                                )
                            })
                    }
                </ListGroup> : null
            }

        </>
    )
}

export default Search
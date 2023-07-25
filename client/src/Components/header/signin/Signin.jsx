import React from 'react'
import { useState, useContext } from 'react';

import "./signin.css";

import { DataContext } from '../../../Context/DataProvider';
import AlertMessage from './alert/Alert';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { signUpApi, loginApi } from '../../../Service/api';

const Signin = () => {

    const accountInitialValues = {
        login: {
            view: 'login',
            title: 'Log In'
        },

        signIn: {
            view: 'signin',
            title: 'Sign In'
        }
    }

    const initalSignInDetails = {
        firstname: '',
        lastname: '',
        username: '',
        password: ''
    }

    const initialLoginDetails = {
        username: '',
        password: ''
    }


    const [show, setShow] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const { setAccount } = useContext(DataContext);
    const [signInDetails, setSignInDetails] = useState(initalSignInDetails);
    const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
    const [loginError, setLoginError] = useState(false);

    const handleClose = () => {setShow(false); setLoginError(false)};
    const handleShow = () => setShow(true);
    const changeView = () => toggleAccount(accountInitialValues.signIn);
    const changeSignView = () => toggleAccount(accountInitialValues.login);

    const onInputChange = (e) => {
        setSignInDetails({
            ...signInDetails,
            [e.target.name]: e.target.value
        }
        )
    }

    const onValueChange = (e) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
        console.log(loginDetails)
    }

    const signUp = async () => {
        await signUpApi(signInDetails);
        setAccount(signInDetails.firstname);
    }

    const login = async () => {
        let response = await loginApi(loginDetails);
        console.log(response);
        if(response.status === 200)
        {
            setAccount(response.data.message.firstname);
            handleClose();
        }
        else 
        {
            setLoginError(true);
        }
    }

    return (
        <>
    
            <Button className='signin-btn' onClick={handleShow}>
                <i className="fa-solid fa-user"></i> Sign In
            </Button>
            {
                account.view === 'login' ?
                    <Modal show={show} onHide={handleClose}>

                        <Modal.Header closeButton>
                            <Modal.Title>{account.title}</Modal.Title>
                        </Modal.Header>
                       { loginError ? <AlertMessage /> : <></>}
                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1" className='input-field'>Enter Username</InputGroup.Text>
                                <Form.Control
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    placeholder='first name'
                                    name='username'
                                    onChange={(e) => { onValueChange(e) }}
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2" className='input-field'>Enter Password </InputGroup.Text>
                                <Form.Control
                                    aria-label="Password"
                                    aria-describedby="basic-addon2"
                                    type='password'
                                    placeholder='password'
                                    name='password'
                                    onChange={(e) => { onValueChange(e) }}
                                />
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer className='d-flex justify-content-center'>
                            <Button variant="primary" onClick={() => { login() }} className='w-50'>
                                Log In
                            </Button>
                            <Form.Label className='text-label' onClick={() => { changeView() }}>New to ShopKart? Create an account</Form.Label>
                        </Modal.Footer>

                    </Modal>

                    :

                    <Modal show={show} onHide={handleClose}>

                        <Modal.Header closeButton>
                            <Modal.Title>{account.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1" className='input-field'>Enter First Name</InputGroup.Text>
                                <Form.Control
                                    aria-label="Firstname"
                                    aria-describedby="basic-addon1"
                                    placeholder='first name'
                                    name='firstname'
                                    onChange={(e) => { onInputChange(e) }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon2" className='input-field'>Enter Last Name</InputGroup.Text>
                                <Form.Control
                                    aria-label="Lastname"
                                    aria-describedby="basic-addon2"
                                    placeholder='last name'
                                    name='lastname'
                                    onChange={(e) => { onInputChange(e) }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon3" className='input-field'>Set User Name</InputGroup.Text>
                                <Form.Control
                                    aria-label="Username"
                                    aria-describedby="basic-addon3"
                                    placeholder='username'
                                    name='username'
                                    onChange={(e) => { onInputChange(e) }}
                                />
                            </InputGroup>

                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon4" className='input-field'>Set Password </InputGroup.Text>
                                <Form.Control
                                    aria-label="Password"
                                    aria-describedby="basic-addon4"
                                    type='password'
                                    placeholder='set password'
                                    name='password'
                                    onChange={(e) => { onInputChange(e) }}
                                />
                            </InputGroup>
                        </Modal.Body>

                        <Modal.Footer className='d-flex justify-content-center'>
                            <Button variant="primary" onClick={() => { handleClose(); changeSignView(); signUp(); }} className='w-50'>
                                Sign In
                            </Button>
                            <Form.Label className='text-label' onClick={() => { changeSignView() }}>Already have an account? Login here</Form.Label>
                        </Modal.Footer>

                    </Modal>
            }

        </>
    )
}

export default Signin
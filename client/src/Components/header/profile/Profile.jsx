import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import "./profile.css"
import { DataContext } from '../../../Context/DataProvider';

const Profile = () => {

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    const {account, setAccount} = useContext(DataContext);
    const logout = () => {
        setAccount('')
    }
    return (
        <div>
            <Button onClick={toggleShow}>
                Hello {account} <i className="fa-solid fa-hand fa-bounce"></i>
            </Button>
            <Toast show={show} onClose={toggleShow} className='w-100 position-relative toast'>
                <div className='toast-header' onClick={() => logout()}>
                <strong className="m-auto">Log out <i className="fa-solid fa-arrow-right-from-bracket"></i></strong>
                </div>
            </Toast>
        </div>
    )
}

export default Profile
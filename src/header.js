import React from 'react'
import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Link } from 'react-router-dom'


import Logo from '../src/images/logo.png'

function header() {
    return (
        <div className='header'>
            <Link to='/' >
                <img
                    className='header_icon'
                    src={Logo}
                />
            </Link>
           
            <div className='header_center'>
                <input type='text'/>
                <SearchIcon />
            </div>
            <div className='header_right'>
                <p>Are you Unemployed?</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <AccountCircleIcon/>
            </div>
        </div>
    )
}

export default header

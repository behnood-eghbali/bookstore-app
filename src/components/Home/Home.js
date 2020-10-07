import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import logo from '../../assets/logo.png'
import './Home.css'

export default function Home() {
    return (
        <div className="Home">
            <header className="Home-header">
                <IconButton aria-label="delete">
                    <PersonIcon />
                </IconButton>
                <p>ندا میرآقایی</p>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    )
}

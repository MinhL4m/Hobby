import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className='header'>
            <div className='header--btn'>
                <div id='top'></div>
                <div id='middle'></div>
                <div id='bottom'></div>
            </div>
            <div className='header--nav'>
                <ul className="nav--link">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/porfolio'>Porfolio</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div> 
        </div>
    );
}
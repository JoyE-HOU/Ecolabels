import '../css/Nav.css'

import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <div className="Nav">
            <nav>
                <div className="logo">
                    <p>Nav Message go to the 45:45 mark for details on creating buttons(HOME, FORM, FAQ, etc.)</p>
                </div>
            <div className="topnav">
                <a><NavLink to="/home">Home</NavLink></a>
                <a><NavLink to="/news">News</NavLink></a>
                <a><NavLink to="/contact">Contact</NavLink></a>
                <a><NavLink to="/about">About</NavLink></a>
                <span 
                // style={{ margin: '0 auto', marginTop: '10%'}}
                >
                <label>Search:</label>
                <input type="text" 
                // onChange={(event) => handleSearch(event)
                />
            </span>
            </div>
            </nav>
        </div>
    )
}

export default Nav;
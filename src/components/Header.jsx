import React from 'react'
import './Mystyle.css'

const Header = () => {
    return (
        <div class="upper bg-warning text-light try container-fluid">
            <h5>States</h5>
            <h5>Active</h5>
            <h5>Confirmed</h5>
            <h5>Recovered</h5>
            <h5>Deaths</h5>
            <h5>Last Updated Time</h5>
        </div>
    )
}

export default Header;

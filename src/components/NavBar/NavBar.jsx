import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EventsPage from '../../pages/EventsPage/EventsPage';
import LeadersPage from '../../pages/LeadersPage/LeadersPage'
class NavBar extends Component {
    render() {
        return(
            <div>
                <Link to='/home'><div className='logo'>Home Page</div></Link>
                <Link to='/events'><EventsPage>Events</EventsPage></Link>
                <Link to='/leaders'><LeadersPage /></Link>
            </div>
        )
    }
};

export default NavBar;
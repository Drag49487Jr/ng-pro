import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'
import EventsPageComponent from '../../components/EventsPageComponent/EventsPageComponent';
import LeadersComponent from '../../components/LeadersComponent/LeadersComponent';

class HomePage extends Component {
    render() {
        return(
            <div>
                <HomePageComponent />
                <Link to='/events'><EventsPageComponent/></Link>
                <Link to='/leaders'><LeadersComponent/></Link>
            </div>
        )
    }
};

export default HomePage;
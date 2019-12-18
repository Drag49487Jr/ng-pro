import React, {Component} from 'react';
import EventsPageComponent from '../../components/EventsPageComponent/EventsPageComponent';
import NavBar from '../../components/NavBar/NavBar';

class EventsPage extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <EventsPageComponent />
            </div>
        )
    }
};

export default EventsPage;
import React, {Component} from 'react';
import LeadersComponent from '../../components/LeadersComponent/LeadersComponent';
import NavBar from '../../components/NavBar/NavBar';

class LeadersPage extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <LeadersComponent />
            </div>
        )
    }
};

export default LeadersPage;
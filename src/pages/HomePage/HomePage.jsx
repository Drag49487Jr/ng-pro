import React , {Component} from 'react';
import HomePageComponent from '../../components/HomePageComponent/HomePageComponent'
import NavBar from '../../components/NavBar/NavBar';

class HomePage extends Component {
    render() {
        return(
            <div>
                <NavBar />
                <HomePageComponent />
            </div>
        )
    }
};

export default HomePage;
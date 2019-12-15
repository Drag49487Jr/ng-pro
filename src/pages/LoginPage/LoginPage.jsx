import React, {Component} from 'react';

class LoginPage extends Component {
    constructor() {
        super();
        this.state={
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await userService.login(this.state);
            //this.props.handleLogin();
            this.props.history.push('/home')
        } catch (err) {
            alert('Invalid Login')
        }
    }

    render(){
        return(
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='password' placeholder='password' value={this.state.password} 
                    name='password' onChange={this.handleChange} />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginPage;
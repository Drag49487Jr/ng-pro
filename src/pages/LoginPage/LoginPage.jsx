import React, {Component} from 'react';

class LoginPage extends Component {
    constructor() {
        super();
        this.state={
            password: 'NGPRO',
            user_Password:'',
            message:''
        }
        console.log(this.state.password)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        if (this.state.user_Password === this.state.password) {
            try {
                this.props.history.push('/home')
            } catch (err) {
                alert('credentials accepted')
            }
        } else {
            this.setState({message: 'NotAccpeted'})
        }
    }


    render(){
        return(
            <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='password' placeholder='password' 
                    name='user_Password' onChange={this.handleChange} />
                    <button>Login</button>
                    <div>{this.state.message}</div>
                </form>
            </div>
        )
    }
}

export default LoginPage;
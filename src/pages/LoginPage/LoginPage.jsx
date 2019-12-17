import React, {Component} from 'react';

class LoginPage extends Component {
    constructor() {
        super();
        this.state={
            password: 'NGPRO',
            user_Password:'',
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
            // try { 
            //     this.props.history.push('/home')
            // } catch {
            //     alert('credentials accepted')
            // }
            // await userService.login(this.state);
            //this.props.handleLogin();
        // catch (err) {
        //     alert('Invalid Login')
        // }
        if (this.state.user_Password === this.state.password) {
            try {
                this.props.history.push('/home')
            } catch (err){
                alert('credentials accepted')
            }
        } else {
            alert('Wrong Credentials')
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
                </form>
            </div>
        )
    }
}

export default LoginPage;
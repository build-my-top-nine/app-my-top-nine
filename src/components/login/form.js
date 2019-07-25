import React from 'react'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    formItem = (name, type='text') => {
        return <div>
                {name}: 
                <input type={type} onChange={this.handleChange} name={name} placeholder={name} value={this.state[name]} /><br />
            </div>
    }

    render() {
       return  <form onSubmit={this.submitForm}>
           Please log in.
          {this.formItem('username')}
          {this.formItem('email')}
          {this.formItem('password', 'password')}
          <button type="sumbit">Go!</button>
        </form>
    }
}

export default LoginForm
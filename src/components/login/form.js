import React from 'react'
import {connect} from 'react-redux'
import {sendDetails} from '../../redux/actions'


class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: "test@test.com",
            password: "test",
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        this.props.sendDetails(this.state)
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
          {this.formItem('email')}
          {this.formItem('password', 'password')}
          <button type="sumbit">Go!</button>
        </form>
    }
}

const mapDispatchToProps = {
    sendDetails
}

export default connect(null, mapDispatchToProps)(LoginForm)

import React from 'react'

class ListForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      form: {
        name: "",
        image: "",
        description: ""
      }
    }
  }


  submitForm = (e) => {
    e.preventDefault()
    this.props.allProps.addItem(this.state.form)
  }

  changeHandler = (e) => {
    this.setState({form: { ...this.state.form, [e.target.name]: e.target.value }})
  }

  render(){
    return <div>
      <form onSubmit={this.submitForm}>
        <input type='text' name='name' value={this.state.form.name} onChange={this.changeHandler} placeholder="Name" />
        <input type='text' name='image' value={this.state.form.image} onChange={this.changeHandler} placeholder="Image" />
        <input type='text' name='description' value={this.state.form.description} onChange={this.changeHandler} placeholder="Description" />
        <button type="submit">Submit</button>
      </form>
    </div>
  }

}

export default ListForm

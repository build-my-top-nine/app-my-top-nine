import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'


class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }



  render(){
    return <div className="header">
      <h2>My Top Nine</h2>
      <div>
        <Link to='/'>Dashboard</Link>
        <Link to='/all'>Browse</Link>
        <Link to='/items/add'>Add</Link>
      </div>
    </div>
  }

}

export default Header

import React from 'react'
import ItemList from './itemList/itemList'

class UserList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }



  render(){
    return <div>
      <h2>Users list</h2>
      <ItemList allProps={this.props.allProps} itemsToShow={this.props.allProps.userList} />
    </div>
  }

}

export default UserList

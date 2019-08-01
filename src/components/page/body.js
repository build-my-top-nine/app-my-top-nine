
import React from 'react'
import {Route} from 'react-router'

import LoginForm from '../login/form'
import UserList from '../item/userList'
import AllList from '../item/allList'
import ListForm from '../item/form'

const items = [
    {id:1, name: "A", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:2, name: "B", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:3, name: "C", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:4, name: "D", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:5, name: "E", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:6, name: "F", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:7, name: "G", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:8, name: "H", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:9, name: "I", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:10, name: "J", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:11, name: "L", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:12, name: "K", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:13, name: "M", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:14, name: "N", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:15, name: "O", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:16, name: "Q", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:17, name: "P", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:18, name: "R", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
    {id:19, name: "S", image: "https://res.cloudinary.com/malarkey/image/upload/v1541110567/errol-sitting-full_fjqfwz.svg", description: "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses."},
]

const userListIdArray = [2, 5, 6, 8, 14, 12, 1, 7, 3]

class Body extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: items,
      userList: userListIdArray.map(listItem => items.filter(i => i.id === listItem)[0])
    }
  }

  addItem = (item) => {
    var array = this.state.items
    array.push(item)
    this.setState({items: array})
  }

  addItemToUserList = (item) => {
    if (this.state.userList.length >= 9) {
      return false
    } else {
        var array = this.state.userList
        array.push(item)
        this.setState({userList: array})
    }
  }

  deleteItemFromUserList = (item) => {
    const array = this.state.userList.filter(i => i.id !== item.id)
    this.setState({userList: array})
  }


  render(){
    const allProps = {
      items: this.state.items,
      userList: this.state.userList,
      addItem: this.addItem,
      addItemToUserList: this.addItemToUserList,
      deleteItemFromUserList: this.deleteItemFromUserList
    }

    return <div>
      <Route path="/all" render={(props) => <AllList {...props} allProps={allProps} />} />
      <Route path="/" exact render={(props) => <UserList {...props}  allProps={allProps}  />} />
      <Route path ='/items/add' render={(props) => <ListForm {...props} allProps={allProps} />}  />
      <Route path='/login' component={LoginForm} />
    </div>
  }

}

export default Body

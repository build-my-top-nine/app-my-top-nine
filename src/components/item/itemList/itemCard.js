import React from 'react'

class ItemCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  deleteItemFromUserList = (e) => {
    this.props.allProps.deleteItemFromUserList(this.props.item)
  }

  addItemToUserList = (e) => {
    this.props.allProps.addItemToUserList(this.props.item)
  }

  render(){
    const item = this.props.item
    return <div style={{display:"flex", alignItems: "center"}}>


      <span style={{padding:"5px"}} ><h3> {item.name} </h3></span>
      <span style={{padding:"5px"}} ><img src={item.image}  width="50px"/></span>
      <span style={{padding:"5px"}} ><p>{item.description}</p></span>

      {this.props.allProps.userList.filter(userItem => userItem.id === item.id)[0] ? <span onClick={this.deleteItemFromUserList}>
        (Delete [-])
      </span>:<span onClick={this.addItemToUserList}>
        (Add [+])
      </span>}

    </div>
  }

}

export default ItemCard

/*
*/

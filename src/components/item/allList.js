
import React from 'react'
import ItemList from './itemList/itemList'

class AllList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }



  render(){
    return <div>
          <h2>All Items</h2>
          <ItemList allProps={this.props.allProps} itemsToShow={this.props.allProps.items} />
    </div>
  }

}

export default AllList

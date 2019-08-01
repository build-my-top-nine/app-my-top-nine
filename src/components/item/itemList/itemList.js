
import React from 'react'
import ItemCard from './itemCard'

class ItemList extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }



  render(){
    return <div>
            {this.props.itemsToShow.map(item => <ItemCard item={item} allProps={this.props.allProps} /> )}
    </div>
  }

}

export default ItemList

import React, {Component} from 'react';
import './styles.scss';


export default class FreeSnack extends Component {

  render() {
    let snack = this.props.snack;
    return (
      <div className="snack-item-points"  key={`promo-item-${snack.name}`}>
        <div className="image-container">
          <img src={snack.img} alt={snack.name}></img>
        </div> 
        <div className="text-container">
          <div className="text">{snack.name}</div>
          <div>Snack Points: {snack.points}</div>
          <button>-</button>
          <div className="quantity">{this.props.itemQuantity}</div>
          <button onClick={this.props.addFreeSnack.bind(snack)}>+</button>
        </div>               
      </div>
    );
  }
  }

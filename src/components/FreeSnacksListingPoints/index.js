import React, {Component} from 'react';
import './styles.scss';
import FreeSnack from '../FreeSnack/';

const freeSnacksGrouped = [
  {img: "/images/beef-jerky.jpg", name:"Teriyaki Steak Jerky", points: 3 },
  {img: "/images/salmon-jerky.jpg", name:"Teriyaki Salmon Jerky", points: 3},
  {img: "/images/buttercups.jpg", name:"Coconut Almond Buttercups", points: 2 },
  {img: "/images/almond-smoky-bbq.jpg", name:"BBQ Almonds", points: 1 },
  {img: "/images/almond-cinnamon.jpg", name:"Cinnamon Maple Almonds", points: 1 },
  {img: "/images/granola.jpg", name:"Hearty Gronola", points: 1 },
  ];

export default class FreeSnacksListingPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantity: 0,
      freeSnackLimit: 5,
      pointsUsed: 0,
      selectedSnacks: []
    };
  }

  addFreeSnack(item) {
    console.log(item);
    let itemQuantity = this.state.itemQuantity;
    let itemPoints = item.points;
    let pointsUsed = this.state.pointsUsed;
    let selectedSnacks = this.state.selectedSnacks;
    pointsUsed = pointsUsed + itemPoints;
    if (pointsUsed <= this.state.freeSnackLimit) {
      itemQuantity = itemQuantity + 1;
      selectedSnacks.push(item.name);
      this.setState({
        itemQuantity,
        selectedSnacks,
        pointsUsed
      });
    } else {
      console.log("Limit reached, cannot add item.")
    }
    console.log(itemQuantity);
  }

  deleteFreeSnack(item) {
    let itemPoints = item.points;
    let pointsUsed = this.state.pointsUsed;
    let selectedSnacks = this.state.selectedSnacks;
    pointsUsed = pointsUsed - itemPoints;
    // Find item in selectedSnacks array and splice from array
    this.setState({
      selectedSnacks, // new array with splice
      pointsUsed
    });
  }

  render() {
    return (
      <div>
        <div className="points">{this.state.pointsUsed}</div>
        <div className="snack-container-points">
          {
            freeSnacksGrouped.map(snack => {
              return (
                <FreeSnack
                  freeSnackLimit = {this.state.freeSnackLimit}
                  snack={snack}
                  addFreeSnack={this.addFreeSnack.bind(this)}
                  itemQuantity={this.state.itemQuantity}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
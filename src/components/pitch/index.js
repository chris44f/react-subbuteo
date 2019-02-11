import React, { Component } from 'react';
import Player from '../player'
import Goal from '../goal'
import './index.css'

const players = [
  {
    shirtNumber: 1,
    receivesFrom: []
  },
  {
    shirtNumber: 2,
    receivesFrom: [1,3]
  },
  {
    shirtNumber: 3,
    receivesFrom: [1,2]
  },
  {
    shirtNumber: 14,
    receivesFrom: [2,8]
  },
  {
    shirtNumber: 8,
    receivesFrom: [1,2,3,7,14]
  },
  {
    shirtNumber: 7,
    receivesFrom: [3,8]
  },
  {
    shirtNumber: 11,
    receivesFrom: [14,8]
  },
  {
    shirtNumber: 9,
    receivesFrom: [11,8,10,14,7]
  },
  {
    shirtNumber: 10,
    receivesFrom: [7,8]
  }
]

const goal = [
  {
    shirtNumber: "RG",
    receivesFrom: [9,10,11]
  },
  {
    shirtNumber: "LG",
    receivesFrom: [9,10,11]
  }
]

class Pitch extends Component {

  state = {
    ballLocation: 1,
    commentary: ""
  }

  handleBallMovement = (a,b) => {
    if(a.some(val=>(
      val === this.state.ballLocation
    )))
    {
      this.setState({ ballLocation: b, commentary: ""})
    } else if (
        this.state.ballLocation === 1 ){
        this.setState({ commentary: "too far!"})
    } else if (
        this.state.ballLocation === 2 || this.state.ballLocation === 3){
        this.setState({ commentary: "under too much pressure!"})
    } else if (
        this.state.ballLocation === 8 ){
        this.setState({ commentary:"playmakers attack!"})
    } else if (
        this.state.ballLocation === 14 || this.state.ballLocation === 7){
        this.setState({ commentary:"not an option!"})
    } else if (
        this.state.ballLocation === 10 || this.state.ballLocation === 11){
        this.setState({ commentary:"attack!"})
    } else if (
        this.state.ballLocation === 9 ){
        this.setState({ commentary:"have to shoot!"})
    }
  }

  handleShot = (shooter,target) => {
    if(shooter.some(val=>(
      val === this.state.ballLocation
    ))) {
      this.keeperSave(target)
    } else { this.setState({ commentary:"you can't shoot from there!!!"})}
  }

  keeperSave = (shot) => {
    let a = Math.random()
    let b = ""
    if(a < 0.5) {
      let b = "LG"
      if (b === shot) {
        this.setState({ commentary:"keeper saves!"})
        this.rebound()
      } else {
          this.setState({ commentary:"goooooaaaal!!!!", ballLocation: shot})
        }
    } else {
      let b = "RG"
      if (b === shot) {
        this.setState({ commentary:"keeper saves!"})
        this.rebound()
      } else {
          this.setState({ commentary:"goooooaaaal!!!!", ballLocation: shot})
        }
      }
    }

    rebound = () => {
      let a = Math.random()
      if (a < 0.34) {
        this.setState({ ballLocation: 10})
      }
      else if (a > 0.67) {
        this.setState({ ballLocation: 11})
      }
      else { this.setState({ ballLocation: 9})}
    }

  render(){
    return(
      <div className="pitch">
        <img id="pitchImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Soccer_Field_Transparant.svg/800px-Soccer_Field_Transparant.svg.png" />
        <Goal
          ballLocation={this.state.ballLocation}
          goal={goal}
          handleShot={this.handleShot}
        />
        <Player
          ballLocation={this.state.ballLocation}
          players={players}
          handleBallMovement={this.handleBallMovement}
        />
        <h2 className="status">{this.state.commentary}</h2>
      </div>
    )
  }
}

export default Pitch

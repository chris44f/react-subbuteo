import React, { Component } from 'react';
import './index.css'

class Player extends Component {
  render(){

    return(
      <div>
        {this.props.players.map((player)=>(
          <div className="player" id={"number" + player.shirtNumber}>
            <button className="playerButton" onClick={()=>this.props.handleBallMovement(player.receivesFrom,player.shirtNumber)}>{player.shirtNumber}</button>
            <div className={this.props.ballLocation === player.shirtNumber ? "ball" : ""}></div>
          </div>
        ))}
      </div>
    )
  }
}

export default Player

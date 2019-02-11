import React, { Component } from 'react';
import './index.css'

class Goal extends Component {
  render(){
    return(
      <div>
        {this.props.goal.map((topbin)=>(
          <div className="goalTargets" id={"number" + topbin.shirtNumber}>
            <button className="goalButton" onClick={()=>this.props.handleShot(topbin.receivesFrom,topbin.shirtNumber)}>{topbin.shirtNumber}</button>
            <div className={this.props.ballLocation === topbin.shirtNumber ? "goalBall" : ""}></div>
          </div>
        ))}
        <div className="keeps">K</div>
      </div>
    )
  }
}

export default Goal

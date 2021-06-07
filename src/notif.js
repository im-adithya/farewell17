import React from "react";

import "./notif.css";

class Notif extends React.Component {
  render() {
    console.log(this.props.code);
    return (
      <div className={this.props.code !== 0 ? "slide notif" : "notif"}>
        {this.props.code === 1 && <p>Correct Answer 🎉🎉🎉</p>}
        {this.props.code === 2 && <p>Wrong Answer 💩</p>}
      </div>
    );
  }
}

export default Notif;

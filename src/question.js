import React from "react";

import "./question.css";

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = () => {
    this.props.checkAnswer(this.state.answer);
    this.setState({ answer: "" });
  };

  render() {
    return (
      <div className={this.props.ask ? "bg-blur" : ""}>
        <div className={this.props.ask ? "questionslide question" : "question"}>
          {this.props.ask && <p>{this.props.question}</p>}
          {this.props.ask && (
            <div className="qwrap">
              <input
                name="answer"
                className="qinput"
                value={this.state.answer}
                onChange={this.handleInput}
              />
              <div className="qgo" onClick={this.submit}>
                GO!
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Question;

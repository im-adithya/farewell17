import React from "react";

import Notif from "./notif";
import Question from "./question";
import "./App.css";

import first1 from "./assets/first1.png";
import second1 from "./assets/second1.png";

import first2 from "./assets/first2.png";
import second2 from "./assets/second2.png";

import first3 from "./assets/first3.png";
import second3 from "./assets/second3.png";

import first4 from "./assets/first4.png";
import second4 from "./assets/second4.png";

import first5 from "./assets/first5.png";
import second5 from "./assets/second5.png";

import first6 from "./assets/first6.png";
import second6 from "./assets/second6.png";

import first7 from "./assets/first7.png";
import second7 from "./assets/second7.png";

import first8 from "./assets/first8.png";
import second8 from "./assets/second8.png";

import first9 from "./assets/first9.png";
import second9 from "./assets/second9.png";

import first10 from "./assets/first10.png";
import second10 from "./assets/second10.png";

import first11 from "./assets/first11.png";
import second11 from "./assets/second11.png";

import first12 from "./assets/first12.png";
import second12 from "./assets/second12.png";

import first13 from "./assets/first13.png";
import second13 from "./assets/second13.png";

import first14 from "./assets/first14.png";
import second14 from "./assets/second14.png";

import first15 from "./assets/first15.png";
import second15 from "./assets/second15.png";

import first16 from "./assets/first16.png";
import second16 from "./assets/second16.png";

import first17 from "./assets/first17.png";
import second17 from "./assets/second17.png";

import first18 from "./assets/first18.png";
import second18 from "./assets/second18.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      code: 0,
      currentanswer: "",
      currentchar: "",
      levelquestion: false,
      ask: false,
      guessed: [],
      questions: [
        "His love in ADP but not a 4 letter word",
        "While chilling on the SAC roof, Laku bhaiya gives him 16 smoked cigarette butts and challenges him to make cigarettes from them so they could have a good time. One cigarette can be made out of 4 butts. He takes the challenge personally. How many cigarettes was he able to make at the end of the night?",
        "Jahnavi Di",
        "One thing he doesn't give his juniors or batchies",
        "They say girls break hearts while she breaks",
        "Paisa andha but ye lena bahut zaroori hai",
        "Iss Best friend ke lie to 'JAAN' bhi de sakte hain (Not really?)",
        "Popeye : Spinach :: Laddu:Bheem :: Aastha Di: ???",
        "For him the colors in 🛑 and 🛑 are definitely ",
        "You visit SAC hall to inspect the panels. Not to your surprise, it was a total mess. You calmly summon your favorite junior like this: Abey Kutta Randi ?",
        "Achieved everything in his college life except the feat of opening a",
        "A junior who had a big crush on her 🤭",
        "Yelled this in the classroom thinking it isn't a word in Hindi (Gult problems)",
        "Mind in ADP but ♥ in ",
        "Samiksha Di",
        "____ raat thi, vo mere saath this",
        "Biggest mistake of your college life was liking",
        "Praneeth Bhaiya",
      ],
      answers: [
        ["ruchir", "ruchi"],
        ["5", "five"],
        ["jahnavi"],
        ["treat", "treats"],
        ["macbook", "macbooks"],
        ["mcn", "merit-cum-need", "merit cum need"],
        ["lakshay", "laku", "lakku"],
        ["milk"],
        ["different"],
        ["sonal"],
        ["window"],
        ["shounak"],
        ["lauda", "lavda", "lawda", "loda"],
        ["embryo"],
        ["samiksha"],
        ["chandni"],
        ["ruchir"],
        ["praneeth"],
      ],
      chars: [
        "moksh",
        "ruchir",
        "jahnavi",
        "shivansh",
        "preeti",
        "kamal",
        "mohit",
        "aastha",
        "pratik",
        "medha",
        "vibhu",
        "riya",
        "harsha",
        "lakshay",
        "samiksha",
        "suraj",
        "krati",
        "praneeth",
      ],
    };
  }

  levelinc = () => {
    this.setState(({ level }) => {
      return { level: level + 1 };
    });
    this.sayRight();
  };

  sayRight = () => {
    this.setState({ code: 1 });
    setTimeout(
      function () {
        this.setState({ code: 0 });
      }.bind(this),
      1000
    );
  };

  sayWrong = () => {
    this.setState({ code: 2 });
    setTimeout(
      function () {
        this.setState({ code: 0 });
      }.bind(this),
      1000
    );
  };

  checkAnswer = (x) => {
    if (this.state.answers[this.state.level - 1].includes(x.toLowerCase())) {
      this.toggleAsk();
      this.toggleQuestion();
      this.levelinc();
    } else {
      this.sayWrong();
    }
  };

  checkChar = (x) => {
    if (this.state.chars[this.state.level - 1] === x.toLowerCase()) {
      this.levelinc();
    } else {
      this.sayWrong();
    }
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      currentchar: e.target.value,
    });
  };

  toggleQuestion = () => {
    this.setState(({ levelquestion }) => {
      return { levelquestion: !levelquestion };
    });
  };

  toggleAsk = () => {
    this.setState(({ ask }) => {
      return { ask: !ask };
    });
    console.log(this.state.ask);
  };

  submitChar = () => {
    if (
      this.state.currentchar.toLowerCase() ===
      this.state.chars[this.state.level - 1]
    ) {
      let guessed = this.state.guessed;
      guessed.push(this.state.level);
      this.setState({ guessed });
      this.toggleQuestion();
      this.sayRight();
    } else {
      this.sayWrong();
    }
  };

  render() {
    return (
      <div className="App">
        <Notif code={this.state.code} />
        <Question
          qcode={this.state.level - 1}
          question={this.state.questions[this.state.level - 1]}
          ask={this.state.ask}
          checkAnswer={this.checkAnswer}
        />
        <div>
          <div
            className={
              "char first " + (this.state.level > 0 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(1) ? second1 : first1}
              alt="first"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="firstchar"
                placeholder="Guess Who?"
                value={this.state.firstchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 1}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 1 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char second " + (this.state.level > 1 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(2) ? second2 : first2}
              alt="second"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="secondchar"
                placeholder="Guess Who?"
                value={this.state.secondchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 2}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 2 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char third " + (this.state.level > 2 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(3) ? second3 : first3}
              alt="third"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="thirdchar"
                placeholder="Guess Who?"
                value={this.state.thirdchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 3}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 3 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char fourth " + (this.state.level > 3 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(4) ? second4 : first4}
              alt="fourth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="fourthchar"
                placeholder="Guess Who?"
                value={this.state.fourthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 4}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 4 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char fifth " + (this.state.level > 4 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(5) ? second5 : first5}
              alt="fifth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="fifthchar"
                placeholder="Guess Who?"
                value={this.state.fifthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 5}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 5 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char sixth " + (this.state.level > 5 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(6) ? second6 : first6}
              alt="sixth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="firstchar"
                placeholder="Guess Who?"
                value={this.state.sixthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 6}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 6 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char seventh " + (this.state.level > 6 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(7) ? second7 : first7}
              alt="seventh"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="seventhchar"
                placeholder="Guess Who?"
                value={this.state.seventhchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 7}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 7 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char eighth " + (this.state.level > 7 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(8) ? second8 : first8}
              alt="eighth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="eighthchar"
                placeholder="Guess Who?"
                value={this.state.eighthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 8}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 8 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char ninth " + (this.state.level > 8 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(9) ? second9 : first9}
              alt="ninth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="ninthchar"
                placeholder="Guess Who?"
                value={this.state.ninthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 9}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 9 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char tenth " + (this.state.level > 9 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(10) ? second10 : first10}
              alt="tenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="tenthchar"
                placeholder="Guess Who?"
                value={this.state.tenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 10}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 10 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char eleventh " + (this.state.level > 10 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(11) ? second11 : first11}
              alt="eleventh"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="eleventhchar"
                placeholder="Guess Who?"
                value={this.state.eleventhchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 11}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 11 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char twelfth " + (this.state.level > 11 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(12) ? second12 : first12}
              alt="twelfth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="twelfthchar"
                placeholder="Guess Who?"
                value={this.state.twelfthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 12}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 12 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char thirteenth " + (this.state.level > 12 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(13) ? second13 : first13}
              alt="thirteenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="thirteenthchar"
                placeholder="Guess Who?"
                value={this.state.thirteenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 13}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 13 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char fourteenth " + (this.state.level > 13 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(14) ? second14 : first14}
              alt="fourteenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="fourteenthchar"
                placeholder="Guess Who?"
                value={this.state.fourteenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 14}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 14 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char fifteenth " + (this.state.level > 14 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(15) ? second15 : first15}
              alt="fifteenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="fifteenthchar"
                placeholder="Guess Who?"
                value={this.state.fifteenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 15}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 15 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char sixteenth " + (this.state.level > 15 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(16) ? second16 : first16}
              alt="sixteenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="sixteenthchar"
                placeholder="Guess Who?"
                value={this.state.sixteenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 16}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 16 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char seventeenth " + (this.state.level > 16 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(17) ? second17 : first17}
              alt="seventeenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="seventeenthchar"
                placeholder="Guess Who?"
                value={this.state.seventeenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 17}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 17 && (
                <div onClick={this.toggleAsk}>Ask</div>
              )}
            </div>
          </div>

          <div
            className={
              "char eightteenth " + (this.state.level > 17 ? "" : "invisible")
            }
          >
            <img
              src={this.state.guessed.includes(18) ? second18 : first18}
              alt="eightteenth"
              height={150}
              //onClick={this.levelinc}
            />
            <div className="character">
              <input
                name="eightteenthchar"
                placeholder="Guess Who?"
                value={this.state.eightteenthchar}
                onChange={this.handleInput}
                disabled={this.state.level !== 18}
              />
              <div onClick={this.submitChar}>Check</div>
              {this.state.levelquestion && this.state.level === 18 && (
                <div onClick={this.toggleAsk}>Ask</div>
                //this.state.level > 18 || (this.state.levelquestion && this.state.level === 18)
              )}
            </div>
          </div>
        </div>
        <div
          className={"final " + (this.state.level > 18 ? "" : "invisible")}
          onClick={() =>
            this.state.level > 18
              ? (window.location.href = "https://google.com")
              : (window.location.href = "https://youtube.com")
          }
        >
          TREASURE!
        </div>
      </div>
    );
  }
}

export default App;

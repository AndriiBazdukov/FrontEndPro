import React, { Component } from "react";
import EmojiList from "./components/EmojiList";
import Results from "./components/Results";

const emojis = ["😀", "😊", "😎", "🤩", "😍"];

class App extends Component {
  constructor(props) {
    super(props);

    const savedVotes = JSON.parse(localStorage.getItem("votes"));

    this.state = {
      votes: savedVotes || Array(emojis.length).fill(0),
      result: null
    };
  }

  voteHandler = (index) => {
    const votes = [...this.state.votes];
    votes[index]++;

    this.setState({ votes }, () => {
      localStorage.setItem("votes", JSON.stringify(votes));
    });
  };

  showResultsHandler = () => {
    const { votes } = this.state;
    const maxVotes = Math.max(...votes);

    if (maxVotes === 0) {
      this.setState({ result: null });
      return;
    }

    const winnerIndex = votes.indexOf(maxVotes);

    this.setState({
      result: {
        emoji: emojis[winnerIndex],
        votes: maxVotes
      }
    });
  };

  clearResults = () => {
    const emptyVotes = Array(emojis.length).fill(0);

    this.setState({
      votes: emptyVotes,
      result: null
    });

    localStorage.removeItem("votes");
  };

  render() {
    return (
      <div className="app-box">
        <h2 className="mb-4">Vote</h2>

        <EmojiList
          emojis={emojis}
          votes={this.state.votes}
          onVote={this.voteHandler}
        />

        <button
          className="btn btn-success my-3"
          onClick={this.showResultsHandler}
        >
          Show Results
        </button>

        <button
          className="btn btn-danger my-3 ms-2"
          onClick={this.clearResults}
        >
          Clear
        </button>

        {this.state.result && (
          <Results
            emoji={this.state.result.emoji}
            votes={this.state.result.votes}
          />
        )}
      </div>
    );
  }
}

export default App;
import { useState, useEffect } from "react";

const emojis = ["😀", "😂", "😍", "😎", "😡"];

export default function App() {
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    setVotes(savedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  const vote = (emoji) => {
    setVotes((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
  };

  const showResult = () => {
    if (Object.keys(votes).length === 0) return;

    let max = -1;
    let best = null;

    for (const emoji in votes) {
      if (votes[emoji] > max) {
        max = votes[emoji];
        best = emoji;
      }
    }

    setWinner(best);
  };

  const clearResults = () => {
    setVotes({});
    setWinner(null);
    localStorage.removeItem("votes");
  };

  return (
    <div className="app-box">
      <h2 className="mb-4">Emoji voting</h2>

      <div className="d-flex justify-content-center gap-4 mb-4">
        {emojis.map((emoji) => (
          <div key={emoji} className="text-center">
            <div className="emoji" onClick={() => vote(emoji)}>
              {emoji}
            </div>
            <div>{votes[emoji] || 0}</div>
          </div>
        ))}
      </div>

      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={showResult}>
          Show Results
        </button>
        <button className="btn btn-danger" onClick={clearResults}>
          Clear Results
        </button>
      </div>

      {winner && (
        <div className="mt-4">
          <h4>Winner</h4>
          <div className="winner">{winner}</div>
        </div>
      )}
    </div>
  );
}
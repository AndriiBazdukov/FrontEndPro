function Results({ emoji, votes }) {
  return (
    <div className="mt-4">
      <h4>Results:</h4>
      <p>Winer:</p>
      <div className="winner">{emoji}</div>
      <p>Votes: {votes}</p>
    </div>
  );
}

export default Results;
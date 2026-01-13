function EmojiList({ emojis, votes, onVote }) {
    return (
        <div className="d-flex justify-content-between mb-3">
            {emojis.map((emoji, index) => (
                <div key={index}>
                    <div
                        className="emoji"
                        onClick={() => onVote(index)}
                    >
                        {emoji}
                    </div>
                    <div>{votes[index]}</div>
                </div>
            ))}
        </div>
    );
}

export default EmojiList;
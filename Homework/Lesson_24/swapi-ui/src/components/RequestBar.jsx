function RequestBar() {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text bg-secondary text-white">
        https://swapi.dev/api/
      </span>
      <input
        type="text"
        className="form-control api-input"
        placeholder="people/1/"
      />
      <button className="btn btn-secondary">
        request
      </button>
    </div>
  );
}

export default RequestBar;
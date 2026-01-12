import Header from "./components/Header";
import RequestBar from "./components/RequestBar";
import ResultBox from "./components/ResultBox";

function App() {
  return (
    <div className="container py-5">
      <Header />
      <RequestBar />
      <ResultBox />
    </div>
  );
}

export default App;
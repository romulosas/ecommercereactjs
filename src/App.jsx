import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer gretting="Welcome!"></ItemListContainer>
    </div>
  );
};

export default App;

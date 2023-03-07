import logo from "./logo.svg";
import "./App.css";
import Product from "../src/components/product/Product";
import HistoryProduct from "./components/historyProduct/HistoryProduct";
function App() {
  return (
    <div className="App">
      <Product></Product>
      <HistoryProduct></HistoryProduct>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Product from "../src/components/user/product/Product";
import HistoryProduct from "../src/components/user/historyProduct/HistoryProduct";
function App() {
  return (
    <div className="App">
      <Product></Product>
      <HistoryProduct></HistoryProduct>
    </div>
  );
}

export default App;

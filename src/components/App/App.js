import "./App.css";
import Product from "../Product/Product";
import { products as productsData } from "../../data";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(productsData);

  const toggleStatus = (id) => {
    let tmpProducts = products.map((product) =>
      product.id === id && product.status !== "disabled"
        ? {
            ...product,
            status:
              product.status === "notSelected" ? "selected" : "notSelected",
          }
        : product
    );
    setProducts(tmpProducts);
  };

  return (
    <div className="App">
      <h1 className="App__title">Ты сегодня покормил кота?</h1>
      <div className="container">
        <div className="products__list">
          {products.map((product) => (
            <Product
              {...product}
              toggleStatus={toggleStatus}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

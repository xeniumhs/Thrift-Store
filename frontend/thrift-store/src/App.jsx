import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Using async/await to fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000"); // Your Express route
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false); // Stop loading after request is done
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="App">
      <h1>🛒 Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <strong>{product.name || "Unnamed Product"}</strong>
              <br />
              Price: ${product.price || "N/A"}
              <br />
              ID: {product._id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;

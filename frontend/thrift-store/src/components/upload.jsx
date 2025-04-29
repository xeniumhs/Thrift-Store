import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const Upload = async () => {
    // const formData = new FormData();
    // formData.append("file", image);
    // formData.append("name", name);
    // formData.append("price", price);
    // formData.append("description", description);
    // formData.append("category", category);
    // formData.append("quantity", quantity);

    let result = await fetch("http://localhost:5000/upload", {
      method: "post",
      body: formData,
    });
    result = await result.json();
    console.log(result);
    navigate("/upload");
  };
  return (
    <div>
      <h1>Upload</h1>
      <input
        type="file"
        name="file"
        id="file"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        name="quantity"
        id="quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={Upload}>Upload</button>
    </div>
  );
};

export default Upload;

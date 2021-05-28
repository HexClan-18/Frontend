import React, { useState } from "react";
import "../../../Products/createProduct.css";
import Header from "../../../Header";

const initialState = {
  product_id: "",
  title: "",
  price: 0,
  description: "Add Property Description",
  content: "Property Address",
  category: "",
  _id: "",
};

function CreateProduct() {
  const [product] = useState(initialState);

  const [onEdit] = useState(false);

  return (
    <>
      <Header />
      <div className="create_product">
        <div className="upload">
          <h4>Add Images</h4>

          <input type="file" name="file" id="file_up" />
          {/* {loading ? (
          <div id="file_img">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ""} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )} */}
        </div>

        <form>
          <div className="row">
            <label htmlFor="product_id">Property ID</label>
            <input
              type="text"
              name="product_id"
              id="product_id"
              required
              value={product.product_id}
              disabled={onEdit}
            />
          </div>

          <div className="row">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              value={product.title}
            />
          </div>

          <div className="row">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              required
              value={product.price}
            />
          </div>

          <div className="row">
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              required
              value={product.description}
              rows="5"
            />
          </div>

          <div className="row">
            <label htmlFor="content">Address</label>
            <textarea
              type="text"
              name="content"
              id="content"
              required
              value={product.content}
              rows="7"
            />
          </div>

          <div className="row">
            <label htmlFor="categories">Categories: </label>
            <select name="category" value={product.category}>
              <option value="">Please select a category</option>
              {/* {categories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))} */}
            </select>
          </div>

          <button type="submit">{onEdit ? "Update" : "Create"}</button>
        </form>
      </div>
    </>
  );
}

export default CreateProduct;

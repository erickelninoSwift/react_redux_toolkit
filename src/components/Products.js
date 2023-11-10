import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/ProductSlice";
import { useSelector } from "react-redux";

export const Products = () => {
  const dispatch = useDispatch();
  const { data: myProducts } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const addToCart = (data) => {
    dispatch(add(data));
  };

  const card = myProducts.map((data) => {
    const { id, category, description, image, price, rating, title } = data;

    return (
      <div key={id} className="col-md-3" style={{ marginBottom: "15px" }}>
        <Card
          style={{
            width: "18rem",
            marginBottom: "1rem",
            paddingBottom: "10px",
          }}
          className="h-100"
        >
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "150px", height: "190px", margin: "10px auto" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>R{price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(data)}>
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <h2>Product Dashboard</h2>
      <div className="row">{card}</div>
    </div>
  );
};

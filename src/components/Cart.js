import React from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const allData = useSelector((state) => {
    return state.cart;
  });

  const deleteData = (id) => {
    dispatch(remove(id));
  };

  const card = allData.map((data) => {
    const { id, image, price, rating, title } = data;

    return (
      <div
        key={id}
        className="col-md-3"
        style={{ marginTop: "20px", marginLeft: "15px" }}
      >
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
            <Button variant="danger" onClick={() => deleteData(id)}>
              Delete
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div className="row">{allData.length > 0 ? card : <h1>Cart empty</h1>}</div>
  );
};

export default Cart;

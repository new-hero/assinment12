import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Tool = ({tool}) => {
    const navigate = useNavigate();
  const { _id, name, picture, description, quantity, price } = tool;
  const handlePurchase = (id) => {
    navigate(`/tools/${id}`);
  };
  return (
    <div className="card py-3">
      <h3 className="py-2"> {name}</h3>
      <img src={picture} alt="Tool" className="img-fluid" />
      <h3>Type: {description}</h3>
      <h3>Quantity: {quantity} Unit</h3>
      <h3>Price: {price} taka/ Unit</h3>
      <Button
        onClick={() => handlePurchase(_id)}
        className="btn btn-primary border rounded-pill w-50 mx-auto "
      >
        {" "}
        Purchase{" "}
      </Button>
    </div>
  );
};

export default Tool;

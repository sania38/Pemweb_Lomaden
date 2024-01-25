import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Row className="align-items-center justify-content-center">
      <Col xs="4" className="text-center" style={{ paddingRight: "20px" }}>
        <Button variant="danger" onClick={handleDecrement}>
          -
        </Button>
      </Col>
      <Col xs="4" className="text-center" style={{ paddingTop: "10px" }}>
        <h3>{count}</h3>
      </Col>
      <Col xs="4" className="text-center" style={{ paddingRight: "40px" }}>
        <Button variant="success" onClick={handleIncrement}>
          +
        </Button>
      </Col>
    </Row>
  );
};

export default Counter;

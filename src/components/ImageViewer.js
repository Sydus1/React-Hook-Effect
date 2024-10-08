"Made by: Juan Jose Sierra - 202013642"
import {useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function ImageViewer() {

    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);

    const handleWidthUpdate = (e) => {
        setWidth(e.target.value);
    }

    const handleHeightUpdate = (e) => {
    setHeight(e.target.value);
    }

    return (
    <Col>
    <Card style={{ width: "18rem" }}>
        <Card.Body className="mb-3">
        <Card.Title>Custom Size Image</Card.Title>
        <Card.Text><h2>Width:</h2><input value={width} onChange={handleWidthUpdate}></input></Card.Text>
        <Card.Text><h2>Height:</h2><input value={height} onChange={handleHeightUpdate}></input></Card.Text>
    </Card.Body>
    </Card>
    </Col>
);
}


export default ImageViewer;
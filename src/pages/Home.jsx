import React, { useEffect, useState } from "react";
import { filterCategoryThunk, filterTitleProductThunk, getProductsThunk } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Card, Col, InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ searchValue, setSearchValue ] = useState("")
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    dispatch(getProductsThunk());

    axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
    .then(res => setCategories(res.data.data.categories))
  }, []);

// console.log(products);

  return (
    <div>
      <Row>
        <Col lg={2} >
      <ListGroup>
        {categories.map((category) => (
          <ListGroup.Item key={category.name} 
          onClick={() => dispatch(filterCategoryThunk(category.id))}
          >
            {category.name}</ListGroup.Item>
        ))}
      </ListGroup>
      </Col>
      <Col>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button
          variant="outline-secondary"
          onClick={() => dispatch(filterTitleProductThunk(searchValue))}
        >
          Button
        </Button>
      </InputGroup>
      <Row xs={1} md={2} lg={3} className="g-3">
      {products.map((product) => (
          <Col key={product.id}>
            <Card  onClick={() => navigate(`/products/${product.id}`)}>
              <Card.Img variant="top" src={product.productImgs} />
              <Card.Body >
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="special">Precio especial: {product.price}</Card.Text>
                <Card.Text className="regular">Precio normal: {(product.price * 1.25)}</Card.Text>
                <Card.Text className="status">{product.status == 'active' ? 'Disponible' : 'No Disponible'}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

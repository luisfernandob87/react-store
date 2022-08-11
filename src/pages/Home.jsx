import React, { useEffect, useState } from "react";
import {
  filterCategoryThunk,
  filterTitleProductThunk,
  getProductsThunk,
} from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const products = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  // console.log(products);

  return (
    <>
      <main className="row">
        <aside className="col-lg-2">
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={category.name}
                onClick={() => dispatch(filterCategoryThunk(category.id))}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </aside>
        <Col>
          <section className="mb-3 input-group">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button
              onClick={() => dispatch(filterTitleProductThunk(searchValue))}
            >
              Button
            </Button>
          </section>
          <section className="g-3 row row-cols-lg-3 row-cols-md-2 row-cols-1">
            {products.map((product) => (
              <Col key={product.id}>
                <Card onClick={() => navigate(`/products/${product.id}`)}>
                  <Card.Img variant="top" src={product.productImgs[0]} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text className="special">
                      Precio especial: {product.price}
                    </Card.Text>
                    <Card.Text className="regular">
                      Precio normal: {product.price * 1.25}
                    </Card.Text>
                    <Card.Text className="status">
                      {product.status == "active"
                        ? "Disponible"
                        : "No Disponible"}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </section>
        </Col>
      </main>
    </>
  );
};

export default Home;

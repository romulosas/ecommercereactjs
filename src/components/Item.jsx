import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={item?.thumbnail} />
        <Card.Body>
          <Card.Title>{item?.title}</Card.Title>
          <Card.Text>{item?.category}</Card.Text>
        </Card.Body>
        <Card.Footer>{item?.description}</Card.Footer>
        <Container fluid={true}>
          <h4>${item?.price}</h4>
        </Container>
        <Button variant="primary" as={Link} to={`/item/${item.id}`}>
          More Details{"  "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-zoom-in"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
            />
            <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
            <path
              fillRule="evenodd"
              d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </Button>
      </Card>
    </Col>
  );
};

export default Item;

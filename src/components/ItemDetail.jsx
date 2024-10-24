import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ detail }) => {
  return (
    <Container fluid="md">
      <Card style={{ marginTop: 30 }}>
        <Card.Img
          variant="top"
          src={detail?.images[0]}
          style={{ width: 300 }}
        />
        <Card.Body>
          <Card.Title>
            <h1>{detail?.title}</h1>
          </Card.Title>
          <Card.Text>{detail?.category}</Card.Text>
        </Card.Body>
        <Card.Footer>{detail?.description}</Card.Footer>
        <Container fluid={true}>
          <h4>${detail?.price}</h4>
        </Container>
        <ItemCount />
      </Card>
    </Container>
  );
};

export default ItemDetail;

import Item from "./Item";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const ItemList = ({ items }) => {
  if (items.length === 0) {
    return (
      <>
        <Container fluid={true}>There's no result for this category.</Container>
      </>
    );
  }

  return (
    <Container className="mt-3 mb-3">
      <Row xs={1} md={2} lg={3} className="g-4 align-items-stretch">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;

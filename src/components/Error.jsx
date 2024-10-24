import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Container className="py-5">
      <Container
        className="d-flex justify-content-center 
            align-items-center flex-column 
            text-center w-100"
      >
        <Container className="bg_img w-50"></Container>
        <Container>
          <p className="display-4">Looks Like You're Lost</p>
          <p>The page you are looking for not available...</p>
          <Button
            as={Link}
            to="/"
            className="text-white text-decoration-none px-4 py-3 bg-success d-inline-block mt-2 rounded"
          >
            Go to Home
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Error;

import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { TiFlash } from "react-icons/ti";

const CardComponent = ({
  coverImage,
  title,
  synopsis,
  ratingsAverage,
  ratingsQuantity,
  id,
}) => {
  return (
    <Card style={{ borderRadius: "20px" }} className="single-card">
      <Card.Img
        variant="top"
        src={`/img/books/${coverImage}`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{synopsis}</Card.Text>
        <Card.Text className="card-rating">
          <FaStar /> <span className="rating-value"> {ratingsAverage}</span>
          <TiFlash /> <span className="rating-value"> {ratingsQuantity}</span>
        </Card.Text>
        <Link to={id}>
          <Button className="card-btn">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;